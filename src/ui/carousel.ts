export class UiCarousel extends HTMLElement {
  prevButton: HTMLButtonElement | null | undefined;
  nextButton: HTMLButtonElement | null | undefined;
  track: HTMLElement | null | undefined;
  items: HTMLElement[] = [];
  private trackWidth = 0;
  private visibleWidth = 0;
  private itemWidth = 0;
  private visibleItems = 0;
  private index = 0;
  gapWidth = 16;

  listeners: (() => void)[] = [];

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `
      <div class="carousel">
        <div class="button previous">
          <slot name="previous"></slot>
        </div>
        <div class="container">
        <slot name="items"></slot>
        </div>
        <div class="button next">
          <slot name="next"></slot>
        </div>
      </div>

      <style>
        .carousel {
          position: relative;
        }

        .container {
          overflow: hidden;
          @media (pointer: coarse) {
            overflow: scroll;
	    scroll-snap-type: x proximit:y;
	    scroll-behavior: smooth;
            scroll-padding-left: ${this.gapWidth}px;
          }
        }

        .button {
          position: absolute;
          bottom: 0;
          top: 0;
          z-index: 90;

          &.previous {
            left: 0;
          }

          &.next {
            right: 0;
          }

          @media (pointer: coarse) {
            display: none;
          }
        }

        ::slotted(ul) {
          display: grid;
          grid-template-rows: 1fr; 
          grid-auto-flow: column;
          gap: ${this.gapWidth}px;
          padding: 0;
          margin: ${this.gapWidth}px;
          transition: transform 0.5s ease-in-out;
          max-width: fit-content;
          @media (prefers-reduced-motion: reduce) {
            transition: none;
          }
        }
      </style>
    `;
    shadow.append(template.content.cloneNode(true));
  }

  addListener<T extends HTMLElement | Window>(
    element: T | null | undefined,
    type: T extends HTMLElement
      ? keyof HTMLElementEventMap
      : keyof WindowEventMap,
    func: EventListenerOrEventListenerObject,
  ): void {
    if (!element) return;
    element.addEventListener(type, func);
    this.listeners.push(() => element.removeEventListener(type, func));
  }

  removeListeners() {
    this.listeners.forEach((remove) => remove());
  }

  connectedCallback() {
    const prevSlot = this.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="previous"]',
    );
    const nextSlot =
      this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="next"]');
    const trackSlot =
      this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="items"]');

    this.prevButton = prevSlot?.assignedElements()[0] as HTMLButtonElement;
    this.nextButton = nextSlot?.assignedElements()[0] as HTMLButtonElement;
    this.track = trackSlot?.assignedElements()[0] as HTMLElement;
    this.items = Array.from(this.track?.children ?? []) as HTMLElement[];

    this.addListener(this.prevButton, "click", () => this.move(-1));
    this.addListener(this.nextButton, "click", () => this.move(1));
    this.addListener(trackSlot, "slotchange", () => {
      this.track = trackSlot?.assignedElements()[0] as HTMLElement;
      this.items = Array.from(this.track?.children ?? []) as HTMLElement[];
      this.updateDimensions();
    });
    this.addListener(window, "resize", () => this.updateDimensions());
    this.updateDimensions();
  }

  disconnectedCallback() {
    this.removeListeners();
  }

  move(direction: 1 | -1) {
    this.index = (this.index || 0) + direction * this.visibleItems;
    this.index = Math.max(
      0,
      Math.min(this.index, this.items.length - this.visibleItems),
    );
    this.updatePosition();
  }

  updateDimensions() {
    if (!this.items.length) return;

    if (this.track) {
      this.trackWidth = this.track?.scrollWidth ?? 0;
      this.visibleWidth = this.track?.offsetWidth ?? 0;
      this.itemWidth = this.items[0].offsetWidth + this.gapWidth || 0;
      this.visibleItems = Math.floor(this.visibleWidth / this.itemWidth);
      this.index = 0;
      this.updatePosition();
    }

    if (this.visibleItems >= this.items.length) {
      this.nextButton!.style.display = "none";
      this.prevButton!.style.display = "none";
    } else {
      this.nextButton!.style.display = "inline";
      this.prevButton!.style.display = "inline";
    }
  }

  updatePosition() {
    if (!this.prevButton || !this.nextButton) return;

    this.prevButton!.disabled = this.index === 0;
    this.nextButton!.disabled =
      this.index + this.visibleItems >= this.items.length;
    const offset = -Math.min(
      this.trackWidth - this.visibleWidth,
      this.index * this.itemWidth,
    );

    if (this.track) {
      this.track.style.transform = `translateX(${offset}px)`;
    }
  }
}
