module.exports = {
    title: '北五环蝎子莱莱',
    description: 'Be water, my friends',
    head: [// 注入到当前页面的 HTML <head> 中的标签
        ['link', {// 增加一个自定义的 favicon(网页标签的图标)
            rel: 'icon',
            href: '/favicon.ico'
        }], 
    ],
    base: '/', // 部署到github
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: '/blue.jpeg',
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav: [{
                text: '11111',
                link: '/algorithm/'
            }, // 内部链接 以docs为根目录
            {
                text: '2222',
                link: 'http://obkoro1.com/'
            }, // 外部链接
            // 下拉列表
            {
                text: '3333',
                items: [{
                        text: 'GitHub地址',
                        link: 'https://github.com/OBKoro1'
                    },
                    {
                        text: '12312312',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    }
                ]
            }
        ],
        sidebar: {
            '/interview/': [
                {
                    title: "Blockchain",
                    collapsable: true,
                    children: [
                        ['/interview/blockchain/01', '人类社会货币的演变'],
                        ['/interview/blockchain/02', '比特币的转账机制和7个必修名词'],
                        ['/interview/blockchain/03', '比特币转账运行原理'],
                        ['/interview/blockchain/04', '比特币技术来源'],
                        ['/interview/blockchain/05', '比特币价格'],
                        ['/interview/blockchain/06', '比特币上游-挖矿'],
                        ['/interview/blockchain/07', '比特币中游-交易'],
                        ['/interview/blockchain/08', '比特币中游-存储'],
                    ]
                },
            ],
        }
    }
};