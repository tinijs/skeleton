import {TiniComponent, App, APP_ROOT_TEMPLATE} from '@tinijs/core';
import {registerRoutes, Router} from '@tinijs/router';
import {createStore} from '@tinijs/store';

import configs from '../configs/development';
import routes from './routes';
import states, {Store} from './states';
import providers from './providers';

import '../layouts/default.layout';
import '../pages/home.page';
import '../pages/404.page';

@App(providers)
export class AppRoot extends TiniComponent {
  $configs = configs;
  $router!: Router;
  $store!: Store;

  onReady() {
    this.$router = registerRoutes(routes);
    this.$store = createStore(states);
  }

  protected render() {
    return APP_ROOT_TEMPLATE;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}
