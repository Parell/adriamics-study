<!--
id: first-order-odes-11
note: math-first-order-odes
title: "Classify a Basic First-Order Equation"
exam: exam-i
skills: [Order, Linear vs. Nonlinear]
-->

For the equation

$$
y' = x^2 y,
$$

state whether it is first-order and whether it is linear.

:::solution
The highest derivative is $y'$, so the equation is first-order.

Rewrite it in standard linear form:

$$
y' - x^2 y = 0.
$$

This matches

$$
y' + p(x)y = q(x),
$$

with $p(x) = -x^2$ and $q(x)=0$. So the equation is linear.
:::

<!--
id: first-order-odes-12
note: math-first-order-odes
title: "Read a Slope from the Differential Equation"
exam: exam-i
skills: [Direction Fields, Slope]
-->

For

$$
y' = x - y,
$$

what is the slope of the solution curve at the point $(3,1)$?

:::solution
Substitute the point into the right-hand side:

$$
y' = 3 - 1 = 2.
$$

So the slope at $(3,1)$ is $2$.
:::

<!--
id: first-order-odes-13
note: math-first-order-odes
title: "Solve a Simple Separable Equation"
exam: exam-i
skills: [Separable Equations]
-->

Solve for $y$:

$$
\frac{dy}{dx} = 4x.
$$

:::solution
Integrate both sides with respect to $x$:

$$
y = \int 4x\,dx = 2x^2 + C.
$$

So the general solution is

$$
y = 2x^2 + C.
$$
:::

<!--
id: first-order-odes-14
note: math-first-order-odes
title: "Apply an Initial Condition"
exam: exam-i
skills: [Initial Value Problems]
-->

Solve the initial value problem:

$$
y' = 2x, \qquad y(1)=5.
$$

:::solution
Integrate the differential equation:

$$
y = x^2 + C.
$$

Use the initial condition $y(1)=5$:

$$
5 = 1 + C
$$

so

$$
C = 4.
$$

Therefore,

$$
y = x^2 + 4.
$$
:::

<!--
id: first-order-odes-15
note: math-first-order-odes
title: "Find Equilibrium Solutions"
exam: exam-i
skills: [Autonomous Equations, Equilibria]
-->

For the autonomous equation

$$
y' = y(y-4),
$$

find all equilibrium solutions.

:::solution
Equilibria occur when the right-hand side is zero:

$$
y(y-4)=0.
$$

So

$$
y=0 \quad \text{or} \quad y=4.
$$

The equilibrium solutions are $y(t)=0$ and $y(t)=4$.
:::

<!--
id: first-order-odes-16
note: math-first-order-odes
title: "Test for Exactness"
exam: exam-i
skills: [Exact Equations]
-->

Determine whether

$$
(2xy+1)\,dx + (x^2+3y^2)\,dy = 0
$$

is exact.

:::solution
Let

$$
M(x,y)=2xy+1, \qquad N(x,y)=x^2+3y^2.
$$

Compute the partial derivatives:

$$
\frac{\partial M}{\partial y} = 2x, \qquad \frac{\partial N}{\partial x} = 2x.
$$

Since these are equal, the equation is exact.
:::

<!--
id: first-order-odes-17
note: math-first-order-odes
title: "Recognize a Homogeneous Equation"
exam: exam-i
skills: [Homogeneous Equations]
-->

Is

$$
\frac{dy}{dx} = 1 + \frac{y}{x}
$$

homogeneous in the first-order sense?

:::solution
Yes. The right-hand side can be written as a function of $y/x$:

$$
1+\frac{y}{x} = F\!\left(\frac{y}{x}\right)
$$

with

$$
F(v)=1+v.
$$

So the equation is homogeneous.
:::

<!--
id: first-order-odes-18
note: math-first-order-odes
title: "Solve a Linear Homogeneous Equation"
exam: exam-i
skills: [Linear First-Order Equations]
-->

Solve for $y$:

$$
y' + 3y = 0.
$$

:::solution
This is a linear first-order equation with $p(x)=3$ and $q(x)=0$.

The integrating factor is

$$
\mu(x)=e^{\int 3\,dx}=e^{3x}.
$$

Multiply through:

$$
e^{3x}y' + 3e^{3x}y = 0.
$$

So

$$
\frac{d}{dx}(e^{3x}y)=0.
$$

Integrate:

$$
e^{3x}y = C,
$$

and therefore

