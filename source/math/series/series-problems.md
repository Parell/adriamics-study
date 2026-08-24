<!--
id: series-11
note: math-series
title: "Necessary Condition for Convergence"
exam: exam-i
skills: [Necessary condition for convergence]
-->

If the series

$$
\sum_{n=1}^{\infty} a_n
$$

converges, what must

$$
\lim_{n\to\infty} a_n
$$

be?

:::solution
If a series converges, its terms must go to $0$.

So

$$
\lim_{n\to\infty} a_n = 0.
$$

This condition is necessary, but not sufficient.
:::

<!--
id: series-12
note: math-series
title: "Sum a Geometric Series"
exam: exam-i
skills: [Geometric series]
-->

Find the sum of

$$
\sum_{n=0}^{\infty} 6\left(\frac{1}{4}\right)^n.
$$

:::solution
This is a geometric series with first term $a=6$ and ratio $r=\frac14$.

Since $|r|<1$, it converges and

$$
\sum_{n=0}^{\infty} 6\left(\frac{1}{4}\right)^n
= \frac{6}{1-\frac14}
= \frac{6}{\frac34}
= 8.
$$
:::

<!--
id: series-13
note: math-series
title: "Compute a Finite Geometric Sum"
exam: exam-i
skills: [Finite geometric sum]
-->

Compute

$$
\sum_{n=0}^{3} 2\left(\frac12\right)^n.
$$

:::solution
Use the finite geometric sum formula:

$$
\sum_{n=0}^{N-1} ar^n = a\frac{1-r^N}{1-r}.
$$

Here $a=2$, $r=\frac12$, and $N=4$:

$$
\sum_{n=0}^{3} 2\left(\frac12\right)^n
= 2\cdot \frac{1-(\frac12)^4}{1-\frac12}
= 2\cdot \frac{1-\frac1{16}}{\frac12}
= \frac{15}{4}.
$$
:::

<!--
id: series-14
note: math-series
title: "Evaluate a Telescoping Sum"
exam: exam-i
skills: [Telescoping series]
-->

Evaluate

$$
\sum_{n=1}^{\infty}\left(\frac{1}{n}-\frac{1}{n+2}\right).
$$

:::solution
Write out the partial sums:

$$
s_N = \left(1-\frac13\right) + \left(\frac12-\frac14\right) + \cdots + \left(\frac1N-\frac1{N+2}\right).
$$

Most terms cancel, leaving

$$
s_N = 1+\frac12-\frac{1}{N+1}-\frac{1}{N+2}.
$$

Now let $N\to\infty$:

$$
\sum_{n=1}^{\infty}\left(\frac{1}{n}-\frac{1}{n+2}\right)
= 1+\frac12
= \frac32.
$$
:::

<!--
id: series-15
note: math-series
title: "Decide a p-Series"
exam: exam-i
skills: [p-series]
-->

Does

$$
\sum_{n=1}^{\infty}\frac{1}{n^{3/2}}
$$

converge or diverge?

:::solution
This is a $p$-series with

$$
p=\frac32.
$$

Since $p>1$, the series converges.
:::

<!--
id: series-16
note: math-series
title: "Classify an Alternating p-Series"
exam: exam-i
skills: [Alternating series test, Absolute convergence check]
-->

Classify the series

$$
\sum_{n=1}^{\infty}(-1)^{n+1}\frac{1}{\sqrt{n}}
$$

as absolutely convergent, conditionally convergent, or divergent.

:::solution
First check absolute convergence:

$$
\sum_{n=1}^{\infty}\left|(-1)^{n+1}\frac{1}{\sqrt{n}}\right|
= \sum_{n=1}^{\infty}\frac{1}{n^{1/2}}.
$$

This is a $p$-series with $p=\frac12$, so it diverges.

Now apply the alternating series test to

$$
\sum_{n=1}^{\infty}(-1)^{n+1}\frac{1}{\sqrt{n}}.
$$

The terms decrease to $0$, so the series converges.

Therefore, the series is conditionally convergent.
:::

<!--
id: series-17
note: math-series
title: "Spot Divergence from the Terms"
exam: exam-i
skills: [Divergence test]
-->

Does

$$
\sum_{n=1}^{\infty}\frac{2n+1}{n+2}
$$

converge or diverge?

:::solution
Use the divergence test by checking the term limit:

$$
\lim_{n\to\infty}\frac{2n+1}{n+2} = 2.
$$

Since the terms do not go to $0$, the series diverges.
:::

<!--
id: series-18
note: math-series
title: "Compare to a Known Convergent Series"
exam: exam-i
skills: [Comparison test]
-->

Does

