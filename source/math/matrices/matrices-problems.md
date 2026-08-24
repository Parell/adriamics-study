<!--
id: matrices-11
note: math-matrices
title: "Identify a Matrix Entry"
exam: exam-i
skills: [Matrix Entries]
-->

For

$$
A =
\begin{bmatrix}
2 & -1 & 4 \\
0 & 5 & 7 \\
3 & 8 & 6
\end{bmatrix},
$$

what is $a_{23}$?

:::solution
The entry $a_{23}$ means row $2$, column $3$.

From the matrix, that entry is

$$
a_{23} = 7.
$$
:::

<!--
id: matrices-12
note: math-matrices
title: "Determine a Matrix's Dimensions"
exam: exam-i
skills: [Dimensions]
-->

What is the size of the matrix below?

$$
\begin{bmatrix}
1 & 0 & 2 & -3 \\
4 & 5 & -1 & 6
\end{bmatrix}
$$

:::solution
The matrix has $2$ rows and $4$ columns, so its dimensions are

$$
2 \times 4.
$$
:::

<!--
id: matrices-13
note: math-matrices
title: "Classify a Matrix"
exam: exam-i
skills: [Matrix Types]
-->

Name every matrix type from the note that applies to

$$
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}.
$$

:::solution
This matrix is:

- square
- diagonal
- scalar
- identity
- upper triangular
- lower triangular
- symmetric
- orthogonal
- nonsingular

Each off-diagonal entry is $0$, and each diagonal entry is $1$.
:::

<!--
id: matrices-14
note: math-matrices
title: "Add Two Matrices"
exam: exam-i
skills: [Matrix Addition]
-->

Compute the sum:

$$
\begin{bmatrix}
1 & 3 \\
2 & -4
\end{bmatrix}
+
\begin{bmatrix}
5 & -1 \\
-2 & 7
\end{bmatrix}
$$

:::solution
Add corresponding entries:

$$
\begin{bmatrix}
1+5 & 3+(-1) \\
2+(-2) & -4+7
\end{bmatrix}
=
\begin{bmatrix}
6 & 2 \\
0 & 3
\end{bmatrix}
$$
:::

<!--
id: matrices-15
note: math-matrices
title: "Scale a Matrix"
exam: exam-i
skills: [Scalar Multiplication]
-->

Compute $-3A$ for

$$
A =
\begin{bmatrix}
1 & -2 \\
4 & 0
\end{bmatrix}.
$$

:::solution
Multiply every entry by $-3$:

$$
-3A =
\begin{bmatrix}
-3 & 6 \\
-12 & 0
\end{bmatrix}.
$$
:::

<!--
id: matrices-16
note: math-matrices
title: "Check Matrix Multiplication Compatibility"
exam: exam-i
skills: [Matrix Multiplication, Dimensions]
-->

Suppose $A$ is a $2 \times 3$ matrix and $B$ is a $3 \times 1$ matrix.
Is $AB$ defined, and what size is the product?

:::solution
Yes. The inner dimensions match because the number of columns of $A$ is $3$ and the number of rows of $B$ is $3$.

So $AB$ is defined, and its size is

$$
2 \times 1.
$$
:::

<!--
id: matrices-17
note: math-matrices
title: "Transpose a Matrix"
exam: exam-i
skills: [Transpose]
-->

Find the transpose of

$$
\begin{bmatrix}
1 & 4 & -2 \\
3 & 0 & 5
\end{bmatrix}.
$$

:::solution
Swap rows and columns:

$$
\begin{bmatrix}
1 & 4 & -2 \\
3 & 0 & 5
\end{bmatrix}^T
=
\begin{bmatrix}
1 & 3 \\
4 & 0 \\
-2 & 5
\end{bmatrix}.
$$
:::

<!--
id: matrices-18
note: math-matrices
title: "Compute a 2 by 2 Determinant"
exam: exam-i
skills: [Determinants]
-->

Find the determinant of

$$
\begin{bmatrix}
7 & 2 \\
5 & 3
\end{bmatrix}.
$$

:::solution
For a $2 \times 2$ matrix,

$$
\det\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
= ad - bc.
$$

So

$$
\det\begin{bmatrix}
7 & 2 \\
5 & 3
\end{bmatrix}
= 7 \cdot 3 - 2 \cdot 5
= 21 - 10
= 11.
$$
:::

<!--
id: matrices-19
note: math-matrices
title: "Find the Inverse of a 2 by 2 Matrix"
exam: exam-i
skills: [Inverse Matrices, Determinants]
-->

Find the inverse of

$$
A =
\begin{bmatrix}
2 & 1 \\
5 & 3
\end{bmatrix}.
$$

