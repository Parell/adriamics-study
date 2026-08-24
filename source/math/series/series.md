# Sequences, series, and convergence

A **series** is the sum of the terms of a sequence.

If $(a_n)$ is a sequence, the associated infinite series is

$$
\sum_{n=1}^{\infty} a_n
$$

More generally, any expression of the form

$$
\sum_{n=N}^{\infty} a_n
$$

is a series. The important question is not just what the terms are, but whether the partial sums approach a finite limit.

## Partial sums

The $n$th partial sum is

$$
s_n = \sum_{k=1}^{n} a_k
$$

The series converges if the sequence of partial sums converges:

$$
\sum_{n=1}^{\infty} a_n = S
\quad \Longleftrightarrow \quad
s_n \to S
$$

If the partial sums do not approach a finite limit, the series diverges.
## Why series matter

Series are used to:

- Approximate functions
- Model repeated accumulation
- Analyze signals, errors, and differential equations
- Build numerical methods
- Represent functions with polynomials

---

# Core vocabulary

## Convergent and divergent

- A series is **convergent** if its partial sums approach a finite value.
- A series is **divergent** if it does not.

## Necessary condition for convergence

If

$$
\sum a_n
$$

converges, then

$$
\lim_{n\to\infty} a_n = 0
$$

This condition is necessary but not sufficient.

For example,

$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$

diverges even though the terms go to $0$.

## Absolute and conditional convergence

A series $\sum a_n$ is:

- **Absolutely convergent** if $\sum |a_n|$ converges
- **Conditionally convergent** if $\sum a_n$ converges but $\sum |a_n|$ diverges

Absolute convergence is stronger and easier to work with. If a series converges absolutely, it converges.

## Rearrangement warning

For absolutely convergent series, rearranging terms does not change the sum.

For conditionally convergent series, rearranging terms can change the sum. This is one reason absolute convergence is preferred when possible.

---

# Geometric and telescoping series

## Geometric series

The standard geometric series is

$$
\sum_{n=0}^{\infty} ar^n
$$

It converges when

$$
|r| < 1
$$

and its sum is

$$
\sum_{n=0}^{\infty} ar^n = \frac{a}{1-r}
$$

If the index starts at $n=1$, adjust the first term accordingly.

### Finite geometric sum

For $N \ge 1$,

$$
\sum_{n=0}^{N-1} ar^n = a\frac{1-r^N}{1-r}, \quad r \ne 1
$$

## Telescoping series

A telescoping series is one where successive terms cancel after rewriting.

Example:

$$
\sum_{n=1}^{\infty} \left(\frac{1}{n} - \frac{1}{n+1}\right)
$$

The partial sums are

$$
s_N = 1 - \frac{1}{N+1}
$$

so the series converges to $1$.

### Strategy for telescoping

1. Rewrite the term using partial fractions or algebra.
2. Expand the first few partial sums.
3. Identify cancellation.
4. Take the limit of the remaining terms.

---

# Convergence tests

No single test works best in every case. Choose the test that matches the structure of the series.

## Divergence test

If

$$
\lim_{n\to\infty} a_n \ne 0
$$

or the limit does not exist, then

$$
\sum a_n
$$

diverges.

If the limit is $0$, the test is inconclusive.

## $p$-series

The $p$-series

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

converges if and only if

$$
p > 1
$$

and diverges for $p \le 1$.

## Comparison test

For series with nonnegative terms, compare to a known benchmark series.

If $0 \le a_n \le b_n$ and $\sum b_n$ converges, then $\sum a_n$ converges.

If $0 \le b_n \le a_n$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.

Use this when the terms look like a familiar rational or root expression.

## Limit comparison test

If $a_n, b_n > 0$ and

$$
\lim_{n\to\infty}\frac{a_n}{b_n} = c
$$

with $0 < c < \infty$, then $\sum a_n$ and $\sum b_n$ behave the same way.

This is useful when the terms have the same dominant growth rate.

## Advanced convergence test: integral test

The integral test is an optional bridge to Integrals, not a prerequisite for the core convergence layer.

If $a_n = f(n)$ where $f$ is positive, continuous, and decreasing on $[N,\infty)$, then

$$
\sum_{n=N}^{\infty} a_n
$$

and

$$
\int_N^{\infty} f(x)\,dx
$$

either both converge or both diverge.

This is especially useful for $p$-series-like terms and logarithmic modifications.

## Ratio test

For a series $\sum a_n$, consider

$$
L = \lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
$$

- If $L < 1$, the series converges absolutely.
- If $L > 1$ or $L = \infty$, the series diverges.
- If $L = 1$, the test is inconclusive.

