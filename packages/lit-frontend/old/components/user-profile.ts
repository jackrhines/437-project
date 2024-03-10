import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../../../ts-models/src/profile";
import {serverPath} from "../utils/rest";
import {} from "./hello-world";

@customElement("view-profile")
export class UserProfileElement extends LitElement {
    @property()
    path: string = "";

    @state()
    profile?: Profile;

    @property()
    handleEdit = () => {};

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

    dispatchClick() {
        this.dispatchEvent(new CustomEvent("edit", {
            bubbles: true,
            detail: true}));
    }

    render() {
        // fill this in later
        return html`<p>
            <hello-world>${this.profile.nickname}</hello-world>
            <p><strong>Location:</strong> ${this.profile.city}</p>
            <p><strong>Favorite Genres:</strong> ${this.profile.genres.join(", ") || "None"}</p>
            <p><strong>Favorite Mediums:</strong> ${this.profile.mediums.join(", ") || "None"}</p>
            <p><strong>Favorite Artists:</strong> ${this.profile.artists.join(", ") || "None"}</p>
            <button @click=${this.dispatchClick}>
                Edit Profile
            </button>
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
                    <dd><input name="name" .value=${this.profile.name}/></dd>
                    <dt>Nickname</dt>
                    <dd><input name="nickname" .value=${this.profile.nickname}/></dd>
                    <dt>City</dt>
                    <dd><input name="city" .value=${this.profile.city}/></dd>
                    <dt>Genres</dt>
                    <dd>
                        <input name="genres" .value=${this.profile.genres.join(", ")} />
                    </dd>
                    <dt>Mediums</dt>
                    <dd>
                        <input name="mediums" .value=${this.profile.mediums.join(", ")} />
                    </dd>
                    <dt>Artists</dt>
                    <dd>
                        <input name="artists" .value=${this.profile.artists.join(", ")} />
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        `;
    }

    dispatchClick() {
        this.dispatchEvent(new CustomEvent("edit", {
            bubbles: true,
            detail: false}));
    }

    static styles = css`
        dt {
            font-family: var(--font-heading);
            font-size: 1em;
        }
        `;

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
        this.dispatchClick();
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