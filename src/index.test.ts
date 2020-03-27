import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Components.
import { App } from './components/App/App';

// Module.
import { onDOMContentLoaded } from './index';

interface IScope {
  createElementSpy: jest.SpyInstance;
  renderStub: jest.SpyInstance;
}

describe('index', () => {
  let scope: IScope;

  beforeEach(() => {
    scope = {
      createElementSpy: jest.spyOn(React, 'createElement'),
      renderStub: jest.spyOn(ReactDOM, 'render'),
    };
  });

  describe('onDOMContentLoaded()', () => {
    it('should not render the <App/> component if the "#root" element does not exist', () => {
      const originalGetElementById: (elementId: string) => HTMLElement | null =
        document.getElementById;

      document.getElementById = jest.fn();

      onDOMContentLoaded();

      expect(scope.createElementSpy).not.toBeCalled();
      expect(scope.renderStub).not.toBeCalled();

      document.getElementById = originalGetElementById;
    });

    it('should render the <App/> component if the "#root" element exists', () => {
      onDOMContentLoaded();

      expect(scope.createElementSpy).toBeCalledWith(App);
      expect(scope.renderStub).toBeCalled();
    });
  });
});
