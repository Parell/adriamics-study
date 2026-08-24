# Probability language and sample spaces

Probability is the mathematics of uncertainty. A probability model has three parts:

- A **sample space** $\Omega$ of possible outcomes
- A **collection of events** built from subsets of $\Omega$
- A **probability measure** $P$ assigning likelihoods to events

>

## Outcomes, events, and sample spaces

An **outcome** is one possible result of an experiment.

A **sample space** $\Omega$ is the set of all outcomes.

An **event** is a subset of the sample space.

Examples:

- Tossing a coin once: $\Omega = \{\text{H}, \text{T}\}$
- Rolling a die: $\Omega = \{1,2,3,4,5,6\}$
- Drawing a card from a standard deck: $\Omega$ has 52 outcomes

## Event operations

If $A$ and $B$ are events:

- $A^c$ means "not $A$"
- $A \cup B$ means $A$ or $B$ or both
- $A \cap B$ means $A$ and $B$
- $A \setminus B$ means $A$ occurs and $B$ does not

Disjoint events satisfy:

$$
A \cap B = \varnothing
$$

## Equally likely outcomes

If all outcomes in a finite sample space are equally likely, then

$$
P(A) = \frac{|A|}{|\Omega|}
$$

This is the classical model used in many introductory problems.

## Probability as a number

For any event $A$:

$$
0 \le P(A) \le 1
$$

Interpretation:

- $P(A)=0$ means impossible in the model
- $P(A)=1$ means certain in the model
- Values near 0 or 1 mean very unlikely or very likely

---

# Counting methods

Counting is often the first step in a probability problem. If you can count outcomes correctly, the probability usually follows.

## Product rule

If a process has $m$ choices for one step and $n$ choices for a second step, then the total number of outcomes is

$$
mn
$$

More generally, multiply the number of choices at each step.

## Factorial

The factorial of a positive integer $n$ is

$$
n! = n(n-1)(n-2)\cdots 2 \cdot 1
$$

with

$$
0! = 1
$$

## Permutations

The number of ways to arrange $r$ objects chosen from $n$ distinct objects is

$$
{}_nP_r = \frac{n!}{(n-r)!}
$$

Use permutations when order matters.

Example:

- Assigning gold, silver, and bronze to 10 runners

## Combinations

The number of ways to choose $r$ objects from $n$ distinct objects is

$$
{n \choose r} = \frac{n!}{r!(n-r)!}
$$

Use combinations when order does not matter.

Example:

- Choosing 3 students from a class of 12

## With and without replacement

- **With replacement**: an object can be used again, so counts often stay the same from step to step
- **Without replacement**: counts change after each selection

## Common counting patterns

### Arrangements with repeated objects

If $n$ objects contain repeats of sizes $n_1,n_2,\dots,n_k$, the number of distinct arrangements is

$$
\frac{n!}{n_1!n_2!\cdots n_k!}
$$

### Stars and bars

The number of nonnegative integer solutions to

$$
x_1 + x_2 + \cdots + x_k = n
$$

is

$$
{n+k-1 \choose k-1}
$$

This is useful for allocation and composition problems.

---

# Axioms and basic rules

Probability obeys a few core rules. Most other formulas come from these.

## Kolmogorov axioms

For any event $A$:

1. $P(A) \ge 0$
2. $P(\Omega) = 1$
3. If $A_1, A_2, \dots$ are pairwise disjoint, then

$$
P\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)
$$

## Complement rule

$$
P(A^c) = 1 - P(A)
$$

This is often the fastest way to compute a probability.

## Addition rule

For any two events $A$ and $B$:

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

If $A$ and $B$ are disjoint:

$$
P(A \cup B) = P(A) + P(B)
$$

## Inclusion-exclusion

For three events:

$$
P(A \cup B \cup C)
= P(A)+P(B)+P(C)
- P(A\cap B)-P(A\cap C)-P(B\cap C)
 + P(A\cap B\cap C)
$$

This extends to more events with alternating signs.

## Union bound

For events $A_1,\dots,A_n$:

$$
P\left(\bigcup_{i=1}^n A_i\right) \le \sum_{i=1}^n P(A_i)
$$

The union bound is useful for quick upper bounds.

---

# Conditional probability and Bayes' theorem

Conditional probability updates probability after new information is observed.

## Conditional probability

If $P(B) > 0$, then

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$

This is the probability of $A$ given that $B$ has occurred.

