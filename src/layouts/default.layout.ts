import {TiniComponent, Layout, html} from '@tinijs/core';

import '../components/header.component';

@Layout('layout-default')
export default class LayoutDefault extends TiniComponent {
  render() {
    return html`
      <div class="layout-default">
        <div class="header"><app-header /></div>
        <div class="page"><slot></slot></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-default': LayoutDefault;
  }
}
