import _ from 'lodash';
import React from 'react';

// ActionCreators.
import { openTerminal } from '../../action-creators/AppicationActionCreators';

// Components.
import { KonamiCodeTest as KonamiCode } from './KonamiCode';

import { getDefaultProps } from '../../../../test/helpers';

describe('<KonamiCode />', () => {
    const scope = {
        props: null,
        event: null
    };

    beforeEach(() =>  {
        scope.props = getDefaultProps();
        scope.event = {
            keyCode: 38 // Up
        };
    });

    afterEach(() => {
        scope.props = _.noop();
        scope.event = _.noop();
    });

    describe('when the component mounts', () => {
        it('should add a keyup event listener', () => {
            const addEventListenerStub = stub(window, 'addEventListener');
            const wrapper = mount(<KonamiCode { ...scope.props } />);

            assert.calledWith(addEventListenerStub, 'keyup', wrapper.instance().onKeyUp);

            addEventListenerStub.restore();
        });
    });

    describe('when the component un-mounts', () => {
        it('should remove a keyup event listener', () => {
            const removeEventListenerStub = stub(window, 'removeEventListener');
            const wrapper = shallow(<KonamiCode { ...scope.props } />);

            wrapper.unmount();

            assert.calledWith(removeEventListenerStub, 'keyup');

            removeEventListenerStub.restore();
        });
    });

    describe('when pressing a key', () => {
        it('should not update the code position when an incorrect key is pressed', () => {
            const wrapper = shallow(<KonamiCode { ...scope.props } />);
            const instance = wrapper.instance();

            instance.codePosition = 1; // Set a point for the code position.
            scope.event.keyCode = 81; // Set a key not in the sequence.

            instance.onKeyUp(scope.event);

            expect(instance.codePosition).to.equal(0);
        });

        it('should update the code position when a correct key is pressed', () => {
            const wrapper = shallow(<KonamiCode { ...scope.props } />);
            const instance = wrapper.instance();

            scope.event.keyCode = 38; // First key in sequence.

            instance.onKeyUp(scope.event);

            expect(instance.codePosition).to.equal(1);
        });

        it('should activate when the last key is pressed', () => {
            const wrapper = shallow(<KonamiCode { ...scope.props } />);
            const instance = wrapper.instance();

            instance.codePosition = 9; // Second from last position.
            scope.event.keyCode = 65; // Last key in sequence.

            instance.onKeyUp(scope.event);

            assert.calledWith(scope.props.dispatch, openTerminal());
            expect(instance.codePosition).to.equal(0);
        });
    });
});
