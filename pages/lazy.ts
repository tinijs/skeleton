import {TiniComponent, Page, Inject, html} from '@tinijs/core';
import {UseMeta, Meta, PageMetas} from '@tinijs/meta';
import {FetchService} from '@tinijs/useful/services/fetch';

import {Sample2Service} from '../services/sample2';

import '../components/ads-01';

const metas: PageMetas = {
  title: 'Me Lazy',
  description: 'This page is lazy loaded.',
};

@Page('page-lazy')
export class PageLazy extends TiniComponent {
  @UseMeta() meta!: Meta;
  @Inject() fetchService!: FetchService;
  @Inject() sample2Service!: Sample2Service;

  onInit() {
    this.fetchService
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(data => {
        console.log(data);
      });
  }

  onReady() {
    this.meta.setPageMetas(metas);
  }

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
