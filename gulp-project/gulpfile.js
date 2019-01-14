const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const ugify = require("gulp-uglify");
const babel =require("gulp-babel");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const cleancss =require("gulp-clean-css");
// gulp.task("default",function(){})

gulp.task("html",()=>{
gulp.src("src/**/*.html")
	.pipe(htmlmin({
	removeComments: true,//清除HTML注释
    collapseWhitespace: true//压缩HTML
	}))
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("js",()=>{
gulp.src("src/js/**/*.js")
	.pipe(babel({
	presets:["@babel/env"]	
	}))
	.pipe(ugify())
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

gulp.task("server",()=>{
connect.server({
port:4000,
livereload:true,
root:"dist"
})	
})

gulp.task("static",()=>{
gulp.src("src/static/**/*")
    .pipe(gulp.dest("dist/static"))
	.pipe(connect.reload());
})

gulp.task("watch",()=>{
gulp.watch("src/**/*.html",["html"]);
gulp.watch("src/**/*.js",["js"]);
gulp.watch("src/**/*.static",["static"]);
gulp.watch("src/**/*.scss",["scss"]);
})

gulp.task("css",()=>{
gulp.src("src/scss/**/*.scss")
	.pipe(sass())
	.pipe(cleancss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("libs",()=>{
gulp.src(("src/libs/**/*"))         //找到src下libs下的所有目录下的文件
    .pipe(gulp.dest("dist/libs")); //转到dist下libs
})

gulp.task("default",["css","html","js","static","server","libs","watch"]);