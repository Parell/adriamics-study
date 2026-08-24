<!--
id: eigenvalues-11
note: math-eigenvalues
title: "Check an Eigenvector"
exam: exam-i
skills: [Eigenvectors, Core Idea]
-->

Let

$$
A =
\begin{bmatrix}
2 & 0 \\
0 & 5
\end{bmatrix}
$$

and

$$
v =
\begin{bmatrix}
3 \\
0
\end{bmatrix}.
$$

Is $v$ an eigenvector of $A$? If so, what is the eigenvalue?

:::solution
Compute

$$
Av =
\begin{bmatrix}
2 & 0 \\
0 & 5
\end{bmatrix}
\begin{bmatrix}
3 \\
0
\end{bmatrix}
=
\begin{bmatrix}
6 \\
0
\end{bmatrix}.
$$

Since

$$
\begin{bmatrix}
6 \\
0
\end{bmatrix}
=
2
\begin{bmatrix}
3 \\
0
\end{bmatrix},
$$

$v$ is an eigenvector and the eigenvalue is $2$.
:::

<!--
id: eigenvalues-12
note: math-eigenvalues
title: "Read Eigenvalues from a Triangular Matrix"
exam: exam-i
skills: [Triangular Matrices, Eigenvalues]
-->

Find the eigenvalues of

$$
A =
\begin{bmatrix}
4 & 1 & 0 \\
0 & -2 & 7 \\
0 & 0 & 5
\end{bmatrix}.
$$

:::solution
For a triangular matrix, the eigenvalues are the diagonal entries.

So the eigenvalues are

$$
4,\quad -2,\quad 5.
$$
:::

<!--
id: eigenvalues-13
note: math-eigenvalues
title: "Solve a Characteristic Equation"
exam: exam-i
skills: [Characteristic Equation, Factoring]
-->

Find the eigenvalues of

$$
A =
\begin{bmatrix}
3 & 1 \\
2 & 2
\end{bmatrix}.
$$

:::solution
Form the characteristic equation:

$$
\det(A - \lambda I)
=
\begin{vmatrix}
3-\lambda & 1 \\
2 & 2-\lambda
\end{vmatrix}
$$

$$
=(3-\lambda)(2-\lambda) - 2
$$

$$
= \lambda^2 - 5\lambda + 4.
$$

Set this equal to $0$:

$$
\lambda^2 - 5\lambda + 4 = 0
$$

Factor:

$$
(\lambda - 1)(\lambda - 4) = 0.
$$

So the eigenvalues are

$$
\lambda = 1,\quad 4.
$$
:::

<!--
id: eigenvalues-14
note: math-eigenvalues
title: "Find an Eigenspace"
exam: exam-i
skills: [Eigenspaces, Null Space]
-->

For

$$
A =
\begin{bmatrix}
3 & 1 \\
2 & 2
\end{bmatrix},
$$

find a basis for the eigenspace corresponding to $\lambda = 4$.

:::solution
Compute

$$
A - 4I =
\begin{bmatrix}
-1 & 1 \\
2 & -2
\end{bmatrix}.
$$

Solve

$$
\begin{bmatrix}
-1 & 1 \\
2 & -2
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0
\end{bmatrix}.
$$

This gives

$$
-x + y = 0,
$$

so $y = x$.

A basis for the eigenspace is

$$
\left\{
\begin{bmatrix}
1 \\
1
\end{bmatrix}
\right\}.
$$
:::

<!--
id: eigenvalues-15
note: math-eigenvalues
title: "Use Trace to Find the Missing Eigenvalue"
exam: exam-i
skills: [Trace, Eigenvalues]
-->

A $2 \times 2$ matrix has eigenvalues $6$ and $k$. Its trace is $11$.

What is $k$?

:::solution
The trace equals the sum of the eigenvalues:

$$
6 + k = 11.
$$

So

$$
k = 5.
$$
:::

<!--
id: eigenvalues-16
note: math-eigenvalues
title: "Decide Whether a Matrix Is Invertible"
exam: exam-i
skills: [Invertibility, Eigenvalues]
-->

A matrix has eigenvalues $3$, $0$, and $-2$.

