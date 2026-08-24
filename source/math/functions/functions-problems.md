<!--
id: math-functions-11
note: math-functions
title: "Decide Whether a Relation Is a Function"
exam: exam-i
skills: [Function Definition, Ordered Pairs]
-->

Is the relation below a function?

$$
\{(1,4), (2,7), (3,7), (3,9)\}
$$

:::solution
No. A function must assign each input exactly one output.

Here the input $3$ is paired with two different outputs, $7$ and $9$, so the relation is not a function.
:::

<!--
id: math-functions-12
note: math-functions
title: "Find a Domain Restriction"
exam: exam-i
skills: [Domain, Rational Functions]
-->

For

$$
f(x) = \frac{1}{x - 3},
$$

what value of $x$ is excluded from the domain?

:::solution
The denominator cannot be zero, so solve

$$
x - 3 = 0
$$

which gives

$$
x = 3.
$$

So the domain excludes $x = 3$.
:::

<!--
id: math-functions-13
note: math-functions
title: "Evaluate a Polynomial Function"
exam: exam-i
skills: [Evaluating functions]
-->

If

$$
f(x) = 2x^2 - 3x + 1,
$$

what is $f(4)$?

:::solution
Substitute $4$ for $x$:

$$
f(4) = 2(4)^2 - 3(4) + 1
$$

Evaluate:

$$
f(4) = 2(16) - 12 + 1 = 32 - 12 + 1 = 21
$$
:::

<!--
id: math-functions-14
note: math-functions
title: "Read a Function Value from a Table"
exam: exam-i
skills: [Evaluating functions, Tables]
-->

Use the table to find $f(3)$.

$$
\begin{array}{c|cccc}
x & -2 & 0 & 3 & 5 \\
\hline
f(x) & 7 & 1 & -4 & 2
\end{array}
$$

:::solution
Look at the row where $x = 3$.

The corresponding output is

$$
f(3) = -4.
$$
:::

<!--
id: math-functions-15
note: math-functions
title: "Check an Even-Root Domain"
exam: exam-i
skills: [Domain, Radical Functions]
-->

For

$$
g(x) = \sqrt{8 - x},
$$

what values of $x$ are allowed?

:::solution
The expression inside the square root must be nonnegative:

$$
8 - x \ge 0
$$

Solve for $x$:

$$
x \le 8
$$

So the domain is all real numbers less than or equal to $8$.
:::

<!--
id: math-functions-16
note: math-functions
title: "Evaluate an Exponential at Zero"
exam: exam-i
skills: [Exponential Functions]
-->

If

$$
h(x) = 5^x,
$$

what is $h(0)$?

:::solution
Substitute $0$ for $x$:

$$
h(0) = 5^0
$$

Any nonzero number raised to the $0$ power equals $1$, so

$$
h(0) = 1.
$$
:::

<!--
id: math-functions-17
note: math-functions
title: "Check Whether a Function Has an Inverse"
exam: exam-i
skills: [One-to-one, Inverse functions]
-->

Suppose a function satisfies

$$
f(1) = 4 \quad \text{and} \quad f(2) = 4.
$$

Can $f$ have an inverse on its full domain?

:::solution
No. A function must be one-to-one to have an inverse on its full domain.

Here two different inputs, $1$ and $2$, produce the same output, $4$, so the function is not one-to-one.
:::

<!--
id: math-functions-18
note: math-functions
title: "Evaluate a Piecewise Function"
exam: exam-i
skills: [Piecewise functions, Evaluating functions]
-->

Let

$$
p(x) =
\begin{cases}
x + 2, & x < 0 \\
3x - 1, & x \ge 0
\end{cases}
$$

What is $p(-3)$?

:::solution
Since $-3 < 0$, use the first rule:

$$
p(-3) = -3 + 2 = -1
$$
:::

<!--
id: math-functions-19
note: math-functions
title: "Find the Range of a Square Function"
exam: exam-i
skills: [Range, Square Functions]
-->

For the function

$$
f(x) = x^2
$$

with domain and codomain $\mathbb{R}$, what is the range?

:::solution
Squares are never negative, so every output satisfies

$$
f(x) \ge 0.
$$

Also, every nonnegative number occurs as a square of some real number. Therefore the range is

