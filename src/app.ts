import {
  App,
  TiniComponent,
  APP_ROOT_TEMPLATE,
  provideServices,
} from '@tinijs/core';
import {registerRoutes} from '@tinijs/router';
import {createStore} from '@tinijs/store';

import configs from './configs/development';
import routes, {Router} from './routes';
import states, {Store} from './states';

// Lazy DI, provide before and imported conponent
provideServices({
  SampleService: {
    provider: () => import('./services/sample.service'),
  },
  Sample2Service: {
    provider: () => import('./services/sample2.service'),
  },
  Sample3Service: {
    provider: () => import('./services/sample3.service'),
    deps: ['SampleService'],
  },
});

import './layouts/default.layout';
import './pages/home.page';
import './pages/404.page';

@App()
export class AppRoot extends TiniComponent {
  $configs = configs;
  $router!: Router;
  $store!: Store;

  onCreate() {
    setTimeout(() => {
      this.$router = registerRoutes(routes);
      this.$store = createStore(states);
    });
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
