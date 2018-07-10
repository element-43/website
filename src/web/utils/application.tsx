import * as React from 'react';
import { Helmet } from 'react-helmet';

// Config.
import { document } from '../../common/strings';

/**
 * Creates a <Helmet> node that is used by react-helmet to change the meta data in the head of the DOM.
 * @param title specifies what the <title> will be.
 * @return {Element} the <Helmet> node.
 */
export function getHelmet(title?: string): JSX.Element {
    const url: string = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
    const image: string = `${url}assets/images/home_image.jpg`;

    title = (!title ? document.title : title);

    return (
        <Helmet>
            <title>{ title }</title>
            <meta name="description" content={ document.description } />

            <meta name="twitter:description" content={ document.description } />
            <meta name="twitter:image" content={ image } />
            <meta name="twitter:title" content={ title } />

            <meta name="og:description" content={ document.description } />
            <meta name="og:image" content={ image } />
            <meta name="og:title" content={ title } />
            <meta name="og:type" content={ 'website' } />
            <meta name="og:url" content={ url } />
        </Helmet>
    );
}

/**
 * Checks if localStorage is available on the window.
 * @return {boolean} true if localStorage is available, false otherwise.
 */
export function isLocalStorageAvailable(): boolean {
    const testKey: string = '__storage_test';

    try {
        window.localStorage.setItem(testKey, testKey);
        window.localStorage.removeItem(testKey);

        return true;
    } catch(e) {
        return false;
    }
}