Rearranging gives the multiplication rule:

$$
P(A \cap B) = P(A \mid B)P(B)
$$

and also

$$
P(A \cap B) = P(B \mid A)P(A)
$$

## Independence

Events $A$ and $B$ are independent if

$$
P(A \cap B) = P(A)P(B)
$$

Equivalent forms:

$$
P(A \mid B) = P(A)
$$

$$
P(B \mid A) = P(B)
$$

Independence is a structural statement, not just a numerical coincidence in one example.

## Law of total probability

If $B_1,\dots,B_n$ are disjoint, exhaustive events with $P(B_i)>0$, then

$$
P(A) = \sum_{i=1}^n P(A \mid B_i)P(B_i)
$$

This is often used with partitions such as machine types, disease status, or urn colors.

## Bayes' theorem

For $P(B)>0$:

$$
P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}
$$

If $\{A_i\}$ is a partition, then

$$
P(A_i \mid B) =
\frac{P(B \mid A_i)P(A_i)}{\sum_j P(B \mid A_j)P(A_j)}
$$

This is the standard framework for diagnosis and classification problems.

## Diagnostic interpretation

In a test problem:

- Prior probability: $P(A)$
- Likelihood: $P(B \mid A)$
- Evidence: $P(B)$
- Posterior probability: $P(A \mid B)$

Bayes' theorem converts a test result into an updated belief about the underlying cause.

---

# Random variables

A **random variable** maps outcomes to numbers.

## Discrete random variables

A discrete random variable takes countably many values.

Its probability mass function (pmf) is

$$
p_X(x) = P(X=x)
$$

Properties:

- $p_X(x) \ge 0$
- $\sum_x p_X(x) = 1$

The cumulative distribution function (cdf) is

$$
F_X(x) = P(X \le x)
$$

## Continuous random variables

A continuous random variable has probability density function (pdf) $f_X(x)$.

Properties:

- $f_X(x) \ge 0$
- $\int_{-\infty}^{\infty} f_X(x)\,dx = 1$

Probabilities come from areas:

$$
P(a \le X \le b) = \int_a^b f_X(x)\,dx
$$

For continuous variables,

$$
P(X=x) = 0
$$

## CDF for continuous and discrete variables

For any random variable:

$$
F_X(x) = P(X \le x)
$$

For continuous random variables:

$$
f_X(x) = \frac{d}{dx}F_X(x)
$$

where differentiation is valid when the CDF is smooth enough.

## Transformations

If $Y = g(X)$, then find the distribution of $Y$ by:

1. Relating $Y$ to $X$
2. Solving for the relevant interval in terms of $X$
3. Integrating or summing over that interval

For monotone transformations of continuous variables, the pdf can often be obtained via the change-of-variables formula.

---

# Expectation, variance, and moments

Expectation is the long-run average value of a random variable.

## Expected value

For a discrete random variable $X$:

$$
E[X] = \sum_x x\,p_X(x)
$$

For a continuous random variable:

$$
E[X] = \int_{-\infty}^{\infty} x f_X(x)\,dx
$$

More generally, for any function $g$:

$$
E[g(X)] = \sum_x g(x)p_X(x)
$$

or

$$
E[g(X)] = \int_{-\infty}^{\infty} g(x)f_X(x)\,dx
$$

This is the **law of the unconscious statistician**.

## Linearity of expectation

Expectation is linear even when variables are dependent:

$$
E[aX+bY+c] = aE[X] + bE[Y] + c
$$

For sums:

$$
E\left[\sum_{i=1}^n X_i\right] = \sum_{i=1}^n E[X_i]
$$

This is one of the most useful tools in probability.

## Variance

Variance measures spread around the mean:

$$
\mathrm{Var}(X) = E[(X-\mu)^2]
$$

where $\mu = E[X]$.

Equivalent form:

$$
\mathrm{Var}(X) = E[X^2] - (E[X])^2
$$

Standard deviation:

$$
\sigma_X = \sqrt{\mathrm{Var}(X)}
$$

## Covariance

For random variables $X$ and $Y$:

$$
\mathrm{Cov}(X,Y) = E[(X-E[X])(Y-E[Y])]
$$

Equivalent form:

$$
\mathrm{Cov}(X,Y) = E[XY] - E[X]E[Y]
$$

If $X$ and $Y$ are independent, then

$$
\mathrm{Cov}(X,Y)=0
$$

The converse is not always true.

## Correlation

