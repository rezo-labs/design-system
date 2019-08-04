const webpackConfig = require('./configs/webpack.common.config').client;

module.exports = {
    components: 'src/app/components/**/*.jsx',
    webpackConfig,
};
