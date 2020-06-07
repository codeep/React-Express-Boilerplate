import path from 'path';
import Express from 'express';
import httpProxy from 'http-proxy';
import connectHistoryApiFallback from 'connect-history-api-fallback';
import config from '../config';

const WebpackDevServer = require('webpack-dev-server');
let app;
if(process.env.NODE_EVN !== 'production') {
    const Webpack = require('webpack');
    const webpackConfig = require('../webpack.dev');

    const compiler = Webpack(webpackConfig);
    const devServerOptions = Object.assign({}, webpackConfig.devServer, {
        open: true,
        stats: {
            colors: true,
        },
    });
    app = new WebpackDevServer(compiler, devServerOptions);
} else {
    app = new WebpackDevServer();
}

const port = config.port;

app.use('/api',(req,res) => {
    proxy.web(req, res, {target: `${targetUrl}`})
});


app.use('/', connectHistoryApiFallback());
app.use('/',Express.static(path.join(__dirname,"..",'build')));
app.use('/',Express.static(path.join(__dirname,"..",'static')));


const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
const proxy = httpProxy.createProxyServer({
    target:targetUrl
});


app.listen(port, (err) => {
    if(err) {
      console.error("The following error has occurred while trying to start the server: ", err)
    } else {
      console.log(`===> open http://${config.host}:${config.port} in a browser to view the app`);
    }
});
