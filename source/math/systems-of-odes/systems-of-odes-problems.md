<!--
id: systems-of-odes-11
note: math-systems-of-odes
title: "Write a System in Matrix Form"
exam: exam-i
skills: [Matrix Form, Systems of ODEs]
-->

Rewrite the system in matrix form:

$$
\begin{aligned}
x' &= 2x - y \\
y' &= 4x + 3y
\end{aligned}
$$

:::solution
Write the state vector as

$$
\mathbf{x} =
\begin{bmatrix}
x \\
y
\end{bmatrix}.
$$

Then the system is

$$
\mathbf{x}' =
\begin{bmatrix}
2 & -1 \\
4 & 3
\end{bmatrix}
\mathbf{x}.
$$
:::

<!--
id: systems-of-odes-12
note: math-systems-of-odes
title: "Classify a Linear System"
exam: exam-i
skills: [Linear Systems, Homogeneous vs. Nonhomogeneous]
-->

Classify the system as linear, autonomous, homogeneous, or nonhomogeneous:

$$
\mathbf{x}' =
\begin{bmatrix}
1 & 0 \\
2 & -3
\end{bmatrix}
\mathbf{x}

\begin{bmatrix}
\sin t \\
1
\end{bmatrix}.
$$

:::solution
The system is linear because it has the form

$$
\mathbf{x}' = A\mathbf{x} + \mathbf{g}(t).
$$

It is **nonautonomous** because the forcing term depends on $t$.

It is **nonhomogeneous** because $\mathbf{g}(t) \neq \mathbf{0}$.
:::

<!--
id: systems-of-odes-13
note: math-systems-of-odes
title: "Count the Constants in a 4x4 System"
exam: exam-i
skills: [Solution Space, Linear Systems]
-->

A first-order linear homogeneous system has size $4 \times 4$.

How many arbitrary constants appear in the general solution?

:::solution
A first-order linear homogeneous system of size $n \times n$ has $n$ independent solution constants.

Here $n = 4$, so the general solution depends on

$$
4
$$

arbitrary constants.
:::

<!--
id: systems-of-odes-14
note: math-systems-of-odes
title: "Find All Equilibria of a Nonlinear System"
exam: exam-i
skills: [Equilibria, Nonlinear Systems]
-->

Find all equilibria of the system

$$
\begin{aligned}
x' &= x(3-x) \\
y' &= y(y-2)
\end{aligned}
$$

:::solution
An equilibrium occurs when both derivatives are zero.

From $x' = x(3-x) = 0$, we get

$$
x = 0 \quad \text{or} \quad x = 3.
$$

From $y' = y(y-2) = 0$, we get

$$
y = 0 \quad \text{or} \quad y = 2.
$$

Combine the choices to get the equilibria:

$$
(0,0),\ (0,2),\ (3,0),\ (3,2).
$$
:::

<!--
id: systems-of-odes-15
note: math-systems-of-odes
title: "Use an Eigenpair to Write a Solution"
exam: exam-i
skills: [Eigenvalues, Eigenvectors]
-->

Suppose $A\mathbf{v} = -2\mathbf{v}$.

What solution of $\mathbf{x}' = A\mathbf{x}$ does this eigenpair generate?

:::solution
An eigenpair $(\lambda,\mathbf{v})$ gives a solution of the form

$$
\mathbf{x}(t) = e^{\lambda t}\mathbf{v}.
$$

Here $\lambda = -2$, so the solution is

$$
\mathbf{x}(t) = e^{-2t}\mathbf{v}.
$$
:::

<!--
id: systems-of-odes-16
note: math-systems-of-odes
title: "Interpret a Negative Eigenvalue"
exam: exam-i
skills: [Eigenvalues, Stability]
-->

A mode of a system has eigenvalue $\lambda = -5$.

What does that tell you about the behavior of that mode?

:::solution
The mode has the factor

$$
e^{-5t}.
$$

As $t$ increases, $e^{-5t} \to 0$, so that mode decays exponentially.
:::

<!--
id: systems-of-odes-17
note: math-systems-of-odes
title: "Interpret Complex Eigenvalues"
exam: exam-i
skills: [Complex Eigenvalues, Oscillation]
-->

A system has eigenvalues

$$
\lambda = 1 \pm 4i.
$$

What qualitative behavior should you expect?

:::solution
Complex eigenvalues produce oscillation, and the real part controls growth or decay.

