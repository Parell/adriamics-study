# Matrix notation and dimensions

The **size** or **dimension** of a matrix is written as:

$$
m \times n
$$

where:

- $m$ = number of rows
- $n$ = number of columns

Examples:

$$
\begin{bmatrix}
1 & 0 \\
3 & 5
\end{bmatrix}
\quad \text{is } 2 \times 2
$$

$$
\begin{bmatrix}
1 & 2 & 3
\end{bmatrix}
\quad \text{is } 1 \times 3
$$

$$
\begin{bmatrix}
1 \\
2 \\
3
\end{bmatrix}
\quad \text{is } 3 \times 1
$$

## Row and column vectors

A **row vector** is a $1 \times n$ matrix.

A **column vector** is an $m \times 1$ matrix.

Vectors are special cases of matrices.

## Equality of matrices

Two matrices are equal if and only if:

- They have the same dimensions
- Every corresponding entry is equal

---

# Types of matrices

| Type | Definition | Example |
| --- | --- | --- |
| Zero matrix | All entries are zero | $\begin{bmatrix}0 & 0\\0 & 0\end{bmatrix}$ |
| Square matrix | Same number of rows and columns | $2 \times 2$, $3 \times 3$ |
| Diagonal matrix | Nonzero entries only on the main diagonal | $\begin{bmatrix}2 & 0\\0 & -1\end{bmatrix}$ |
| Scalar matrix | Diagonal matrix with equal diagonal entries | $cI$ |
| Identity matrix | Ones on diagonal, zeros elsewhere | $I_3$ |
| Upper triangular | Zeros below diagonal | $\begin{bmatrix}1 & 2\\0 & 3\end{bmatrix}$ |
| Lower triangular | Zeros above diagonal | $\begin{bmatrix}1 & 0\\4 & 2\end{bmatrix}$ |
| Symmetric | $A^T = A$ | $\begin{bmatrix}1 & 2\\2 & 5\end{bmatrix}$ |
| Skew-symmetric | $A^T = -A$ | $\begin{bmatrix}0 & 3\\-3 & 0\end{bmatrix}$ |
| Orthogonal | $A^T A = I$ | Rotation matrices |
| Singular | Not invertible | Determinant $= 0$ |
| Nonsingular | Invertible | Determinant $\ne 0$ |

## Identity matrix

The identity matrix $I_n$ acts like the number 1 under matrix multiplication:

$$
AI_n = I_mA = A
$$

when dimensions match.

## Trace

For a square matrix, the **trace** is the sum of diagonal entries:

$$
\operatorname{tr}(A) = \sum_{i=1}^{n} a_{ii}
$$

Trace is defined only for square matrices.

---

# Matrix operations

## Addition and subtraction

Matrix addition and subtraction require equal dimensions and are done entrywise.

If $A = [a_{ij}]$ and $B = [b_{ij}]$, then:

$$
(A+B)_{ij} = a_{ij} + b_{ij}
$$

$$
(A-B)_{ij} = a_{ij} - b_{ij}
$$

Example:

$$
\begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix}
+
\begin{bmatrix}
5 & 6\\
7 & 8
\end{bmatrix}
=
\begin{bmatrix}
6 & 8\\
10 & 12
\end{bmatrix}
$$

## Scalar multiplication

For scalar $c$:

$$
cA = [ca_{ij}]
$$

This multiplies every entry by $c$.

## Linear combination

A linear combination of matrices has the form:

$$
c_1A_1 + c_2A_2 + \cdots + c_kA_k
$$

This is useful in vector spaces of matrices.

## Properties of addition and scalar multiplication

For matrices of compatible size:

$$
A+B = B+A
$$

$$
(A+B)+C = A+(B+C)
$$

$$
A+0 = A
$$

$$
A + (-A) = 0
$$

$$
c(A+B) = cA + cB
$$

$$
(c+d)A = cA + dA
$$

$$
(cd)A = c(dA)
$$

---

# Matrix multiplication

Matrix multiplication is not entrywise. It is defined by row-by-column products.

If $A$ is $m \times n$ and $B$ is $n \times p$, then $AB$ is defined and has size $m \times p$.

## Compatibility rule

