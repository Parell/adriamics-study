# What a derivative means

The derivative measures how a function changes as its input changes.

If $y = f(x)$, then $f'(x)$ describes the **instantaneous rate of change** of $y$ with respect to $x$.

It also gives the **slope of the tangent line** to the graph of $y = f(x)$ at a point.

Two useful interpretations:

- Rate interpretation: how fast one quantity changes compared with another
- Geometric interpretation: slope of the tangent line

Examples:

- If $s(t)$ is position, then $s'(t)$ is velocity.
- If $C(q)$ is cost, then $C'(q)$ is marginal cost.

At a point, the sign of the derivative describes the tangent slope:

- Positive: the tangent slopes upward
- Negative: the tangent slopes downward
- Zero: the tangent is horizontal

To conclude that a function is increasing or decreasing on an interval, check
that the derivative keeps the corresponding sign throughout that interval.
---

# Formal definition

The derivative of $f$ at $x$ is defined by the limit

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}
$$

if the limit exists.

This is the slope of the secant line in the limit as the two points merge into one.

An equivalent form is

$$
f'(a) = \lim_{x \to a} \frac{f(x)-f(a)}{x-a}
$$

## Differentiability and continuity

If a function is differentiable at a point, then it is continuous there.

But the converse is not always true:

- Differentiable $\Rightarrow$ continuous
- Continuous $\nRightarrow$ differentiable

Common reasons a derivative fails to exist:

- Corner
- Cusp
- Vertical tangent
- Discontinuity

Example:

$$
f(x) = |x|
$$

is continuous at $x=0$, but not differentiable there because the left-hand and right-hand slopes are different.

---

# Notation

If $y=f(x)$, common derivative notations include:

$$
f'(x), \quad y', \quad \frac{dy}{dx}, \quad \frac{d}{dx}[f(x)]
$$

For functions of time:

$$
\frac{ds}{dt}, \quad \frac{dv}{dt}
$$

Higher derivatives:

$$
f''(x), \quad y'', \quad \frac{d^2y}{dx^2}
$$

Leibniz notation is especially useful when applying the chain rule because it keeps track of variables clearly.

---

# Core differentiation rules

These rules let you differentiate most elementary functions efficiently.

## Constant rule

$$
\frac{d}{dx}[c] = 0
$$

## Power rule

$$
\frac{d}{dx}[x^n] = nx^{n-1}
$$

For a real exponent $n$, this rule applies at points where the real-valued
power function is defined and differentiable. The domain of $x^n$ alone does
not guarantee differentiability at an endpoint; for example, $\sqrt{x}$ is
defined at $x=0$, but its derivative formula is not finite there.

Examples:

$$
\frac{d}{dx}[x^5] = 5x^4
$$

$$
\frac{d}{dx}[x^{-2}] = -2x^{-3}
$$

$$
\frac{d}{dx}[\sqrt{x}] = \frac{1}{2\sqrt{x}}
$$

## Constant multiple rule

$$
\frac{d}{dx}[c f(x)] = c f'(x)
$$

## Sum and difference rules

$$
\frac{d}{dx}[f(x)+g(x)] = f'(x)+g'(x)
$$

$$
\frac{d}{dx}[f(x)-g(x)] = f'(x)-g'(x)
$$

## Product rule

$$
\frac{d}{dx}[f(x)g(x)] = f'(x)g(x)+f(x)g'(x)
$$

Example:

$$
\frac{d}{dx}[x^2 e^x] = 2x e^x + x^2 e^x
$$

## Quotient rule

$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right]
=
\frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}
$$

where $g(x)\ne 0$.

Example:

$$
\frac{d}{dx}\left[\frac{x^2+1}{x}\right]
=
\frac{(2x)(x)-(x^2+1)(1)}{x^2}
=
\frac{x^2-1}{x^2}
$$

---

# Derivatives of common functions

## Exponential functions

$$
\frac{d}{dx}[e^x] = e^x
$$

$$
\frac{d}{dx}[a^x] = a^x \ln a
\quad \text{for } a>0,\ a\ne 1
$$

## Logarithmic functions

$$
\frac{d}{dx}[\ln x] = \frac{1}{x}
\quad \text{for } x>0
$$

$$
\frac{d}{dx}[\log_a x] = \frac{1}{x \ln a}
$$

## Trigonometric functions

$$
\frac{d}{dx}[\sin x] = \cos x
$$

$$
\frac{d}{dx}[\cos x] = -\sin x
$$

$$
\frac{d}{dx}[\tan x] = \sec^2 x
$$

$$
\frac{d}{dx}[\cot x] = -\csc^2 x
$$

$$
\frac{d}{dx}[\sec x] = \sec x \tan x
$$

