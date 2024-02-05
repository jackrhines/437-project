import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("art-card")
export class ArtCard extends LitElement {
    @property()
    src: string = ""

    @property()
    url: string = "/app"

    @property()
    title: string = ""

    @property()
    artist: string = ""

    @property()
    kudos: number = 0

    render() {
        return html`
            <div class="card" href=${this.url}>
                <a href=${this.url}>
                    <img src=${this.src} alt=${this.title} width="200" height="200" />
                    <div class="container">
                        <strong>${this.title}</strong>
                        <p>${this.artist}</p>
<!--                        <i>${this.kudos} kudos</i>-->
                    </div>
                </a>

            </div>
        `;
    }

    static styles = css`
      .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 200px;
        padding-bottom: 0.5em;
        background: var(--color-background-secondary);
        border-radius: 5px;
      }
      
      .card:hover {
        box-shadow: 0 16px 24px 0 rgba(0,0,0,0.5);
      }
      
      .container {
        padding: 2px 16px;
        display: flex;
        flex-direction: column;
      }
      
      a {
        text-decoration: none;
        color: black;
      }
      
      p {
        margin: 0;
      }

      img {
        border-radius: 5px 5px 0 0;
        background: white;
      }
    `
}