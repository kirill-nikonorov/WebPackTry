const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const config = require('./webpack.config.js');
const compiler = webpack(config);

console.log("-----------------------------------------------------------------------------------",
    config.output.publicPath)


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.get("/", function (req, res) {
    res.send("aaa")
})



app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});