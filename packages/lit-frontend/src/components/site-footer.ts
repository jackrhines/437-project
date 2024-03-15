import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js"
import {} from "./drop-down"
import {} from "./user-panel"

@customElement("site-footer")
export class SiteFooter extends LitElement {
    render() {
        return html`
            <footer class="gallery-display" id="toolbar">
                <section>
                    <h2>Looking for something else?</h2>
                    <a class="white-text" href="/app/gallery">
                        <svg class="icon">
                            <use href="/icons/gallery.svg#easel-icon" />
                        </svg>See more categories
                    </a>
                </section>

                <section>
                    <h2>Submit your own artwork</h2>
                    <a class="white-text" href="/app/submit-art">
                        <svg class="icon">
                            <use href="/icons/gallery.svg#easel-icon" />
                        </svg>It's easy</a>
                </section>
            </footer>
        `
    }

    static styles = css`
      footer {
        display: flex;
        background: var(--color-background-secondary);
        color: var(--color-text-standout);
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 2em;
        position: sticky;
        bottom: 0;
        width: 100%;  
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
      
      a {
        color: var(--color-text-standout)
      }
    `
}