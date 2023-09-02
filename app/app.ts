import {html} from 'lit';
import {App, TiniComponent} from '@tinijs/core';
import {createRouter} from '@tinijs/router';
import {initMetas} from '@tinijs/meta';

import configs from './configs/development';
import metas from './metas';
import routes from './routes';

import './layouts/default';

@App()
export class AppRoot extends TiniComponent {
  public readonly configs = configs;
  public readonly meta = initMetas({metas});
  public readonly router = createRouter(routes, {linkTrigger: true});

  protected render() {
    return html`<router-outlet .router=${this.router}></router-outlet>`;
  }
}
