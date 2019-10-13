/* ***************  *************** */
module.exports = function () {

/* *************** Development *************** */
    $.gulp.task('images:dev', () => {
        return $.gulp.src($.paths.source.images)
            .pipe($.gulp.dest($.paths.dest.images))
            .pipe($.browserSync.stream());
    });

    $.gulp.task('fonts:dev', () => {
        return $.gulp.src($.paths.source.fonts)
            .pipe($.gulp.dest($.paths.dest.fonts))
            .pipe($.browserSync.stream());
    });

    $.gulp.task('favicon:dev', () => {
        return $.gulp.src('./source/assets/favicon/**/*.*')
            .pipe($.gulp.dest('./docs/assets/favicon/'))
            .pipe($.browserSync.stream());
    });

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./source/assets/styles/**/*.css')
            .pipe($.gulp.dest('./docs/assets/css/'))
            .pipe($.browserSync.stream());
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src('./source/assets/js/*.js')
            .pipe($.gulp.dest('./docs/assets/js/'))
            .pipe($.browserSync.stream());
    });

/* *************** Production *************** */
    $.gulp.task('images:prod', () => {
        return $.gulp.src($.paths.source.images)
            .pipe($.gp.tinypng('cX8jJW90yM6szb30S5KBDHd4bRl5fPK9'))
            .pipe($.gulp.dest($.paths.dest.images))
    });
    
    $.gulp.task('fonts:prod', () => {
        return $.gulp.src($.paths.source.fonts)
            .pipe($.gulp.dest($.paths.dest.fonts))
    });
    
    $.gulp.task('favicon:prod', () => {
        return $.gulp.src('./source/assets/favicon/**/*.{png,jpg}')
            .pipe($.gp.tinypng('cX8jJW90yM6szb30S5KBDHd4bRl5fPK9'))
            .pipe($.gulp.dest('./docs/assets/favicon/'))
    });

    $.gulp.task('styles:prod', () => {
        return $.gulp.src('./source/assets/styles/**/*.css')
            .pipe($.gp.uglifycss({
              "uglyComments": true
            }))
            .pipe($.gulp.dest('./docs/assets/css/'))
    });

    $.gulp.task('js:prod', () => {
        return $.gulp.src('./source/assets/js/*.js')
            .pipe($.gp.uglify())
            .pipe($.gulp.dest('./docs/assets/js/'))
    });

/* ***************  Copy images default *************** */
    $.gulp.task('copy', $.gulp.series(
        `images:${$.argv.mode}`,
        `favicon:${$.argv.mode}`,
        `fonts:${$.argv.mode}`,
        `styles:${$.argv.mode}`,
        `js:${$.argv.mode}`

    ));
};