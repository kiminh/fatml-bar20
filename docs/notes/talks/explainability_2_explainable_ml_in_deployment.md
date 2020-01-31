# Explainability: Explainable Machine Learning in Deployment

| Item | Description |
| --- | --- | 
| Presented By | Umang Bhatt |
| Paper | [Explainable Machine Learning in Deployment](https://dl.acm.org/doi/pdf/10.1145/3351095.3375624?download=true) |



## Notes

- Transparency:
    - Provides stakeholders with information about how a model works
    - Insights into predictions for specific data points (local)
- Explainability:
- Found 3 types of explanations:
    - Feature importance
    - Sample importance
    - Counterfactuals
- Found that:
    - Explainability is used for internal debugging
    - Most consumers of ML explanations are engineers
    - Lack of consensus on how to evaluate feature-level explanations

![AI Deployment Findings](./ai_deployment_findings.png)

- Claim that explainability isn't really required to demonstrate accuracy, effectiveness & appropriateness of a model
- Current explainability techniques don't have causal underpinnings yet they are used to identify & rectify issues on a causal basis

**Read the paper**