$$
y = Ce^{-3x}.
$$
:::

<!--
id: first-order-odes-19
note: math-first-order-odes
title: "Identify a Bernoulli Equation"
exam: exam-i
skills: [Bernoulli Equations, Classification]
-->

Which value of $n$ makes

$$
y' + y = x y^n
$$

a Bernoulli equation?

:::solution
A Bernoulli equation has the form

$$
y' + p(x)y = q(x)y^n
$$

with $n \neq 0,1$.

Here the equation already matches that form, with

$$
p(x)=1, \qquad q(x)=x, \qquad n=2.
$$

So the equation is Bernoulli with $n=2$.
:::

<!--
id: first-order-odes-110
note: math-first-order-odes
title: "Interpret a Logistic Growth Model"
exam: exam-i
skills: [Logistic Equation, Equilibria]
-->

For

$$
\frac{dP}{dt} = rP\left(1-\frac{P}{K}\right),
$$

state the equilibrium values and describe what happens when $0<P<K$.

:::solution
Set the right-hand side equal to zero:

$$
rP\left(1-\frac{P}{K}\right)=0.
$$

So the equilibria are

$$
P=0 \quad \text{and} \quad P=K.
$$

If $0<P<K$, then both factors are positive, so

$$
\frac{dP}{dt} > 0.
$$

That means the population increases when it is between $0$ and $K$.
:::

<!--
id: first-order-odes-21
note: math-first-order-odes
title: "Solve a Separable IVP"
exam: exam-ii
skills: [Separable Equations, Initial Value Problems]
-->

Solve the initial value problem

$$
\frac{dy}{dx} = 2xy^2, \qquad y(0)=1.
$$

:::solution
Separate variables:

$$
\frac{1}{y^2}\,dy = 2x\,dx.
$$

Integrate:

$$
\int y^{-2}\,dy = \int 2x\,dx
$$

so

$$
-\frac{1}{y} = x^2 + C.
$$

Use $y(0)=1$:

$$
-1 = C.
$$

Then

$$
-\frac{1}{y} = x^2 - 1
$$

which gives

$$
y = \frac{1}{1-x^2}.
$$
:::

<!--
id: first-order-odes-22
note: math-first-order-odes
title: "Use an Integrating Factor"
exam: exam-ii
skills: [Linear First-Order Equations, Integrating Factors]
-->

Solve for $y$:

$$
y' - 2y = e^x.
$$

:::solution
The integrating factor is

$$
\mu(x)=e^{\int -2\,dx}=e^{-2x}.
$$

Multiply through:

$$
e^{-2x}y' - 2e^{-2x}y = e^{-x}.
$$

So

$$
\frac{d}{dx}(e^{-2x}y)=e^{-x}.
$$

Integrate:

$$
e^{-2x}y = -e^{-x} + C.
$$

Multiply by $e^{2x}$:

$$
y = -e^x + Ce^{2x}.
$$
:::

<!--
id: first-order-odes-23
note: math-first-order-odes
title: "Solve an Exact Equation"
exam: exam-ii
skills: [Exact Equations]
-->

Solve

$$
(3x^2y+2x)\,dx + (x^3+4y)\,dy = 0.
$$

:::solution
Let

$$
M(x,y)=3x^2y+2x, \qquad N(x,y)=x^3+4y.
$$

Check exactness:

$$
M_y = 3x^2, \qquad N_x = 3x^2.
$$

The equation is exact.

Integrate $M$ with respect to $x$:

$$
\Psi(x,y) = \int (3x^2y+2x)\,dx = x^3y + x^2 + g(y).
$$

Differentiate with respect to $y$:

$$
\Psi_y = x^3 + g'(y).
$$

Match this with $N$:

$$
x^3 + g'(y) = x^3 + 4y,
$$

so

$$
g'(y)=4y
$$

and

$$
g(y)=2y^2.
$$

Thus the implicit solution is

$$
x^3y + x^2 + 2y^2 = C.
$$
:::

<!--
id: first-order-odes-24
note: math-first-order-odes
title: "Solve a Homogeneous Equation"
exam: exam-ii
skills: [Homogeneous Equations, Substitution]
-->

Solve

$$
\frac{dy}{dx} = 1 + \frac{y}{x}.
$$

:::solution
Use the substitution

$$
y=vx,
$$

so

$$
\frac{dy}{dx}=v+x\frac{dv}{dx}.
$$

