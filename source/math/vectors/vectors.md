# Vectors

# Notation and components

Vectors may be written in several equivalent forms:

$$
\mathbf{v} = \langle 3, -2 \rangle
$$

$$
\mathbf{v} =
\begin{bmatrix}
3 \\
-2
\end{bmatrix}
$$

$$
\mathbf{v} = 3\mathbf{i} - 2\mathbf{j}
$$

In 3D:

$$
\mathbf{v} = a\mathbf{i} + b\mathbf{j} + c\mathbf{k}
$$

where $\mathbf{i}$, $\mathbf{j}$, and $\mathbf{k}$ are the standard basis vectors:

$$
\mathbf{i} = \langle 1, 0, 0 \rangle,\quad
\mathbf{j} = \langle 0, 1, 0 \rangle,\quad
\mathbf{k} = \langle 0, 0, 1 \rangle
$$

## Component form from two points

If a vector goes from point $A(x_1, y_1)$ to point $B(x_2, y_2)$, then

$$
\overrightarrow{AB} = \langle x_2 - x_1,\ y_2 - y_1 \rangle
$$

In 3D:

$$
\overrightarrow{AB} = \langle x_2 - x_1,\ y_2 - y_1,\ z_2 - z_1 \rangle
$$

This is one of the most common ways vectors appear in geometry problems.

---

# Magnitude and unit vectors

The **magnitude** or length of $\mathbf{v} = \langle v_1, v_2, \dots, v_n \rangle$ is

$$
\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2}
$$

In 2D:

$$
\|\mathbf{v}\| = \sqrt{x^2 + y^2}
$$

In 3D:

$$
\|\mathbf{v}\| = \sqrt{x^2 + y^2 + z^2}
$$

## Unit vectors

A **unit vector** has length 1. The unit vector in the direction of $\mathbf{v}$ is

$$
\hat{\mathbf{v}} = \frac{\mathbf{v}}{\|\mathbf{v}\|}
$$

provided $\mathbf{v} \neq \mathbf{0}$.

Example:

If $\mathbf{v} = \langle 3, 4 \rangle$, then

$$
\|\mathbf{v}\| = 5,\qquad
\hat{\mathbf{v}} = \left\langle \frac{3}{5}, \frac{4}{5} \right\rangle
$$

## Direction in 2D

If $\mathbf{v} = \langle x, y \rangle$, then the direction angle $\theta$ satisfies

$$
\tan \theta = \frac{y}{x}
$$

with the correct quadrant chosen from the signs of $x$ and $y$.

---

# Basic vector operations

## Addition and subtraction

For $\mathbf{u} = \langle u_1, u_2, \dots \rangle$ and $\mathbf{v} = \langle v_1, v_2, \dots \rangle$:

$$
\mathbf{u} + \mathbf{v} = \langle u_1 + v_1,\ u_2 + v_2,\ \dots \rangle
$$

$$
\mathbf{u} - \mathbf{v} = \langle u_1 - v_1,\ u_2 - v_2,\ \dots \rangle
$$

Geometrically, addition follows the **tip-to-tail** or **parallelogram** rule.

## Scalar multiplication

For scalar $c$:

$$
c\mathbf{v} = \langle cv_1, cv_2, \dots, cv_n \rangle
$$

Effects:

- If $|c| > 1$, the vector stretches
- If $0 < |c| < 1$, the vector shrinks
- If $c < 0$, the direction reverses

## Zero vector

The zero vector is

$$
\mathbf{0} = \langle 0, 0, \dots, 0 \rangle
$$

It has zero magnitude and no direction.

Geometrically, the zero vector represents **no displacement**: the starting
point and ending point are the same. It is not an arrow pointing in a special
direction; its length is zero, so there is no orientation to measure. For
example, if a particle moves from $A$ to $B$ and then returns to $A$, its net
displacement is $\mathbf{0}$.

The zero vector is the additive identity because adding it changes nothing:

$$
\mathbf{v} + \mathbf{0} = \mathbf{v}
$$

It is also the result when a vector is subtracted from itself:

$$
\mathbf{v} - \mathbf{v} = \mathbf{0}
$$