Use this when factorials, exponentials, or powers of $n$ are present.

## Root test

Consider

$$
L = \lim_{n\to\infty}\sqrt[n]{|a_n|}
$$

with the same conclusions as the ratio test.

Use this when the $n$th power is built into the term.

## Alternating series test

For

$$
\sum (-1)^n b_n
\quad \text{or} \quad
\sum (-1)^{n+1} b_n
$$

if:

1. $b_n \ge 0$
2. $b_n$ is eventually decreasing
3. $b_n \to 0$

then the series converges.

This test does not guarantee absolute convergence.

## Absolute convergence check

If a series alternates or has mixed signs, first test

$$
\sum |a_n|
$$

If the absolute series converges, the original series converges absolutely.

---

## What this enables

Series provides the sequence, convergence, power-series, Taylor-series, and Fourier-series foundation needed for numerical methods and differential equations.

---

# Power, Taylor, and Fourier series

Power and Taylor series extend the convergence ideas above. They assume the derivatives needed to construct Taylor expansions.

## Power series

A power series centered at $c$ has the form

$$
\sum_{n=0}^{\infty}a_n(x-c)^n.
$$

It converges absolutely for $|x-c|<R$, diverges for $|x-c|>R$, and requires separate endpoint tests at $x=c\pm R$. The number $R$ is the radius of convergence. The ratio test is usually applied by computing

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}(x-c)^{n+1}}{a_n(x-c)^n}\right|.
$$

On the open interval of convergence, differentiation and integration may be performed term by term:

$$
f(x)=\sum_{n=0}^{\infty}a_n(x-c)^n
\quad\Longrightarrow\quad
f'(x)=\sum_{n=1}^{\infty}na_n(x-c)^{n-1}.
$$

$$
\int f(x)\,dx=C+\sum_{n=0}^{\infty}\frac{a_n}{n+1}(x-c)^{n+1}.
$$

The radius is unchanged by these termwise operations, although endpoint behavior
must be checked separately and may change. At an endpoint, do not differentiate
or integrate term by term without an additional convergence justification.

## Taylor and Maclaurin series

The Taylor series constructed from the derivatives of $f$ at $a$ is

$$
T_f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n.
$$

This series represents $f(x)$ only where it converges to the function. For an
analytic function, that equality holds within its interval of convergence; a
function can have derivatives of every order and still fail to equal its
Taylor series away from the center.

When $a=0$ it is a Maclaurin series. Important expansions are

$$
e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!},\qquad
\sin x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!},
$$

$$
\cos x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!},\qquad
\frac1{1-x}=\sum_{n=0}^{\infty}x^n\quad(|x|<1).
$$

For real $\alpha$ and $|x|<1$,

$$
(1+x)^\alpha=\sum_{n=0}^{\infty}\binom{\alpha}{n}x^n,
\qquad
\binom{\alpha}{n}=\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}.
$$

The degree-$N$ Taylor polynomial and its remainder are

$$
P_N(x)=\sum_{n=0}^{N}\frac{f^{(n)}(a)}{n!}(x-a)^n,
\qquad R_N(x)=f(x)-P_N(x).
$$

Use a center near the evaluation point, choose the lowest useful degree, and state whether a next-term estimate is only heuristic or a justified bound.

## Manipulating series

Reindexing, splitting, combining, differentiating, integrating, and multiplying power series are useful only when their convergence conditions are respected. For example,

$$
\sum_{n=2}^{\infty}\frac1{n-1}=\sum_{k=1}^{\infty}\frac1k.
$$

If two power series are equal on an interval, matching powers gives matching coefficients. Rearrangement is always safe for absolutely convergent series, but conditional convergence requires care.

Useful templates include the divergent harmonic series $\sum 1/n$, the conditionally convergent alternating harmonic series $\sum(-1)^{n+1}/n$, the $p$-series $\sum1/n^p$ for $p>1$, and

$$
-\ln(1-x)=\sum_{n=1}^{\infty}\frac{x^n}{n},\quad |x|<1,
$$

which follows by integrating the geometric series term by term.

## Fourier series preview

A Fourier series represents a periodic function as

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos(nx)+b_n\sin(nx)\right).
$$

The coefficients measure the contributions of the harmonics. This is a preview; rigorous coefficient calculations and convergence behavior belong in a later Fourier-series treatment.

## Power- and Taylor-series workflow

1. Find the radius and then test every endpoint separately.
2. Start with a known series, then shift, substitute, differentiate, or integrate while tracking the convergence domain.
3. For approximation, choose a nearby center and report the error context.
4. Check the first few terms and the assumptions behind any remainder estimate.

