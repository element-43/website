import { shallow } from 'enzyme';
import * as _ from 'lodash';

// Config.
import { document } from '../../common/strings';

// Utilities.
import { getHelmet } from './application';

describe('utilities/application', () => {
  describe('getHelmet()', () => {
    it('should return a node containing the correct children', () => {
      const props = shallow(getHelmet()).props();

      expect(props.title).toBeDefined();

      expect(_.some(props.meta, ['name', 'description'])).toBe(true);

      expect(_.some(props.meta, ['name', 'twitter:description'])).toBe(true);
      expect(_.some(props.meta, ['name', 'twitter:image'])).toBe(true);
      expect(_.some(props.meta, ['name', 'twitter:title'])).toBe(true);

      expect(_.some(props.meta, ['name', 'og:description'])).toBe(true);
      expect(_.some(props.meta, ['name', 'og:image'])).toBe(true);
      expect(_.some(props.meta, ['name', 'og:title'])).toBe(true);
      expect(_.some(props.meta, ['name', 'og:type'])).toBe(true);
      expect(_.some(props.meta, ['name', 'og:url'])).toBe(true);
    });

    it('should use the default values if nothing is specified', () => {
      const props = shallow(getHelmet()).props();

      expect(props.title).toBe(document.title);

      expect(_.find(props.meta, ['name', 'description']).content).toBe(
        document.description
      );

      expect(_.find(props.meta, ['name', 'twitter:description']).content).toBe(
        document.description
      );
      expect(_.find(props.meta, ['name', 'twitter:title']).content).toBe(
        document.title
      );

      expect(_.find(props.meta, ['name', 'og:description']).content).toBe(
        document.description
      );
      expect(_.find(props.meta, ['name', 'og:title']).content).toBe(
        document.title
      );
      expect(_.find(props.meta, ['name', 'og:type']).content).toBe('website');
    });

    it('should use the specified title on the relevant tags', () => {
      const title: string = 'I am Sparta!!!';
      const props = shallow(getHelmet(title)).props();

      expect(props.title).toBe(title);

      expect(_.find(props.meta, ['name', 'twitter:title']).content).toBe(title);

      expect(_.find(props.meta, ['name', 'og:title']).content).toBe(title);
    });
  });
});
