# First-Order ODEs

First-order ordinary differential equations (ODEs) involve an unknown function $y(x)$ and its first derivative $y'$. They are the first serious class of differential equations because many modeling problems reduce to them, and because most core solution techniques appear here in their simplest form.
# Initial value problems and geometric meaning

A first-order ODE usually becomes a specific problem once an initial condition is given:

$$
\frac{dy}{dx} = f(x,y), \qquad y(x_0)=y_0
$$

This is an **initial value problem** (IVP).

## General solution vs. particular solution

- The **general solution** contains one arbitrary constant.
- A **particular solution** is obtained after using the initial condition.

Example:

$$
y' = 2x
$$

Integrating gives

$$
y = x^2 + C
$$

If $y(1)=5$, then

$$
5 = 1 + C \Rightarrow C=4
$$

so the particular solution is

$$
y = x^2 + 4
$$

## Direction fields

For

$$
y' = f(x,y)
$$

the value of $f(x,y)$ gives the slope of the solution curve through the point $(x,y)$. A **slope field** or **direction field** gives qualitative information even when a closed-form solution is difficult.

What to look for:

- Where slopes are zero
- Where slopes are positive or negative
- Where slopes become large in magnitude
- Whether solutions move toward or away from equilibrium values
---

# Separable equations

A first-order ODE is **separable** if it can be written as

$$
\frac{dy}{dx} = g(x)h(y)
$$

so that variables can be separated:

$$
\frac{1}{h(y)}\,dy = g(x)\,dx
$$

Then integrate both sides:

$$
\int \frac{1}{h(y)}\,dy = \int g(x)\,dx
$$

## Standard workflow

1. Rewrite the equation so all $y$ terms are with $dy$ and all $x$ terms are with $dx$.
2. Integrate both sides.
3. Solve explicitly for $y$ if possible.
4. Use the initial condition.
5. Check for constant solutions that may have been lost when dividing by $h(y)$.

## Example

Solve

$$
\frac{dy}{dx} = xy
$$

Separate:

$$
\frac{1}{y}\,dy = x\,dx
$$

Integrate:

$$
\int \frac{1}{y}\,dy = \int x\,dx
$$

$$
\ln |y| = \frac{x^2}{2} + C
$$

Exponentiate:

$$
y = Ce^{x^2/2}
$$

where the constant has been renamed.

## Logistic equation

One of the most important separable models is

$$
\frac{dP}{dt} = rP\left(1-\frac{P}{K}\right)
$$

where:

- $P(t)$ is population
- $r$ is intrinsic growth rate
- $K$ is carrying capacity

Key behavior:

- If $0 < P < K$, then $P$ grows.
- If $P > K$, then $P$ decreases.
- Equilibria occur at $P=0$ and $P=K$.

Its explicit solution is

$$
P(t) = \frac{K}{1 + Ae^{-rt}}
$$

for a constant $A$ determined by the initial condition.

---

# Linear first-order equations

A first-order linear ODE has the standard form

$$
y' + p(x)y = q(x)
$$

The main tool is an **integrating factor**.

## Integrating factor

Define

$$
\mu(x) = e^{\int p(x)\,dx}
$$

Multiplying the ODE by $\mu(x)$ gives

$$
\mu y' + \mu p y = \mu q
$$

and the left side becomes

$$
\frac{d}{dx}\big(\mu y\big) = \mu q
$$

So

$$
\mu y = \int \mu q\,dx + C
$$

and therefore

$$
y = \frac{1}{\mu(x)}\left(\int \mu(x)q(x)\,dx + C\right)
$$

## Example

Solve

$$
y' + 2y = e^{-x}
$$

Here

$$
p(x)=2, \qquad q(x)=e^{-x}
$$

The integrating factor is

$$
\mu(x)=e^{\int 2\,dx}=e^{2x}
$$

Multiply through:

$$
e^{2x}y' + 2e^{2x}y = e^x
$$

So

$$
\frac{d}{dx}(e^{2x}y)=e^x
$$

Integrate:

$$
e^{2x}y = e^x + C
$$

Hence

$$
y = e^{-x} + Ce^{-2x}
$$

## Common source of mistakes

- The integrating factor depends only on $p(x)$, not on $q(x)$.
- The equation must first be put into the exact linear form $y' + p(x)y = q(x)$.
- Do not forget to divide by $\mu(x)$ at the end.

