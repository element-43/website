import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ActionCreators.
import { setTitleAction } from '../../store/layout/actions';

// Components.
import Page from '../../components/Page';

// Strings.
import { Titles } from '../../constants';

export const Contact: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleAction(Titles.CONTACT));
  }, []);

  return (
    <Page>
      <h1>Contact</h1>
    </Page>
  );
};

export default Contact;
