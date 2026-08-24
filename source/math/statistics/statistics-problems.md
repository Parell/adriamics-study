<!--
id: statistics-11
note: math-statistics
title: "Identify the Population and Sample"
exam: exam-i
skills: [Population, Sample]
-->

A researcher wants to study sleep habits of all first-year students at a college. She surveys 120 first-year students. Which group is the population, and which group is the sample?

:::solution
The **population** is the full group of interest: all first-year students at the college.

The **sample** is the subset actually observed: the 120 first-year students who were surveyed.
:::

<!--
id: statistics-12
note: math-statistics
title: "Classify the Variable"
exam: exam-i
skills: [Variable Types, Discrete and Continuous]
-->

Classify each variable as categorical, ordinal, or quantitative. If it is quantitative, say whether it is discrete or continuous.

- blood type
- class rank
- number of siblings
- time to finish a race

:::solution
- Blood type is **categorical**.
- Class rank is **ordinal**.
- Number of siblings is **quantitative discrete**.
- Time to finish a race is **quantitative continuous**.
:::

<!--
id: statistics-13
note: math-statistics
title: "Match the Measurement Scale"
exam: exam-i
skills: [Measurement Scales]
-->

State the measurement scale for each variable: nominal, ordinal, interval, or ratio.

- jersey number
- class rank
- Celsius temperature
- body mass

:::solution
- Jersey number is **nominal** because it is a label.
- Class rank is **ordinal** because order matters but differences do not have a natural numerical meaning.
- Celsius temperature is **interval** because differences are meaningful but there is no true zero.
- Body mass is **ratio** because differences and ratios are meaningful and there is a true zero.
:::

<!--
id: statistics-14
note: math-statistics
title: "Choose Mean or Median"
exam: exam-i
skills: [Mean, Median, Outliers]
-->

For the data set

$$
3,\ 4,\ 4,\ 5,\ 40
$$

find the mean and the median. Which measure of center better describes the data?

:::solution
The mean is

$$
\bar{x} = \frac{3+4+4+5+40}{5} = \frac{56}{5} = 11.2
$$

The median is the middle value after sorting, which is

$$
4
$$

The value $40$ is an outlier compared with the rest of the data, so the **median** is the better measure of center.
:::

<!--
id: statistics-15
note: math-statistics
title: "Find the Interquartile Range"
exam: exam-i
skills: [Quartiles, Interquartile Range]
-->

If a data set has

$$
Q_1 = 18 \quad \text{and} \quad Q_3 = 31,
$$

what is the interquartile range?

:::solution
Use the formula

$$
\mathrm{IQR} = Q_3 - Q_1
$$

So

$$
\mathrm{IQR} = 31 - 18 = 13
$$
:::

<!--
id: statistics-16
note: math-statistics
title: "Compute a Z-Score"
exam: exam-i
skills: [Z-scores, Standard Deviation]
-->

A score of $80$ comes from a distribution with mean $72$ and standard deviation $4$. What is the z-score?

:::solution
Use

$$
z = \frac{x - \mu}{\sigma}
$$

Substitute the values:

$$
z = \frac{80 - 72}{4} = \frac{8}{4} = 2
$$

The score is 2 standard deviations above the mean.
:::

<!--
id: statistics-17
note: math-statistics
title: "Use the Complement Rule"
exam: exam-i
skills: [Complement Rule, Probability]
-->

If the probability of rain tomorrow is $0.3$, what is the probability that it will not rain tomorrow?

:::solution
Use the complement rule:

$$
P(A^c) = 1 - P(A)
$$

So

$$
P(\text{no rain}) = 1 - 0.3 = 0.7
$$
:::

<!--
id: statistics-18
note: math-statistics
title: "Apply Conditional Probability"
exam: exam-i
skills: [Conditional Probability, Probability]
-->

In a survey, $20\%$ of students take the bus to school, and $5\%$ of students both take the bus and arrive late. What is the probability that a student is late given that the student takes the bus?

:::solution
Use conditional probability:

$$
P(\text{late} \mid \text{bus}) = \frac{P(\text{late and bus})}{P(\text{bus})}
$$

Substitute the values:

$$
P(\text{late} \mid \text{bus}) = \frac{0.05}{0.20} = 0.25
$$

So the probability is $0.25$.
:::

<!--
id: statistics-19
note: math-statistics
title: "Check Independence"
exam: exam-i
skills: [Independence, Probability]
-->

Suppose $P(A) = 0.4$, $P(B) = 0.5$, and $P(A \cap B) = 0.2$. Are $A$ and $B$ independent?

