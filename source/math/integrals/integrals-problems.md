<!--
id: integrals-11
note: math-integrals
title: "Use the Power Rule and Linearity"
exam: exam-i
skills: [Power Rule, Linearity]
-->

Evaluate the indefinite integral:

$$
\int \left(4x^3 - 6x + 2\right)\,dx
$$

:::solution
Integrate term by term:

$$
\int 4x^3\,dx = x^4
$$

$$
\int (-6x)\,dx = -3x^2
$$

$$
\int 2\,dx = 2x
$$

So,

$$
\int \left(4x^3 - 6x + 2\right)\,dx = x^4 - 3x^2 + 2x + C.
$$
:::

<!--
id: integrals-12
note: math-integrals
title: "Differentiate an Accumulation Function"
exam: exam-i
skills: [Fundamental Theorem of Calculus, Accumulation Functions]
-->

Let

$$
F(x) = \int_0^x (t^2 + 3t)\,dt.
$$

Find $F'(x)$.

:::solution
By Part 1 of the Fundamental Theorem of Calculus,

$$
F'(x) = x^2 + 3x.
$$
:::

<!--
id: integrals-13
note: math-integrals
title: "Evaluate a Definite Integral with the FTC"
exam: exam-i
skills: [Fundamental Theorem of Calculus, Definite Integrals]
-->

Compute:

$$
\int_0^2 \left(3x^2 - 4x + 1\right)\,dx
$$

:::solution
An antiderivative is

$$
x^3 - 2x^2 + x.
$$

Now apply Part 2 of the Fundamental Theorem of Calculus:

$$
\int_0^2 \left(3x^2 - 4x + 1\right)\,dx
= \left[x^3 - 2x^2 + x\right]_0^2
$$

$$
= (8 - 8 + 2) - 0 = 2.
$$
:::

<!--
id: integrals-14
note: math-integrals
title: "Find an Average Value"
exam: exam-i
skills: [Average Value, Definite Integrals]
-->

Find the average value of

$$
f(x) = x^2
$$

on the interval $[0,3]$.

:::solution
Use the average value formula:

$$
f_{\text{avg}} = \frac{1}{3-0}\int_0^3 x^2\,dx.
$$

Compute the integral:

$$
\int_0^3 x^2\,dx = \left[\frac{x^3}{3}\right]_0^3 = 9.
$$

So the average value is

$$
\frac{1}{3}\cdot 9 = 3.
$$
:::

<!--
id: integrals-15
note: math-integrals
title: "Use Substitution on a Composite Function"
exam: exam-i
skills: [Substitution, Antiderivatives]
-->

Evaluate:

$$
\int 2x\cos(x^2)\,dx
$$

:::solution
Let

$$
u = x^2, \qquad du = 2x\,dx.
$$

Then the integral becomes

$$
\int \cos u\,du = \sin u + C.
$$

Substitute back:

$$
\int 2x\cos(x^2)\,dx = \sin(x^2) + C.
$$
:::

<!--
id: integrals-16
note: math-integrals
title: "Use Integration by Parts on a Product"
exam: exam-i
skills: [Integration by Parts, Exponential Functions]
-->

Evaluate:

$$
\int x e^x\,dx
$$

:::solution
Use integration by parts with

$$
u = x, \qquad dv = e^x\,dx.
$$

Then

$$
du = dx, \qquad v = e^x.
$$

So

$$
\int x e^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C.
$$
:::

<!--
id: integrals-17
note: math-integrals
title: "Decompose a Simple Rational Integral"
exam: exam-i
skills: [Partial Fractions, Rational Functions]
-->

Evaluate:

$$
\int \frac{1}{x(x+2)}\,dx
$$

:::solution
Write the integrand as partial fractions:

$$
\frac{1}{x(x+2)} = \frac{A}{x} + \frac{B}{x+2}.
$$

Multiply by $x(x+2)$:

$$
1 = A(x+2) + Bx.
$$

Set $x=0$ to get $1=2A$, so $A=\frac12$.  
Set $x=-2$ to get $1=-2B$, so $B=-\frac12$.

Thus

$$
\frac{1}{x(x+2)} = \frac{1}{2x} - \frac{1}{2(x+2)}.
$$

Integrate:

$$
\int \frac{1}{x(x+2)}\,dx
= \frac12 \ln|x| - \frac12 \ln|x+2| + C.
$$
:::

<!--
id: integrals-18
note: math-integrals
title: "Use a Trig Identity Before Integrating"
exam: exam-i
skills: [Trig Identities, Definite Integrals]
-->

Compute:

$$
\int_0^{\pi/2} \sin^2 x\,dx
$$

