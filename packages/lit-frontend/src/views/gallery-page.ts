import {customElement} from "lit/decorators.js";
import * as App from '../app.ts';
import {css, html} from "lit";
import "../components/art-card.ts"

@customElement('gallery-page')
export class GalleryPageElement extends App.View {

  render () {
    return html`
      <h2 class="gallery-heading">Best of the Week</h2>
      <section class="gallery-display" id="top-submissions">
          <art-card
                  src="/art/desert-sunset.jpg"
                  url="/app/desert-sunset.html"
                  title="Desert Sunset"
                  artist="Joel Embiid">
          </art-card>
          <art-card
                  src="/art/track-star.jpg"
                  url="/app/desert-sunset.html"
                  title="Track Star"
                  artist="Joel Embiid">
          </art-card>
          <art-card
                  src="/art/Fireball.jpg"
                  url="/app/desert-sunset.html"
                  title="Fireball"
                  artist="Joel Embiid">
          </art-card>
      </section>
    `
  }

  static styles = css`
    .gallery-heading {
      text-align: center;
      padding: 2%;
    }

    .gallery-display {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-content: center;
      padding: 1rem;
    }

    .gallery-element {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `


}