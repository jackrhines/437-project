import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("hello-world")
export class HelloWorldElement extends LitElement {
    render() {
        return html`<h2>
            Hello, <slot>world</slot>!
        </h2>`;
    }

    static styles = css`
        .fancy {
          font-family: var(--font-family-body);
          font-style: italic;
          color: var(--color-accent);
        }
    
        ::slotted(*) {
          display: inline;
        }`;
}