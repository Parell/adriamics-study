<!--
id: derivatives-11
note: math-derivatives
title: "State the Meaning of a Derivative"
exam: exam-i
skills: [Derivative Meaning]
-->

What does $f'(a)$ tell you geometrically about the graph of $y=f(x)$?

:::solution
Geometrically, $f'(a)$ is the slope of the tangent line to the graph at $x=a$.

It also describes the function's instantaneous rate of change at that point.
:::

<!--
id: derivatives-12
note: math-derivatives
title: "Differentiate by the Definition"
exam: exam-i
skills: [Formal Definition]
-->

Let

$$
f(x)=x^2.
$$

Use the limit definition of the derivative to find $f'(x)$.

:::solution
Start with the definition:

$$
f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
$$

Substitute $f(x)=x^2$:

$$
f'(x)=\lim_{h\to 0}\frac{(x+h)^2-x^2}{h}
$$

Expand the numerator:

$$
f'(x)=\lim_{h\to 0}\frac{x^2+2xh+h^2-x^2}{h}
$$

Simplify:

$$
f'(x)=\lim_{h\to 0}\frac{2xh+h^2}{h}
=\lim_{h\to 0}(2x+h)
$$

Now take the limit:

$$
f'(x)=2x
$$
:::

<!--
id: derivatives-13
note: math-derivatives
title: "Write the Derivative in Leibniz Notation"
exam: exam-i
skills: [Notation]
-->

If $y=f(x)$, what is the common Leibniz notation for the derivative with respect to $x$?

:::solution
The derivative is written as

$$
\frac{dy}{dx}
$$

This is equivalent to $f'(x)$ when $y=f(x)$.
:::

<!--
id: derivatives-14
note: math-derivatives
title: "Differentiate a Power"
exam: exam-i
skills: [Power Rule]
-->

Find the derivative of

$$
x^7
$$

:::solution
Use the power rule:

$$
\frac{d}{dx}[x^n]=nx^{n-1}
$$

So

$$
\frac{d}{dx}[x^7]=7x^6
$$
:::

<!--
id: derivatives-15
note: math-derivatives
title: "Differentiate a Polynomial"
exam: exam-i
skills: [Power Rule, Sum and Difference]
-->

Find the derivative of

$$
3x^4-5x+8
$$

:::solution
Differentiate term by term:

$$
\frac{d}{dx}[3x^4]=12x^3
$$

$$
\frac{d}{dx}[-5x]=-5
$$

$$
\frac{d}{dx}[8]=0
$$

So the derivative is

$$
12x^3-5
$$
:::

<!--
id: derivatives-16
note: math-derivatives
title: "Differentiate an Exponential Function"
exam: exam-i
skills: [Exponential Functions]
-->

Find the derivative of

$$
2^x
$$

:::solution
Use the exponential rule:

$$
\frac{d}{dx}[a^x]=a^x\ln a
$$

With $a=2$,

$$
\frac{d}{dx}[2^x]=2^x\ln 2
$$
:::

<!--
id: derivatives-17
note: math-derivatives
title: "Differentiate a Trigonometric Sum"
exam: exam-i
skills: [Trigonometric Functions, Sum and Difference]
-->

Find the derivative of

$$
\sin x-\cos x
$$

:::solution
Differentiate each term:

$$
\frac{d}{dx}[\sin x]=\cos x
$$

and

$$
\frac{d}{dx}[-\cos x]=\sin x
$$

So the derivative is

$$
\cos x+\sin x
$$
:::

<!--
id: derivatives-18
note: math-derivatives
title: "Differentiate a Natural Logarithm"
exam: exam-i
skills: [Logarithmic Functions]
-->

Find the derivative of

$$
\ln x
$$

:::solution
Use the logarithmic derivative rule:

$$
\frac{d}{dx}[\ln x]=\frac{1}{x}
\quad \text{for } x>0
$$
:::

<!--
id: derivatives-19
note: math-derivatives
title: "Use the Product Rule"
exam: exam-i
skills: [Product Rule, Exponential Functions]
-->

Find the derivative of

$$
x^2e^x
$$

:::solution
Use the product rule:

$$
\frac{d}{dx}[fg]=f'g+fg'
$$

Let $f=x^2$ and $g=e^x$. Then $f'=2x$ and $g'=e^x$.

So

$$
\frac{d}{dx}[x^2e^x]=2xe^x+x^2e^x
$$
:::

<!--
id: derivatives-110
note: math-derivatives
title: "Use the Quotient Rule"
exam: exam-i
skills: [Quotient Rule]
-->

Find the derivative of

