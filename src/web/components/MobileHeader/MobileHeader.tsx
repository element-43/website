import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionCreator, bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';
import { animate } from 'velocity-animate';

// Action creators.
import { closeMenu, openMenu } from '../../store/layout/actionCreators';
import { push } from '../../store/router/actionCreators';

// Components.
import { BannerLogoSvg } from '../BannerLogoSvg';
import { CrossSvg } from '../CrossSvg';
import { MenuSvg } from '../MenuSvg';

// Styles.
import palette from '../../styles/palette';

// Types.
import { ApplicationState } from '../../store';
import {
  CloseMenuAction,
  MenuConfig,
  MenuItem,
  OpenMenuAction,
} from '../../store/layout/types';
import { PushAction } from '../../store/router/types';

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
  padding: 2rem;
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
const NavigationContainer = styled.div`
  align-items: flex-end;
  display: none;
  flex-direction: column;
  opacity: 0;
  padding: 2rem;
  position: relative;
`;
const Overlay = styled.div`
  background-color: ${palette.brand.purple500};
  height: 0;
  left: 50%;
  position: fixed;
  top: 50%;
  width: 0;
  z-index: 9999;
`;
const Wrapper = styled.header`
  width: 100%;
`;

export interface Props {
  closeMenu: ActionCreator<CloseMenuAction>;
  menu: MenuConfig;
  openMenu: ActionCreator<OpenMenuAction>;
  push: ActionCreator<PushAction>;
}

export class MobileHeader extends React.PureComponent<Props> {
  private readonly navigationContainerRef: React.RefObject<HTMLDivElement>;
  private readonly overlayRef: React.RefObject<HTMLDivElement>;

  private onMenuItemClick = (path: string) => (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    this.props.push(path);
    this.closeMenu();
  };

  constructor(props: Props) {
    super(props);

    this.navigationContainerRef = React.createRef();
    this.overlayRef = React.createRef();
  }

  private async closeMenu(): Promise<void> {
    const navigationContainerElement: HTMLDivElement | null = this
      .navigationContainerRef.current;
    const overlayElement: HTMLDivElement | null = this.overlayRef.current;

    if (navigationContainerElement && overlayElement) {
      await animate(
        navigationContainerElement,
        { opacity: 0 },
        {
          duration: 250,
          queue: false,
        }
      );

      await animate(
        overlayElement,
        {
          height: 0,
          left: '50%',
          top: '50%',
          width: 0,
        },
        {
          duration: 250,
          queue: false,
        }
      );
    }
  }

  private async openMenu(): Promise<void> {
    const navigationContainerElement: HTMLDivElement | null = this
      .navigationContainerRef.current;
    const overlayElement: HTMLDivElement | null = this.overlayRef.current;

    if (navigationContainerElement && overlayElement) {
      await animate(
        overlayElement,
        {
          height: '100%',
          left: 0,
          top: 0,
          width: '100%',
        },
        {
          duration: 250,
          queue: false,
        }
      );

      await animate(
        navigationContainerElement,
        { opacity: 1 },
        {
          display: 'flex',
          duration: 250,
          queue: false,
        }
      );
    }
  }

  public render(): React.ReactElement<MobileHeader> {
    const { menu } = this.props;

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
          <IconButtonContainer onClick={() => this.openMenu()}>
            <MenuSvg
              color={palette.brand.purple500}
              hoverColor={palette.brand.green500}
              size="3rem"
            />
          </IconButtonContainer>
        </MenuIconContainer>
        <Overlay ref={this.overlayRef}>
          <NavigationContainer ref={this.navigationContainerRef}>
            <IconButtonContainer onClick={() => this.closeMenu()}>
              <CrossSvg
                color={palette.greyScale.white}
                hoverColor={palette.brand.green500}
                size="3rem"
              />
            </IconButtonContainer>
            <Navigation>
              {menu.items.map((item: MenuItem, index: number) => (
                <MenuItemLink
                  key={`mobile-header__menu-item-${index}`}
                  onClick={this.onMenuItemClick(item.route)}
                >
                  {item.title}
                </MenuItemLink>
              ))}
            </Navigation>
          </NavigationContainer>
        </Overlay>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeMenu: bindActionCreators(closeMenu, dispatch),
  openMenu: bindActionCreators(openMenu, dispatch),
  push: bindActionCreators(push, dispatch),
});
const mapStateToProps = (state: ApplicationState) => {
  return {
    menu: state.layout.menu,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileHeader);
