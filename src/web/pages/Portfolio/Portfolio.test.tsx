import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Component.
import { Portfolio } from './';

// Mocks.
import { MockRouteComponentProps } from '../../../../__mocks__/reactRouterMock';

interface Scope {
  props: RouteComponentProps<Portfolio>;
  wrapper: ShallowWrapper;
}

describe('/pages/Portfolio', () => {
  let scope: Scope;

  beforeEach(() => {
    const props: RouteComponentProps<Portfolio> = {
      ...new MockRouteComponentProps(),
    };

    scope = {
      props,
      wrapper: shallow(<Portfolio {...props} />),
    };
  });

  describe('<Portfolio /> snapshots', () => {
    it('should match the snapshot', () => {
      expect(scope.wrapper).toMatchSnapshot();
    });
  });
});
