import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { IProps, KonamiCode } from './KonamiCode';

interface IScope {
  props: IProps;
  wrapper: ShallowWrapper;
}

describe('src/components/KonamiCode', () => {
  let scope: IScope;

  beforeEach(() => {
    const props: IProps = {
      openAsteroids: jest.fn(),
    };

    scope = {
      props,
      wrapper: shallow(<KonamiCode {...props} />),
    };
  });

  describe('when the component mounts', () => {
    it('should add a keyup event listener', () => {
      const addEventListenerSpy: jest.SpyInstance = jest.spyOn(
        window,
        'addEventListener'
      );
      const wrapper: ShallowWrapper = shallow(<KonamiCode {...scope.props} />);

      expect(addEventListenerSpy).toBeCalledWith(
        'keyup',
        (wrapper.instance() as KonamiCode).onKeyUp
      );

      addEventListenerSpy.mockRestore();
    });
  });

  describe('when the component un-mounts', () => {
    it('should remove a keyup event listener', () => {
      const removeEventListenerSpy: jest.SpyInstance = jest.spyOn(
        window,
        'removeEventListener'
      );
      const wrapper: ShallowWrapper = shallow(<KonamiCode {...scope.props} />);

      wrapper.unmount();
      expect(removeEventListenerSpy).toBeCalledWith('keyup');

      removeEventListenerSpy.mockRestore();
    });
  });
});
