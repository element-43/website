import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Action.
import { setTitleAction } from '../../store/layout/actions';

// Components.
import Page from '../../components/Page';
import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';

// Constants.
import { Titles } from '../../constants';

// Enums.
import { Routes } from '../../enums';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleAction(Titles.DEFAULT));
  }, []);

  return (
    <Page>
      <Title>Hello.</Title>
      <Paragraph>
        This is another one of those portfolio sites for a software developer.
      </Paragraph>
      <Paragraph>
        If you want to find out more about me, head on over to the{' '}
        <a href={Routes.About}>About</a> page.
      </Paragraph>
    </Page>
  );
};

export default Home;
