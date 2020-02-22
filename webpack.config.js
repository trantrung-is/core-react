/* eslint-disable no-param-reassign */
const path = require('path');
// const fs = require('fs');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// App diretory
// const appDirectory = fs.readFileSync(process.cwd());

// Gets absolute path of file within app directory
// const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: './src/template/index.html',
	filename: './index.html'
});

module.exports = () => {
	// call dotenv and it will return an Object with a parsed key
	const env = dotenv.config().parsed;

	// reduce it to a nice object, the same as before
	const envKeys = Object.keys(env).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(env[next]);
		return prev;
	}, {});

	return {
		// Environment mode
		// mode: 'development',
		// Entry point of app
		// entry: resolveAppPath('src'),
		output: {
			// Development filename output
			// file: 'static/js/bundle.js'
		},
		devServer: {
			// Serve index.html as the base
			// contentBase: resolveAppPath('public'),
			// Enable compression
			// Enable hot reload
			hot: true,
			host,
			port: process.env.PORT,
			// Public path is root of content base
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.s[ac]ss$/i,
					use: ['style-loader', 'css-loader', 'sass-loader']
				}
			]
		},
		plugins: [
			// get template html
			htmlWebpackPlugin,
			// config file .env
			new webpack.DefinePlugin(envKeys)
		]
	};
};
