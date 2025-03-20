import { html, css, LitElement } from 'lit';

export class BoilerplateWebcomponent extends LitElement {
  // createRenderRoot() {
  //   return this;
  // }

  static styles = css`
    p {
      color: black;
      border: 1px solid #333;
      padding: 5px;
    }
  `;

  static properties = {
    name: { type: String }
  };

  constructor() {
    super();
    this.name = 'webcomponent';
  }

  render() {
    return html`<p>
      This is a ${this.name} written in plain JS! <br />
      You can edit this in client/components/boilerplate-webcomponent/main.js.
    </p>`;
  }
}

customElements.define('boilerplate-webcomponent', BoilerplateWebcomponent);
