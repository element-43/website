import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import * as React from 'react';
import {
    assert,
    SinonStub,
    stub
} from 'sinon';

// Components.
import {
    KonamiCode,
    Props,
    State
} from './';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/web/components/KonamiCode', () => {
    let scope: Scope;

    beforeEach(() =>  {
        const props: Props = {
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
            openTerminal: jest.fn(),
        };

        scope = {
            props,
            wrapper: shallow(<KonamiCode { ...props } />),
        };
    });

    describe('when the component mounts', () => {
        it('should add a keyup event listener', () => {
            const addEventListenerStub: SinonStub = stub(window, 'addEventListener');
            const wrapper: ShallowWrapper = shallow(<KonamiCode { ...scope.props } />)

            assert.calledWith(addEventListenerStub, 'keyup', (wrapper.instance() as KonamiCode).onKeyUp);

            addEventListenerStub.restore();
        });
    });

    describe('when the component un-mounts', () => {
        it('should remove a keyup event listener', () => {
            const removeEventListenerStub: SinonStub = stub(window, 'removeEventListener');
            const wrapper: ShallowWrapper = shallow(<KonamiCode { ...scope.props } />);

            wrapper.unmount();

            assert.calledWith(removeEventListenerStub, 'keyup');

            removeEventListenerStub.restore();
        });
    });

    describe.skip('when pressing a key', () => {
        it('should not update the code position when an incorrect key is pressed', () => {
            const event: KeyboardEvent = new KeyboardEvent('keyup', { code: '81' }); // Set a key not in the sequence.
            scope.wrapper.setState({
                position: 1,
            });

            window.dispatchEvent(event);

            expect((scope.wrapper.state() as State).position).toBe(0);
        });

        it('should update the code position when a correct key is pressed', () => {
            const event: KeyboardEvent = new KeyboardEvent('keyup', { code: '38' }); // First key in sequence.
            scope.wrapper.setState({
                position: 0,
            });

            window.dispatchEvent(event);

            expect((scope.wrapper.state() as State).position).toBe(1);
        });

        it('should activate when the last key is pressed', () => {
            const event: KeyboardEvent = new KeyboardEvent('keyup', { code: '65' }); // Last key in sequence.
            scope.wrapper.setState({
                position: 9, // Second from last position.
            });

            window.dispatchEvent(event);

            expect(scope.props.openTerminal).toBeCalled();
            expect((scope.wrapper.state() as State).position).toBe(0);
        });
    });
});
