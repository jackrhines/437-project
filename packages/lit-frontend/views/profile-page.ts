import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {} from "../components/user-profile";

@customElement("profile-page")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  @state()
  edit: boolean = false;

  _toggleEdit() {
    this.edit = !this.edit;
  }

  render() {
    console.log('hey');
    return html`
      ${this.edit 
          ? html`<edit-profile path=${this.path} @edit=${this._toggleEdit}></edit-profile>` 
          : html`<view-profile path=${this.path} @edit=${this._toggleEdit}></view-profile>`
    }`
  }


}