Here the real part is $1$, so the oscillations are multiplied by $e^t$.

That means the motion oscillates while growing in size, so trajectories spiral outward.
:::

<!--
id: systems-of-odes-18
note: math-systems-of-odes
title: "Compute Trace and Determinant"
exam: exam-i
skills: [Trace-Determinant Test, 2x2 Systems]
-->

For the matrix

$$
A =
\begin{bmatrix}
3 & -2 \\
5 & -1
\end{bmatrix},
$$

find $\operatorname{tr}(A)$ and $\det(A)$.

:::solution
The trace is the sum of the diagonal entries:

$$
\operatorname{tr}(A) = 3 + (-1) = 2.
$$

The determinant is

$$
\det(A) = 3(-1) - (-2)(5) = -3 + 10 = 7.
$$
:::

<!--
id: systems-of-odes-19
note: math-systems-of-odes
title: "Classify Stability from Eigenvalues"
exam: exam-i
skills: [Stability, Eigenvalues]
-->

A linear $2 \times 2$ system has eigenvalues $-1$ and $-4$.

What type of equilibrium does the origin have?

:::solution
Both eigenvalues are real and negative, so all nearby solutions decay toward the origin.

That makes the origin an **asymptotically stable node**.
:::

<!--
id: systems-of-odes-110
note: math-systems-of-odes
title: "State the Linearization Formula"
exam: exam-i
skills: [Linearization, Jacobian]
-->

Near an equilibrium point $\mathbf{x}^*$, what first-order approximation do you use for a nonlinear system?

:::solution
The linearization is

$$
\mathbf{x}' \approx J(\mathbf{x}^*)(\mathbf{x} - \mathbf{x}^*),
$$

where $J(\mathbf{x}^*)$ is the Jacobian matrix evaluated at the equilibrium.
:::

<!--
id: systems-of-odes-21
note: math-systems-of-odes
title: "Find a Characteristic Polynomial"
exam: exam-ii
skills: [Characteristic Polynomial, Eigenvalues]
-->

For

$$
A =
\begin{bmatrix}
1 & 2 \\
0 & 4
\end{bmatrix},
$$

find the characteristic polynomial and the eigenvalues.

:::solution
Compute

$$
\det(A - \lambda I)
=
\det\begin{bmatrix}
1-\lambda & 2 \\
0 & 4-\lambda
\end{bmatrix}
=(1-\lambda)(4-\lambda).
$$

So the characteristic polynomial is

$$
\lambda^2 - 5\lambda + 4.
$$

The eigenvalues are

$$
\lambda = 1,\ 4.
$$
:::

<!--
id: systems-of-odes-22
note: math-systems-of-odes
title: "Solve a Diagonal System"
exam: exam-ii
skills: [Matrix Exponential, Initial Value Problems]
-->

Solve the initial value problem

$$
\mathbf{x}' =
\begin{bmatrix}
-2 & 0 \\
0 & 3
\end{bmatrix}
\mathbf{x},
\qquad
\mathbf{x}(0) =
\begin{bmatrix}
4 \\
-1
\end{bmatrix}.
$$

:::solution
Because the matrix is diagonal, each component solves its own scalar equation.

The first component is

$$
x_1' = -2x_1, \qquad x_1(0)=4,
$$

so

$$
x_1(t) = 4e^{-2t}.
$$

The second component is

$$
x_2' = 3x_2, \qquad x_2(0)=-1,
$$

so

$$
x_2(t) = -e^{3t}.
$$

Thus

$$
\mathbf{x}(t) =
\begin{bmatrix}
4e^{-2t} \\
-e^{3t}
\end{bmatrix}.
$$
:::

<!--
id: systems-of-odes-23
note: math-systems-of-odes
title: "Build a General Solution from Eigenpairs"
exam: exam-ii
skills: [Eigenvalues, Eigenvectors, General Solution]
-->

Suppose a matrix $A$ has eigenpairs

$$
(2, \begin{bmatrix}1 \\ 1\end{bmatrix})
 \quad \text{and} \quad
(-1, \begin{bmatrix}1 \\ -1\end{bmatrix}).
$$

Write the general solution of $\mathbf{x}' = A\mathbf{x}$.

:::solution
Each eigenpair gives an eigenmode solution.

So the general solution is

$$
\mathbf{x}(t)
=
c_1 e^{2t}
\begin{bmatrix}
1 \\
1
\end{bmatrix}
 + c_2 e^{-t}
