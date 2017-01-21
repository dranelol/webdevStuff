// Include Gulp
var gulp = require('gulp');

// Include plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

// Define default destination folder
var dest = 'html/assets/';


gulp.task('css', function() {

	//var cssFiles = ['src/css/*'];

//console.log(plugins.mainBowerFiles());

    gulp.src(plugins.mainBowerFiles('**/*.css')/*.concat(cssFiles)*/)
		//.pipe(plugins.filter('*.css'))
		.pipe(plugins.minifyCss())
		.pipe(plugins.concat('main.css'))
		.pipe(gulp.dest(dest + 'css/'));
        
    //return;
});

gulp.task('js', function() {

	//var cssFiles = ['src/css/*'];

//console.log(plugins.mainBowerFiles());

    gulp.src(plugins.mainBowerFiles('**/*.js')/*.concat(cssFiles)*/)
		//.pipe(plugins.filter('*.css'))
		.pipe(plugins.uglify())
		.pipe(plugins.concat('main.js'))
		.pipe(gulp.dest(dest + 'js/'));
        
    //return;
});