:::solution
First compute the determinant:

$$
\det(A) = 2 \cdot 3 - 1 \cdot 5 = 6 - 5 = 1.
$$

Since the determinant is nonzero, the inverse exists. Use the $2 \times 2$ inverse formula:

$$
A^{-1} = \frac{1}{1}
\begin{bmatrix}
3 & -1 \\
-5 & 2
\end{bmatrix}
=
\begin{bmatrix}
3 & -1 \\
-5 & 2
\end{bmatrix}.
$$
:::

<!--
id: matrices-110
note: math-matrices
title: "Compute the Trace of a Matrix"
exam: exam-i
skills: [Trace]
-->

Find the trace of

$$
\begin{bmatrix}
4 & 1 & 0 \\
2 & -3 & 5 \\
7 & 8 & 6
\end{bmatrix}.
$$

:::solution
The trace is the sum of the diagonal entries:

$$
\operatorname{tr}(A) = 4 + (-3) + 6 = 7.
$$
:::

<!--
id: matrices-21
note: math-matrices
title: "Multiply Two Matrices"
exam: exam-ii
skills: [Matrix Multiplication]
-->

Compute

$$
\begin{bmatrix}
1 & 2 \\
3 & 0
\end{bmatrix}
\begin{bmatrix}
4 & 1 \\
-2 & 5
\end{bmatrix}.
$$

:::solution
Multiply row by column:

$$
\begin{bmatrix}
1 \cdot 4 + 2 \cdot (-2) & 1 \cdot 1 + 2 \cdot 5 \\
3 \cdot 4 + 0 \cdot (-2) & 3 \cdot 1 + 0 \cdot 5
\end{bmatrix}
=
\begin{bmatrix}
0 & 11 \\
12 & 3
\end{bmatrix}.
$$
:::

<!--
id: matrices-22
note: math-matrices
title: "Use Matrix-Vector Multiplication"
exam: exam-ii
skills: [Matrix Multiplication, Columns]
-->

Let

$$
A =
\begin{bmatrix}
2 & -1 & 0 \\
1 & 3 & 4
\end{bmatrix}
\quad \text{and} \quad
x =
\begin{bmatrix}
5 \\
2 \\
-1
\end{bmatrix}.
$$

Compute $Ax$.

:::solution
Multiply row by column:

$$
Ax =
\begin{bmatrix}
2(5) + (-1)(2) + 0(-1) \\
1(5) + 3(2) + 4(-1)
\end{bmatrix}
=
\begin{bmatrix}
8 \\
7
\end{bmatrix}.
$$

You can also view this as a linear combination of the columns of $A$ weighted by the entries of $x$.
:::

<!--
id: matrices-23
note: math-matrices
title: "Solve a System by Row Reduction"
exam: exam-ii
skills: [Row Reduction, Systems of Equations]
-->

Solve the system:

$$
\begin{aligned}
x + 2y &= 8 \\
2x - y &= 1
\end{aligned}
$$

:::solution
Write the augmented matrix:

$$
\begin{bmatrix}
1 & 2 & \mid & 8 \\
2 & -1 & \mid & 1
\end{bmatrix}.
$$

Eliminate the $2$ below the first pivot:

$$
R_2 \leftarrow R_2 - 2R_1
$$

gives

$$
\begin{bmatrix}
1 & 2 & \mid & 8 \\
0 & -5 & \mid & -15
\end{bmatrix}.
$$

So

$$
y = 3.
$$

Substitute into the first equation:

$$
x + 2(3) = 8
$$

so

$$
x = 2.
$$
:::

<!--
id: matrices-24
note: math-matrices
title: "Find Rank and Nullity from a Row-Reduced Matrix"
exam: exam-ii
skills: [Rank, Nullity]
-->

A $3 \times 4$ matrix row-reduces to

$$
\begin{bmatrix}
1 & 0 & 2 & -1 \\
0 & 1 & 3 & 4 \\
0 & 0 & 0 & 0
\end{bmatrix}.
$$

What are its rank and nullity?

:::solution
There are $2$ pivot columns, so the rank is

$$
\operatorname{rank}(A) = 2.
$$

The matrix has $4$ columns, so by rank-nullity:

$$
\operatorname{rank}(A) + \operatorname{nullity}(A) = 4.
$$

Thus

$$
2 + \operatorname{nullity}(A) = 4
$$

so

$$
\operatorname{nullity}(A) = 2.
$$
:::

<!--
id: matrices-25
note: math-matrices
title: "Find the Eigenvalues of a Matrix"
exam: exam-ii
skills: [Eigenvalues, Characteristic Equation]
-->

