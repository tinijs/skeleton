import {TiniComponent, App, APP_ROOT_TEMPLATE, html} from '@tinijs/core';
import {initMetas, Meta} from '@tinijs/meta';
import {registerRoutes, Router} from '@tinijs/router';
import {createStore} from '@tinijs/store';

import configs from '../configs/development';
import {metas} from './metas';
import routes from './routes';
import states, {Store} from './states';
import providers from './providers';

import '../layouts/default';
import '../pages/home';
import '../pages/404';

@App(providers, {splashscreen: 'auto', navIndicator: true})
export class AppRoot extends TiniComponent {
  $configs = configs;
  $meta!: Meta;
  $router!: Router;
  $store!: Store;

  onReady() {
    this.$meta = initMetas({metas});
    this.$router = registerRoutes(routes);
    this.$store = createStore(states);
  }

  protected template = html`${APP_ROOT_TEMPLATE}`;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}
