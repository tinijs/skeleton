import {Component, TiniComponent, html} from '@tinijs/core';

export const APP_WELCOME = 'app-welcome';
@Component()
export class AppWelcomeComponent extends TiniComponent {
  static readonly defaultTagName = APP_WELCOME;

  protected render() {
    return html`<h1>Hello world! 👋</h1>`;
  }
}
