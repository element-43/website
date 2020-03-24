import { shallow } from 'enzyme';
import * as _ from 'lodash';
import { HelmetProps } from 'react-helmet';

// Config.
import { Titles } from '../constants';

// Module.
import getHelmet from './getHelmet';

describe('getHelmet()', () => {
  it('should return a node containing the correct children', () => {
    const props: HelmetProps = shallow(getHelmet()).props();

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
    const props: HelmetProps = shallow(getHelmet()).props();

    expect(props.title).toBe(Titles.DEFAULT);

    expect(_.find(props.meta, ['name', 'twitter:title']).content).toBe(
      Titles.DEFAULT
    );
    expect(_.find(props.meta, ['name', 'og:title']).content).toBe(
      Titles.DEFAULT
    );
    expect(_.find(props.meta, ['name', 'og:type']).content).toBe('website');
  });

  it('should use the specified title on the relevant tags', () => {
    const title: string = 'I am Sparta!!!';
    const props: HelmetProps = shallow(getHelmet(title)).props();

    expect(props.title).toBe(title);

    expect(_.find(props.meta, ['name', 'twitter:title']).content).toBe(title);

    expect(_.find(props.meta, ['name', 'og:title']).content).toBe(title);
  });
});
