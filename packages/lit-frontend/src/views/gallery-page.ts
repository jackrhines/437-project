import {customElement, property} from "lit/decorators.js";
import * as App from '../app.ts';
import {css, html} from "lit";
import "../components/art-card.ts"
import {Art} from "../../../ts-models";

@customElement('gallery-page')
export class GalleryPageElement extends App.View {

  // attributeChangedCallback(
  //   name: string,
  //   _old: string | null,
  //   value: string | null
  // ) {
  //   console.log('GALLERY PAGEEEEE:', value)
  //   this.dispatchMessage({
  //     type: "GallerySelected",
  //   })
  //   super.attributeChangedCallback(name, _old, value);
  // }

  connectedCallback() {
    console.log('GalleryPage Callback')
    this.dispatchMessage({type: "GallerySelected"})
    super.connectedCallback();
  }

  @property({ reflect: true })
  get gallery() : Art[] | undefined {
    console.log('get gallery!')
    // this.dispatchMessage({type:"GallerySelected"})
    return this.getFromModel("gallery")
    // return
  }

  render () {
    return html`
      <h2 class="gallery-heading">Best of the Week</h2>
      <section class="gallery-display" id="top-submissions">
          ${this.gallery ? this.gallery.map(
                  art => html`
            <art-card
                src="${art.image}"
                url="/app/art/${art.artId}"
                title="${art.title}"
                artist="${art.artist}"
            ></art-card>`) : ''}
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
      flex-wrap: wrap;
      row-gap: 1em;
      column-gap: 1em;
    }

    .gallery-element {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `


}