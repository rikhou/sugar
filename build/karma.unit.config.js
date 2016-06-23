// Karma for Jasmine testing framework.
// https://github.com/webpack/karma-webpack
var path = require('path');

module.exports = function(config) {
	config.set({
		// base path, that will be used to resolve files and exclude
		'basePath': '../test/units/',

		// frameworks to use
		'frameworks': ['jasmine'],

		// start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - PhantomJS
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		'browsers': ['Chrome', 'Safari'],
		// browsers: ['Firefox'],

		// list of files to load in the browser
		'files': [
			'index.js'
		],

		// enable / disable watching file and executing tests whenever any file changes
		'autoWatch': true,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		'singleRun': true,

		// list of preprocessors
		'preprocessors': {
			'index.js': ['webpack', 'sourcemap']
		},

		'webpack': {
			'devtool': 'inline-source-map',
			'resolve': {
				'alias': {
					'src': path.resolve(__dirname, '../src'),
					'mvvm': path.resolve(__dirname, '../src/mvvm/index')
				}
			}
		},

		'webpackMiddleware': {
			'noInfo': true
		},

	    // test results reporter to use
		// possible values: 'spec', 'dots', 'progress', 'junit', 'growl', 'coverage'
		'reporters': ['spec']
	});
}