import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Hooks.
import { usePrevious } from '../../hooks';

// Types.
import { IApplicationState } from '../../store';

export const ScrollToTop: React.FunctionComponent = () => {
  const pathname: string = useSelector(
    (state: IApplicationState) => state.router.location.pathname
  );
  const prevPathname: string | undefined = usePrevious(pathname);

  useEffect(() => {
    if (prevPathname !== pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
