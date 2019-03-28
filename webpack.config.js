const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = (env, options) => {
    const isEnvProduction = options.mode === 'production';
    const isEnvDevelopment = options.mode === 'development';
    const config = {
        entry: {
            app: './src/index.js'
        },
        output: {
            filename: isEnvProduction
                ? 'static/js/[name].[contenthash:8].js'
                : isEnvDevelopment && 'static/js/bundle.js',
            path: isEnvProduction ? path.resolve(__dirname, 'dist') : undefined,
            chunkFilename: isEnvProduction
                ? 'static/js/[name].[contenthash:8].chunk.js'
                : isEnvDevelopment && 'static/js/[name].chunk.js'
        },
        plugins: [
            new HtmlWebpackPlugin(
                Object.assign(
                    {},
                    {
                        template: path.join(__dirname, 'public/index.html'),
                        showErrors: true, // 에러 발생시 메세지가 브라우저 화면에 노출 된다.
                        favicon: 'favicon.ico'
                    },
                    isEnvProduction
                        ? {
                              minify: {
                                  removeComments: true,
                                  collapseWhitespace: true,
                                  removeRedundantAttributes: true,
                                  useShortDoctype: true,
                                  removeEmptyAttributes: true,
                                  removeStyleLinkTypeAttributes: true,
                                  keepClosingSlash: true,
                                  minifyJS: true,
                                  minifyCSS: true,
                                  minifyURLs: true
                              }
                          }
                        : undefined
                )
            )
        ],
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jpg|gif|ico)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }
                }
            ]
        },
        performance: {
            maxAssetSize: 550000
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    };
    if (isEnvDevelopment) {
        config.plugins.concat([new webpack.HotModuleReplacementPlugin()]);
        config.devtool = 'inline-source-map';
        config.devServer = {
            hot: true, // 서버에서 HMR을 켠다.
            host: '0.0.0.0', // 디폴트로는 "localhost" 로 잡혀있다. 외부에서 개발 서버에 접속해서 테스트하기 위해서는 '0.0.0.0'으로 설정해야 한다.
            contentBase: path.join(__dirname, 'dist'), // 개발서버의 루트 경로
            stats: {
                color: true
            }
        };
    } else {
        // production
        config.plugins.unshift(new CleanWebpackPlugin());
    }
    return config;
};
