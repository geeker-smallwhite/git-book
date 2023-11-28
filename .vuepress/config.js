module.exports = {
    title: '深入理解 git 原理',
    description: '深入理解 git 原理',
    head: [
      
    ],
    themeConfig: {
      repo: '',
      editLinks: false,
      docsDir: '',
      editLinkText: '',
      lastUpdated: false,
      displayAllHeaders: true ,
      nav: [
        {
          text: '首页',
          link: '/',
        },
        {
          text: '讨论',
          link: 'https://github.com/geeker-smallwhite/git-webbook/discussions'
        },
        {
          text: '问题',
          link: 'https://github.com/geeker-smallwhite/git-webbook/issues'
        },
        {
          text: 'github 仓库',
          link: 'https://github.com/geeker-smallwhite/git-webbook'
        }
      ],
      sidebar: [
          '/intro.md',
          {
            title: '第一章 git 版本控制',
            path : '/version-control/',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/version-control/reason.md',
                '/version-control/concept.md',
                '/version-control/immutable.md',
                '/version-control/distribute.md',
                '/version-control/repository.md',
            ]
          },
          {
            title: '第二章 git 存储原理',
            collapsable: false,
            path: '/storage-engine/',
            sidebarDepth: 1,
            children: [
                '/storage-engine/object-database.md',
                '/storage-engine/_index.md',
                '/storage-engine/version-lib.md', 
                '/storage-engine/commit-upgrade.md',
                '/storage-engine/repository-file-details.md',
                '/storage-engine/lfs.md',
            ]
          },
          {
            title: '第三章 git 版本管理',
            collapsable: false,
            path: '/version-manage/',
            sidebarDepth: 1,
            children: [
                '/version-manage/commit.md',
                '/version-manage/branch.md',
                '/version-manage/merge.md',
                '/version-manage/version-modify.md',  
                '/version-manage/comflict.md'             
            ]
          },
          {
            title: '第四章 git 使用技巧',
            collapsable: false,
            path: '/smarts/',
            sidebarDepth: 1,
            children: [
                '/smarts/smart-merge.md',
                '/smarts/smart-view.md',
                '/smarts/smart-manage.md'
            ]
          },
          {
            title: '参考文献',
            collapsable: false,
            sidebarDepth: 1,
            path: '/refs/ref.md',
          }
        ]
      
    },
  
    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: []
  }
  
