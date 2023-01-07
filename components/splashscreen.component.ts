import {
  TiniComponent,
  Component,
  Reactive,
  html,
  css,
  classMap,
} from '@tinijs/core';

@Component('app-splashscreen')
export class SplashscreenComponent extends TiniComponent {
  @Reactive() tooLong = false;
  @Reactive() exiting = false;

  onReady() {
    setTimeout(() => (this.tooLong = true), 7000);
  }

  hide() {
    this.exiting = true;
    setTimeout(() => this.remove(), 500);
  }

  protected template = html`
    <div class="subhost ${classMap({exiting: this.exiting})}">
      <div class="body"><img src="../assets/images/logo.svg" /></div>
      <div class="foot ${classMap({'too-long': this.tooLong})}">
        <span>Still working, please wait! 👌</span>
      </div>
    </div>
  `;

  static styles = css`
    /* baseline */
    .subhost {
      display: block;
      z-index: 999999999;
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
      background: #f4f5f8;
      color: #222428;
      transition: opacity 0.5s ease;
      display: flex;

      &.exiting {
        opacity: 0;
      }
    }

    .body {
      width: 100%;
      flex: 1;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;

      img {
        width: 120px;
        animation: animate linear 2s;
        animation-iteration-count: infinite;
        transform-origin: 50% 50%;
        -webkit-animation: animate linear 2s;
        -webkit-animation-iteration-count: infinite;
        -webkit-transform-origin: 50% 50%;
        -moz-animation: animate linear 2s;
        -moz-animation-iteration-count: infinite;
        -moz-transform-origin: 50% 50%;
        -o-animation: animate linear 2s;
        -o-animation-iteration-count: infinite;
        -o-transform-origin: 50% 50%;
        -ms-animation: animate linear 2s;
        -ms-animation-iteration-count: infinite;
        -ms-transform-origin: 50% 50%;
      }
    }

    .foot {
      opacity: 0;
      width: 100%;
      height: 72px;
      padding: 1rem;
      text-align: center;

      &.too-long {
        opacity: 1;
      }
    }
    /* animation */
    @keyframes animate {
      0%,
      100%,
      30%,
      60% {
        transform: translate(0, 0);
      }
      15% {
        transform: translate(0, -25px);
      }
      45% {
        transform: translate(0, -15px);
      }
      75% {
        transform: translate(0, -5px);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-splashscreen': SplashscreenComponent;
  }
}
