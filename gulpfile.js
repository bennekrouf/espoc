var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var gutil = require('gulp-util');
var fs = require("fs");
var transform = require('vinyl-transform');
//var sourcemaps = require("gulp-sourcemaps");

gulp.task('es6', function(){

    var b = browserify({
    //    entries: './app.js',
        debug: true
      });

    return b.transform(babelify)
        .require("./app.js", { entry: true })
        .bundle()
        .on("error", function (err) { console.log("Error: " + err.message); })
        .pipe(fs.createWriteStream("bundle.js"));
//        .pipe(source('app.js'))


/*return b.transform(babelify)
      .require("./app.js", { entry: true })
      .bundle()
      .on("error", function (err) { console.log("Error: " + err.message); })
      .pipe(fs.createWriteStream("bundle.js"));*/
});

gulp.task('watch', function(){
    gulp.watch('*.js', ['es6']);
});

gulp.task('default', ['watch']);