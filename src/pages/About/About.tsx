import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ActionCreators.
import { setTitleAction } from '../../actions';

// Components.
import Page from '../../components/Page';

// Strings.
import { Titles } from '../../constants';

export const About: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleAction(Titles.ABOUT));
  }, []);

  return (
    <Page>
      <h1>About</h1>
    </Page>
  );
};

export default About;