$$
\frac{d}{dx}[\csc x] = -\csc x \cot x
$$

These formulas assume angles are measured in radians.

## Inverse trigonometric functions

$$
\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}}
$$

$$
\frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1-x^2}}
$$

$$
\frac{d}{dx}[\arctan x] = \frac{1}{1+x^2}
$$

Useful extensions:

$$
\frac{d}{dx}[\operatorname{arcsec} x] = \frac{1}{|x|\sqrt{x^2-1}}
$$

$$
\frac{d}{dx}[\operatorname{arccsc} x] = -\frac{1}{|x|\sqrt{x^2-1}}
$$

$$
\frac{d}{dx}[\operatorname{arccot} x] = -\frac{1}{1+x^2}
$$

---

# Chain rule and composite functions

The chain rule is essential for differentiating nested functions.

If

$$
y = f(g(x))
$$

then

$$
\frac{dy}{dx} = f'(g(x)) \cdot g'(x)
$$

In operator form:

$$
\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)
$$

## Examples

If

$$
y = (3x^2+1)^5
$$

then let $u=3x^2+1$. Since $\frac{d}{du}[u^5]=5u^4$ and $\frac{du}{dx}=6x$,

$$
\frac{dy}{dx} = 5(3x^2+1)^4(6x) = 30x(3x^2+1)^4
$$

If

$$
y = \sin(x^3)
$$

then

$$
\frac{dy}{dx} = \cos(x^3)\cdot 3x^2
$$

If

$$
y = \ln(2x^2-7x+4)
$$

then

$$
\frac{dy}{dx} = \frac{4x-7}{2x^2-7x+4}
$$

## General pattern

Differentiate the outer function first, leaving the inner function unchanged, then multiply by the derivative of the inner function.

This is where many mistakes happen. Do not differentiate the inside and outside independently without the linking factor.

---

# Implicit differentiation

Sometimes a relation involving $x$ and $y$ is not solved explicitly for $y$.

Example:

$$
x^2 + y^2 = 25
$$

To differentiate with respect to $x$, treat $y$ as a function of $x$:

$$
\frac{d}{dx}[x^2] + \frac{d}{dx}[y^2] = \frac{d}{dx}[25]
$$

$$
2x + 2y\frac{dy}{dx} = 0
$$

So

$$
\frac{dy}{dx} = -\frac{x}{y}
$$

## Why $\frac{dy}{dx}$ appears

When differentiating any expression involving $y$, use the chain rule because $y=y(x)$.

For example:

$$
\frac{d}{dx}[y^3] = 3y^2\frac{dy}{dx}
$$

$$
\frac{d}{dx}[\sin y] = \cos y \frac{dy}{dx}
$$

## Tangent line example

Given

$$
x^2 + y^2 = 25
$$

find the tangent slope at $(3,4)$:

$$
\frac{dy}{dx} = -\frac{x}{y}
$$

At $(3,4)$,

$$
\frac{dy}{dx} = -\frac{3}{4}
$$

So the tangent line is

$$
y-4 = -\frac{3}{4}(x-3)
$$

---

# Higher-order derivatives

The second derivative is the derivative of the first derivative:

