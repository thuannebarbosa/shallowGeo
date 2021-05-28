
"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

sass.compiler = require("node-sass");

gulp.task('default', watch);

gulp.task("sass", compilaSass);

gulp.task("pug", compilaPug);

function compilaSass() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
}

function compilaPug() {
  return gulp
    .src('src/pug/*.pug')
    .pipe(pug({
      octype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "."
    }
  });
  gulp.watch("src/scss/**/*.scss", compilaSass).on("change", reload);
  gulp.watch("src/pug/**/*.pug", compilaPug).on("change", reload);
  gulp.watch( 'src/js/**/*.js' ).on("change", reload);

}