:::solution
Check whether

$$
P(A \cap B) = P(A)P(B)
$$

Compute the product:

$$
P(A)P(B) = 0.4 \cdot 0.5 = 0.2
$$

This matches $P(A \cap B)$, so the events are **independent**.
:::

<!--
id: statistics-110
note: math-statistics
title: "Standardize a Normal Value"
exam: exam-i
skills: [Normal Distribution, Standardization]
-->

Let $X \sim \mathcal{N}(50, 9)$. What is the z-score for the value $56$?

:::solution
Since $X \sim \mathcal{N}(50, 9)$, the standard deviation is

$$
\sigma = 3
$$

Now standardize:

$$
z = \frac{56 - 50}{3} = 2
$$

So the z-score is $2$.
:::

<!--
id: statistics-21
note: math-statistics
title: "Find the Mean and Median"
exam: exam-ii
skills: [Mean, Median, Outliers]
-->

For the data set

$$
1,\ 2,\ 2,\ 7,\ 10
$$

find the mean and the median. Which measure is more resistant to the large value?

:::solution
The mean is

$$
\bar{x} = \frac{1+2+2+7+10}{5} = \frac{22}{5} = 4.4
$$

The median is the middle value:

$$
2
$$

The value $10$ pulls the mean upward, so the **median** is more resistant to the large value.
:::

<!--
id: statistics-22
note: math-statistics
title: "Compute the Sample Standard Deviation"
exam: exam-ii
skills: [Variance, Standard Deviation]
-->

For the data set

$$
2,\ 4,\ 6,\ 8
$$

compute the sample mean and the sample standard deviation.

:::solution
First find the mean:

$$
\bar{x} = \frac{2+4+6+8}{4} = 5
$$

Now compute the squared deviations:

$$
(2-5)^2 = 9,\ (4-5)^2 = 1,\ (6-5)^2 = 1,\ (8-5)^2 = 9
$$

So

$$
s^2 = \frac{9+1+1+9}{4-1} = \frac{20}{3}
$$

and

$$
s = \sqrt{\frac{20}{3}}
$$

So the sample standard deviation is $\sqrt{20/3}$, about $2.58$.
:::

<!--
id: statistics-23
note: math-statistics
title: "Find an Exact Binomial Probability"
exam: exam-ii
skills: [Binomial Distribution, Probability]
-->

A basketball player makes each free throw with probability $0.7$. Assuming the shots are independent, what is the probability of making exactly 4 out of 5 free throws?

:::solution
This is a binomial probability with $n=5$, $k=4$, and $p=0.7$:

$$
P(X=4) = {5 \choose 4}(0.7)^4(0.3)^1
$$

Compute:

$$
P(X=4) = 5(0.2401)(0.3) = 0.36015
$$

So the probability is about $0.360$.
:::

<!--
id: statistics-24
note: math-statistics
title: "Compare Two Standardized Scores"
exam: exam-ii
skills: [Normal Distribution, Standardization, Z-scores]
-->

Two values come from different normal distributions:

- $56$ from a distribution with mean $50$ and standard deviation $3$
- $68$ from a distribution with mean $60$ and standard deviation $4$

Which value is more unusual relative to its own distribution?

:::solution
Standardize each value.

For $56$:

$$
z = \frac{56 - 50}{3} = 2
$$

For $68$:

$$
z = \frac{68 - 60}{4} = 2
$$

The two values have the same z-score, so they are **equally unusual** relative to their own distributions.
:::

<!--
id: statistics-25
note: math-statistics
title: "Use Standard Error and the CLT"
exam: exam-ii
skills: [Sampling Distributions, Standard Error, Central Limit Theorem]
-->

Suppose a population has standard deviation $12$. If the sample size is $36$, what is the standard error of the sample mean? What happens to the standard error if the sample size increases to $144$?

:::solution
For the sample mean,

$$
\mathrm{SE}(\bar{x}) = \frac{\sigma}{\sqrt{n}}
$$

When $n=36$:

$$
\mathrm{SE}(\bar{x}) = \frac{12}{\sqrt{36}} = \frac{12}{6} = 2
$$

When $n=144$:

$$
\mathrm{SE}(\bar{x}) = \frac{12}{\sqrt{144}} = \frac{12}{12} = 1
$$

So the standard error gets smaller as the sample size increases. This matches the central limit theorem idea that larger samples reduce random error in the sample mean.
:::

<!--
id: statistics-26
note: math-statistics
title: "Construct a Confidence Interval"
exam: exam-ii
skills: [Confidence Intervals, Interpretation]
-->

