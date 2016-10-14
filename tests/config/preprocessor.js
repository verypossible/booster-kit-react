/* eslint-disable */
var babelJest = require('babel-jest');

module.exports = {
	process: function(src, filename) {
		if (filename.match(/\.(css|less|scss|styl|md)$/)) {
			return '';
		}

		return babelJest.process(src, filename);
	},
};