The correlation coefficient is

$$
\rho_{X,Y} =
\frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y}
$$

It lies between $-1$ and $1$.

## Moments

The $k$th raw moment is $E[X^k]$.

The $k$th central moment is $E[(X-\mu)^k]$.

These moments are useful for characterizing distributions.

---

# Common discrete distributions

Discrete distributions model counts, categories, and repeated trials.

## Bernoulli distribution

Used for one success/failure trial.

For $0\le p\le1$, if $X \sim \mathrm{Bernoulli}(p)$, then

$$
P(X=1)=p,\qquad P(X=0)=1-p
$$

Mean and variance:

$$
E[X]=p
$$

$$
\mathrm{Var}(X)=p(1-p)
$$

## Binomial distribution

Counts successes in $n$ independent Bernoulli trials.

For an integer $n\ge0$ and $0\le p\le1$, if $X \sim \mathrm{Binomial}(n,p)$, then

$$
P(X=k) = {n \choose k} p^k(1-p)^{n-k}
$$

for $k=0,1,\dots,n$.

Mean and variance:

$$
E[X]=np
$$

$$
\mathrm{Var}(X)=np(1-p)
$$

Use when:

- Fixed number of trials
- Two outcomes per trial
- Constant success probability
- Independence across trials
## Geometric distribution

Models the number of trials until the first success.

For $0<p\le1$, if $X \sim \mathrm{Geometric}(p)$ on $\{1,2,\dots\}$, then

$$
P(X=k) = (1-p)^{k-1}p
$$

Mean and variance:

$$
E[X] = \frac{1}{p}
$$

$$
\mathrm{Var}(X) = \frac{1-p}{p^2}
$$

Memoryless property:

$$
P(X > m+n \mid X > m) = P(X > n)
$$

## Negative binomial distribution

Counts trials until the $r$th success.

For an integer $r\ge1$ and $0<p\le1$, if $X$ is the trial count to obtain $r$ successes:

$$
P(X=k) = {k-1 \choose r-1} p^r(1-p)^{k-r}
$$

for $k=r,r+1,\dots$

## Poisson distribution

Models the number of events in a fixed interval when events occur independently at average rate $\lambda$.

For $\lambda>0$, if $X \sim \mathrm{Poisson}(\lambda)$, then

$$
P(X=k) = e^{-\lambda}\frac{\lambda^k}{k!}
$$

for $k=0,1,2,\dots$

Mean and variance:

$$
E[X]=\lambda
$$

$$
\mathrm{Var}(X)=\lambda
$$

Poisson is a common model for counts of rare events.

## Hypergeometric distribution

Used for sampling without replacement from a finite population.

For integers $0\le K\le N$ and $0\le n\le N$, if a population has $N$ items, $K$ successes, and we draw $n$ items without replacement, then

$$
P(X=k) = \frac{{K \choose k}{N-K \choose n-k}}{{N \choose n}}
$$

Mean:

$$
E[X] = n\frac{K}{N}
$$

Use hypergeometric instead of binomial when draws are dependent because the population is finite.

---

# Common continuous distributions

Continuous distributions model measurements and waiting times.

## Uniform distribution

For $a<b$, if $X \sim \mathrm{Uniform}(a,b)$, then

$$
f_X(x) = \frac{1}{b-a}, \quad a \le x \le b
$$

Mean and variance:

$$
E[X] = \frac{a+b}{2}
$$

$$
\mathrm{Var}(X) = \frac{(b-a)^2}{12}
$$

## Exponential distribution

Models waiting time to the first Poisson event.

For $\lambda>0$, if $X \sim \mathrm{Exponential}(\lambda)$, then

$$
f_X(x) = \lambda e^{-\lambda x}, \quad x \ge 0
$$

CDF:

$$
F_X(x) = 1 - e^{-\lambda x}
$$

Mean and variance:

$$
E[X] = \frac{1}{\lambda}
$$

$$
\mathrm{Var}(X)=\frac{1}{\lambda^2}
$$

Memoryless property:

$$
P(X>s+t \mid X>s) = P(X>t)
$$

## Normal distribution

If $X \sim \mathcal{N}(\mu,\sigma^2)$, then

$$
f_X(x) = \frac{1}{\sigma\sqrt{2\pi}}
\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
$$

Standardization:

$$
Z = \frac{X-\mu}{\sigma} \sim \mathcal{N}(0,1)
$$

The normal distribution is central to approximation and inference.

