# What a limit means

>

A **limit** describes the value a function approaches as the input approaches some point.

The key idea is **behavior near a point**, not necessarily the function value at the point itself.

$$
\lim_{x \to a} f(x) = L
$$

This reads as: "as $x$ gets close to $a$, $f(x)$ gets close to $L$."

Limits provide the language for approaching a value without requiring the function to be evaluated at that exact input.

## Intuition

If values of $f(x)$ near $x=a$ can be made arbitrarily close to $L$, then $L$ is the limit.

That means:

- $f(a)$ may equal $L$
- $f(a)$ may be different from $L$
- $f(a)$ may not exist at all

Example:

$$
f(x) = \frac{x^2-9}{x-3}
$$

For $x \ne 3$, this simplifies to:

$$
f(x) = x+3
$$

So:

$$
\lim_{x \to 3} \frac{x^2-9}{x-3} = 6
$$

even though the original formula is undefined at $x=3$.
---

# Formal definition

The rigorous definition of a limit uses $\varepsilon$ and $\delta$.

$$
\lim_{x \to a} f(x) = L
$$

means:

for every $\varepsilon > 0$, there exists a $\delta > 0$ such that whenever

$$
0 < |x-a| < \delta
$$

it follows that

$$
|f(x)-L| < \varepsilon
$$

## How to read it

- $\varepsilon$ is the allowed output error
- $\delta$ is the required input closeness
- The condition $0 < |x-a|$ excludes the point itself

This definition says that you can force the output to stay inside any desired tolerance by keeping the input sufficiently close to $a$.

## Why the point is excluded

The value at the point does not control the limit.

For limits, only nearby values matter.

## Common proof pattern

To prove a limit with $\varepsilon$-$\delta$:

1. Start with $|f(x)-L|$
2. Rewrite it in terms of $|x-a|$
3. Bound any extra factors near $x=a$
4. Choose a $\delta$ that makes the inequality work

This is usually easier once the function has been algebraically simplified.

---

# Limit laws

If the individual limits exist, you can combine them algebraically.

Let

$$
\lim_{x \to a} f(x) = L,\qquad \lim_{x \to a} g(x) = M
$$

Then:

$$
\lim_{x \to a} [f(x) \pm g(x)] = L \pm M
$$

$$
\lim_{x \to a} [c\,f(x)] = cL
$$

$$
\lim_{x \to a} [f(x)g(x)] = LM
$$

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}
$$

provided $M \ne 0$.

## Other useful laws

If $n$ is a positive integer:

$$
\lim_{x \to a} [f(x)]^n = L^n
$$

If $n$ is a root and the expression stays defined:

$$
\lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L}
$$

If $p$ is a polynomial, then:

$$
\lim_{x \to a} p(x) = p(a)
$$

If $r(x) = \frac{p(x)}{q(x)}$ is a rational function and $q(a)\ne 0$:

$$
\lim_{x \to a} r(x) = r(a)
$$

## Direct substitution

For continuous expressions, the fastest method is usually substitution.

Example:

$$
\lim_{x \to 2} (x^3 - 5x + 1) = 8 - 10 + 1 = -1
$$

If direct substitution gives an undefined form such as $\frac{0}{0}$, use another technique.

---

# One-sided and infinite limits

## One-sided limits

A **left-hand limit** approaches from values less than $a$:

$$
\lim_{x \to a^-} f(x)
$$

A **right-hand limit** approaches from values greater than $a$:

$$
\lim_{x \to a^+} f(x)
$$

The two-sided limit exists only if both one-sided limits exist and are equal.

$$
\lim_{x \to a} f(x) = L
\quad \text{iff} \quad
\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L
$$

Example:

$$
f(x)=
\begin{cases}
1, & x<0 \\
3, & x \ge 0
\end{cases}
$$

Then:

$$
\lim_{x \to 0^-} f(x)=1,\qquad \lim_{x \to 0^+} f(x)=3
$$

So $\lim_{x \to 0} f(x)$ does not exist.

## Infinite limits

If $f(x)$ grows without bound near $a$, we write:

$$
\lim_{x \to a} f(x) = \infty
$$

or

$$
\lim_{x \to a} f(x) = -\infty
$$

This does not mean the limit is a real number. It means the function becomes arbitrarily large in magnitude.

Example:

$$
\lim_{x \to 2^-} \frac{1}{x-2} = -\infty,\qquad
\lim_{x \to 2^+} \frac{1}{x-2} = +\infty
$$

Because the one-sided behaviors differ, there is no finite two-sided limit at $x=2$.

## When a limit does not exist

A limit fails to exist when:

- Left-hand and right-hand limits differ
- The function oscillates endlessly near the point
- The function grows without bound and no finite limit is intended

Oscillation example:

$$
\lim_{x \to 0} \sin\left(\frac{1}{x}\right)
$$

does not exist because the function keeps oscillating between $-1$ and $1$.

---

# Algebraic techniques

When direct substitution fails, simplify first.