Is the matrix invertible?

:::solution
A matrix is invertible if and only if $0$ is not an eigenvalue.

Since $0$ is one of the eigenvalues here, the matrix is not invertible.
:::

<!--
id: eigenvalues-17
note: math-eigenvalues
title: "Identify Algebraic Multiplicity"
exam: exam-i
skills: [Multiplicity, Characteristic Polynomial]
-->

The characteristic polynomial of a matrix is

$$
(\lambda - 2)^3(\lambda + 1).
$$

What is the algebraic multiplicity of $\lambda = 2$?

:::solution
The algebraic multiplicity is the multiplicity of the root in the characteristic polynomial.

Since $(\lambda - 2)$ appears three times, the algebraic multiplicity of $2$ is $3$.
:::

<!--
id: eigenvalues-18
note: math-eigenvalues
title: "Use a Projection Matrix"
exam: exam-i
skills: [Projection Matrices, Special Matrices]
-->

What are the only possible eigenvalues of a projection matrix $P$ satisfying

$$
P^2 = P?
$$

:::solution
If $Pv = \lambda v$ for an eigenvector $v \ne 0$, then

$$
P^2v = \lambda^2 v.
$$

But $P^2 = P$, so also

$$
P^2v = Pv = \lambda v.
$$

Thus

$$
\lambda^2 = \lambda,
$$

so

$$
\lambda(\lambda - 1) = 0.
$$

Therefore the only possible eigenvalues are

$$
0 \quad \text{and} \quad 1.
$$
:::

<!--
id: eigenvalues-19
note: math-eigenvalues
title: "Find the Eigenvalues of a Rotation Matrix"
exam: exam-i
skills: [Complex Eigenvalues, Real Matrices]
-->

Find the eigenvalues of

$$
A =
\begin{bmatrix}
0 & -1 \\
1 & 0
\end{bmatrix}.
$$

:::solution
Compute the characteristic equation:

$$
\det(A - \lambda I)
=
\begin{vmatrix}
-\lambda & -1 \\
1 & -\lambda
\end{vmatrix}
$$

$$
= \lambda^2 + 1.
$$

So

$$
\lambda^2 + 1 = 0.
$$

Therefore the eigenvalues are

$$
\lambda = i,\quad -i.
$$
:::

<!--
id: eigenvalues-110
note: math-eigenvalues
title: "Compute Eigenvalues of a 2x2 Matrix"
exam: exam-i
skills: [Characteristic Equation, 2x2 Formula]
-->

Find the eigenvalues of

$$
A =
\begin{bmatrix}
4 & 2 \\
1 & 3
\end{bmatrix}.
$$

:::solution
For a $2 \times 2$ matrix, use the characteristic polynomial:

$$
\det(A - \lambda I)
=
\begin{vmatrix}
4-\lambda & 2 \\
1 & 3-\lambda
\end{vmatrix}
$$

$$
=(4-\lambda)(3-\lambda) - 2
$$

$$
= \lambda^2 - 7\lambda + 10.
$$

Factor:

$$
(\lambda - 5)(\lambda - 2) = 0.
$$

So the eigenvalues are

$$
5,\quad 2.
$$
:::

<!--
id: eigenvalues-21
note: math-eigenvalues
title: "Find Eigenvectors for Both Eigenvalues"
exam: exam-ii
skills: [Eigenvectors, Eigenspaces, Characteristic Equation]
-->

For

$$
A =
\begin{bmatrix}
4 & 1 \\
2 & 3
\end{bmatrix},
$$

find a basis for each eigenspace.

:::solution
From the characteristic equation, the eigenvalues are $5$ and $2$.

For $\lambda = 5$,

$$
A - 5I =
\begin{bmatrix}
-1 & 1 \\
2 & -2
\end{bmatrix}.
$$

This gives $y = x$, so a basis is

$$
\left\{
\begin{bmatrix}
1 \\
1
\end{bmatrix}
\right\}.
$$

For $\lambda = 2$,

$$
A - 2I =
\begin{bmatrix}
2 & 1 \\
2 & 1
\end{bmatrix}.
$$

