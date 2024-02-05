import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("art-card")
export class ArtCard extends LitElement {
    @property()
    src: string = ""

    @property()
    url: string = ""

    @property()
    title: string = ""

    @property()
    artist: string = ""

    render() {
        return html`
            <div class="card" href=${this.url}>
                <img src=${this.src} alt=${this.title} width="200" height="200" />
                <div class="container">
                    <strong>${this.title}</strong>
                    <p>by ${this.artist}</p>
                </div>
            </div>
        `;
    }

    static styles = css`
      .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 210px;
        padding: 0.5em;
        background: var(--color-background-secondary)
      }
      
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
      
      .container {
        padding: 2px 16px;
        display: flex;
        flex-direction: column;
      }
    `
}