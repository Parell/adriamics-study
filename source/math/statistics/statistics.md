# Data, variables, and measurement scales

## Types of variables

| Type | Meaning | Examples |
| --- | --- | --- |
| Categorical | Values are labels or groups | color, major, brand |
| Ordinal | Categories have a natural order | small/medium/large, rankings |
| Quantitative | Values are numerical measurements | height, income, age |

Quantitative variables may be:

- **Discrete**: countable values, such as number of calls
- **Continuous**: any value in an interval, such as time or weight

## Measurement scales

| Scale | Has order? | Equal differences meaningful? | True zero? | Example |
| --- | ---: | ---: | ---: | --- |
| Nominal | No | No | No | blood type |
| Ordinal | Yes | No | No | class rank |
| Interval | Yes | Yes | No | Celsius temperature |
| Ratio | Yes | Yes | Yes | mass, length, income |

The scale determines what computations make sense. Means are generally meaningful for interval and ratio measurements, but not for nominal categories; ordinal data require additional assumptions because equal gaps between ranks are not guaranteed.

## Common data issues

- Missing values
- Outliers
- Measurement error
- Selection bias
- Confounding

These are not cosmetic issues. They can change the answer.

---

# Describing a distribution

A distribution describes how values are spread across a variable.

## Center

Two standard measures of center are:

- **Mean**
  $$
  \bar{x} = \frac{1}{n}\sum_{i=1}^n x_i
  $$
- **Median**
  - The middle value after sorting
  - Robust to outliers

Use the mean for roughly symmetric data without strong outliers.
Use the median for skewed data or data with outliers.

## Spread

Common measures of spread:

- **Range**: $\max(x) - \min(x)$
- **Variance**:
  $$
  s^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i - \bar{x})^2
  $$
- **Standard deviation**:
  $$
  s = \sqrt{s^2}
  $$
- **Interquartile range**:
  $$
  \mathrm{IQR} = Q_3 - Q_1
  $$

Variance and standard deviation measure typical distance from the mean. IQR measures the width of the middle 50% and is less sensitive to outliers.

## Shape

Important shape features:

- **Symmetric** or **skewed**
- **Unimodal**, **bimodal**, or multimodal
- **Heavy-tailed** or light-tailed
- Presence of **outliers**

## Z-scores

A z-score tells how many standard deviations a value lies from the mean:

$$
z = \frac{x - \mu}{\sigma}
$$

For sample data:

$$
z = \frac{x - \bar{x}}{s}
$$

Z-scores are useful for comparing values across different scales.

## Five-number summary

- Minimum
- First quartile $Q_1$
- Median
- Third quartile $Q_3$
- Maximum

This summary underlies the boxplot.
---

# Probability essentials

Probability models uncertainty mathematically.

## Sample spaces and events

- A **sample space** is the set of all possible outcomes.
- An **event** is a subset of the sample space.

For event $A$:

$$
0 \le P(A) \le 1
$$

and

$$
P(\Omega) = 1
$$

where $\Omega$ is the sample space.

## Rules

### Complement

$$
P(A^c) = 1 - P(A)
$$

### Addition rule

For any events $A$ and $B$:

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

If $A$ and $B$ are mutually exclusive, then $P(A \cap B)=0$.

### Conditional probability

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$

provided $P(B) > 0$.

### Independence

Events $A$ and $B$ are independent if:

$$
P(A \cap B) = P(A)P(B)
$$

equivalently,

$$
P(A \mid B) = P(A)
$$

# Bayes' rule

$$
P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}
$$

Bayes' rule reverses conditioning. It is especially important in diagnostics and classification.

---

# Common distributions

## Bernoulli

A Bernoulli random variable takes values 1 and 0 with:

$$
P(X=1)=p,\qquad P(X=0)=1-p
$$

Mean:

$$
\mathbb{E}[X] = p
$$

Variance:

$$
\mathrm{Var}(X) = p(1-p)
$$

## Binomial

Counts successes in $n$ independent Bernoulli trials with success probability $p$:

$$
X \sim \mathrm{Binomial}(n,p)
$$

Probability mass function:

$$
P(X=k) = {n \choose k} p^k(1-p)^{n-k}
$$

Mean and variance:

$$
\mathbb{E}[X] = np,\qquad \mathrm{Var}(X)=np(1-p)
$$

## Normal

The normal distribution is symmetric and bell-shaped:

