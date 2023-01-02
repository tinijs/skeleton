const providers = {
  sampleService: () => import('../services/sample.service'),
  sample2Service: {
    provider: () => import('../services/sample2.service'),
    deps: ['foo', 'helper2'],
  },
  sample3Service: {
    provider: () => import('../services/sample3.service'),
    deps: ['sampleService'],
  },
  helper1: () => import('../helpers/helper-1.helper'),
  helper2: () => import('../helpers/helper-2.helper'),
  foo: () => import('../consts/foo.const'),
};

export default providers;
export type Providers = typeof providers;
