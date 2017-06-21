import Main from './main';

import Page1 from './Page1';
import Page2 from './Page2';
import {RouteConfig} from 'vue-router';

export default {
  path: '/',
  name: 'home',
  component: Main,
  children: [
    Page1,
    Page2,
  ],
} as RouteConfig;
