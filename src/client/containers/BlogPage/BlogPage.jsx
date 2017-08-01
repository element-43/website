import React, { Component } from 'react';

// Config.
import { strings } from '../../../common/index';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';

class BlogPage extends Component {
    render() {
        return (
            <main>
                { getHelmet(`${strings.document.title} | ${strings.pages.blog.title}`) }
            </main>
        );
    }
}

export default BlogPage;
