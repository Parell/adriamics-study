# What counts as a second-order ODE

A **second-order ordinary differential equation** is an equation involving an unknown function \(y(x)\) and its derivatives up to order two:

$$
F(x, y, y', y'') = 0
$$

The order matters because it tells you how many independent initial conditions are typically needed to determine a solution.

Second-order ODEs show up naturally in:

- Newtonian mechanics
- vibration and wave models
- electrical circuits
- beam deflection and structural models
- heat and diffusion problems after separation of variables

The central tasks are usually:

- solve the equation exactly when possible
- classify the motion or response
- apply initial or boundary conditions
- interpret the physical behavior

---

# Classification and standard forms

## Linear vs nonlinear

A second-order ODE is **linear** if it can be written as

$$
a_2(x) y'' + a_1(x) y' + a_0(x) y = g(x)
$$

where \(y\), \(y'\), and \(y''\) appear only to the first power and are not multiplied together.

It is **nonlinear** if, for example, it contains terms such as:

$$
y^2,\quad y y',\quad \sin(y),\quad (y')^2
$$

## Homogeneous vs nonhomogeneous

The linear equation is **homogeneous** when

$$
g(x) = 0
$$

and **nonhomogeneous** when \(g(x) \neq 0\).

## Common standard forms

### General linear form

$$
a_2(x) y'' + a_1(x) y' + a_0(x) y = g(x)
$$

### Normalized form

If \(a_2(x) \neq 0\), divide through by \(a_2(x)\):

$$
y'' + p(x) y' + q(x) y = r(x)
$$

This form is often best for theory and method selection.

### Constant-coefficient form

$$
ay'' + by' + cy = g(x)
$$

with constants \(a \neq 0\), \(b\), and \(c\).

---

# Existence, uniqueness, and IVPs

For the initial value problem

$$
y'' = f(x, y, y'),\qquad y(x_0) = y_0,\qquad y'(x_0) = v_0
$$

the existence and uniqueness theorem says that if \(f\) and its relevant partial derivatives are continuous near \((x_0, y_0, v_0)\), then a unique local solution exists.

For linear equations in normal form

$$
y'' + p(x) y' + q(x) y = r(x),
$$

continuity of \(p(x)\), \(q(x)\), and \(r(x)\) on an interval is enough to guarantee a unique solution for any specified pair of initial conditions in that interval.

## Why two initial conditions?

Integrating a second-order equation effectively introduces two constants of integration. That is why you usually need:

$$
y(x_0) = y_0,\qquad y'(x_0) = v_0
$$

to pin down one specific solution.

---

# Homogeneous linear equations with constant coefficients

The foundational case is

$$
ay'' + by' + cy = 0
$$

Try a solution of the form \(y = e^{rx}\). Substitution gives the **characteristic equation**

$$
ar^2 + br + c = 0
$$

The roots of this quadratic determine the solution form.

## Case 1: two distinct real roots

If \(r_1 \neq r_2\), then

$$
y(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x}
$$

## Case 2: repeated real root

If \(r_1 = r_2 = r\), then

$$
y(x) = (C_1 + C_2 x)e^{rx}
$$

The extra factor of \(x\) gives a second independent solution.

## Case 3: complex conjugate roots

If

$$
r = \alpha \pm i\beta
$$

then

$$
y(x) = e^{\alpha x}\bigl(C_1 \cos(\beta x) + C_2 \sin(\beta x)\bigr)
$$

This is the most common form for oscillatory motion.

## Example

Solve

$$
y'' - 3y' + 2y = 0
$$

Characteristic equation:

$$
r^2 - 3r + 2 = 0 = (r-1)(r-2)
$$

So

$$
y(x) = C_1 e^x + C_2 e^{2x}
$$

---

# Forcing and particular solutions

For a nonhomogeneous linear equation

$$
ay'' + by' + cy = g(x),
$$

the general solution has the form

$$
y = y_h + y_p
$$

where:

- \(y_h\) solves the homogeneous equation
- \(y_p\) is any one particular solution of the full equation

The structure of \(g(x)\) usually determines the method.

## Undetermined coefficients

Use this when \(g(x)\) is built from exponentials, polynomials, sines, cosines, or products of these.

Typical guesses:

| Forcing \(g(x)\) | Trial form for \(y_p\) |
| --- | --- |
| \(e^{ax}\) | \(Ae^{ax}\) |
| \(P_n(x)\) | polynomial of degree \(n\) |
| \(\sin bx\) or \(\cos bx\) | \(A\cos bx + B\sin bx\) |
| \(e^{ax}P_n(x)\) | \(e^{ax}\) times a polynomial of degree \(n\) |
| \(e^{ax}\sin bx\), \(e^{ax}\cos bx\) | \(e^{ax}(A\cos bx + B\sin bx)\) |

### Resonance rule

If your trial solution duplicates part of \(y_h\), multiply the trial by \(x\) enough times to make it linearly independent.

#### Example of resonance

Solve

$$
y'' - 2y' + y = e^x
$$

Since the homogeneous equation has characteristic \((r-1)^2 = 0\), the homogeneous solution already contains \(e^x\) and \(xe^x\). A correct trial is

$$
y_p = Ax^2 e^x
$$

because the repeated root forces two powers of \(x\).

## Variation of parameters

Use this when undetermined coefficients is not convenient.

If \(y_1\) and \(y_2\) are independent solutions of the homogeneous equation

$$
y'' + p(x)y' + q(x)y = r(x),
$$

then a particular solution can be built as

$$
y_p = u_1(x)y_1(x) + u_2(x)y_2(x)
$$

where \(u_1\) and \(u_2\) are determined from a system involving the Wronskian.

---

# Variable-coefficient special cases

## Euler-Cauchy equations

The Euler-Cauchy, or equidimensional, form is

$$
x^2 y'' + a x y' + b y = 0
$$

Try \(y = x^m\). Then:

$$
y' = mx^{m-1},\qquad y'' = m(m-1)x^{m-2}
$$

Substitution gives the auxiliary equation

$$
m(m-1) + am + b = 0
$$

So the same root patterns appear as in constant-coefficient problems.

## Reduction by substitution

Sometimes a change of variables converts a variable-coefficient equation into a constant-coefficient one. For Euler-Cauchy equations, the substitution

$$
x = e^t
$$

is a common route.

---

# Reduction of order and variation of parameters

## Reduction of order

If one nonzero solution \(y_1\) of the homogeneous equation is known, try

$$
y = v(x)y_1(x)
$$

to reduce the order by one. After substitution, the equation for \(v\) is lower order and can often be integrated.

This is especially useful when:

- one solution is obvious
- the equation is linear but not constant-coefficient
- you are given one solution and asked to find the general solution

## Wronskian

The Wronskian of two functions \(y_1\) and \(y_2\) is

$$
W(y_1,y_2) =
\begin{vmatrix}
y_1 & y_2 \\
y_1' & y_2'
\end{vmatrix}
= y_1 y_2' - y_1' y_2
$$

If \(W \neq 0\) on an interval, the functions are linearly independent there.

For

$$
y'' + p(x)y' + q(x)y = r(x),
$$

variation of parameters uses the Wronskian to build \(u_1\) and \(u_2\).

---

# Initial and boundary value problems

## Initial value problems

An IVP specifies values at a single point:

$$
y(x_0) = y_0,\qquad y'(x_0) = v_0
$$

Steps:

1. Solve the differential equation.
2. Differentiate if needed.
3. Apply the initial conditions.
4. Solve for the constants.

## Boundary value problems

A BVP specifies conditions at different points, for example:

$$
y(0) = 0,\qquad y(L) = 0
$$

These occur frequently in:

- beam bending
- heat conduction
- vibrating strings
- Sturm-Liouville problems

Boundary conditions can sometimes produce:

- a unique solution
- no solution
- infinitely many solutions

depending on the forcing and the eigenstructure of the operator.

---

# Mechanical applications

Many second-order ODEs come from Newtonâ€™s second law:

$$
m y'' = \sum F
$$

## Mass-spring system

With no damping and no external forcing:

$$
m y'' + k y = 0
$$

The solution is harmonic:

$$
y(x) = C_1 \cos(\omega x) + C_2 \sin(\omega x),
\qquad \omega = \sqrt{\frac{k}{m}}
$$

## Damped vibration

With viscous damping:

$$
m y'' + c y' + k y = 0
$$

Divide by \(m\):

$$
y'' + 2\zeta \omega_n y' + \omega_n^2 y = 0
$$

where

$$
\omega_n = \sqrt{\frac{k}{m}},\qquad
\zeta = \frac{c}{2\sqrt{mk}}
$$

### Damping regimes

| Regime | Condition | Behavior |
| --- | --- | --- |
| Underdamped | \(\zeta < 1\) | Oscillatory with decaying amplitude |
| Critically damped | \(\zeta = 1\) | Fastest return without oscillation |
| Overdamped | \(\zeta > 1\) | Non-oscillatory, slower return |
## Forced vibration

With external forcing \(F(t)\):

$$
m y'' + c y' + k y = F(t)
$$

The solution is usually split into:

$$
y(t) = y_{\text{transient}}(t) + y_{\text{steady}}(t)
$$

If \(F(t)\) is periodic, resonance and near-resonance can produce large response amplitudes.

---

# Qualitative behavior

Even when an exact formula is available, it helps to understand the shape of the solution.

## Stability of equilibrium

For the autonomous equation

$$
y'' + f(y, y') = 0
$$

equilibria correspond to constant solutions. Linearization near equilibrium often predicts local behavior.

## Phase-plane viewpoint

Rewrite the second-order ODE as a first-order system:

$$
u = y,\qquad v = y'
$$

Then:

$$
u' = v,\qquad v' = \text{expression in }u,v,x
$$

This is useful for:

- understanding oscillations
- identifying spirals, nodes, and saddles
- checking the effect of damping

## Long-term behavior

For linear constant-coefficient equations, the real parts of the characteristic roots control growth or decay.

- Negative real part: decay
- Zero real part: sustained oscillation or neutral behavior
- Positive real part: growth and instability

---

# Problem-solving workflow

1. Put the equation in standard form.
2. Determine whether it is linear or nonlinear.
3. Identify whether it is homogeneous.
4. Check if coefficients are constant, Euler-Cauchy, or variable.
5. Solve the homogeneous equation first.
6. Choose a method for a particular solution if forcing is present.
7. Apply initial or boundary conditions.
8. Sanity-check the result against the original equation and the expected behavior.

## Fast method selection

| Equation type | Best first method |
| --- | --- |
| Linear constant coefficients, homogeneous | Characteristic equation |
| Linear constant coefficients, polynomial/exponential/trig forcing | Undetermined coefficients |
| Linear variable coefficients with known solution | Reduction of order |
| General linear forcing | Variation of parameters |
| Euler-Cauchy | Power trial \(y=x^m\) |
| Physical mass-spring model | Characteristic equation with damping interpretation |

## Common pitfalls

- Forgetting two integration constants for a second-order homogeneous solution
- Using an undetermined-coefficients guess that duplicates the homogeneous solution
- Dropping the \(x\)-factor needed for repeated roots
- Mixing up \(y'\) and \(y''\) when applying initial conditions
- Applying a method that assumes constant coefficients to a variable-coefficient equation
- Treating a boundary value problem like an initial value problem

---

# Formula summary

## Standard linear form

$$
a_2(x)y'' + a_1(x)y' + a_0(x)y = g(x)
$$

## Normalized form

$$
y'' + p(x)y' + q(x)y = r(x)
$$

## Constant-coefficient homogeneous equation

$$
ay'' + by' + cy = 0
$$

Characteristic equation:

$$
ar^2 + br + c = 0
$$

## Solution templates

Distinct real roots:

$$
y = C_1 e^{r_1 x} + C_2 e^{r_2 x}
$$

Repeated root:

$$
y = (C_1 + C_2 x)e^{rx}
$$

Complex roots:

$$
y = e^{\alpha x}\bigl(C_1\cos(\beta x) + C_2\sin(\beta x)\bigr)
$$

## Euler-Cauchy trial

$$
y = x^m
$$

leading to

$$
m(m-1) + am + b = 0
$$

## General linear solution

$$
y = y_h + y_p
$$

## Wronskian

$$
W = y_1 y_2' - y_1' y_2
$$

## Mass-spring frequency

$$
\omega_n = \sqrt{\frac{k}{m}}
$$

## Damping ratio

$$
\zeta = \frac{c}{2\sqrt{mk}}
$$

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
