import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

// Actions.
import { closeMenuAction, openMenuAction } from '../../store/layout/actions';
import { push } from '../../store/router/actions';

// Components.
import BannerLogoSvg from '../BannerLogoSvg';
import CrossSvg from '../CrossSvg';
import MenuSvg from '../MenuSvg';

// Hooks.
import { usePrevious } from '../../hooks';

// Theme.
import palette from '../../theme/palette';

// Types.
import { IApplicationState } from '../../store';
import { IMenuItem } from '../../store/layout/types';

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
const NavigationContainer = styled.div<IAnimatedProps>`
  align-items: flex-end;
  display: none;
  flex-direction: column;
  padding: 2rem;
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
          display: block;
          height: 0;
          left: 50%;
          top: 50%;
          width: 0;
        `;
      }

      return css`
        animation: 250ms 250ms forwards ${growInAnimation};
        display: block;
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
      `;
    }

    return '';
  }}
`;
const Wrapper = styled.header`
  width: 100%;
`;

export const MobileHeader: React.FC = () => {
  const dispatch = useDispatch();
  const items: IMenuItem[] = useSelector(
    (state: IApplicationState) => state.layout.menu.items
  );
  const open: boolean = useSelector(
    (state: IApplicationState) => state.layout.menu.open
  );
  const prevOpen: boolean | undefined = usePrevious<boolean | undefined>(open);
  const handleMenuClick = (path: string) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    dispatch(closeMenuAction());
    dispatch(push(path));
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
        <NavigationContainer open={open} prevOpen={prevOpen}>
          <IconButtonContainer onClick={() => dispatch(closeMenuAction())}>
            <CrossSvg
              color={palette.greyScale.white}
              hoverColor={palette.brand.green500}
              size="3rem"
            />
          </IconButtonContainer>
          <Navigation>
            {items.map((item: IMenuItem, index: number) => (
              <MenuItemLink
                key={`mobile-header__menu-item-${index}`}
                onClick={handleMenuClick(item.route)}
              >
                {item.title}
              </MenuItemLink>
            ))}
          </Navigation>
        </NavigationContainer>
      </Overlay>
    </Wrapper>
  );
};

export default MobileHeader;
