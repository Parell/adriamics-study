# Eigenvalues

# Core idea

An **eigenvector** of a square matrix $A$ is a nonzero vector $v$ whose direction is unchanged by the linear transformation defined by $A$.

It satisfies

$$
Av = \lambda v
$$

where $\lambda$ is the corresponding **eigenvalue**.

Interpretation:

- $A$ acts on most vectors by changing both magnitude and direction.
- On an eigenvector, $A$ only scales the vector by $\lambda$.
- If $\lambda < 0$, the vector is reversed as well as scaled.
- If $\lambda = 0$, the eigenvector is sent to the zero vector.

Eigenvalues only make sense for **square matrices**.

## Geometric meaning

For a $2 \times 2$ or $3 \times 3$ matrix, eigenvectors identify invariant directions or invariant lines. These are the directions that survive the transformation without rotating away.

Examples:

- A stretch in the $x$-direction has eigenvectors on the coordinate axes.
- A projection matrix has eigenvalue $1$ on the subspace preserved by the projection and eigenvalue $0$ on the directions collapsed.
- A pure rotation in $\mathbb{R}^2$ usually has no real eigenvectors unless the angle is $0$ or $\pi$.
---

# Characteristic equation

Starting from

$$
Av = \lambda v
$$

move everything to one side:

$$
(A - \lambda I)v = 0
$$

For a nonzero solution $v$ to exist, the matrix $A - \lambda I$ must be singular. Therefore

$$
\det(A - \lambda I) = 0
$$

This is the **characteristic equation**. Its left-hand side is the **characteristic polynomial**.

## Why the determinant condition works

The homogeneous system

$$
(A - \lambda I)v = 0
$$

has a nontrivial solution exactly when the coefficient matrix is not invertible. That is equivalent to determinant zero.

## Example

Let

$$
A =
\begin{bmatrix}
4 & 1 \\
2 & 3
\end{bmatrix}
$$

Then

$$
A - \lambda I =
\begin{bmatrix}
4-\lambda & 1 \\
2 & 3-\lambda
\end{bmatrix}
$$

and

$$
\det(A - \lambda I)
=
(4-\lambda)(3-\lambda) - 2
=
\lambda^2 - 7\lambda + 10
$$

So

$$
\lambda^2 - 7\lambda + 10 = 0
$$

which factors as

$$
(\lambda - 5)(\lambda - 2) = 0
$$

Hence the eigenvalues are

$$
\lambda = 5,\quad \lambda = 2
$$

---

# Eigenvectors and eigenspaces

Once an eigenvalue $\lambda$ is known, find its eigenvectors by solving

$$
(A - \lambda I)v = 0
$$

The set of all eigenvectors for $\lambda$, together with the zero vector, forms the **eigenspace**

$$
E_\lambda = \operatorname{Null}(A - \lambda I)
$$

This is a subspace of the vector space.

## Example continued

For

$$
A =
\begin{bmatrix}
4 & 1 \\
2 & 3
\end{bmatrix}
$$

and $\lambda = 5$,

$$
A - 5I =
\begin{bmatrix}
-1 & 1 \\
2 & -2
\end{bmatrix}
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
\end{bmatrix}
$$

This gives

$$
y = x
$$

so one eigenvector is

$$
v_1 =
\begin{bmatrix}
1 \\
1
\end{bmatrix}
$$

For $\lambda = 2$,

$$
A - 2I =
\begin{bmatrix}
2 & 1 \\
2 & 1
\end{bmatrix}
$$

which gives

$$
2x + y = 0
$$

so one eigenvector is

$$
v_2 =
\begin{bmatrix}
1 \\
-2
\end{bmatrix}
$$

Any nonzero scalar multiple of an eigenvector is still an eigenvector for the same eigenvalue.

## Important restriction

The zero vector is never called an eigenvector. If it were allowed, every scalar would become an eigenvalue candidate, which would destroy the definition.

---

# Multiplicity

Eigenvalues can repeat.

