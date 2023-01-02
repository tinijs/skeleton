import {TiniComponent, Page, Inject, html} from '@tinijs/core';

import {Sample2Service} from '../services/sample2.service';

@Page('page-lazy')
export class PageLazy extends TiniComponent {
  @Inject() sample2Service!: Sample2Service;

  protected template = html`
    <h1>Me lazy!!!</h1>
    <ul>
      <li>Service 2: ${this.sample2Service.name}</li>
      <li>Helper 2 (from Service 2): ${this.sample2Service.help()}</li>
    </ul>
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'page-lazy': PageLazy;
  }
}