---

# Exact equations

An equation of the form

$$
M(x,y)\,dx + N(x,y)\,dy = 0
$$

is **exact** if there exists a potential function $\Psi(x,y)$ such that

$$
\frac{\partial \Psi}{\partial x} = M,
\qquad
\frac{\partial \Psi}{\partial y} = N
$$

Then the solution is

$$
\Psi(x,y)=C
$$

## Test for exactness

If $M$ and $N$ have continuous first partial derivatives, test whether

$$
\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}
$$

If this holds on a region, the equation is exact there.

## Solution procedure

1. Verify exactness.
2. Integrate $M(x,y)$ with respect to $x$:

$$
\Psi(x,y) = \int M(x,y)\,dx + g(y)
$$

3. Differentiate that expression with respect to $y$.
4. Match it to $N(x,y)$ to determine $g(y)$.
5. Write $\Psi(x,y)=C$.

## Example

Solve

$$
(2xy+1)\,dx + (x^2+3y^2)\,dy = 0
$$

Here

$$
M(x,y)=2xy+1, \qquad N(x,y)=x^2+3y^2
$$

Check:

$$
M_y = 2x, \qquad N_x = 2x
$$

so the equation is exact.

Integrate $M$ with respect to $x$:

$$
\Psi(x,y)=x^2y + x + g(y)
$$

Differentiate with respect to $y$:

$$
\Psi_y = x^2 + g'(y)
$$

Match with $N$:

$$
x^2 + g'(y) = x^2 + 3y^2
$$

Thus

$$
g'(y)=3y^2 \Rightarrow g(y)=y^3
$$

So the implicit solution is

$$
x^2y + x + y^3 = C
$$

---

# Homogeneous first-order equations

A first-order ODE of the form

$$
\frac{dy}{dx} = F\left(\frac{y}{x}\right)
$$

is called **homogeneous** in the first-order sense.

The substitution

$$
y = vx
$$

or equivalently $v = y/x$ turns it into a separable equation.

Since

$$
y = vx \Rightarrow \frac{dy}{dx} = v + x\frac{dv}{dx}
$$

the equation becomes

$$
v + x\frac{dv}{dx} = F(v)
$$

which can be rearranged into a separable form.

## Example pattern

If

$$
\frac{dy}{dx} = \frac{x+y}{x}
= 1 + \frac{y}{x}
$$

set $y=vx$. Then

$$
v + x\frac{dv}{dx} = 1+v
$$

so

$$
x\frac{dv}{dx}=1
$$

and therefore

$$
v = \ln|x| + C
$$

Returning to $y$:

$$
\frac{y}{x} = \ln|x| + C
\Rightarrow
y = x\ln|x| + Cx
$$

---

# Bernoulli equations

A **Bernoulli equation** has the form

$$
y' + p(x)y = q(x)y^n
$$

with $n \neq 0,1$.

It is nonlinear, but becomes linear after the substitution

$$
u = y^{1-n}
$$

## Derivation

Differentiate:

$$
u' = (1-n)y^{-n}y'
$$

After multiplying the original equation by $y^{-n}$, the equation becomes linear in $u$.

## Why it matters

Bernoulli equations are one of the cleanest examples of a nonlinear ODE that reduces to a linear one by a well-chosen substitution.

---

# Autonomous equations and equilibria

An **autonomous** first-order ODE has the form

$$
\frac{dy}{dt} = f(y)
$$

The independent variable does not appear explicitly.

## Equilibrium solutions

An equilibrium occurs when

$$
f(y)=0
$$

If $y=y^*$ satisfies this, then the constant function $y(t)=y^*$ is a solution.

## Stability

For autonomous equations, equilibrium points can often be classified from the sign of $f(y)$:

- If nearby arrows point toward the equilibrium, it is **stable**.
- If nearby arrows point away, it is **unstable**.
- If attraction occurs on one side only, it is **semistable**.

## Phase line analysis

To analyze

$$
y' = f(y)
$$

1. Find equilibrium values by solving $f(y)=0$.
2. Mark them on a number line.
3. Determine the sign of $f(y)$ on each interval.
4. Use the sign to infer whether $y$ increases or decreases.

This gives the long-term behavior without solving explicitly.

