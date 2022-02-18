const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: __dirname + "/public",
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
        ],
    },
};
