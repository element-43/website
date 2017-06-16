import _ from 'lodash';
import React from 'react';

// ActionCreators.
import { ApplicationActionCreators } from '../../action-creators/index';

// Components.
import { KonamiCodeTest } from './KonamiCode';

import { getDefaultProps } from '../../../../test/helpers';

describe('<NavMenuItem />', () => {
    beforeEach(function() {
        this.props = getDefaultProps();
        this.event = {
            keyCode: 38 // Up
        };
    });

    afterEach(function() {
        this.props = _.noop();
        this.event = _.noop();
    });

    describe('when the component mounts', function() {
        it('should add a keyup event listener', function() {
            const addEventListenerStub = stub(window, 'addEventListener');
            const wrapper = mount(<KonamiCodeTest { ...this.props }>{ null }</KonamiCodeTest>);

            assert.calledWith(addEventListenerStub, 'keyup', wrapper.instance().onKeyUp);

            addEventListenerStub.restore();
        });
    });

    describe('when the component un-mounts', function() {
        it('should remove a keyup event listener', function() {
            const removeEventListenerStub = stub(window, 'removeEventListener');
            const wrapper = shallow(<KonamiCodeTest { ...this.props }>{ null }</KonamiCodeTest>);

            wrapper.unmount();

            assert.calledWith(removeEventListenerStub, 'keyup');

            removeEventListenerStub.restore();
        });
    });

    describe('when pressing a key', function() {
        it('should not update the code position when an incorrect key is pressed', function() {
            const wrapper = shallow(<KonamiCodeTest { ...this.props }>{ null }</KonamiCodeTest>);
            const instance = wrapper.instance();

            instance.codePosition = 1; // Set a point for the code position.
            this.event.keyCode = 81; // Set a key not in the sequence.

            instance.onKeyUp(this.event);

            expect(instance.codePosition).to.equal(0);
        });

        it('should update the code position when a correct key is pressed', function() {
            const wrapper = shallow(<KonamiCodeTest { ...this.props }>{ null }</KonamiCodeTest>);
            const instance = wrapper.instance();

            this.event.keyCode = 38; // First key in sequence.

            instance.onKeyUp(this.event);

            expect(instance.codePosition).to.equal(1);
        });

        it('should activate when the last key is pressed', function() {
            const wrapper = shallow(<KonamiCodeTest { ...this.props }>{ null }</KonamiCodeTest>);
            const instance = wrapper.instance();

            instance.codePosition = 9; // Second from last position.
            this.event.keyCode = 65; // Last key in sequence.

            instance.onKeyUp(this.event);

            assert.calledWith(this.props.dispatch, ApplicationActionCreators.openTerminal());
            expect(instance.codePosition).to.equal(0);
        });
    });
});
