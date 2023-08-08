import {Layout, TiniComponent, html, css} from '@tinijs/core';

@Layout({
  name: 'app-layout-default',
})
export class AppLayoutDefault extends TiniComponent {
  protected render() {
    return html`<main class="page"><slot></slot></main>`;
  }
}
