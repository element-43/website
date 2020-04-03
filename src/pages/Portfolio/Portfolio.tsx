import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ActionCreators.
import { setTitleAction } from '../../store/layout/actions';

// Components.
import Page from '../../components/Page';

// Strings.
import { Titles } from '../../constants';

export const Portfolio: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleAction(Titles.PORTFOLIO));
  }, []);

  return (
    <Page>
      <h1>Portfolio</h1>
    </Page>
  );
};

export default Portfolio;
