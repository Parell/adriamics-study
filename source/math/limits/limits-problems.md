<!--
id: limits-11
note: math-limits
title: "Evaluate a Polynomial Limit"
exam: exam-i
skills: [What a Limit Means, Direct Substitution]
-->

Evaluate the limit:

$$
\lim_{x \to 4} (2x^2 - 3x + 1)
$$

:::solution
Because polynomials are continuous, substitute $x=4$ directly:

$$
2(4^2) - 3(4) + 1 = 32 - 12 + 1 = 21
$$

So the limit is $21$.
:::

<!--
id: limits-12
note: math-limits
title: "Factor a Removable Discontinuity"
exam: exam-i
skills: [Algebraic Techniques, Removable Discontinuity]
-->

Evaluate the limit:

$$
\lim_{x \to 1} \frac{x^2 - 1}{x - 1}
$$

:::solution
Factor the numerator:

$$
x^2 - 1 = (x - 1)(x + 1)
$$

For $x \ne 1$,

$$
\frac{x^2 - 1}{x - 1} = x + 1
$$

Now substitute $x=1$:

$$
1 + 1 = 2
$$

So the limit is $2$.
:::

<!--
id: limits-13
note: math-limits
title: "Read a Left-Hand Limit from a Piecewise Function"
exam: exam-i
skills: [One-Sided Limits, Piecewise Functions]
-->

Let

$$
f(x)=
\begin{cases}
1, & x<2 \\
5, & x\ge 2
\end{cases}
$$

What is $\lim_{x \to 2^-} f(x)$?

:::solution
Approaching $2$ from the left means $x<2$, so the rule $f(x)=1$ applies.

Therefore,

$$
\lim_{x \to 2^-} f(x)=1
$$
:::

<!--
id: limits-14
note: math-limits
title: "Use the Sine Standard Limit"
exam: exam-i
skills: [Special Limits, Trigonometric Limits]
-->

Evaluate the limit:

$$
\lim_{x \to 0} \frac{\sin x}{x}
$$

:::solution
This is a standard limit:

$$
\lim_{x \to 0} \frac{\sin x}{x}=1
$$
:::

<!--
id: limits-15
note: math-limits
title: "Identify an Oscillating Limit"
exam: exam-i
skills: [Oscillation, Limits That Do Not Exist]
-->

Does the limit exist?

$$
\lim_{x \to 0} \sin\!\left(\frac{1}{x}\right)
$$

:::solution
No. As $x$ gets close to $0$, the inside value $\frac{1}{x}$ grows without bound, so the sine function keeps oscillating between $-1$ and $1$.

Since it does not approach a single value, the limit does not exist.
:::

<!--
id: limits-16
note: math-limits
title: "Evaluate a Rational Limit at Infinity"
exam: exam-i
skills: [Limits at Infinity, Rational Functions]
-->

Evaluate the limit:

$$
\lim_{x \to \infty} \frac{5x^2 + 1}{2x^2 - 7}
$$

:::solution
The numerator and denominator have the same degree, so the limit is the ratio of leading coefficients:

$$
\frac{5}{2}
$$

So the limit is $\frac{5}{2}$.
:::

<!--
id: limits-17
note: math-limits
title: "Recognize an Infinite Limit"
exam: exam-i
skills: [Infinite Limits, Vertical Asymptotes]
-->

Evaluate the limit:

$$
\lim_{x \to 2} \frac{1}{(x-2)^2}
$$

:::solution
As $x$ approaches $2$, the denominator $(x-2)^2$ approaches $0$ through positive values.

So the fraction grows without bound:

$$
\lim_{x \to 2} \frac{1}{(x-2)^2}=+\infty
$$

This means $x=2$ is a vertical asymptote.
:::

<!--
id: limits-18
note: math-limits
title: "Use Continuity of a Polynomial"
exam: exam-i
skills: [Continuity, Direct Substitution]
-->

Evaluate the limit:

$$
\lim_{x \to 2} (x^3 - 4x + 1)
$$

:::solution
Polynomials are continuous, so substitute $x=2$:

$$
2^3 - 4(2) + 1 = 8 - 8 + 1 = 1
$$

So the limit is $1$.
:::

<!--
id: limits-19
note: math-limits
title: "Evaluate an Exponential Standard Limit"
exam: exam-i
skills: [Special Limits, Exponential Limits]
-->

Evaluate the limit:

