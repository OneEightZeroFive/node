//require("./node_modules/gulp");
var gulp = require("gulp");

var uglify = require("gulp-uglify");

var minify = require("gulp-minify-css")

//压缩JS的任务
gulp.task("uglifyjs",function(){
	//导入文件
	return gulp.src("./test.js")
	//处理该文件
	.pipe(uglify())
	.pipe(gulp.dest("build"))
})
//压缩CSS的任务

gulp.task("minifycss",function(){
	return gulp.src("./test.css")
	.pipe(minify())
	.pipe(gulp.dest("build"))
})

//默认执行uglifyjs的任务
gulp.task('default',['uglifyjs','minifycss'])
