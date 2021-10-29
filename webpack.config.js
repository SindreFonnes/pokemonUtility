const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: ["react-hot-loader/patch", "./src/index.tsx"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.ts(x)?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		static: {
			directory: "./dist",
		},
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {},
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Application name",
			template: './src/index.html'
		})
	],
};

module.exports = config;
