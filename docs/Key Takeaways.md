# Key Takeaways

## 1. Overall

- Pros:
    - Varied ideas & options from primarily across business, computer science & law
    - A team of cross discipline individuals are exploring how to embed fairness measures into business & policy. Their framework was covered in a [CRAFT Session](./notes/crafts/from_theory_to_practise.md). The team is made of people from:
        - The french government
        - Stanford researchers
        - Lawyers
- Cons:
    - Very academia heavy with little focus (or interest) in applied solutions
    - Vast majority of the research focused on post-hoc analysis rather than intervention or mitigation strategies (primary thinking is a checklist)


## 2. AI360 Toolkit

[Notes](./notes/tutorials/ai_explainability_360.md)

- One stop shop for explainability algorithms
- The toolkit appears to be a contender to [Alibi](https://github.com/SeldonIO/alibi)
- Pros:
    - Quality appeared (**have not verified**) to be quite high
    - In active development
- Cons:
    - IBM are hiding basic functionality behind a paywall, eg use of categorical variables in some of the techniques, although the research is open


## 3. Google AI Gym

[Notes](./notes/talks/fairness_3_fairness_is_not_static.md)

- Have developed an open source framework to assist with simulating potential future outcomes & thus potential fairness issues that could arise
- Something we should explore leveraging for ethical testing



## 4. Exploitation

[Notes](./notes/talks/keynote_1_hacking_human_bias.md)

- Most research focuses on discrimination with discussing fairness, eg:
    - Equal performance/outcomes by gender, age, race, etc
- Fairness extends beyond just discrimination & includes exploitation & contends this should be included within fairness research & evaluation
- Can (& should) be extended to include considerations such as:
    - Exploitation
    - Stress
    - "The pub test"
    - etc



## 5. Modularity

[Notes](./notes/talks/sensitive_whats_sex_got_to_do.md)

- Many researchers are exploring causal modelling to help identify fairness issues as well as identity treatment options
- Much of the fairness research treats each attribute of a system as an independent entity that can (in a lab) me modified individually
