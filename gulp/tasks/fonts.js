module.exports = function () {

    /* *************** Copy fonts Development *************** */
    $.gulp.task('fonts:dev', () => {
        return $.gulp.src($.paths.source.fonts)
            .pipe($.gulp.dest($.paths.dest.fonts))
            .pipe($.browserSync.stream());
    });

    /* *************** Copy fonts Production *************** */
    $.gulp.task('fonts:prod', () => {
        return $.gulp.src($.paths.source.fonts)
            .pipe($.gulp.dest($.paths.dest.fonts))
    });

    /* *************** Copy fonts default *************** */
    $.gulp.task('fonts', $.gulp.series(`fonts:${$.argv.mode}`));
};