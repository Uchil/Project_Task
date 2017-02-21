var gulp    = require('gulp'),
	gutil   = require('gulp-util'),
	plugins = require('gulp-load-plugins')();

gulp.task('sass', function() {
	  gulp.src('scss/mystyle.scss')
	  .pipe(plugins.sass())
	  .on('error', function(e) {
	  	  gutil.log(gutil.colors.red.bold('SASS',JSON.stringify(e)));
	  })
	  .pipe(gulp.dest('css/'));
});
