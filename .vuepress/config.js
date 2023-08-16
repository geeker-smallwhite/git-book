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
                '/version-control/veersion-control-reason.md',
                '/version-control/version-control-concept.md',
                '/version-control/final.md',
                '/version-control/d-vcs.md',
                '/version-control/repo.md',
            ]
          },
          {
            title: '第二章 git 存储原理',
            collapsable: false,
            path: '/storage-engine/',
            sidebarDepth: 1,
            children: [
                '/storage-engine/object-db.md',
                '/storage-engine/version-store.md', 
                '/storage-engine/commit-principle.md',
                '/storage-engine/git-index.md',
                '/storage-engine/file-details.md',
                '/storage-engine/git-lfs.md',
               
            ]
          },
          {
            title: '第三章 git 版本管理',
            collapsable: false,
            path: '/version-manage/',
            sidebarDepth: 1,
            children: [
                '/version-manage/commit-version.md',
                '/version-manage/branch.md',
                '/version-manage/merge.md',
                '/version-manage/version-modify.md',  
                '/version-manage/comflict.md'             
            ]
          },
          {
            title: '第四章 git 使用技巧',
            collapsable: false,
            path: '/crafty/',
            sidebarDepth: 1,
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
  