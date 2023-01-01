import {
  TiniComponent,
  Component,
  Input,
  Output,
  EventEmitter,
  Reactive,
  Query,
  QueryAll,
  html,
  css,
} from '@tinijs/core';
import {SubscribeStore, StoreSubscription} from '@tinijs/store';

import {States} from '../app/states';

@Component('app-header')
export class AppHeader extends TiniComponent {
  @SubscribeStore() storeSubscription!: StoreSubscription<States>;

  @Input() attr?: string;
  @Output() customEvent!: EventEmitter<string>;

  @Query('.test') private _testButton!: HTMLElement;
  @QueryAll('.right > ul > li') private _liElems!: NodeList;

  @Reactive() bar!: number;

  onInit() {
    this.storeSubscription.subscribe(({bar}) => {
      this.bar = bar;
    });
  }

  emitCustomEvent() {
    this.customEvent.emit('Event -> @customEvent');
    console.log(this._testButton);
    console.log(this._liElems);
  }

  protected template = html`
    <header>
      <div class="left"><h1>Bar #${this.bar} (${this.attr})</h1></div>
      <div class="right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/lazy">Lazy</a></li>
          <li><a href="/xyz">Oops</a></li>
        </ul>
        <button class="test" @click=${this.emitCustomEvent}>Test</button>
      </div>
    </header>
  `;

  static styles = [
    css`
      a {
        color: black;
      }
    `,
    // ...
    css`
      div {
        color: red;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}
