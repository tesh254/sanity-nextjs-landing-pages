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
                  buildHookId: '5d17a419e2c29e20885ed6c5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-91hfsscx',
                  apiId: '6b6042ab-324b-4c55-9291-6a28cc581dec'
                },
                {
                  buildHookId: '5d17a419fe3989d45c5db84e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-72gasgmj',
                  apiId: 'ee7dafb6-b5c5-44b1-9cf8-e5ccffb6d48b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tesh254/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-72gasgmj.netlify.com', category: 'apps'}
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
