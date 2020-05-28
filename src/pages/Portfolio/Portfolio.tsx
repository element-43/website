import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ActionCreators.
import { setTitleAction } from '../../actions';

// Components.
import Folium from '../../components/Folium';
import Page from '../../components/Page';

// Strings.
import { Titles } from '../../constants';

export const Portfolio: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleAction(`${Titles.DEFAULT} - ${Titles.PORTFOLIO}`));
  }, []);

  return (
    <Page noGutter={true}>
      <Folium />
    </Page>
  );
};

export default Portfolio;