## Algebraic multiplicity

The **algebraic multiplicity** of $\lambda$ is its multiplicity as a root of the characteristic polynomial.

## Geometric multiplicity

The **geometric multiplicity** of $\lambda$ is

$$
\dim(E_\lambda)
=
\dim(\operatorname{Null}(A - \lambda I))
$$

## Fundamental inequality

For each eigenvalue,

$$
1 \le \text{geometric multiplicity} \le \text{algebraic multiplicity}
$$

## Repeated eigenvalue example

Consider

$$
A =
\begin{bmatrix}
3 & 1 \\
0 & 3
\end{bmatrix}
$$

Then

$$
\det(A - \lambda I) = (3-\lambda)^2
$$

So $\lambda = 3$ has algebraic multiplicity $2$.

But

$$
A - 3I =
\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}
$$

and solving

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

gives

$$
y = 0
$$

So the eigenspace is

$$
\operatorname{span}
\left\{
\begin{bmatrix}
1 \\
0
\end{bmatrix}
\right\}
$$

which has geometric multiplicity $1$.

This matrix has too few linearly independent eigenvectors to diagonalize.

---

# Determinant, trace, and invertibility

Eigenvalues encode several global properties of a matrix.

## Determinant

For an $n \times n$ matrix,

$$
\det(A) = \lambda_1 \lambda_2 \cdots \lambda_n
$$

counting algebraic multiplicity and allowing complex eigenvalues when needed.

## Trace

The trace is the sum of diagonal entries:

$$
\operatorname{tr}(A) = a_{11} + a_{22} + \cdots + a_{nn}
$$

It also equals the sum of the eigenvalues:

$$
\operatorname{tr}(A) = \lambda_1 + \lambda_2 + \cdots + \lambda_n
$$

## Invertibility test

A matrix $A$ is invertible if and only if $0$ is **not** an eigenvalue.

Reason:

- $0$ is an eigenvalue exactly when $Av = 0$ for some nonzero $v$.
- That means $\operatorname{Null}(A)$ is nontrivial.
- So $A$ is singular.

## Triangular matrices

If $A$ is upper or lower triangular, its eigenvalues are the diagonal entries.

This is one of the fastest ways to read off eigenvalues by inspection.

---

# Diagonalization

A matrix $A$ is **diagonalizable** if there exists an invertible matrix $P$ and a diagonal matrix $D$ such that

$$
A = PDP^{-1}
$$

The columns of $P$ are eigenvectors of $A$, and the corresponding diagonal entries of $D$ are the eigenvalues.

Equivalently,

$$
P^{-1}AP = D
$$

## Why diagonalization matters

Diagonal matrices are easy to work with:

$$
D^k =
\begin{bmatrix}
\lambda_1^k & 0 & \cdots & 0 \\
0 & \lambda_2^k & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_n^k
\end{bmatrix}
$$

So if

$$
A = PDP^{-1}
$$

then

$$
A^k = PD^kP^{-1}
$$

This is useful in differential equations, dynamical systems, and repeated matrix multiplication.

## Diagonalizability criterion

An $n \times n$ matrix is diagonalizable if it has $n$ linearly independent eigenvectors.

Sufficient conditions:

- $A$ has $n$ distinct eigenvalues.
- $A$ is real symmetric.
- For each eigenvalue, geometric multiplicity equals algebraic multiplicity, and the total number of independent eigenvectors is $n$.

## Example

Let

$$
A =
\begin{bmatrix}
4 & 1 \\
2 & 3
\end{bmatrix}
$$

with eigenpairs

$$
\lambda_1 = 5,\quad
v_1 =
\begin{bmatrix}
1 \\
1
\end{bmatrix}
$$

and

$$
\lambda_2 = 2,\quad
v_2 =
\begin{bmatrix}
1 \\
-2
\end{bmatrix}
$$

Then

$$
P =
\begin{bmatrix}
1 & 1 \\
1 & -2
\end{bmatrix},
\qquad
D =
\begin{bmatrix}
5 & 0 \\
0 & 2
\end{bmatrix}
$$