:::solution
Use the identity

$$
\sin^2 x = \frac{1-\cos(2x)}{2}.
$$

Then

$$
\int_0^{\pi/2} \sin^2 x\,dx
= \frac12 \int_0^{\pi/2} \left(1-\cos(2x)\right)\,dx.
$$

Evaluate:

$$
\frac12\left[x - \frac{\sin(2x)}{2}\right]_0^{\pi/2}
= \frac12\left(\frac{\pi}{2}\right)
= \frac{\pi}{4}.
$$
:::

<!--
id: integrals-19
note: math-integrals
title: "Test an Improper Integral"
exam: exam-i
skills: [Improper Integrals, Convergence]
-->

Evaluate the improper integral:

$$
\int_1^\infty \frac{1}{x^3}\,dx
$$

:::solution
Write it as a limit:

$$
\int_1^\infty \frac{1}{x^3}\,dx
= \lim_{b\to\infty}\int_1^b x^{-3}\,dx.
$$

An antiderivative is

$$
\int x^{-3}\,dx = -\frac{1}{2x^2}.
$$

So

$$
\lim_{b\to\infty}\left[-\frac{1}{2x^2}\right]_1^b
= \lim_{b\to\infty}\left(-\frac{1}{2b^2}+\frac12\right)
= \frac12.
$$

The integral converges to $\frac12$.
:::

<!--
id: integrals-110
note: math-integrals
title: "Estimate an Integral with the Trapezoidal Rule"
exam: exam-i
skills: [Trapezoidal Rule, Numerical Integration]
-->

Use the trapezoidal rule with $n=2$ to approximate

$$
\int_0^2 (x^2+1)\,dx.
$$

:::solution
With $n=2$,

$$
\Delta x = \frac{2-0}{2} = 1.
$$

The sample points are $x_0=0$, $x_1=1$, and $x_2=2$.

Evaluate the function:

$$
f(0)=1,\qquad f(1)=2,\qquad f(2)=5.
$$

Apply the trapezoidal rule:

$$
\int_0^2 (x^2+1)\,dx \approx \frac{\Delta x}{2}\left[f(0)+2f(1)+f(2)\right].
$$

So

$$
\frac{1}{2}(1+2\cdot 2+5)=\frac{10}{2}=5.
$$
:::

<!--
id: integrals-21
note: math-integrals
title: "Substitute and Change the Bounds"
exam: exam-ii
skills: [Substitution, Definite Integrals]
-->

Evaluate:

$$
\int_0^1 \frac{2x}{1+x^2}\,dx
$$

:::solution
Let

$$
u = 1+x^2, \qquad du = 2x\,dx.
$$

Change the bounds:

$$
x=0 \Rightarrow u=1, \qquad x=1 \Rightarrow u=2.
$$

Then

$$
\int_0^1 \frac{2x}{1+x^2}\,dx
= \int_1^2 \frac{1}{u}\,du
= \left[\ln|u|\right]_1^2
= \ln 2.
$$
:::

<!--
id: integrals-22
note: math-integrals
title: "Integrate a Logarithm by Parts"
exam: exam-ii
skills: [Integration by Parts, Logarithms]
-->

Evaluate:

$$
\int_1^e x\ln x\,dx
$$

:::solution
Use integration by parts with

$$
u=\ln x,\qquad dv=x\,dx.
$$

Then

$$
du=\frac{1}{x}\,dx,\qquad v=\frac{x^2}{2}.
$$

So

$$
\int_1^e x\ln x\,dx
= \left[\frac{x^2}{2}\ln x\right]_1^e - \frac12\int_1^e x\,dx.
$$

Now evaluate each part:

$$
\left[\frac{x^2}{2}\ln x\right]_1^e = \frac{e^2}{2}
$$

and

$$
\frac12\int_1^e x\,dx
= \frac12\left[\frac{x^2}{2}\right]_1^e
= \frac{e^2-1}{4}.
$$

Therefore

$$
\int_1^e x\ln x\,dx
= \frac{e^2}{2}-\frac{e^2-1}{4}
= \frac{e^2+1}{4}.
$$
:::

<!--
id: integrals-23
note: math-integrals
title: "Decompose a Rational Function with a Repeated Factor"
exam: exam-ii
skills: [Partial Fractions, Repeated Factors]
-->

Evaluate:

$$
\int \frac{1}{x(x+1)^2}\,dx
$$

:::solution
Write

$$
\frac{1}{x(x+1)^2} = \frac{A}{x} + \frac{B}{x+1} + \frac{C}{(x+1)^2}.
$$

