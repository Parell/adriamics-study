<!--
id: probability-11
note: math-probability
title: "Count a Simple Sample Space"
exam: exam-i
skills: [Sample Spaces, Equally Likely Outcomes]
-->

A fair coin is flipped twice. What is the probability of getting exactly one head?

:::solution
The sample space is

$$
\{HH, HT, TH, TT\}
$$

There are 4 equally likely outcomes, and 2 of them have exactly one head: $HT$ and $TH$.

So

$$
P(\text{exactly one head}) = \frac{2}{4} = \frac{1}{2}
$$
:::

<!--
id: probability-12
note: math-probability
title: "Choose a Committee"
exam: exam-i
skills: [Combinations, Counting Methods]
-->

How many ways can you choose 3 students from a group of 8?

:::solution
Use combinations because the order does not matter:

$$
{8 \choose 3} = \frac{8!}{3!5!} = \frac{8 \cdot 7 \cdot 6}{3 \cdot 2 \cdot 1} = 56
$$
:::

<!--
id: probability-13
note: math-probability
title: "Arrange Runners"
exam: exam-i
skills: [Permutations, Counting Methods]
-->

How many ordered outcomes are there for the gold, silver, and bronze places among 7 runners?

:::solution
Use permutations because order matters:

$$
{}_7P_3 = \frac{7!}{(7-3)!} = 7 \cdot 6 \cdot 5 = 210
$$
:::

<!--
id: probability-14
note: math-probability
title: "Count Distinct Arrangements"
exam: exam-i
skills: [Repeated Objects, Counting Methods]
-->

How many distinct arrangements of the letters in BOOK are there?

:::solution
The word BOOK has 4 letters, with O repeated twice. The number of distinct arrangements is

$$
\frac{4!}{2!} = 12
$$
:::

<!--
id: probability-15
note: math-probability
title: "Use the Complement Rule"
exam: exam-i
skills: [Complement Rule]
-->

A fair die is rolled 3 times. What is the probability of getting at least one 6?

:::solution
It is easier to compute the complement: no 6s on all 3 rolls.

$$
P(\text{at least one 6}) = 1 - \left(\frac{5}{6}\right)^3
$$

So

$$
1 - \frac{125}{216} = \frac{91}{216}
$$
:::

<!--
id: probability-16
note: math-probability
title: "Apply the Addition Rule"
exam: exam-i
skills: [Addition Rule, Events]
-->

Suppose

$$
P(A)=0.42,\quad P(B)=0.31,\quad P(A \cap B)=0.08.
$$

Find $P(A \cup B)$.

:::solution
Use the addition rule:

$$
P(A \cup B)=P(A)+P(B)-P(A \cap B)
$$

Substitute the given values:

$$
P(A \cup B)=0.42+0.31-0.08=0.65
$$
:::

<!--
id: probability-17
note: math-probability
title: "Find a Conditional Probability"
exam: exam-i
skills: [Conditional Probability]
-->

Suppose

$$
P(A \cap B)=0.12 \quad \text{and} \quad P(B)=0.3.
$$

Find $P(A \mid B)$.

:::solution
Use the definition of conditional probability:

$$
P(A \mid B)=\frac{P(A \cap B)}{P(B)}
$$

So

$$
P(A \mid B)=\frac{0.12}{0.3}=0.4
$$
:::

<!--
id: probability-18
note: math-probability
title: "Evaluate a Bernoulli Mean and Variance"
exam: exam-i
skills: [Bernoulli Distribution, Expectation, Variance]
-->

If $X \sim \mathrm{Bernoulli}(0.7)$, find $E[X]$ and $\mathrm{Var}(X)$.

:::solution
For a Bernoulli random variable,

$$
E[X]=p \quad \text{and} \quad \mathrm{Var}(X)=p(1-p)
$$

Here $p=0.7$, so

$$
E[X]=0.7
$$

and

$$
\mathrm{Var}(X)=0.7(0.3)=0.21
$$
:::

<!--
id: probability-19
note: math-probability
title: "Compute a Binomial Probability"
exam: exam-i
skills: [Binomial Distribution]
-->

If $X \sim \mathrm{Binomial}(5,0.2)$, find $P(X=2)$.

:::solution
Use the binomial formula:

$$
P(X=2)={5 \choose 2}(0.2)^2(0.8)^3
$$

Now compute:

$$
{5 \choose 2}=10
$$

So

$$
P(X=2)=10(0.04)(0.512)=0.2048
$$
:::

