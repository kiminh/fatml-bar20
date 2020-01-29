# Fairness 2: Multi-category Fairness in Sponsored Search Auctions

| Item | Description |
| --- | --- | 
| Presented By | Shuchi Chawla |
| Reference | [Multi-Category Fairness in Sponsored Search Auctions](https://dl.acm.org/doi/pdf/10.1145/3351095.3372848?download=true) |



## Notes

- Goal to create fairness framework that eliminates skewed delivery
- Want to distribute ads in a "fair" way with fair being defined as:
    - *similar uses should be treated similarly*
- Attempt to leverage appropriateness of the ad consumer, eg:
    - Are the qualified for the job add
    - Are they looking for that product
    - etc
- Challenges in assigning multi-task fairness when looking at subgroups
    - ie, might be holistically fair but the individual fairness observed for task 1, 2...n might be violated
- Proposed resolution:
    - Users specify preferences
    - intra-category fairness where all similar users within a category are shown the same ads