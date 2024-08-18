const MAX_GAIN = .2;
const INIT_GAIN = MAX_GAIN * 0.8;
const MAX_FREQ = 1_000;

export class AudioOscillator extends HTMLElement {
  oscillatorA: OscillatorNode | null = null;
  oscillatorB: OscillatorNode | null = null;
  aWaveType: OscillatorType = "sine";
  bWaveType: OscillatorType = "triangle";
  gainNodeBus: GainNode;
  gainNodeMaster: GainNode;
  gainNodeA: GainNode;
  gainNodeB: GainNode;
  analyser: AnalyserNode;

  controllerHeight: number;
  controllerWidth: number;
  controllerPoint: HTMLElement | null;

  canvas: HTMLCanvasElement | null;
  canvasContext: CanvasRenderingContext2D | null;

  private _playing = false;

  constructor(public audioContext: AudioContext = new (window.AudioContext || (window as any).webkitAudioContext)()) {
    super();

    this.gainNodeBus = audioContext.createGain();

    this.gainNodeA = audioContext.createGain();
    this.gainNodeB = audioContext.createGain();
    this.gainNodeMaster = audioContext.createGain();
    this.analyser = audioContext.createAnalyser();
    this.analyser.fftSize = 1024;
    this.analyser.smoothingTimeConstant = 0;
    this.gainNodeMaster.gain.value = INIT_GAIN;
    this.gainNodeBus.gain.value = .7;
    this.gainNodeA.gain.value = .5;
    this.gainNodeB.gain.value = .5;

    this.gainNodeA.connect(this.gainNodeBus);
    this.gainNodeB.connect(this.gainNodeBus);
    this.gainNodeBus.connect(this.analyser);
    this.analyser.connect(this.gainNodeMaster);
    this.gainNodeMaster.connect(this.audioContext.destination);

    const template = document.createElement("template");
    template.innerHTML = `
      <div class="container">
      <div class="outer">
        <div class="oscillator">
          <h2 class="__title">
            Oscillator
          </h2>
          <div class="__container">
            <div class="__configuration">
              <div>
                <select class="__type-options--a">
                  <option value="sine">sine</option>
                  <option value="triangle">triangle</option>
                  <option value="square">square</option>
                  <option value="sawtooth">sawtooth</option>
                </select>
                <select class="__type-options--b">
                  <option value="sine">sine</option>
                  <option value="triangle">triangle</option>
                  <option value="square">square</option>
                  <option value="sawtooth">sawtooth</option>
                </select>
              </div>
              <div class="__volume">
                <label for="gain">Volume</label>
                <input type="range" id="gain" step=".001" max="1">
              </div>
            </div>

            <div id="pad" class="__pad">
              <div aria-hidden class="__point" style=""></div>
            </div>
          </div>
        </div>
        <div class="oscilloscope">
          <h2 class="__title">
            Oscilloscope
          </h2>
          <div class="__container">
            <canvas id="display"></canvas>
          </div>
        </div>
      </div>
      </div>

      <style>
        :host {
          box-sizing: border-box;
        }
        .container {
          container-type: inline-size;
          width: 100%;
          height: 100%;
          max-width: 1200px;
        }

        .outer {
          display: grid;
          gap: 16px;

          @container (min-width: 900px) { 
            justify-content: space-between;
            grid-template-rows: auto;
            grid-template-columns: 1fr 1fr;
          }
        }

        .__title {
          width: 100%;
          margin: 8px 0;
        }

        .oscillator {
          display: grid;
          width: 100%;

          .__title {
            padding-left: 16px;
          }

          .__pad {
            position: relative;
            aspect-ratio: 1; 
            border: 2px solid white;
            margin: 16px;
            background-color: rgba(155,155,155,0.2);

            &::after {
              content: "Frequency";
              bottom: -24px;
              right: 45%;
              text-align: center;
              position: absolute;
            }
            &::before {
              content: "Blend";
              left: -36px;
              bottom: 45%;
              text-align: center;
              position: absolute;
              transform: rotate(270deg);
            } 
          }
          .__point {
            pointer-events: none; 
            position: absolute; 
            bottom: 0; 
            left: 0; 
            width: 20px; 
            height: 20px; 
            border: 4px solid gray; 
            border-radius: 50%;
          }
          .__configuration {
            display: flex;
            justify-content: space-between;
            padding: 16px;
          }


          .__volume {
            display: flex;
            align-items: center;
            gap: 8px;
          }
        }

        .oscilloscope {
          display: grid;
          grid-template-rows: auto 1fr;

          .__container {
            display: flex;
            height: 100%;
            align-items: center;
          }

          canvas {
            border: 1px solid black;
            display: block;
            background-color: #000;
            width: 100%;
            aspect-ratio: 16/9;
          }
        }
      </style>
    `
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));

    const gain = shadow.querySelector<HTMLInputElement>("#gain");
    const controller = shadow.querySelector<HTMLElement>("#pad");
    const aTypeSelector = shadow.querySelector<HTMLInputElement>(".__type-options--a");
    const bTypeSelector = shadow.querySelector<HTMLInputElement>(".__type-options--b");
    this.canvas = shadow.querySelector<HTMLCanvasElement>("#display");
    this.canvasContext = this.canvas?.getContext("2d") ?? null;

    this.controllerPoint = controller?.querySelector(".__point") ?? null;
    this.controllerHeight = controller?.clientHeight ?? 0;
    this.controllerWidth = controller?.clientWidth ?? 0;

    if (gain) {
      gain.value = (INIT_GAIN / MAX_GAIN).toString();
    }

    if (aTypeSelector) {
      aTypeSelector.value = this.aWaveType;
    }

    if (bTypeSelector) {
      bTypeSelector.value = this.bWaveType;
    }


    aTypeSelector?.addEventListener("change", (e) => this.aWaveType = (e.target as HTMLInputElement).value as OscillatorType);
    bTypeSelector?.addEventListener("change", (e) => this.bWaveType = (e.target as HTMLInputElement).value as OscillatorType);
    gain?.addEventListener("input", (e) => { this.gainNodeMaster.gain.value = parseFloat((e.target as HTMLInputElement).value) * MAX_GAIN; });
    controller?.addEventListener("mousedown", this.start.bind(this));
    controller?.addEventListener("mousemove", this.move.bind(this));
    window.addEventListener("mouseup", () => this.stop());
    window.addEventListener("resize", () => {
      this.controllerHeight = controller?.offsetHeight ?? 0;
      this.controllerWidth = controller?.offsetWidth ?? 0;
    });
  }

  set playing(is: boolean) {
    this._playing = is;

    if (this.playing) {
      if (this.controllerPoint) {
        this.controllerPoint.style.borderColor = "green";
      }
    } else {
      if (this.controllerPoint) {
        this.controllerPoint.style.borderColor = "gray";
      }
    }
  }

  get playing() {
    return this._playing;
  }

  start(event: MouseEvent) {
    this.oscillatorA = this.audioContext.createOscillator();
    this.oscillatorB = this.audioContext.createOscillator();
    this.oscillatorA.type = this.aWaveType;
    this.oscillatorB.type = this.bWaveType;

    this.oscillatorA.connect(this.gainNodeA);
    this.oscillatorB.connect(this.gainNodeB);

    this.playing = true;
    this.move(event);

    this.oscillatorA.start();
    this.oscillatorB.start();
    this.drawOscilloscope();
  }

  stop() {
    this.oscillatorA?.stop();
    this.oscillatorB?.stop();
    this.oscillatorA = null;
    this.oscillatorB = null;
    this.playing = false;
  }

  move(event: MouseEvent) {
    if (!this.playing) {
      return;
    }
    const { offsetX, offsetY } = event;
    const frequency = offsetX / this.controllerWidth * MAX_FREQ;
    const fade = offsetY / this.controllerHeight;
    this.setFrequency(frequency);
    this.crossfade(fade);

    if (this.controllerPoint) {
      this.controllerPoint.style.top = `${Math.max(offsetY - 28, 0)}px`;
      this.controllerPoint.style.left = `${Math.max(offsetX - 28, 0)}px`;
    }
  }

  setFrequency(frequency: number) {
    if (!this.oscillatorB || !this.oscillatorA) {
      return;
    }
    this.oscillatorA.frequency.value = frequency;
    this.oscillatorB.frequency.value = frequency;

  }

  crossfade(factor: number) {
    this.gainNodeA.gain.value = 1 - factor;
    this.gainNodeB.gain.value = factor;
  }

  drawOscilloscope() {
    if (!this.canvas || !this.canvasContext) {
      return;
    }

    if (this.playing) {
      requestAnimationFrame(this.drawOscilloscope.bind(this));
    }

    const bufferLength = this.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    this.analyser.getByteTimeDomainData(dataArray);

    this.canvasContext.fillStyle = 'black';
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.canvasContext.lineWidth = 4;
    this.canvasContext.strokeStyle = 'green';

    this.canvasContext.beginPath();

    const sliceWidth = this.canvas.width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = v * this.canvas.height / 2;

      if (i === 0) {
        this.canvasContext.moveTo(x, y);
      } else {
        this.canvasContext.lineTo(x, y);
      }

      x += sliceWidth;
    }

    this.canvasContext.lineTo(this.canvas.width, this.canvas.height / 2);
    this.canvasContext.stroke();
  }

  cancelAnimation() {

  }
}
