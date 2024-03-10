import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./hello-world";
import "./toggle-switch";
import {Profile} from "../../../ts-models";

@customElement("user-panel")
//@ts-ignore
class UserPanelElement extends LitElement {
    @property({ attribute: false })
    using?: Profile;

    get profile() {
        return this.using || ({} as Profile);
    }

    render() {
        return html`
            <dl class="column">
                <svg class="icon"><use href="/icons/gallery.svg#profile"/></svg>
                <hello-world>${this.profile.nickname}</hello-world>
                ${console.log('PANEL PROFILE', this.profile)}
                <a href="/app/profile/${this.profile.userid}">Profile</a>
                <a href="/app/submissions">Submissions</a>
                <a href="/app/favorites">Favorites</a>
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