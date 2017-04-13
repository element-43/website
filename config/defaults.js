module.exports = {
    endpoints: {
        base: '/api',
        teapot: '/teapot'
    },

    googleAnalytics: {
        trackingId: 'UA-00000000-1'
    },

    headers: {
        poweredBy: 'X-Powered-By',
        appVersion: 'X-App-Version'
    },

    port: 1337,

    routes: {
        about: '/about',
        blog: '/blog',
        error: '/error',
        home: '/home',
        notFound: '/404'
    },

    social: {
        twitter: '@kieranroneill'
    }
};
