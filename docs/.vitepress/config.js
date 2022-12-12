export const nav = [
    {
        text: '前端',
        items: [
            {
                text: 'javaScript',
                link: '/src/javaScript/array',
            },
            {
                text: 'vue',
                link: '/src/javaScript/vue/vue3',
            }

        ]
    },
    {
        text: '后端',
        link: '/src/java/java',
    },
    {
        text: 'Linux',
        link: '/src/linux/linux',
    },
]

export const sidebar = {
    "/src/java/": [
        {
            text: '',
            items: [
                {text: 'java', link: '/src/java/java'},
            ]
        },
    ],
    "/src/javaScript": [
        {
            text: 'javaScript',
            items: [
                {text: 'Array', link: '/src/javaScript/array'},
                {text: 'Object', link: '/src/javaScript/object'},
                {text: 'Js高级', link: '/src/javaScript/jsAdvanced'},
                {text: 'Dom', link: '/src/javaScript/dom'},
                {text: 'Util', link: '/src/javaScript/util'},
                {text: 'Library', link: '/src/javaScript/library'},
            ]
        },
        {
            text: ' ',
            items: [
                {text: 'vue', link: '/src/javaScript/vue/vue3'},
            ]
        }

    ],
    "/src/linux/": [
        {
            text: 'Linux',
            items: [
                {text: '文件系统', link: '/src/linux/fs'},
            ]
        },
    ],

}

export default {
    title: 'Duban_Blog',
    description: 'Just playing around.',
    base: '/duban_blogs_preview/',
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },
    themeConfig: {
        nav,
        sidebar,
        /*algolia: {
            indexName: 'vuejs',
            appId: 'ML0LEBN7FQ',
            apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
            searchParameters: {
                facetFilters: ['version:v3']
            }
        },*/


    }
}