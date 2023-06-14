export const nav = [
    {
        text: '前端',
        link: '/src/frontEnd/javaScript/array',
        // items: [
        //     {
        //         text: 'JS',
        //         items: [
        //             {
        //                 text: 'javaScript',
        //                 link: '/src/javaScript/array',
        //             },
        //             {
        //                 text: 'vue',
        //                 link: '/src/javaScript/vue/vue3',
        //             },
        //         ]
        //     },
        //     {
        //         text: 'Css',
        //         items: [
        //             {
        //                 text: 'css',
        //                 link: '/src/css/css',
        //             },
        //         ]
        //     },
        //     {
        //         text: 'Html',
        //     },
        //
        // ]
    },
    {
        text: 'Flutter',
        link: '/src/flutter/dart',
    },
    {
        text: '后端',
        link: '/src/java/java',
    },
    {
        text: 'Linux',
        link: '/src/linux/linux',
    },
    {
        text: '面试',
        link: '/src/interview/interview',
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
    "/src/frontEnd": [
        {
            text: 'javaScript',
            items: [
                {text: 'Array', link: '/src/frontEnd/javaScript/array'},
                {text: 'Object', link: '/src/frontEnd/javaScript/object'},
                {text: 'Js高级', link: '/src/frontEnd/javaScript/jsAdvanced'},
                {text: 'Dom', link: '/src/frontEnd/javaScript/dom'},
                {text: 'Util', link: '/src/frontEnd/javaScript/util'},
                {text: 'Library', link: '/src/frontEnd/javaScript/library'},
                {text: 'RegExp', link: '/src/frontEnd/javaScript/reg'},
            ]
        },
        {
            text: 'vue',
            items: [
                {text: 'vue', link: '/src/frontEnd/vue/vue'},
                {text: 'vue2', link: '/src/frontEnd/vue/vue2'},
                {text: 'vue3', link: '/src/frontEnd/vue/vue3'},
            ]
        },
        {
            text: ' ',
            items: [
                {text: 'css', link: '/src/frontEnd/css/css'},
            ]
        }

    ],
    "/src/linux/": [
        {
            text: 'Linux',
            items: [
                {text: '命令', link: '/src/linux/command'},
                {text: '文件系统', link: '/src/linux/fs'},
                {text: '用户管理', link: '/src/linux/user'},
            ]
        },
    ],
    "/src/flutter/": [
        {
            text: '',
            items: [
                {text: 'Dart语法  ', link: '/src/flutter/dart'},
            ]
        },
    ],
    "/src/interview/": [
        {
            text: '',
            items: [
                {text: 'Css  ', link: '/src/interview/css'},
                {text: 'JavaScript  ', link: '/src/interview/javascript'},
                {text: 'NetWork  ', link: '/src/interview/network'},
                {text: 'Browser  ', link: '/src/interview/browser'},
            ]
        },
    ],
}

export default {
    title: 'Duban_Blog',
    description: 'Just playing around.',
    base: '/duban_blogs_preview/',
    markdown: {
        theme: 'material-theme',
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