## Gamma distribution

Gamma distributions model waiting times to multiple Poisson events.

If $X \sim \mathrm{Gamma}(\alpha,\lambda)$ with shape $\alpha$ and rate $\lambda$, then

$$
f_X(x) = \frac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x}, \quad x \ge 0
$$

Special cases:

- Exponential distribution when $\alpha=1$
- Chi-square distribution as a gamma special case

## Beta distribution

The beta distribution is defined on $[0,1]$ and is often used for probabilities and proportions.

If $X \sim \mathrm{Beta}(\alpha,\beta)$, then

$$
f_X(x) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)}, \quad 0 \le x \le 1
$$

It is especially useful in Bayesian modeling.

---

# Joint distributions and dependence

Many problems involve multiple random variables.

## Joint distribution

For discrete variables $X$ and $Y$:

$$
p_{X,Y}(x,y) = P(X=x, Y=y)
$$

For continuous variables:

$$
f_{X,Y}(x,y)
$$

with probabilities obtained by double integration.

## Marginal distributions

From the joint distribution, get the marginal of $X$ by summing or integrating out $Y$:

Discrete:

$$
p_X(x) = \sum_y p_{X,Y}(x,y)
$$

Continuous:

$$
f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y)\,dy
$$

## Conditional distributions

Discrete:

$$
p_{X|Y}(x|y) = \frac{p_{X,Y}(x,y)}{p_Y(y)}
$$

Continuous:

$$
f_{X|Y}(x|y) = \frac{f_{X,Y}(x,y)}{f_Y(y)}
$$

when the denominator is positive.

## Independence of random variables

$X$ and $Y$ are independent if their joint distribution factors:

Discrete:

$$
p_{X,Y}(x,y) = p_X(x)p_Y(y)
$$

Continuous:

$$
f_{X,Y}(x,y) = f_X(x)f_Y(y)
$$

## Conditional expectation

Conditional expectation is the mean of a random variable after conditioning on information.

For a discrete conditioning event:

$$
E[X \mid Y=y]
$$

This quantity is itself a function of $y$.

Conditional expectation is useful for:

- Regression
- Prediction
- Decomposition of variance

## Covariance matrix

For a vector of random variables, the covariance matrix records pairwise covariances:

$$
\Sigma_{ij} = \mathrm{Cov}(X_i, X_j)
$$

The diagonal entries are variances.

---

# Law of large numbers and central limit theorem

These limit theorems explain why averages become stable and why the normal distribution appears so often.

## Law of large numbers

If $X_1, X_2, \dots$ are i.i.d. with mean $\mu$, then the sample average

$$
\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i
$$

converges to $\mu$ as $n$ grows.

Interpretation:

- More data usually means a more stable average
- The sample mean should approach the true mean

## Central limit theorem

If $X_1,\dots,X_n$ are i.i.d. with mean $\mu$ and variance $\sigma^2$, then for large $n$,

$$
\frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \approx \mathcal{N}(0,1)
$$

Equivalently,

$$
\bar{X}_n \approx \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)
$$

This approximation is the foundation of much of statistical inference.

## Standard error

The standard deviation of the sample mean is

$$
\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}
$$

This shrinks as $n$ increases.

## Normal approximation to binomial

When $n$ is large and $p$ is not too close to 0 or 1, a binomial random variable can often be approximated by a normal distribution:

$$
X \sim \mathrm{Binomial}(n,p) \approx \mathcal{N}(np, np(1-p))
$$

Use a continuity correction when appropriate.

---

# Problem-solving workflow

Probability problems are usually easier if you identify the model before doing algebra.

## Step 1: Define the experiment

Ask:

- What is random?
- What are the possible outcomes?
- Is order important?
- Are draws independent?

## Step 2: Identify the event

Write the event clearly in words first, then in symbols.

Examples:

- At least one success
- Exactly two defects
- The first success occurs on trial 4
- Given that the test was positive

## Step 3: Choose the right tool

Pick the simplest model:

- Counting for finite equally likely spaces
- Conditional probability for updated information
- Binomial for fixed independent trials
- Hypergeometric for sampling without replacement
- Poisson for rare-event counts
- Exponential for waiting times
- Normal approximation for large-sample sums and averages

## Step 4: Compute carefully

Useful tactics:

- Use the complement when "at least one" is involved
- Use partitions when information is grouped into cases
- Use symmetry when outcomes are equivalent
- Use linearity of expectation for sums of indicators

