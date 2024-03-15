import { css, html } from "lit";
import {
  customElement,
  property,
  state
} from "lit/decorators.js";
import { Art } from "ts-models";
import * as App from "../app";

type ArtLocation = Location & {
  params: { artId: string };
};

@customElement("art-page")
export class ArtPageElement extends App.View {
  @property({ attribute: false })
  location?: ArtLocation;

  @property({ attribute: "artId", reflect: true })
  get artId() {
    return this.location?.params.artId;
  }

  @property({ reflect: true })
  get edit(): boolean {
    if (this.location?.search) {
      console.log("Checking for edit", this.location);
      const params = new URLSearchParams(this.location.search);
      return params.has("edit");
    }
    return false;
  }

  @property()
  get art() {
    const art = this.getFromModel<Art>("art");
    console.log('GET ART', art)
    return art
  }

  @state()
  image? = this.art?.image;

  connectedCallback() {
    console.log("Art Page Callback:", this.artId);
    this.dispatchMessage({
      type: "ArtSelected",
      artId: this.artId || ''
    });
    super.connectedCallback();
  }

  // attributeChangedCallback(
  //   name: string,
  //   oldValue: string,
  //   newValue: string
  // ) {
  //   if (
  //     name === "artId" &&
  //     oldValue !== newValue &&
  //     newValue
  //   ) {
  //     console.log("Art Page:", newValue);
  //     this.dispatchMessage({
  //       type: "ArtSelected",
  //       artId: newValue
  //     });
  //   }
  //   super.attributeChangedCallback(name, oldValue, newValue);
  // }

  render() {
    const {
      title,
      artist,
      description,
      image,
      genres = [],
      mediums = [],
    } = this.art as Art;
    // const artName = this.art?.title;
    const imageUrl = this.image || image;

    console.log("Art:", this.art);

    const renderDisplayOrForm = () => {
      if (this.edit) {
        // const { lat, lon } = location || {};

        return html`
          <form @submit=${this._handleSubmit}>
            <dl>
              <dt>Title</dt>
              <dd><input name="title" .value=${title} /></dd>
              <dt>Artist</dt>
              <dd><input name="artist" .value=${artist} /></dd>
              <dt>Description</dt>
              <dd><input name="description" .value=${description} /></dd>
              <dt>Genres</dt>
              <dd><input name="genres" .value=${genres.join(', ')} /></dd>
              <dt>Mediums</dt>
              <dd><input name="mediums" .value=${mediums.join(', ')} /></dd>
              <dt>Image</dt>
              <dd>
                <input
                  type="file"
                  @change=${this._handleFileSelected} />
              </dd>
              <dd>
                <img src=${imageUrl} />
              </dd>
            </dl>
            <button type="submit">Submit</button>
            <a href=${window.location.pathname.split("?")[0]}>
              Done
            </a>
          </form>
        `;
      } else {
        return html`
          <div>
            <h2>${title}</h2>
            <p>${description}</p>
            <img src=${imageUrl} />
            <a href="?edit=t">Edit</a>
          </div>
        `;
      }
    };

    return html`
        ${renderDisplayOrForm()}
    `;
  }

  // <main class="page">${renderDisplayOrForm()}</main>


  static styles =
    css`
      .page {
        --page-grids: 8;

        display: grid;
        grid-template-columns: repeat(var(--page-grids), 1fr);
        gap: var(--size-spacing-medium);
      }
      .page > header {
        grid-column: 1 / span 3;
      }
      .page > .hero {
        grid-column: span min(5, var(--page-grids)) / -1;
      }
      .page > .excursions {
        display: contents;
        list-style: none;
        padding: 0;
      }
      .excursions > * {
        grid-column: auto / span 2;
      }
      @media screen and (max-width: 50rem) {
        .page {
          --page-grids: 4;
        }
      }
      @media screen and (max-width: 30rem) {
        .page {
          --page-grids: 2;
        }
      }
      @media screen and (min-width: 75rem) and (max-width: 100rem) {
        .page {
          --page-grids: 12;
        }
        .page > .hero {
          grid-column-start: span 8;
          grid-row: auto / span 2;
        }
      }
      @media screen and (min-width: 100rem) {
        .page {
          --page-grids: 16;
        }
        .page > .hero {
          grid-column: 5 / span 8;
          grid-row: auto / span 3;
        }
      }
    `;

  _handleSubmit(event: Event) {
    event.preventDefault(); // prevent browser from submitting form data itself

    if (this.art && this.artId) {
      const target = event.target as HTMLFormElement;
      const formdata = new FormData(target);
      // let extract: { [key: string]: number } = {};
      let entries = Array.from(formdata.entries())
        .map(([k, v]) => (v === "" ? [k] : [k, v]))

      entries.push([
        "image",
        this.image || this.art.image || ""
      ]);

      const json = Object.assign(Object.fromEntries(entries), {
        location
      });

      console.log("Submitting Form", json);

      this.dispatchMessage({
        type: "ArtSaved",
        artId: this.artId,
        art: json as Art
      });
    }
  }

  _handleFileSelected(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const selectedFile = (target.files as FileList)[0];

    const reader: Promise<ArrayBuffer> = new Promise(
      (resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result as ArrayBuffer);
        fr.onerror = (err) => reject(err);
        fr.readAsArrayBuffer(selectedFile);
      }
    );

    reader.then((buffer: ArrayBuffer) => {
      const { name, size, type } = selectedFile;
      const query = new URLSearchParams({ filename: name });
      const url = new URL("/images", document.location.origin);
      url.search = query.toString();

      console.log("Uploading file:", selectedFile);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": type,
          "Content-Length": size.toString()
        },
        body: buffer
      })
        .then((res) => {
          if (res.status === 201) return res.json();
          else throw res.status;
        })
        .then((json: { url: string } | undefined) => {
          if (json) {
            console.log("Image has been uploaded to", json.url);
            this.image = json.url;
          } else throw "No JSON response";
        })
        .catch((error) => {
          console.log("Upload failed", error);
        });
    });
  }
}