## Factor and cancel

Use this for removable discontinuities and $\frac{0}{0}$ forms.

Example:

$$
\lim_{x \to 1} \frac{x^2-1}{x-1}
$$

Factor the numerator:

$$
\frac{(x-1)(x+1)}{x-1} = x+1
$$

So the limit is:

$$
2
$$

## Rationalize

Useful when square roots create $\frac{0}{0}$.

Example:

$$
\lim_{x \to 4} \frac{\sqrt{x}-2}{x-4}
$$

Multiply by the conjugate:

$$
\frac{\sqrt{x}-2}{x-4}\cdot\frac{\sqrt{x}+2}{\sqrt{x}+2}
= \frac{1}{\sqrt{x}+2}
$$

Thus:

$$
\lim_{x \to 4} \frac{\sqrt{x}-2}{x-4} = \frac{1}{4}
$$

## Combine fractions

If a difference of rational expressions produces $\frac{0}{0}$, use a common denominator.

## Use identities

Trig identities often reduce expressions to a standard form.

Examples:

$$
\sin^2 x + \cos^2 x = 1
$$

$$
1 - \cos x = 2\sin^2\left(\frac{x}{2}\right)
$$

## Compare dominant terms

For limits at infinity, divide by the highest power or identify the leading growth rate.

## Squeeze theorem

If

$$
g(x) \le f(x) \le h(x)
$$

and

$$
\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L
$$

then

$$
\lim_{x \to a} f(x) = L
$$

This is especially useful for oscillating functions.

Example:

$$
-|x| \le x\sin\left(\frac{1}{x}\right) \le |x|
$$

Since both bounds go to $0$ as $x \to 0$,

$$
\lim_{x \to 0} x\sin\left(\frac{1}{x}\right)=0
$$

---

# Special limits to know cold

These are standard results used constantly in calculus.

## Trigonometric limits

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

$$
\lim_{x \to 0} \frac{1-\cos x}{x^2} = \frac{1}{2}
$$

More generally, for a constant $a$:

$$
\lim_{x \to 0} \frac{\sin(ax)}{x} = a
$$

## Exponential and logarithmic limits

$$
\lim_{x \to 0} \frac{e^x-1}{x} = 1
$$

$$
\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1
$$

## Compound interest limit

$$
\lim_{x \to 0} (1+x)^{1/x} = e
$$

Equivalently:

$$
\lim_{n \to \infty}\left(1+\frac{1}{n}\right)^n = e
$$

## Why these matter

These special limits will support derivative formulas in the next calculus note; here they are treated only as limit evaluations.

---

# Continuity and discontinuities

A function is **continuous at $a$** if all three conditions hold:

1. $f(a)$ is defined
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

In symbols:

$$
\lim_{x \to a} f(x) = f(a)
$$

## Types of discontinuity

| Type                 | Description                                                  | Typical fix |
| -------------------- | ------------------------------------------------------------ | ----------- |
| Removable            | A hole; the limit exists but the function value is missing or wrong | Redefine the value |
| Jump                 | Left and right limits exist but are different                | Usually none |
| Infinite             | Function blows up near the point                             | Usually none |
| Oscillatory          | Function oscillates indefinitely near the point              | Usually none |

## Continuity facts

Polynomials are continuous everywhere.

Rational functions are continuous wherever their denominator is nonzero.

Combinations of continuous functions are continuous wherever they are defined.

If $f$ is continuous and $g$ is continuous, then:

- $f+g$ is continuous
- $fg$ is continuous
- $\frac{f}{g}$ is continuous where $g\ne 0$
- $f\circ g$ is continuous where both compositions make sense

## Why continuity helps

If a function is continuous at $a$, then the limit is immediate:

$$
\lim_{x \to a} f(x)=f(a)
$$

That is the fastest possible limit evaluation.

---

# Limits at infinity and asymptotes

Limits at infinity describe end behavior.

## Horizontal asymptotes

If

$$
\lim_{x \to \infty} f(x) = L
$$

then $y=L$ is a horizontal asymptote.

If the same happens as $x \to -\infty$, that also gives a horizontal asymptote.

Example:

$$
\lim_{x \to \infty}\frac{3x^2-1}{2x^2+5}=\frac{3}{2}
$$

So $y=\frac{3}{2}$ is a horizontal asymptote.

## Rational functions at infinity

For

$$
\frac{p(x)}{q(x)}
$$

compare degrees:

- Degree of numerator < degree of denominator: limit is $0$
- Equal degrees: limit is ratio of leading coefficients
- Numerator degree > denominator degree: no finite horizontal asymptote

## Vertical asymptotes

If $f(x)$ grows without bound near $x=a$, then $x=a$ may be a vertical asymptote.

Example:

$$
\lim_{x \to 2} \frac{1}{(x-2)^2} = +\infty
$$

So $x=2$ is a vertical asymptote.

## Oblique asymptotes

