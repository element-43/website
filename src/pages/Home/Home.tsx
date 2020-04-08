import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
      <Title level={2}>
        Kieran's the name, keyboard mashing until code works is my game.
      </Title>
      <Paragraph>
        This is another one of those portfolio sites for a software developer.
      </Paragraph>
      <Paragraph>
        If you want to find out more about me, head on over to the{' '}
        <Link to={Routes.About}>About</Link> page. Otherwise, try to find some
        easter eggs!
      </Paragraph>
    </Page>
  );
};

export default Home;
