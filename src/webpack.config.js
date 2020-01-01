const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const paths = require('./config/paths');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = (process.env.BUILD_ENV === 'staging' || process.env.BUILD_ENV === 'production' || process.env.BUILD_ENV === 'sandbox');

const entry = [
    require.resolve('./config/polyfills'),
    paths.appIndexJs
];

function getConfig(isProd) {
    const config = {
        entry,
        module: {
            rules: [
                {
                    oneOf: [
                        {
                            test: /\.html$/,
                            loader: 'html-loader'
                        },
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'static/media/[name].[hash:8].[ext]'
                            }
                        },
                        {
                            test: /\.(js|mjs|jsx)$/,
                            include: paths.appSrc,
                            loader: 'babel-loader',
                            options: {
                                customize: require.resolve('babel-preset-react-app/webpack-overrides'),
                                cacheDirectory: true,
                                cacheCompression: false
                            }
                        },
                        {
                            test: /\.(scss|sass|css)$/,
                            exclude: /\.module\.(scss|sass|css)$/,
                            use: [
                                'style-loader',
                                {
                                    loader: 'css-loader',
                                    options: { importLoaders: 2, sourceMap: !isProd }
                                },
                                {
                                    // Options for PostCSS as we reference these options twice
                                    // Adds vendor prefixing based on your specified browser support in package.json
                                    loader: 'postcss-loader',
                                    options: {
                                        // Necessary for external CSS imports to work
                                        // https://github.com/facebook/create-react-app/issues/2677
                                        ident: 'postcss',
                                        plugins: () => [
                                            require('postcss-flexbugs-fixes'),
                                            require('postcss-preset-env')({
                                                autoprefixer: {
                                                    flexbox: 'no-2009'
                                                },
                                                stage: 3
                                            })
                                        ]
                                    }
                                },
                                {
                                    loader: 'sass-loader',
                                    options: { sourceMap: !isProd }
                                }
                            ]
                        },
                        {
                            exclude: [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/],
                            loader: 'file-loader',
                            options: {
                                name: 'static/media/[name].[hash:8].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            port: 3000
        },
        output: {
            publicPath: '/'
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: 'public/index.html',
                filename: './index.html'
            }),
            new webpack.EnvironmentPlugin({
                BUILD_ENV: process.env.BUILD_ENV
            })
        ],
        optimization: {
            minimizer: []
        }
    };

    console.log('BUILD FOR ', process.env.BUILD_ENV);
    if (isProd) {
        config.optimization = {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false
                        },
                        compress: {
                            unused: false,
                            warnings: false
                        }
                    }
                })
            ]
        };
    } else {
        config.devtool = 'source-map';
    }

    return config;
}

module.exports = getConfig(isProd);
