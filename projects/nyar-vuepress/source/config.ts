import { ChinesePage } from './chinese'
import * as EnglishPage from './english'


const ThemeConfig = {
    repo: 'vuejs/vuepress',
    editLinks: true,
    //docsDir: 'packages/docs/docs',
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