and

$$
A = PDP^{-1}
$$

---

# Special matrix classes

## Symmetric matrices

If $A$ is real symmetric, then:

- All eigenvalues are real.
- Eigenvectors for distinct eigenvalues are orthogonal.
- $A$ is diagonalizable by an orthogonal matrix.

This gives the spectral theorem:

$$
A = QDQ^T
$$

where $Q$ is orthogonal and $D$ is diagonal.

This is stronger and more stable than ordinary diagonalization.

## Projection matrices

If $P$ satisfies

$$
P^2 = P
$$

then its eigenvalues can only be

$$
0 \quad \text{or} \quad 1
$$

Reason:

$$
Pv = \lambda v
\quad \Rightarrow \quad
P^2v = \lambda^2 v
$$

but also

$$
P^2v = Pv = \lambda v
$$

so

$$
\lambda^2 = \lambda
$$

and therefore

$$
\lambda(\lambda - 1) = 0
$$

## Nilpotent matrices

If

$$
A^k = 0
$$

for some positive integer $k$, then every eigenvalue of $A$ is $0$.

Reason:

$$
Av = \lambda v
\quad \Rightarrow \quad
A^k v = \lambda^k v
$$

Since $A^k v = 0$ and $v \ne 0$, we must have

$$
\lambda^k = 0
$$

so $\lambda = 0$.

## Orthogonal matrices

If $Q^TQ = I$, then over $\mathbb{C}$ every eigenvalue satisfies

$$
|\lambda| = 1
$$

For real orthogonal matrices, eigenvalues may be real or complex. Real eigenvalues can only be

$$
1 \quad \text{or} \quad -1
$$

---

# Complex eigenvalues and real matrices

Not every real matrix has real eigenvalues.

Example:

$$
A =
\begin{bmatrix}
0 & -1 \\
1 & 0
\end{bmatrix}
$$

This is rotation by $90^\circ$ in $\mathbb{R}^2$.

Its characteristic equation is

$$
\det(A - \lambda I)
=
\begin{vmatrix}
-\lambda & -1 \\
1 & -\lambda
\end{vmatrix}
=
\lambda^2 + 1 = 0
$$

So the eigenvalues are

$$
\lambda = i,\quad \lambda = -i
$$

There are no real eigenvectors because no nonzero real vector stays on its own line under a $90^\circ$ rotation.

## Conjugate pairs

If a real matrix has a complex eigenvalue

$$
\lambda = a + bi
$$

then its complex conjugate

$$
\bar{\lambda} = a - bi
$$

is also an eigenvalue.

This happens because the characteristic polynomial has real coefficients.

---

# How to compute eigenvalues by hand

## For a general matrix

1. Form $A - \lambda I$.
2. Compute $\det(A - \lambda I)$.
3. Solve the characteristic equation.
4. For each eigenvalue, solve $(A - \lambda I)v = 0$.
5. Check how many independent eigenvectors you obtained.

## For a $2 \times 2$ matrix

If

$$
A =
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

then

$$
\det(A - \lambda I)
=
\lambda^2 - (a+d)\lambda + (ad-bc)
$$

So the eigenvalues satisfy

$$
\lambda^2 - \operatorname{tr}(A)\lambda + \det(A) = 0
$$

This is worth memorizing.

## Sanity checks

After solving, verify:

- The sum of eigenvalues equals $\operatorname{tr}(A)$.
- The product of eigenvalues equals $\det(A)$.
- Repeated roots require an eigenspace check before claiming diagonalizability.

## Common computational shortcut

For triangular matrices, do not expand a full determinant. Read the eigenvalues directly from the diagonal.

---

# Applications

## Dynamical systems

For

$$
x_{k+1} = Ax_k
$$

the eigenvalues of $A$ control long-term behavior.

- If $|\lambda| < 1$, the associated mode decays.
- If $|\lambda| > 1$, the associated mode grows.
- If $|\lambda| = 1$, the mode is neutral in magnitude and may oscillate.

