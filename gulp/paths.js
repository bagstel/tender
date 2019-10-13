module.exports = {
    data: './data/data.json',
    watch: {
        pug: ['./source/*.pug', './source/pug/**/*.pug', './source/components/**/*.pug', './data/data.json'],
        scss: ['./source/*.scss', './source/scss/**/*.scss', './source/components/**/*.scss'],
        js: ['./source/*.js', './source/components/**/*.js'],
        images: './source/assets/images/general/**/*.*',
        fonts: './source/assets/fonts/**/*.*',
        sprite: {
            bitmap: './source/assets/images/sprites.bitmap/**/*.{png,jpg}',
            svg: './source/assets/images/sprites.svg/**/*.svg'
        }
    },
    source: {
        pug: './source/*.pug',
        scss: './source/*.scss',
        js: './source/*.js',
        images: './source/assets/images/general/**/*.{png,jpg,svg}',
        fonts: './source/assets/fonts/**/*.*',
        sprite: {
            bitmap: './source/assets/images/sprites.bitmap/**/*.{png,jpg}',
            svg: './source/assets/images/sprites.svg/**/*.svg'
        }
    },
    dest: {
        baseDir: './docs/',
        html: './docs/',
        css: './docs/assets/css/',
        js: './docs/assets/js/',
        images: './docs/assets/images/',
        fonts: './docs/assets/fonts/',
        sprite: {
            images: './docs/assets/css/',
            scss: './source/scss/'
        }
    }
};