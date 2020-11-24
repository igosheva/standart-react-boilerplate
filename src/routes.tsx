// libs
import * as React from 'react';

import Home from './pages/Home';

export enum LinkEnum {
  HOME = '/',
}

interface TGeneralMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

export const GENERAL_MENU: TGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <Home />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: TGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
