import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

// Components.
import { CrossSvg, IProps } from './CrossSvg';

interface IScope {
  props: IProps;
  wrapper: ShallowWrapper;
}

describe('<CrossSvg />>', () => {
  let scope: IScope;

  beforeEach(() => {
    const props: IProps = {};

    scope = {
      props,
      wrapper: shallow(<CrossSvg {...props} />),
    };
  });

  describe('<CrossSvg /> snapshots', () => {
    it('should match the snapshot', () => {
      expect(scope.wrapper).toMatchSnapshot();
    });

    it('should match the snapshot with optional properties', () => {
      scope.props.color = '#000';
      scope.props.hoverColor = '#fff';
      scope.props.size = '50px';

      expect(shallow(<CrossSvg {...scope.props} />)).toMatchSnapshot();
    });
  });
});
