import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import {
    CrossSvg,
    Props
} from './';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/components/CrossSvg', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {};

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