Two details are especially important:

- The zero vector is perpendicular to every vector in the algebraic sense that
  $\mathbf{0} \cdot \mathbf{v} = 0$, but the usual angle formula does not give
  it an angle because it requires division by $\lVert\mathbf{0}\rVert$.
- It cannot be normalized. The expression
  $\mathbf{0}/\lVert\mathbf{0}\rVert$ divides by zero, so the zero vector has
  no associated unit vector.
---

# Dot product

The **dot product** of two vectors in $\mathbb{R}^n$ is

$$
\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \cdots + u_nv_n
$$

In 2D:

$$
\langle a, b \rangle \cdot \langle c, d \rangle = ac + bd
$$

In 3D:

$$
\langle a, b, c \rangle \cdot \langle d, e, f \rangle = ad + be + cf
$$

## Angle between vectors

The dot product also satisfies

$$
\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \, \|\mathbf{v}\| \cos \theta
$$

where $\theta$ is the angle between the vectors.

So

$$
\cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \, \|\mathbf{v}\|}
$$

This is often the fastest way to find an angle.

## Orthogonality

Two nonzero vectors are **orthogonal** if their dot product is zero:

$$
\mathbf{u} \cdot \mathbf{v} = 0
$$

This means the vectors are perpendicular.

## Projection idea from the dot product

The scalar component of $\mathbf{v}$ along $\mathbf{u}$ is

$$
\operatorname{comp}_{\mathbf{u}} \mathbf{v}
= \frac{\mathbf{v} \cdot \mathbf{u}}{\|\mathbf{u}\|}
$$

The vector projection is covered in the next section.

---

# Cross product

The **cross product** is defined for vectors in $\mathbb{R}^3$.

For

$$
\mathbf{u} = \langle u_1, u_2, u_3 \rangle,\qquad
\mathbf{v} = \langle v_1, v_2, v_3 \rangle
$$

the cross product is

$$
\mathbf{u} \times \mathbf{v}
=
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
u_1 & u_2 & u_3 \\
v_1 & v_2 & v_3
\end{vmatrix}
$$

which expands to

$$
\mathbf{u} \times \mathbf{v}
= \langle u_2v_3 - u_3v_2,\ u_3v_1 - u_1v_3,\ u_1v_2 - u_2v_1 \rangle
$$

## Geometric meaning

- $\mathbf{u} \times \mathbf{v}$ is perpendicular to both $\mathbf{u}$ and $\mathbf{v}$
- Its magnitude is

$$
\|\mathbf{u} \times \mathbf{v}\| = \|\mathbf{u}\| \, \|\mathbf{v}\| \sin \theta
$$

- It gives the area of the parallelogram spanned by the two vectors

So the triangle area is

$$
\frac{1}{2}\|\mathbf{u} \times \mathbf{v}\|
$$

## Orientation

The cross product is not commutative:

$$
\mathbf{u} \times \mathbf{v} = -(\mathbf{v} \times \mathbf{u})
$$

Use the right-hand rule to determine direction.

---

# Vector projections

The projection of $\mathbf{v}$ onto $\mathbf{u}$ is the component of $\mathbf{v}$ that points along $\mathbf{u}$.

## Scalar projection

$$
\operatorname{comp}_{\mathbf{u}} \mathbf{v}
= \frac{\mathbf{v} \cdot \mathbf{u}}{\|\mathbf{u}\|}
$$

## Vector projection

$$
\operatorname{proj}_{\mathbf{u}} \mathbf{v}
= \frac{\mathbf{v} \cdot \mathbf{u}}{\mathbf{u} \cdot \mathbf{u}} \mathbf{u}
$$

This formula is useful in decomposition problems and least-squares geometry.

## Orthogonal decomposition

Any vector can be split into parallel and perpendicular parts relative to $\mathbf{u}$:

$$
\mathbf{v} = \operatorname{proj}_{\mathbf{u}} \mathbf{v} + \mathbf{v}_\perp
$$

where

$$
\mathbf{v}_\perp = \mathbf{v} - \operatorname{proj}_{\mathbf{u}} \mathbf{v}
$$

