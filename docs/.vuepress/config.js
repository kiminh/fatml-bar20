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
        '/Key Takeaways',
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
            '/notes/crafts/from_theory_to_practise'
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
                '/notes/talks/keynote_3_making_accountability_real',
                '/notes/talks/closing_townhall'
              ]
            },{
              title: 'Fairness 1',
              collapsible: true,
              children:[
                '/notes/talks/fairness_1_fair_decision_making',
                '/notes/talks/fairness_1_fairness_warnings',
                '/notes/talks/fairness_1_pots',
                '/notes/talks/fairness_1_studying_up'
              ]
            },{
              title: 'Ethics & Policy',
              collapsible: true,
              children:[
                '/notes/talks/ethics_and_policy_algorithmic_targetting',
                '/notes/talks/ethics_and_policy_ethics_codes_on',
                '/notes/talks/ethics_and_policy_ethics_washing',
                '/notes/talks/ethics_and_policy_freedom_of_others',
                '/notes/talks/ethics_and_policy_roles_for_computing_in_social_change'
              ]
            },{
              title: 'Values',
              collapsible: true,
              children:[
                '/notes/talks/values_effect_of_confidence',
                '/notes/talks/values_philosophical_basis',
                '/notes/talks/values_regulating_transperency',
                '/notes/talks/values_relationship_between_trust',
                '/notes/talks/values_value_laden_discrepency'
              ]
            },{
              title: 'Data Collection',
              collapsible: true,
              children:[
                '/notes/talks/data_collection_data_in_new_delhi',
                '/notes/talks/data_collection_garbage_in_garbage_out',
                '/notes/talks/data_collection_lessons_from_archives'
              ]
            },{
              title: 'Fairness 2',
              collapsible: true,
              children:[
                '/notes/talks/fairness_2_bidding_strategies',
                '/notes/talks/fairness_2_disparate_equilibria',
                '/notes/talks/fairness_2_interventions_for_ranking',
                '/notes/talks/fairness_2_multi_category_fairness',
                '/notes/talks/fairness_2_reducing_sentiment_polarity'
              ]
            },{
              title: 'Cognition & Education',
              collapsible: true,
              children:[
                '/notes/talks/cognition_and_education_artificial_mental_phenomena',
                '/notes/talks/cognition_and_education_empirical_study_of_percieved_fairness',
                '/notes/talks/cognition_and_education_integrating_fate',
                '/notes/talks/cognition_and_education_social_lives'
              ]
            },{
              title: 'Auditing/Assessment 2',
              collapsible: true,
              children:[
                '/notes/talks/auditing_2_bias_in_word_embeddings',
                '/notes/talks/auditing_2_impact_of_overlooking',
                '/notes/talks/auditing_2_mitigating_bias',
                '/notes/talks/auditing_2_recommendation_and_user_agency',
                '/notes/talks/auditing_2_recommendation_and_user_agency'
              ]
            },{
              title: 'Sensitive Attributes',
              collapsible: true,
              children:[
                '/notes/talks/sensitive_awareness_in_practise',
                '/notes/talks/sensitive_critical_race_methodology',
                '/notes/talks/sensitive_whats_sex_got_to_do'
              ]
            },{
              title: 'Fairness 3',
              collapsible: true,
              children:[
                '/notes/talks/fairness_3_apparent_conflict',
                '/notes/talks/fairness_3_fair_classification',
                '/notes/talks/fairness_3_fairness_is_not_static',
                '/notes/talks/fairness_3_preference_informed_fairness',
                '/notes/talks/fairness_3_towards_fairer_datasets'
              ]
            },{
              title: 'Auditing/Assessment 3',
              collapsible: true,
              children:[
                '/notes/talks/auditing_3_case_for_voter_centered_audits',
                '/notes/talks/auditing_3_counterfactual_risk_assessments',
                '/notes/talks/auditing_3_dirichlet_uncertainty',
                '/notes/talks/auditing_3_false_promise_of_risk_assessments',
                '/notes/talks/auditing_3_whose_tweets_are_surveilled'
              ]
            },{
              title: 'Explainability 2',
              collapsible: true,
              children:[
                '/notes/talks/explainability_2_doctor_xai',
                '/notes/talks/explainability_2_explainable_ml_in_deployment',
                '/notes/talks/explainability_2_explaining_machine_learning',
                '/notes/talks/explainability_2_model_agnostic_interpretability',
                '/notes/talks/explainability_2_robustness_in_ml'
              ]
            },{
              title: 'Fairness 4',
              collapsible: true,
              children:[
                '/notes/talks/fairness_4_effects_of_competition',
                '/notes/talks/fairness_4_fairness_and_utilisation',
                '/notes/talks/fairness_4_measuring_justice'
              ]
            }
          ]
        }
      ]
    }
  }