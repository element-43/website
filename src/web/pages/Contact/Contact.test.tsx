import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Component.
import { Contact } from './Contact';

// Mocks.
import { MockRouteComponentProps } from '../../../../__mocks__/reactRouterMock';

interface Scope {
  props: RouteComponentProps<{}>;
  wrapper: ShallowWrapper;
}

describe('/pages/Contact', () => {
  let scope: Scope;

  beforeEach(() => {
    const props: RouteComponentProps<{}> = {
      ...new MockRouteComponentProps(),
    };

    scope = {
      props,
      wrapper: shallow(<Contact {...props} />),
    };
  });

  describe('<Contact /> snapshots', () => {
    it('should match the snapshot', () => {
      expect(scope.wrapper).toMatchSnapshot();
    });
  });
});
