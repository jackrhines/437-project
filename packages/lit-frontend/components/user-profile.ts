import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../models/profile";
import {serverPath} from "../utils/rest";
import {} from "./hello-world";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
    @property()
    path: string = "";

    @state()
    profile?: Profile;

    _fetchData(path: string) {
        fetch(serverPath(path))
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            })
            .then((json: unknown) => {
                if (json) this.profile = json as Profile;
            });
    }

    connectedCallback() {
        if (this.path) {
            this._fetchData(this.path);
        }
        super.connectedCallback();
    }

    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        if (name === "path" && oldValue !== newValue && oldValue) {
            this._fetchData(newValue);
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        // fill this in later
        return html`<p>
            <hello-world>${this.profile.nickname}</hello-world>
            <p><strong>Location:</strong> ${this.profile.city}</p>
            <p><strong>Favorite Genres:</strong> ${JSON.stringify(this.profile.genres) || "None"}</p>
            <p><strong>Favorite Mediums:</strong> ${JSON.stringify(this.profile.mediums) || "None"}</p>
            <p><strong>Favorite Artists:</strong> ${JSON.stringify(this.profile.artists) || "None"}</p>
        </p>`;
    }

    static styles = css`...`;
}