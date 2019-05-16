const gulp = require('gulp'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
concat = require('gulp-concat'), 
imagemin = require('gulp-imagemin'),
sass = require('gulp-sass'),
clean_css = require('gulp-clean-css');

gulp.task('img',()=>{
    gulp.src('./src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
})

gulp.task('js',()=>{
    gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({'suffix' : '.min'}))
    .pipe(gulp.dest('./dist/js'));
})

gulp.task('sass',function(){
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(clean_css())
    .pipe(rename({'suffix' : '.min'}))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('auto',function(){
    gulp.watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/js/*.js',['js']);
})