var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');


module.exports = {
    entry: {
        main: './src/main',
        vendors: './src/vendors'
    },
    output: {
        publicPath: '/assets/', // 文件路径
        path: path.join(__dirname, 'dist/assets'), // 打包路径
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            { 
            	test: /\.(css|scss|less)$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            { 
            	test: /\.(png|jpg|gif|svg)$/, 
            	use: [
            		{
            			loader: 'url-loader',
            			options: {
            				limit: 4096
            			}
            		}
            	] 
            },
            { 
            	test: /\.(woff|woff2|eot|ttf|otf)$/, 
            	use: ['file-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test: "vendors",
                    name: "vendors",
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true
        }),
    	new HtmlWebpackPlugin({
            title: 'wechatBot',
            filename: '../index.html',
            template: './src/template/index.ejs',
            inject: true,
    	}),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
}