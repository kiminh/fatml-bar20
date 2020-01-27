module.exports = {
    title: 'FATML 2020 - Barcelona',
    description: 'Notes from the 2020 FATML conference held in Barcelona',
    base: '/fatml-bar20/',
    themeConfig: {
      nav: [
        { text: 'Github', link: 'https://github.com/diabolical-ninja/fatml-bar20' }
      ],
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
            
          ]
        },
        {
          title: 'Talks',
          collapsible: true,
          children:[
            
          ]
        }
      ],
      sidebarDepth: 0
    }
  }