$$
\lim_{x \to 0} \frac{e^x - 1}{x}
$$

:::solution
This is a standard limit:

$$
\lim_{x \to 0} \frac{e^x - 1}{x}=1
$$
:::

<!--
id: limits-110
note: math-limits
title: "Rationalize a Root Limit"
exam: exam-i
skills: [Algebraic Techniques, Rationalizing]
-->

Evaluate the limit:

$$
\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9}
$$

:::solution
Multiply by the conjugate:

$$
\frac{\sqrt{x} - 3}{x - 9}\cdot \frac{\sqrt{x} + 3}{\sqrt{x} + 3}
= \frac{1}{\sqrt{x}+3}
$$

Now substitute $x=9$:

$$
\frac{1}{\sqrt{9}+3}=\frac{1}{6}
$$

So the limit is $\frac{1}{6}$.
:::

<!--
id: limits-21
note: math-limits
title: "Make a Removable Discontinuity Continuous"
exam: exam-ii
skills: [Continuity, Factoring, Removable Discontinuity]
-->

Let

$$
f(x)=
\begin{cases}
\frac{x^2-16}{x-4}, & x\ne 4 \\
k, & x=4
\end{cases}
$$

What value of $k$ makes $f$ continuous at $x=4$?

:::solution
Factor the numerator:

$$
x^2-16=(x-4)(x+4)
$$

So for $x\ne 4$,

$$
\frac{x^2-16}{x-4}=x+4
$$

The limit as $x\to 4$ is

$$
4+4=8
$$

To make the function continuous, set

$$
k=8
$$
:::

<!--
id: limits-22
note: math-limits
title: "Determine Whether a Piecewise Limit Exists"
exam: exam-ii
skills: [One-Sided Limits, Piecewise Functions, Algebraic Techniques]
-->

Let

$$
g(x)=
\begin{cases}
\frac{x^2-1}{x-1}, & x<1 \\
2x+1, & x\ge 1
\end{cases}
$$

Does $\lim_{x \to 1} g(x)$ exist?

:::solution
Find the one-sided limits.

From the left:

$$
\frac{x^2-1}{x-1}=\frac{(x-1)(x+1)}{x-1}=x+1
$$

so

$$
\lim_{x \to 1^-} g(x)=2
$$

From the right:

$$
\lim_{x \to 1^+} (2x+1)=3
$$

Since the one-sided limits are different, the two-sided limit does not exist.
:::

<!--
id: limits-23
note: math-limits
title: "Combine a Factored Limit with a Simple Substitution"
exam: exam-ii
skills: [Limit Laws, Factoring, Direct Substitution]
-->

Evaluate the limit:

$$
\lim_{x \to 2} \left(\frac{x^2-4}{x-2}+x\right)
$$

:::solution
Factor the fraction first:

$$
\frac{x^2-4}{x-2}=\frac{(x-2)(x+2)}{x-2}=x+2
$$

So the expression becomes

$$
(x+2)+x=2x+2
$$

Now substitute $x=2$:

$$
2(2)+2=6
$$

So the limit is $6$.
:::

<!--
id: limits-24
note: math-limits
title: "Use a Standard Trig Limit with a Constant"
exam: exam-ii
skills: [Special Limits, Trigonometric Limits, Limit Laws]
-->

Evaluate the limit:

$$
\lim_{x \to 0} \frac{\sin(3x)}{x}
$$

:::solution
Rewrite the expression so the standard limit appears:

$$
\frac{\sin(3x)}{x}=3\cdot \frac{\sin(3x)}{3x}
$$

Then apply the standard limit:

$$
\lim_{x \to 0} 3\cdot \frac{\sin(3x)}{3x}=3\cdot 1=3
$$

So the limit is $3$.
:::

<!--
id: limits-25
note: math-limits
title: "Apply the Squeeze Theorem"
exam: exam-ii
skills: [Squeeze Theorem, Oscillation, Limits at a Point]
-->

Evaluate the limit:

$$
\lim_{x \to 0} x^2\sin\left(\frac{1}{x}\right)
$$

:::solution
Since

$$
-1 \le \sin\left(\frac{1}{x}\right) \le 1,
$$

multiplying by $x^2 \ge 0$ gives

$$
-x^2 \le x^2\sin\left(\frac{1}{x}\right) \le x^2
$$

Both bounds go to $0$ as $x\to 0$, so by the squeeze theorem,

