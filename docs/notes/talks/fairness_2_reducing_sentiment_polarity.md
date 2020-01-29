# Fairness 2: Reducing Sentiment Polarity for Demographic Attributes in Word Embeddings using Adversarial Learning

| Item | Description |
| --- | --- | 
| Presented By | Chris Sweeney |
| Reference | [Reducing Sentiment Polarity for Demographic Attributes in Word Embeddings using Adversarial Learning](https://dl.acm.org/doi/pdf/10.1145/3351095.3372837?download=true) |



## Notes

- Focused on sentiment bias but others exist:
    - Gender
    - Race
    - etc
- Sentiment bias is when language terms of similar meaning return different sentiment outcomes, eg
    - "I am a `<term 1>`" = Happy
    - "I am a `<term 2>`" = Sad
    - Where `<term 1>` ~ `<term 2>`
- Examples include cultural slang, eg african american, different countries, etc
- Proposed approach is to depolarise word embedding principle components
- Applied to case studies on 
    - Sentiment valence regression (SVR): emotional score 
    - Toxicity
- On the SVR case study they demonstrate a reduction in fairness spread (an improvement)
