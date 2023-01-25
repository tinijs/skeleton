@Page('page-home')
export class HomePage extends TiniComponent {
  static styles = [
    unistylus``,
    css`
      :host {
        text-align: center;
      }
    `,
  ];

  protected render() {
    html`<app-welcome></app-welcome>`;
  }
}