<!--
id: probability-110
note: math-probability
title: "Standardize a Normal Random Variable"
exam: exam-i
skills: [Normal Distribution, Standardization]
-->

If $X \sim \mathcal{N}(100,15^2)$, what is the $z$-score for $x=130$?

:::solution
Standardize using

$$
z=\frac{x-\mu}{\sigma}
$$

Here $\mu=100$ and $\sigma=15$, so

$$
z=\frac{130-100}{15}=\frac{30}{15}=2
$$
:::

<!--
id: probability-21
note: math-probability
title: "Count Draws Without Replacement"
exam: exam-ii
skills: [Hypergeometric Distribution, Sampling Without Replacement]
-->

A box contains 6 good parts and 4 defective parts. Two parts are drawn without replacement. What is the probability that exactly 1 part is defective?

:::solution
Use the hypergeometric model:

$$
P(X=1)=\frac{{4 \choose 1}{6 \choose 1}}{{10 \choose 2}}
$$

Compute the values:

$$
\frac{4 \cdot 6}{45}=\frac{24}{45}=\frac{8}{15}
$$
:::

<!--
id: probability-22
note: math-probability
title: "Update a Belief with Bayes' Theorem"
exam: exam-ii
skills: [Bayes Theorem, Conditional Probability]
-->

A disease affects 2% of a population. A test is 95% accurate for people who have the disease, and it gives a false positive 10% of the time for people who do not have the disease. If a person tests positive, what is the probability that the person actually has the disease?

:::solution
Let $D$ be the event that the person has the disease and $+$ be the event of a positive test.

By Bayes' theorem,

$$
P(D \mid +)=\frac{P(+ \mid D)P(D)}{P(+)}
$$

First find the total probability of a positive test:

$$
P(+)=P(+ \mid D)P(D)+P(+ \mid D^c)P(D^c)
$$

$$
P(+)=0.95(0.02)+0.10(0.98)=0.019+0.098=0.117
$$

Now compute the posterior:

$$
P(D \mid +)=\frac{0.95(0.02)}{0.117}=\frac{0.019}{0.117}=\frac{19}{117}
$$

So the probability is about $0.162$.
:::

<!--
id: probability-23
note: math-probability
title: "Use the Geometric Memoryless Property"
exam: exam-ii
skills: [Geometric Distribution, Memoryless Property]
-->

If $X \sim \mathrm{Geometric}(0.25)$, find $P(X>7 \mid X>3)$.

:::solution
Use the memoryless property:

$$
P(X>m+n \mid X>m)=P(X>n)
$$

Here we want

$$
P(X>7 \mid X>3)=P(X>4)
$$

For a geometric random variable with success probability $0.25$,

$$
P(X>4)=(1-0.25)^4=\left(\frac{3}{4}\right)^4=\frac{81}{256}
$$

So the probability is about $0.316$.
:::

<!--
id: probability-24
note: math-probability
title: "Solve a Negative Binomial Count"
exam: exam-ii
skills: [Negative Binomial Distribution]
-->

A basketball player makes each free throw with probability $0.6$, independently. What is the probability that the third make occurs on the fifth attempt?

:::solution
This is a negative binomial situation with $r=3$ and $k=5$.

$$
P(X=5)={5-1 \choose 3-1}(0.6)^3(0.4)^{5-3}
$$

So

$$
P(X=5)={4 \choose 2}(0.6)^3(0.4)^2
$$

$$
=6(0.216)(0.16)=0.20736
$$
:::

<!--
id: probability-25
note: math-probability
title: "Compute a Poisson Count Probability"
exam: exam-ii
skills: [Poisson Distribution]
-->

A support line receives 4 calls per hour on average. What is the probability of exactly 2 calls in a half hour?

:::solution
In half an hour, the mean count is

$$
\lambda=4 \cdot \frac{1}{2}=2
$$

Use the Poisson formula:

$$
P(X=2)=e^{-2}\frac{2^2}{2!}
$$

So

$$
P(X=2)=2e^{-2}
$$

which is about $0.271$.
:::

<!--
id: probability-26
note: math-probability
title: "Compute an Exponential Waiting-Time Probability"
exam: exam-ii
skills: [Exponential Distribution]
-->

The waiting time to the next event has an exponential distribution with rate 3 per hour. What is the probability of waiting more than 20 minutes?

:::solution
Convert 20 minutes to hours:

$$
20 \text{ min}=\frac{1}{3} \text{ hour}
$$

