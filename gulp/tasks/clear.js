/* *************** Clear docs folder *************** */
module.exports = function () {
    $.gulp.task('clean:docs', () => $.del(`./${$.paths.dest.baseDir}`));
};