Substitute into the equation:

$$
v+x\frac{dv}{dx}=1+v.
$$

Then

$$
x\frac{dv}{dx}=1.
$$

Separate and integrate:

$$
dv = \frac{1}{x}\,dx
$$

so

$$
v=\ln|x|+C.
$$

Since $v=y/x$,

$$
\frac{y}{x}=\ln|x|+C
$$

and therefore

$$
y=x\ln|x|+Cx.
$$
:::

<!--
id: first-order-odes-25
note: math-first-order-odes
title: "Solve a Bernoulli Equation"
exam: exam-ii
skills: [Bernoulli Equations, Linear First-Order Equations]
-->

Solve

$$
y' + y = xy^2.
$$

:::solution
This is a Bernoulli equation with $n=2$.

Multiply by $y^{-2}$:

$$
y^{-2}y' + y^{-1} = x.
$$

Let

$$
u=y^{-1}.
$$

Then

$$
u'=-y^{-2}y',
$$

so the equation becomes

$$
-u' + u = x.
$$

Rearrange:

$$
u' - u = -x.
$$

This is linear. The integrating factor is

$$
\mu(x)=e^{\int -1\,dx}=e^{-x}.
$$

Multiply through:

$$
\frac{d}{dx}(e^{-x}u)=-xe^{-x}.
$$

Integrate:

$$
e^{-x}u = (x+1)e^{-x} + C.
$$

So

$$
u = x+1+Ce^x.
$$

Since $u=1/y$,

$$
y=\frac{1}{x+1+Ce^x}.
$$

Also, $y=0$ is a constant solution of the original equation.
:::

<!--
id: first-order-odes-26
note: math-first-order-odes
title: "Analyze an Autonomous Equation"
exam: exam-ii
skills: [Autonomous Equations, Phase Lines]
-->

For

$$
y' = y(2-y),
$$

find the equilibrium solutions and classify each as stable or unstable.

:::solution
Equilibria occur when

$$
y(2-y)=0,
$$

so the equilibrium values are

$$
y=0 \quad \text{and} \quad y=2.
$$

Check the sign of $y(2-y)$ on each interval:

$$
y<0 \Rightarrow y(2-y)<0,
$$

so solutions decrease below $0$.

$$
0<y<2 \Rightarrow y(2-y)>0,
$$

so solutions increase toward $2$.

$$
y>2 \Rightarrow y(2-y)<0,
$$

so solutions decrease toward $2$.

Thus $y=0$ is unstable and $y=2$ is stable.
:::

<!--
id: first-order-odes-27
note: math-first-order-odes
title: "Apply the Existence-Uniqueness Theorem"
exam: exam-ii
skills: [Existence and Uniqueness]
-->

Consider the IVP

$$
y' = \frac{x+y}{1+y^2}, \qquad y(0)=0.
$$

Does the existence-uniqueness theorem from the note guarantee a unique local solution?

:::solution
Let

$$
f(x,y)=\frac{x+y}{1+y^2}.
$$

This function is continuous everywhere, and its partial derivative with respect to $y$ is also continuous because the denominator $1+y^2$ never vanishes.

So the theorem applies in a rectangle around $(0,0)$, and it guarantees a unique local solution.
:::

