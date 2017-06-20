import Main from './main';

import Page1 from './Page1';
import Page2 from './Page2';
import {RouteConfig} from 'vue-router';

const route: RouteConfig = {
  path: '/',
  name: 'home',
  component: Main,
  children: [
    Page1,
    Page2,
  ],
};

export default route;