$$
[0,\infty).
$$
:::

<!--
id: math-functions-110
note: math-functions
title: "Find the Domain of a Logarithmic Function"
exam: exam-i
skills: [Logarithms, Domain]
-->

For

$$
\log_2(x - 5),
$$

what restriction must $x$ satisfy?

:::solution
The argument of a logarithm must be positive:

$$
x - 5 > 0
$$

So

$$
x > 5.
$$
:::

<!--
id: math-functions-21
note: math-functions
title: "Compose Two Functions"
exam: exam-ii
skills: [Composition, Evaluating functions]
-->

Let

$$
f(x) = x^2 + 1
$$

and

$$
g(x) = 3x - 2.
$$

Find $(f \circ g)(x)$.

:::solution
By definition,

$$
(f \circ g)(x) = f(g(x)).
$$

Substitute $g(x) = 3x - 2$ into $f$:

$$
f(g(x)) = (3x - 2)^2 + 1
$$

Expand:

$$
(3x - 2)^2 + 1 = 9x^2 - 12x + 4 + 1 = 9x^2 - 12x + 5
$$
:::

<!--
id: math-functions-22
note: math-functions
title: "Find the Inverse of a Linear Function"
exam: exam-ii
skills: [Inverse functions, Linear Functions]
-->

If

$$
f(x) = 4x - 9,
$$

find $f^{-1}(x)$.

:::solution
Write

$$
y = 4x - 9.
$$

Swap $x$ and $y$:

$$
x = 4y - 9.
$$

Solve for $y$:

$$
x + 9 = 4y
$$

$$
y = \frac{x + 9}{4}
$$

So

$$
f^{-1}(x) = \frac{x + 9}{4}.
$$
:::

<!--
id: math-functions-23
note: math-functions
title: "Find the Range of a Shifted Square"
exam: exam-ii
skills: [Range, Transformations]
-->

If

$$
f(x) = x^2 - 6,
$$

what is the range of $f$?

:::solution
The graph of $x^2$ has minimum value $0$.

Shifting it down by $6$ moves the minimum to $-6$.

So the range is

$$
[-6,\infty).
$$
:::

<!--
id: math-functions-24
note: math-functions
title: "Simplify a Rational Function and Evaluate It"
exam: exam-ii
skills: [Rational Functions, Distributing and factoring]
-->

For $x \ne 4$, simplify

$$
\frac{x^2 - 16}{x - 4}
$$

and then evaluate the simplified expression at $x = 7$.

:::solution
Factor the numerator:

$$
x^2 - 16 = (x - 4)(x + 4)
$$

So for $x \ne 4$,

$$
\frac{x^2 - 16}{x - 4} = x + 4.
$$

Now substitute $x = 7$:

$$
7 + 4 = 11
$$
:::

<!--
id: math-functions-25
note: math-functions
title: "Find an Average Rate of Change"
exam: exam-ii
skills: [Average rate of change, Evaluating functions]
-->

For

$$
f(x) = x^2,
$$

find the average rate of change from $x = 1$ to $x = 4$.

:::solution
Use the average rate of change formula:

$$
\frac{f(4) - f(1)}{4 - 1}
$$

Compute the function values:

$$
f(4) = 16 \quad \text{and} \quad f(1) = 1
$$

Then

$$
\frac{16 - 1}{3} = \frac{15}{3} = 5
$$
:::

<!--
id: math-functions-26
note: math-functions
title: "Make a Piecewise Function Continuous"
exam: exam-ii
skills: [Piecewise functions, Continuity]
-->

Choose $a$ so that the function is continuous at $x = 2$:

$$
f(x) =
\begin{cases}
ax + 1, & x < 2 \\
5x - 3, & x \ge 2
\end{cases}
$$

:::solution
For continuity at $x = 2$, the left and right values must match.

The right-hand value at $x = 2$ is

$$
5(2) - 3 = 7.
$$

So the left-hand expression must also equal $7$ at $x = 2$:

$$
2a + 1 = 7
$$

$$
2a = 6
$$

$$
a = 3
$$
:::

<!--
id: math-functions-27
note: math-functions
title: "Determine the End Behavior of a Polynomial"
exam: exam-ii
skills: [End behavior, Polynomials]
-->

