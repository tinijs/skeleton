import {TiniComponent, Page, Inject, html} from '@tinijs/core';

import '../components/reactions.component';

@Page('page-404')
export class Page404 extends TiniComponent {
  @Inject() foo!: string;
  @Inject() helper1!: () => string;

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
