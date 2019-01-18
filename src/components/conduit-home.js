import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";

import "./conduit-article-preview.js";
import "../common/shared-styles-element.js";

class ConduitHome extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles-element">
        :host {
          width: 100% !important;
        }

        .container,
        .row {
          box-sizing: border-box;
        }

        @media screen and (max-width: 767px) {
          .col-md-9 {
            width: 100%;
          }
        }
      </style>
      <div class="home-page">
        <div class="banner">
          <div class="container">
            <h1 class="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div class="container page">
          <div class="row">
            <div class="col-md-9">
              <div class="feed-toggle">
                <ul class="nav nav-pills outline-active">
                  <li class="nav-item"><a class="nav-link disabled" href="">Your Feed</a></li>
                  <li class="nav-item"><a class="nav-link active" href="">Global Feed</a></li>
                </ul>
              </div>

              <div class="home-global">
                <template is="dom-repeat" items="[[articles]]">
                  <conduit-article-preview data="[[item]]"></conduit-article-preview>
                </template>
              </div>
            </div>

            <div class="col-md-3">
              <div class="sidebar">
                <p>Popular Tags</p>

                <div class="tag-list">
                  <template is="dom-repeat" items="[[tags]]">
                    <a href="" class="tag-pill tag-default">[[item]]</a>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static get is() {
    return "conduit-home";
  }

  static get properties() {
    return {
      articles: {
        type: Array,
        observer: "_gavna"
      },
      tags: {
        type: Array
      }
    };
  }

  _gavna(VALUE) {
    console.log(VALUE);
  }
}

window.customElements.define(ConduitHome.is, ConduitHome);
