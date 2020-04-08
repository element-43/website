import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

// Components.
import { BannerLogoSvg, IProps } from './BannerLogoSvg';

interface IScope {
  props: IProps;
  wrapper: ShallowWrapper;
}

describe('<BannerLogoSvg />', () => {
  let scope: IScope;

  beforeEach(() => {
    const props: IProps = {};

    scope = {
      props,
      wrapper: shallow(<BannerLogoSvg {...props} />),
    };
  });

  describe('<BannerLogoSvg /> snapshots', () => {
    it('should match the snapshot with the default properties', () => {
      expect(scope.wrapper).toMatchSnapshot();
    });

    it('should match the snapshot with optional properties', () => {
      scope.props.color = '#000';
      scope.props.hoverColor = '#fff';
      scope.props.size = '50px';

      expect(shallow(<BannerLogoSvg {...scope.props} />)).toMatchSnapshot();
    });
  });
});
