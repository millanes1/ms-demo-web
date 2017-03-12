
  config.devServer = {
    contentBase: './src/main',
    colors:true,
    stats: 'minimal',
    proxy: {
      '/task': {
        target: 'http://ms-vertx-container:8082',
        secure: false
      },
  '/orchestrator': {
      target: 'http://web-alias-orchestrator:8080',
      secure: false
    }
    }
  };

  return config;
}();
