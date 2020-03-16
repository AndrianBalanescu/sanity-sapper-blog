export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6fde1856201b4316c463b8',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-p9yrbrcp',
                  apiId: 'fd57bfcb-bca2-4949-8f65-0323666661f7'
                },
                {
                  buildHookId: '5e6fde19e5e8e067b659839d',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-f6feqwoj',
                  apiId: '822e342c-5e3d-49e6-b52c-bba071667a15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Flomastermod/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-f6feqwoj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
