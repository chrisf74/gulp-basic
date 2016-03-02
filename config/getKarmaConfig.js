var path = require('path');

var jasminePath = path.dirname(require.resolve('jasmine-core'));
var srcPath = path.resolve(__dirname, '../src');
var testPath = path.resolve(__dirname, '../test');

module.exports = function () {
	var config = {
		colors: true,

		hostname: '0.0.0.0',

		port: '9876',

		files: [
			jasminePath + + '/jasmine-core/jasmine.js',
			srcPath + '/**/*.js',
			testPath + '/**/*[sS]pec.js'
		],

		preprocessors: {},

		frameworks: ['jasmine'],

		browsers: ['PhantomJS'],

    reporters: ['dots'],

		logLevel: 'error'
	};

	return config;
};
