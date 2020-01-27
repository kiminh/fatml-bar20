module.exports = {
    title: 'FATML 2020 - Barcelona',
    description: 'Notes from the 2020 FATML conference held in Barcelona',
    base: '/fatml-bar20/',
    themeConfig: {
      sidebar: [
        '/Program',
        {
          title: 'Tutorials',
          collapsible: true,
          children:[
            '/notes/tutorials/ai_explainability_360'
          ]
        },
        {
          title: 'CRAFTs',
          collapsible: true,
          children:[
            '/notes/crafts/'
          ]
        },
        {
          title: 'Talks',
          collapsible: true,
          children:[
            '/notes/talks/'
          ]
        }
      ],
      sidebarDepth: 0
    }
  }