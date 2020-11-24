// libs
import * as React from 'react';
import classNames from 'classnames';

// styles
import './Heading.pcss';

type TComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span' | 'p';

interface THeadingProps {
  component?: TComponent;
  textWeight?: 'normal' | 'bold';
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<THeadingProps> = ({
  component = 'p',
  textWeight = 'normal',
  className,
  children,
}): React.ReactElement => {
  const Component = component || 'p';

  return (
    <Component
      className={classNames(
        'heading',
        component === 'h1' && 'heading_variant_h1',
        component === 'h2' && 'heading_variant_h2',
        component === 'h3' && 'heading_variant_h3',
        component === 'h4' && 'heading_variant_h4',
        component === 'p' && 'heading_variant_p',
        textWeight === 'normal' && 'heading_weight_normal',
        textWeight === 'bold' && 'heading_weight_bold',
        className,
      )}>
      {children}
    </Component>
  );
};

export default Heading;
