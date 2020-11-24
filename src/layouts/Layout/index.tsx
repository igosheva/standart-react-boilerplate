import * as React from 'react';
import classNames from 'classnames';

import './Layout.pcss';

interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = null }) => (
  <div className={classNames('layout', className)}>{children}</div>
);

export default Layout;
