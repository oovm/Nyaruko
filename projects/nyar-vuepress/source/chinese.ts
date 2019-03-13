function SyntaxPages() {
    function Syntax(name: string) {
        return ['/Chinese/Syntax/' + name, name]
    }
    const overview = {
        title: 'Overview',
        collapsable: false,
        children: [
            Syntax('Overview')
        ]
    }
    const basic = {
        title: 'Basic',
        collapsable: true,
        children: [
            Syntax('Symbol'),
            Syntax('Keyword'),
            Syntax('Operator')
        ]
    }
    const advance = {
        title: 'Advance',
        collapsable: true,
        children: []
    }
    return [overview, basic, advance]
}

const ChinesePage = {
    title: '七夜',
    description: 'Vue 驱动的静态网站生成器',
    lang: 'Chinese',
    selectText: '选择语言',
    label: '简体中文',
    editLinkText: '在 GitHub 上编辑此页',
    algolia: {},
    lastUpdated: '最后更新',
    nav: [
        { text: '基本语法', link: '/Chinese/Syntax/Overview/' }
    ],
    sidebar: {
        '/Chinese/Syntax/': SyntaxPages()
    },
    serviceWorker: {
        updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
        }
    }
}

export { ChinesePage }