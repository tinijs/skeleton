import {
  TiniComponent,
  Component,
  Reactive,
  html,
  css,
  classMap,
} from '@tinijs/core';

@Component('app-nav-indicator')
export class NavIndicatorComponent extends TiniComponent {
  @Reactive() active = false;

  show() {
    this.active = true;
  }

  hide() {
    this.active = false;
  }

  protected template = html`
    <div class=${classMap({subhost: true, active: this.active})}>
      <div class="body" @click=${this.hide}>
        <img src="../assets/images/logo.svg" />
        <span>Loading, please wait!</span>
      </div>
    </div>
  `;

  static styles = css`
    .subhost {
      z-index: 900;
      position: fixed;
      width: 232px;
      left: 50%;
      margin-left: -116px;
      bottom: -5rem;
      background: none;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      transition: 0.3s all ease;

      &.active {
        bottom: 1rem;
      }
    }

    .body {
      display: flex;
      align-items: center;
      background: var(--color-foreground, #f4f5f8);
      padding: 0.5rem 1rem;
      border-radius: 100px;
      cursor: pointer;

      & img {
        width: 2rem;
      }

      & span {
        display: inline-block;
        color: var(--color-background, #222428);
        margin-left: 1rem;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-nav-indicator': NavIndicatorComponent;
  }
}
