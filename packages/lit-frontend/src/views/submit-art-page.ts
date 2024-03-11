import {customElement, state} from "lit/decorators.js";
import * as App from '../app.ts';
import {css, html} from "lit";
import "../components/art-card.ts"
import {Art} from "../../../ts-models";

@customElement('submit-art-page')
export class SubmitArtPage extends App.View {
  @state()
  image = ''

  render () {
    return html`
      <h2 class="gallery-heading">Submit Art</h2>
      <form @submit=${this._handleSubmit}>
            <dl>
              <dt>Title</dt>
              <dd><input name="title" .value="" /></dd>
              <dt>Artist</dt>
              <dd><input name="artist" .value="" /></dd>
              <dt>Description</dt>
              <dd><input name="description" .value="" /></dd>
              <dt>Genres</dt>
              <dd><input name="genres" .value="" /></dd>
              <dt>Mediums</dt>
              <dd><input name="mediums" .value="" /></dd>
              <dt>Image</dt>
              <dd>
                <input
                  type="file"
                  @change=${this._handleFileSelected} />
              </dd>
            </dl>
            <button type="submit">Submit</button>
            <a href=${window.location.pathname.split("?")[0]}>
              Done
            </a>
          </form>
    `
  }

  static styles = css`

  `
  _handleSubmit(event: Event) {
    event.preventDefault(); // prevent browser from submitting form data itself

    const target = event.target as HTMLFormElement;
    const formdata = new FormData(target);
    let entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]))

    entries.push([
      "image",
      this.image || ""
    ]);

    const json = Object.assign(Object.fromEntries(entries), {
      location
    });

    console.log("Submitting Form", json);

    this.dispatchMessage({
      type: "ArtSubmitted",
      art: json as Art
    });
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