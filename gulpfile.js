var path = require('path'),
	nodemon = require('gulp-nodemon');

var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	webpack = require('webpack'),
	gutil = require('gulp-util');

/**
 * create server
 */
gulp.task('serve', function () {
	nodemon({
		nodeArgs: ['--harmony'],
		script: 'server/app.js'
	});
});

gulp.task('build', function (callback) {
	var webpackConfPath = path.resolve(__dirname, './webpack.config.js'),
		webpackConfig = require(webpackConfPath);

	webpack(webpackConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({}));
		callback();
	});
});

gulp.task('default', function () {
	runSequence(['serve']);
});