For an exponential random variable,

$$
P(X>t)=e^{-\lambda t}
$$

So

$$
P\left(X>\frac{1}{3}\right)=e^{-3(1/3)}=e^{-1}
$$

This is about $0.368$.
:::

<!--
id: probability-27
note: math-probability
title: "Use Inclusion-Exclusion for Three Events"
exam: exam-ii
skills: [Inclusion-Exclusion]
-->

Suppose

$$
P(A)=0.5,\quad P(B)=0.4,\quad P(C)=0.3
$$

and

$$
P(A \cap B)=0.2,\quad P(A \cap C)=0.1,\quad P(B \cap C)=0.08,\quad P(A \cap B \cap C)=0.05.
$$

Find $P(A \cup B \cup C)$.

:::solution
Use inclusion-exclusion:

$$
P(A \cup B \cup C)
=P(A)+P(B)+P(C)-P(A \cap B)-P(A \cap C)-P(B \cap C)+P(A \cap B \cap C)
$$

Substitute the values:

$$
0.5+0.4+0.3-0.2-0.1-0.08+0.05=0.87
$$
:::

<!--
id: probability-28
note: math-probability
title: "Check Independence from a Joint Table"
exam: exam-ii
skills: [Joint Distribution, Marginal Distributions, Independence]
-->

A joint pmf is given by

$$
\begin{array}{c|cc}
 & Y=0 & Y=1 \\
\hline
X=0 & 0.12 & 0.18 \\
X=1 & 0.28 & 0.42
\end{array}
$$

Find the marginal distributions of $X$ and $Y$, and determine whether $X$ and $Y$ are independent.

:::solution
First find the marginals by summing rows and columns.

For $X$:

$$
P(X=0)=0.12+0.18=0.30
$$

$$
P(X=1)=0.28+0.42=0.70
$$

For $Y$:

$$
P(Y=0)=0.12+0.28=0.40
$$

$$
P(Y=1)=0.18+0.42=0.60
$$

Check one joint probability:

$$
P(X=0)P(Y=0)=0.30(0.40)=0.12
$$

The same factorization works for the other entries as well, so the joint distribution factors into the product of the marginals.

Therefore, $X$ and $Y$ are independent.
:::

<!--
id: probability-31
note: math-probability
title: "Find an Expected Value from a Discrete Distribution"
exam: final
skills: [Expectation, Functions of Random Variables]
-->

Let $X$ take the values $1$, $2$, and $4$ with probabilities $0.2$, $0.5$, and $0.3$, respectively. If the payoff is $X^2$, what is the expected payoff?

:::solution
Use the formula for the expected value of a function of $X$:

$$
E[X^2]=\sum_x x^2 P(X=x)
$$

So

$$
E[X^2]=1^2(0.2)+2^2(0.5)+4^2(0.3)
$$

$$
=0.2+2+4.8=7
$$

The expected payoff is $7$.
:::

<!--
id: probability-32
note: math-probability
title: "Model an Expected Count with Indicators"
exam: final
skills: [Indicator Variables, Linearity of Expectation]
-->

A fair die is rolled 5 times. Let $X$ be the number of adjacent pairs that match. Find $E[X]$.

:::solution
There are 4 adjacent pairs: $(1,2)$, $(2,3)$, $(3,4)$, and $(4,5)$.

Let $I_i$ be the indicator for the event that the $i$th pair matches. Then

$$
X=I_1+I_2+I_3+I_4
$$

Each pair matches with probability $1/6$, so

$$
E[I_i]=\frac{1}{6}
$$

By linearity of expectation,

$$
E[X]=4\cdot \frac{1}{6}=\frac{2}{3}
$$
:::

<!--
id: probability-33
note: math-probability
title: "Model a Sampling Situation"
exam: final
skills: [Hypergeometric Distribution, Sampling Without Replacement]
-->

A box has 8 good components and 4 defective components. Three components are drawn without replacement. What is the probability that at least one component is defective?

:::solution
Use the complement event: no defective components are drawn.

There are 8 good components, so

$$
P(\text{no defective})=\frac{{8 \choose 3}}{{12 \choose 3}}
$$

Thus

$$
P(\text{at least one defective})=1-\frac{{8 \choose 3}}{{12 \choose 3}}
$$

Compute the combinations:

$$
1-\frac{56}{220}=1-\frac{14}{55}=\frac{41}{55}
$$
:::

<!--
id: probability-34
note: math-probability
title: "Waiting Time to the Third Event"
exam: final
skills: [Gamma Distribution, Poisson Process]
-->

