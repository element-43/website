import * as React from 'react';
import { Helmet } from 'react-helmet';

// Strings.
import { Titles } from '../../common/strings';

/**
 * Creates a <Helmet> node that is used by react-helmet to change the meta data in the head of the DOM.
 * @param title specifies what the <title> will be.
 * @return {Element} the <Helmet> node.
 */
export default function(
  title: string = Titles.DEFAULT
): React.ReactElement<Helmet> {
  const description: string = 'Not just an element!';
  const url: string = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  const image: string = `${url}assets/images/home_image.jpg`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />

      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content={'website'} />
      <meta name="og:url" content={url} />
    </Helmet>
  );
}