$$
f''(x) = \frac{d}{dx}[f'(x)]
$$

Similarly:

$$
f^{(3)}(x), \quad f^{(4)}(x), \quad \dots
$$

## Interpretation

- $f'(x)$ describes slope or rate of change
- $f''(x)$ describes how the slope changes

In motion:

- Position: $s(t)$
- Velocity: $v(t)=s'(t)$
- Acceleration: $a(t)=s''(t)$

## Concavity

If:

- $f''(x) > 0$, the graph is concave up
- $f''(x) < 0$, the graph is concave down

Possible inflection points occur where concavity changes.

Example:

$$
f(x)=x^3-3x
$$

Then

$$
f'(x)=3x^2-3
$$

$$
f''(x)=6x
$$

Since $f''(x)$ changes sign at $x=0$, the graph has an inflection point there.

---

# Linear approximation and differentials

Near a point $x=a$, a differentiable function is well approximated by its tangent line.

## Linearization

The linear approximation of $f(x)$ at $x=a$ is

$$
L(x) = f(a) + f'(a)(x-a)
$$

This is useful for estimation.

Example:

Estimate $\sqrt{4.1}$ using $f(x)=\sqrt{x}$ at $a=4$.

$$
f(4)=2,\quad f'(x)=\frac{1}{2\sqrt{x}},\quad f'(4)=\frac{1}{4}
$$

So

$$
L(x)=2+\frac{1}{4}(x-4)
$$

At $x=4.1$:

$$
L(4.1)=2+\frac{1}{4}(0.1)=2.025
$$

So

$$
\sqrt{4.1} \approx 2.025
$$

## Differentials

If $y=f(x)$, then the differential is

$$
dy = f'(x)\,dx
$$

For a small change $dx$, the corresponding change in $y$ is approximately

$$
\Delta y \approx dy
$$

Differentials are useful in error estimation and applied modeling.

---

# Applications of derivatives

## Increasing and decreasing behavior

Use the sign of $f'(x)$:

- If $f'(x)>0$ on an interval, $f$ is increasing there.
- If $f'(x)<0$ on an interval, $f$ is decreasing there.

## Critical points

Critical points occur where:

- $f'(x)=0$, or
- $f'(x)$ does not exist

These points are candidates for local maxima, local minima, or neither.

## First derivative test

If $f'$ changes:

- From positive to negative, $f$ has a local maximum
- From negative to positive, $f$ has a local minimum
- Without a sign change, there is no local extremum

## Second derivative test

If $f'(c)=0$ and:

- $f''(c)>0$, then $f(c)$ is a local minimum
- $f''(c)<0$, then $f(c)$ is a local maximum
- $f''(c)=0$, the test is inconclusive

## Related rates

If variables are connected by an equation and all depend on time, differentiate with respect to $t$.

Example for a circle:

$$
A = \pi r^2
$$

Differentiate with respect to time:

$$
\frac{dA}{dt} = 2\pi r \frac{dr}{dt}
$$

This connects the rate of change of area to the rate of change of radius.

## Newton's method

Derivatives also support numerical root-finding:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

This method works well when the initial guess is reasonable and $f'(x_n)\ne 0$.

---

# Optimization workflow

Many applied derivative problems reduce to optimization.

Use this process:

1. Define the quantity to optimize.
2. Write it as a function of one variable.
3. Find the derivative.
4. Solve $f'(x)=0$ and check points where $f'$ does not exist.
5. Use the first or second derivative test.
6. Check endpoints if the domain is closed and bounded.
7. State the answer with units and context.

## Example

Find the maximum value of

$$
f(x) = -x^2 + 4x + 1
$$

Differentiate:

$$
f'(x) = -2x + 4
$$

Set equal to zero:

$$
-2x+4=0 \Rightarrow x=2
$$

Second derivative:

$$
f''(x) = -2 < 0
$$

So $x=2$ gives a local maximum. The maximum value is

$$
f(2)=-(2)^2+4(2)+1=5
$$

---

# Formula sheet

## Definition

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}
$$

## Basic rules

$$
\frac{d}{dx}[c] = 0
$$

$$
\frac{d}{dx}[x^n] = nx^{n-1}
$$

$$
\frac{d}{dx}[c f(x)] = c f'(x)
$$

$$
\frac{d}{dx}[f(x)\pm g(x)] = f'(x)\pm g'(x)
$$

$$
\frac{d}{dx}[f(x)g(x)] = f'(x)g(x)+f(x)g'(x)
$$

$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right]
=
\frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}
$$

## Chain rule

$$
\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)
$$

## Common functions

$$
\frac{d}{dx}[e^x] = e^x
$$

$$
\frac{d}{dx}[a^x] = a^x \ln a
$$

$$
\frac{d}{dx}[\ln x] = \frac{1}{x}
$$

$$
\frac{d}{dx}[\sin x] = \cos x
$$

$$
\frac{d}{dx}[\cos x] = -\sin x
$$

$$
\frac{d}{dx}[\tan x] = \sec^2 x
$$

$$
\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}}
$$

$$
\frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1-x^2}}
$$

$$
\frac{d}{dx}[\arctan x] = \frac{1}{1+x^2}
$$

## Linearization

$$
L(x) = f(a) + f'(a)(x-a)
$$

## Differential

$$
dy = f'(x)\,dx
$$

## Newton's method

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

---

# Common mistakes to avoid

- Treating the derivative as an average rate of change instead of a limit-based instantaneous rate.
- Forgetting the chain rule for nested expressions such as $(3x^2+1)^5$ or $\sin(x^3)$.
- Misusing the product rule by differentiating only one factor.
- Dropping parentheses in quotient-rule problems.
- Using trigonometric derivative formulas when the angle is not in radians.
- Assuming continuity automatically implies differentiability.
- Forgetting that critical points include places where $f'(x)$ does not exist.
- Using the second derivative test when $f''(c)=0$ and drawing a conclusion anyway.
- Writing $\frac{d}{dx}[\ln x]=\frac{1}{x}$ without checking that the domain requires $x>0$.
- Solving an optimization problem algebraically but forgetting to interpret the result in context.

## What this enables

You can now compute and interpret derivatives, including local linear change and optimization. Continue to **Integrals** to study accumulation and antiderivatives, then to **Series** for infinite sums and Taylor approximations.

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
