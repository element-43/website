import { shallow } from 'enzyme';
import * as React from 'react';

// Components.
import { App } from './App';

describe('src/App', () => {
  describe('<App /> snapshots', () => {
    it('should match the snapshot with default props', () => {
      expect(shallow(<App />)).toMatchSnapshot();
    });
  });
});
