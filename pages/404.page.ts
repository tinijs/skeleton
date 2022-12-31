import {TiniComponent, Page, html} from '@tinijs/core';

@Page('page-404')
export class Page404 extends TiniComponent {
  protected render() {
    return html`<h1>Oops, nothing here to see 🫣</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'page-404': Page404;
  }
}
