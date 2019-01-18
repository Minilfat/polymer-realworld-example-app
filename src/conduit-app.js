import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

import "@polymer/app-route/app-location.js";
import "@polymer/app-route/app-route.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/iron-pages/iron-pages.js";

import "./conduit-navbar.js";
import "./conduit-footer.js";
import "./conduit-home.js";
import "./conduit-settings.js";
import "./conduit-auth.js";
import "./conduit-editor.js";
import "./conduit-article.js";

class ConduitApp extends PolymerElement {
  static get template() {
    return html`
      <style></style>

      <iron-ajax
        auto
        url="https://conduit.productionready.io/api/articles"
        handle-as="json"
        last-response="{{articlesResponse}}"
      ></iron-ajax>
      <iron-ajax
        auto
        url="https://conduit.productionready.io/api/tags"
        handle-as="json"
        last-response="{{tagsResponse}}"
      ></iron-ajax>

      <app-location route="{{route}}" use-hash-as-path></app-location>
      <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        auto-activate
      ></app-route>

      <conduit-navbar></conduit-navbar>

      <iron-pages
        role="main"
        selected="[[page]]"
        attr-for-selected="name"
        selected-attribute="visible"
        fallback-selection="404"
      >
        <conduit-home
          name="home"
          articles="[[articlesResponse.articles]]"
          tags="[[tagsResponse.tags]]"
        ></conduit-home>

        <conduit-settings name="settings"></conduit-settings>

        <conduit-auth name="register"></conduit-auth>

        <conduit-editor name="editor"></conduit-editor>

        <conduit-article name="article"></conduit-article>

        <conduit-404 name="404"></conduit-404>
      </iron-pages>

      <conduit-footer></conduit-footer>
    `;
  }

  static get is() {
    return "conduit-app";
  }

  static get properties() {
    return {
      page: String
    };
  }

  static get observers() {
    return ["_routePageChanged(routeData.page)"];
  }

  _routePageChanged(page) {
    this.set("page", page || "home");
  }
}

window.customElements.define(ConduitApp.is, ConduitApp);
