module.exports = function () {

    /* *************** Sass Development *************** */
    $.gulp.task('scss:dev', () => {
        return $.gulp.src($.paths.source.scss)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(err => {
                    return {
                        title: 'Style',
                        message: err.message
                    }
                })
            }))
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.postcss($.postcssConfig))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.paths.dest.css))
            .pipe($.browserSync.stream())
    });

    /* *************** Sass Production *************** */
    $.gulp.task('scss:prod', () => {
        return $.gulp
            .src($.paths.source.scss)
            .pipe($.gp.sass({
                outputStyle: 'compressed'
            }))
            .pipe($.gp.postcss($.postcssConfig))
            .pipe($.gulp.dest($.paths.dest.css))
    });

    /* *************** Sass default *************** */
    $.gulp.task('scss', $.gulp.series(`scss:${$.argv.mode}`));
};