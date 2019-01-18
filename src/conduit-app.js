import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

import "@polymer/app-route/app-location.js";
import "@polymer/app-route/app-route.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/iron-pages/iron-pages.js";

import "./components/conduit-home.js";
import "./components/conduit-settings.js";
import "./components/conduit-auth.js";
import "./components/conduit-editor.js";

import "./common/shared-styles-element.js";

class ConduitApp extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles-element"></style>
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
      <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" auto-activate></app-route>

      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/#/">conduit</a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <!-- Add "active" class when you're on that page" -->
              <a class="nav-link active" href="/#/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/editor"> <i class="ion-compose"></i>&nbsp;New Post </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/settings"> <i class="ion-gear-a"></i>&nbsp;Settings </a>
            </li>
            <li class="nav-item"><a class="nav-link" href="/#/register">Sign up</a></li>
          </ul>
        </div>
      </nav>
      <div class="content">
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
          <conduit-404 name="404"></conduit-404>
        </iron-pages>
      </div>

      <footer>
        <div class="container">
          <a href="/#/" class="logo-font">conduit</a>
          <span class="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code
            &amp; design licensed under MIT.
          </span>
        </div>
      </footer>
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