$$
X \sim \mathcal{N}(\mu,\sigma^2)
$$

Standardization:

$$
Z = \frac{X-\mu}{\sigma} \sim \mathcal{N}(0,1)
$$

The normal distribution is central because many sums and averages are approximately normal.

## Poisson

Models counts over time, space, or area when events occur independently at a constant average rate:

$$
P(X=k)=\frac{e^{-\lambda}\lambda^k}{k!}
$$

Mean and variance:

$$
\mathbb{E}[X]=\lambda,\qquad \mathrm{Var}(X)=\lambda
$$

## Exponential

Models waiting time between Poisson events:

$$
f(x)=\lambda e^{-\lambda x},\quad x \ge 0
$$

Memoryless property:

$$
P(X>s+t \mid X>s)=P(X>t)
$$

---

# Sampling and the central limit theorem

## Sampling distributions

A statistic is a random variable because it depends on the sample. Its distribution is called a **sampling distribution**.

The standard error measures typical sampling variation.

For the sample mean:

$$
\mathrm{SE}(\bar{x}) = \frac{\sigma}{\sqrt{n}}
$$

If $\sigma$ is unknown, use:

$$
\mathrm{SE}(\bar{x}) \approx \frac{s}{\sqrt{n}}
$$

## Central limit theorem

If observations are independent and have finite variance, then for sufficiently large $n$ the distribution of the sample mean is approximately normal:

$$
\bar{X} \approx \mathcal{N}\left(\mu,\frac{\sigma^2}{n}\right)
$$

This is one of the most important results in statistics.

## Practical implications

- Large samples reduce random error.
- Skewed populations can still produce approximately normal sample means.
- The CLT does not fix bias, bad measurement, or dependence.

## Independence and sampling quality

The CLT and many inferential methods rely on:

- Random sampling or random assignment
- Independence or weak dependence
- Reasonable sample size

If sampling is biased, inference can be precise and wrong at the same time.

---

# Estimation and confidence intervals

## Point estimates

A **point estimate** is a single best guess for a population parameter.

Examples:

- $\bar{x}$ estimates $\mu$
- $\hat{p}$ estimates $p$
- $s^2$ estimates $\sigma^2$

## Confidence intervals

A confidence interval gives a range of plausible values for a parameter.

General form:

$$
\text{estimate} \pm \text{margin of error}
$$

For a mean with known $\sigma$:

$$
\bar{x} \pm z_{\alpha/2}\frac{\sigma}{\sqrt{n}}
$$

For a mean with unknown $\sigma$:

$$
\bar{x} \pm t_{\alpha/2,\;n-1}\frac{s}{\sqrt{n}}
$$

For a proportion:

$$
\hat{p} \pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}
$$

## Interpreting confidence intervals

The correct interpretation is about the long-run method, not a single interval:

- A 95% confidence method produces intervals that capture the true parameter about 95% of the time in repeated sampling.

It does **not** mean there is a 95% probability that the parameter lies in a particular computed interval.

## Margin of error

Margin of error usually decreases when:

- Sample size increases
- Variability decreases
- Confidence level decreases

---

# Hypothesis testing

Hypothesis testing is a framework for deciding whether observed data are consistent with a null model.

## Setup

- **Null hypothesis**: $H_0$
- **Alternative hypothesis**: $H_1$ or $H_a$
- **Test statistic**: a number summarizing evidence against $H_0$
- **P-value**: probability, under $H_0$, of data at least as extreme as what was observed

## Decision logic

- Small p-value: evidence against $H_0$
- Large p-value: data are reasonably consistent with $H_0$

Common significance levels:

$$
\alpha = 0.10,\ 0.05,\ 0.01
$$

Reject $H_0$ when $p \le \alpha$.

## Error types

| Decision | Reality: $H_0$ true | Reality: $H_0$ false |
| --- | --- | --- |
| Reject $H_0$ | Type I error | Correct rejection |
| Fail to reject $H_0$ | Correct decision | Type II error |

- Type I error probability is $\alpha$.
- Type II error probability is $\beta$.
- **Power** is $1-\beta$.

## Common test statistics

### One-sample mean

$$
t = \frac{\bar{x}-\mu_0}{s/\sqrt{n}}
$$

### One-sample proportion

$$
z = \frac{\hat{p}-p_0}{\sqrt{p_0(1-p_0)/n}}
$$

## Good testing practice

