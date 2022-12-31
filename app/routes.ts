import {Route, Router} from '@tinijs/router';

const routes: Route[] = [
  {
    path: '',
    component: 'layout-default',
    children: [
      {
        path: '',
        component: 'page-home',
      },
      {
        path: '/lazy',
        component: 'page-lazy',
        action: async () => {
          await import('../pages/lazy.page');
        },
      },
      {
        path: '(.*)',
        component: 'page-404',
      },
    ],
  },
];
export default routes;

export {Router};