This gives $2x + y = 0$, so a basis is

$$
\left\{
\begin{bmatrix}
1 \\
-2
\end{bmatrix}
\right\}.
$$
:::

<!--
id: eigenvalues-22
note: math-eigenvalues
title: "Compare Multiplicities"
exam: exam-ii
skills: [Multiplicity, Eigenspaces]
-->

For

$$
A =
\begin{bmatrix}
3 & 1 \\
0 & 3
\end{bmatrix},
$$

find the algebraic multiplicity and geometric multiplicity of the eigenvalue $3$.

:::solution
The characteristic polynomial is

$$
\det(A - \lambda I) = (3-\lambda)^2.
$$

So the algebraic multiplicity of $3$ is $2$.

Now compute the eigenspace:

$$
A - 3I =
\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}.
$$

Solving

$$
\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0
\end{bmatrix}
$$

gives $y = 0$.

So the eigenspace is

$$
\operatorname{span}
\left\{
\begin{bmatrix}
1 \\
0
\end{bmatrix}
\right\},
$$

which has dimension $1$.

Therefore the geometric multiplicity is $1$.
:::

<!--
id: eigenvalues-23
note: math-eigenvalues
title: "Decide Whether a Matrix Is Diagonalizable"
exam: exam-ii
skills: [Diagonalization, Multiplicity]
-->

Is

$$
A =
\begin{bmatrix}
2 & 1 & 0 \\
0 & 2 & 0 \\
0 & 0 & 5
\end{bmatrix}
$$

diagonalizable?

:::solution
The matrix is upper triangular, so its eigenvalues are the diagonal entries:

$$
2,\quad 2,\quad 5.
$$

The eigenvalue $2$ has algebraic multiplicity $2$.

Now compute

$$
A - 2I =
\begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 0 \\
0 & 0 & 3
\end{bmatrix}.
$$

From $(A-2I)v=0$, we get $y=0$ and $z=0$, with $x$ free. So the eigenspace for $\lambda=2$ has dimension $1$.

That is not enough independent eigenvectors. The matrix is not diagonalizable.
:::

<!--
id: eigenvalues-24
note: math-eigenvalues
title: "Build P and D from Eigenpairs"
exam: exam-ii
skills: [Diagonalization, Eigenvectors]
-->

Suppose a matrix has the eigenpairs

$$
\lambda_1 = 5,\quad v_1 =
\begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix},
$$

$$
\lambda_2 = 1,\quad v_2 =
\begin{bmatrix}
0 \\
1 \\
-1
\end{bmatrix},
$$

and

$$
\lambda_3 = -2,\quad v_3 =
\begin{bmatrix}
1 \\
1 \\
0
\end{bmatrix}.
$$

Write the matrices $P$ and $D$ for the diagonalization $A = P D P^{-1}$.

:::solution
Put the eigenvectors into the columns of $P$ in the same order as the eigenvalues in $D$:

$$
P =
\begin{bmatrix}
1 & 0 & 1 \\
0 & 1 & 1 \\
1 & -1 & 0
\end{bmatrix}.
$$

The diagonal matrix is

$$
D =
\begin{bmatrix}
5 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -2
\end{bmatrix}.
$$
:::

<!--
id: eigenvalues-25
note: math-eigenvalues
title: "Use Trace and Determinant to Check Your Work"
exam: exam-ii
skills: [Trace, Determinant, Eigenvalues]
-->

You found that the eigenvalues of

$$
A =
\begin{bmatrix}
4 & 1 \\
1 & 2
\end{bmatrix}
$$

are $5$ and $1$.

Use the trace and determinant to check whether this is correct.

:::solution
The trace of $A$ is

$$
4 + 2 = 6.
$$

The sum of the proposed eigenvalues is

$$
5 + 1 = 6.
$$

The determinant of $A$ is

$$
4 \cdot 2 - 1 \cdot 1 = 7.
$$

The product of the proposed eigenvalues is

$$
5 \cdot 1 = 5.
$$

Since the product does not match the determinant, the proposed eigenvalues are not correct.
:::

