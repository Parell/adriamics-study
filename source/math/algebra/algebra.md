# Algebra

# Expressions and algebraic manipulation

An **expression** is a combination of numbers, variables, and operations, but without an equals sign.

Examples:

$$
3x^2 - 5x + 2
$$

$$
\frac{2a - 1}{a + 4}
$$

## Like terms

Only like terms can be combined.

$$
4x + 7x = 11x
$$

but

$$
4x + 7x^2
$$

cannot be simplified by combining coefficients.

## Distributing and factoring

Distributing expands an expression:

$$
3(x - 4) = 3x - 12
$$

Factoring reverses the process:

$$
3x - 12 = 3(x - 4)
$$

## Fractions in algebra

To add algebraic fractions, use a common denominator:

$$
\frac{1}{x} + \frac{1}{x + 1}
= \frac{x + 1 + x}{x(x + 1)}
= \frac{2x + 1}{x(x + 1)}
$$

Restrictions matter. In the example above:

$$
x \ne 0, \quad x \ne -1
$$

## Identities

An **identity** is true for all allowed values of the variable.

:::example Squaring a binomial

$$
(a+b)^2 = a^2 + 2ab + b^2
$$

This is not an equation to solve; it is a pattern to use.

:::

---

# Linear equations and inequalities

A **linear equation** has variables only to the first power.

## One-variable linear equations

Example:

$$
5x - 7 = 18
$$

Solve by isolating the variable:

$$
5x = 25
$$

$$
x = 5
$$

The same operation must be done to both sides to preserve equality.

## Equations with variables on both sides

Example:

$$
4x + 9 = 2x + 15
$$

Move variable terms together:

$$
2x + 9 = 15
$$

$$
2x = 6
$$

$$
x = 3
$$

## Literal equations

Sometimes the goal is to solve for one variable in terms of others.

Example:

$$
A = \frac{1}{2}bh
$$

Solve for $h$:

$$
2A = bh
$$

$$
h = \frac{2A}{b}
$$

## Inequalities

Solve inequalities much like equations, except for one crucial rule:

If you multiply or divide by a negative number, reverse the inequality sign.

Example:

$$
-2x > 8
$$

Divide by $-2$ and reverse the sign:

$$
x < -4
$$

## Interval notation

| Inequality | Interval |
| --- | --- |
| $x \ge 3$ | $[3, \infty)$ |
| $x < 2$ | $(-\infty, 2)$ |
| $-1 < x \le 4$ | $(-1, 4]$ |
---

# Systems of equations

A system asks for values that satisfy multiple equations at once.

## Two linear equations in two variables

General form:

$$
\begin{cases}
a_1x + b_1y = c_1 \\
a_2x + b_2y = c_2
\end{cases}
$$

## Main methods

| Method | Best use |
| --- | --- |
| Substitution | One variable is easy to isolate |
| Elimination | Coefficients line up well |
| Graphing | Visual interpretation is useful |

## Example: elimination

$$
\begin{cases}
2x + y = 7 \\
3x - y = 8
\end{cases}
$$

Add the equations:

$$
5x = 15
$$

$$
x = 3
$$

Substitute back:

$$
2(3) + y = 7 \Rightarrow y = 1
$$

So the solution is

$$
(x, y) = (3, 1)
$$

## Geometric meaning

- One solution: the lines intersect once
- No solution: the lines are parallel
- Infinitely many solutions: the equations describe the same line

---

# Exponents, radicals, and powers

Exponents compress repeated multiplication.

$$
a^n = \underbrace{a \cdot a \cdot a \cdots a}_{n \text{ factors}}
$$

## Exponent laws

For appropriate nonzero bases:

$$
a^m a^n = a^{m+n}
$$

$$
\frac{a^m}{a^n} = a^{m-n}
$$

$$
(a^m)^n = a^{mn}
$$

$$
(ab)^n = a^n b^n
$$

$$
a^{-n} = \frac{1}{a^n}
$$

$$
a^0 = 1
$$

## Rational exponents and radicals

$$
a^{1/n} = \sqrt[n]{a}
$$

$$
a^{m/n} = \sqrt[n]{a^m}
$$

For real-valued even roots, the radicand must be nonnegative:

$$
\sqrt{x}
$$

requires

$$
x \ge 0
$$

## Simplifying radicals

$$
\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}
$$

