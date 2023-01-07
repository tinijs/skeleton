import {TiniComponent, App, APP_ROOT_TEMPLATE, html} from '@tinijs/core';
import {registerRoutes} from '@tinijs/router';
import {createStore} from '@tinijs/store';

import configs from '../configs/development';
import routes, {Router} from './routes';
import states, {Store} from './states';
import providers from './providers';

import '../components/splashscreen.component';
import '../components/nav-indicator.component';
import '../layouts/default.layout';
import '../pages/home.page';
import '../pages/404.page';

@App(providers, {splashscreen: 'auto', navIndicator: true})
export class AppRoot extends TiniComponent {
  $configs = configs;
  $router!: Router;
  $store!: Store;

  onReady() {
    this.$router = registerRoutes(routes);
    this.$store = createStore(states);
  }

  protected template = html`
    <app-splashscreen></app-splashscreen>
    ${APP_ROOT_TEMPLATE}
    <app-nav-indicator></app-nav-indicator>
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}
