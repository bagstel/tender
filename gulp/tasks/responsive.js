/* *************** responsive images *************** */
module.exports = function () {

    $.gulp.task('responsive@768', () => {
        return $.gulp.src('./source/assets/images/responsive/biger@768/*.{png,jpg}')
            .pipe($.gp.responsive(JSON.parse($.fs.readFileSync('./responsive@768.json', 'utf8'))))
            .pipe($.gulp.dest('./source/assets/images/general'))
    });

    $.gulp.task('responsive@1280', () => {
        return $.gulp.src('./source/assets/images/responsive/biger@1280/*.{png,jpg}')
            .pipe($.gp.responsive(JSON.parse($.fs.readFileSync('./responsive@1280.json', 'utf8'))))
            .pipe($.gulp.dest('./source/assets/images/general'))
    });

    $.gulp.task('responsive', $.gulp.parallel('responsive@768', 'responsive@1280'));
};