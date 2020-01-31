# Accountability: Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing

| Item | Description |
| --- | --- | 
| Presented By | Rebecca N. White |
| Paper | [Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic](https://dl.acm.org/doi/pdf/10.1145/3351095.3372873?download=true) |



## Notes

- Existing tooling:
    - product requirements documents (PRDs)
    - datasheets
    - model cards
    - AI Principles
- Don't cover the E2E development process
- Fail to capure causal relationships
- Compared existing industry (aerospace, finance, health, etc) that already have complex algorithms + regulation + ethical requirements
    - Generated `insert 10 mechanisms`
    - Can apply them to AI

![FEMA](./fema.png)


*Failure Modes & Effects Analysis (FEMA)*
- Trace back an outcome to the input/action that generated it.
- Begin by logging all functionality, intended or not & apply the following checks/tests:
    - User Action/Intended Response
        - For each intended functionality, document the intended/expected response
    - Potential Failure Mode(s)/Mechanism of Failure
        - Outline all the possible areas for failyure
    - Potential Effect(s) of Failure/Consequences/Harm(s)
        - ....
    - Severity
        - risk rate each outcome
