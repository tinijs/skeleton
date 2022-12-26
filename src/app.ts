import {LitElement, html} from 'lit';
import {customElement as CustomElement} from 'lit/decorators.js';
import {TiniApp} from '@tinijs/core';

import configs from './configs/development';
import routes from './routes'
import states from './states'

@CustomElement('app-root')
@TiniApp({
  configs,
  routes,
  states,
  // list of services
})
export class AppRoot extends LitElement {
  render() {
    return html`<div id="router-outlet"></div>`;
  }
}
