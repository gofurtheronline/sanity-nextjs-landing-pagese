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
                  buildHookId: '6037a3d8d572cc18bf0a2b2d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pagese-studio',
                  apiId: '65718131-25dd-428d-bcd0-ebdd711696ca'
                },
                {
                  buildHookId: '6037a3d82f9aa11b252a524c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pagese',
                  apiId: 'b7bcf79f-d787-4b7b-8213-d6f89379aa49'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gofurtheronline/sanity-nextjs-landing-pagese',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pagese.netlify.app', category: 'apps'}
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