\begin{bmatrix}
1 \\
-1
\end{bmatrix}.
$$
:::

<!--
id: systems-of-odes-24
note: math-systems-of-odes
title: "Classify from Trace and Determinant"
exam: exam-ii
skills: [Trace-Determinant Test, Stability]
-->

A $2 \times 2$ matrix has trace $-2$ and determinant $5$.

Determine whether the eigenvalues are real or complex, and classify the equilibrium.

:::solution
The characteristic polynomial is

$$
\lambda^2 - (\operatorname{tr} A)\lambda + \det(A)
=
\lambda^2 + 2\lambda + 5.
$$

The discriminant is

$$
2^2 - 4(5) = -16,
$$

so the eigenvalues are complex.

Solve the quadratic:

$$
\lambda = \frac{-2 \pm \sqrt{-16}}{2} = -1 \pm 2i.
$$

Because the real part is negative, the equilibrium is a **stable spiral**.
:::

<!--
id: systems-of-odes-25
note: math-systems-of-odes
title: "Convert a Mass-Spring Equation"
exam: exam-ii
skills: [Modeling Patterns, First-Order Systems]
-->

A spring-mass system satisfies

$$
x'' + 2x' + 9x = 0.
$$

Let $u=x$ and $v=x'$. Write the equivalent first-order system.

:::solution
Since $u=x$, we have

$$
u' = x' = v.
$$

Also,

$$
v' = x'' = -2x' - 9x = -2v - 9u.
$$

So the first-order system is

$$
\begin{aligned}
u' &= v \\
v' &= -9u - 2v.
\end{aligned}
$$
:::

<!--
id: systems-of-odes-26
note: math-systems-of-odes
title: "Find the Jacobian Matrix"
exam: exam-ii
skills: [Linearization, Jacobian]
-->

Find the Jacobian matrix of

$$
\mathbf{f}(x,y) =
\begin{bmatrix}
x^2 + y \\
xy - 1
\end{bmatrix}.
$$

:::solution
Compute the partial derivatives:

$$
\frac{\partial f_1}{\partial x} = 2x, \qquad
\frac{\partial f_1}{\partial y} = 1,
$$

$$
\frac{\partial f_2}{\partial x} = y, \qquad
\frac{\partial f_2}{\partial y} = x.
$$

So

$$
J(x,y) =
\begin{bmatrix}
2x & 1 \\
y & x
\end{bmatrix}.
$$
:::

<!--
id: systems-of-odes-27
note: math-systems-of-odes
title: "Write the Variation-of-Parameters Formula"
exam: exam-ii
skills: [Nonhomogeneous Systems, Variation of Parameters]
-->

For the forced system

$$
\mathbf{x}' = A\mathbf{x} + \mathbf{g}(t),
$$

let $\Phi(t)$ be a fundamental matrix for $\mathbf{x}' = A\mathbf{x}$.

What formula gives a particular solution?

:::solution
A particular solution can be written as

$$
\mathbf{x}_p(t) = \Phi(t)\int \Phi(t)^{-1}\mathbf{g}(t)\,dt.
$$

The full solution is then the sum of the homogeneous and particular parts.
:::

<!--
id: systems-of-odes-28
note: math-systems-of-odes
title: "Handle a Repeated Eigenvalue"
exam: exam-ii
skills: [Generalized Eigenvectors, Jordan Form]
-->

If a $2 \times 2$ system has a repeated eigenvalue $\lambda$ and only one eigenvector $\mathbf{v}$, what is a common form of a second independent solution?

:::solution
In the defective case, a second solution often has the form

$$
e^{\lambda t}(\mathbf{v} + t\mathbf{w}),
$$

where $\mathbf{w}$ is a generalized eigenvector.
:::

<!--
id: systems-of-odes-31
note: math-systems-of-odes
title: "Find Equilibria in a Predator-Prey Model"
exam: final
skills: [Predator-Prey Models, Equilibria]
-->

A predator-prey model is

$$
\begin{aligned}
x' &= x(3-y) \\
y' &= y(x-2)
\end{aligned}
$$

where $x$ and $y$ are the population levels.

Find all equilibria.

:::solution
Set both derivatives equal to zero.

From $x' = x(3-y)=0$, we get

$$
x=0 \quad \text{or} \quad y=3.
$$

From $y' = y(x-2)=0$, we get

$$
y=0 \quad \text{or} \quad x=2.
$$

