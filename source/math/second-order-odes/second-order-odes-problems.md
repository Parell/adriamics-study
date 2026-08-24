<!--
id: second-order-odes-11
note: math-second-order-odes
title: "Classify a Second-Order ODE"
exam: exam-i
skills: [Classification, Standard Form]
-->

Classify the differential equation below. State whether it is second-order, linear, homogeneous, and constant-coefficient.

$$
y'' + 3y' - 4y = 0
$$

:::solution
The highest derivative is \(y''\), so it is a second-order ODE.

The equation is linear because \(y\), \(y'\), and \(y''\) each appear to the first power and are not multiplied together.

It is homogeneous because the right-hand side is \(0\).

It has constant coefficients because \(1\), \(3\), and \(-4\) are constants.
:::

<!--
id: second-order-odes-12
note: math-second-order-odes
title: "Write in Normalized Form"
exam: exam-i
skills: [Standard Form, Linear Equations]
-->

Rewrite the equation in normalized form \(y'' + p(x)y' + q(x)y = r(x)\).

$$
4y'' - 2y' + 7y = 5e^x
$$

:::solution
Divide every term by \(4\):

$$
y'' - \frac{1}{2}y' + \frac{7}{4}y = \frac{5}{4}e^x
$$

So the normalized form is

$$
y'' - \frac{1}{2}y' + \frac{7}{4}y = \frac{5}{4}e^x.
$$
:::

<!--
id: second-order-odes-13
note: math-second-order-odes
title: "Check Existence and Uniqueness"
exam: exam-i
skills: [Existence and Uniqueness, Initial Conditions]
-->

Does the existence and uniqueness theorem guarantee a unique local solution near \(x=0\) for the initial value problem below?

$$
y'' = y - y' + \frac{1}{1+x^2}, \qquad y(0)=1, \qquad y'(0)=0
$$

:::solution
Write the equation as

$$
y'' = f(x,y,y') = y - y' + \frac{1}{1+x^2}.
$$

The function \(f\) is continuous everywhere, and its partial derivatives with respect to \(y\) and \(y'\) are also continuous everywhere.

Therefore the theorem guarantees a unique local solution near \(x=0\).
:::

<!--
id: second-order-odes-14
note: math-second-order-odes
title: "Solve a Distinct-Root Homogeneous Equation"
exam: exam-i
skills: [Characteristic Equation, Distinct Roots]
-->

Solve the homogeneous equation.

$$
y'' - 5y' + 6y = 0
$$

:::solution
Try \(y=e^{rx}\). The characteristic equation is

$$
r^2 - 5r + 6 = 0
$$

Factor:

$$
(r-2)(r-3)=0
$$

So the roots are \(r=2\) and \(r=3\). The general solution is

$$
y = C_1 e^{2x} + C_2 e^{3x}.
$$
:::

<!--
id: second-order-odes-15
note: math-second-order-odes
title: "Solve a Repeated-Root Equation"
exam: exam-i
skills: [Characteristic Equation, Repeated Roots]
-->

Solve the homogeneous equation.

$$
y'' - 4y' + 4y = 0
$$

:::solution
Try \(y=e^{rx}\). The characteristic equation is

$$
r^2 - 4r + 4 = 0 = (r-2)^2
$$

This is a repeated root \(r=2\), so

$$
y = (C_1 + C_2 x)e^{2x}.
$$
:::

<!--
id: second-order-odes-16
note: math-second-order-odes
title: "Solve a Complex-Root Equation"
exam: exam-i
skills: [Characteristic Equation, Complex Roots]
-->

Solve the homogeneous equation.

$$
y'' + 9y = 0
$$

:::solution
Try \(y=e^{rx}\). The characteristic equation is

$$
r^2 + 9 = 0
$$

so

$$
r = \pm 3i.
$$

The general real solution is

$$
y = C_1 \cos(3x) + C_2 \sin(3x).
$$
:::

<!--
id: second-order-odes-17
note: math-second-order-odes
title: "Choose a Resonant Trial"
exam: exam-i
skills: [Undetermined Coefficients, Resonance]
-->

For the equation below, what trial form should you use for a particular solution in undetermined coefficients?

$$
y'' - 2y' + y = e^x
$$

:::solution
The homogeneous characteristic equation is

$$
(r-1)^2 = 0,
$$

so \(e^x\) and \(xe^x\) already appear in the homogeneous solution.

To avoid duplication, multiply by \(x\) again. A correct trial is

$$
y_p = Ax^2 e^x.
$$
:::

<!--
id: second-order-odes-18
note: math-second-order-odes
title: "Solve an Euler-Cauchy Equation"
exam: exam-i
skills: [Euler-Cauchy Equations, Power Trial]
-->

Solve the equation for \(x>0\).

$$
x^2 y'' + xy' - 4y = 0
$$

:::solution
Use the Euler-Cauchy trial \(y=x^m\). Then

$$
y' = mx^{m-1}, \qquad y'' = m(m-1)x^{m-2}.
$$

Substitute:

$$
x^2 m(m-1)x^{m-2} + x(mx^{m-1}) - 4x^m = 0
$$

which simplifies to

$$
m(m-1) + m - 4 = 0.
$$

So

$$
m^2 - 4 = 0,
$$

and \(m=\pm 2\). Therefore

$$
y = C_1 x^2 + C_2 x^{-2}.
$$
:::

<!--
id: second-order-odes-19
note: math-second-order-odes
title: "Compute a Wronskian"
exam: exam-i
skills: [Wronskian, Linear Independence]
-->

Compute the Wronskian of the two functions below.

$$
y_1=x, \qquad y_2=x^2
$$

:::solution
Use

$$
W(y_1,y_2)=
\begin{vmatrix}
y_1 & y_2 \\
y_1' & y_2'
\end{vmatrix}
= y_1y_2' - y_1'y_2.
$$

Here,

$$
y_1'=1, \qquad y_2'=2x.
$$

So

$$
W = x(2x) - 1\cdot x^2 = x^2.
$$

On any interval that does not include \(0\), the functions are linearly independent.
:::

<!--
id: second-order-odes-110
note: math-second-order-odes
title: "Find the Natural Frequency and Damping Ratio"
exam: exam-i
skills: [Mechanical Models, Damping Ratio]
-->

A mass-spring system has

$$
m=1, \qquad c=4, \qquad k=4.
$$

Find the natural frequency \(\omega_n\), the damping ratio \(\zeta\), and the damping regime.

:::solution
Compute the natural frequency:

$$
\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{4}{1}} = 2.
$$

Compute the damping ratio:

$$
\zeta = \frac{c}{2\sqrt{mk}} = \frac{4}{2\sqrt{1\cdot 4}} = \frac{4}{4} = 1.
$$

Since \(\zeta=1\), the system is critically damped.
:::

<!--
id: second-order-odes-21
note: math-second-order-odes
title: "Solve an Initial Value Problem"
exam: exam-ii
skills: [Characteristic Equation, Initial Value Problems]
-->

Solve the initial value problem.

$$
y'' - 3y' + 2y = 0, \qquad y(0)=1, \qquad y'(0)=4
$$

:::solution
The characteristic equation is

$$
r^2 - 3r + 2 = 0 = (r-1)(r-2).
$$

So

$$
y = C_1 e^x + C_2 e^{2x}.
$$

Use \(y(0)=1\):

$$
C_1 + C_2 = 1.
$$

Differentiate:

$$
y' = C_1 e^x + 2C_2 e^{2x}.
$$

Use \(y'(0)=4\):

$$
C_1 + 2C_2 = 4.
$$

Subtract the first equation from the second:

$$
C_2 = 3.
$$

Then \(C_1 = -2\). So

$$
y = -2e^x + 3e^{2x}.
$$
:::

<!--
id: second-order-odes-22
note: math-second-order-odes
title: "Solve a Resonant Forced Equation"
exam: exam-ii
skills: [Undetermined Coefficients, Resonance]
-->

Solve the initial value problem.

$$
y'' - 2y' + y = e^x, \qquad y(0)=0, \qquad y'(0)=1
$$

:::solution
The homogeneous equation has characteristic equation

$$
(r-1)^2=0,
$$

so

$$
y_h = (C_1 + C_2x)e^x.
$$

Because the forcing is \(e^x\), use a resonant trial

$$
y_p = Ax^2e^x.
$$

Substituting gives \(A=\tfrac12\), so

$$
y = (C_1 + C_2x)e^x + \frac12 x^2 e^x.
$$

Now apply the initial conditions. From \(y(0)=0\),

$$
C_1 = 0.
$$

Write

$$
y = e^x\left(C_1 + C_2x + \frac12 x^2\right).
$$

Then

$$
y' = e^x\left(C_1 + C_2x + \frac12 x^2 + C_2 + x\right).
$$

Using \(y'(0)=1\) and \(C_1=0\),

$$
C_2 = 1.
$$

So the solution is

$$
y = e^x\left(x + \frac12 x^2\right).
$$
:::

<!--
id: second-order-odes-23
note: math-second-order-odes
title: "Solve an Euler-Cauchy Initial Value Problem"
exam: exam-ii
skills: [Euler-Cauchy Equations, Initial Value Problems]
-->

Solve the initial value problem for \(x>0\).

$$
x^2y'' + xy' - 4y = 0, \qquad y(1)=3, \qquad y'(1)=-1
$$

:::solution
Use the Euler-Cauchy trial \(y=x^m\). The auxiliary equation is

$$
m^2 - 4 = 0,
$$

so \(m=\pm 2\). Thus

$$
y = C_1x^2 + C_2x^{-2}.
$$

Apply \(y(1)=3\):

$$
C_1 + C_2 = 3.
$$

Differentiate:

$$
y' = 2C_1x - 2C_2x^{-3}.
$$

Apply \(y'(1)=-1\):

$$
2C_1 - 2C_2 = -1.
$$

Solve the system to get

$$
C_1 = \frac{5}{4}, \qquad C_2 = \frac{7}{4}.
$$

Therefore

$$
y = \frac{5}{4}x^2 + \frac{7}{4}x^{-2}.
$$
:::

<!--
id: second-order-odes-24
note: math-second-order-odes
title: "Use a Known Solution to Finish the General Solution"
exam: exam-ii
skills: [Reduction of Order, Euler-Cauchy Equations]
-->

Given that \(y_1=x\) is one nonzero solution of the equation below, find a second linearly independent solution and the general solution.

$$
x^2y'' - 2xy' + 2y = 0
$$

:::solution
This is an Euler-Cauchy equation. Using the known solution \(y_1=x\), reduction of order gives a second independent solution \(y_2=x^2\).

So the general solution is

$$
y = C_1x + C_2x^2.
$$
:::

<!--
id: second-order-odes-25
note: math-second-order-odes
title: "Analyze a Boundary Value Problem"
exam: exam-ii
skills: [Boundary Value Problems, Complex Roots]
-->

Determine whether the boundary value problem has one solution, no solutions, or infinitely many solutions.

$$
y'' + \pi^2 y = 0, \qquad y(0)=0, \qquad y(1)=0
$$

:::solution
The characteristic equation is

$$
r^2 + \pi^2 = 0,
$$

so the general solution is

$$
y = C_1\cos(\pi x) + C_2\sin(\pi x).
$$

Use \(y(0)=0\):

$$
C_1=0.
$$

Then

$$
y = C_2\sin(\pi x).
$$

Now use \(y(1)=0\):

$$
C_2\sin(\pi)=0,
$$

which is true for every \(C_2\).

So the boundary value problem has infinitely many solutions:

$$
y = C\sin(\pi x).
$$
:::

<!--
id: second-order-odes-26
note: math-second-order-odes
title: "Solve a Critically Damped Motion Problem"
exam: exam-ii
skills: [Mechanical Models, Critical Damping]
-->

A mass-spring system is modeled by

$$
y'' + 8y' + 16y = 0, \qquad y(0)=2, \qquad y'(0)=0
$$

Solve for \(y(t)\) and classify the damping.

:::solution
The characteristic equation is

$$
r^2 + 8r + 16 = 0 = (r+4)^2.
$$

This is a repeated root, so

$$
y = (C_1 + C_2t)e^{-4t}.
$$

Use \(y(0)=2\):

$$
C_1 = 2.
$$

Differentiate:

$$
y' = e^{-4t}\bigl(C_2 - 4C_1 - 4C_2t\bigr).
$$

Use \(y'(0)=0\):

$$
C_2 - 4(2)=0,
$$

so

$$
C_2 = 8.
$$

Thus

$$
y = (2 + 8t)e^{-4t}.
$$

Because the root is repeated, the motion is critically damped.
:::

<!--
id: second-order-odes-27
note: math-second-order-odes
title: "Find the Steady-State Response"
exam: exam-ii
skills: [Forced Vibration, Undetermined Coefficients]
-->

Find a particular solution for the forced vibration equation.

$$
y'' + 9y = 6\sin(2t)
$$

:::solution
Since the forcing is \(\sin(2t)\) and there is no resonance, try

$$
y_p = A\cos(2t) + B\sin(2t).
$$

Then

$$
y_p'' = -4A\cos(2t) - 4B\sin(2t).
$$

Substitute into the equation:

$$
y_p'' + 9y_p = 5A\cos(2t) + 5B\sin(2t).
$$

Match coefficients with \(6\sin(2t)\):

$$
5A = 0, \qquad 5B = 6.
$$

So \(A=0\) and \(B=\frac{6}{5}\). A steady-state response is

$$
y_p = \frac{6}{5}\sin(2t).
$$
:::

<!--
id: second-order-odes-28
note: math-second-order-odes
title: "Find the Interval of Guaranteed Uniqueness"
exam: exam-ii
skills: [Existence and Uniqueness, Standard Form]
-->

For the initial value problem below, on what largest open interval containing \(x=2\) is a unique local solution guaranteed?

$$
y'' + \frac{1}{x-1}y' + (\ln x)y = e^x, \qquad y(2)=0, \qquad y'(2)=1
$$

:::solution
In normalized form, the coefficients are

$$
p(x)=\frac{1}{x-1}, \qquad q(x)=\ln x, \qquad r(x)=e^x.
$$

The function \(p(x)\) is undefined at \(x=1\), and \(q(x)=\ln x\) requires \(x>0\).

So the coefficients are continuous on

$$
(1,\infty).
$$

That is the largest open interval containing \(x=2\) on which a unique local solution is guaranteed.
:::

<!--
id: second-order-odes-31
note: math-second-order-odes
title: "Model a Simple Mass-Spring Motion"
exam: final
skills: [Mechanical Models, Harmonic Motion]
-->

A \(2\)-kg mass is attached to a spring with spring constant \(18\) N/m. The mass is displaced \(1/2\) meter from equilibrium and released from rest.

Find the equation of motion and the first time it returns to equilibrium.

:::solution
For an undamped spring, the equation is

$$
m y'' + ky = 0.
$$

Here,

$$
2y'' + 18y = 0,
$$

so

$$
y'' + 9y = 0.
$$

The general solution is

$$
y = C_1\cos(3t) + C_2\sin(3t).
$$

Use \(y(0)=1/2\):

$$
C_1 = \frac12.
$$

Released from rest means \(y'(0)=0\). Since

$$
y' = -3C_1\sin(3t) + 3C_2\cos(3t),
$$

we get \(C_2=0\).

So

$$
y(t)=\frac12\cos(3t).
$$

The first return to equilibrium happens when \(y(t)=0\), so

$$
\cos(3t)=0 \quad \Rightarrow \quad 3t=\frac{\pi}{2}.
$$

Thus the first return time is

$$
t=\frac{\pi}{6}.
$$
:::

<!--
id: second-order-odes-32
note: math-second-order-odes
title: "Solve a Critically Damped IVP"
exam: final
skills: [Mechanical Models, Critical Damping]
-->

Solve the initial value problem.

$$
y'' + 8y' + 16y = 0, \qquad y(0)=2, \qquad y'(0)=0
$$

:::solution
The characteristic equation is

$$
r^2 + 8r + 16 = 0 = (r+4)^2.
$$

So

$$
y = (C_1 + C_2t)e^{-4t}.
$$

Apply the initial conditions:

$$
y(0)=2 \Rightarrow C_1=2.
$$

Differentiate:

$$
y' = e^{-4t}\bigl(C_2 - 4C_1 - 4C_2t\bigr).
$$

Then

$$
y'(0)=0 \Rightarrow C_2 - 8 = 0,
$$

so \(C_2=8\).

Therefore

$$
y = (2+8t)e^{-4t}.
$$
:::

<!--
id: second-order-odes-33
note: math-second-order-odes
title: "Find a Particular Solution for Forced Oscillation"
exam: final
skills: [Forced Vibration, Undetermined Coefficients]
-->

Find a particular solution for the forced vibration equation below.

$$
y'' + 9y = 6\sin(2t)
$$

:::solution
Try

$$
y_p = A\cos(2t) + B\sin(2t).
$$

Then

$$
y_p'' + 9y_p = 5A\cos(2t) + 5B\sin(2t).
$$

Match coefficients with \(6\sin(2t)\):

$$
A=0, \qquad B=\frac65.
$$

So a particular solution is

$$
y_p = \frac65\sin(2t).
$$
:::

<!--
id: second-order-odes-34
note: math-second-order-odes
title: "A Boundary Value Problem with a Unique Solution"
exam: final
skills: [Boundary Value Problems, Linear Independence]
-->

Solve the boundary value problem.

$$
y'' + \pi^2 y = 0, \qquad y(0)=0, \qquad y\left(\frac12\right)=0
$$

:::solution
The general solution is

$$
y = C_1\cos(\pi x) + C_2\sin(\pi x).
$$

Use \(y(0)=0\):

$$
C_1=0.
$$

So

$$
y = C_2\sin(\pi x).
$$

Now apply \(y\left(\frac12\right)=0\):

$$
C_2\sin\left(\frac{\pi}{2}\right)=C_2=0.
$$

Thus the only solution is

$$
y=0.
$$
:::

<!--
id: second-order-odes-35
note: math-second-order-odes
title: "Predict Long-Term Behavior from Roots"
exam: final
skills: [Characteristic Roots, Long-Term Behavior]
-->

For the equation below, describe the long-term behavior of the general solution as \(x\to\infty\).

$$
y'' - y' - 2y = 0
$$

:::solution
The characteristic equation is

$$
r^2 - r - 2 = 0 = (r-2)(r+1).
$$

So

$$
y = C_1e^{2x} + C_2e^{-x}.
$$

The \(e^{2x}\) term grows as \(x\to\infty\), while the \(e^{-x}\) term decays.

So a generic solution grows without bound, and the equilibrium is unstable unless \(C_1=0\).
:::

<!--
id: second-order-odes-41
note: math-second-order-odes
title: "Solve a Resonant Forced Problem"
exam: final
skills: [Undetermined Coefficients, Resonance]
-->

Solve the initial value problem.

$$
y'' + 4y = 8\cos(2x), \qquad y(0)=0, \qquad y'(0)=0
$$

:::solution
The homogeneous equation has characteristic roots \(\pm 2i\), so

$$
y_h = C_1\cos(2x) + C_2\sin(2x).
$$

Because the forcing is \(\cos(2x)\), which resonates with the homogeneous solution, try

$$
y_p = x\bigl(A\sin(2x) + B\cos(2x)\bigr).
$$

For this choice,

$$
y_p'' + 4y_p = 4A\cos(2x) - 4B\sin(2x).
$$

Match coefficients with \(8\cos(2x)\):

$$
A=2, \qquad B=0.
$$

So

$$
y = C_1\cos(2x) + C_2\sin(2x) + 2x\sin(2x).
$$

Apply the initial conditions:

$$
y(0)=0 \Rightarrow C_1=0,
$$

and

$$
y'(0)=0 \Rightarrow C_2=0.
$$

Therefore

$$
y = 2x\sin(2x).
$$
:::

<!--
id: second-order-odes-42
note: math-second-order-odes
title: "Solve a Damped Forced Oscillator"
exam: final
skills: [Damped Vibration, Forced Vibration]
-->

Solve the initial value problem.

$$
y'' + 2y' + 5y = 10e^{-x}, \qquad y(0)=1, \qquad y'(0)=0
$$

:::solution
The characteristic equation is

$$
r^2 + 2r + 5 = 0,
$$

so

$$
r = -1 \pm 2i.
$$

Thus

$$
y_h = e^{-x}\bigl(C_1\cos(2x) + C_2\sin(2x)\bigr).
$$

For the forcing term \(10e^{-x}\), try

$$
y_p = Ae^{-x}.
$$

Substitute:

$$
y_p'' + 2y_p' + 5y_p = (1 - 2 + 5)Ae^{-x} = 4Ae^{-x}.
$$

Set this equal to \(10e^{-x}\):

$$
A = \frac52.
$$

So

$$
y = e^{-x}\bigl(C_1\cos(2x) + C_2\sin(2x)\bigr) + \frac52 e^{-x}.
$$

Use \(y(0)=1\):

$$
C_1 + \frac52 = 1 \Rightarrow C_1 = -\frac32.
$$

Differentiate in the form \(y=e^{-x}u(x)\), where

$$
u(x)=C_1\cos(2x) + C_2\sin(2x) + \frac52.
$$

Then

$$
y' = e^{-x}(u' - u).
$$

At \(x=0\),

$$
u(0)=C_1+\frac52 = 1, \qquad u'(0)=2C_2.
$$

Using \(y'(0)=0\),

$$
2C_2 - 1 = 0,
$$

so

$$
C_2 = \frac12.
$$

Therefore

$$
y = e^{-x}\left(-\frac32\cos(2x) + \frac12\sin(2x) + \frac52\right).
$$
:::

<!--
id: second-order-odes-43
note: math-second-order-odes
title: "Solve an Euler-Cauchy Boundary Value Problem"
exam: final
skills: [Euler-Cauchy Equations, Boundary Value Problems]
-->

Solve the boundary value problem for \(x>0\).

$$
x^2y'' + xy' - y = 0, \qquad y(1)=2, \qquad y(2)=3
$$

:::solution
Use the Euler-Cauchy trial \(y=x^m\). The auxiliary equation is

$$
m(m-1) + m - 1 = 0,
$$

which simplifies to

$$
m^2 - 1 = 0.
$$

So \(m=\pm 1\), and

$$
y = C_1x + C_2x^{-1}.
$$

Apply \(y(1)=2\):

$$
C_1 + C_2 = 2.
$$

Apply \(y(2)=3\):

$$
2C_1 + \frac{C_2}{2} = 3.
$$

Solve the system:

$$
C_1 = \frac43, \qquad C_2 = \frac23.
$$

So the solution is

$$
y = \frac43x + \frac23x^{-1}.
$$
:::

<!--
id: second-order-odes-44
note: math-second-order-odes
title: "Use Variation of Parameters"
exam: final
skills: [Variation of Parameters, Wronskian]
-->

Solve the differential equation on any interval where the forcing term is defined.

$$
y'' + y = \sec x
$$

:::solution
The homogeneous equation \(y''+y=0\) has fundamental solutions

$$
y_1=\cos x, \qquad y_2=\sin x.
$$

Their Wronskian is

$$
W = y_1y_2' - y_1'y_2 = \cos x(\cos x) - (-\sin x)(\sin x) = 1.
$$

For variation of parameters,

$$
u_1' = -\frac{y_2\,\sec x}{W} = -\sin x\,\sec x = -\tan x,
$$

so

$$
u_1 = \ln|\cos x|.
$$

Also,

$$
u_2' = \frac{y_1\,\sec x}{W} = \cos x\,\sec x = 1,
$$

so

$$
u_2 = x.
$$

Thus a particular solution is

$$
y_p = u_1y_1 + u_2y_2 = \cos x\ln|\cos x| + x\sin x.
$$

Therefore the general solution is

$$
y = C_1\cos x + C_2\sin x + \cos x\ln|\cos x| + x\sin x.
$$
:::
