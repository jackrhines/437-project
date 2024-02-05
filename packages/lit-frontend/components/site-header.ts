import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js"
import {} from "./drop-down"
import {} from "./user-panel"

@customElement("site-header")
export class SiteHeader extends LitElement {
    render() {
        return html`
            <header>
            <h1 class="extra-padding">The Gallery</h1>
            <drop-down>
                <svg class="icon"><use href="/icons/gallery.svg#profile"/></svg>
                <ul slot="menu">
                    <li>
                        <user-panel name="Jack"></user-panel>
                    </li>
                    <li><hr /></li>
                    <li>Sign Out</li>
                </ul>
            </drop-down>
            </header>
        `
    }

    static styles = css`
      header {
        display: flex;
        background: var(--color-background-secondary);
        color: var(--color-text-standout);
        align-items: center;
        justify-content: space-between;
        padding: 2em;
      }

      svg.icon {
        display: inline;
        height: 3em;
        width: 3em;
        vertical-align: top;
        fill: currentColor;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
      }
    `
}