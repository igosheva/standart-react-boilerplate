// libs
import * as React from 'react';
import { navigate } from 'hookrouter';

// types
import { LinkEnum } from '../../routes';

// styles
import './NotFound.pcss';

const NotFound = () => {
  // @ts-ignore
  const handleClick = () => navigate(LinkEnum.HOME);
  return (
    <div className="not-found">
      <button onClick={handleClick}>
        Page not found
      </button>
    </div>
  );
};

export default NotFound;
