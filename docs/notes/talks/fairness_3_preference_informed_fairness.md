# Fairness 3: Preference-Informed Fairness

| Item | Description |
| --- | --- | 
| Presented By | Gal Yona |
| Reference | [Preference-informed fairness](https://dl.acm.org/doi/abs/10.1145/3351095.3373155) |



## Notes

- Put forward the notion of *Preference-Informed Individual Fairness* (PIF)
    - Combination of individual fairness (IF) & envy-freeness (EF)
- Possible to have not individually fair outcomes even when every individual receives a favourable outcome
    - Because it's possible they didn't get access to an opportunity they were eligible for
    - Considered an *Envy-Free* allocation
- Propose using individual fairness but relax it using individual preferences
    - Works by proposing the counterfactual scenario to the individual receiving their allocation. If they prefer their current scenario than it's fair else not

Question:
    - Does this approach require individuals to be aware of the proposed outcome first before the final allocation can be made? If so, how would this work when applying a marketing campaign? Additionally, have you thought about how this could be implemented?