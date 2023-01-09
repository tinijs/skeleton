import {
  TiniComponent,
  Page,
  UseConfigs,
  Inject,
  Reactive,
  html,
  css,
  unistylus,
} from '@tinijs/core';
import {Shop, StoreSubscription} from '@tinijs/store';

import {AppConfigs} from '../app/types';
import {States, UPDATE_FOO, UPDATE_BAR} from '../app/states';

import {Sample3Service} from '../services/sample3';

import '../components/welcome';
import '../components/ads-02';

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
    <app-welcome ?await=${true}></app-welcome>
    <p><strong>${this.foo}</strong></p>
    <p>
      <button @click="${this.updateFoo}">Change foo</button>
      <button @click="${this.updateBar}">Change bar</button>
    </p>
    <ul>
      <li>Service 3: ${this.sample3Service.name}</li>
      <li>Service 1 (from Service 3): ${this.sample3Service.sampleName()}</li>
      <li>Config: ${this.configs.env}</li>
    </ul>

    <div style="width: 500px;">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Foo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bar</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Baz</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="width: 500px;">
      <app-ads-02 await></app-ads-02>
    </div>
  `;

  static styles = [
    unistylus``,
    css`
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
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'page-home': PageHome;
  }
}
