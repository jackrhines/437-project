import {css, html, LitElement, unsafeCSS} from "lit";
import {customElement, property, state} from "lit/decorators.js"
import "./drop-down"
import "./user-panel"
import resetCSS from "/src/styles/reset.css?inline";
import tokenCSS from "/src/styles/tokens.css?inline";
import { consume } from "@lit/context";
import { APIUser, APIRequest } from "../rest";
import { authContext } from "./auth-required";
import { Profile } from "ts-models";
@customElement("site-header")
export class SiteHeader extends LitElement {
  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  render() {
        return html`
            <header>
            <a href="/app/" class="no-styling"><h1 class="extra-padding">The Gallery</h1></a>
            <drop-down>
                ${this.renderAvatar()}
<!--                <svg class="icon"><use href="/icons/gallery.svg#profile"/></svg>-->
                <ul slot="menu">
                    <li>
                        <user-panel .using=${this.profile}></user-panel>
                    </li>
                    <li><hr /></li>
                    <li>
                        <button @click=${this._signOut}>
                            Sign Out
                        </button>
                    </li>
                </ul>
            </drop-down>
            </header>
        `
    }

    static styles = [
      unsafeCSS(resetCSS),
      unsafeCSS(tokenCSS),
      css`
      header {
        display: flex;
        background: var(--color-background-secondary);
        color: var(--color-text-standout);
        align-items: center;
        justify-content: space-between;
        padding: 2em;
      }

      svg.icon {
        display: inline;
        height: 3em;
        width: 3em;
        vertical-align: top;
        fill: currentColor;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
      }
      
      .no-styling {
        text-decoration: none;
        color: var(--color-text-standout)
      }

        .avatar {
          grid-column: key;
          grid-row: auto/span 2;
          justify-self: end;
          position: relative;
          width: 80px;
          aspect-ratio: 1;
          background-color: var(--avatar-backgroundColor);
          border-radius: 50%;
          text-align: center;
          line-height: var(--avatar-size);
          font-size: calc(0.66 * var(--avatar-size));
          font-family: var(--font-family-display);
          color: var(--color-link-inverted);
          overflow: hidden;
        }
    `]

  renderAvatar() {
    const { avatar, name, nickname, color } = (this.profile ||
      {}) as Profile;
    const url = avatar;
    const avatarImg = url
      ? html`<img id="avatarImg" src="${url}" />`
      : (nickname || name || " ").slice(0, 1);
    const colorStyle = color
      ? `--avatar-backgroundColor: ${color}`
      : "";

    return html` <div class="avatar" style=${colorStyle}>
        ${avatarImg}
    </div>`;
  }

  updated(changedProperties: Map<string, unknown>) {
    console.log(
      "Profile Data has been updated",
      changedProperties,
      "profile now:", this.profile
    );
    if (changedProperties.has("user")) {
      console.log("New user", this.user);
      const { username } = this.user;
      this._getData(`/profiles/${username}`);
    }
    return true;
  }

  _getData(path: string) {
    const request = new APIRequest();

    request
      .get(path)
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        console.log("Profile (get data, header):", json);
        this.profile = json as Profile;
        console.log("profile after update:", this.profile)
      });
  }

  _signOut() {
    console.log("Signout");
    this.user.signOut();
  }
}