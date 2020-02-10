# Fairness 3: Fairness Is Not Static: Deeper Understanding of Long Term Fairness via Agents and Environments

| Item | Description |
| --- | --- | 
| Presented By | Reuben Binns |
| Reference | [Fairness Is Not Static: Deeper Understanding of Long Term Fairness via Simulation Studies](https://dl.acm.org/doi/pdf/10.1145/3351095.3372878?download=true) |



## Notes

- ML community has shifted from just asking "is my model right?" to asking "what are the consequences of this?"
- Currently applied to a static dataset (that used for your use-case)
- Contend this breakdowns when:
    - Your domain has feedback loops
    - long terms outcomes
    - etc
![Not Static Fairness](./static_fairness.jpg)

- Google have developed [ML-Fairness-Gym](https://github.com/google/ml-fairness-gym)
    - simulation framework to test this
- Requires a model of the outside world in addition to the modelled world