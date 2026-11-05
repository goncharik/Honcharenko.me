const themeDir = __dirname + '/../';
module.exports = {
    plugins: [
        require('tailwindcss')(themeDir + './config/tailwind.config.js'),
        // Pin targets and stats so browserslist doesn't walk parent dirs,
        // which Hugo's Node permission sandbox denies (Hugo >= 0.165).
        require('autoprefixer')({
            overrideBrowserslist: ['defaults'],
            stats: {}
        }),
        ...process.env.NODE_ENV === 'production' ? [cssnano] : []
    ]
}