$$
\sum_{n=1}^{\infty}\frac{1}{n^2+1}
$$

converge or diverge?

:::solution
For $n\ge 1$,

$$
0<\frac{1}{n^2+1}\le \frac{1}{n^2}.
$$

Since

$$
\sum_{n=1}^{\infty}\frac{1}{n^2}
$$
converges, the comparison test shows that

$$
\sum_{n=1}^{\infty}\frac{1}{n^2+1}
$$

also converges.
:::

<!--
id: series-19
note: math-series
title: "Geometric Series with a Negative Ratio"
exam: exam-i
skills: [Geometric series]
-->

Find the sum of

$$
\sum_{n=0}^{\infty} 5\left(-\frac34\right)^n.
$$

:::solution
This is geometric with first term $a=5$ and ratio $r=-\frac34$.

Since $|r|<1$, it converges and

$$
\sum_{n=0}^{\infty} 5\left(-\frac34\right)^n
= \frac{5}{1-(-\frac34)}
= \frac{5}{\frac74}
= \frac{20}{7}.
$$
:::

<!--
id: series-110
note: math-series
title: "Check Absolute Convergence"
exam: exam-i
skills: [Absolute convergence check]
-->

Determine whether

$$
\sum_{n=1}^{\infty}(-1)^n\frac{1}{n^2}
$$

is absolutely convergent, conditionally convergent, or divergent.

:::solution
Check the absolute series:

$$
\sum_{n=1}^{\infty}\left|(-1)^n\frac{1}{n^2}\right|
= \sum_{n=1}^{\infty}\frac{1}{n^2}.
$$

This is a $p$-series with $p=2$, so it converges.

Therefore, the original series converges absolutely.
:::

<!--
id: series-21
note: math-series
title: "Use Direct Comparison"
exam: exam-ii
skills: [Comparison test]
-->

Determine whether

$$
\sum_{n=1}^{\infty}\frac{1}{n^2+3n}
$$

converges or diverges.

:::solution
For $n\ge 1$,

$$
0<\frac{1}{n^2+3n}\le \frac{1}{n^2}.
$$

Since $\sum \frac{1}{n^2}$ converges, the comparison test gives convergence of the given series.
:::

<!--
id: series-22
note: math-series
title: "Use Limit Comparison"
exam: exam-ii
skills: [Limit comparison test]
-->

Determine whether

$$
\sum_{n=1}^{\infty}\frac{4n+1}{n^2+n}
$$

converges or diverges.

:::solution
Compare with

$$
b_n=\frac1n.
$$

Then

$$
\lim_{n\to\infty}\frac{\frac{4n+1}{n^2+n}}{\frac1n}
= \lim_{n\to\infty}\frac{4n^2+n}{n^2+n}
= 4.
$$

Because the limit is a positive finite number, the two series behave the same way.

Since

$$
\sum_{n=1}^{\infty}\frac1n
$$

diverges, the given series also diverges.
:::

<!--
id: series-23
note: math-series
title: "Apply the Integral Test"
exam: exam-ii
skills: [Advanced convergence test: integral test]
-->

Determine whether

$$
\sum_{n=1}^{\infty}\frac{1}{n^2+4}
$$

converges or diverges using the integral test.

:::solution
Let

$$
f(x)=\frac{1}{x^2+4}.
$$

For $x\ge 1$, this function is positive, continuous, and decreasing, so the integral test applies.

Compute the improper integral:

$$
\int_1^{\infty}\frac{1}{x^2+4}\,dx
= \frac12\int_1^{\infty}\frac{1}{(x/2)^2+1}\,dx
= \frac12\left[\arctan\!\left(\frac{x}{2}\right)\right]_1^{\infty}.
$$

This is finite, so the series converges.
:::

<!--
id: series-24
note: math-series
title: "Apply the Ratio Test"
exam: exam-ii
skills: [Ratio test]
-->

Determine whether

$$
\sum_{n=0}^{\infty}\frac{n!}{3^n}
$$

converges or diverges.

:::solution
Let

$$
a_n=\frac{n!}{3^n}.
$$

Then

$$
\left|\frac{a_{n+1}}{a_n}\right|
= \frac{(n+1)!}{3^{n+1}}\cdot \frac{3^n}{n!}
= \frac{n+1}{3}.
$$

As $n\to\infty$,

$$
\frac{n+1}{3}\to\infty.
$$

So the ratio test gives divergence.
:::

<!--
id: series-25
note: math-series
title: "Apply the Root Test"
exam: exam-ii
skills: [Root test]
-->

Determine whether

$$
\sum_{n=1}^{\infty}\left(\frac{2n}{3n+1}\right)^n
$$

