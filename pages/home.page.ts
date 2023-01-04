import {TiniComponent, Page, html, css} from '@tinijs/core';

import '../components/welcome.component';

@Page('page-home')
export class PageHome extends TiniComponent {
  protected template = html`<app-welcome></app-welcome>`;
  static styles = css`
    :host {
      margin: 0;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'page-home': PageHome;
  }
}
