import {LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {APP_ROOT, APP_ROOT_TEMPLATE} from '@tinijs/core';
import {registerRoutes} from '@tinijs/router';
import {createStore} from '@tinijs/store';

import configs from './configs/development';
import routes, {Router} from './routes';
import states, {Store} from './states';

import {SampleService} from './services/sample.service';

import './layouts/default.layout';
import './pages/home.page';
import './pages/404.page';

@customElement(APP_ROOT)
export class AppRoot extends LitElement {
  configs = configs;
  router!: Router;
  store!: Store;

  sampleService = new SampleService();

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => this.initApp(), 0);
  }

  private initApp() {
    this.router = registerRoutes(routes);
    this.store = createStore(states);
  }

  protected render() {
    return APP_ROOT_TEMPLATE;
  }
}
