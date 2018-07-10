import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import {
    BannerLogoSvg,
    Props
} from './';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/components/BannerLogoSvg', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {};

        scope = {
            props,
            wrapper: shallow(<BannerLogoSvg {...props} />),
        };
    });

    describe('<BannerLogoSvg /> snapshots', () => {
        it('should match the snapshot with the default properties', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });

        it('should match the snapshot with optional properties', () => {
            scope.props.color = '#000';
            scope.props.hoverColor = '#fff';
            scope.props.size = '50px';

            expect(shallow(<BannerLogoSvg {...scope.props} />)).toMatchSnapshot();
        });
    });
});
