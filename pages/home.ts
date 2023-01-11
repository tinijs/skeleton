import {TiniComponent, Page, html, css} from '@tinijs/core';
import {UseMeta, Meta} from '@tinijs/meta';

import '../components/welcome';

@Page('page-home')
export class PageHome extends TiniComponent {
  @UseMeta() meta!: Meta;

  onReady() {
    this.meta.setHomeMetas();
  }

  protected template = html`<app-welcome></app-welcome>`;

  static styles = css`
    :host {
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'page-home': PageHome;
  }
}
