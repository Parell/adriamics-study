---
# What an integral is

>

An **integral** measures accumulation. In calculus, that accumulation is usually:

- area under a curve
- total change from a rate of change
- mass, charge, probability, or work accumulated over a region

There are two main types:

- **Indefinite integrals** give families of antiderivatives.
- **Definite integrals** give a numerical total over an interval.

The central idea is that differentiation and integration are inverse operations.

---

# Indefinite integrals and antiderivatives

An **antiderivative** of $f(x)$ is a function $F(x)$ such that

$$
F'(x) = f(x).
$$

The indefinite integral notation means "find all antiderivatives":

$$
\int f(x)\,dx = F(x) + C.
$$

The constant $C$ matters because infinitely many functions share the same derivative.

## Linear properties

Integration is linear:

$$
\int \bigl(af(x) + bg(x)\bigr)\,dx
= a\int f(x)\,dx + b\int g(x)\,dx.
$$

This is one of the most useful simplifications in basic integration.

## Basic interpretation

If $f(x)$ is a rate, then an integral of $f$ gives the accumulated amount. If $v(t)$ is velocity, then

$$
\int v(t)\,dt
$$

gives displacement, up to an initial condition.

---

# Definite integrals and area

The definite integral of $f(x)$ from $a$ to $b$ is written

$$
\int_a^b f(x)\,dx.
$$

It represents signed accumulation over the interval $[a,b]$.

## Riemann sum definition

Partition $[a,b]$ into $n$ subintervals of width

$$
\Delta x = \frac{b-a}{n}.
$$

Sample points $x_i^\ast$ in each subinterval produce the Riemann sum

$$
\sum_{i=1}^n f(x_i^\ast)\,\Delta x.
$$

As the partition gets finer,

$$
\int_a^b f(x)\,dx = \lim_{n\to\infty}\sum_{i=1}^n f(x_i^\ast)\,\Delta x.
$$

## Signed area

- If $f(x) > 0$ on an interval, the integral is positive.
- If $f(x) < 0$ on an interval, the integral is negative.
- The definite integral is not "area" unless the function is nonnegative.

If you want actual geometric area, use

$$
\int_a^b |f(x)|\,dx
$$

or split the interval where the function changes sign.

## Average value

The average value of $f$ on $[a,b]$ is

$$
f_{\text{avg}} = \frac{1}{b-a}\int_a^b f(x)\,dx.
$$

This is a common interpretation: the integral is the total, and dividing by interval length gives the average height.
---

# The Fundamental Theorem of Calculus

The **Fundamental Theorem of Calculus** connects derivatives and integrals.

## Part 1

If $f$ is continuous on an interval containing $a$ and $x$, define

$$
G(x) = \int_a^x f(t)\,dt,
$$

then

$$
G'(x) = f(x).
$$

This says accumulation and instantaneous rate are inverse processes.

## Part 2

If $F'(x)=f(x)$, then

$$
\int_a^b f(x)\,dx = F(b) - F(a).
$$

This is the practical evaluation rule for definite integrals.

## Why this matters

Without the FTC, definite integrals would require limit computations every time. With the FTC, most evaluation reduces to:

1. Find an antiderivative.
2. Plug in the endpoints.
3. Subtract.

---

# Core antiderivative rules

These formulas appear constantly.

## Power rule

For $n \neq -1$,

$$
\int x^n\,dx = \frac{x^{n+1}}{n+1} + C.
$$

Special case:

$$
\int \frac{1}{x}\,dx = \ln|x| + C.
$$

## Exponential and logarithmic forms

$$
\int e^x\,dx = e^x + C
$$

$$
\int a^x\,dx = \frac{a^x}{\ln a} + C \quad (a>0,\ a\neq 1)
$$

$$
\int \ln x\,dx
$$

is not a basic form, but is often handled by integration by parts.

## Trigonometric basics

$$
\int \sin x\,dx = -\cos x + C
$$

$$
\int \cos x\,dx = \sin x + C
$$

$$
\int \sec^2 x\,dx = \tan x + C
$$

