module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            'autoprefixer': {
                'flexbox': 'no-2009'
            },
            'stage': 3,
            'features': {
                'custom-properties': false
            }
        },
        'postcss-pxtorem': {
            rootValue: 37.5,
            unitPrecision: 3,
            propList: ['*'],
            selectorBlackList: ['.ft'], //排除字体样式不转为rem
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
            exclude: /node_modules/i
        }
    }

}