/* eslint-disable @typescript-eslint/ban-ts-comment */
const providers = {
  /*
   * Consts
   */
  foo: () => import('../consts/foo'),

  /*
   * Helpers
   */
  helper1: () => import('../helpers/helper-1'),
  helper2: () => import('../helpers/helper-2'),

  o2a: () => import('@tinijs/useful/services/helper/o2a'),

  /*
   * Services
   */
  sampleService: () => import('../services/sample'),
  sample2Service: {
    provider: () => import('../services/sample2'),
    deps: ['foo', 'helper2'],
  },
  sample3Service: {
    provider: () => import('../services/sample3'),
    deps: ['sampleService'],
  },

  fetchService: () => import('@tinijs/useful/services/fetch'),

  /*
   * Vendors
   */
  //@ts-ignore
  _gsap: () => import('../vendor/js/gsap.min.js'),
  //@ts-ignore
  _MorphSVGPlugin3: () => import('../vendor/js/MorphSVGPlugin3.js'),
  //@ts-ignore
  _DrawSVGPlugin3: () => import('../vendor/js/DrawSVGPlugin3.js'),
  //@ts-ignore
  _ScrambleTextPlugin3: () => import('../vendor/js/ScrambleTextPlugin3.js'),
};

export default providers;
export type Providers = typeof providers;
