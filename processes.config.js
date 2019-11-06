module.exports = {
  apps: [
    {
      name: 'element-43-website',
      script: 'dist/server/index.js',
      merge_logs: true,
      out_file: '/tmp/server.log',
      log_date_format: 'DD/MM/YYYY HH:mm:ss',
    },
  ],
};
