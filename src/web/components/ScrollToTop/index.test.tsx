import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import * as React from 'react';
import {
    assert,
    spy,
    SinonSpy
} from 'sinon';

// Components.
import ScrollToTop from './';

// Mocks.
import { MockRouteComponentProps } from '../../../../test/mocks/reactRouterMock';

interface Scope {
    props: MockRouteComponentProps;
    scrollToSpy: SinonSpy;
    wrapper: ShallowWrapper;
}

describe('src/web/components/ScrollToTop', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: MockRouteComponentProps = new MockRouteComponentProps();

        scope = {
            props,
            scrollToSpy: spy(window, 'scrollTo'),
            wrapper: shallow(<ScrollToTop {...props} />),
        };
    });

    afterEach(() => {
        scope.scrollToSpy.restore();
    });

    describe('when the component updates', () => {
        it.skip('should scroll to the top if the path has changed', () => {
            scope.wrapper.setProps({
                location: {
                    ...scope.props.location,
                    pathname: '/new-land',
                },
            });

            assert.calledWith(scope.scrollToSpy, 0, 0);
        });

        it('should not scroll to the top if the path has not changed', () => {
            const pathname: string = '/same-land';

            scope.wrapper.setProps({
                location: {
                    ...scope.props.location,
                    pathname,
                },
            });
            scope.scrollToSpy.resetHistory();
            scope.wrapper.setProps({
                location: {
                    ...scope.props.location,
                    pathname,
                },
            });

            assert.notCalled(scope.scrollToSpy);
        });
    });
});