- State hypotheses before seeing the result.
- Choose a meaningful effect size, not just significance.
- Report confidence intervals alongside p-values.
- Distinguish statistical significance from practical importance.

---

# Correlation and regression

## Correlation

Correlation measures the strength and direction of linear association between two quantitative variables.

Pearson correlation coefficient:

$$
-1 \le r \le 1
$$

Interpretation:

- $r \approx 1$: strong positive linear relationship
- $r \approx -1$: strong negative linear relationship
- $r \approx 0$: little linear relationship

Correlation does not imply causation.

## Simple linear regression

Model:

$$
y = \beta_0 + \beta_1 x + \varepsilon
$$

Estimated line:

$$
\hat{y} = b_0 + b_1 x
$$

Interpretation:

- $b_0$ is the predicted response when $x=0$
- $b_1$ is the expected change in $y$ for a one-unit increase in $x$

## Residuals

Residual:

$$
e_i = y_i - \hat{y}_i
$$

Residuals reveal:

- Nonlinearity
- Unequal variance
- Outliers
- Model misspecification

## Coefficient of determination

$$
R^2
$$

is the proportion of variability in the response explained by the model.

## Regression pitfalls

- Extrapolation beyond the observed range
- Omitted variables
- Influential outliers
- Assuming causation from association

---

# Nonparametric and categorical methods

## Categorical data

When variables are categorical, analysis often uses counts and proportions.

### Chi-square goodness-of-fit

Tests whether observed counts differ from expected counts:

$$
\chi^2 = \sum \frac{(O-E)^2}{E}
$$

### Chi-square test of independence

Used for contingency tables to test whether two categorical variables are associated.

## Nonparametric ideas

Nonparametric methods make fewer assumptions about the population distribution.

Common examples:

- Sign test
- Wilcoxon signed-rank test
- Mann-Whitney U test
- Kruskal-Wallis test

These are useful when data are skewed, ordinal, or have strong outliers.

## When they help

- Small samples with unknown shape
- Ordinal outcomes
- Non-normal data where rank-based comparisons are acceptable

---

# Practical workflow and pitfalls

## A reliable analysis workflow

1. Define the question precisely.
2. Identify the population, parameter, and sample.
3. Inspect data quality and missingness.
4. Visualize the distribution.
5. Choose methods matched to the variable type and design.
6. Check assumptions.
7. Compute estimates, intervals, or test results.
8. Interpret in context.
9. Report limitations.

## Common pitfalls

- Confusing sample statistics with population parameters
- Ignoring selection bias
- Treating p-values as effect sizes
- Confusing correlation with causation
- Overfitting a model to noisy data
- Reporting significance without uncertainty

## Model-checking checklist

- Is the sample representative?
- Are observations independent?
- Is the variable type matched to the method?
- Are outliers influential?
- Are assumptions approximately satisfied?
- Is the interpretation scientifically meaningful?

---

# Formula sheet

## Descriptive statistics

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i
$$

$$
s^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i-\bar{x})^2
$$

$$
s = \sqrt{s^2}
$$

$$
\mathrm{IQR} = Q_3 - Q_1
$$

## Probability

$$
P(A^c)=1-P(A)
$$

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
$$

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
$$

$$
P(A\cap B)=P(A)P(B)\quad \text{if independent}
$$

## Distributions

$$
P(X=k)= {n \choose k}p^k(1-p)^{n-k}
$$

$$
P(X=k)=\frac{e^{-\lambda}\lambda^k}{k!}
$$

$$
Z=\frac{X-\mu}{\sigma}
$$

## Inference

$$
\mathrm{SE}(\bar{x})=\frac{\sigma}{\sqrt{n}}
$$

$$
t=\frac{\bar{x}-\mu_0}{s/\sqrt{n}}
$$

$$
z=\frac{\hat{p}-p_0}{\sqrt{p_0(1-p_0)/n}}
$$

$$
\bar{x}\pm t_{\alpha/2,\;n-1}\frac{s}{\sqrt{n}}
$$

$$
\hat{p}\pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}
$$

## Regression

$$
y=\beta_0+\beta_1x+\varepsilon
$$

$$
e_i = y_i - \hat{y}_i
$$

# Problem-solving notes

- Start by naming the parameter.
- Check whether the method is for a mean, proportion, count, or association.
- If the data are skewed, consider a transformation or a robust method.
- If the conclusion depends on a model assumption, state that assumption explicitly.

# Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
