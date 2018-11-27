module.exports = function () {

    /* *************** Pug Development *************** */
    $.gulp.task('pug:dev', () => {
        return $.gulp.src($.paths.source.pug)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(err => {
                    return {
                        title: 'Pug',
                        message: err.message
                    }
                })
            }))
            .pipe($.gp.pug({
                locals: {
                    data: JSON.parse($.fs.readFileSync($.paths.data, 'utf8'))
                },
                pretty: true
            }))
            .pipe($.gulp.dest($.paths.dest.html))
            .pipe($.browserSync.stream())
    });

    /* *************** Pug Production *************** */
    $.gulp.task('pug:prod', () => {
        return $.gulp.src($.paths.source.pug)
            .pipe($.gp.pug({
                locals: {
                    data: JSON.parse($.fs.readFileSync($.paths.data, 'utf8'))
                },
                pretty: false
            }))
            .pipe($.gulp.dest($.paths.dest.html))
    });

    /* *************** Pug default *************** */
    $.gulp.task('pug', $.gulp.series(`pug:${$.argv.mode}`));
};