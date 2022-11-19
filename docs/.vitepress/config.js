export default {
    title: 'Duban_Blog',
    description: 'Just playing around.',
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },
    themeConfig: {
        sidebar: [
            {
                text: 'javaScript',
                items: [
                    {text: 'Array', link: '/src/javaScript/array'},
                    {text: 'Object', link: '/src/javaScript/object'},
                    {text: 'Js高级', link: '/src/javaScript/jsAdvanced'},
                    {text: 'Dom', link: '/src/javaScript/dom'},
                ]
            },
            {
                text: '',
                items: [
                    {text: 'Vue', link: '/src/vue/vue'},
                ]
            }
        ],
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