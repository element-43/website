import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ActionCreators.
import { setTitleAction } from '../../store/layout/actions';

// Components.
import Page from '../../components/Page';

// Strings.
import { Titles } from '../../constants';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleAction(Titles.DEFAULT));
  }, []);

  return (
    <Page>
      <h1>Hello human</h1>
    </Page>
  );
};

export default Home;