## Rationalizing a denominator

Example:

$$
\frac{1}{\sqrt{3}} = \frac{1}{\sqrt{3}} \cdot \frac{\sqrt{3}}{\sqrt{3}} = \frac{\sqrt{3}}{3}
$$

---

# Polynomials and factoring

A **polynomial** is a sum of terms of the form $ax^n$, where $n$ is a nonnegative integer.

Examples:

- Linear: $2x - 5$
- Quadratic: $x^2 - 4x + 4$
- Cubic: $x^3 + x$

## Special products

These patterns appear constantly:

$$
(a+b)^2 = a^2 + 2ab + b^2
$$

$$
(a-b)^2 = a^2 - 2ab + b^2
$$

$$
(a+b)(a-b) = a^2 - b^2
$$

## Common factoring methods

| Method | Example |
| --- | --- |
| Greatest common factor | $6x^2 + 9x = 3x(2x+3)$ |
| Difference of squares | $x^2 - 25 = (x-5)(x+5)$ |
| Trinomial factoring | $x^2 + 5x + 6 = (x+2)(x+3)$ |
| Grouping | $ax + ay + bx + by = (a+b)(x+y)$ |

## Zero-product property

If

$$
ab = 0
$$

then

$$
a = 0 \quad \text{or} \quad b = 0
$$

This is the key step after factoring an equation.

Example:

$$
x^2 - 5x + 6 = 0
$$

$$
(x-2)(x-3) = 0
$$

So

$$
x = 2 \quad \text{or} \quad x = 3
$$

---

# Rational expressions

A **rational expression** is a quotient of polynomials:

$$
\frac{P(x)}{Q(x)}
$$

where

$$
Q(x) \ne 0
$$

## Simplifying

Factor first, then cancel common factors.

$$
\frac{x^2 - 9}{x^2 - 3x}
= \frac{(x-3)(x+3)}{x(x-3)}
= \frac{x+3}{x}
$$

Restrictions from the original denominator remain:

$$
x \ne 0, \quad x \ne 3
$$

## Operations

### Multiplication

$$
\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}
$$

### Division

$$
\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c}
$$

### Addition and subtraction

Use a common denominator:

$$
\frac{2}{x} - \frac{1}{x+1}
= \frac{2(x+1) - x}{x(x+1)}
= \frac{x+2}{x(x+1)}
$$

## Rational equations

Typical workflow:

1. State denominator restrictions.
2. Multiply both sides by the least common denominator.
3. Solve the resulting equation.
4. Check for extraneous values that make a denominator zero.

---

# Quadratic equations and parabolas

A quadratic equation has the form

$$
ax^2 + bx + c = 0, \quad a \ne 0
$$

## Main solution methods

| Method | Best use |
| --- | --- |
| Factoring | Simple integer roots |
| Completing the square | Deriving structure or vertex form |
| Quadratic formula | General method |

## Completing the square

Start with

$$
x^2 + 6x - 7 = 0
$$

Move the constant:

$$
x^2 + 6x = 7
$$

Add $\left(\frac{6}{2}\right)^2 = 9$ to both sides:

$$
x^2 + 6x + 9 = 16
$$

$$
(x+3)^2 = 16
$$

$$
x+3 = \pm 4
$$

$$
x = 1 \quad \text{or} \quad x = -7
$$

## Quadratic formula

For

$$
ax^2 + bx + c = 0
$$

the solutions are

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

The discriminant

$$
\Delta = b^2 - 4ac
$$

determines the root type:

| Discriminant | Result |
| --- | --- |
| $\Delta > 0$ | two distinct real roots |
| $\Delta = 0$ | one repeated real root |
| $\Delta < 0$ | two complex roots |

## Graph interpretation

The graph of a quadratic function is a parabola.

Vertex form:

$$
y = a(x-h)^2 + k
$$

The vertex is

$$
(h, k)
$$

If $a > 0$, the parabola opens upward. If $a < 0$, it opens downward.

---

# Solution techniques for function equations

> **Label: Solution technique.** Functions is the canonical concept note for
> notation, domain, range, composition, inverses, exponentials, and logarithms.
> This section covers only the algebraic methods used to solve equations
> involving those concepts.

