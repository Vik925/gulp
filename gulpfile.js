const gulp = require('gulp');
const sass = require('gulp-sass');

console.log('govno zopa')

const myromanLove = () =>  {
    console.log('dir', './')
    return (
    gulp
    .src('./app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    );


};

 
//          start task
   const start  = gulp.series( myromanLove);
exports.default = start;