Multiply by $x(x+1)^2$:

$$
1 = A(x+1)^2 + Bx(x+1) + Cx.
$$

Expanding gives

$$
1 = (A+B)x^2 + (2A+B+C)x + A.
$$

Match coefficients:

$$
A=1,\qquad A+B=0,\qquad 2A+B+C=0.
$$

So

$$
A=1,\qquad B=-1,\qquad C=-1.
$$

Therefore

$$
\frac{1}{x(x+1)^2} = \frac{1}{x} - \frac{1}{x+1} - \frac{1}{(x+1)^2}.
$$

Integrate term by term:

$$
\int \frac{1}{x(x+1)^2}\,dx
= \ln|x| - \ln|x+1| + \frac{1}{x+1} + C.
$$
:::

<!--
id: integrals-24
note: math-integrals
title: "Use Trig Substitution on a Radical"
exam: exam-ii
skills: [Trig Substitution, Definite Integrals]
-->

Compute:

$$
\int_0^{3/2} \frac{dx}{\sqrt{9-x^2}}
$$

:::solution
Use the substitution

$$
x = 3\sin\theta, \qquad dx = 3\cos\theta\,d\theta.
$$

The bounds change as follows:

$$
x=0 \Rightarrow \theta=0, \qquad x=\frac32 \Rightarrow \sin\theta=\frac12 \Rightarrow \theta=\frac{\pi}{6}.
$$

Also,

$$
\sqrt{9-x^2} = \sqrt{9-9\sin^2\theta} = 3\cos\theta.
$$

So the integral becomes

$$
\int_0^{\pi/6} \frac{3\cos\theta}{3\cos\theta}\,d\theta
= \int_0^{\pi/6} d\theta
= \frac{\pi}{6}.
$$
:::

<!--
id: integrals-25
note: math-integrals
title: "Find the Area Between Two Curves"
exam: exam-ii
skills: [Area Between Curves, Definite Integrals]
-->

Find the area between

$$
y = 2x
\quad \text{and} \quad
y = x^2
$$

on the interval $[0,2]$.

:::solution
On $[0,2]$, the line $y=2x$ lies above $y=x^2$.

So the area is

$$
\int_0^2 (2x-x^2)\,dx.
$$

Compute:

$$
\int_0^2 (2x-x^2)\,dx
= \left[x^2 - \frac{x^3}{3}\right]_0^2
= 4-\frac{8}{3}
= \frac{4}{3}.
$$
:::

<!--
id: integrals-26
note: math-integrals
title: "Find Volume with the Washer Method"
exam: exam-ii
skills: [Washer Method, Volumes of Revolution]
-->

The region between $y=2$ and $y=x$ for $0 \le x \le 2$ is rotated about the $x$-axis. Find the volume.

:::solution
Using washers, the outer radius is $R(x)=2$ and the inner radius is $r(x)=x$.

So

$$
V=\pi\int_0^2 \left(R(x)^2-r(x)^2\right)\,dx
=\pi\int_0^2 (4-x^2)\,dx.
$$

Evaluate:

$$
V=\pi\left[4x-\frac{x^3}{3}\right]_0^2
=\pi\left(8-\frac{8}{3}\right)
=\frac{16\pi}{3}.
$$
:::

<!--
id: integrals-27
note: math-integrals
title: "Find Mass from a Density Function"
exam: exam-ii
skills: [Mass, Density]
-->

A thin rod has density

$$
\rho(x)=1+2x
$$

for $0 \le x \le 6$.

Find the mass of the rod.

:::solution
Mass is the integral of density:

$$
m=\int_0^6 (1+2x)\,dx.
$$

Compute:

$$
m=\left[x+x^2\right]_0^6 = 6+36=42.
$$
:::

