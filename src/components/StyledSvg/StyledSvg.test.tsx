import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

// Config.
import palette from '../../theme/palette';

// Components.
import { Props, StyledSvg } from './StyledSvg';

interface IScope {
  props: Props;
  wrapper: ShallowWrapper;
}

describe('<StyledSvg />>', () => {
  let scope: IScope;

  beforeEach(() => {
    const props: Props = {
      viewBox: '0 0 0 0',
    };

    scope = {
      props,
      wrapper: shallow(<StyledSvg {...props} />),
    };
  });

  describe('<StyledSvg /> snapshots', () => {
    it('should match the snapshot with the default props', () => {
      expect(scope.wrapper).toMatchSnapshot();
    });

    it('should match the snapshot with the optional props', () => {
      scope.props.color = palette.ui.red;
      scope.props.hoverColor = palette.greyScale.white;
      scope.props.size = '100px';

      expect(shallow(<StyledSvg {...scope.props} />)).toMatchSnapshot();
    });
  });
});