converges or diverges.

:::solution
Use the root test:

$$
L=\lim_{n\to\infty}\sqrt[n]{\left|\left(\frac{2n}{3n+1}\right)^n\right|}
= \lim_{n\to\infty}\frac{2n}{3n+1}
= \frac23.
$$

Since $L<1$, the series converges absolutely.
:::

<!--
id: series-26
note: math-series
title: "Find an Interval of Convergence"
exam: exam-ii
skills: [Power series, Radius and interval of convergence]
-->

Find the interval of convergence of

$$
\sum_{n=1}^{\infty}\frac{(x-2)^n}{n4^n}.
$$

:::solution
Apply the ratio test to the general term

$$
a_n=\frac{(x-2)^n}{n4^n}.
$$

Then

$$
\left|\frac{a_{n+1}}{a_n}\right|
= \left|\frac{x-2}{4}\right|\cdot \frac{n}{n+1}.
$$

The limit is

$$
\left|\frac{x-2}{4}\right|.
$$

So the series converges when

$$
\left|\frac{x-2}{4}\right|<1,
$$

which gives

$$
-2<x<6.
$$

Check the endpoints:

At $x=6$,

$$
\sum_{n=1}^{\infty}\frac{1}{n}
$$

diverges.

At $x=-2$,

$$
\sum_{n=1}^{\infty}\frac{(-1)^n}{n}
$$

converges conditionally by the alternating series test.

Therefore the interval of convergence is

$$
[-2,6).
$$
:::

<!--
id: series-27
note: math-series
title: "Differentiate a Power Series"
exam: exam-ii
skills: [Termwise differentiation, Advanced: termwise integration, Power series]
-->

For $|x|<1$, find a power series for

$$
\frac{x}{(1-x)^2}.
$$

:::solution
Start with the geometric series:

$$
\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n,\quad |x|<1.
$$

Differentiate term by term:

$$
\frac{1}{(1-x)^2}=\sum_{n=1}^{\infty} n x^{n-1}.
$$

Multiply both sides by $x$:

$$
\frac{x}{(1-x)^2}=\sum_{n=1}^{\infty} n x^n,\quad |x|<1.
$$
:::

<!--
id: series-28
note: math-series
title: "Expand a Rational Function by Substitution"
exam: exam-ii
skills: [Geometric series, Power series]
-->

For $|x|<1$, write

$$
\frac{1}{1-x^2}
$$

as a power series.

:::solution
Start with the geometric series

$$
\frac{1}{1-u}=\sum_{n=0}^{\infty}u^n,\quad |u|<1.
$$

Substitute $u=x^2$:

$$
\frac{1}{1-x^2}=\sum_{n=0}^{\infty}x^{2n}.
$$

This is valid when

$$
|x^2|<1,
$$

so the interval of convergence is

$$
|x|<1.
$$
:::

<!--
id: series-31
note: math-series
title: "Reindex a Series"
exam: final
skills: [Index shifting]
-->

Rewrite

$$
\sum_{n=2}^{\infty}\frac{1}{(n-1)^2}
$$

in standard form, and decide whether it converges.

:::solution
Let $k=n-1$. Then when $n=2$, $k=1$, and the series becomes

$$
\sum_{k=1}^{\infty}\frac{1}{k^2}.
$$

This is a $p$-series with $p=2$, so it converges.
:::

<!--
id: series-32
note: math-series
title: "Choose the Right Comparison"
exam: final
skills: [Limit comparison test]
-->

Determine whether

$$
\sum_{n=1}^{\infty}\frac{n^2}{n^3+5}
$$

converges or diverges.

:::solution
Compare with

$$
b_n=\frac1n.
$$

Compute

$$
\lim_{n\to\infty}\frac{\frac{n^2}{n^3+5}}{\frac1n}
= \lim_{n\to\infty}\frac{n^3}{n^3+5}
= 1.
$$

So the series behaves like $\sum \frac1n$.

Because the harmonic series diverges, the given series diverges as well.
:::

<!--
id: series-33
note: math-series
title: "Evaluate a Telescoping Series"
exam: final
skills: [Telescoping series]
-->

Evaluate

$$
\sum_{n=1}^{\infty}\frac{1}{n(n+1)}.
$$

:::solution
Use partial fractions:

$$
\frac{1}{n(n+1)}=\frac{1}{n}-\frac{1}{n+1}.
$$

So the partial sums telescope:

$$
s_N=\left(1-\frac12\right)+\left(\frac12-\frac13\right)+\cdots+\left(\frac1N-\frac{1}{N+1}\right).
$$

