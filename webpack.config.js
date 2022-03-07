const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

let plugins = [
    new CopyPlugin({
        patterns:[
            {from: path.join(__dirname, '_redirects')}
        ]
    }),
    new HtmlWebpackPlugin({
        inject: 'body',
        template: "./index.html",
        filename: "index.html"
    })
];

module.exports = (_, {mode})=>{

    let isProduction = mode==="production";

    if(isProduction) {
        plugins.push(new MiniCssExtractPlugin(
            {
                //css files (including vendors chunks) will go to folder css
                filename: "css/[name].[contenthash].css"
            }
        ));
    }

    return {
        //context workdir is recommended
        context: path.resolve(__dirname, 'src'),
        entry: {
            main: {import: './index.js'}
        },
        output: {
            //js files (including vendors chunks) will go to folder js
            filename: 'js/[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean:true,
            //to construct css and js file url within html files
            publicPath: '/',
        },
        optimization: {
            runtimeChunk: {
                name: "manifest",
            },
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        //name for libs collections(js, css)
                        name: 'vendors',
                        enforce: true
                    }
                },
            },
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    minify: TerserPlugin.uglifyJsMinify,
                }),
            ],
        },
        devtool: isProduction?false:'inline-source-map',
        devServer: {
            historyApiFallback: true,
            port: 8000,
            static: path.resolve(__dirname, 'dist'),
            //to serve files within dev mode
            devMiddleware: {
                publicPath:'/',
            },
            open: {
                app: {
                    name: "google-chrome"
                }
            }
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(css|sass|scss)$/i,
                    use: [
                        isProduction?{
                            loader:MiniCssExtractPlugin.loader,
                            options: {
                                //to construct assets url within css file
                                //ref dist folder
                                publicPath : '../'
                            }
                        }:'style-loader',
                        'css-loader',
                        //postcss for autoprefixing css
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    //image file will go to imgs folder
                    generator: {
                        filename: (fileInfo) => {
                            let subFolderName = fileInfo.filename.split('/');
                            return `imgs/${subFolderName[2]}/[name][ext]`;
                        }
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    //font file will go to fonts folder
                    generator: {
                        filename: 'fonts/[name][ext]'
                    }
                },
            ]
        }
    }
};