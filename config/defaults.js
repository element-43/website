module.exports = {
    cookieKeys: {
        enabled: 'catch_22'
    },

    endpoints: {
        api: {
            base: '/api',
            post: '/post',
            postCategory: '/post-category',
        },
        teapot: '/teapot'
    },

    googleAnalytics: {
        trackingId: 'UA-00000000-1'
    },

    headers: {
        poweredBy: 'X-Powered-By',
        appVersion: 'X-App-Version'
    },

    links: {
        gitHub: 'https://github.com/kieranroneill',
        linkedIn: 'https://www.linkedin.com/in/kieranroneill',
        twitter: 'https://twitter.com/kieranroneill'
    },

    port: 8080,

    routes: {
        about: '/about',
        blog: '/blog',
        contact: '/contact',
        error: '/game-over',
        home: '/home',
        notFound: '/lost-marbles',
        portfolio: '/portfolio'
    },

    twitter: {
        handle: '@kieranroneill'
    }
};