Find the eigenvalues of

$$
A =
\begin{bmatrix}
3 & 1 \\
0 & 2
\end{bmatrix}.
$$

:::solution
Use the characteristic equation:

$$
\det(A - \lambda I) = 0.
$$

Compute

$$
A - \lambda I =
\begin{bmatrix}
3 - \lambda & 1 \\
0 & 2 - \lambda
\end{bmatrix}.
$$

Then

$$
\det(A - \lambda I) = (3 - \lambda)(2 - \lambda).
$$

Set this equal to zero:

$$
(3 - \lambda)(2 - \lambda) = 0.
$$

So the eigenvalues are

$$
\lambda = 3 \quad \text{and} \quad \lambda = 2.
$$
:::

<!--
id: matrices-26
note: math-matrices
title: "Use Diagonalization to Compute a Power"
exam: exam-ii
skills: [Diagonalization, Matrix Powers]
-->

Suppose

$$
A = P
\begin{bmatrix}
2 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 3
\end{bmatrix}
P^{-1}.
$$

Find $A^4$.

:::solution
Use the diagonalization formula:

$$
A^4 = P D^4 P^{-1},
$$

where

$$
D =
\begin{bmatrix}
2 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 3
\end{bmatrix}.
$$

Raise each diagonal entry to the fourth power:

$$
D^4 =
\begin{bmatrix}
16 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 81
\end{bmatrix}.
$$

Therefore

$$
A^4 = P
\begin{bmatrix}
16 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 81
\end{bmatrix}
P^{-1}.
$$
:::

<!--
id: matrices-27
note: math-matrices
title: "Complete a Symmetric Matrix"
exam: exam-ii
skills: [Transpose, Symmetric Matrices]
-->

Find the values of $a$ and $b$ that make the matrix symmetric:

$$
\begin{bmatrix}
1 & 4 & -2 \\
a & 0 & 7 \\
-2 & b & 5
\end{bmatrix}
$$

:::solution
For a symmetric matrix, entries across the main diagonal must match.

So the $(1,2)$ and $(2,1)$ entries must be equal:

$$
a = 4.
$$

Also the $(2,3)$ and $(3,2)$ entries must be equal:

$$
b = 7.
$$

So the matrix is symmetric when

$$
a = 4,\quad b = 7.
$$
:::

<!--
id: matrices-28
note: math-matrices
title: "Use Determinant Properties"
exam: exam-ii
skills: [Determinants, Transpose]
-->

Suppose

$$
\det(A) = -2
\quad \text{and} \quad
\det(B) = 5.
$$

Find $\det(B^T A)$ and determine whether $B^T A$ is singular.

:::solution
Use the determinant properties:

$$
\det(B^T A) = \det(B^T)\det(A).
$$

Also,

$$
\det(B^T) = \det(B) = 5.
$$

So

$$
\det(B^T A) = 5(-2) = -10.
$$

Because the determinant is nonzero, $B^T A$ is not singular.
:::

<!--
id: matrices-31
note: math-matrices
title: "Model a Purchase with a System"
exam: final
skills: [Systems of Equations, Matrix Equations]
-->

A store sells notebooks and pens.

Two notebooks and three pens cost \$13.
One notebook and one pen cost \$5.

What is the price of one notebook?

:::solution
Let $n$ be the notebook price and $p$ be the pen price.

The system is

$$
\begin{aligned}
2n + 3p &= 13 \\
n + p &= 5
\end{aligned}
$$

Subtract the second equation from the first after doubling it:

$$
2n + 2p = 10
$$

Then

$$
p = 3.
$$

Substitute into $n + p = 5$:

$$
n + 3 = 5
$$

so

$$
n = 2.
$$
:::

<!--
id: matrices-32
note: math-matrices
title: "Interpret a Row-Reduced System"
exam: final
skills: [Row Reduction, Systems of Equations]
-->

A system row-reduces to

$$
\begin{bmatrix}
1 & 0 & 2 & \mid & 4 \\
0 & 1 & -1 & \mid & 3 \\
0 & 0 & 0 & \mid & 0
\end{bmatrix}.
$$

How many solutions does the system have?

:::solution
There are pivots in the first two variable columns, but the third variable column has no pivot, so one variable is free.

Because there is no inconsistent row and at least one free variable, the system has infinitely many solutions.
:::

<!--
id: matrices-33
note: math-matrices
title: "Apply Rank-Nullity"
exam: final
skills: [Rank-Nullity, Nullity]
-->

A $4 \times 6$ matrix has rank $4$.

How many free variables does the homogeneous system $Ax = 0$ have?

:::solution
Use rank-nullity:

