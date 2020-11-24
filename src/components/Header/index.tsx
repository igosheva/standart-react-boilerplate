// libs
import * as React from 'react';
import classNames from 'classnames';
import { A, usePath } from 'hookrouter';

// layouts
import Layout from '../../layouts/Layout';

// data
import { GENERAL_MENU } from '../../routes';

// styles
import './Header.pcss';

const Header = (): React.ReactElement => {
  const path = usePath();
  return (
    <header className={classNames('header')}>
      <Layout className="header__container">
        <ul className="header__nav">
          {GENERAL_MENU.map(({ title, link }) => (
            <li
              key={`nav-item-${title}`}
              className={classNames('header__nav-item', { 'header__nav-item_state_active': link === path })}>
              <A href={link}>{title}</A>
            </li>
          ))}
        </ul>
      </Layout>
    </header>
  );
};

export default React.memo(Header);
