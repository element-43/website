import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// Components.
import DesktopLayout from '../DesktopLayout';
import Header from '../Header';
import MobileHeader from '../MobileHeader';
import MobileLayout from '../MobileLayout';

// Theme.
import media from '../../theme/media';
import palette from '../../theme/palette';
import typography from '../../theme/typography';

// Types.
import { IApplicationState } from '../../store';

// Utils.
import getHelmet from '../../utils/getHelmet';

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

  ${media.tablet`
    flex-direction: column;
    justify-content: flex-start;
  `}
`;

export interface IProps {
  children: React.ReactNode;
}

export const Page: React.FunctionComponent<IProps> = (props: IProps) => {
  const title: string = useSelector(
    (state: IApplicationState) => state.layout.title
  );

  return (
    <Wrapper>
      {getHelmet(title)}
      <MobileLayout>
        <MobileHeader />
      </MobileLayout>
      <DesktopLayout>
        <Header />
      </DesktopLayout>
      <Main>{props.children}</Main>
    </Wrapper>
  );
};

export default Page;
