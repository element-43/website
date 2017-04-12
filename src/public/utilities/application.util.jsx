import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';

// Config.
import defaults from '../../../config/defaults';
import strings from '../../../config/strings';

/**
 * Creates a <Helmet> node that is used by react-helmet to change the meta data in the head of the DOM.
 * @param title specifies what the <title> will be, defaults to 'Certua'
 * @param image specifies what image is displayed when sharing on social media, defaults to the home page image.
 * @param isBlog specifies if the type of document is a blog or website.
 * @return {XML} the <Helmet> node.
 */
export function getHelmet(title, image, isBlog = false) {
    const url = location.protocol + '//' + location.host + location.pathname;

    title = (_.isEmpty(title) ? strings.document.title : title);
    image = (_.isEmpty(image) ? '' : image);

    return (
        <Helmet>
            <title>{ title }</title>
            <meta name="description" content={ strings.document.description } />

            <meta name="twitter:description" content={ strings.document.description } />
            <meta name="twitter:image" content={ image } />
            <meta name="twitter:title" content={ title } />
            <meta name="twitter:site" content={ defaults.social.twitter } />

            <meta name="og:description" content={ strings.document.description } />
            <meta name="og:image" content={ image } />
            <meta name="og:title" content={ title } />
            <meta name="og:type" content={ (isBlog ? 'blog' : 'website') } />
            <meta name="og:url" content={ url } />
        </Helmet>
    );
}
