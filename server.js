const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
  console.log('LAUNCHED IN DEV MODE');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
    },
    stats: {
      colors: true,
    },
  });

  const bundlePath = path.join(__dirname, './public/build/index.html');

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(bundlePath));
    res.end();
  });
} else {
  console.log('LAUNCHED IN PRODUCTION MODE');
  const staticPath = path.join(__dirname, './public/build');
  app.use(express.static(staticPath));
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.warn(err);
  }
  console.info(`==> 🌎 . Listening on port ${port}. Open up http://0.0.0.0:${port}/ in your browser.`);
  if (isDeveloping) {
    console.warn('Webpack needs to build the code : wait a few seconds...');
  }
});
