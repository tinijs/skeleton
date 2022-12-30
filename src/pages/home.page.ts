import {
  TiniComponent,
  Page,
  UseConfigs,
  UseService,
  State,
  html,
  css,
} from '@tinijs/core';
import {SubscribeStore, StoreSubscription} from '@tinijs/store';

import {AppConfigs} from '../types';
import {States, UPDATE_FOO, UPDATE_BAR} from '../states';

import {Sample3Service} from '../services/sample3.service';

import '../components/welcome.component';

@Page('page-home')
export class PageHome extends TiniComponent {
  @UseConfigs() configs!: AppConfigs;
  @SubscribeStore() storeSubscription!: StoreSubscription<States>;
  @UseService() sample3Service!: Sample3Service;

  @State() foo!: string;

  async onInit() {
    this.storeSubscription.subscribe(({foo}) => {
      this.foo = foo;
    });
  }

  updateFoo() {
    this.storeSubscription.commit(
      UPDATE_FOO,
      'Foo -> ' + Math.round(Math.random() * 100)
    );
  }

  updateBar() {
    this.storeSubscription.commit(UPDATE_BAR, Math.round(Math.random() * 100));
  }

  protected render() {
    return html`
      <div>
        <app-welcome></app-welcome>
        <p><strong>${this.foo}</strong></p>
        <p>
          <button @click="${this.updateFoo}">Change foo</button>
          <button @click="${this.updateBar}">Change bar</button>
        </p>
        <ul>
          <li>Service: ${this.sample3Service.name}</li>
          <li>Service: ${this.sample3Service.sample()}</li>
          <li>Config: ${this.configs.env}</li>
        </ul>
      </div>
    `;
  }

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
