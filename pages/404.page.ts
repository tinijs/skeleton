import {TiniComponent, Page, html} from '@tinijs/core';

import '../components/reactions.component';

@Page('page-404')
export class Page404 extends TiniComponent {
  protected template = html`<h1>Oops 🫣!</h1>`;
}

declare global {
  interface HTMLElementTagNameMap {
    'page-404': Page404;
  }
}
