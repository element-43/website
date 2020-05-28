import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

// Actions.
import { closeMenuAction, openMenuAction, pushAction } from '../../actions';

// Components.
import BannerLogoSvg from '../BannerLogoSvg';
import CrossSvg from '../CrossSvg';
import GitHubSvg from '../GitHubSvg';
import LinkedInSvg from '../LinkedInSvg';
import MenuSvg from '../MenuSvg';
import TwitterSvg from '../TwitterSvg';

// Constants.
import { Links } from '../../constants';

// Hooks.
import { usePrevious } from '../../hooks';

// Theme.
import palette from '../../theme/palette';

// Types.
import { ApplicationState, MenuItem } from '../../types';

interface IAnimatedProps {
  open: boolean;
  prevOpen: boolean | undefined;
}

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const growInAnimation = keyframes`
  from {
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
  }
  to {
    height: 0;
    left: 50%;
    top: 50%;
    width: 0;
  }
`;
const growOutAnimation = keyframes`
  from {
    height: 0;
    left: 50%;
    top: 50%;
    width: 0;
  }
  to {
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
  }
`;
const IconButtonContainer = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;

  &:active {
    outline: 0;
  }
`;
const MenuContainer = styled.div<IAnimatedProps>`
  align-items: flex-end;
  display: none;
  flex: 1;
  flex-direction: column;
  margin: 2rem 2rem 0;
  position: relative;
  ${({ open, prevOpen }) => {
    if (prevOpen !== undefined && prevOpen !== open) {
      if (open) {
        return css`
          animation: 250ms 250ms forwards ${fadeInAnimation};
          display: flex;
          opacity: 0;
        `;
      }

      return css`
        animation: 250ms forwards ${fadeOutAnimation};
        display: flex;
        opacity: 1;
      `;
    }

    return '';
  }}
`;
const MenuIconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.4rem;
`;
const MenuIconLink = styled(Link)`
  display: block;
`;
const MenuItemLink = styled.a`
  color: ${palette.greyScale.white};
  font-size: 3rem;
  line-height: 4rem;
`;
const Navigation = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 0;
  width: 100%;
`;
const Overlay = styled.div<IAnimatedProps>`
  background-color: ${palette.brand.purple500};
  display: none;
  position: fixed;
  z-index: 9999;
  ${({ open, prevOpen }) => {
    if (prevOpen !== undefined && prevOpen !== open) {
      if (open) {
        return css`
          animation: 250ms forwards ${growOutAnimation};
          display: flex;
          height: 0;
          left: 50%;
          top: 50%;
          width: 0;
        `;
      }

      return css`
        animation: 250ms 250ms forwards ${growInAnimation};
        display: flex;
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
      `;
    }

    return '';
  }}
`;
const SocialContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 3rem;
  width: 100%;
`;
const SocialLink = styled.a`
  display: block;
  padding: 0 1rem;
`;
const Wrapper = styled.header`
  width: 100%;
`;

export const MobileHeader: React.FC = () => {
  const dispatch = useDispatch();
  const items: MenuItem[] = useSelector(
    (state: ApplicationState) => state.layout.menu.items
  );
  const open: boolean = useSelector(
    (state: ApplicationState) => state.layout.menu.open
  );
  const prevOpen: boolean | undefined = usePrevious<boolean | undefined>(open);
  const handleMenuClick = (path: string) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    dispatch(closeMenuAction());
    dispatch(pushAction(path));
  };

  return (
    <Wrapper>
      <MenuIconContainer>
        <MenuIconLink to="/">
          <BannerLogoSvg
            color={palette.brand.purple500}
            hoverColor={palette.brand.green500}
            size="4rem"
          />
        </MenuIconLink>
        <IconButtonContainer onClick={() => dispatch(openMenuAction())}>
          <MenuSvg
            color={palette.brand.purple500}
            hoverColor={palette.brand.green500}
            size="3rem"
          />
        </IconButtonContainer>
      </MenuIconContainer>
      <Overlay open={open} prevOpen={prevOpen}>
        <MenuContainer open={open} prevOpen={prevOpen}>
          <IconButtonContainer onClick={() => dispatch(closeMenuAction())}>
            <CrossSvg
              color={palette.greyScale.white}
              hoverColor={palette.brand.green500}
              size="3rem"
            />
          </IconButtonContainer>
          <Navigation>
            {items.map((item: MenuItem, index: number) => (
              <MenuItemLink
                key={`mobile-header__menu-item-${index}`}
                onClick={handleMenuClick(item.route)}
              >
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
      </Overlay>
    </Wrapper>
  );
};

export default MobileHeader;
