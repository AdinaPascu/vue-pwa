module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/vue-pwa/' :
        '/',
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: './src/service-worker.js'
        },
        name: 'pwa-vue',
        themeColor: '#ff0000',
        msTileColor: '#00ff00',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',
        assetsVersion: '',
        manifestPath: 'manifest.json',
        manifestOptions: {
            name: 'pwa-vue',
            short_name: 'PWA',
            display: 'standalone',
            start_url: '.',
            theme_color: '#0000ff'
        },
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png'
        }
    },
}