A sample has mean $52$ and margin of error $4.3$. Construct the confidence interval and interpret it correctly.

:::solution
Use the general form

$$
\text{estimate} \pm \text{margin of error}
$$

So the interval is

$$
52 \pm 4.3
$$

which gives

$$
(47.7,\ 56.3)
$$

This means the method produces intervals that would capture the true parameter about the stated confidence level in repeated sampling. It does not mean there is a probability of 1 particular interval being correct.
:::

<!--
id: statistics-27
note: math-statistics
title: "Compute a One-Sample t Statistic"
exam: exam-ii
skills: [Hypothesis Testing, Test Statistic]
-->

A sample has $\bar{x} = 105$, $s = 15$, and $n = 25$. Compute the one-sample t statistic for testing $H_0: \mu = 100$. If the two-sided p-value is about $0.11$, what should you conclude at $\alpha = 0.05$?

:::solution
Use

$$
t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}
$$

Substitute the values:

$$
t = \frac{105 - 100}{15/\sqrt{25}} = \frac{5}{15/5} = \frac{5}{3} \approx 1.67
$$

Since the p-value is about $0.11$, and $0.11 > 0.05$, you **fail to reject** $H_0$ at the $5\%$ level. The data are reasonably consistent with the null model.
:::

<!--
id: statistics-28
note: math-statistics
title: "Interpret a Linear Regression Model"
exam: exam-ii
skills: [Simple Linear Regression, Residuals]
-->

Suppose a regression model is

$$
\hat{y} = 12 + 3x
$$

If $x=4$ and the observed value is $20$, find the predicted value, the residual, and the meaning of the slope.

:::solution
The predicted value is

$$
\hat{y} = 12 + 3(4) = 24
$$

The residual is

$$
e = y - \hat{y} = 20 - 24 = -4
$$

The slope is $3$, so each 1-unit increase in $x$ is associated with an increase of 3 units in the predicted value of $y$.
:::

<!--
id: statistics-31
note: math-statistics
title: "Choose a Summary for Skewed Data"
exam: final
skills: [Median, IQR, Outliers]
-->

A store manager records weekly customer spending. Most customers spend between $20$ and $60$, but a few large orders are much higher. Which measure of center and which measure of spread should the manager report: mean and standard deviation, or median and IQR? Explain why.

:::solution
The better choices are the **median** and **IQR**.

The data are skewed by a few large orders, so the mean would be pulled upward and the standard deviation would be more sensitive to the extreme values. The median and IQR are more robust and better summarize the typical spending.
:::

<!--
id: statistics-32
note: math-statistics
title: "Model a Count with Poisson"
exam: final
skills: [Poisson Distribution, Applied Probability]
-->

A help desk receives an average of $3$ calls per hour, and calls arrive independently at a roughly constant rate. What distribution is the best model for the number of calls in one hour, and what is its parameter?

:::solution
This is a **Poisson** model, because it counts events over a fixed interval when events occur independently at a constant average rate.

The parameter is

$$
\lambda = 3
$$

So the number of calls in one hour can be modeled by

$$
X \sim \mathrm{Poisson}(3)
$$
:::

<!--
id: statistics-33
note: math-statistics
title: "Use the CLT for a Sample Mean"
exam: final
skills: [Central Limit Theorem, Sampling Distributions]
-->

A population has mean $50$ and standard deviation $10$. A random sample of size $64$ is taken. Approximate the mean and standard deviation of the sampling distribution of the sample mean.

:::solution
By the central limit theorem, the sample mean is approximately normal for a large enough sample size.

Its mean is the population mean:

$$
\mu_{\bar{x}} = 50
$$

Its standard deviation is the standard error:

$$
\sigma_{\bar{x}} = \frac{10}{\sqrt{64}} = \frac{10}{8} = 1.25
$$

So the sampling distribution is approximately normal with mean $50$ and standard deviation $1.25$.
:::

<!--
id: statistics-34
note: math-statistics
title: "Test a Population Proportion"
exam: final
skills: [Hypothesis Testing, One-Sample Proportion]
-->

A manufacturer claims that only $2\%$ of its items are defective. In a random sample of $200$ items, $8$ are defective. Use a one-sample proportion test to compute the z statistic for $H_0: p = 0.02$, and decide whether the result gives evidence against the claim at the $5\%$ level.

:::solution
The sample proportion is

$$
\hat{p} = \frac{8}{200} = 0.04
$$

Use

$$
z = \frac{\hat{p} - p_0}{\sqrt{p_0(1-p_0)/n}}
$$

