import {TiniComponent, Page, Inject, html} from '@tinijs/core';
import {UseMeta, Meta, PageMetas} from '@tinijs/meta';
import {O2a} from '@tinijs/useful/services/helper/o2a';

import '../components/reactions';

const metas: PageMetas = {
  title: 'Oops',
  description: 'Error 404, not found!',
};

@Page('page-404')
export class Page404 extends TiniComponent {
  @UseMeta() meta!: Meta;
  @Inject() o2a!: O2a;

  @Inject() foo!: string;
  @Inject() helper1!: () => string;

  onInit() {
    const obj = {
      'item-1': {id: 1, title: 'Item 1'},
      'item-2': {id: 2, title: 'Item 2'},
      'item-3': {id: 3, title: 'Item 3'},
    };
    console.log(this.o2a(obj));
  }

  onReady() {
    this.meta.setPageMetas(metas);
  }

  protected template = html`
    <h1>Oops, nothing here to see 🫣. [${this.foo}]</h1>

    <div style="width: 500px;">
      <app-reactions></app-reactions>
    </div>
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'page-404': Page404;
  }
}
