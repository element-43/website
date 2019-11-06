import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Components.
import { DesktopLayout } from '../DesktopLayout';
import { Header } from '../Header';
import { MobileHeader } from '../MobileHeader';
import { MobileLayout } from '../MobileLayout';

// Styles.
import media from '../../styles/media';
import palette from '../../styles/palette';
import typography from '../../styles/typography';

// Types.
import { ApplicationState } from '../../store';

// Utils.
import getHelmet from '../../lib/getHelmet';

const Main = styled.main`
  width: 100%;
`;
const Wrapper = styled.div`
  background-color: ${palette.greyScale.white};
  display: flex;
  flex-direction: row;
  font-size: 100%;
  font-family: ${typography.primaryFontFamily};
  min-height: 100vh;
  width: 100%;

  ${media.mobile`
    flex-direction: column;
    justify-content: flex-start;
  `}
`;

export interface Props {
  children: React.ReactNode;
  title: string;
}

export const Page: React.FC<Props> = (props: Props) => (
  <Wrapper>
    {getHelmet(props.title)}
    <MobileLayout>
      <MobileHeader />
    </MobileLayout>
    <DesktopLayout>
      <Header />
    </DesktopLayout>
    <Main>{props.children}</Main>
  </Wrapper>
);

const mapStateToProps = (state: ApplicationState) => {
  return {
    title: state.layout.title,
  };
};

export default connect(mapStateToProps)(Page);