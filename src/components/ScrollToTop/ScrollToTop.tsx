import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Hooks.
import { usePrevious } from '../../hooks';

// Types.
import { ApplicationState } from '../../types';

export const ScrollToTop: React.FC = () => {
  const pathname: string = useSelector(
    (state: ApplicationState) => state.router.location.pathname
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
