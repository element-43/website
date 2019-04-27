import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Config.
import palette from '../../styles/palette';

// Components.
import { Props, StyledSvg } from './index';

interface Scope {
  props: Props;
  wrapper: ShallowWrapper;
}

describe('/components/StyledSvg', () => {
  let scope: Scope;

  beforeEach(() => {
    const props: Props = {
      viewBox: '0 0 0 0',
    };

    scope = {
      props,
      wrapper: shallow(<StyledSvg {...props} />),
    };
  });

  describe('<SvgIcon /> snapshots', () => {
    it('should match the snapshot with the default props', () => {
      expect(scope.wrapper).toMatchSnapshot();
    });

    it('should match the snapshot with the optional props', () => {
      let wrapper: ShallowWrapper;

      scope.props.color = palette.ui.red;
      scope.props.hoverColor = palette.greyScale.white;
      scope.props.size = '100px';

      wrapper = shallow(<StyledSvg {...scope.props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
