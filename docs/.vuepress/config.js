module.exports = {
    title: 'FATML 2020 - Barcelona',
    description: 'Notes from the 2020 FATML conference held in Barcelona',
    base: '/fatml-bar20/',
    themeConfig: {
      nav: [
        { text: 'Github', link: 'https://github.com/diabolical-ninja/fatml-bar20' }
      ],
      sidebarDepth: 0,
      sidebar: [
        '/Program',
        {
          title: 'Tutorials',
          collapsible: true,
          children:[
            '/notes/tutorials/ai_explainability_360',
            '/notes/tutorials/lessons_from_nlp'
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
            {
              title: 'Accountability',
              collapsible: true,
              children:[
                '/notes/talks/accountability_algorithmic_realism',
                '/notes/talks/accountability_closing_ai_gap',
                '/notes/talks/accountability_gdpr_paradox',
                '/notes/talks/accountability_lessons_from_the_field',
                '/notes/talks/accountability_liturature_review',
              ]
            },
            {
              title: 'Auditing/Assessment 1',
              collapsible: true,
              children:[
                '/notes/talks/auditing_1_implications_of_ai',
                '/notes/talks/auditing_1_pathways_on_youtube',
                '/notes/talks/auditing_1_predicting_fairness'
              ]
            },{
              title: 'Explainability 1',
              collapsible: true,
              children:[
                '/notes/talks/explainability_assumptions_behind_counterfactuals',
                '/notes/talks/explainability_fact_sheets',
                '/notes/talks/explainability_human_body_is_a_black_box',
                '/notes/talks/explainability_multi_layered_explainability',
                '/notes/talks/explainability_why_does_my_model_fail',
              ]
            },{
              title: 'Keynotes',
              collapsible: true,
              children:[
                '/notes/talks/keynote_1_hacking_human_bias',
                '/notes/talks/keynote_2_productivity_and_power',
                '/notes/talks/keynote_3_making_accountability_real'
              ]
            }
          ]
        }
      ]
    }
  }