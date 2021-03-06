const path = require("path/posix");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: 'development',
    entry : './src/index.js',
    output : {
        filename: 'awesome.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public') ,
        port: 9000
    }
};