module.exports = {
    apps: [{
        name: 'app',
        script: 'dist/server/app.js',
        env: {
            CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
            CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
            NODE_ENV: process.env.NODE_ENV,
            PORT: process.env.PORT,
        },
        merge_logs: true,
        out_file: '/tmp/server.log',
        log_date_format: 'DD/MM/YYYY HH:mm:ss'
    }]
};
