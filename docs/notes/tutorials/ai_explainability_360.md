# AI Explainability 360

| Item | Description |
| --- | --- | 
| Presented By | IBM Research |
| FAT Reference | [AI Explainability 360 Tutorial](https://fatconference.org/2020/acceptedtuts.html#ai) |
| Paper | [AI explainability 360: hands-on tutorial](https://dl.acm.org/doi/abs/10.1145/3351095.3375667) |
| Microsite | [AI Explainability 360 Tutorial](https://github.com/IBM/AIX360/wiki/ACM-FAT*2020-Tutorial) |
| Github | [IBM/AIX360](https://github.com/IBM/AIX360) |
| Website | [Bluemix Demos](http://aix360.mybluemix.net/) |


## Notes

### General Interpretability Metrics

- Maximum mean discrepancy critic
- Saliency maps
    - Image explainability
    - Aims to highlight the objects that determined the classification
    - Works by identifying how much the classification changes based on different components in the image
- Knowledge Distilation

### AI 360 Intro

- Developed by IBM
- Developed a taxonomy that can be explored to identify the most appropriate technique
    - (add photo/slide of the taxonomy)
- Types:
    - *post-hoc*: explain each point/observation etc
    - *self-explaining*: The model to derive the explanations might not be explainable
- Key idea of the approach is to provide insight to the various people that interact with a model & it's outputs & aligns with their knowledge & skillset
    - Data Scientist Persona:
        - Potential Explanation Type: Interpretable models, eg rule-based
        - Focused on understanding the in's & out's of the model, it's accuracy & how it works
    - Business User Persona: 
        - Potential Explanation Type: ProtoDash
        - Aiming to build trust by comparing with historical data/cases
    - Customer Persona:
        - Potential Explanation Type: Contrastive Explanation (CEN)
        - Highlight areas that directed the decision &/or areas they could change to alter the decision


### Package Walkthrough

**Use-case**: *whether or not a financial institute should offer a loan to a loan applicant*

The demo is available online but behind a login.

- Alogorithm Proto-Dash:
    - Retrieves/identifies similar observations (aka `prototypes`) to the one of interest
        - [Maximum mean discrepency](https://www.ibm.com/blogs/research/2019/10/learning-implicit-generative-models/) used as the similarity metric
        - Highlights the most similar items
    

Not all algoirthms are available yet in the package. Some of the handling for categorical variables are currently closed source but the accompanying papers should be available.


### HELOC Demo

Walk-through available at: [Credit Approval Tutorial](https://nbviewer.jupyter.org/github/IBM/AIX360/blob/master/examples/tutorials/HELOC.ipynb)

*NOTE: In order to run the demo the data is required from FICO & requires submitting an access request*

#### Comments on the library
- Supports both continuous & categorical features (as well as combinations of both)
    - Eg a continuous feature plus a binned version
- Supports a custom method for binarising data prior to analysis
    - `FeatureBinarizer` to manage this with options such as bin size
- LRR: Logistic Rule Regression
    - Generates a GAM
- 