$$
\lim_{x \to 0} x^2\sin\left(\frac{1}{x}\right)=0
$$
:::

<!--
id: limits-26
note: math-limits
title: "Find the Horizontal Asymptote"
exam: exam-ii
skills: [Limits at Infinity, Horizontal Asymptotes, Rational Functions]
-->

Find the horizontal asymptote of

$$
f(x)=\frac{4x^3-x}{2x^3+7}
$$

:::solution
To find the horizontal asymptote, compute the limit as $x\to\infty$.

The numerator and denominator have the same degree, so the limit is the ratio of leading coefficients:

$$
\lim_{x \to \infty} \frac{4x^3-x}{2x^3+7}=\frac{4}{2}=2
$$

So the horizontal asymptote is

$$
y=2
$$
:::

<!--
id: limits-27
note: math-limits
title: "Use the Logarithmic Standard Limit"
exam: exam-ii
skills: [Special Limits, Logarithmic Limits, Limit Laws]
-->

Evaluate the limit:

$$
\lim_{x \to 0} \frac{\ln(1+2x)}{x}
$$

:::solution
Rewrite the expression to match the standard limit:

$$
\frac{\ln(1+2x)}{x}
=2\cdot \frac{\ln(1+2x)}{2x}
$$

Since

$$
\lim_{u \to 0} \frac{\ln(1+u)}{u}=1,
$$

the limit is

$$
2\cdot 1=2
$$
:::

<!--
id: limits-28
note: math-limits
title: "Choose the Value that Makes a Piecewise Function Continuous"
exam: exam-ii
skills: [Continuity, Piecewise Functions]
-->

Let

$$
h(x)=
\begin{cases}
x^2+1, & x<1 \\
k, & x=1 \\
2x^2-1, & x>1
\end{cases}
$$

What value of $k$ makes $h$ continuous at $x=1$?

:::solution
Find the one-sided limits.

From the left:

$$
\lim_{x \to 1^-}(x^2+1)=1^2+1=2
$$

From the right:

$$
\lim_{x \to 1^+}(2x^2-1)=2(1^2)-1=1
$$

The one-sided limits are different, so no value of $k$ can make the function continuous at $x=1$.
:::

<!--
id: limits-31
note: math-limits
title: "Model a Vertical Asymptote"
exam: final
skills: [Infinite Limits, Vertical Asymptotes, Modeling]
-->

A sensor reading is modeled by

$$
P(x)=\frac{1}{(x-5)^2}.
$$

What happens as $x \to 5$?

:::solution
As $x$ approaches $5$, the denominator $(x-5)^2$ approaches $0$ through positive values.

So the reading grows without bound:

$$
\lim_{x \to 5} \frac{1}{(x-5)^2}=+\infty
$$

This means $x=5$ is a vertical asymptote.
:::

<!--
id: limits-32
note: math-limits
title: "Interpret a Long-Run Ratio"
exam: final
skills: [Limits at Infinity, Horizontal Asymptotes, Rational Functions]
-->

For

$$
R(t)=\frac{7t^2-3t+1}{2t^2+5},
$$

find the value approached as $t \to \infty$.

:::solution
The numerator and denominator have the same degree, so the limit is the ratio of leading coefficients:

$$
\lim_{t \to \infty} R(t)=\frac{7}{2}
$$

So the model approaches $\frac{7}{2}$ in the long run.
:::

<!--
id: limits-33
note: math-limits
title: "Use L'Hopital's Rule Once"
exam: final
skills: ["L'Hopital's Rule", Exponential Limits]
-->

Evaluate the limit:

$$
\lim_{x \to 0} \frac{e^{2x}-1}{x}
$$

:::solution
The expression has the indeterminate form $\frac{0}{0}$, so L'Hopital's rule applies.

Differentiate the numerator and denominator:

$$
\lim_{x \to 0} \frac{2e^{2x}}{1}
$$

Now substitute $x=0$:

$$
2e^0=2
$$

So the limit is $2$.
:::

<!--
id: limits-34
note: math-limits
title: "Classify a Jump at a Pricing Threshold"
exam: final
skills: [One-Sided Limits, Piecewise Functions, Continuity]
-->

A delivery fee is modeled by

$$
F(w)=
\begin{cases}
10+2w, & w<5 \\
w+9, & w\ge 5
\end{cases}
$$

Is $F$ continuous at $w=5$?

:::solution
Compute the one-sided limits.

From the left:

