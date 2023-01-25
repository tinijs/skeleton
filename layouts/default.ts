@Layout('layout-default')
export class DefaultLayout extends TiniComponent {
  protected render() {
    return html`<div class="page"><slot></slot></div>`;
  }
}