Algebraâ€™s role is symbolic manipulation and equation solving. Before working with a
function, exponential, or logarithm here, review the relevant concepts in
[function notation, domain, codomain, and range](../functions/functions.md#2-notation-domain-codomain-and-range),
[exponential and logarithmic functions](../functions/functions.md#exponential-and-logarithmic-functions),
and [composition and inverse functions](../functions/functions.md#6-composition-and-inverse-functions).

For the algebraic solution methods, see:

- [Solution technique: applying exponential and logarithmic relationships in equations](#solution-technique-applying-exponential-and-logarithmic-relationships-in-equations)
- [Algebra problem-solving workflow](#10-problem-solving-workflow)

## Solution technique: applying exponential and logarithmic relationships in equations

Use a common base for exponential equations when possible. Otherwise, take
logarithms of both sides. For logarithmic equations, require every argument to
be positive and check the result in the original equation.

Examples:

$$
2^{x+1}=16=2^4 \quad\Rightarrow\quad x=3
$$

$$
\log_3(x-1)=2 \quad\Longleftrightarrow\quad x-1=3^2 \quad\Rightarrow\quad x=10
$$

---

# Problem-solving workflow

When solving an algebra problem, use a disciplined sequence.

## General workflow

1. Identify the object: expression, equation, inequality, system, or function.
2. Note all restrictions on allowed values.
3. Simplify structure before solving: distribute, factor, combine like terms, or clear denominators.
4. Choose a method that matches the form.
5. Solve carefully and keep operations reversible when possible.
6. Check the result in the original statement, especially for rational, radical, or logarithmic problems.

## Choosing a method quickly

| Form you see | Likely method |
| --- | --- |
| Linear equation | isolate the variable |
| Quadratic set equal to zero | factor or use quadratic formula |
| Denominators with variables | multiply by LCD after stating restrictions |
| Square root present | isolate the radical, then square both sides |
| Two linear equations | substitution or elimination |
| Exponential equation | rewrite with common base or use logs |

## Example workflow: rational equation

Solve

$$
\frac{1}{x} + \frac{1}{2} = \frac{3}{4}
$$

Restrictions:

$$
x \ne 0
$$

Multiply both sides by $4x$:

$$
4 + 2x = 3x
$$

$$
x = 4
$$

Check:

$$
\frac{1}{4} + \frac{1}{2} = \frac{3}{4}
$$

Valid.

---

# Common pitfalls

- Combining unlike terms, such as treating $x + x^2$ as $2x^2$.
- Canceling terms across addition, such as
  $$
  \frac{x+3}{x} \ne 1+3
  $$
- Forgetting denominator restrictions in rational expressions.
- Losing the $\pm$ when taking square roots:
  $$
  x^2 = 9 \Rightarrow x = \pm 3
  $$
- Failing to reverse an inequality after dividing by a negative number.
- Squaring both sides and keeping an extraneous solution without checking.
- Applying log laws to sums incorrectly:
  $$
  \log(x+y) \ne \log x + \log y
  $$

---

# Formula summary

## Core identities

$$
a(b+c) = ab + ac
$$

$$
(a+b)^2 = a^2 + 2ab + b^2
$$

$$
(a-b)^2 = a^2 - 2ab + b^2
$$

$$
a^2 - b^2 = (a-b)(a+b)
$$

## Exponent rules

$$
a^m a^n = a^{m+n}
$$

$$
\frac{a^m}{a^n} = a^{m-n}
$$

$$
(a^m)^n = a^{mn}
$$

$$
a^{-n} = \frac{1}{a^n}
$$

$$
a^{m/n} = \sqrt[n]{a^m}
$$

## Linear and quadratic forms

$$
y = mx + b
$$

$$
ax^2 + bx + c = 0
$$

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

## Function concepts

See [Functions](../functions/functions.md) for the canonical concepts: [notation,
domain, codomain, and range](../functions/functions.md#2-notation-domain-codomain-and-range),
[exponential and logarithmic functions](../functions/functions.md#exponential-and-logarithmic-functions),
and [composition and inverse functions](../functions/functions.md#6-composition-and-inverse-functions).

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)

Algebra is the language of mathematical structure and symbolic reasoning. It turns patterns and quantitative relationships into expressions, equations, functions, and general rules that can be manipulated precisely.

>

> **Scope note:** This is the canonical note for symbolic manipulation and equation-solving. Use [Functions](/study/math/functions/) for domain, codomain, composition, and inverse-function concepts.
