function SyntaxPages() {
    function Syntax(name: string) {
        return ['/Chinese/Syntax/' + name, name]
    }
    const overview = {
        title: 'Overview',
        collapsable: false,
        children: [
            '/Chinese/Syntax/'
        ]
    }
    const basic = {
        title: 'Basic',
        collapsable: true,
        children: [
            Syntax('Symbol'),
            Syntax('Keyword'),
            Syntax('Operator'),
        ]
    }
    const advance = {
        title: 'Advance',
        collapsable: true,
        children: [
            Syntax('Module'),
            Syntax('Type'),
            Syntax('Class'),
            Syntax('Template'),
        ]
    }
    return [overview, basic, advance]
}

const ChinesePage = {
    title: 'Nyar',
    description: 'Nyar',
    lang: 'Chinese',
    selectText: '选择语言',
    label: '简体中文',
    editLinkText: 'Edit on GitHub',
    algolia: {},
    lastUpdated: 'Last Upgrade',
    nav: [
        { text: '基本语法', link: '/Chinese/Syntax/' }
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