$$
\frac{x^2+1}{x}
$$

and simplify your answer.

:::solution
Use the quotient rule:

$$
\frac{d}{dx}\left[\frac{f}{g}\right]
=
\frac{f'g-fg'}{g^2}
$$

Let $f=x^2+1$ and $g=x$. Then $f'=2x$ and $g'=1$.

So

$$
\frac{d}{dx}\left[\frac{x^2+1}{x}\right]
=
\frac{(2x)(x)-(x^2+1)(1)}{x^2}
$$

Simplify:

$$
\frac{x^2-1}{x^2}
$$
:::

<!--
id: derivatives-21
note: math-derivatives
title: "Apply the Chain Rule to a Power"
exam: exam-ii
skills: [Chain Rule, Power Rule]
-->

Find the derivative of

$$
(3x^2+1)^5
$$

:::solution
Use the chain rule. Differentiate the outside first and then multiply by the derivative of the inside:

$$
\frac{d}{dx}[(3x^2+1)^5]
=5(3x^2+1)^4(6x)
$$

So the derivative is

$$
30x(3x^2+1)^4
$$
:::

<!--
id: derivatives-22
note: math-derivatives
title: "Apply the Chain Rule to a Trigonometric Function"
exam: exam-ii
skills: [Chain Rule, Trigonometric Functions]
-->

Find the derivative of

$$
\sin(x^3)
$$

:::solution
Treat the inside as the inner function. The derivative of $\sin u$ is $\cos u$, and the derivative of $x^3$ is $3x^2$.

So

$$
\frac{d}{dx}[\sin(x^3)]
=\cos(x^3)\cdot 3x^2
$$

Thus,

$$
3x^2\cos(x^3)
$$
:::

<!--
id: derivatives-23
note: math-derivatives
title: "Differentiate a Logarithm of a Composite Function"
exam: exam-ii
skills: [Chain Rule, Logarithmic Functions]
-->

Find the derivative of

$$
\ln(2x^2-7x+4)
$$

:::solution
Use the chain rule with $u=2x^2-7x+4$.

The derivative of $\ln u$ is $\frac{1}{u}u'$.

Here,

$$
u'=4x-7
$$

So

$$
\frac{d}{dx}[\ln(2x^2-7x+4)]
=\frac{4x-7}{2x^2-7x+4}
$$
:::

<!--
id: derivatives-24
note: math-derivatives
title: "Differentiate an Inverse Trig Function"
exam: exam-ii
skills: [Chain Rule, Inverse Trigonometric Functions]
-->

Find the derivative of

$$
\arctan(3x)
$$

:::solution
Use the inverse trig rule and the chain rule:

