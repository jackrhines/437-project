import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {} from "./hello-world";
import {} from "./toggle-switch"

@customElement("user-panel")
class UserPanelElement extends LitElement {
    @property()
    name: string = "";

    render() {
        return html`
            <dl class="column">
                <svg class="icon"><use href="/icons/gallery.svg#profile"/></svg>
                <hello-world>${this.name}</hello-world>
                <a href="/app/profile.html">Profile</a>
                <a href="/app/submissions.html">Submissions</a>
                <a href="/app/favorites.html">Favorites</a>
                <hr />
                <toggle-switch>Dark Mode</toggle-switch>
            </dl>

        `
    }

    static styles = css`
      .column {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 1em;
      }
    `
}