$$
\int \csc^2 x\,dx = -\cot x + C
$$

$$
\int \sec x\tan x\,dx = \sec x + C
$$

$$
\int \csc x\cot x\,dx = -\csc x + C
$$

## Common algebraic manipulations

Before integrating, simplify when possible:

- expand products
- factor constants
- cancel algebraic factors
- rewrite radicals as exponents when useful

Example:

$$
\int \left(3x^2 - \frac{4}{x} + 5e^x\right)dx
= x^3 - 4\ln|x| + 5e^x + C.
$$

---

# Substitution

**Substitution** reverses the chain rule. Use it when an integrand contains a function and its derivative, or a recognizable composite expression.

## Pattern

If

$$
\int f(g(x))g'(x)\,dx
$$

then set

$$
u = g(x), \qquad du = g'(x)\,dx.
$$

The integral becomes

$$
\int f(u)\,du.
$$

## Example

Evaluate

$$
\int 2x\cos(x^2)\,dx.
$$

Let

$$
u = x^2,\qquad du = 2x\,dx.
$$

Then

$$
\int 2x\cos(x^2)\,dx = \int \cos u\,du = \sin u + C = \sin(x^2)+C.
$$

## Definite integrals with substitution

You can either:

- change the limits to the new variable, or
- substitute back to the original variable before applying limits

Changing limits is cleaner:

If $u=g(x)$, then when $x=a$, use $u=g(a)$, and when $x=b$, use $u=g(b)$.

## Common substitution cues

- inner function and its derivative
- powers of expressions like $(ax+b)^n$
- radicals such as $\sqrt{1-x^2}$ or $\sqrt{a^2-x^2}$
- trigonometric compositions

---

# Integration by parts

Integration by parts comes from the product rule:

$$
\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}.
$$

In integral form:

$$
\int u\,dv = uv - \int v\,du.
$$

## When to use it

Use integration by parts when the integrand is a product and one factor becomes simpler after differentiation.

Common choices:

- polynomial times exponential
- polynomial times trigonometric function
- logarithms
- inverse trigonometric functions

## Example

Evaluate

$$
\int x e^x\,dx.
$$

Choose

$$
u = x,\qquad dv = e^x\,dx.
$$

Then

$$
du = dx,\qquad v = e^x.
$$

So

$$
\int x e^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C.
$$

## LIATE heuristic

A common order for choosing $u$ is:

1. Logarithmic
2. Inverse trigonometric
3. Algebraic
4. Trigonometric
5. Exponential

This is a heuristic, not a rule, but it often leads to a useful choice.

---

# Partial fractions

Partial fraction decomposition is used for rational functions:

$$
\frac{P(x)}{Q(x)}
$$

where $P$ and $Q$ are polynomials and the degree of $P$ is less than the degree of $Q$ after long division.

## Basic steps

1. If needed, perform polynomial long division.
2. Factor the denominator.
3. Write the rational function as a sum of simpler fractions.
4. Solve for unknown coefficients.
5. Integrate each piece.

## Common denominator forms

If

$$
Q(x) = (x-a)(x-b),
$$

then write

