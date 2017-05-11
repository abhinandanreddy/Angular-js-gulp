/**
 * Created by abhi on 4/6/2017.
 */

const gulp= require('gulp');
const concat=require('gulp-concat');
const browserSync=require('browser-sync');

var devMode=false;


gulp.task('jsLibraries',function(){
        gulp.src(['./node_modules/angular/angular.js','./node_modules/angular-route/angular-route.js']).
            pipe(gulp.dest('./dist/js/libraries')).
            pipe(browserSync.reload({stream:true}));
});


gulp.task('appJsFiles',function(){
    gulp.src(['./src/js/**/*.js']).
        pipe(gulp.dest('./dist/js')).
        pipe(browserSync.reload({stream:true}));
});


gulp.task('html',function(){
    gulp.src('./src/template/**/*.html').
        pipe(gulp.dest('./dist')).
        pipe(browserSync.reload({stream:true}));
});

gulp.task('css',function(){
    gulp.src('./src/css/**/*.css').
    pipe(gulp.dest('./dist/css')).
    pipe(browserSync.reload({stream:true}));
});


gulp.task('build',function(){
    gulp.start(['jsLibraries','appJsFiles','html','css']);
});

gulp.task('browser-sync',function(){
    browserSync.init('null',{
        open:false,
        server:{
            baseDir:'dist'
        }
    });
});


gulp.task('start',function(){
    devMode=true;
    gulp.start(['build','browser-sync']);
    gulp.watch(['./src/js/**/*.js'],['appJsFiles']);
    gulp.watch(['./src/template/**/*.html'],['html']);
    gulp.watch(['./src/css/**/*.css'],['css']);
});


