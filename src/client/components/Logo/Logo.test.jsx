import _ from 'lodash';
import React from 'react';

// Components.
import Logo from './Logo';

// Helpers.
import { getDefaultProps } from '../../../../test/helpers';

// Utilities.
import { primary500Colour, whiteColour } from '../../utilities/StylesUtil';

describe('<Logo />', () => {
    const scope = {
        props: null
    };

    beforeEach(() => {
        scope.props = getDefaultProps();
    });

    afterEach(() => {
        scope.props = _.noop();
    });

    describe('when the component mounts', () => {
        context('default state', () => {
            it('should set the default state', () => {
                const instance = shallow(<Logo { ...scope.props } />).instance();

                expect(instance.state.fill).to.equal(primary500Colour);
                expect(instance.state.height).to.be.null;
                expect(instance.state.width).to.equal('45rem');
            });
        });

        context('colour property', () => {
            it('should set to black colour if the colour is not recognised', () => {
                let instance;

                _.assign(scope.props, { colour: 'fluffy pink' });

                instance = shallow(<Logo { ...scope.props } />).instance();

                expect(instance.state.fill).to.equal(primary500Colour);
            });

            it('should set to white colour', () => {
                let instance;

                _.assign(scope.props, { colour: 'white' });

                instance = shallow(<Logo { ...scope.props } />).instance();

                expect(instance.state.fill).to.equal(whiteColour);
            });
        });

        context('height/width properties', () => {
            it('should set the width to null when the height property is set', () => {
                const height = 3;
                let instance;

                _.assign(scope.props, { height, width: 25 });

                instance = shallow(<Logo { ...scope.props } />).instance();

                expect(instance.state.height).to.equal(`${height}rem`);
                expect(instance.state.width).to.be.null;
            });

            it('should set the width state', () => {
                const width = 3;
                let instance;

                _.assign(scope.props, { width });

                instance = shallow(<Logo { ...scope.props } />).instance();

                expect(instance.state.width).to.equal(`${width}rem`);
            });
        });
    });
});
