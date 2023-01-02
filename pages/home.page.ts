import {
  TiniComponent,
  Page,
  UseConfigs,
  Inject,
  Reactive,
  html,
  css,
} from '@tinijs/core';
import {Shop, StoreSubscription} from '@tinijs/store';

import {AppConfigs} from '../app/types';
import {States, UPDATE_FOO, UPDATE_BAR} from '../app/states';

import {Sample3Service} from '../services/sample3.service';

import '../components/welcome.component';

@Page('page-home')
export class PageHome extends TiniComponent {
  @UseConfigs() configs!: AppConfigs;
  @Shop() shop!: StoreSubscription<States>;
  @Inject() sample3Service!: Sample3Service;

  @Reactive() foo!: string;

  onInit() {
    this.shop.subscribe(({foo}) => {
      this.foo = foo;
    });
  }

  updateFoo() {
    this.shop.commit(UPDATE_FOO, 'Foo -> ' + Math.round(Math.random() * 100));
  }

  updateBar() {
    this.shop.commit(UPDATE_BAR, Math.round(Math.random() * 100));
  }

  protected template = html`
    <app-welcome></app-welcome>
    <p><strong>${this.foo}</strong></p>
    <p>
      <button @click="${this.updateFoo}">Change foo</button>
      <button @click="${this.updateBar}">Change bar</button>
    </p>
    <ul>
      <li>Service 3: ${this.sample3Service.name}</li>
      <li>Service 1 (from Service 3): ${this.sample3Service.sample()}</li>
      <li>Config: ${this.configs.env}</li>
    </ul>
  `;

  static styles = css`
    p {
      color: blue;

      button {
        color: red;
      }
    }

    ul {
      margin: 0;
      list-style: none;

      li {
        color: green;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'page-home': PageHome;
  }
}
