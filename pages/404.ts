import {TiniComponent, Page, html} from '@tinijs/core';
import {PageMetas} from '@tinijs/meta';

@Page('page-404')
export class OopsPage extends TiniComponent {
  metas: PageMetas = {
    title: 'Oops',
    description: 'Error 404, not found!',
  };

  protected render() {
    html`<h1 style="text-align: center;">Oops 🫣!</h1>`;
  }
}
