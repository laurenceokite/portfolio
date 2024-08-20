export class SkillCard extends HTMLElement {
  private template = document.createElement("template");
  private _blurbs: string[] = [];
  private blurbEl: HTMLElement | null = null;
  private imageEl: HTMLImageElement | null = null;

  static observedAttributes = ["blurbs", "data-image-url"];

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    this.template.innerHTML = `
      <div class="skill-card">
        <div class="__image">
          <img 
            alt=""
            data-image-url
          >
        </div>
        <div class="__text">
        </div>
      </div>

      <style>
        .skill-card {
          container-type: inline-size;
          aspect-ratio: 16/9;
          display: grid;

          width: 40vw;
          max-width: 600px;
          min-width: 350px;
          grid-template-rows: 1fr 1fr;

          .__image {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 0;
            overflow: hidden;

            img {
              width: 50%;
              max-height: 90%;
            }

            @container (min-width: 500px) {
              padding: 16px 0;
            }
          }

          .__text {
            font-family: "Ubuntu Mono", monospace;
            background-color: rgba(155, 155, 155, 0.2);
            border-radius: 0 0 6px 6px;
            list-style-type: none;
            font-size: .8rem;
            text-align: center;
            line-height: 1.25;
            display: flex;
            padding: 16px;
            flex-direction: column;

            @container (min-width: 500px) {
              font-size: 1.1rem;
            }

            p {
              margin: 8px 8px 0;

              @container (min-width: 500px) {
                margin: 12px 12px 0;
              }
            }
          }
        }
      </style>
    `;

    shadow.append(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    this.blurbEl = this.shadowRoot?.querySelector(".__text") ?? null;
    this.imageEl = this.shadowRoot?.querySelector("[data-image-url]") ?? null;

    if (this.imageEl) {
      this.imageEl.src = this.dataset.imageUrl ?? "";
    }

    this.appendBlurbs();
  }

  get blurbs() {
    return this._blurbs;
  }

  set blurbs(value: string[]) {
    this._blurbs = value;
    this.setAttribute("blurbs", JSON.stringify(value));
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    if (name === "blurbs") {
      this.appendBlurbs();
    }
    if (name === "data-image-url" && this.imageEl) {
      this.imageEl.src = newValue;
    }

  }

  private appendBlurbs() {
    if (!this.blurbEl) return;
    const nodes = this._blurbs.map(blurb => {
      const node = document.createElement("p");
      node.innerText = blurb;
      return node;
    });
    this.blurbEl.replaceChildren(...nodes);
  }
}

