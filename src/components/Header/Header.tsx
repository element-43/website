import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components.
import { BannerLogoSvg } from '../BannerLogoSvg';

// Styles.
import palette from '../../styles/palette';

// Types.
import { IApplicationState } from '../../store';
import { IMenuConfig, IMenuItem } from '../../store/layout/types';

interface IProps {
  menu: IMenuConfig;
}

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
  flex-direction: column;
  justify-content: space-around;
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
const Wrapper = styled.header`
  background-color: ${palette.brand.purple500};
  max-width: 25rem;
  padding: 2rem 0 0;
  width: 30%;
`;

export const Header: React.FC<IProps> = (props: IProps) => (
  <Wrapper>
    <Inner>
      <MenuContainer>
        <Link to="/">
          <BannerLogoSvg
            color={palette.greyScale.white}
            hoverColor={palette.brand.green500}
            size="4rem"
          />
        </Link>
        <Navigation>
          {props.menu.items.map((item: IMenuItem, index: number) => (
            <MenuItemLink key={`header__menu-item-${index}`} to={item.route}>
              {item.title}
            </MenuItemLink>
          ))}
        </Navigation>
      </MenuContainer>
    </Inner>
  </Wrapper>
);

const mapStateToProps = (state: IApplicationState) => {
  return {
    menu: state.layout.menu,
  };
};

export default connect(mapStateToProps)(Header);
