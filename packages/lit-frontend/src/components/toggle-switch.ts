import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("toggle-switch")
//@ts-ignore
class ToggleSwitchElement extends LitElement {
    @property({ reflect: true, type: Boolean })
    on: boolean = false;

    // @property({ reflect: true, type: Function })
    // handleChange: Function = this._handleChange

    render() {
        return html`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`;
    }

    static styles = css`
      :host {
        display: block;
      }
      label {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: var(--size-spacing-medium);
        line-height: 2em;
      }
      .slider {
        display: inline-block;
        //border: 1px solid var(--color-border-control);
        border-radius: 0.75em;
        background-color: var(--color-background-control);
        height: 1.5em;
        width: 2.75em;
        position: relative;
        transition: background-color
        var(--time-transition-control);
      }
      .slider:has(input:checked) {
        background-color: var(--color-accent);
      }
      input {
        appearance: none;
        background-color: var(--color-foreground-control);
        border-radius: 50%;
        width: 1.25em;
        height: 1.25em;
        vertical-align: center;
        position: absolute;
        left: 0;
        transition: left var(--time-transition-control);
      }
      input:checked {
        left: 1.5em;
      }
    `;

    _handleChange(ev: Event) {
        const target = <HTMLInputElement>ev.target;
        this.on = target?.checked;

        console.log(this.on)

        const body = document.body

        this.on ? body.style.background = "dimgray" : body.style.background = "blanchedalmond"
        // body.style.background = "dimgray";
        // body.classList.toggle("color-background-primary-dark");
        // body.classList.add("color-background-primary-dark");
    }
}