Describe the end behavior of

$$
f(x) = -2x^5 + x^3.
$$

:::solution
The leading term is $-2x^5$, so it determines the end behavior.

As $x \to \infty$,

$$
f(x) \to -\infty.
$$

As $x \to -\infty$,

$$
f(x) \to \infty.
$$
:::

<!--
id: math-functions-28
note: math-functions
title: "Describe Multiple Transformations"
exam: exam-ii
skills: [Transformations, Symmetry]
-->

Let

$$
f(x) = x^2
$$

and define

$$
g(x) = -2f(x + 3) + 1.
$$

Describe the transformations that take $f$ to $g$.

:::solution
Read the expression from the inside out.

$$
f(x + 3)
$$

moves the graph left $3$ units.

The factor $-2$ reflects the graph across the $x$-axis and stretches it vertically by a factor of $2$.

The $+1$ shifts the graph up $1$ unit.

So the transformations are:

- left $3$
- vertical stretch by $2$
- reflect across the $x$-axis
- up $1$
:::

<!--
id: math-functions-31
note: math-functions
title: "Model a Membership Fee"
exam: final
skills: [Linear Models, Functions]
-->

A music studio charges a $25 registration fee plus $18 per lesson.

If the total bill is $97, how many lessons did the student take?

:::solution
Let $l$ be the number of lessons. Set up the equation:

$$
25 + 18l = 97
$$

Subtract $25$:

$$
18l = 72
$$

Divide by $18$:

$$
l = 4
$$
:::

<!--
id: math-functions-32
note: math-functions
title: "Interpret an Average Rate of Change"
exam: final
skills: [Average rate of change, Units]
-->

The height of a plant is modeled by

$$
h(t) = 2t^2 + 3,
$$

where $h$ is measured in centimeters and $t$ is measured in weeks.

Find the average rate of change from $t = 1$ to $t = 4$.

:::solution
Use the average rate of change formula:

$$
\frac{h(4) - h(1)}{4 - 1}
$$

Compute the values:

$$
h(4) = 2(16) + 3 = 35
$$

$$
h(1) = 2(1) + 3 = 5
$$

So

$$
\frac{35 - 5}{3} = \frac{30}{3} = 10
$$

The average rate of change is $10$ centimeters per week.
:::

<!--
id: math-functions-33
note: math-functions
title: "Write an Exponential Growth Model"
exam: final
skills: [Exponential Functions, Modeling]
-->

A bacteria culture starts with $600$ cells and doubles every hour.

Write a function for the number of cells after $t$ hours, and find the number after $5$ hours.

:::solution
Doubling every hour means the model is exponential:

$$
N(t) = 600 \cdot 2^t
$$

Now evaluate at $t = 5$:

$$
N(5) = 600 \cdot 2^5 = 600 \cdot 32 = 19200
$$
:::

<!--
id: math-functions-34
note: math-functions
title: "Use a Piecewise Pricing Rule"
exam: final
skills: [Piecewise functions, Modeling]
-->

A parking garage charges $6 for the first hour and $2.50 for each additional hour.

How much does it cost to park for $5$ hours?

:::solution
After the first hour, there are $4$ additional hours.

The total cost is

$$
6 + 4(2.50) = 6 + 10 = 16
$$

So the cost is $\$16$.
:::

<!--
id: math-functions-35
note: math-functions
title: "Use a Conversion Function"
exam: final
skills: [Inverse functions, Modeling]
-->

The function

$$
C(F) = \frac{5}{9}(F - 32)
$$

converts Fahrenheit to Celsius.

What Fahrenheit temperature corresponds to $20^\circ\text{C}$?

:::solution
Set $C(F) = 20$:

$$
20 = \frac{5}{9}(F - 32)
$$

Multiply both sides by $\frac{9}{5}$:

$$
36 = F - 32
$$

Add $32$:

$$
F = 68
$$

So the temperature is $68^\circ\text{F}$.
:::

<!--
id: math-functions-41
note: math-functions
title: "Find the Inverse of a Restricted Quadratic"
exam: final
skills: [Inverse functions, Quadratics]
-->

Let

$$
f(x) = (x - 2)^2
$$

with domain $x \ge 2$.

Find $f^{-1}(x)$.

:::solution
Write

