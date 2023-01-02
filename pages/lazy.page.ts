import {TiniComponent, Page, Inject, html} from '@tinijs/core';

import {Sample2Service} from '../services/sample2.service';

import '../components/ads-01.component';

@Page('page-lazy')
export class PageLazy extends TiniComponent {
  @Inject() sample2Service!: Sample2Service;

  protected template = html`
    <h1>Me lazy!!!</h1>
    <ul>
      <li>Service 2: ${this.sample2Service.name}</li>
      <li>Helper 2 (from Service 2): ${this.sample2Service.help()}</li>
    </ul>

    <div style="width: 500px;">
      <app-ads-01></app-ads-01>
    </div>
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'page-lazy': PageLazy;
  }
}