If a rational function has numerator degree exactly one higher than the denominator, polynomial division may reveal a slant asymptote.

<!-- Advanced derivative-based limit material is deferred until Derivatives.

---

# Indeterminate forms and L'HÃƒÂ´pital's rule

An **indeterminate form** is an expression that does not determine the limit by itself.

Common forms:

- $\frac{0}{0}$
- $\frac{\infty}{\infty}$
- $0\cdot\infty$
- $\infty-\infty$
- $0^0$
- $1^\infty$
- $\infty^0$

The form tells you that more work is needed; it does not tell you the answer.

## L'HÃƒÂ´pital's rule

If

$$
\lim_{x \to a} f(x)=0,\qquad \lim_{x \to a} g(x)=0
$$

or both functions approach $\pm\infty$, and the derivatives exist near $a$, then:

$$
\lim_{x \to a} \frac{f(x)}{g(x)}
=
\lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

when the right-hand limit exists and the rule's hypotheses are satisfied.

## When to use it

Use L'HÃƒÂ´pital's rule after:

- Confirming an indeterminate form
- Checking that derivatives exist where needed
- Trying simpler algebra first when possible

## When not to overuse it

L'HÃƒÂ´pital's rule is powerful, but algebra is often faster.

For example, factorization or a standard trig limit is usually cleaner than repeated differentiation.

## Example

$$
\lim_{x \to 0} \frac{e^x-1}{x}
$$

This is $\frac{0}{0}$, so L'HÃƒÂ´pital gives:

$$
\lim_{x \to 0} \frac{e^x}{1} = 1
$$

---

-->

## Derivative-based methods (preview)

Some indeterminate forms can be handled by L'HÃ´pital's rule, which uses derivatives. Learn and apply that rule with the derivative note; here, prefer algebra, standard limits, or the squeeze theorem.

---

# Problem-solving workflow

When you see a limit, use this sequence.

1. Try direct substitution.
2. If you get an ordinary number, you are done.
3. If you get $\frac{0}{0}$, simplify algebraically.
4. If radicals appear, rationalize.
5. If trig expressions appear, look for standard identities or special limits.
6. If $x \to \infty$ or $x \to -\infty$, compare leading terms.
7. If the function is piecewise, compute left and right limits separately.
8. If the expression is oscillatory or complicated, consider the squeeze theorem.
<!--
9. Use L'HÃƒÂ´pital's rule only when the hypotheses fit and a simpler approach is not better.

## Common mistakes
-->
9. Leave derivative-based methods for the Derivatives note and use them only after checking their hypotheses.

## Common mistakes

- Treating the limit as the same thing as the function value
- Cancelling terms before checking for zero denominators
- Forgetting to check both one-sided limits
- Using L'HÃƒÂ´pital's rule on a non-indeterminate form
- Replacing $x$ with $\infty$ as if it were a number
- Ignoring domain restrictions

## Fast diagnostic questions

- Is the function continuous at the point?
- Does substitution produce a valid value?
- Is this a removable discontinuity?
- Are you looking at behavior from one side only?
- Is the variable heading toward infinity?

---

# Formula sheet

## Core notation

$$
\lim_{x \to a} f(x) = L
$$

$$
\lim_{x \to a^-} f(x),\qquad \lim_{x \to a^+} f(x)
$$

## Limit laws

$$
\lim_{x \to a}[f(x)\pm g(x)] = L \pm M
$$

$$
\lim_{x \to a}[f(x)g(x)] = LM
$$

$$
\lim_{x \to a}\frac{f(x)}{g(x)} = \frac{L}{M}, \quad M\ne 0
$$

## Standard limits

$$
\lim_{x \to 0}\frac{\sin x}{x}=1
$$

$$
\lim_{x \to 0}\frac{1-\cos x}{x^2}=\frac12
$$

$$
\lim_{x \to 0}\frac{e^x-1}{x}=1
$$

$$
\lim_{x \to 0}\frac{\ln(1+x)}{x}=1
$$

$$
\lim_{n \to \infty}\left(1+\frac1n\right)^n=e
$$

## Continuity test

$$
f \text{ is continuous at } a \iff \lim_{x \to a} f(x)=f(a)
$$

## Squeeze theorem

$$
g(x)\le f(x)\le h(x),\quad \lim_{x \to a} g(x)=\lim_{x \to a} h(x)=L
$$

implies

$$
\lim_{x \to a} f(x)=L
$$

<!-- L'HÃ´pital's rule is deferred to Derivatives; this entry is retained only as a pointer.

For $\frac{0}{0}$ or $\frac{\infty}{\infty}$ forms:

$$
\lim_{x \to a}\frac{f(x)}{g(x)}=\lim_{x \to a}\frac{f'(x)}{g'(x)}
$$

when the rule applies.
-->

## What this enables

You can now evaluate limits, classify discontinuities, and test continuity. Continue to **Derivatives** to turn the limiting secant slope into an instantaneous rate of change; integration and series come after those derivative foundations.

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
