import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import * as React from 'react';

// Components.
import {
    Page,
    Props
} from './';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/components/Page', () => {
    let scope: Scope;

    beforeEach(() => {
        const children: React.ReactNode = (<h1>Hello human</h1>);
        const props: Props = {
            children,
        };

        scope = {
            props,
            wrapper: shallow(<Page {...props}>{children}</Page>),
        };
    });

    describe('<Page /> snapshots', () => {
        it('should match the snapshot with default props', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });

        it('should match the snapshot with the optional props', () => {
            let wrapper: ShallowWrapper;

            scope.props.title = 'Funny, I think this is the beginning...';

            wrapper = shallow(<Page {...scope.props}>{scope.props.children}</Page>);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
