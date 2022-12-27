import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {UseService} from '@tinijs/core';
import {UseStore, Unsubscriber} from '@tinijs/store';

import {Store, States, CHANGE_NAME} from '../states';

import {SampleService} from '../services/sample.service';

import '../components/hello.component';

@customElement('page-home')
export class PageHome extends LitElement {
  @UseStore() store!: Store;
  @UseService() sampleService!: SampleService;

  private _unsubcribeStates!: Unsubscriber;
  @state() states!: States;

  connectedCallback(): void {
    super.connectedCallback();
    this._unsubcribeStates = this.store.subscribe(
      states => (this.states = states)
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._unsubcribeStates();
  }

  changeName() {
    this.store.commit(CHANGE_NAME, 'App ' + Math.round(Math.random() * 100));
  }

  protected render() {
    return html`
      <div>
        <app-hello></app-hello>
        <p>
          <button @click="${this.changeName}">
            Change name (${this.states.name})
          </button>
        </p>
        <p>Service: <strong>[${this.sampleService.name}]</strong></p>
      </div>
    `;
  }
}