## Step 5: Check the result

Verify:

- Probability is between 0 and 1
- Units make sense if the variable is continuous
- Independence assumptions are justified
- The answer matches the event description

## Indicator variables

If $I_A$ is the indicator of event $A$, then

$$
I_A =
\begin{cases}
1, & A \text{ occurs} \\
0, & A \text{ does not occur}
\end{cases}
$$

and

$$
E[I_A] = P(A)
$$

Indicator variables are a powerful way to count expected numbers of events.

---

# Formula sheet

## Core rules

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
P(A\cap B)=P(A\mid B)P(B)
$$

$$
P(A\cap B)=P(B\mid A)P(A)
$$

## Bayes and total probability

$$
P(A)=\sum_i P(A\mid B_i)P(B_i)
$$

$$
P(A_i\mid B)=\frac{P(B\mid A_i)P(A_i)}{\sum_j P(B\mid A_j)P(A_j)}
$$

## Counting

$$
n! = n(n-1)\cdots 1
$$

$$
{}_nP_r = \frac{n!}{(n-r)!}
$$

$$
{n \choose r} = \frac{n!}{r!(n-r)!}
$$

## Random variables

Discrete:

$$
p_X(x)=P(X=x)
$$

Continuous:

$$
F_X(x)=P(X\le x)
$$

$$
f_X(x)=\frac{d}{dx}F_X(x)
$$

## Expectation and variance

Discrete:

$$
E[X]=\sum_x x\,p_X(x)
$$

Continuous:

$$
E[X]=\int_{-\infty}^{\infty} x f_X(x)\,dx
$$

Variance:

$$
\mathrm{Var}(X)=E[X^2]-(E[X])^2
$$

Covariance:

$$
\mathrm{Cov}(X,Y)=E[XY]-E[X]E[Y]
$$

## Standard distributions

Bernoulli:

$$
P(X=1)=p,\qquad P(X=0)=1-p
$$

Binomial:

$$
P(X=k)={n \choose k}p^k(1-p)^{n-k}
$$

Geometric:

$$
P(X=k)=(1-p)^{k-1}p
$$

Poisson:

$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}
$$

Exponential:

$$
f_X(x)=\lambda e^{-\lambda x},\quad x\ge 0
$$

Normal:

$$
Z=\frac{X-\mu}{\sigma}
$$

## Key moments

Bernoulli:

$$
E[X]=p,\quad \mathrm{Var}(X)=p(1-p)
$$

Binomial:

$$
E[X]=np,\quad \mathrm{Var}(X)=np(1-p)
$$

Poisson:

$$
E[X]=\lambda,\quad \mathrm{Var}(X)=\lambda
$$

Exponential:

$$
E[X]=\frac{1}{\lambda},\quad \mathrm{Var}(X)=\frac{1}{\lambda^2}
$$

Uniform on $[a,b]$:

$$
E[X]=\frac{a+b}{2},\quad \mathrm{Var}(X)=\frac{(b-a)^2}{12}
$$

## Limit theorems

Sample mean:

$$
\bar{X}_n=\frac{1}{n}\sum_{i=1}^n X_i
$$

Standard error:

$$
\sigma_{\bar{X}}=\frac{\sigma}{\sqrt{n}}
$$

CLT approximation:

$$
\frac{\bar{X}_n-\mu}{\sigma/\sqrt{n}} \approx \mathcal{N}(0,1)
$$

---

# Common mistakes to avoid

- Confusing permutations with combinations.
- Forgetting whether order matters.
- Using the binomial model when sampling is without replacement from a small finite population.
- Applying conditional probability as if events were independent.
- Treating continuous variables like discrete ones, especially by assigning positive probability to a single point.
- Forgetting to normalize a pdf or pmf.
- Misusing Bayes' theorem by swapping $P(A\mid B)$ and $P(B\mid A)$.
- Ignoring the complement rule for "at least one" problems.
- Assuming zero covariance implies independence.
- Forgetting continuity corrections in normal approximations to discrete counts.

---

# Quick reference for modeling

- Use **binomial** for fixed independent trials with success probability $p$.
- Use **hypergeometric** for sampling without replacement.
- Use **Poisson** for counts of rare events in time or space.
- Use **exponential** for waiting times between Poisson events.
- Use **normal** for sums, averages, and large-sample approximations.
- Use **Bayes' theorem** when information is observed and beliefs must be updated.

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
