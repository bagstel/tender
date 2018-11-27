global.$ = {
    tasks: require('./gulp/tasks.js'),
    paths: require('./gulp/paths'),
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')({
        scope: ['devDependencies']
    }),
    fs: require('fs'),
    argv: require('yargs').argv,
    del: require('del'),
    browserSync: require('browser-sync').create(),
    webpackConfig: require('./webpack.config'),
    postcssConfig: require('./postcss.config'),
    webpackStream: require('webpack-stream'),
    webpack: require('webpack'),
    spriteBitmap: require('gulp.spritesmith'),
    svgSprite: require('gulp-svg-sprite')
};

$.tasks.forEach(task => {
    require(task)();
});

/* *************** Default *************** */
$.gulp.task('default', $.gulp.series('clean:public',
    $.gulp.parallel('copy', 'sprite:sprites.bitmap', 'sprite:svg'),
    $.gulp.parallel('scss', 'pug', 'js'),
    'server'
));

$.gulp.task('create', function () {
    return $.gulp.src('source/components/_template/*.*')
        .pipe($.gp.rename(function (path) {
            path.dirname = "/" + process.argv[4];
            path.basename = process.argv[4];
        }))
        .pipe($.gulp.dest('source/components/'))
});