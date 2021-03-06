module.exports = [
    require('postcss-assets')({
        basePath: 'docs/',
        loadPaths: [
            'assets/images',
            'assets/fonts',
            'source/assets/fonts',
            'source/assets/images/general'
        ]
    }),
    require('lost'),
    require('autoprefixer')({
        browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24', // Firefox 24 is the latest ESR
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6']
    })
];