$$
\frac{P(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}.
$$

Repeated factors require multiple terms:

$$
\frac{P(x)}{(x-a)^2} = \frac{A}{x-a} + \frac{B}{(x-a)^2}.
$$

Quadratic irreducible factors use linear numerators:

$$
\frac{P(x)}{x^2+px+q} = \frac{Ax+B}{x^2+px+q}.
$$

## Example

$$
\int \frac{1}{x(x+1)}\,dx
$$

Decompose:

$$
\frac{1}{x(x+1)} = \frac{1}{x} - \frac{1}{x+1}.
$$

Then

$$
\int \frac{1}{x(x+1)}\,dx = \ln|x| - \ln|x+1| + C.
$$

---

# Trigonometric integrals and substitutions

## Trigonometric integrals

Useful identities often simplify powers of trig functions:

$$
\sin^2 x + \cos^2 x = 1
$$

$$
1 + \tan^2 x = \sec^2 x
$$

$$
1 + \cot^2 x = \csc^2 x
$$

Typical strategies:

- If a power of sine or cosine is odd, save one factor and convert the rest with $\sin^2 x = 1-\cos^2 x$ or $\cos^2 x = 1-\sin^2 x$.
- If powers of secant and tangent appear, save a factor of $\sec x\tan x$ or $\sec^2 x$ and convert using $1+\tan^2 x = \sec^2 x$.

## Trigonometric substitution

Use trig substitution for square roots of quadratic forms.

Common patterns:

$$
\sqrt{a^2-x^2} \quad \Rightarrow \quad x = a\sin\theta
$$

$$
\sqrt{a^2+x^2} \quad \Rightarrow \quad x = a\tan\theta
$$

$$
\sqrt{x^2-a^2} \quad \Rightarrow \quad x = a\sec\theta
$$

These substitutions work because the identities remove the radical.

## Example

For

$$
\int \frac{dx}{\sqrt{a^2-x^2}},
$$

let $x=a\sin\theta$. Then $dx=a\cos\theta\,d\theta$ and

$$
\sqrt{a^2-x^2} = \sqrt{a^2-a^2\sin^2\theta} = a\cos\theta.
$$

The integral becomes

$$
\int \frac{a\cos\theta\,d\theta}{a\cos\theta} = \int d\theta = \theta + C.
$$

Since $\theta = \arcsin(x/a)$,

$$
\int \frac{dx}{\sqrt{a^2-x^2}} = \arcsin(x/a) + C.
$$

---

# Improper integrals

An **improper integral** has at least one issue:

- infinite limits of integration
- integrand becomes unbounded on the interval

These are evaluated as limits.

## Infinite interval

$$
\int_a^\infty f(x)\,dx = \lim_{b\to\infty}\int_a^b f(x)\,dx.
$$

## Vertical asymptote

If $f$ blows up at $x=c$ in $[a,b]$, then

$$
\int_a^b f(x)\,dx
$$

must be split at $c$ and interpreted with one-sided limits.

## Convergence

An improper integral **converges** if the limit exists and is finite. Otherwise it **diverges**.

### Useful benchmark

For

$$
\int_1^\infty \frac{1}{x^p}\,dx,
$$

the integral converges if and only if $p>1$.

This is a standard comparison test baseline.

---

# Applications

Integrals appear anywhere accumulation matters.

## Area between curves

If $f(x) \ge g(x)$ on $[a,b]$, then the area between them is

$$
\int_a^b \bigl(f(x)-g(x)\bigr)\,dx.
$$

If the top and bottom curves switch, split the interval first.

## Volume of revolution

### Disk method

If a region is rotated about an axis and produces solid disks of radius $R(x)$, then

$$
V = \pi \int_a^b R(x)^2\,dx.
$$

### Washer method

If there is a hole with inner radius $r(x)$,

$$
V = \pi \int_a^b \bigl(R(x)^2-r(x)^2\bigr)\,dx.
$$

### Shell method

Using cylindrical shells,

$$
V = 2\pi \int_a^b (\text{radius})(\text{height})\,dx.
$$

## Work

If force varies with position,

$$
W = \int_a^b F(x)\,dx.
$$

For a spring obeying Hooke's law $F=kx$,

$$
W = \int_a^b kx\,dx.
$$

## Mass from density

If $\rho(x)$ is linear density,

$$
m = \int_a^b \rho(x)\,dx.
$$

For surface and volume density, the same accumulation idea applies with the appropriate measure.

## Probability

If $f(x)$ is a probability density function, then

$$
P(a \le X \le b) = \int_a^b f(x)\,dx.
$$

The total area under a valid pdf must be

$$
\int_{-\infty}^{\infty} f(x)\,dx = 1.
$$

---

# Numerical integration

When an antiderivative is hard or unavailable, approximate the integral numerically.

## Trapezoidal rule

Partition $[a,b]$ into $n$ equal parts with $\Delta x = (b-a)/n$.

Then

$$
\int_a^b f(x)\,dx \approx \frac{\Delta x}{2}\left[f(x_0)+2\sum_{i=1}^{n-1}f(x_i)+f(x_n)\right].
$$

## Simpson's rule

With even $n$,

$$
\int_a^b f(x)\,dx \approx \frac{\Delta x}{3}\left[f(x_0)+4\sum_{\text{odd }i}f(x_i)+2\sum_{\text{even }i}f(x_i)+f(x_n)\right].
$$

## Error intuition

- More subintervals usually improve accuracy.
- Smooth functions are approximated better than highly oscillatory or discontinuous functions.
- Simpson's rule is often more accurate than the trapezoidal rule for the same number of intervals.

---

# Problem-solving workflow

A reliable integration workflow saves time and reduces mistakes.

1. Identify the integral type: indefinite, definite, improper, or application.
2. Simplify algebraically first.
3. Check whether a standard formula applies immediately.
4. Look for substitution patterns.
5. If the integrand is a product, consider integration by parts.
6. If the integrand is rational, try partial fractions.
7. If there are trig powers or radicals, consider trig identities or trig substitution.
8. For definite integrals, use the FTC after finding an antiderivative.
9. Check your answer by differentiating when possible.
10. For definite integrals, check sign and bounds.

## Fast self-checks

- Differentiate your antiderivative.
- Test units in applied problems.
- For definite integrals, estimate whether the sign and size are reasonable.

---

# Common mistakes

## Forgetting the constant of integration

For indefinite integrals,

$$
\int f(x)\,dx = F(x) + C.
$$

Omitting $C$ is a common grading error.

## Using the wrong variable in substitution

If you let $u=g(x)$, then every $x$ must be rewritten consistently in terms of $u$ or converted back before finishing.

## Mixing up signed area and geometric area

The definite integral can be negative. Actual area is nonnegative.

## Wrong bounds after substitution

When changing variables in a definite integral, the limits must change too. If you keep the old limits, you must substitute back before evaluating.

## Missing absolute values in logarithms

The antiderivative of $1/x$ is

$$
\ln|x| + C,
$$

not just $\ln x + C$.

## Algebra mistakes before integrating

Many integration problems are really algebra problems in disguise:

- expand carefully
- factor correctly
- simplify before choosing a technique

---

# Formula sheet

## Core formulas

$$
\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n\neq -1)
$$

