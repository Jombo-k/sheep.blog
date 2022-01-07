module.exports = {
    title: 'sheep',
    description: '网站描述',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav:[
            { text: '11111', link: '/algorithm/' }, // 内部链接 以docs为根目录
            { text: '2222', link: 'http://obkoro1.com/' }, // 外部链接
            // 下拉列表
            { text: '3333', items: [
                    { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
                    {
                        text: '12312312',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    }
                ]
            }        
        ]
    }
};