<!--
id: eigenvalues-26
note: math-eigenvalues
title: "Use a Symmetric Matrix"
exam: exam-ii
skills: [Symmetric Matrices, Orthogonal Eigenvectors]
-->

For

$$
A =
\begin{bmatrix}
2 & 1 \\
1 & 2
\end{bmatrix},
$$

find the eigenvalues and one eigenvector for each. Then check whether the two eigenvectors are orthogonal.

:::solution
Compute the characteristic polynomial:

$$
\det(A - \lambda I)
=
\begin{vmatrix}
2-\lambda & 1 \\
1 & 2-\lambda
\end{vmatrix}
$$

$$
=(2-\lambda)^2 - 1
= \lambda^2 - 4\lambda + 3.
$$

Factor:

$$
(\lambda - 1)(\lambda - 3) = 0.
$$

So the eigenvalues are $1$ and $3$.

For $\lambda = 3$,

$$
A - 3I =
\begin{bmatrix}
-1 & 1 \\
1 & -1
\end{bmatrix},
$$

so $y = x$ and one eigenvector is

$$
\begin{bmatrix}
1 \\
1
\end{bmatrix}.
$$

For $\lambda = 1$,

$$
A - I =
\begin{bmatrix}
1 & 1 \\
1 & 1
\end{bmatrix},
$$

so $x + y = 0$ and one eigenvector is

$$
\begin{bmatrix}
1 \\
-1
\end{bmatrix}.
$$

Their dot product is

$$
(1)(1) + (1)(-1) = 0,
$$

so the eigenvectors are orthogonal.
:::

<!--
id: eigenvalues-27
note: math-eigenvalues
title: "Use a Nilpotent Matrix"
exam: exam-ii
skills: [Nilpotent Matrices, Eigenvalues]
-->

Suppose a matrix satisfies

$$
A^3 = 0.
$$

What can you conclude about its eigenvalues and determinant?

:::solution
If $Av = \lambda v$ for an eigenvector $v \ne 0$, then

$$
A^3v = \lambda^3 v.
$$

But $A^3 = 0$, so $A^3v = 0$. Since $v \ne 0$, this forces

$$
\lambda^3 = 0,
$$

so $\lambda = 0$.

Therefore every eigenvalue is $0$.

The determinant is the product of the eigenvalues, so

$$
\det(A) = 0.
$$
:::

<!--
id: eigenvalues-28
note: math-eigenvalues
title: "Find Complex Eigenvalues from a Real Matrix"
exam: exam-ii
skills: [Complex Eigenvalues, Trace and Determinant, Characteristic Equation]
-->

Find the eigenvalues of

$$
A =
\begin{bmatrix}
2 & -5 \\
1 & 2
\end{bmatrix}.
$$

:::solution
Compute the characteristic polynomial:

$$
\det(A - \lambda I)
=
\begin{vmatrix}
2-\lambda & -5 \\
1 & 2-\lambda
\end{vmatrix}
$$

$$
=(2-\lambda)^2 + 5
= \lambda^2 - 4\lambda + 9.
$$

Set this equal to $0$:

$$
\lambda^2 - 4\lambda + 9 = 0.
$$

Use the quadratic formula:

$$
\lambda = \frac{4 \pm \sqrt{16 - 36}}{2}
= \frac{4 \pm \sqrt{-20}}{2}
= 2 \pm i\sqrt{5}.
$$

So the eigenvalues are

$$
2 + i\sqrt{5}
$$

and

$$
2 - i\sqrt{5}.
$$
:::

<!--
id: eigenvalues-31
note: math-eigenvalues
title: "Predict Long-Term Behavior from Eigenvalues"
exam: final
skills: [Applications, Dynamical Systems]
-->

A discrete system is defined by

$$
x_{k+1} = Ax_k.
$$

Suppose the eigenvalues of $A$ are

$$
\lambda_1 = \frac{1}{4}
\quad \text{and} \quad
\lambda_2 = \frac{3}{2}.
$$

What happens to the two eigenmodes as $k$ gets large?

:::solution
Each eigenmode is scaled by its eigenvalue at every step.

The mode with eigenvalue $\frac{1}{4}$ decays toward $0$ because