<!--
id: integrals-28
note: math-integrals
title: "Estimate an Integral with Simpson's Rule"
exam: exam-ii
skills: [Simpson's Rule, Numerical Integration]
-->

Use Simpson's rule with $n=2$ to approximate

$$
\int_0^2 x^4\,dx.
$$

:::solution
With $n=2$,

$$
\Delta x = \frac{2-0}{2}=1.
$$

The sample points are $0$, $1$, and $2$.

Evaluate the function:

$$
f(0)=0,\qquad f(1)=1,\qquad f(2)=16.
$$

Apply Simpson's rule:

$$
\int_0^2 x^4\,dx \approx \frac{\Delta x}{3}\left[f(0)+4f(1)+f(2)\right].
$$

So

$$
\frac{1}{3}(0+4\cdot 1+16)=\frac{20}{3}.
$$
:::

<!--
id: integrals-31
note: math-integrals
title: "Find Displacement from a Velocity Function"
exam: final
skills: [Applications, Velocity]
-->

A particle has velocity

$$
v(t)=3t^2-2t
$$

for $0 \le t \le 2$.

Find the displacement over that time interval.

:::solution
Displacement is the integral of velocity:

$$
\int_0^2 (3t^2-2t)\,dt.
$$

An antiderivative is

$$
t^3-t^2.
$$

Evaluate:

$$
\left[t^3-t^2\right]_0^2 = (8-4)-0 = 4.
$$

So the displacement is $4$.
:::

<!--
id: integrals-32
note: math-integrals
title: "Find Volume with the Shell Method"
exam: final
skills: [Shell Method, Volumes of Revolution]
-->

The region under

$$
y=\sqrt{x}
$$

from $x=0$ to $x=4$ is rotated about the $y$-axis. Find the volume.

:::solution
Using shells, the radius is $x$ and the height is $\sqrt{x}$.

So

$$
V = 2\pi \int_0^4 x\sqrt{x}\,dx
= 2\pi \int_0^4 x^{3/2}\,dx.
$$

Compute:

$$
\int x^{3/2}\,dx = \frac{2}{5}x^{5/2}.
$$

Therefore

$$
V = 2\pi \left[\frac{2}{5}x^{5/2}\right]_0^4
= \frac{4\pi}{5}\cdot 4^{5/2}
= \frac{4\pi}{5}\cdot 32
= \frac{128\pi}{5}.
$$
:::

<!--
id: integrals-33
note: math-integrals
title: "Find a Probability from a Density Function"
exam: final
skills: [Probability Density Functions, Definite Integrals]
-->

Suppose a random variable has density

$$
f(x)=2x
$$

for $0 \le x \le 1$.

Find

$$
P\left(\frac12 \le X \le 1\right).
$$

:::solution
Probability is the area under the density:

$$
P\left(\frac12 \le X \le 1\right)
= \int_{1/2}^1 2x\,dx.
$$

Compute:

$$
\int_{1/2}^1 2x\,dx = \left[x^2\right]_{1/2}^1 = 1-\frac14 = \frac34.
$$
:::

<!--
id: integrals-34
note: math-integrals
title: "Evaluate an Improper Integral with a Vertical Asymptote"
exam: final
skills: [Improper Integrals, Convergence]
-->

Evaluate:

$$
\int_0^1 \frac{1}{\sqrt{x}}\,dx
$$

:::solution
This is improper at $x=0$, so write it as a limit:

$$
\int_0^1 \frac{1}{\sqrt{x}}\,dx
= \lim_{a\to 0^+}\int_a^1 x^{-1/2}\,dx.
$$

An antiderivative is

$$
2x^{1/2}.
$$

So

$$
\lim_{a\to 0^+}\left[2\sqrt{x}\right]_a^1
= \lim_{a\to 0^+} (2-2\sqrt{a})
= 2.
$$
:::

<!--
id: integrals-35
note: math-integrals
title: "Find Geometric Area When the Sign Changes"
exam: final
skills: [Geometric Area, Sign Changes]
-->

Find the geometric area between

$$
f(x)=x^2-4x+3
$$

and the $x$-axis on $[0,4]$.

:::solution
First factor:

$$
x^2-4x+3=(x-1)(x-3).
$$

So the graph crosses the $x$-axis at $x=1$ and $x=3$.

On $[0,1]$ and $[3,4]$, the function is positive. On $[1,3]$, it is negative.

Thus the geometric area is

$$
\int_0^1 f(x)\,dx - \int_1^3 f(x)\,dx + \int_3^4 f(x)\,dx.
$$

An antiderivative is

$$
\frac{x^3}{3} - 2x^2 + 3x.
$$

Evaluate:

$$
\int_0^1 f(x)\,dx = \frac{4}{3},
$$

$$
\int_1^3 f(x)\,dx = -\frac{4}{3},
$$

$$
\int_3^4 f(x)\,dx = \frac{4}{3}.
$$

So the total area is

$$
\frac{4}{3}+\frac{4}{3}+\frac{4}{3}=4.
$$
:::

<!--
id: integrals-41
note: math-integrals
title: "Handle an Endpoint Singularity with Parts"
exam: final
skills: [Improper Integrals, Integration by Parts]
-->

Evaluate:

$$
\int_0^1 x\ln x\,dx
$$

:::solution
This is improper at $x=0$, so treat it as a limit:

$$
\int_0^1 x\ln x\,dx
= \lim_{a\to 0^+}\int_a^1 x\ln x\,dx.
$$

Use integration by parts with

$$
u=\ln x,\qquad dv=x\,dx.
$$

Then

$$
du=\frac{1}{x}\,dx,\qquad v=\frac{x^2}{2}.
$$

So

$$
\int_a^1 x\ln x\,dx
= \left[\frac{x^2}{2}\ln x\right]_a^1 - \frac12\int_a^1 x\,dx.
$$

The boundary term at $x=1$ is $0$, and $a^2\ln a \to 0$ as $a\to 0^+$.

Also,

$$
\frac12\int_a^1 x\,dx
= \frac12\left[\frac{x^2}{2}\right]_a^1
= \frac{1-a^2}{4}.
$$

Therefore

$$
\int_0^1 x\ln x\,dx = -\frac14.
$$
:::

<!--
id: integrals-42
note: math-integrals
title: "Evaluate an Improper Integral After Substitution"
exam: final
skills: [Improper Integrals, Substitution]
-->

Evaluate:

$$
\int_0^\infty \frac{x}{(1+x^2)^2}\,dx
$$

:::solution
Write the integral as a limit:

$$
\int_0^\infty \frac{x}{(1+x^2)^2}\,dx
= \lim_{b\to\infty}\int_0^b \frac{x}{(1+x^2)^2}\,dx.
$$

Use the substitution

$$
u = 1+x^2,\qquad du = 2x\,dx.
$$

Then

$$
\int_0^b \frac{x}{(1+x^2)^2}\,dx
= \frac12\int_1^{1+b^2} u^{-2}\,du.
$$

Compute:

$$
\frac12\left[-u^{-1}\right]_1^{1+b^2}
= \frac12\left(1-\frac{1}{1+b^2}\right).
$$

Now let $b\to\infty$:

$$
\frac12\left(1-\frac{1}{1+b^2}\right)\to \frac12.
$$

So the integral converges to $\frac12$.
:::

<!--
id: integrals-43
note: math-integrals
title: "Use Shells on a Region Between Curves"
exam: final
skills: [Shell Method, Area Between Curves]
-->

The region enclosed by

$$
y=x
\quad \text{and} \quad
y=x^2
$$

is rotated about the $y$-axis. Find the volume.

:::solution
The curves intersect where

$$
x=x^2,
$$

so $x=0$ and $x=1$.

Using shells, the radius is $x$ and the height is

$$
x-x^2.
$$

Thus

$$
V = 2\pi\int_0^1 x(x-x^2)\,dx
= 2\pi\int_0^1 (x^2-x^3)\,dx.
$$

Evaluate:

$$
V = 2\pi\left[\frac{x^3}{3}-\frac{x^4}{4}\right]_0^1
= 2\pi\left(\frac13-\frac14\right)
= 2\pi\cdot\frac{1}{12}
= \frac{\pi}{6}.
$$
:::

<!--
id: integrals-44
note: math-integrals
title: "Combine Trig Substitution with a Trig Identity"
exam: final
skills: [Trig Substitution, Trig Identities]
-->

Compute:

$$
\int_0^{3/2} \frac{x^2}{\sqrt{9-x^2}}\,dx
$$

:::solution
Use the trig substitution

$$
x=3\sin\theta,\qquad dx=3\cos\theta\,d\theta.
$$

The bounds become

$$
x=0 \Rightarrow \theta=0,
\qquad
x=\frac32 \Rightarrow \theta=\frac{\pi}{6}.
$$

Also,

$$
\sqrt{9-x^2}=3\cos\theta.
$$

So the integral becomes

$$
\int_0^{\pi/6} \frac{9\sin^2\theta}{3\cos\theta}\cdot 3\cos\theta\,d\theta
= 9\int_0^{\pi/6}\sin^2\theta\,d\theta.
$$

Use

$$
\sin^2\theta=\frac{1-\cos(2\theta)}{2}.
$$

Then

$$
9\int_0^{\pi/6}\sin^2\theta\,d\theta
= \frac{9}{2}\int_0^{\pi/6}\left(1-\cos(2\theta)\right)\,d\theta.
$$

Evaluate:

$$
\frac{9}{2}\left[\theta-\frac{\sin(2\theta)}{2}\right]_0^{\pi/6}
= \frac{9}{2}\left(\frac{\pi}{6}-\frac{\sin(\pi/3)}{2}\right).
$$

Since $\sin(\pi/3)=\frac{\sqrt3}{2}$,

$$
\frac{9}{2}\left(\frac{\pi}{6}-\frac{\sqrt3}{4}\right)
= \frac{3\pi}{4}-\frac{9\sqrt3}{8}.
$$
:::
