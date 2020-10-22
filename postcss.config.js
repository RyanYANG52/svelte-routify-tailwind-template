const cssnano = require('cssnano')({
	preset: ['default', { discardComments: { removeAll: true } }],
});

const production = process.env.NODE_ENV === 'production';

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss'),
		require('autoprefixer'),
		...(production ? [cssnano] : []),
	],
};