$$
\left(\frac{1}{4}\right)^k \to 0.
$$

The mode with eigenvalue $\frac{3}{2}$ grows without bound because

$$
\left(\frac{3}{2}\right)^k \to \infty.
$$

So the component in the $\frac{1}{4}$-direction dies out, while the component in the $\frac{3}{2}$-direction dominates.
:::

<!--
id: eigenvalues-32
note: math-eigenvalues
title: "Analyze a Differential Equation"
exam: final
skills: [Applications, Differential Equations]
-->

Consider the system

$$
x'(t) = Ax(t)
$$

where $A$ has eigenvalues $-2$ and $0$.

What do these eigenvalues say about the two modes of the solution?

:::solution
For a linear system $x'(t) = Ax(t)$, an eigenvalue $\lambda$ produces a mode that behaves like $e^{\lambda t}$.

The mode for $\lambda = -2$ is

$$
e^{-2t},
$$

so it decays to $0$ as $t$ increases.

The mode for $\lambda = 0$ is

$$
e^{0t} = 1,
$$

so it stays constant in size.

Thus one mode decays and the other remains neutral.
:::

<!--
id: eigenvalues-33
note: math-eigenvalues
title: "Find a Steady-State Eigenvector"
exam: final
skills: [Applications, Markov Chains]
-->

Let

$$
P =
\begin{bmatrix}
0.8 & 0.1 \\
0.2 & 0.9
\end{bmatrix}.
$$

Find a nonzero vector $v$ such that

$$
Pv = v.
$$

:::solution
The equation $Pv = v$ means $v$ is an eigenvector for eigenvalue $1$.

So solve

$$
(P - I)v = 0.
$$

That gives

$$
\begin{bmatrix}
-0.2 & 0.1 \\
0.2 & -0.1
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0
\end{bmatrix}.
$$

From the first row,

$$
-0.2x + 0.1y = 0,
$$

so

$$
y = 2x.
$$

One nonzero fixed vector is

$$
\begin{bmatrix}
1 \\
2
\end{bmatrix}.
$$
:::

<!--
id: eigenvalues-34
note: math-eigenvalues
title: "Use Diagonalization to Track Repeated Action"
exam: final
skills: [Diagonalization, Applications]
-->

Suppose $v_1$ and $v_2$ are eigenvectors of $A$ with eigenvalues $3$ and $\frac{1}{3}$, respectively. Let

$$
x = 2v_1 - v_2.
$$

Find a formula for $A^k x$.

:::solution
Use the eigenvector rules:

$$
A^k v_1 = 3^k v_1
$$

and

$$
A^k v_2 = \left(\frac{1}{3}\right)^k v_2.
$$

Therefore

$$
A^k x = A^k(2v_1 - v_2)
$$

$$
= 2A^k v_1 - A^k v_2
$$

$$
= 2 \cdot 3^k v_1 - \left(\frac{1}{3}\right)^k v_2.
$$
:::

<!--
id: eigenvalues-35
note: math-eigenvalues
title: "Identify Principal Directions"
exam: final
skills: [Symmetric Matrices, Applications]
-->

For the symmetric matrix

$$
A =
\begin{bmatrix}
4 & 1 \\
1 & 4
\end{bmatrix},
$$

which direction is stretched more, and by how much?

:::solution
Find the eigenvalues:

$$
\det(A - \lambda I)
=
\begin{vmatrix}
4-\lambda & 1 \\
1 & 4-\lambda
\end{vmatrix}
$$

$$
=(4-\lambda)^2 - 1
= \lambda^2 - 8\lambda + 15.
$$

Factor:

$$
(\lambda - 3)(\lambda - 5) = 0.
$$

So the stretch factors are $5$ and $3$.

The larger stretch is in the direction of the eigenvector for $\lambda = 5$, which satisfies $y = x$. So the direction is

$$
\begin{bmatrix}
1 \\
1
\end{bmatrix}.
$$

The smaller stretch is in the direction of the eigenvector for $\lambda = 3$, which satisfies $y = -x$. So the direction is

$$
\begin{bmatrix}
1 \\
-1
\end{bmatrix}.
$$
:::

