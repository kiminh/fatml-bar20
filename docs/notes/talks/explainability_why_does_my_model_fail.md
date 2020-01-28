# Explainability: Why Does My Model Fail? Contrastive Local Explanations for Retail Forecasting

| Item | Description |
| --- | --- | 
| Presented By | Ana Lucic |
| Paper | [Why Does My Model Fail? Contrastive Local Explanations for Retail Forecasting](https://dl.acm.org/doi/pdf/10.1145/3351095.3372824?download=true) |



## Notes

- Focused on contrastive explanations
- monto-carle bounds for reasonable predictions
    - **MC-BRP**
- Given a bad/undesirable prediction the method identifies feature values that would rectify the prediction outcome
- Tried to assess whether the explanations where both:
    - interpretable AND actionable
- Forward simulation: "Does this prediction result in a large error?"
- Counterfactual simulation: "This prediction results in alarge erroer. How can you recitify this?"
- Study found that generally speaking the approach helps people interpret & understand the model & why it makes/made mistakes
    - Result Seems to be most prevelant for those in the research community, thus more work is required for the "lay person"