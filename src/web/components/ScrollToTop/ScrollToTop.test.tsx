import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { Props, ScrollToTop } from './ScrollToTop';

// Mocks.
import { MockLocation } from '../../../../__mocks__/reactRouterMock';

interface Scope {
  props: Props;
  scrollToSpy: jest.SpyInstance;
  wrapper: ShallowWrapper;
}

describe('src/web/components/ScrollToTop', () => {
  let scope: Scope;

  beforeEach(() => {
    const props: Props = {
      location: new MockLocation(),
    };

    scope = {
      props,
      scrollToSpy: jest.spyOn(window, 'scrollTo'),
      wrapper: shallow(<ScrollToTop {...props} />),
    };
  });

  describe('when the component updates', () => {
    it('should scroll to the top if the path has changed', () => {
      scope.wrapper.setProps({
        location: {
          ...scope.props.location,
          pathname: '/new-land',
        },
      } as Props);

      expect(scope.scrollToSpy).toBeCalled();
    });

    it('should not scroll to the top if the path has not changed', () => {
      const pathname: string = '/same-land';

      scope.wrapper.setProps({
        location: {
          ...scope.props.location,
          pathname,
        },
      } as Props);
      scope.scrollToSpy.mockReset();
      scope.wrapper.setProps({
        location: {
          ...scope.props.location,
          pathname,
        },
      } as Props);

      expect(scope.scrollToSpy).not.toBeCalled();
    });
  });
});