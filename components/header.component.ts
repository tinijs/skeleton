import {TiniComponent, Component, State, html} from '@tinijs/core';
import {SubscribeStore, StoreSubscription} from '@tinijs/store';

import {States} from '../app/states';

@Component('app-header')
export class AppHeader extends TiniComponent {
  @SubscribeStore() storeSubscription!: StoreSubscription<States>;
  @State() bar!: number;

  onInit() {
    this.storeSubscription.subscribe(({bar}) => {
      this.bar = bar;
    });
  }

  render() {
    return html`
      <header>
        <div class="left"><h1>Bar #${this.bar}</h1></div>
        <div class="right">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/lazy">Lazy</a></li>
            <li><a href="/xyz">Oops</a></li>
          </ul>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}
