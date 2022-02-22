const modeDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: modeDev ? "development" : "production",
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: __dirname + "/public",
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader", // adiciona css a DOM injetando a tag <style>
                    "css-loader", // interpreta @import
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif|webp)$/,
                use: ["file-loader"],
            },
        ],
    },
};