Everything cancels except the first and last pieces:

$$
s_N=1-\frac{1}{N+1}.
$$

Taking the limit gives

$$
\sum_{n=1}^{\infty}\frac{1}{n(n+1)}=1.
$$
:::

<!--
id: series-34
note: math-series
title: "Build a Logarithm Series"
exam: final
skills: [Geometric series, Integration]
-->

Use the geometric series to write the Maclaurin series for

$$
-\ln(1-x).
$$

State the interval where the series converges.

:::solution
Start with

$$
\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n,\quad |x|<1.
$$

Integrate both sides term by term:

$$
\int \frac{1}{1-x}\,dx = \int \sum_{n=0}^{\infty}x^n\,dx.
$$

This gives

$$
-\ln(1-x)=\sum_{n=1}^{\infty}\frac{x^n}{n},\quad |x|<1.
$$

The first four nonzero terms are

$$
x+\frac{x^2}{2}+\frac{x^3}{3}+\frac{x^4}{4}.
$$
:::

<!--
id: series-35
note: math-series
title: "Use a Power Series to Sum a Series"
exam: final
skills: [Termwise differentiation, Advanced: termwise integration, Power series]
-->

Evaluate

$$
\sum_{n=1}^{\infty}\frac{n}{2^n}.
$$

:::solution
Differentiate the geometric series:

$$
\sum_{n=0}^{\infty}x^n=\frac{1}{1-x},\quad |x|<1
$$

so

$$
\sum_{n=1}^{\infty}n x^{n-1}=\frac{1}{(1-x)^2}.
$$

Now set $x=\frac12$:

$$
\sum_{n=1}^{\infty}n\left(\frac12\right)^{n-1}
= \frac{1}{(1-\frac12)^2}
= 4.
$$

Multiply both sides by $\frac12$:

$$
\sum_{n=1}^{\infty}\frac{n}{2^n}=2.
$$
:::

<!--
id: series-41
note: math-series
title: "Approximate with a Taylor Polynomial"
exam: final
skills: [Taylor and Maclaurin series, Error thinking]
-->

Use the Maclaurin series for $\sin x$ to approximate $\sin(0.2)$ with the first two nonzero terms.

:::solution
The Maclaurin series for sine is

$$
\sin x = x - \frac{x^3}{3!} + \cdots
$$

Use the first two nonzero terms:

$$
\sin(0.2)\approx 0.2-\frac{(0.2)^3}{6}.
$$

Since

$$
0.2^3=0.008,
$$

we get

$$
\sin(0.2)\approx 0.2-\frac{0.008}{6}
= 0.198666\ldots
= \frac{149}{750}.
$$

The next omitted term is very small, so this is a good local approximation.
:::

<!--
id: series-42
note: math-series
title: "Find a Binomial Coefficient"
exam: final
skills: [Binomial-type expansion]
-->

In the expansion of

$$
(1+x)^{1/2},
$$

what is the coefficient of $x^3$?

:::solution
Use the binomial-type expansion:

$$
(1+x)^\alpha = \sum_{n=0}^{\infty}\binom{\alpha}{n}x^n.
$$

For $\alpha=\frac12$, the coefficient of $x^3$ is

$$
\binom{1/2}{3}
= \frac{\left(\frac12\right)\left(-\frac12\right)\left(-\frac32\right)}{3!}
= \frac{1}{16}.
$$
:::

<!--
id: series-43
note: math-series
title: "Match Coefficients"
exam: final
skills: [Matching coefficients]
-->

Suppose

$$
f(x)=\sum_{n=0}^{\infty}a_n x^n
$$

and

$$
(1-x)f(x)=1+x.
$$

Find the coefficients $a_n$.

:::solution
Expand the left-hand side:

$$
(1-x)\sum_{n=0}^{\infty}a_n x^n
= \sum_{n=0}^{\infty}a_n x^n - \sum_{n=0}^{\infty}a_n x^{n+1}.
$$

Reindex the second sum:

$$
\sum_{n=0}^{\infty}a_n x^n - \sum_{n=1}^{\infty}a_{n-1}x^n.
$$

So

$$
(1-x)f(x)=a_0+\sum_{n=1}^{\infty}(a_n-a_{n-1})x^n.
$$

Match coefficients with

$$
1+x.
$$

This gives

$$
a_0=1,
$$

$$
a_1-a_0=1,
$$

and for $n\ge 2$,

$$
a_n-a_{n-1}=0.
$$

So

$$
a_1=2
$$

and

$$
a_n=2 \quad \text{for all } n\ge 1.
$$
:::

