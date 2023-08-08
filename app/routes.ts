import {Route} from '@tinijs/router';

export default [
  {
    path: '',
    component: 'app-layout-default',
    children: [
      {
        path: '',
        component: 'app-page-home',
        action: () => import('./pages/home'),
      },
      // 404
      {
        path: '**',
        component: 'app-page-404',
        action: () => import('./pages/404'),
      },
    ],
  },
] as Route[];
