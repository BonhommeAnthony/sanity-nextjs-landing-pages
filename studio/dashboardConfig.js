export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ffdebfea6f39e07614cbfe6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6wrqv5be',
                  apiId: 'a4300eaf-4899-41b2-b5b6-08bfb83a8fce'
                },
                {
                  buildHookId: '5ffdebfea6f39e011f4cc8b7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pc3i929n',
                  apiId: '8bc5804d-602c-4921-92f2-0208c8c94267'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BonhommeAnthony/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pc3i929n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
