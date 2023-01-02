import {TiniComponent, Page, Inject, html} from '@tinijs/core';

@Page('page-404')
export class Page404 extends TiniComponent {
  @Inject() foo!: string;
  @Inject() helper1!: () => string;

  onInit() {
    console.log('onInit(Page404)');
    console.log(this.foo);
    console.log(this.helper1);
  }

  protected template = html`<h1>Oops, nothing here to see 🫣</h1>`;
}

declare global {
  interface HTMLElementTagNameMap {
    'page-404': Page404;
  }
}
