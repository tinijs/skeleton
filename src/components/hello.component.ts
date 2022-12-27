import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-hello')
export class AppHello extends LitElement {
  protected render() {
    return html`<h1>Hello world! 👋</h1>`;
  }
}
