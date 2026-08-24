# Matrix form and solution structure

Many systems can be written compactly with vectors and matrices.

## Linear system

A general linear system is

$$
\mathbf{x}' = A(t)\mathbf{x} + \mathbf{g}(t)
$$

where:

- $\mathbf{x}(t)$ is the unknown vector
- $A(t)$ is a coefficient matrix
- $\mathbf{g}(t)$ is a forcing vector

If $A$ is constant and $\mathbf{g}(t)=\mathbf{0}$, the system is **linear autonomous homogeneous**:

$$
\mathbf{x}' = A\mathbf{x}
$$

This is the most important case because it is fully analyzable with linear algebra.

## Superposition

For a homogeneous linear system:

- if $\mathbf{x}_1$ and $\mathbf{x}_2$ are solutions, then $\mathbf{x}_1 + \mathbf{x}_2$ is also a solution
- if $c$ is a constant, then $c\mathbf{x}_1$ is also a solution

That means the set of solutions forms a vector space.

## Dimension of the solution space

For an $n \times n$ first-order linear homogeneous system, the general solution depends on $n$ constants. Equivalently, you need $n$ independent initial conditions to determine a unique solution.

---

# Linear autonomous systems

The canonical form is

$$
\mathbf{x}' = A\mathbf{x}
$$

with constant matrix $A$.

## Why this case matters

The behavior of the system is controlled by the matrix $A$:

- eigenvalues determine growth, decay, oscillation, and stability
- eigenvectors determine invariant directions
- the matrix exponential gives the exact solution

For a $2 \times 2$ system,

$$
\begin{bmatrix}
x' \\
y'
\end{bmatrix}
=
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
$$

or equivalently,

$$
x' = ax + by, \qquad y' = cx + dy
$$

## Decoupling idea

If you can find a change of variables that diagonalizes or simplifies $A$, the system may split into independent scalar ODEs. This is the linear-algebra viewpoint behind most solution methods.

---

# Eigenmodes as an ODE application

The eigenvalue definitions, characteristic-equation derivation, eigenspaces, and repeated-root
cases are developed in the [Eigenvalues note](../eigenvalues/eigenvalues.md). Here we use only
their consequence for time-dependent solutions: if $A\mathbf{v}=\lambda\mathbf{v}$, then

$$
\mathbf{x}(t)=e^{\lambda t}\mathbf{v}
$$

is an eigenmode of $\mathbf{x}'=A\mathbf{x}$. The mode interpretation is:

| Eigenvalue pattern | ODE behavior |
| --- | --- |
| Real $\lambda<0$ | Exponential decay |
| Real $\lambda>0$ | Exponential growth |
| $\lambda=0$ | Neutral mode |
| $\alpha\pm\beta i$ | Oscillation with envelope $e^{\alpha t}$ |
| Repeated/defective eigenvalue | Generalized-eigenvector terms such as $t e^{\lambda t}$ may occur |

If enough independent eigenvectors exist, the general homogeneous solution is a linear combination
of these modes. The table is the application recap; see [Eigenvalues](../eigenvalues/eigenvalues.md)
for how to compute and classify the eigenpairs.

---

# The matrix exponential

The exact solution of

$$
\mathbf{x}' = A\mathbf{x}, \qquad \mathbf{x}(0)=\mathbf{x}_0
$$

is

$$
\mathbf{x}(t)=e^{At}\mathbf{x}_0
$$

where $e^{At}$ is the **matrix exponential**.

## Definition

$$
e^{At} = I + At + \frac{(At)^2}{2!} + \frac{(At)^3}{3!} + \cdots
$$

This is analogous to the scalar exponential series.

## Diagonalizable case

