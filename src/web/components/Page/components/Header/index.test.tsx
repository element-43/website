import { shallow } from 'enzyme';
import * as React from 'react';

// Components.
import { Header, Props } from './';

describe('/Page/components/Header', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      menu: [
        {
          path: '/fancy',
          title: 'Fancy app you got here',
        },
      ],
    };
  });

  describe('<Header /> snapshots', () => {
    it('should match the snapshot', () => {
      expect(shallow(<Header {...props} />)).toMatchSnapshot();
    });
  });
});
