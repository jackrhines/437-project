import {html} from "lit";
import { customElement } from "lit/decorators.js";
// MVU app
import * as App from "../app";
// import routes from "../routes";
import update from "../update";
// components
import "../components/auth-required";
import "../components/vaadin-router";
import "../components/site-header";
import "../components/site-footer"
// import "../components/drop-down.ts";
// import "../components/user-panel.ts";
// import "../components/toggle-switch.ts"
import routes from "../routes.ts";


@customElement("gallery-app")
export class GalleryAppElement
  extends App.Main {
  constructor() { super(update); }
  render() {
    return html`
<!--        <body>-->
<!--            <site-header></site-header>-->
<!--            <p>hello</p>-->
<!--        </body>-->
        
        <auth-required>
            <site-header></site-header>
<!--            <p>gallery app renders</p>-->
            <vaadin-router .routes=${routes}> </vaadin-router>
            <site-footer></site-footer>
        </auth-required>
    `;
  }
}