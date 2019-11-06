import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { MenuSvg, Props } from './';

interface Scope {
  props: Props;
  wrapper: ShallowWrapper;
}

describe('src/components/MenuSvg', () => {
  let scope: Scope;

  beforeEach(() => {
    const props: Props = {};

    scope = {
      props,
      wrapper: shallow(<MenuSvg {...props} />),
    };
  });

  describe('<MenuSvg /> snapshots', () => {
    it('should match the snapshot', () => {
      expect(scope.wrapper).toMatchSnapshot();
    });

    it('should match the snapshot with optional properties', () => {
      scope.props.color = '#000';
      scope.props.hoverColor = '#fff';
      scope.props.size = '50px';

      expect(shallow(<MenuSvg {...scope.props} />)).toMatchSnapshot();
    });
  });
});
