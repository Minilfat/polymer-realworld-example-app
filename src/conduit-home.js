import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

class ConduitHome extends PolymerElement {
  static get template() {
    return html`
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

              <template is="dom-repeat" items="[[articles]]">
                <div class="article-preview">
                  <div class="article-meta">
                    <a href="profile.html"><img src="[[item.author.image]]"/></a>
                    <div class="info">
                      <a href="" class="author">[[item.author.username]]</a>
                      <span class="date">[[item.createdAt]]</span>
                    </div>
                    <button class="btn btn-outline-primary btn-sm pull-xs-right">
                      <i class="ion-heart"></i> [[item.favoritesCount]]
                    </button>
                  </div>
                  <a href="/#/article/[[item.slug]]" class="preview-link">
                    <h1>[[item.title]]</h1>
                    <p>[[item.description]]</p>
                    <span>Read more...</span>
                  </a>
                </div>
              </template>
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
        type: Array
      },
      tags: {
        type: Array
      }
    };
  }
}

window.customElements.define(ConduitHome.is, ConduitHome);
