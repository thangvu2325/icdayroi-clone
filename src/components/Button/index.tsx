import classNames from 'classnames/bind';
import styles from '@/components/Button/Button.module.scss';
import { FunctionComponent } from 'react';
import { ReactNode } from 'react';
const cx = classNames.bind(styles);
interface ButtonProps {
  to?: string;
  href?: string;
  primary?: boolean;
  outline?: boolean;
  semiRounded?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  text?: boolean;
  disabled?: boolean;
  className?: any;
  children?: ReactNode;
  onClick?: () => void;
}
const Button: FunctionComponent<ButtonProps> = ({
  to,
  href,
  primary = false,
  outline = false,
  semiRounded = false,
  small = false,
  medium = false,
  large = false,
  text = false,
  disabled = false,
  className,
  children,
  onClick,
  ...passProps
}) => {
  let Comp: any = 'button';
  const props: any = { onClick, ...passProps };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = 'a'; // Update the component type to 'a'
  } else if (href) {
    props.href = href;
    Comp = 'a'; // Update the component type to 'a'
  }
  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    text,
    medium,
    semiRounded,
    large,
    disabled,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
};

export default Button;
