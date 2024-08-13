export class UiCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement("template");

    template.innerHTML = `
      <div class="ui-card">
        <slot></slot>
      </div>

      <style id="style">
        .ui-card {
          position: relative;
          border: 2px solid #aaa;
          border-radius: 8px;
          box-shadow: 0 0 12px 0 rgba(155,155,155, 0.3);

          &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(155, 155, 155, 0.1) 100%
            );
            pointer-events: none;
          }

          .title {
            position: absolute;
            right: 24px;
            top: 12px;
            margin: 0;
            font-weight: 500;
            font-size: 1.25rem;
            line-height: 1;
          }
        }
      </style>
    `;

    shadow.append(template.content.cloneNode(true));
  }
}
