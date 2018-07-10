import _ from 'lodash';
import React from 'react';

// Components.
import { SvgIconTest as SvgIcon } from './SvgIcon';

// Helpers.
import { getDefaultProps } from '../../../../test/helpers';

// Utilities.
import { blackColour, whiteColour } from '../../utilities/StylesUtil';

describe('<SvgIcon />', () => {
    const title = 'Some glorious title for screen readers';
    const scope = {
        props: null
    };
    const viewBox = '0 0 0 0';

    beforeEach(() => {
        scope.props = _.assign(getDefaultProps(), { title, viewBox });
    });

    afterEach(() => {
        scope.props = _.noop();
    });

    describe('when the component mounts', () => {
        it('should set the default props', () => {
            const instance = shallow(<SvgIcon { ...scope.props }><div /></SvgIcon>)
                .instance();

            expect(instance.props.colour).to.equal(whiteColour);
            expect(instance.props.size).to.equal(2.5);
        });

        it('should set the correct properties', () => {
            const size = 5;
            let wrapper;

            _.assign(scope.props, { colour: blackColour, size });

            wrapper = shallow(<SvgIcon { ...scope.props }><div /></SvgIcon>);

            // <svg>
            expect(wrapper.prop('width')).to.equal(`${size}rem`);
            expect(wrapper.prop('height')).to.equal(`${size}rem`);
            expect(wrapper.prop('viewBox')).to.equal(viewBox);

            // <title>
            expect(wrapper.find('title').text()).to.equal(title);
        });

        context('onClick property', () => {
            it('should not add the extra styles if the onClick property is not defined', () => {
                const wrapper = shallow(<SvgIcon { ...scope.props }><div /></SvgIcon>);

                expect(wrapper.prop('styleName')).to.not.include('hoverable');
                expect(wrapper.prop('style')).to.undefined;
            });

            it('should add extra styles if the onClick property is defined', () => {
                let wrapper;

                _.assign(scope.props, { onClick: stub() });

                wrapper = shallow(<SvgIcon { ...scope.props }><div /></SvgIcon>);

                expect(wrapper.prop('styleName')).to.include('hoverable');
                expect(wrapper.prop('style')).to.have.property('cursor');
            });
        });
    });
});
