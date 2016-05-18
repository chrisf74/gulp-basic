/**
 * DEPENDENCIES
 */
var getKarmaConfig = require('./config/getKarmaConfig');
var connect = require('gulp-connect');
var karma = require('karma');
var argv = require('yargs').argv;
var gulp = require('gulp');
var path = require('path');
var del = require('del');


/**
 * VARIABLES
 */
var configPath = path.resolve(__dirname, 'config/');


/**
 * TEST TASK
 * @param -w, -watch
 * @param -b, -browsers
 * @public
 * TODO:
 */
gulp.task('test', function (done) {
	var karmaConfig = getKarmaConfig();
	if (!argv.w && !argv.watch) {
		karmaConfig.singleRun = true;
	} else {
		karmaConfig.autoWatch = true;
	}

	if (argv.b || argv.browsers) {
		var browserArg = argv.b || argv.browsers;
		var browserArr = browserArg.split(",");
		karmaConfig.browsers = browserArr;
	}

	var doneCalled = false;
	var server = new karma.Server(karmaConfig, function () {
  	if (doneCalled) {
  		return;
  	} else {
  		doneCalled = true;
  		return done();
  	}
	});

  server.start();
});


/**
 * SERVE TASK
 * @public
 * TODO:
 */
gulp.task('serve', function (done) {
	var server = connect.server({
		root: ['serve','src'],
		host: '0.0.0.0'
	});
	done();
});


/**
 * BUILD TASK
 * @public
 * TODO:
 */
gulp.task('build', function () {
	del.sync(['build'], {});

	return gulp
		.src(['src/*'])
		.pipe(gulp.dest('build'));
});