$$
\lim_{w \to 5^-} F(w)=10+2(5)=20
$$

From the right:

$$
\lim_{w \to 5^+} F(w)=5+9=14
$$

The one-sided limits are different, so $F$ is not continuous at $w=5$.
This is a jump discontinuity.
:::

<!--
id: limits-35
note: math-limits
title: "Spot a Hole and Its Fill-In Value"
exam: final
skills: [Removable Discontinuity, Algebraic Techniques, Continuity]
-->

The function

$$
g(x)=\frac{x^2-9}{x-3}
$$

is undefined at $x=3$.

What type of discontinuity is this, and what value would remove it?

:::solution
Factor the numerator:

$$
x^2-9=(x-3)(x+3)
$$

So for $x\ne 3$,

$$
g(x)=x+3
$$

The limit as $x\to 3$ is

$$
3+3=6
$$

Since the limit exists but the original function is undefined at $x=3$, the discontinuity is removable.

To remove it, define $g(3)=6$.
:::

<!--
id: limits-41
note: math-limits
title: "Use the Epsilon-Delta Definition"
exam: final
skills: [Formal Definition, Epsilon-Delta]
-->

Use the epsilon-delta definition to show that

$$
\lim_{x \to 2} (3x-1)=5.
$$

Give one valid choice of $\delta$ in terms of $\varepsilon$.

:::solution
Start with the expression:

$$
|(3x-1)-5|=|3x-6|=3|x-2|
$$

To make this less than $\varepsilon$, it is enough to require

$$
3|x-2|<\varepsilon
$$

So choose

$$
\delta=\frac{\varepsilon}{3}
$$

Then whenever $0<|x-2|<\delta$,

$$
|(3x-1)-5|=3|x-2|<3\delta=\varepsilon
$$

which proves the limit.
:::

<!--
id: limits-42
note: math-limits
title: "Solve for a Continuous Piecewise Rule"
exam: final
skills: [Continuity, Piecewise Functions, Algebraic Techniques]
-->

Let

$$
f(x)=
\begin{cases}
\frac{x^2-4}{x-2}, & x<2 \\
ax+b, & x\ge 2
\end{cases}
$$

If $f$ is continuous at $x=2$ and $f(3)=10$, find $a$ and $b$.

:::solution
First find the limit from the left:

$$
\frac{x^2-4}{x-2}=\frac{(x-2)(x+2)}{x-2}=x+2
$$

So the value needed for continuity at $x=2$ is

$$
2+2=4
$$

That gives the equation

$$
2a+b=4
$$

The condition $f(3)=10$ gives

$$
3a+b=10
$$

Subtract the first equation from the second:

$$
a=6
$$

Then

$$
2(6)+b=4
$$

so

$$
b=-8
$$
:::

<!--
id: limits-43
note: math-limits
title: "Combine Squeeze and a Standard Limit"
exam: final
skills: [Squeeze Theorem, Oscillation, Limit Laws]
-->

Evaluate the limit:

$$
\lim_{x \to 0} \frac{x\sin(1/x)}{1+\cos x}
$$

:::solution
Use the squeeze theorem first on $x\sin(1/x)$:

$$
-|x| \le x\sin(1/x) \le |x|
$$

So

$$
\lim_{x \to 0} x\sin(1/x)=0
$$

Also,

$$
\lim_{x \to 0} (1+\cos x)=2
$$

Since the denominator approaches a nonzero number, the quotient approaches

$$
\frac{0}{2}=0
$$

So the limit is $0$.
:::

<!--
id: limits-44
note: math-limits
title: "Continuity and End Behavior Together"
exam: final
skills: [Continuity, Removable Discontinuity, Limits at Infinity]
-->

Let

$$
f(x)=
\begin{cases}
\frac{x^2-1}{x-1}, & x\ne 1 \\
m, & x=1
\end{cases}
$$

Find the value of $m$ that makes $f$ continuous at $x=1$, and decide whether $f$ has a horizontal asymptote.

:::solution
Factor the numerator:

$$
x^2-1=(x-1)(x+1)
$$

So for $x\ne 1$,

$$
f(x)=x+1
$$

The limit as $x\to 1$ is

$$
1+1=2
$$

So continuity at $x=1$ requires

$$
m=2
$$

For end behavior, the function behaves like $x+1$ as $x\to\infty$, so it grows without bound.

Therefore, $f$ does not have a horizontal asymptote.
:::