and $\mathbf{v}_\perp \cdot \mathbf{u} = 0$.

---

# Lines and planes

Vectors provide compact equations for geometric objects.

## Line in 2D or 3D

A line through point $\mathbf{r}_0$ with direction vector $\mathbf{d}$ has vector equation

$$
\mathbf{r}(t) = \mathbf{r}_0 + t\mathbf{d}
$$

where $t$ is a parameter.

In components:

$$
x = x_0 + at,\qquad y = y_0 + bt,\qquad z = z_0 + ct
$$

if $\mathbf{d} = \langle a, b, c \rangle$.

## Plane in 3D

A plane through point $\mathbf{r}_0$ with normal vector $\mathbf{n}$ satisfies

$$
\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0
$$

If $\mathbf{n} = \langle A, B, C \rangle$ and $\mathbf{r}_0 = (x_0, y_0, z_0)$, then

$$
A(x - x_0) + B(y - y_0) + C(z - z_0) = 0
$$

This is the standard point-normal form of a plane.

## Distance from a point to a plane

For plane

$$
Ax + By + Cz + D = 0
$$

and point $(x_0, y_0, z_0)$, the distance is

$$
\frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}
$$

---

# Common workflows

## Find the vector from one point to another

1. Identify the initial point $A$ and terminal point $B$
2. Subtract coordinates: $B - A$
3. Simplify the components

Example:

If $A = (1, -3)$ and $B = (5, 2)$, then

$$
\overrightarrow{AB} = \langle 4, 5 \rangle
$$

## Find an angle between vectors

1. Compute $\mathbf{u} \cdot \mathbf{v}$
2. Compute $\|\mathbf{u}\|$ and $\|\mathbf{v}\|$
3. Use

$$
\cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \, \|\mathbf{v}\|}
$$

4. Apply inverse cosine

## Test perpendicularity or parallelism

- Perpendicular: $\mathbf{u} \cdot \mathbf{v} = 0$
- Parallel: one vector is a scalar multiple of the other

## Build a line or plane

- Line: point plus direction vector
- Plane: point plus normal vector

If the problem gives a geometric picture, convert it to vectors first. The algebra is usually simpler afterward.

---

# Formula summary

## Core formulas

$$
\mathbf{u} + \mathbf{v} = \langle u_1 + v_1, \dots, u_n + v_n \rangle
$$

$$
c\mathbf{v} = \langle cv_1, \dots, cv_n \rangle
$$

$$
\|\mathbf{v}\| = \sqrt{v_1^2 + \cdots + v_n^2}
$$

$$
\mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^n u_i v_i
$$

$$
\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \, \|\mathbf{v}\| \cos \theta
$$

$$
\mathbf{u} \times \mathbf{v}
= \langle u_2v_3 - u_3v_2,\ u_3v_1 - u_1v_3,\ u_1v_2 - u_2v_1 \rangle
$$

$$
\operatorname{proj}_{\mathbf{u}} \mathbf{v}
= \frac{\mathbf{v} \cdot \mathbf{u}}{\mathbf{u} \cdot \mathbf{u}} \mathbf{u}
$$

$$
\mathbf{r}(t) = \mathbf{r}_0 + t\mathbf{d}
$$

$$
\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0
$$

---

# Pitfalls

## Sign mistakes in components

When subtracting coordinates, always use

$$
\overrightarrow{AB} = B - A
$$

not the other way around unless the direction is intentionally reversed.

## Confusing dot product with multiplication

The dot product produces a scalar, not a vector.

## Confusing dot and cross products

- Dot product measures alignment and angle
- Cross product measures perpendicularity and area in 3D

## Forgetting absolute value in distance formulas

Distance is always nonnegative. Use absolute value when needed.

## Using the wrong dimension

- Dot product works in any dimension
- Cross product, in the standard form, is a 3D operation

## Losing the direction of a vector

A vector is not just its length. Reversing a vector changes its direction even if the magnitude stays the same.

---

## Final checks

Before moving on in a vector problem, verify:

- The components point the correct way
- The dimensions match the operation
- Units are consistent if the vectors are physical quantities
- The final answer has the right geometric meaning

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