---

# Existence and uniqueness

For an IVP

$$
y' = f(x,y), \qquad y(x_0)=y_0
$$

two separate questions matter:

- Does a solution exist?
- Is it unique?

## Practical theorem

If $f(x,y)$ and $\partial f/\partial y$ are continuous in a rectangle containing $(x_0,y_0)$, then there exists a unique local solution through that point.

## Interpretation

- Continuity of $f$ supports existence.
- Reasonable smoothness in $y$ supports uniqueness.

## Example of non-uniqueness

Consider

$$
y' = \sqrt{|y|}, \qquad y(0)=0
$$

The constant solution $y=0$ works, but nonzero solutions can also be patched through the same initial point. So uniqueness fails.

This is a warning that a differential equation can look harmless and still fail to determine a single trajectory.

---

# Modeling patterns

First-order ODEs appear naturally in rate laws where the rate of change depends on the current state.

## Exponential growth and decay

If a quantity changes proportionally to itself:

$$
\frac{dy}{dt} = ky
$$

then

$$
y(t)=Ce^{kt}
$$

Interpretation:

- $k>0$: growth
- $k<0$: decay

Applications:

- Population growth
- Radioactive decay
- Compound interest in continuous form

## Newton's law of cooling

If an object's temperature $T$ moves toward ambient temperature $T_a$:

$$
\frac{dT}{dt} = -k(T-T_a)
$$

Then

$$
T(t)=T_a + Ce^{-kt}
$$

## Mixing problems

If a tank has inflow and outflow, a common model is

$$
\frac{dQ}{dt} = \text{rate in} - \text{rate out}
$$

where $Q(t)$ is the amount of substance in the tank.

These often reduce to linear first-order equations after expressing concentration as amount divided by volume.

---

# Problem-solving workflow

When facing a first-order ODE, classification is the main step.

## Fast recognition checklist

Ask these questions in order:

1. Can the variables be separated?
2. Can it be written as $y' + p(x)y = q(x)$?
3. Can it be written as $M\,dx + N\,dy = 0$, and is it exact?
4. Does it depend only on $y/x$?
5. Is it Bernoulli?
6. Is it autonomous, so a phase-line analysis helps even if explicit solving is hard?

## Practical workflow

1. Rewrite the equation into a recognizable form.
2. Classify the type before doing algebra.
3. Apply the matching method cleanly.
4. Use the initial condition only after obtaining the general solution.
5. Check the domain and any excluded values.
6. Verify by differentiating and substituting back if the algebra was heavy.

## Strategy note

Many errors happen because a student starts manipulating symbols before identifying the equation type. Classification usually matters more than raw integration skill.

---

# Common pitfalls

- Treating a nonlinear equation as if the superposition principle applies. It does not.
- Forgetting equilibrium solutions when separating variables and dividing by an expression involving $y$.
- Using the integrating factor method before first putting the equation in standard linear form.
- Confusing first-order homogeneous equations with higher-level linear algebra notions of homogeneous systems.
- Losing absolute values when integrating expressions like $\int \frac{1}{y}\,dy$.
- Solving implicitly and then making invalid algebraic moves to force an explicit formula.
- Ignoring interval restrictions caused by denominators, logarithms, or square roots.
- Assuming existence implies uniqueness.

---

# Formula sheet

## Core forms

Separable:

$$
\frac{dy}{dx} = g(x)h(y)
$$

Linear:

$$
y' + p(x)y = q(x)
$$

Exact:

$$
M(x,y)\,dx + N(x,y)\,dy = 0
$$

Homogeneous:

$$
\frac{dy}{dx} = F\left(\frac{y}{x}\right)
$$

Bernoulli:

$$
y' + p(x)y = q(x)y^n
$$

Autonomous:

$$
\frac{dy}{dt} = f(y)
$$

## Key tools

Integrating factor for linear equations:

$$
\mu(x)=e^{\int p(x)\,dx}
$$

Exactness test:

$$
\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}
$$

Homogeneous substitution:

$$
y=vx, \qquad y' = v + x\frac{dv}{dx}
$$

Bernoulli substitution:

$$
u = y^{1-n}
$$

## High-yield reminders

- First classify, then solve.
- Check for constant solutions.
- Use the initial condition after the general solution is found.
- Verify important answers by substitution.

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
