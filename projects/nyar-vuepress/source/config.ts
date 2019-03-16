import { ChinesePage } from './chinese'
import * as EnglishPage from './english'


const ThemeConfig = {
    editLinks: true,
    repo: 'GalAster/Nyaruko',
    docsDir: 'projects/nyar-vuepress/',
    locales: {
        '/Chinese/': ChinesePage,
        //'/English/': EnglishPage
    },
    markdown: {
        lineNumbers: true
    }
}

const MainConfig = {
    dest: './build',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    locales: {
        '/Chinese/': ChinesePage,
        //'/English/': EnglishPage,
    },
    themeConfig: ThemeConfig
}

module.exports = MainConfig
