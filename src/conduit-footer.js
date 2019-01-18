import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";

class ConduitFooter extends PolymerElement {
  static get template() {
    return html`
      <footer>
        <div class="container">
          <a href="/#/" class="logo-font">conduit</a>
          <span class="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </footer>
    `;
  }

  static get is() {
    return "conduit-footer";
  }
}

window.customElements.define(ConduitFooter.is, ConduitFooter);
