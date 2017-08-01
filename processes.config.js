module.exports = {
    apps: [{
        name: 'app',
        script: 'dist/server/app.js',
        env: {
            NODE_ENV: 'production',
        },
        merge_logs: true,
        out_file: '/tmp/server.log',
        log_date_format: 'DD/MM/YYYY HH:mm:ss'
    }]
};