## Differential equations

For systems such as

$$
x'(t) = Ax(t)
$$

eigenvalues describe growth, decay, and oscillation. Diagonalization can reduce the system to decoupled scalar equations.

## Principal directions

In quadratic forms and symmetric matrices, eigenvectors give principal directions and eigenvalues give the stretch or curvature in those directions.

This underlies:

- Principal component analysis
- Normal modes in mechanics
- Stress and strain analysis
- Conic sections and quadric surfaces

## Markov chains

For a stochastic matrix, $\lambda = 1$ is especially important. The corresponding eigenvectors help describe steady states and long-run distributions.

---

# Problem-solving workflow

Use this checklist for most eigenvalue problems.

## Step 1: Confirm the matrix is square

If $A$ is not square, standard eigenvalues are not defined.

## Step 2: Form the characteristic polynomial

Compute

$$
\det(A - \lambda I)
$$

and solve for $\lambda$.

## Step 3: Use structure before brute force

Check whether the matrix is:

- Triangular
- Diagonal
- Symmetric
- A projection
- Nilpotent
- Block structured

These often reveal eigenvalues immediately.

## Step 4: Find eigenspaces

For each eigenvalue, solve

$$
(A - \lambda I)v = 0
$$

using row reduction.

## Step 5: Compare multiplicities

If an eigenvalue repeats, check whether its eigenspace has enough dimension.

## Step 6: Decide whether diagonalization is possible

Count the number of linearly independent eigenvectors.

## Step 7: Verify with trace and determinant

Use

$$
\sum \lambda_i = \operatorname{tr}(A),
\qquad
\prod \lambda_i = \det(A)
$$

to catch arithmetic mistakes.

---

# Formula sheet

## Definitions

$$
Av = \lambda v,\qquad v \ne 0
$$

$$
(A - \lambda I)v = 0
$$

$$
\det(A - \lambda I) = 0
$$

$$
E_\lambda = \operatorname{Null}(A - \lambda I)
$$

## Multiplicity

$$
1 \le \dim(E_\lambda) \le \text{algebraic multiplicity of } \lambda
$$

## Determinant and trace

$$
\det(A) = \lambda_1 \lambda_2 \cdots \lambda_n
$$

$$
\operatorname{tr}(A) = \lambda_1 + \lambda_2 + \cdots + \lambda_n
$$

## Invertibility

$$
A \text{ invertible } \iff 0 \text{ is not an eigenvalue}
$$

## Diagonalization

$$
A = PDP^{-1}
$$

$$
A \text{ diagonalizable } \iff A \text{ has } n \text{ linearly independent eigenvectors}
$$

$$
A^k = PD^kP^{-1}
$$

## Real symmetric matrices

$$
A = QDQ^T
$$

with $Q$ orthogonal and $D$ diagonal.

## Special cases

For triangular $A$, eigenvalues are the diagonal entries.

For

$$
A =
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

the characteristic polynomial is

$$
\lambda^2 - (a+d)\lambda + (ad-bc)
$$

---

# Common mistakes to avoid

- Forgetting that eigenvalues are defined for square matrices.
- Solving $\det(A)=0$ instead of $\det(A-\lambda I)=0$.
- Calling the zero vector an eigenvector.
- Finding eigenvalues but not computing eigenvectors.
- Assuming a repeated eigenvalue guarantees enough eigenvectors to diagonalize.
- Forgetting that complex eigenvalues can occur for real matrices.
- Mixing up algebraic multiplicity and geometric multiplicity.
- Ignoring trace and determinant checks after solving the characteristic equation.
- Claiming $A = PDP^{-1}$ without putting eigenvectors in the columns of $P$ in the same order as the eigenvalues in $D$.

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)

This note assumes the matrix operations, determinants, row reduction, null spaces, and subspaces
developed in the [Matrices note](../matrices/matrices.md). It focuses on eigenvalue theory,
classification, and computation.