$$
\operatorname{rank}(A) + \operatorname{nullity}(A) = 6.
$$

Since $\operatorname{rank}(A) = 4$,

$$
4 + \operatorname{nullity}(A) = 6.
$$

So

$$
\operatorname{nullity}(A) = 2.
$$

That means there are $2$ free variables.
:::

<!--
id: matrices-34
note: math-matrices
title: "Recognize an Eigenvector"
exam: final
skills: [Eigenvalues, Eigenvectors]
-->

A nonzero vector $v$ satisfies

$$
Av = -3v.
$$

What does this tell you about $v$ and the scalar $-3$?

:::solution
The equation has the form

$$
Av = \lambda v.
$$

So $v$ is an eigenvector of $A$, and the corresponding eigenvalue is

$$
\lambda = -3.
$$
:::

<!--
id: matrices-35
note: math-matrices
title: "Use an LU Factorization"
exam: final
skills: [LU Decomposition, Determinants, Triangular Matrices]
-->

A matrix $A$ has the factorization $A = LU$, where

$$
L =
\begin{bmatrix}
1 & 0 & 0 \\
-2 & 1 & 0 \\
3 & 4 & 1
\end{bmatrix}
\quad \text{and} \quad
U =
\begin{bmatrix}
2 & -1 & 0 \\
0 & 5 & 3 \\
0 & 0 & -4
\end{bmatrix}.
$$

Without multiplying $L$ and $U$, find $\det(A)$ and say whether $A$ is invertible.

:::solution
Use the product property:

$$
\det(A) = \det(L)\det(U).
$$

Because $L$ is lower triangular with diagonal entries all $1$,

$$
\det(L) = 1.
$$

Because $U$ is upper triangular,

$$
\det(U) = 2 \cdot 5 \cdot (-4) = -40.
$$

So

$$
\det(A) = 1 \cdot (-40) = -40.
$$

Since the determinant is nonzero, $A$ is invertible.
:::

<!--
id: matrices-41
note: math-matrices
title: "Use a Determinant Identity"
exam: final
skills: [Determinants, Transpose]
-->

Suppose $A$ is a square matrix and

$$
\det(A) = 3.
$$

Find $\det(A^T A)$ and decide whether $A^T A$ is invertible.

:::solution
Use the determinant rules:

$$
\det(A^T A) = \det(A^T)\det(A).
$$

Also,

$$
\det(A^T) = \det(A) = 3.
$$

Therefore

$$
\det(A^T A) = 3 \cdot 3 = 9.
$$

Because the determinant is nonzero, $A^T A$ is invertible.
:::

<!--
id: matrices-42
note: math-matrices
title: "A Matrix That Is Symmetric and Skew-Symmetric"
exam: final
skills: [Symmetric Matrices, Skew-Symmetric Matrices]
-->

If a matrix satisfies both

$$
A^T = A
$$

and

$$
A^T = -A,
$$

what must $A$ be?

:::solution
Since both equalities hold, we have

$$
A = -A.
$$

Add $A$ to both sides:

$$
2A = 0.
$$

Over the real numbers, this implies

$$
A = 0.
$$

So the matrix must be the zero matrix.
:::

<!--
id: matrices-43
note: math-matrices
title: "An Invertible Projection Matrix"
exam: final
skills: [Projection Matrices, Inverse Matrices]
-->

Suppose a matrix $P$ satisfies

$$
P^2 = P
$$

and also has an inverse. What must $P$ be?

:::solution
Because $P$ is invertible, multiply the equation $P^2 = P$ on the left by $P^{-1}$:

$$
P^{-1}P^2 = P^{-1}P.
$$

This simplifies to

$$
P = I.
$$

So an invertible projection matrix must be the identity matrix.
:::

<!--
id: matrices-44
note: math-matrices
title: "Reason About a QR Factorization"
exam: final
skills: [QR Decomposition, Orthogonal Matrices, Triangular Matrices]
-->

A matrix $A$ is written as

$$
A = QR,
$$

where $Q$ is orthogonal and

$$
R =
\begin{bmatrix}
2 & 1 & 0 \\
0 & -3 & 4 \\
0 & 0 & 5
\end{bmatrix}.
$$

Explain why $A$ is invertible.

:::solution
An orthogonal matrix is invertible because

$$
Q^{-1} = Q^T.
$$

The matrix $R$ is upper triangular, so its determinant is the product of its diagonal entries:

$$
\det(R) = 2 \cdot (-3) \cdot 5 = -30.
$$

Since $\det(R) \ne 0$, $R$ is invertible.

Because both $Q$ and $R$ are invertible, their product

$$
A = QR
$$

is also invertible.
:::