$$
y = (x - 2)^2.
$$

Swap $x$ and $y$:

$$
x = (y - 2)^2.
$$

Because the original domain is $y \ge 2$, choose the positive square root:

$$
y - 2 = \sqrt{x}
$$

So

$$
f^{-1}(x) = 2 + \sqrt{x}.
$$

The domain of the inverse is $x \ge 0$.
:::

<!--
id: math-functions-42
note: math-functions
title: "Find the Domain of a Composite Function"
exam: final
skills: [Composition, Domain]
-->

Let

$$
f(x) = \sqrt{x - 1}
$$

and

$$
g(x) = \log_2(x).
$$

Find the domain of $(g \circ f)(x)$.

:::solution
The composition is

$$
(g \circ f)(x) = \log_2\!\big(\sqrt{x - 1}\big).
$$

Two conditions must hold:

1. $x - 1 \ge 0$ so that the square root is defined.
2. $\sqrt{x - 1} > 0$ because the input of a logarithm must be positive.

The second condition means

$$
x - 1 > 0,
$$

so the domain is

$$
x > 1.
$$
:::

<!--
id: math-functions-43
note: math-functions
title: "Find the Inverse of a Rational Function with a Hole"
exam: final
skills: [Rational Functions, Inverse functions]
-->

Consider the function

$$
f(x) = \frac{x^2 - 9}{x - 3},
$$

with domain $x \ne 3$.

Does $f$ have an inverse on its domain? If so, find it and state its domain.

:::solution
Factor the numerator:

$$
x^2 - 9 = (x - 3)(x + 3)
$$

So for $x \ne 3$,

$$
f(x) = x + 3.
$$

This is one-to-one, so the function does have an inverse on its domain.

To find it, write

$$
y = x + 3
$$

and swap variables:

$$
x = y + 3.
$$

Solve for $y$:

$$
y = x - 3.
$$

So

$$
f^{-1}(x) = x - 3.
$$

Since the original range excludes $6$, the domain of the inverse is $x \ne 6$.
:::

<!--
id: math-functions-44
note: math-functions
title: "Classify Compositions Using Symmetry"
exam: final
skills: [Composition, Symmetry]
-->

Suppose $f$ is even and $g$ is odd.

What can you say about $f \circ g$ and $g \circ f$?

:::solution
Use the definitions of even and odd functions.

For $f \circ g$:

$$
(f \circ g)(-x) = f(g(-x)) = f(-g(x)) = f(g(x))
$$

because $g$ is odd and $f$ is even. So $f \circ g$ is even.

For $g \circ f$:

$$
(g \circ f)(-x) = g(f(-x)) = g(f(x)) = (g \circ f)(x)
$$

because $f$ is even, so the input to $g$ does not change when $x$ is replaced by $-x$. Thus $g \circ f$ is also even.
:::

<!--
id: math-functions-51
note: math-functions
title: "Choose a Modeling Goal"
exam: final
skills: [Modeling goals, Functions]
-->

A model uses current sales data to estimate next month's demand. What is its main goal?

:::solution
Prediction: the model estimates future behavior from present information.
:::

<!--
id: math-functions-52
note: math-functions
title: "Build a Linear Cost Model"
exam: final
skills: [Linear Models, Functions]
-->

A service charges a $25 registration fee plus $18 per lesson. Write the cost function and find the cost of 4 lessons.

:::solution
Let $n$ be the number of lessons. The model is $C(n)=25+18n$, so $C(4)=25+72=97$.
:::

<!--
id: math-functions-53
note: math-functions
title: "Compute Model Error"
exam: final
skills: [Absolute error, Relative error]
-->

A model predicts $94$ when the true value is $100$. Find the absolute and relative errors.

:::solution
The absolute error is $|94-100|=6$. The relative error is $6/100=0.06$, or $6\%$.
:::

<!--
id: math-functions-54
note: math-functions
title: "Write an Exponential Growth Model"
exam: final
skills: [Exponential Functions, Modeling]
-->

A culture starts with $600$ cells and doubles every hour. Write a function for the number of cells after $t$ hours and find the number after 5 hours.

:::solution
The model is $N(t)=600\cdot2^t$. Thus $N(5)=600\cdot32=19{,}200$ cells.
:::