Using the diagonalization result from the [Eigenvalues note](../eigenvalues/eigenvalues.md#6-diagonalization),
with $D = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$, the matrix exponential is

$$
e^{At} = Pe^{Dt}P^{-1}
$$

and

$$
e^{Dt} = \operatorname{diag}(e^{\lambda_1 t}, \dots, e^{\lambda_n t})
$$

This is the cleanest computational route; the construction and validity of $P$ and $D$ belong to
the [Eigenvalues note](../eigenvalues/eigenvalues.md#6-diagonalization).

## Practical use

You often do not compute the full series. Instead, use:

- diagonalization
- eigenvector decomposition
- Jordan form when necessary
- software or a calculator for large systems

---

# Nonhomogeneous linear systems

The forced system

$$
\mathbf{x}' = A\mathbf{x} + \mathbf{g}(t)
$$

combines natural dynamics from $A$ with external input $\mathbf{g}(t)$.

## General solution structure

The solution is

$$
\mathbf{x}(t) = \mathbf{x}_h(t) + \mathbf{x}_p(t)
$$

where:

- $\mathbf{x}_h$ solves the homogeneous system $\mathbf{x}' = A\mathbf{x}$
- $\mathbf{x}_p$ is any particular solution of the full system

## Variation of parameters

If $\Phi(t)$ is a fundamental matrix for $\mathbf{x}' = A\mathbf{x}$, then a particular solution can be written as

$$
\mathbf{x}_p(t) = \Phi(t)\int \Phi(t)^{-1}\mathbf{g}(t)\,dt
$$

This is the matrix version of variation of parameters for scalar ODEs.

## Common forcing types

Forcing terms often include:

- constants
- polynomials
- exponentials
- sines and cosines
- combinations of the above

For constant-coefficient systems, undetermined coefficients can work when the forcing has a simple form.

---

# Phase portraits and stability

For a two-dimensional autonomous system, the **phase plane** is the $(x,y)$ plane of states. A **phase portrait** shows representative trajectories.

## Equilibria

An equilibrium point satisfies

$$
\mathbf{f}(\mathbf{x}^*) = \mathbf{0}
$$

For a linear system $\mathbf{x}' = A\mathbf{x}$, the only equilibrium is usually the origin unless the system is degenerate.

## Stability ideas

An equilibrium is:

- **stable** if nearby trajectories stay nearby
- **asymptotically stable** if nearby trajectories converge to it
- **unstable** if arbitrarily small perturbations can move away

For linear systems, the eigenvalues of $A$ determine this.

## Classification for 2x2 systems

Let the eigenvalues of $A$ be $\lambda_1,\lambda_2$.

| Eigenvalue pattern | Typical behavior |
| --- | --- |
| Both real, negative | Stable node |
| Both real, positive | Unstable node |
| Opposite signs | Saddle, unstable |
| Complex with negative real part | Stable spiral |
| Complex with positive real part | Unstable spiral |
| Purely imaginary | Center in the ideal linear case |

If one eigenvalue is zero or repeated, examine the eigenvectors and the full normal form carefully.

## Trace-determinant test for 2x2 systems

For

$$
A=
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

define:

$$
\tau = \operatorname{tr}(A)=a+d, \qquad \Delta = \det(A)=ad-bc
$$

Then the characteristic polynomial is

$$
\lambda^2 - \tau \lambda + \Delta = 0
$$

and the discriminant is

$$
\tau^2 - 4\Delta
$$

This quickly tells you whether the eigenvalues are real or complex and whether the origin is stable.
---

# Nonlinear systems and linearization

A nonlinear system has the form

$$
\mathbf{x}' = \mathbf{f}(\mathbf{x})
$$

or more generally

$$
\mathbf{x}' = \mathbf{f}(t,\mathbf{x})
$$

Nonlinear systems can have multiple equilibria, limit cycles, bifurcations, and behavior that is not captured by linear theory alone.

## Linearization

Near an equilibrium point $\mathbf{x}^*$, approximate the system by its Jacobian matrix:

$$
\mathbf{x}' \approx J(\mathbf{x}^*)(\mathbf{x}-\mathbf{x}^*)
$$

where

$$
J(\mathbf{x}) =
\left[
\frac{\partial f_i}{\partial x_j}
\right]
$$

This produces a linear system that approximates the nonlinear system near the equilibrium.

## Interpreting the linearization

- If the linearized system has eigenvalues with negative real part, the equilibrium is often locally asymptotically stable.
- If it has an eigenvalue with positive real part, the equilibrium is unstable.
- If eigenvalues lie on the imaginary axis or are zero, linearization may be inconclusive.

## Caveat

Linearization is a local tool. It tells you about behavior near an equilibrium, not the full global dynamics.

---

# Common modeling patterns

## Coupled growth and decay

If one variable feeds another, the system may look like

$$
\mathbf{x}' = A\mathbf{x}
$$

with off-diagonal terms representing interaction rates.

## Mass-spring systems

Second-order equations often become first-order systems by introducing velocity.

For

$$
m x'' + c x' + kx = 0
$$

set

$$
u = x, \qquad v = x'
$$

Then

$$
u' = v, \qquad v' = -\frac{k}{m}u - \frac{c}{m}v
$$

This is a standard way to convert a higher-order ODE into a system.

## Predator-prey models

Typical nonlinear interactions are modeled by

$$
\begin{aligned}
x' &= f(x,y) \\
y' &= g(x,y)
\end{aligned}
$$

where growth of one species depends on the other. Equilibria are found by solving $x'=0$ and $y'=0$ simultaneously.

## Electrical circuits

In circuits with capacitors and inductors, Kirchhoff's laws often produce systems for charge and current. These are frequently linear with constant coefficients.

---

# Problem-solving workflow

When solving a system of ODEs, use a disciplined sequence.

## Identify the type

Decide whether the system is:

- linear or nonlinear
- autonomous or nonautonomous
- homogeneous or forced
- one-dimensional, two-dimensional, or higher

## Rewrite in matrix form

Put the system into

$$
\mathbf{x}' = A\mathbf{x} + \mathbf{g}(t)
$$

if possible.

## Find equilibria

Set all derivatives to zero and solve the algebraic system.

## Use the eigenvalue results

For linear systems, obtain eigenvalues and eigenvectors using the [Eigenvalues note](../eigenvalues/eigenvalues.md),
then interpret the resulting modes in time.

## Build the solution basis

Use:

- eigenvectors if $A$ is diagonalizable
- generalized eigenvectors if not
- variation of parameters or undetermined coefficients for forcing

## Apply initial conditions

Substitute the initial state to determine the constants.

## Interpret the result

Check whether the solution:

- grows or decays
- oscillates
- approaches equilibrium
- matches the physical context

---

# Formula sheet

## Homogeneous linear system

$$
\mathbf{x}' = A\mathbf{x}
$$

## Exact solution

$$
\mathbf{x}(t)=e^{At}\mathbf{x}(0)
$$

## Matrix exponential

$$
e^{At}=I+At+\frac{(At)^2}{2!}+\cdots
$$

## Eigenmode interpretation

If $A\mathbf{v}=\lambda\mathbf{v}$, then $\mathbf{x}(t)=e^{\lambda t}\mathbf{v}$; see the
[eigenmode recap](#4-eigenmodes-as-an-ode-application) and the [Eigenvalues note](../eigenvalues/eigenvalues.md)
for computation.

## Linearization near equilibrium

$$
\mathbf{x}' \approx J(\mathbf{x}^*)(\mathbf{x}-\mathbf{x}^*)
$$

## Forced linear system

$$
\mathbf{x}' = A\mathbf{x} + \mathbf{g}(t)
$$

## Variation of parameters

$$
\mathbf{x}_p(t)=\Phi(t)\int \Phi(t)^{-1}\mathbf{g}(t)\,dt
$$

---

## Key pitfalls

- Mixing up vector solutions with scalar solutions
- Forgetting that one first-order system of size $n$ needs $n$ constants
- Using scalar intuition when eigenvectors are not enough
- Ignoring complex eigenvalues and their oscillatory interpretation
- Treating linearization as a global solution method
- Forgetting to apply initial conditions after finding the general solution

## Quick intuition

- Eigenvalues control time behavior.
- Eigenvectors control directions.
- The matrix exponential packages the whole solution.
- Nonlinear systems are often best understood locally by linearization.

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
