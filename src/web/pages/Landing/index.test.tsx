import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Component.
import { Landing } from './';

// Mocks.
import { MockRouteComponentProps } from '../../../../test/mocks/reactRouterMock';

interface Scope {
    props: RouteComponentProps<{}>;
    wrapper: ShallowWrapper;
}

describe('/pages/Landing', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: RouteComponentProps<{}> = {
            ...new MockRouteComponentProps(),
        };

        scope = {
            props,
            wrapper: shallow(<Landing { ...props } />),
        };
    });

    describe('<Landing /> snapshots', () => {
        it('should match the snapshot', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });
    });
});
