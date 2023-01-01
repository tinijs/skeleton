import {TiniComponent, Page, UseService, html} from '@tinijs/core';

import {Sample2Service} from '../services/sample2.service';

@Page('page-lazy')
export class PageLazy extends TiniComponent {
  @UseService() sample2Service!: Sample2Service;

  protected template = html`
    <h1>Me lazy!!!</h1>
    <ul>
      <li>Service: ${this.sample2Service.name}</li>
    </ul>
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'page-lazy': PageLazy;
  }
}