$$
\frac{d}{dx}[\arctan u]=\frac{u'}{1+u^2}
$$

Here $u=3x$, so $u'=3$.

Therefore,

$$
\frac{d}{dx}[\arctan(3x)]
=\frac{3}{1+(3x)^2}
=\frac{3}{1+9x^2}
$$
:::

<!--
id: derivatives-25
note: math-derivatives
title: "Implicit Differentiation with Mixed Terms"
exam: exam-ii
skills: [Implicit Differentiation, Product Rule]
-->

Differentiate implicitly and solve for $\frac{dy}{dx}$:

$$
x^2+xy+y^2=7
$$

:::solution
Differentiate each term with respect to $x$:

$$
2x+\frac{d}{dx}[xy]+\frac{d}{dx}[y^2]=0
$$

Use the product rule on $xy$ and the chain rule on $y^2$:

$$
2x+y+x\frac{dy}{dx}+2y\frac{dy}{dx}=0
$$

Group the $\frac{dy}{dx}$ terms:

$$
\left(x+2y\right)\frac{dy}{dx}=-(2x+y)
$$

So

$$
\frac{dy}{dx}=-\frac{2x+y}{x+2y}
$$
:::

<!--
id: derivatives-26
note: math-derivatives
title: "Find Velocity and Acceleration"
exam: exam-ii
skills: [Higher-Order Derivatives, Motion]
-->

Let

$$
s(t)=t^3-6t^2+9t
$$

Find the velocity $v(t)$, the acceleration $a(t)$, and the value of $a(2)$.

:::solution
Velocity is the first derivative of position:

$$
v(t)=s'(t)=3t^2-12t+9
$$

Acceleration is the derivative of velocity:

$$
a(t)=v'(t)=6t-12
$$

Now evaluate at $t=2$:

$$
a(2)=6(2)-12=0
$$
:::

<!--
id: derivatives-27
note: math-derivatives
title: "Estimate a Square Root with Linearization"
exam: exam-ii
skills: [Linear Approximation]
-->

Use the linear approximation of $f(x)=\sqrt{x}$ at $x=16$ to estimate $\sqrt{16.2}$.

:::solution
For $f(x)=\sqrt{x}$,

$$
f(16)=4
$$

and

$$
f'(x)=\frac{1}{2\sqrt{x}}
$$

so

$$
f'(16)=\frac{1}{8}
$$

The linearization at $x=16$ is

$$
L(x)=4+\frac{1}{8}(x-16)
$$

Evaluate at $x=16.2$:

$$
L(16.2)=4+\frac{1}{8}(0.2)=4.025
$$

So

$$
\sqrt{16.2}\approx 4.025
$$
:::

<!--
id: derivatives-28
note: math-derivatives
title: "Find Where a Function Increases"
exam: exam-ii
skills: [Increasing and Decreasing, Critical Points]
-->

Suppose

$$
f'(x)=3(x-2)(x+1).
$$

On which intervals is $f$ increasing and on which intervals is it decreasing?

:::solution
First find the critical numbers from $f'(x)=0$:

$$
3(x-2)(x+1)=0
$$

So the critical numbers are $x=-1$ and $x=2$.

Check the sign of $f'(x)$ on each interval:

- If $x<-1$, then both factors are negative, so $f'(x)>0$.
- If $-1<x<2$, then one factor is negative and one is positive, so $f'(x)<0$.
- If $x>2$, then both factors are positive, so $f'(x)>0$.

Therefore, $f$ is increasing on

$$
(-\infty,-1)\cup(2,\infty)
$$

and decreasing on

$$
(-1,2).
$$
:::

<!--
id: derivatives-31
note: math-derivatives
title: "Related Rates for the Area of a Circle"
exam: final
skills: [Related Rates]
-->

A circle's radius is increasing at a rate of $0.5$ cm/s. How fast is the area changing when the radius is $10$ cm?

:::solution
Use the area formula

$$
A=\pi r^2
$$

Differentiate with respect to time:

$$
\frac{dA}{dt}=2\pi r\frac{dr}{dt}
$$

Substitute $r=10$ and $\frac{dr}{dt}=0.5$:

$$
\frac{dA}{dt}=2\pi(10)(0.5)=10\pi
$$

So the area is changing at

$$
10\pi \text{ cm}^2/\text{s}
$$
:::

<!--
id: derivatives-32
note: math-derivatives
title: "Tangent Line from an Implicit Curve"
exam: final
skills: [Implicit Differentiation, Tangent Lines]
-->

Find the equation of the tangent line to

$$
x^2+y^2=34
$$

at the point $(3,5)$.

:::solution
Differentiate implicitly:

$$
2x+2y\frac{dy}{dx}=0
$$

Solve for the derivative:

$$
\frac{dy}{dx}=-\frac{x}{y}
$$

At $(3,5)$, the slope is

$$
\frac{dy}{dx}=-\frac{3}{5}
$$

Use point-slope form:

$$
y-5=-\frac{3}{5}(x-3)
$$
:::

<!--
id: derivatives-33
note: math-derivatives
title: "Maximize the Area of a Rectangle"
exam: final
skills: [Optimization]
-->

A rectangle has perimeter $40$ m. What dimensions give the maximum area?

:::solution
Let the side lengths be $x$ and $y$.

The perimeter condition is

$$
2x+2y=40
$$

so

$$
y=20-x
$$

The area is

$$
A(x)=x(20-x)=20x-x^2
$$

Differentiate:

$$
A'(x)=20-2x
$$

Set the derivative equal to zero:

$$
20-2x=0
\quad\Rightarrow\quad
x=10
$$

Then

$$
y=20-10=10
$$

So the rectangle with maximum area is a $10$ m by $10$ m square.
:::

<!--
id: derivatives-34
note: math-derivatives
title: "Estimate Measurement Error with Differentials"
exam: final
skills: [Differentials, Error Estimation]
-->

A circular disk has radius $10$ cm, and the radius measurement may be off by about $0.05$ cm. Use differentials to estimate the possible error in the area.

:::solution
For a circle,

$$
A=\pi r^2
$$

so

$$
dA=2\pi r\,dr
$$

Substitute $r=10$ and $dr=0.05$:

$$
dA=2\pi(10)(0.05)=\pi
$$

So the area may be off by about

$$
\pi \text{ cm}^2
$$
which is approximately $3.14\text{ cm}^2$.
:::

<!--
id: derivatives-35
note: math-derivatives
title: "Take One Newton Step"
exam: final
skills: [Newton's Method]
-->

Use one step of Newton's method to approximate the root of

$$
x^3-2=0
$$

starting from $x_0=1$.

:::solution
Let

$$
f(x)=x^3-2
$$

Then

$$
f'(x)=3x^2
$$

Newton's method gives

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}
$$

With $x_0=1$:

$$
x_1=1-\frac{1^3-2}{3(1)^2}
$$

$$
x_1=1-\frac{-1}{3}=1+\frac{1}{3}=\frac{4}{3}
$$

So the next approximation is

$$
\frac{4}{3}
$$
:::

<!--
id: derivatives-41
note: math-derivatives
title: "Show an Absolute Value Function Is Not Differentiable"
exam: final
skills: [Continuity and Differentiability, Formal Definition]
-->

Show that

$$
f(x)=|x|
$$

is continuous at $x=0$ but not differentiable there.

:::solution
First check continuity:

$$
\lim_{x\to 0}|x|=0=f(0)
$$

so $f$ is continuous at $0$.

Now check differentiability using one-sided slopes. For $x>0$, $f(x)=x$, so the right-hand derivative at $0$ is

$$
\lim_{x\to 0^+}\frac{|x|-|0|}{x-0}
=\lim_{x\to 0^+}\frac{x}{x}=1
$$

For $x<0$, $f(x)=-x$, so the left-hand derivative at $0$ is

$$
\lim_{x\to 0^-}\frac{|x|-|0|}{x-0}
=\lim_{x\to 0^-}\frac{-x}{x}=-1
$$

The one-sided derivatives are not equal, so $f'(0)$ does not exist.
:::

<!--
id: derivatives-42
note: math-derivatives
title: "Classify a Cubic Using Derivatives"
exam: final
skills: [Critical Points, Concavity, Higher-Order Derivatives]
-->

For

$$
f(x)=x^3-3x,
$$

find the critical points, classify them, and identify an inflection point.

:::solution
Differentiate once:

$$
f'(x)=3x^2-3=3(x-1)(x+1)
$$

So the critical points occur at

$$
x=-1 \quad \text{and} \quad x=1
$$

Differentiate again:

$$
f''(x)=6x
$$

At $x=-1$,

$$
f''(-1)=-6<0
$$

so $x=-1$ is a local maximum.

At $x=1$,

$$
f''(1)=6>0
$$

so $x=1$ is a local minimum.

For an inflection point, check where concavity changes. Since

$$
f''(x)=6x
$$

changes sign at $x=0$, there is an inflection point at $x=0$.
:::

<!--
id: derivatives-43
note: math-derivatives
title: "Maximize Area with a Fence and a Wall"
exam: final
skills: [Optimization]
-->

A rectangular pen is built against a straight wall, so only three sides need fencing. If $24$ m of fencing are available, what dimensions maximize the area?

:::solution
Let $x$ be the two equal sides perpendicular to the wall, and let $y$ be the side parallel to the wall.

The fencing constraint is

$$
2x+y=24
$$

so

$$
y=24-2x
$$

The area is

$$
A(x)=xy=x(24-2x)=24x-2x^2
$$

Differentiate:

$$
A'(x)=24-4x
$$

Set the derivative equal to zero:

$$
24-4x=0
\quad\Rightarrow\quad
x=6
$$

Then

$$
y=24-2(6)=12
$$

So the maximum area occurs for dimensions $6$ m by $6$ m by $12$ m, with the $12$ m side against the wall.
:::

<!--
id: derivatives-44
note: math-derivatives
title: "Find a Tangent Line on a Mixed Implicit Curve"
exam: final
skills: [Implicit Differentiation, Product Rule, Tangent Lines]
-->

For the curve

$$
x^2+xy+y^2=7,
$$

find $\frac{dy}{dx}$ and the equation of the tangent line at $(2,1)$.

:::solution
Differentiate implicitly:

$$
2x+\frac{d}{dx}[xy]+2y\frac{dy}{dx}=0
$$

Use the product rule on $xy$:

$$
2x+y+x\frac{dy}{dx}+2y\frac{dy}{dx}=0
$$

Group the derivative terms:

$$
(x+2y)\frac{dy}{dx}=-(2x+y)
$$

So

$$
\frac{dy}{dx}=-\frac{2x+y}{x+2y}
$$

At $(2,1)$,

$$
\frac{dy}{dx}=-\frac{2(2)+1}{2+2(1)}=-\frac{5}{4}
$$

Use point-slope form:

$$
y-1=-\frac{5}{4}(x-2)
$$
:::