Substitute:

$$
z = \frac{0.04 - 0.02}{\sqrt{0.02(0.98)/200}}
$$

Compute the denominator:

$$
\sqrt{0.02(0.98)/200} \approx 0.0099
$$

So

$$
z \approx \frac{0.02}{0.0099} \approx 2.0
$$

That is enough evidence to reject the null at the $5\%$ level, so the sample suggests the defect rate may be higher than claimed.
:::

<!--
id: statistics-35
note: math-statistics
title: "Compute a Chi-Square Goodness-of-Fit Statistic"
exam: final
skills: [Chi-Square, Categorical Data]
-->

A survey asks 60 people to choose one of three categories. If all three categories were equally likely, the expected count would be 20 in each category. The observed counts are 18, 22, and 20. Compute the chi-square goodness-of-fit statistic.

:::solution
Use

$$
\chi^2 = \sum \frac{(O-E)^2}{E}
$$

Compute each term:

$$
\frac{(18-20)^2}{20} = \frac{4}{20} = 0.2
$$

$$
\frac{(22-20)^2}{20} = \frac{4}{20} = 0.2
$$

$$
\frac{(20-20)^2}{20} = 0
$$

Add them:

$$
\chi^2 = 0.2 + 0.2 + 0 = 0.4
$$

So the chi-square statistic is $0.4$.
:::

<!--
id: statistics-41
note: math-statistics
title: "Plan a Simple Statistical Workflow"
exam: final
skills: [Workflow, Bias, Outliers]
-->

A hospital wants to understand patient wait times. It sends an optional online survey to people who recently visited the emergency room, and only 300 people respond. What is the likely sample, what is the population of interest, and what are two problems with this data collection process?

:::solution
The **population of interest** is all emergency-room patients whose wait times the hospital wants to understand.

The **sample** is the 300 people who responded to the survey.

Two major problems are:

1. **Selection bias**: the survey is optional, so the respondents may not represent all patients.
2. **Missing or nonresponse bias**: people with especially good or bad experiences may be more likely to respond.

Because of these issues, the hospital should be cautious about generalizing the results. A good workflow would include checking data quality, assessing representativeness, and reporting limitations.
:::

<!--
id: statistics-42
note: math-statistics
title: "Choose a Nonparametric Method"
exam: final
skills: [Nonparametric Methods, Ordinal Data]
-->

A researcher measures pain on a 1-to-10 rating scale for the same 12 patients before and after a treatment. The paired differences are skewed and include an outlier. Which method from the note is the safest choice: the sign test or the Wilcoxon signed-rank test? Explain your choice.

:::solution
The safer choice is the **sign test**.

The data are paired and ordinal, but the differences are skewed and include an outlier. The sign test makes fewer assumptions because it uses only the direction of the change, not the size of each difference. That makes it more robust in this situation.
:::

<!--
id: statistics-43
note: math-statistics
title: "Interpret Correlation and Regression Together"
exam: final
skills: [Correlation, Regression, Residuals]
-->

A model predicts exam score from study hours with

$$
\hat{y} = 50 + 4x
$$

The correlation is $r = 0.92$ and $R^2 = 0.85$. For a student who studies 8 hours, the observed score is 80. Interpret the slope, the correlation, the $R^2$ value, the residual, and one important caution.

:::solution
The slope is $4$, so each additional study hour is associated with an increase of 4 points in the predicted exam score.

The correlation $r = 0.92$ indicates a strong positive linear relationship.

$R^2 = 0.85$ means that about 85% of the variability in exam scores is explained by the linear model.

For $x=8$:

$$
\hat{y} = 50 + 4(8) = 82
$$

So the residual is

$$
e = 80 - 82 = -2
$$

One important caution is that correlation does not imply causation, so the model does not by itself prove that studying causes the higher scores. Also, predictions should not be trusted far outside the observed range.
:::

<!--
id: statistics-44
note: math-statistics
title: "Spot Confounding and Correlation Pitfalls"
exam: final
skills: [Confounding, Correlation, Bias]
-->

A newspaper reports that people who drink more coffee also have higher rates of heart disease. The article does not mention smoking, diet, or exercise. What is the main statistical pitfall here, and what would a better analysis need to address?

:::solution
The main pitfall is **confounding**. Coffee drinking may be associated with other variables, such as smoking, diet, or exercise, that also affect heart disease risk.

Because this is an observational association, the result does not show causation. A better analysis would need to control for potential confounders, use a stronger study design if possible, and state the limitations clearly.
:::