<!--
id: eigenvalues-41
note: math-eigenvalues
title: "When Is a Triangular Matrix Diagonalizable?"
exam: final
skills: [Diagonalization, Multiplicity, Triangular Matrices]
-->

For

$$
A =
\begin{bmatrix}
k & 1 \\
0 & 2
\end{bmatrix},
$$

for what values of $k$ is $A$ diagonalizable?

:::solution
Because $A$ is triangular, the eigenvalues are

$$
k \quad \text{and} \quad 2.
$$

If $k \ne 2$, then the matrix has two distinct eigenvalues, so it is diagonalizable.

If $k = 2$, then

$$
A =
\begin{bmatrix}
2 & 1 \\
0 & 2
\end{bmatrix}.
$$

This is the repeated-eigenvalue case from the notes. Its eigenspace has dimension $1$, so it is not diagonalizable.

Therefore $A$ is diagonalizable exactly when

$$
k \ne 2.
$$
:::

<!--
id: eigenvalues-42
note: math-eigenvalues
title: "A Repeated Eigenvalue in Three Dimensions"
exam: final
skills: [Multiplicity, Diagonalization, Eigenspaces]
-->

Consider

$$
B =
\begin{bmatrix}
1 & 2 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1
\end{bmatrix}.
$$

Find the eigenvalues, their algebraic multiplicities, and decide whether $B$ is diagonalizable.

:::solution
Since $B$ is triangular, the eigenvalues are the diagonal entries:

$$
1,\quad 1,\quad -1.
$$

So the algebraic multiplicity of $1$ is $2$, and the algebraic multiplicity of $-1$ is $1$.

Now check the eigenspace for $\lambda = 1$:

$$
B - I =
\begin{bmatrix}
0 & 2 & 0 \\
0 & 0 & 0 \\
0 & 0 & -2
\end{bmatrix}.
$$

Solving $(B-I)v = 0$ gives $y = 0$ and $z = 0$, with $x$ free. So the eigenspace for $1$ has dimension $1$.

That is fewer than its algebraic multiplicity, so $B$ does not have three independent eigenvectors.

Therefore $B$ is not diagonalizable.
:::

<!--
id: eigenvalues-43
note: math-eigenvalues
title: "Use Orthogonality and the Characteristic Equation"
exam: final
skills: [Orthogonal Matrices, Complex Eigenvalues, Trace and Determinant]
-->

A real $2 \times 2$ orthogonal matrix has determinant $1$ and trace $0$.

What are its eigenvalues?

:::solution
Let the eigenvalues be $\lambda_1$ and $\lambda_2$.

For a $2 \times 2$ matrix, the sum of the eigenvalues equals the trace and the product equals the determinant.

So

$$
\lambda_1 + \lambda_2 = 0
$$

and

$$
\lambda_1\lambda_2 = 1.
$$

This gives the characteristic equation

$$
\lambda^2 + 1 = 0.
$$

Thus the eigenvalues are

$$
i \quad \text{and} \quad -i.
$$
:::

<!--
id: eigenvalues-44
note: math-eigenvalues
title: "Complex Eigenvalues from Trace and Determinant"
exam: final
skills: [Complex Eigenvalues, Characteristic Equation, Trace and Determinant]
-->

A real $2 \times 2$ matrix has trace $4$ and determinant $13$.

Find its eigenvalues.

:::solution
For a $2 \times 2$ matrix, the characteristic polynomial is

$$
\lambda^2 - (\operatorname{tr} A)\lambda + \det(A).
$$

So here it is

$$
\lambda^2 - 4\lambda + 13.
$$

Set this equal to $0$:

$$
\lambda^2 - 4\lambda + 13 = 0.
$$

Use the quadratic formula:

$$
\lambda = \frac{4 \pm \sqrt{16 - 52}}{2}
= \frac{4 \pm \sqrt{-36}}{2}
= 2 \pm 3i.
$$

So the eigenvalues are

$$
2 + 3i
$$

and

$$
2 - 3i.
$$
Since neither eigenvalue is real, this matrix has no real eigenvectors associated with these eigenvalues.
:::
