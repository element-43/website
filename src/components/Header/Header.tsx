import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components.
import BannerLogoSvg from '../BannerLogoSvg';
import GitHubSvg from '../GitHubSvg';
import LinkedInSvg from '../LinkedInSvg';
import TwitterSvg from '../TwitterSvg';

// Constants.
import { Links } from '../../constants';

// Theme.
import palette from '../../theme/palette';

// Types.
import { IApplicationState } from '../../store';
import { IMenuConfig, IMenuItem } from '../../store/layout/types';

const HomeLink = styled(Link)`
  margin: 0 0 1rem;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;
`;
const MenuContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;
const MenuItemLink = styled(Link)`
  color: ${palette.greyScale.white};
  font-size: 1.7rem;
  line-height: 2.3rem;
`;
const Navigation = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem;
  padding: 0;
  width: 100%;
`;
const SocialContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 3rem;
`;
const SocialLink = styled.a`
  display: block;
  padding: 0 1rem;
`;
const Wrapper = styled.header`
  background-color: ${palette.brand.purple500};
  max-width: 25rem;
  padding: 2rem 0 0;
  width: 30%;
`;

export const Header: React.FunctionComponent = () => {
  const menu: IMenuConfig = useSelector(
    (state: IApplicationState) => state.layout.menu
  );

  return (
    <Wrapper>
      <Inner>
        <MenuContainer>
          <HomeLink to="/">
            <BannerLogoSvg
              color={palette.greyScale.white}
              hoverColor={palette.brand.green500}
              size="4rem"
            />
          </HomeLink>
          <Navigation>
            {menu.items.map((item: IMenuItem, index: number) => (
              <MenuItemLink key={`header__menu-item-${index}`} to={item.route}>
                {item.title}
              </MenuItemLink>
            ))}
          </Navigation>
          <SocialContainer>
            <SocialLink href={Links.GITHUB} target="_blank">
              <GitHubSvg
                color={palette.greyScale.white}
                hoverColor={palette.brand.green500}
                size="3rem"
              />
            </SocialLink>
            <SocialLink href={Links.TWITTER} target="_blank">
              <TwitterSvg
                color={palette.greyScale.white}
                hoverColor={palette.brand.green500}
                size="3rem"
              />
            </SocialLink>
            <SocialLink href={Links.LIKNEDIN} target="_blank">
              <LinkedInSvg
                color={palette.greyScale.white}
                hoverColor={palette.brand.green500}
                size="3rem"
              />
            </SocialLink>
          </SocialContainer>
        </MenuContainer>
      </Inner>
    </Wrapper>
  );
};

export default Header;
