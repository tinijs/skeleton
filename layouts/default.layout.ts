import {TiniComponent, Layout, html} from '@tinijs/core';

import '../components/header.component';

@Layout('layout-default')
export class LayoutDefault extends TiniComponent {
  handleCustomEvent({detail: payload}: CustomEvent<string>) {
    console.log('handleCustomEvent(): ', {payload});
  }

  protected template = html`
    <div class="header">
      <app-header @customEvent=${this.handleCustomEvent}></app-header>
    </div>
    <div class="page"><slot></slot></div>
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-default': LayoutDefault;
  }
}
