import { shallow } from 'enzyme';
import * as React from 'react';

// Component.
import { Home } from './Home';

describe('/pages/Home', () => {
  describe('<Home /> snapshots', () => {
    it('should match the snapshot', () => {
      expect(shallow(<Home />)).toMatchSnapshot();
    });
  });
});
