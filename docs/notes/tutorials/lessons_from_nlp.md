# The Meaning and Measurement of Bias: Lessons from NLP

| Item | Description |
| --- | --- | 
| Presented By | Abigail Jacobs & Su Lin |
| FAT Reference | [The Meaning and Measurement of Bias: Lessons from NLP](https://fatconference.org/2020/acceptedtuts.html#meaning) |
| Paper | [The Meaning and Measurement of Bias: Lessons from Natural Language Processing](https://dl.acm.org/doi/abs/10.1145/3351095.3375671) |
| Microsite | [The Meaning and Measurement of Bias](https://azjacobs.com/measurement) |


## Notes

- Argues that subjective measures are inherently unobservable
    - What is currently used (& will be in the future) is itself a model that carries assumptions
    - More commonly determined as "a metric"
    - Fairness is an example
- Encording the "unobservable" suffers from the biases of those that create the encoding
    - These biases are mixed into the entire E2E ML pipeline
- If (when) the measurement process breakdowns (including the encoding process) then it risks introducing undesirable behaviours
- Include items such as:
    - Proxies, eg socioeconomic status (from income)
    - Self reported items, eg height on a dating website
    - Fitting topics to text, eg via LDA


#### **Construct Validity*: Measure of validity*

- Face validity
    - Face value
    - Does it inherently make sense?
- Content validity
    - What's the core of what's being represented?
    - How well is it represented by the construct?
- Convergent validity
    - Do other (valid) measures all agree upon the construct/outcome/what's measured?
    - Correlated measures/constructs
- Discriminant validity
    - How well is the measure measured?
    - Eg, measuring income & looking at the frequency people are paid such as fortnightly & monthly
- Predictive validity
    - How effective the approach/model is at identifying correlated targets
    - Eg model predicting SES should also correlate with the likelihood of buying a Tesla, requiring government assistance, etc
- Hypothesis validity
    - Ensuring that the hypothesis behind the measure is valid
    - The context of the measure
- Consequential validity
    - How the measurements are used & interpretted
    - What are the downstream consequences or feedback loops that could result from this measure?
    - *Goodhart's Law: When a measure becomes a target, it ceases to be a good measure*


Regardless of how the measures are defined & assessed, there is no best!
Reflection is important & required to determine reliability
- Eg test & learn (re-test)
- How does it perform over time? Is it consistent/stable?

COMPAS: risk scales are assessed with "an objective method"


#### Mathematical Measurement of "Fairness"
- Requires theoretical argument for the measure developed
- Consider the counter. *why* does the property measure "unfairness"?
- Requires validating how well the construct captures the definition of fairness intended


### Measurement of Bias in NLP

Possible Tests:
- Subspace Projection
    - Decouple gender neutral words & compare them to the embedded gender bias
    - If words lean more to one gender than the other then there are issues present
- WEAT
    - Word Embedding Association Test

**Add image of key takeaways**