<!--
id: first-order-odes-28
note: math-first-order-odes
title: "Interpret a Cooling Model"
exam: exam-ii
skills: [Newton's Law of Cooling, Autonomous Equations]
-->

An object obeys

$$
\frac{dT}{dt} = -0.2(T-18).
$$

What is the equilibrium temperature, and what happens when $T>18$ and when $T<18$?

:::solution
Set the right-hand side equal to zero:

$$
-0.2(T-18)=0.
$$

So the equilibrium temperature is

$$
T=18.
$$

If $T>18$, then $T-18>0$, so

$$
\frac{dT}{dt}<0.
$$

The object cools toward $18$.

If $T<18$, then $T-18<0$, so

$$
\frac{dT}{dt}>0.
$$

The object warms toward $18$.
:::

<!--
id: first-order-odes-31
note: math-first-order-odes
title: "Build an Exponential Growth Model"
exam: final
skills: [Modeling Patterns, Exponential Growth]
-->

A bacterial culture has $250$ bacteria at $t=0$ and $500$ bacteria at $t=5$ hours. Assuming exponential growth, find the model $P(t)$.

:::solution
Exponential growth has the form

$$
P(t)=Ce^{kt}.
$$

From $P(0)=250$, we get

$$
C=250.
$$

Use $P(5)=500$:

$$
500 = 250e^{5k}.
$$

Divide by $250$:

$$
2 = e^{5k}.
$$

Take logs:

$$
5k = \ln 2
$$

so

$$
k = \frac{\ln 2}{5}.
$$

Therefore,

$$
P(t)=250e^{(\ln 2)t/5}.
$$
:::

<!--
id: first-order-odes-32
note: math-first-order-odes
title: "Solve a Newton Cooling Problem"
exam: final
skills: [Newton's Law of Cooling, Initial Value Problems]
-->

A cup of coffee starts at $90^\circ$C in a room at $20^\circ$C and satisfies

$$
\frac{dT}{dt}=-0.3(T-20), \qquad T(0)=90.
$$

Find $T(t)$ and the time when the coffee reaches $30^\circ$C.

:::solution
The cooling model has the form

$$
T(t)=20+Ce^{-0.3t}.
$$

Use $T(0)=90$:

$$
90=20+C
$$

so

$$
C=70.
$$

Thus

$$
T(t)=20+70e^{-0.3t}.
$$

Now set $T(t)=30$:

$$
30=20+70e^{-0.3t}.
$$

Subtract $20$:

$$
10=70e^{-0.3t}.
$$

Divide by $70$:

$$
\frac{1}{7}=e^{-0.3t}.
$$

Take logs:

$$
-0.3t = \ln\!\left(\frac{1}{7}\right) = -\ln 7.
$$

So

$$
t=\frac{\ln 7}{0.3}.
$$
:::

<!--
id: first-order-odes-33
note: math-first-order-odes
title: "Write a Mixing Equation"
exam: final
skills: [Mixing Problems, Linear First-Order Equations]
-->

A tank starts with $100$ liters of brine containing $8$ grams of salt. Pure water flows in at $3$ liters per minute, and the well-mixed solution flows out at the same rate.

Let $Q(t)$ be the amount of salt in grams. Write and solve the differential equation for $Q(t)$.

:::solution
Since pure water enters, the rate in is $0$.

The volume stays constant at $100$ liters, so the concentration in the tank is

$$
\frac{Q(t)}{100}\ \text{grams per liter}.
$$

The outflow rate of salt is

$$
3\cdot \frac{Q}{100}=\frac{3}{100}Q.
$$

So the differential equation is

$$
\frac{dQ}{dt}=-\frac{3}{100}Q.
$$

This is linear and separable. Its solution is

$$
Q(t)=Ce^{-3t/100}.
$$

Use $Q(0)=8$:

$$
C=8.
$$

Therefore,

$$
Q(t)=8e^{-3t/100}.
$$
:::

<!--
id: first-order-odes-34
note: math-first-order-odes
title: "Interpret a Logistic Model with Initial Data"
exam: final
skills: [Logistic Equation, Modeling Patterns]
-->

A population satisfies

$$
\frac{dP}{dt}=0.4P\left(1-\frac{P}{1000}\right), \qquad P(0)=200.
$$

Find the explicit solution.

:::solution
For a logistic equation,

$$
P(t)=\frac{K}{1+Ae^{-rt}}.
$$

Here $K=1000$ and $r=0.4$, so

$$
P(t)=\frac{1000}{1+Ae^{-0.4t}}.
$$

Use $P(0)=200$:

$$
200=\frac{1000}{1+A}.
$$

So

$$
1+A=5
$$

and

$$
A=4.
$$

Therefore,

$$
P(t)=\frac{1000}{1+4e^{-0.4t}}.
$$
:::

<!--
id: first-order-odes-35
note: math-first-order-odes
title: "Spot a Lost Constant Solution"
exam: final
skills: [Common Pitfalls, Separable Equations]
-->

A student solves

$$
\frac{dy}{dx}=xy
$$

by dividing by $y$ and gets

$$
y = Ce^{x^2/2}.
$$

What solution was lost, and why does it need to be checked separately?

:::solution
Dividing by $y$ assumes $y\neq 0$.

The constant solution

$$
y=0
$$

also satisfies

$$
\frac{dy}{dx}=xy.
$$

It must be checked separately because it is lost when the equation is divided by $y$.
:::

<!--
id: first-order-odes-41
note: math-first-order-odes
title: "Solve a Bernoulli Initial Value Problem"
exam: final
skills: [Bernoulli Equations, Initial Value Problems]
-->

Solve

$$
y' + \frac{1}{x}y = xy^2, \qquad y(1)=1.
$$

:::solution
This is a Bernoulli equation with $n=2$.

Multiply by $y^{-2}$:

$$
y^{-2}y' + \frac{1}{x}y^{-1} = x.
$$

Let

$$
u=y^{-1}.
$$

Then

$$
u'=-y^{-2}y',
$$

so

$$
-u' + \frac{1}{x}u = x.
$$

Rearrange:

$$
u' - \frac{1}{x}u = -x.
$$

This is linear. The integrating factor is

$$
\mu(x)=e^{\int -1/x\,dx}=e^{-\ln x}=\frac{1}{x}
$$

for $x>0$.

Multiply through:

$$
\frac{d}{dx}\!\left(\frac{u}{x}\right)=-1.
$$

Integrate:

$$
\frac{u}{x}=-x+C.
$$

So

$$
u=-x^2+Cx.
$$

Use $y(1)=1$, so $u(1)=1$:

$$
1=-1+C
$$

which gives

$$
C=2.
$$

Thus

$$
u=x(2-x),
$$

and since $u=1/y$,

$$
y=\frac{1}{x(2-x)}.
$$
:::

<!--
id: first-order-odes-42
note: math-first-order-odes
title: "Solve an Exact IVP"
exam: final
skills: [Exact Equations, Initial Value Problems]
-->

Solve

$$
(2xy+1)\,dx + (x^2+2y)\,dy = 0, \qquad y(0)=1.
$$

:::solution
Let

$$
M(x,y)=2xy+1, \qquad N(x,y)=x^2+2y.
$$

Check exactness:

$$
M_y=2x, \qquad N_x=2x.
$$

So the equation is exact.

Integrate $M$ with respect to $x$:

$$
\Psi(x,y)=\int (2xy+1)\,dx = x^2y + x + g(y).
$$

Differentiate with respect to $y$:

$$
\Psi_y = x^2 + g'(y).
$$

Match with $N$:

$$
x^2 + g'(y)=x^2+2y,
$$

so

$$
g'(y)=2y
$$

and

$$
g(y)=y^2.
$$

Thus

$$
x^2y + x + y^2 = C.
$$

Use $y(0)=1$:

$$
1=C.
$$

So the implicit solution is

$$
x^2y + x + y^2 = 1.
$$
:::

<!--
id: first-order-odes-43
note: math-first-order-odes
title: "Classify Stability on a Phase Line"
exam: final
skills: [Autonomous Equations, Phase Lines, Stability]
-->

For

$$
y' = y(1-y)^2,
$$

find the equilibrium solutions and classify each as stable, unstable, or semistable.

:::solution
Set the right-hand side equal to zero:

$$
y(1-y)^2=0.
$$

So the equilibria are

$$
y=0 \quad \text{and} \quad y=1.
$$

Now check the sign of $y(1-y)^2$:

$$
y<0 \Rightarrow y(1-y)^2<0,
$$

so solutions move downward on the left of $0$.

$$
0<y<1 \Rightarrow y(1-y)^2>0,
$$

so solutions move upward toward $1$ from the left.

$$
y>1 \Rightarrow y(1-y)^2>0,
$$

so solutions move upward away from $1$ on the right.

Therefore:

$$
y=0 \text{ is unstable,}
$$

and

$$
y=1 \text{ is semistable.}
$$
:::

<!--
id: first-order-odes-44
note: math-first-order-odes
title: "Compare Two Existence Questions"
exam: final
skills: [Existence and Uniqueness, Common Pitfalls]
-->

For each IVP, decide whether the theorem from the note guarantees a unique local solution.

1. $y' = \dfrac{1}{1+y^2}, \qquad y(0)=0$
2. $y' = \sqrt{|y|}, \qquad y(0)=0$

:::solution
For the first IVP, let

$$
f(x,y)=\frac{1}{1+y^2}.
$$

Both $f$ and $\partial f/\partial y$ are continuous everywhere, so the theorem guarantees a unique local solution.

For the second IVP,

$$
f(x,y)=\sqrt{|y|}.
$$

This function is continuous, but $\partial f/\partial y$ is not continuous at $y=0$, so the theorem does not guarantee uniqueness.

In fact, this is the kind of example in the note where non-uniqueness can occur.
:::
