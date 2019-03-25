module.exports = {
  title: '孔丞的博客',
  description: '我的心路历程',
  dest: './dist',
  port: '7777',
  head: [
    ['link', {rel: 'icon', href: '/logo.gif'}]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar'),
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestions: 10,
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    },
    editLinks: true,
    editLinkText: '在GitHub上编辑此页！'
  }
}