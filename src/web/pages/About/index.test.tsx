import { shallow } from 'enzyme';
import * as React from 'react';

// Component.
import { About } from './';

describe('src/pages/About', () => {
  describe('<About /> snapshots', () => {
    it('should match the snapshot', () => {
      expect(shallow(<About />)).toMatchSnapshot();
    });
  });
});