Calls arrive at a rate of 2 per hour. Under the gamma model, what is the mean waiting time until the third call?

:::solution
The waiting time to the third event is modeled by a gamma distribution with shape $3$ and rate $2$.

For $X \sim \mathrm{Gamma}(\alpha,\lambda)$,

$$
E[X]=\frac{\alpha}{\lambda}
$$

So here

$$
E[X]=\frac{3}{2}
$$

The mean waiting time is $1.5$ hours.
:::

<!--
id: probability-35
note: math-probability
title: "Infer a Beta Model for a Proportion"
exam: final
skills: [Beta Distribution, Proportions]
-->

A parameter $p$ represents a conversion rate, so it must stay between 0 and 1. Which distribution from the note is a natural choice for modeling $p$?

:::solution
The beta distribution is defined on the interval $[0,1]$, so it is a natural model for probabilities and proportions.

Therefore, the appropriate choice is the beta distribution.
:::

<!--
id: probability-41
note: math-probability
title: "Combine Total Probability and Bayes"
exam: final
skills: [Law of Total Probability, Bayes Theorem]
-->

Machine A makes 60% of the items and has a defect rate of 1%. Machine B makes the other 40% and has a defect rate of 4%. If an item is defective, what is the probability that it came from Machine A?

:::solution
Let $A$ be the event that the item came from Machine A and let $D$ be the event that the item is defective.

First use the law of total probability:

$$
P(D)=P(D \mid A)P(A)+P(D \mid B)P(B)
$$

$$
P(D)=0.01(0.6)+0.04(0.4)=0.006+0.016=0.022
$$

Now apply Bayes' theorem:

$$
P(A \mid D)=\frac{P(D \mid A)P(A)}{P(D)}
$$

$$
P(A \mid D)=\frac{0.01(0.6)}{0.022}=\frac{0.006}{0.022}=\frac{3}{11}
$$

So the probability is about $0.273$.
:::

<!--
id: probability-42
note: math-probability
title: "Approximate a Binomial Count with a Normal Model"
exam: final
skills: [Normal Approximation, Binomial Distribution, Continuity Correction]
-->

If $X \sim \mathrm{Binomial}(100,0.2)$, approximate $P(16 \le X \le 24)$ using a normal model.

:::solution
For a binomial random variable,

$$
\mu=np=100(0.2)=20
$$

and

$$
\sigma=\sqrt{np(1-p)}=\sqrt{100(0.2)(0.8)}=\sqrt{16}=4
$$

Use the continuity correction:

$$
P(16 \le X \le 24) \approx P(15.5 \le Y \le 24.5)
$$

where $Y \sim \mathcal{N}(20,16)$.

Standardize:

$$
z_1=\frac{15.5-20}{4}=-1.125
$$

$$
z_2=\frac{24.5-20}{4}=1.125
$$

So

$$
P(16 \le X \le 24) \approx P(-1.125 \le Z \le 1.125) \approx 0.739
$$
:::

<!--
id: probability-43
note: math-probability
title: "Compare Sample Sizes with Standard Error"
exam: final
skills: [Law of Large Numbers, Standard Error]
-->

A population has mean 50 and standard deviation 12. Compare the standard error of the sample mean for samples of size 36 and 144. Which sample mean should be more stable?

:::solution
The standard error of the sample mean is

$$
\sigma_{\bar X}=\frac{\sigma}{\sqrt{n}}
$$

For $n=36$:

$$
\sigma_{\bar X}=\frac{12}{\sqrt{36}}=\frac{12}{6}=2
$$

For $n=144$:

$$
\sigma_{\bar X}=\frac{12}{\sqrt{144}}=\frac{12}{12}=1
$$

The sample mean from 144 observations has the smaller standard error, so it should be more stable and closer to the true mean. That is the kind of behavior predicted by the law of large numbers.
:::

<!--
id: probability-44
note: math-probability
title: "Use the Union Bound"
exam: final
skills: [Union Bound, Events]
-->

Three independent backup checks have failure probabilities 0.03, 0.05, and 0.02. Give an upper bound on the probability that at least one check fails.

:::solution
Use the union bound:

$$
P(A_1 \cup A_2 \cup A_3) \le P(A_1)+P(A_2)+P(A_3)
$$

So

$$
P(\text{at least one fails}) \le 0.03+0.05+0.02=0.10
$$

The upper bound is $0.10$.
:::