The number of columns of the left matrix must equal the number of rows of the right matrix.

If dimensions do not match, the product is undefined.

## Product formula

The $(i,j)$ entry of $AB$ is:

$$
(AB)_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}
$$

Example:

$$
\begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix}
\begin{bmatrix}
5 & 6\\
7 & 8
\end{bmatrix}
=
\begin{bmatrix}
19 & 22\\
43 & 50
\end{bmatrix}
$$

because:

$$
19 = 1\cdot 5 + 2\cdot 7
$$

$$
22 = 1\cdot 6 + 2\cdot 8
$$

## Key properties

Matrix multiplication is:

- Associative: $(AB)C = A(BC)$
- Distributive: $A(B+C) = AB + AC$
- Compatible with scalars: $(cA)B = c(AB) = A(cB)$

Matrix multiplication is generally **not commutative**:

$$
AB \ne BA
$$

in most cases.

## Powers of a matrix

For a square matrix:

$$
A^2 = AA,\quad A^3 = AAA
$$

and in general:

$$
A^k = \underbrace{A\cdots A}_{k\text{ factors}}
$$

Matrix powers are only defined for square matrices.

## Useful interpretation

If $A$ is a matrix and $x$ is a vector, then $Ax$ is a linear combination of the columns of $A$ weighted by the components of $x$.

That viewpoint is often the fastest way to interpret $Ax=b$.
---

# Transpose and symmetry

The **transpose** of a matrix $A$ is denoted $A^T$ and is formed by swapping rows and columns.

If $A = [a_{ij}]$, then:

$$
(A^T)_{ij} = a_{ji}
$$

Example:

$$
\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{bmatrix}^T
=
\begin{bmatrix}
1 & 4\\
2 & 5\\
3 & 6
\end{bmatrix}
$$

## Transpose rules

$$
(A^T)^T = A
$$

$$
(A+B)^T = A^T + B^T
$$

$$
(cA)^T = cA^T
$$

$$
(AB)^T = B^T A^T
$$

The last identity reverses the order.

## Symmetric matrices

A square matrix is symmetric if:

$$
A^T = A
$$

Symmetric matrices have mirrored entries across the main diagonal.

## Skew-symmetric matrices

A square matrix is skew-symmetric if:

$$
A^T = -A
$$

Every diagonal entry of a skew-symmetric matrix is zero.

---

# Row reduction and echelon form

Row operations are used to solve systems and simplify matrices.

## Elementary row operations

1. Swap two rows
2. Multiply a row by a nonzero scalar
3. Replace a row by itself plus a multiple of another row

These operations preserve the solution set of a linear system.

## Row echelon form

A matrix is in **row echelon form** if:

- All zero rows are at the bottom
- Each leading nonzero entry is to the right of the one above it
- Entries below each leading entry are zero

## Reduced row echelon form

A matrix is in **reduced row echelon form** if, in addition:

- Every leading entry is 1
- Each leading 1 is the only nonzero entry in its column

The reduced row echelon form is unique.

## Pivots

The first nonzero entry in a nonzero row is a **pivot**.

Pivot columns identify which variables are basic in a linear system.

## How to row-reduce efficiently

1. Work left to right, top to bottom.
2. Create a pivot in the current column.
3. Eliminate entries below the pivot.
4. Move to the next row and next column.
5. Back-substitute if you need reduced row echelon form.

---

# Determinants

The determinant is a scalar associated with a square matrix.

It measures, among other things:

- Scaling of area or volume under the linear transformation
- Whether the matrix is invertible
- Orientation change

## Determinant of a 2 by 2 matrix

For:

$$
A =
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

the determinant is:

$$
\det(A) = ad - bc
$$

## Determinant of a 3 by 3 matrix

For:

$$
A =
\begin{bmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}
$$

one expansion is:

$$
\det(A) = a(ei-fh) - b(di-fg) + c(dh-eg)
$$

## Determinant properties

For square matrices:

$$
\det(AB) = \det(A)\det(B)
$$

$$
\det(A^T) = \det(A)
$$

$$
\det(I) = 1
$$

If $A$ is triangular, then:

$$
\det(A) = \prod_{i=1}^{n} a_{ii}
$$

## Determinant and invertibility

