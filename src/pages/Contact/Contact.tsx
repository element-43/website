import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// Actions.
import { setTitleAction } from '../../actions';

// Components.
import { LinkButton } from '../../components/Button';
import Page from '../../components/Page';
import Paragraph from '../../components/Paragraph';
import Text from '../../components/Text';
import Title from '../../components/Title';
import TwitterIconSvg from '../../components/TwitterIconSvg';

// Constants.
import { Emails, Social, Titles } from '../../constants';

// Themes.
import palette from '../../theme/palette';

const StyledText = styled(Text)`
  color: ${palette.greyScale.white};
  font-size: 1rem;
  margin: 0 0 0 0.4rem;
`;

export const Contact: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleAction(`${Titles.DEFAULT} - ${Titles.CONTACT}`));
  }, []);

  return (
    <Page>
      <Title level={2}>Want to get in touch?</Title>
      <Paragraph>
        Drop me a mail at{' '}
        <a
          href={`mailto:${Emails.KIERAN_ONEILL}`}
          rel="noreferrer"
          target="_blank"
        >
          {Emails.KIERAN_ONEILL}
        </a>
        .
      </Paragraph>
      <Paragraph>Or if you prefer to socialise:</Paragraph>
      <LinkButton
        href={`https://twitter.com/messages/compose?recipient_id=${Social.TWITTER_ID}`}
        target="_blank"
      >
        <TwitterIconSvg color={palette.greyScale.white} size="1rem" />
        <StyledText>@Message</StyledText>
      </LinkButton>
    </Page>
  );
};

export default Contact;
