import * as React from 'react';
import styled from 'styled-components';

// Config.
import { routes } from '../../../common/defaults';
import { pages } from '../../../common/strings';

// Components.
import { DesktopLayout } from '../DesktopLayout';
import { Header } from './components/Header';
import MobileHeader from './components/MobileHeader';
import { MobileLayout } from '../MobileLayout';

// Styles.
import media from '../../styles/media';
import palette from '../../styles/palette';
import typography from '../../styles/typography';

// Utils.
import { getHelmet } from '../../utils/application';

interface MenuItem {
  path: string;
  title: string;
}

interface Props {
  children: React.ReactNode;
  title?: string;
}

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

  ${media.mobileOnly`
    flex-direction: column;
    justify-content: flex-start;
  `}
`;

const menu: MenuItem[] = [
  {
    title: pages.about.title,
    path: routes.about,
  },
  {
    title: pages.portfolio.title,
    path: routes.portfolio,
  },
  {
    title: pages.contact.title,
    path: routes.contact,
  },
];

const Page: React.SFC<Props> = (props: Props) => (
  <Wrapper>
    {getHelmet(props.title)}
    <MobileLayout>
      <MobileHeader menu={menu} />
    </MobileLayout>
    <DesktopLayout>
      <Header menu={menu} />
    </DesktopLayout>
    <Main>{props.children}</Main>
  </Wrapper>
);

export { MenuItem, Page, Props };