<!--
id: series-44
note: math-series
title: "Classify a Mixed-Sign Series"
exam: final
skills: [Alternating series test, Absolute convergence check]
-->

Classify

$$
\sum_{n=1}^{\infty}(-1)^{n+1}\frac{n}{n^2+1}
$$

as absolutely convergent, conditionally convergent, or divergent.

:::solution
First check absolute convergence:

$$
\sum_{n=1}^{\infty}\left|(-1)^{n+1}\frac{n}{n^2+1}\right|
= \sum_{n=1}^{\infty}\frac{n}{n^2+1}.
$$

Since

$$
\frac{n}{n^2+1}\sim \frac1n,
$$

this absolute series diverges.

Now check the alternating series test. Let

$$
b_n=\frac{n}{n^2+1}.
$$

Then $b_n\to 0$, and $b_n$ is decreasing for $n\ge 1$ because the function

$$
f(x)=\frac{x}{x^2+1}
$$

has derivative

$$
f'(x)=\frac{1-x^2}{(x^2+1)^2}\le 0
$$

for $x\ge 1$.

So the alternating series converges, but not absolutely.

Therefore, it is conditionally convergent.
:::

<!--
id: series-advanced-11
note: math-series
title: "Find a Radius of Convergence"
exam: exam-i
skills: [Power series, Ratio test]
-->

Find the radius of convergence of

$$
\sum_{n=0}^{\infty}\frac{(x-2)^n}{3^n(n+1)}.
$$

:::solution
The ratio test gives $|x-2|/3$, so convergence requires $|x-2|<3$. The radius is $R=3$; test the endpoints separately.
:::

<!--
id: series-advanced-12
note: math-series
title: "Test Power-Series Endpoints"
exam: exam-i
skills: [Endpoint testing, Alternating series]
-->

For the previous series, test the endpoints.

:::solution
At $x=5$, the terms become $1/(n+1)$ and diverge. At $x=-1$, they become $(-1)^n/(n+1)$ and converge by the alternating series test. The interval is $[-1,5)$.
:::

<!--
id: series-advanced-13
note: math-series
title: "Write a Taylor Polynomial"
exam: exam-i
skills: [Taylor polynomial, Derivatives]
-->

Find the degree-two Taylor polynomial for $f(x)=\ln x$ centered at $a=1$.

:::solution
Since $f(1)=0$, $f'(1)=1$, and $f''(1)=-1$,

$$
P_2(x)=(x-1)-\frac12(x-1)^2.
$$
:::

<!--
id: series-advanced-14
note: math-series
title: "Use a Taylor Approximation"
exam: exam-i
skills: [Taylor approximation, Error reasoning]
-->

Use $1+x+x^2/2$ to approximate $e^{0.2}$ and state the next-term estimate.

:::solution
The approximation is $1+0.2+0.2^2/2=1.22$. The next term is $0.2^3/6\approx0.00133$, which is a rough local error scale, not an unconditional bound.
:::

<!--
id: series-advanced-15
note: math-series
title: "Derive a Logarithm Series"
exam: exam-i
skills: [Termwise integration, Geometric series]
-->

Starting with $1/(1-x)=\sum_{n=0}^{\infty}x^n$, derive a series for $\ln(1+x)$.

:::solution
Replace $x$ by $-x$ and integrate term by term:

$$
\ln(1+x)=\sum_{n=1}^{\infty}(-1)^{n+1}\frac{x^n}{n},\quad |x|<1.
$$
:::

<!--
id: series-advanced-16
note: math-series
title: "Match Power-Series Coefficients"
exam: exam-i
skills: [Coefficient matching, Power series]
-->

If $\sum_{n=0}^{\infty}a_nx^n=e^x$, find $a_0$, $a_1$, and $a_2$.

:::solution
Comparing with $e^x=1+x+x^2/2!+\cdots$ gives $a_0=1$, $a_1=1$, and $a_2=1/2$.
:::

<!--
id: series-advanced-17
note: math-series
title: "Identify Conditional Convergence"
exam: exam-i
skills: [Absolute convergence, Conditional convergence]
-->

Classify $\sum_{n=1}^{\infty}(-1)^{n+1}/n$.

:::solution
It converges by the alternating series test, but its absolute series is harmonic and diverges. The convergence is conditional.
:::

<!--
id: series-advanced-18
note: math-series
title: "Interpret a Fourier Preview"
exam: exam-i
skills: [Fourier series, Modeling assumptions]
-->

What does the coefficient multiplying $\cos(nx)$ represent qualitatively?

:::solution
It measures the contribution of the cosine mode with frequency $n$ to the periodic signal. It is an amplitude determined by the function and interval, not itself a frequency or probability.
:::

