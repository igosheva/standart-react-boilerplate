// libs
import * as React from 'react';
import classNames from 'classnames';

// layouts
import Layout from '../../layouts/Layout';

// styles
import './Footer.pcss';

const Index = (): React.ReactElement => (
  <footer className={classNames('footer')}>
    <Layout className="footer__container">
      <p className="footer__text">
        Make with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </p>
      <a className="footer__link" href="/">
        Ours Team
      </a>
    </Layout>
  </footer>
);

export default Index;