Check the intersections:

$$
(0,0), \quad (2,0), \quad (2,3).
$$

These are the equilibria.
:::

<!--
id: systems-of-odes-32
note: math-systems-of-odes
title: "Convert a Damped Oscillator"
exam: final
skills: [Modeling Patterns, First-Order Systems]
-->

A mass-spring-damper system satisfies

$$
2x'' + 6x' + 8x = 0.
$$

Let $u=x$ and $v=x'$.

Write the equivalent first-order system.

:::solution
Since $u=x$,

$$
u' = v.
$$

Also,

$$
2v' + 6v + 8u = 0,
$$

so

$$
v' = -3v - 4u.
$$

Thus the first-order system is

$$
\begin{aligned}
u' &= v \\
v' &= -4u - 3v.
\end{aligned}
$$
:::

<!--
id: systems-of-odes-33
note: math-systems-of-odes
title: "Find the Steady State of a Forced System"
exam: final
skills: [Nonhomogeneous Systems, Equilibria]
-->

A model is given by

$$
\begin{aligned}
x' &= -3x + y + 4 \\
y' &= 2x - 2y + 1
\end{aligned}
$$

Find the equilibrium point.

:::solution
At equilibrium, set both derivatives equal to zero:

$$
-3x + y + 4 = 0,
$$

$$
2x - 2y + 1 = 0.
$$

From the second equation,

$$
x - y = -\frac{1}{2},
$$

so

$$
y = x + \frac{1}{2}.
$$

Substitute into the first equation:

$$
-3x + \left(x + \frac{1}{2}\right) + 4 = 0.
$$

Combine terms:

$$
-2x + \frac{9}{2} = 0.
$$

So

$$
x = \frac{9}{4}.
$$

Then

$$
y = \frac{9}{4} + \frac{1}{2} = \frac{11}{4}.
$$

The equilibrium point is

$$
\left(\frac{9}{4}, \frac{11}{4}\right).
$$
:::

<!--
id: systems-of-odes-34
note: math-systems-of-odes
title: "Classify a Circuit Model"
exam: final
skills: [Phase Portraits, Stability, 2x2 Systems]
-->

A circuit model is

$$
\begin{aligned}
x' &= -x + 2y \\
y' &= -3x - 4y
\end{aligned}
$$

Determine the type of equilibrium at the origin.

:::solution
The coefficient matrix is

$$
A =
\begin{bmatrix}
-1 & 2 \\
-3 & -4
\end{bmatrix}.
$$

Its trace and determinant are

$$
\operatorname{tr}(A) = -5,
$$

$$
\det(A) = (-1)(-4) - (2)(-3) = 10.
$$

The discriminant is

$$
(-5)^2 - 4(10) = 25 - 40 = -15,
$$

so the eigenvalues are complex.

Because the trace is negative, the real part is negative, so the origin is a **stable spiral**.
:::

<!--
id: systems-of-odes-35
note: math-systems-of-odes
title: "Linearize a Nonlinear System at the Origin"
exam: final
skills: [Linearization, Jacobian, Stability]
-->

Consider the nonlinear system

$$
\begin{aligned}
x' &= x(1-y) \\
y' &= y(2-x)
\end{aligned}
$$

Use the linearization at $(0,0)$ to determine the local behavior of the origin.

:::solution
First compute the Jacobian:

$$
J(x,y) =
\begin{bmatrix}
1-y & -x \\
-y & 2-x
\end{bmatrix}.
$$

At $(0,0)$,

$$
J(0,0) =
\begin{bmatrix}
1 & 0 \\
0 & 2
\end{bmatrix}.
$$

The eigenvalues are $1$ and $2$, both positive.

So the origin is an **unstable node** for the linearized system, and the nonlinear system is locally unstable there.
:::

<!--
id: systems-of-odes-41
note: math-systems-of-odes
title: "Solve a Defective Linear System"
exam: final
skills: [Generalized Eigenvectors, Jordan Form]
-->

Solve the system

$$
\mathbf{x}' =
\begin{bmatrix}
3 & 1 \\
0 & 3
\end{bmatrix}
\mathbf{x}.
$$

:::solution
The matrix has repeated eigenvalue $3$ and only one eigenvector, so it is defective.

The system can be written as

$$
A = 3I + N, \qquad
N =
\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}.
$$

Then

