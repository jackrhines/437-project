import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../models/profile";
import {serverPath} from "../utils/rest";
import {} from "./hello-world";

@customElement("view-profile")
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

    static styles = css``;
}

@customElement("edit-profile")
export class UserProfileEditElement extends UserProfileElement {
    render() {
        return html`
            <form @submit=${this._handleSubmit}>
                <dl>
                    <dt>Username</dt>
                    <dd><input name="userid" disabled .value=${this.profile.userid}/></dd>
                    <dt>Name</dt>
                    <dd><input name="name" disabled .value=${this.profile.name}/></dd>
                    <dt>Nickname</dt>
                    <dd><input name="nickname" disabled .value=${this.profile.nickname}/></dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        `;
    }

    static styles = [...UserProfileElement.styles, css``];

    _handleSubmit(ev: Event) {
        ev.preventDefault(); // prevent browser from submitting form data itself

        const target = ev.target as HTMLFormElement;
        const formdata = new FormData(target);
        const entries = Array.from(formdata.entries())
            .map(([k, v]) => (v === "" ? [k] : [k, v]))
            .map(([k, v]) =>
                k === "genres" || k === "mediums" || k === "artists"
                    ? [k, (v as string).split(",").map((s) => s.trim())]
                    : [k, v]
            );
        const json = Object.fromEntries(entries);

        this._putData(json);
    }

    _putData(json: Profile) {
        fetch(serverPath(this.path), {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json)
        })
            .then((response) => {
                if (response.status === 200) return response.json();
                else return null;
            })
            .then((json: unknown) => {
                if (json) this.profile = json as Profile;
            })
            .catch((err) =>
                console.log("Failed to PUT form data", err)
            );
    }
}