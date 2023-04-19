import classNames from 'classnames';

// passing prop children to the component to reuse along the app
export const Container = ({ children, className }) => {
  return <div className={classNames('max-w-[120rem] mx-auto px-8', className)}>{children}</div>;
};