$$
\int \frac{1}{x}\,dx = \ln|x| + C
$$

$$
\int e^x\,dx = e^x + C
$$

$$
\int \sin x\,dx = -\cos x + C
$$

$$
\int \cos x\,dx = \sin x + C
$$

$$
\int u\,dv = uv - \int v\,du
$$

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

$$
f_{\text{avg}} = \frac{1}{b-a}\int_a^b f(x)\,dx
$$

$$
\int_a^\infty f(x)\,dx = \lim_{b\to\infty}\int_a^b f(x)\,dx
$$

## Common geometric volumes

$$
V_{\text{disk}} = \pi \int_a^b R(x)^2\,dx
$$

$$
V_{\text{washer}} = \pi \int_a^b \bigl(R(x)^2-r(x)^2\bigr)\,dx
$$

$$
V_{\text{shell}} = 2\pi \int_a^b (\text{radius})(\text{height})\,dx
$$

---

## Quick reference

If an integral looks:

- like a composite function times its derivative, try substitution
- like a product of unlike functions, try integration by parts
- like a rational function, try partial fractions
- like a trig expression with powers, use identities
- like a radical of a quadratic, consider trig substitution
- like a limit problem or infinite interval, treat it as improper

Integration becomes much easier once you classify the form correctly before doing any algebra.

## What comes next

Series study infinite sums and their convergence. They build on the limit language from earlier notes and use derivatives and integrals as tools, but are a separate topic from finite-interval accumulation.

## What this enables

You can now model accumulation with antiderivatives, definite integrals, the Fundamental Theorem of Calculus, and numerical methods. Continue to **Series** for infinite sums; convergence tests will reuse limits and sometimes integrals.

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