$$
e^{At} = e^{3t}e^{Nt}
=
e^{3t}
\begin{bmatrix}
1 & t \\
0 & 1
\end{bmatrix}.
$$

So the general solution is

$$
\mathbf{x}(t)
=
c_1 e^{3t}
\begin{bmatrix}
1 \\
0
\end{bmatrix}
 + c_2 e^{3t}
\begin{bmatrix}
t \\
1
\end{bmatrix}.
$$
:::

<!--
id: systems-of-odes-42
note: math-systems-of-odes
title: "Shift a Forced System and Classify It"
exam: final
skills: [Nonhomogeneous Systems, Stability, Eigenvalues]
-->

Consider the forced system

$$
\begin{aligned}
x' &= 2x - y + 1 \\
y' &= x + 2y - 3
\end{aligned}
$$

Find the equilibrium point, shift variables to move the equilibrium to the origin, and classify the shifted linear system.

:::solution
First find the equilibrium by setting both derivatives equal to zero:

$$
2x - y + 1 = 0,
$$

$$
x + 2y - 3 = 0.
$$

Solving gives

$$
\left(\frac{1}{5}, \frac{7}{5}\right).
$$

Now shift variables:

$$
u = x - \frac{1}{5}, \qquad v = y - \frac{7}{5}.
$$

Because the constant terms disappear after shifting, the new system is

$$
\begin{aligned}
u' &= 2u - v \\
v' &= u + 2v.
\end{aligned}
$$

The coefficient matrix is

$$
\begin{bmatrix}
2 & -1 \\
1 & 2
\end{bmatrix},
$$

whose eigenvalues are

$$
2 \pm i.
$$

The real part is positive, so the equilibrium is an **unstable spiral**.
:::

<!--
id: systems-of-odes-43
note: math-systems-of-odes
title: "Analyze a Nonlinear System with Linearization"
exam: final
skills: [Nonlinear Systems, Equilibria, Linearization]
-->

Consider

$$
\begin{aligned}
x' &= x(1-y) \\
y' &= y(x-2)
\end{aligned}
$$

Find the equilibria and use linearization to determine which ones you can classify directly.

:::solution
Set both derivatives equal to zero:

$$
x(1-y)=0, \qquad y(x-2)=0.
$$

This gives the equilibria

$$
(0,0), \quad (2,0), \quad (2,1).
$$

Now compute the Jacobian:

$$
J(x,y) =
\begin{bmatrix}
1-y & -x \\
y & x-2
\end{bmatrix}.
$$

At $(0,0)$,

$$
J(0,0) =
\begin{bmatrix}
1 & 0 \\
0 & -2
\end{bmatrix}.
$$

The eigenvalues are $1$ and $-2$, so $(0,0)$ is a saddle and is unstable.

At $(2,0)$,

$$
J(2,0) =
\begin{bmatrix}
1 & -2 \\
0 & 0
\end{bmatrix}.
$$

One eigenvalue is $0$, so linearization is inconclusive there.

At $(2,1)$,

$$
J(2,1) =
\begin{bmatrix}
0 & -2 \\
1 & 0
\end{bmatrix},
$$

whose eigenvalues are purely imaginary, so linearization is also inconclusive there.

Only $(0,0)$ can be classified directly from the linearization.
:::

<!--
id: systems-of-odes-44
note: math-systems-of-odes
title: "Classify a Damped Oscillator from Its System"
exam: final
skills: [Modeling Patterns, Characteristic Polynomial, Stability]
-->

A damped oscillator satisfies

$$
x'' + 4x' + 13x = 0.
$$

Let $u=x$ and $v=x'$. Convert the equation to a first-order system, find the eigenvalues of the coefficient matrix, and classify the motion.

:::solution
With $u=x$ and $v=x'$, we have

$$
u' = v.
$$

Since

$$
x'' + 4x' + 13x = 0,
$$

we get

$$
v' = -4v - 13u.
$$

So the first-order system is

$$
\begin{aligned}
u' &= v \\
v' &= -13u - 4v.
\end{aligned}
$$

The coefficient matrix is

$$
A =
\begin{bmatrix}
0 & 1 \\
-13 & -4
\end{bmatrix}.
$$

Its characteristic polynomial is

$$
\det(A - \lambda I) = \lambda^2 + 4\lambda + 13.
$$

So the eigenvalues are

$$
\lambda = -2 \pm 3i.
$$

Because the real part is negative and the eigenvalues are complex, the motion is a **stable spiral**.
:::
