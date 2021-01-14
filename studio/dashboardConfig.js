export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5fff972ca9903f87c6a38540',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-r7mmrcfv',
                  apiId: '18786fc6-ba83-40e5-952b-cbda1e2bc689'
                },
                {
                  buildHookId: '5fff972c8df23679e17f06ca',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6cyqo257',
                  apiId: '0002dc0e-d404-4ea3-b3e0-933963bf978e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ploogo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6cyqo257.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
