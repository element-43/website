import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import * as React from 'react';
import { stub } from 'sinon';

// Components.
import {
    MobileHeader,
    Props
} from './';

// Mocks.
import { MockRouteComponentProps } from '../../../../../../test/mocks/reactRouterMock';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('/Page/components/MobileHeader', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            ...new MockRouteComponentProps(),
            closeMenu: stub(),
            layout: {
                asteroids: {
                    isOpen: false,
                },
                header: {
                    isMenuOpen: false,
                },
                terminal: {
                    isOpen: false,
                },
            },
            menu: [
                {
                    path: '/fancy',
                    title: 'Fancy app you got here',
                }
            ],
            openMenu: stub(),
        };

        scope = {
            props,
            wrapper: shallow(<MobileHeader {...props} />),
        };
    });

    describe('<MobileHeader /> snapshots', () => {
        it('should match the snapshot', () => {
            expect(shallow(<MobileHeader {...scope.props} />)).toMatchSnapshot();
        });
    });
});
