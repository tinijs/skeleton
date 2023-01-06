import {TiniComponent, App, APP_ROOT_TEMPLATE, html} from '@tinijs/core';
import {registerRoutes} from '@tinijs/router';
import {createStore} from '@tinijs/store';

import configs from '../configs/development';
import routes, {Router} from './routes';
import states, {Store} from './states';
import providers from './providers';

import '../components/splashscreen.component';
import '../layouts/default.layout';
import '../pages/home.page';
import '../pages/404.page';

@App(providers, {splashscreen: 'manual'})
export class AppRoot extends TiniComponent {
  $configs = configs;
  $router!: Router;
  $store!: Store;

  onReady() {
    this.$router = registerRoutes(routes);
    this.$store = createStore(states);
  }

  protected template = html`
    <app-splash-screen></app-splash-screen>
    ${APP_ROOT_TEMPLATE}
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}
