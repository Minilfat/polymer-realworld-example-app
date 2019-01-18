import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";

import "../common/shared-styles-element.js";
import {monthNames} from "../common/constants.js";

class ConduitArticlePreview extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles-element"></style>
      <div class="article-preview">
        <div class="article-meta">
          <a href="/#/profile/@[[data.author.username]]"><img src="[[data.author.image]]"/></a>
          <div class="info">
            <a href="/#/profile/@[[data.author.username]]" class="author"
              >[[data.author.username]]</a
            >
            <span class="date">[[_getDate(data.createdAt)]]</span>
          </div>
          <button class="btn btn-outline-primary btn-sm pull-xs-right">
            <i class="ion-heart"></i>[[data.favoritesCount]]
          </button>
        </div>
        <a href="/#/article/[[data.slug]]" class="preview-link">
          <h1>[[data.title]]</h1>
          <p>[[data.description]]</p>
          <span>Read more...</span>
          <ul class="tag-list">
            <template is="dom-repeat" items="[[data.tagList]]">
              <li class="tag-default tag-pill tag-outline">[[item]]</a>
            </template>
          </div>
        </a>
      </div>
    `;
  }

  static get is() {
    return "conduit-article-preview";
  }

  static get properties() {
    return {
      data: Object
    };
  }

  _getDate(createdAt) {
    let date = new Date(createdAt);
    return `${date.getDay()} ${monthNames[date.getMonth()]}, ${date.getFullYear() % 100}`;
  }
}

window.customElements.define(ConduitArticlePreview.is, ConduitArticlePreview);
