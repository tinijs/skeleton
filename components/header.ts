import {
  TiniComponent,
  Component,
  Output,
  EventEmitter,
  Reactive,
  Query,
  QueryAll,
  html,
  css,
  unistylus,
} from '@tinijs/core';
import {Shop, StoreSubscription} from '@tinijs/store';

import {States} from '../app/states';

@Component('app-header')
export class AppHeader extends TiniComponent {
  @Shop() shop!: StoreSubscription<States>;

  @Output() customEvent!: EventEmitter<string>;

  @Query('.test') private _testButton!: HTMLElement;
  @QueryAll('.right > ul > li') private _liElems!: NodeList;

  @Reactive() bar!: number;

  onInit() {
    this.shop.subscribe(({bar}) => {
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
      <div class="left"><h1>Bar #${this.bar}</h1></div>
      <div class="right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/lazy">Lazy</a></li>
          <li><a href="/xyz">Oops</a></li>
        </ul>
        <button class="button-primary test" @click=${this.emitCustomEvent}>
          Test
        </button>
      </div>
    </header>
  `;

  static styles = [
    unistylus`
      badge-danger
      alert-success
    `,
    css`
      button {
        font-size: 1rem;
      }
    `,
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