A square matrix is invertible if and only if:

$$
\det(A) \ne 0
$$

If:

$$
\det(A) = 0
$$

then the matrix is singular.

## Cofactor expansion

For a square matrix, the determinant can be expanded along a row or column using minors and cofactors.

This method is conceptually useful, but for large matrices row reduction is often faster.

---

# Inverse matrices

If $A$ is square, its inverse $A^{-1}$ satisfies:

$$
AA^{-1} = A^{-1}A = I
$$

An inverse exists exactly when $A$ is nonsingular.

## Why inverses matter

If $Ax=b$ and $A^{-1}$ exists, then:

$$
x = A^{-1}b
$$

This solves the system in one step, though computing the inverse directly is often not the best numerical method.

## Inverse of a 2 by 2 matrix

For:

$$
A =
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

if $ad-bc \ne 0$, then:

$$
A^{-1} = \frac{1}{ad-bc}
\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$

## Inverse properties

$$
(AB)^{-1} = B^{-1}A^{-1}
$$

$$
(A^T)^{-1} = (A^{-1})^T
$$

$$
(cA)^{-1} = \frac{1}{c}A^{-1}
$$

for nonzero scalar $c$.

## Practical note

To check whether your inverse is correct, multiply:

$$
AA^{-1} = I
$$

on one side and, if needed, on both sides.

---

# Systems of linear equations

A linear system can be written as:

$$
Ax = b
$$

where:

- $A$ is the coefficient matrix
- $x$ is the vector of unknowns
- $b$ is the constant vector

## Augmented matrix

The system is often represented as:

$$
[A \mid b]
$$

Row reduction is then used to determine whether the system has:

- No solution
- Exactly one solution
- Infinitely many solutions

## Interpret the row-reduced form

If a row reduces to:

$$
[0\ 0\ \cdots\ 0 \mid c]
$$

with $c \ne 0$, the system is inconsistent.

If every variable column has a pivot, the solution is unique.

If some variables are free, the system has infinitely many solutions.

## Homogeneous systems

A homogeneous system has the form:

$$
Ax = 0
$$

It always has the trivial solution:

$$
x = 0
$$

Nontrivial solutions exist exactly when the columns of $A$ are linearly dependent.

## Solution structure

For a consistent system, the general solution is:

$$
x = x_p + x_h
$$

where:

- $x_p$ is one particular solution
- $x_h$ is the general solution of the homogeneous system

---

# Rank, nullity, and subspaces

## Rank

The **rank** of a matrix is the number of pivot columns, equivalently the dimension of the column space.

It is also the dimension of the row space.

## Nullity

The **nullity** of a matrix is the dimension of its null space:

$$
\mathcal{N}(A) = \{x : Ax = 0\}
$$

## Rank-nullity theorem

For an $m \times n$ matrix:

$$
\operatorname{rank}(A) + \operatorname{nullity}(A) = n
$$

This is one of the most useful bookkeeping identities in linear algebra.

## Column space

The **column space** is the span of the columns of $A$.

It is the set of all vectors $b$ for which $Ax=b$ has at least one solution.

## Row space

The **row space** is the span of the rows of $A$.

Row operations preserve the row space up to equivalence of the row span.

## Null space

The null space contains all vectors mapped to zero by $A$.

If the null space contains only the zero vector, then $A$ has full column rank.

---

# Where eigenvalues fit

Matrices are the foundation: dimensions, multiplication, row reduction, determinants,
inverses, rank, null spaces, and subspaces provide the tools used by eigenvalue methods.
The focused theory and computation belong in the [Eigenvalues note](../eigenvalues/eigenvalues.md).

Use this compact recap only to connect the topics:

| Topic | Matrix-level statement | Full treatment |
| --- | --- | --- |
| Eigenpair | $Av=\lambda v$, with $v\ne0$ | [Eigenvalues](../eigenvalues/eigenvalues.md) |
| Candidate eigenvalues | $\det(A-\lambda I)=0$ | [Characteristic equations](../eigenvalues/eigenvalues.md#2-characteristic-equation) |
| Eigenspace | $\operatorname{Null}(A-\lambda I)$ | [Eigenspaces](../eigenvalues/eigenvalues.md#3-eigenvectors-and-eigenspaces) |
| Diagonalization | $A=PDP^{-1}$ when there are enough independent eigenvectors | [Diagonalization](../eigenvalues/eigenvalues.md#6-diagonalization) |
| Symmetric case | $A=QDQ^T$ with $Q$ orthogonal | [Spectral theorem](../eigenvalues/eigenvalues.md#7-special-matrix-classes) |

---

# Special matrices and decompositions

## Orthogonal matrices

A square matrix $Q$ is orthogonal if:

$$
Q^TQ = I
$$

Equivalently:

$$
Q^{-1} = Q^T
$$

Orthogonal matrices preserve lengths and angles.

## Projection matrices

A projection matrix satisfies:

$$
P^2 = P
$$

It projects vectors onto a subspace.

## Idempotent and nilpotent matrices

An **idempotent** matrix satisfies:

$$
A^2 = A
$$

A **nilpotent** matrix satisfies:

$$
A^k = 0
$$

for some positive integer $k$.

## LU decomposition

Many matrices can be factored as:

$$
A = LU
$$

where:

- $L$ is lower triangular
- $U$ is upper triangular

This is useful for solving multiple systems with the same coefficient matrix.

## QR decomposition

Another common factorization is:

$$
A = QR
$$

where:

- $Q$ has orthonormal columns
- $R$ is upper triangular

QR decomposition is central in least-squares problems and numerical algorithms.

---

# Problem-solving workflow

Use this sequence for most matrix problems.

## Step 1: Identify the object

Decide whether you are working with:

- A raw matrix
- A linear system
- A transformation
- An eigenvalue problem
- A decomposition problem

## Step 2: Check dimensions

Verify compatibility before computing:

- Addition requires equal size
- Multiplication requires matching inner dimensions
- Inverses require square matrices
- Eigenvalues require square matrices

## Step 3: Choose the right tool

Common choices:

- Row reduction for systems and rank
- Determinants for invertibility checks
- Inverses for algebraic rearrangement
- Eigenvalues for dynamics, stability, and diagonalization
- Factorizations for efficient computation

## Step 4: Simplify symbolically

Keep expressions symbolic until the structure is clear.

Do not substitute numbers before the matrix form is organized.

## Step 5: Verify the result

Check:

- Dimensions
- Signs
- Pivot structure
- Invertibility conditions
- Consistency of the system

For eigenvalue problems, verify with:

$$
Av = \lambda v
$$

For inverses, verify with:

$$
AA^{-1} = I
$$

---

# Formula sheet

## Core definitions

$$
A = [a_{ij}]
$$

$$
(A^T)_{ij} = a_{ji}
$$

$$
(AB)_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}
$$

## Matrix sizes

If $A$ is $m \times n$ and $B$ is $n \times p$, then:

$$
AB \text{ is } m \times p
$$

## Identity and inverse

$$
AI = IA = A
$$

$$
AA^{-1} = A^{-1}A = I
$$

## Determinants

For $2 \times 2$ matrices:

$$
\det\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
= ad - bc
$$

For triangular matrices:

$$
\det(A) = \prod_{i=1}^{n} a_{ii}
$$

Matrix is invertible if and only if:

$$
\det(A) \ne 0
$$

## Row reduction

Elementary row operations:

- Swap two rows
- Multiply a row by a nonzero scalar
- Add a multiple of one row to another

## Rank-nullity

$$
\operatorname{rank}(A) + \operatorname{nullity}(A) = n
$$

## Orthogonality

$$
Q^TQ = I
$$

$$
Q^{-1} = Q^T
$$

---

# Common mistakes to avoid

- Treating matrix multiplication as commutative.
- Adding or multiplying matrices with incompatible dimensions.
- Forgetting that only square matrices can have determinants and inverses.
- Confusing row operations with column operations.
- Dropping the order reversal in $(AB)^T = B^TA^T$.
- Using $\det(A) \ne 0$ as a shortcut without confirming $A$ is square.
- Forgetting that $Ax=b$ can have zero, one, or infinitely many solutions.
- Misreading pivots and free variables after row reduction.
- Treating a singular matrix as invertible.
- Forgetting to verify solutions by substitution or matrix multiplication.

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
