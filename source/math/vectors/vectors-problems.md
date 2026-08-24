<!--
id: vectors-11
note: math-vectors
title: "Find a Position Vector"
exam: exam-i
skills: [Position Vectors]
-->

If $P = (4, -1, 3)$, what is the position vector of $P$?

:::solution
The position vector of a point is the vector from the origin to that point.

So the position vector of $P$ is

$$
\langle 4, -1, 3 \rangle
$$
:::

<!--
id: vectors-12
note: math-vectors
title: "Convert to Component Form"
exam: exam-i
skills: [Notation, Component Form]
-->

Write $6\mathbf{i} - 2\mathbf{j} + 5\mathbf{k}$ in component form.

:::solution
Use the standard basis vectors:

$$
\mathbf{i} = \langle 1, 0, 0 \rangle,\quad
\mathbf{j} = \langle 0, 1, 0 \rangle,\quad
\mathbf{k} = \langle 0, 0, 1 \rangle
$$

So

$$
6\mathbf{i} - 2\mathbf{j} + 5\mathbf{k}
= \langle 6, -2, 5 \rangle
$$
:::

<!--
id: vectors-13
note: math-vectors
title: "Find a Vector from Two Points"
exam: exam-i
skills: [Two Points, Component Form]
-->

Find $\overrightarrow{AB}$ where $A = (-1, 3)$ and $B = (5, -2)$.

:::solution
Subtract the coordinates in the order $B - A$:

$$
\overrightarrow{AB} = \langle 5 - (-1),\ -2 - 3 \rangle
$$

$$
\overrightarrow{AB} = \langle 6, -5 \rangle
$$
:::

<!--
id: vectors-14
note: math-vectors
title: "Find a Magnitude"
exam: exam-i
skills: [Magnitude]
-->

Find the magnitude of $\langle 9, 12 \rangle$.

:::solution
Use the magnitude formula:

$$
\|\mathbf{v}\| = \sqrt{x^2 + y^2}
$$

So

$$
\|\langle 9, 12 \rangle\| = \sqrt{9^2 + 12^2}
$$

$$
= \sqrt{81 + 144} = \sqrt{225} = 15
$$
:::

<!--
id: vectors-15
note: math-vectors
title: "Find a Unit Vector"
exam: exam-i
skills: [Unit Vectors, Magnitude]
-->

Find the unit vector in the direction of $\langle 5, 12 \rangle$.

:::solution
First find the magnitude:

$$
\|\langle 5, 12 \rangle\| = \sqrt{5^2 + 12^2} = \sqrt{169} = 13
$$

Then divide the vector by its magnitude:

$$
\hat{\mathbf{v}} = \frac{\langle 5, 12 \rangle}{13}
= \left\langle \frac{5}{13}, \frac{12}{13} \right\rangle
$$
:::

<!--
id: vectors-16
note: math-vectors
title: "Add Two Vectors"
exam: exam-i
skills: [Vector Addition]
-->

Compute the sum:

$$
\langle 2, -7 \rangle + \langle -5, 4 \rangle
$$

:::solution
Add corresponding components:

$$
\langle 2 + (-5),\ -7 + 4 \rangle = \langle -3, -3 \rangle
$$
:::

<!--
id: vectors-17
note: math-vectors
title: "Subtract Two Vectors"
exam: exam-i
skills: [Vector Subtraction]
-->

Compute the difference:

$$
\langle 6, 1, -2 \rangle - \langle 3, -4, 5 \rangle
$$

:::solution
Subtract corresponding components:

$$
\langle 6 - 3,\ 1 - (-4),\ -2 - 5 \rangle
= \langle 3, 5, -7 \rangle
$$
:::

<!--
id: vectors-18
note: math-vectors
title: "Multiply by a Scalar"
exam: exam-i
skills: [Scalar Multiplication]
-->

Compute

$$
-3 \langle 4, -2, 1 \rangle
$$

:::solution
Multiply each component by $-3$:

$$
-3 \langle 4, -2, 1 \rangle
= \langle -12, 6, -3 \rangle
$$
:::

<!--
id: vectors-19
note: math-vectors
title: "Compute a Dot Product"
exam: exam-i
skills: [Dot Product]
-->

Find the dot product:

$$
\langle 2, -1, 3 \rangle \cdot \langle 4, 5, -2 \rangle
$$

:::solution
Multiply matching components and add:

$$
2(4) + (-1)(5) + 3(-2)
$$

$$
= 8 - 5 - 6 = -3
$$
:::

<!--
id: vectors-110
note: math-vectors
title: "Compute a Cross Product"
exam: exam-i
skills: [Cross Product]
-->

Find

$$
\langle 1, 2, 3 \rangle \times \langle 4, 0, -1 \rangle
$$

:::solution
Use the component formula:

$$
\mathbf{u} \times \mathbf{v}
= \langle u_2v_3 - u_3v_2,\ u_3v_1 - u_1v_3,\ u_1v_2 - u_2v_1 \rangle
$$

So

$$
\langle 1, 2, 3 \rangle \times \langle 4, 0, -1 \rangle
= \langle 2(-1) - 3(0),\ 3(4) - 1(-1),\ 1(0) - 2(4) \rangle
$$

$$
= \langle -2, 13, -8 \rangle
$$
:::

<!--
id: vectors-21
note: math-vectors
title: "Find a Direction Angle"
exam: exam-ii
skills: [Direction Angle, Trigonometry]
-->

Find the direction angle of $\langle 1, \sqrt{3} \rangle$.

:::solution
Use

$$
\tan \theta = \frac{y}{x}
$$

Here,

$$
\tan \theta = \frac{\sqrt{3}}{1} = \sqrt{3}
$$

Since the vector is in the first quadrant, the angle is

$$
\theta = 60^\circ
$$
:::

<!--
id: vectors-22
note: math-vectors
title: "Find a Vector and Its Length"
exam: exam-ii
skills: [Two Points, Magnitude]
-->

A vector goes from $A = (2, -1, 5)$ to $B = (7, 3, 2)$.

Find $\overrightarrow{AB}$ and its magnitude.

:::solution
Subtract the coordinates:

$$
\overrightarrow{AB} = \langle 7 - 2,\ 3 - (-1),\ 2 - 5 \rangle
= \langle 5, 4, -3 \rangle
$$

Now find the magnitude:

$$
\|\overrightarrow{AB}\| = \sqrt{5^2 + 4^2 + (-3)^2}
$$

$$
= \sqrt{25 + 16 + 9} = \sqrt{50} = 5\sqrt{2}
$$
:::

<!--
id: vectors-23
note: math-vectors
title: "Find the Angle Between Two Vectors"
exam: exam-ii
skills: [Dot Product, Angle Between Vectors]
-->

Find the angle between

$$
\mathbf{u} = \langle 1, 2 \rangle
\quad \text{and} \quad
\mathbf{v} = \langle 2, 1 \rangle.
$$

:::solution
Use the dot product formula:

$$
\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \, \|\mathbf{v}\| \cos \theta
$$

First compute the dot product:

$$
\mathbf{u} \cdot \mathbf{v} = 1(2) + 2(1) = 4
$$

Then the magnitudes:

$$
\|\mathbf{u}\| = \sqrt{1^2 + 2^2} = \sqrt{5},\qquad
\|\mathbf{v}\| = \sqrt{2^2 + 1^2} = \sqrt{5}
$$

So

$$
\cos \theta = \frac{4}{\sqrt{5}\sqrt{5}} = \frac{4}{5}
$$

Therefore,

$$
\theta = \cos^{-1}\!\left(\frac{4}{5}\right)
$$
:::

<!--
id: vectors-24
note: math-vectors
title: "Project One Vector Onto Another"
exam: exam-ii
skills: [Projection, Dot Product]
-->

Find the vector projection of $\mathbf{v} = \langle 4, 3 \rangle$ onto $\mathbf{u} = \langle 3, 4 \rangle$.

:::solution
Use

$$
\operatorname{proj}_{\mathbf{u}} \mathbf{v}
= \frac{\mathbf{v} \cdot \mathbf{u}}{\mathbf{u} \cdot \mathbf{u}} \mathbf{u}
$$

Compute the dot products:

$$
\mathbf{v} \cdot \mathbf{u} = 4(3) + 3(4) = 24
$$

$$
\mathbf{u} \cdot \mathbf{u} = 3^2 + 4^2 = 25
$$

So

$$
\operatorname{proj}_{\mathbf{u}} \mathbf{v}
= \frac{24}{25}\langle 3, 4 \rangle
= \left\langle \frac{72}{25}, \frac{96}{25} \right\rangle
$$
:::

<!--
id: vectors-25
note: math-vectors
title: "Split a Vector into Parallel and Perpendicular Parts"
exam: exam-ii
skills: [Projection, Orthogonal Decomposition]
-->

Let

$$
\mathbf{u} = \langle 1, 2 \rangle
\quad \text{and} \quad
\mathbf{v} = \langle 4, 1 \rangle.
$$

Find $\operatorname{proj}_{\mathbf{u}} \mathbf{v}$ and $\mathbf{v}_\perp$.

:::solution
First compute the projection:

$$
\mathbf{v} \cdot \mathbf{u} = 4(1) + 1(2) = 6
$$

$$
\mathbf{u} \cdot \mathbf{u} = 1^2 + 2^2 = 5
$$

So

$$
\operatorname{proj}_{\mathbf{u}} \mathbf{v}
= \frac{6}{5}\langle 1, 2 \rangle
= \left\langle \frac{6}{5}, \frac{12}{5} \right\rangle
$$

Now subtract to get the perpendicular part:

$$
\mathbf{v}_\perp
= \mathbf{v} - \operatorname{proj}_{\mathbf{u}} \mathbf{v}
$$

$$
= \left\langle 4, 1 \right\rangle
- \left\langle \frac{6}{5}, \frac{12}{5} \right\rangle
= \left\langle \frac{14}{5}, -\frac{7}{5} \right\rangle
$$
:::

<!--
id: vectors-26
note: math-vectors
title: "Find the Area of a Parallelogram"
exam: exam-ii
skills: [Cross Product, Area]
-->

Find the area of the parallelogram spanned by

$$
\mathbf{u} = \langle 2, 1, 1 \rangle
\quad \text{and} \quad
\mathbf{v} = \langle 1, 3, 2 \rangle.
$$

:::solution
The area of the parallelogram is

$$
\|\mathbf{u} \times \mathbf{v}\|
$$

Compute the cross product:

$$
\mathbf{u} \times \mathbf{v}
= \langle 1(2) - 1(3),\ 1(1) - 2(2),\ 2(3) - 1(1) \rangle
$$

$$
= \langle -1, -3, 5 \rangle
$$

Now find its magnitude:

$$
\sqrt{(-1)^2 + (-3)^2 + 5^2}
= \sqrt{1 + 9 + 25}
= \sqrt{35}
$$

So the area is

$$
\sqrt{35}
$$
:::

<!--
id: vectors-27
note: math-vectors
title: "Write an Equation of a Plane"
exam: exam-ii
skills: [Planes, Normal Vector]
-->

Find the equation of the plane through $(1, 4, -2)$ with normal vector $\langle 2, -1, 3 \rangle$.

:::solution
Use point-normal form:

$$
\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0
$$

So

$$
2(x - 1) - (y - 4) + 3(z + 2) = 0
$$

Expand and simplify:

$$
2x - 2 - y + 4 + 3z + 6 = 0
$$

$$
2x - y + 3z + 8 = 0
$$
:::

<!--
id: vectors-28
note: math-vectors
title: "Find the Distance from a Point to a Plane"
exam: exam-ii
skills: [Planes, Distance Formula]
-->

Find the distance from the point $(2, 1, 0)$ to the plane

$$
x + 2y + 2z - 9 = 0.
$$

:::solution
Use the distance formula:

$$
\frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}
$$

Here, $A = 1$, $B = 2$, $C = 2$, and $D = -9$.

Substitute the point $(2, 1, 0)$:

$$
\frac{|1(2) + 2(1) + 2(0) - 9|}{\sqrt{1^2 + 2^2 + 2^2}}
$$

$$
= \frac{|2 + 2 - 9|}{\sqrt{9}}
= \frac{5}{3}
$$
:::

<!--
id: vectors-31
note: math-vectors
title: "Model a Displacement"
exam: final
skills: [Displacement, Magnitude]
-->

A drone flies $3$ km east, $4$ km north, and $12$ km upward.

What is its displacement vector, and how far is it from the starting point?

:::solution
The displacement vector is

$$
\langle 3, 4, 12 \rangle
$$

Now find its magnitude:

$$
\|\langle 3, 4, 12 \rangle\|
= \sqrt{3^2 + 4^2 + 12^2}
$$

$$
= \sqrt{9 + 16 + 144} = \sqrt{169} = 13
$$

So the drone is $13$ km from the starting point.
:::

<!--
id: vectors-32
note: math-vectors
title: "Write a Line Through Two Points"
exam: final
skills: [Lines, Two Points]
-->

Write a vector equation of the line through $A = (1, 2, -1)$ and $B = (5, 0, 3)$.

:::solution
First find a direction vector:

$$
\overrightarrow{AB} = \langle 5 - 1,\ 0 - 2,\ 3 - (-1) \rangle
= \langle 4, -2, 4 \rangle
$$

A simpler direction vector is $\langle 2, -1, 2 \rangle$.

So a vector equation is

$$
\mathbf{r}(t) = \langle 1, 2, -1 \rangle + t\langle 2, -1, 2 \rangle
$$

In component form,

$$
x = 1 + 2t,\qquad y = 2 - t,\qquad z = -1 + 2t
$$
:::

<!--
id: vectors-33
note: math-vectors
title: "Find a Plane Through Three Points"
exam: final
skills: [Planes, Cross Product, Two Points]
-->

Find the equation of the plane through

$$
A = (1, 0, 0),\quad B = (0, 2, 0),\quad C = (0, 0, 3).
$$

:::solution
Form two direction vectors in the plane:

$$
\overrightarrow{AB} = \langle -1, 2, 0 \rangle,\qquad
\overrightarrow{AC} = \langle -1, 0, 3 \rangle
$$

Their cross product gives a normal vector:

$$
\overrightarrow{AB} \times \overrightarrow{AC}
= \langle 6, 3, 2 \rangle
$$

Now use point-normal form with point $A = (1, 0, 0)$:

$$
6(x - 1) + 3(y - 0) + 2(z - 0) = 0
$$

$$
6x + 3y + 2z - 6 = 0
$$
:::

<!--
id: vectors-34
note: math-vectors
title: "Find the Area of a Triangle from Coordinates"
exam: final
skills: [Cross Product, Area, Two Points]
-->

Find the area of the triangle with vertices

$$
A = (0, 0, 0),\quad B = (2, 1, 0),\quad C = (1, 3, 0).
$$

:::solution
Use two side vectors from $A$:

$$
\overrightarrow{AB} = \langle 2, 1, 0 \rangle,\qquad
\overrightarrow{AC} = \langle 1, 3, 0 \rangle
$$

Compute the cross product:

$$
\overrightarrow{AB} \times \overrightarrow{AC}
= \langle 0, 0, 5 \rangle
$$

The parallelogram area is

$$
\|\langle 0, 0, 5 \rangle\| = 5
$$

The triangle area is half of that:

$$
\frac{1}{2}\cdot 5 = \frac{5}{2}
$$
:::

<!--
id: vectors-35
note: math-vectors
title: "Decide the Relationship Between a Line and a Plane"
exam: final
skills: [Lines, Planes, Dot Product]
-->

Consider the line

$$
\mathbf{r}(t) = \langle 1, 0, 2 \rangle + t\langle 2, -1, 1 \rangle
$$

and the plane

$$
2x + y - 3z = 7.
$$

Are the line and plane parallel, perpendicular, or neither?

:::solution
The direction vector of the line is

$$
\mathbf{d} = \langle 2, -1, 1 \rangle
$$

and the normal vector of the plane is

$$
\mathbf{n} = \langle 2, 1, -3 \rangle
$$

Check the dot product:

$$
\mathbf{d} \cdot \mathbf{n}
= 2(2) + (-1)(1) + 1(-3)
= 4 - 1 - 3 = 0
$$

Since the direction vector is orthogonal to the plane's normal vector, the line is parallel to the plane.
:::

<!--
id: vectors-41
note: math-vectors
title: "Find the Intersection of a Line and a Plane"
exam: final
skills: [Lines, Planes, Substitution]
-->

Find the point where the line

$$
\mathbf{r}(t) = \langle 1, 2, 3 \rangle + t\langle 2, -1, 1 \rangle
$$

intersects the plane

$$
x + 2y - z = 4.
$$

:::solution
Write the line in component form:

$$
x = 1 + 2t,\qquad y = 2 - t,\qquad z = 3 + t
$$

Substitute into the plane equation:

$$
(1 + 2t) + 2(2 - t) - (3 + t) = 4
$$

Simplify:

$$
1 + 2t + 4 - 2t - 3 - t = 4
$$

$$
2 - t = 4
$$

$$
t = -2
$$

Now substitute back into the line:

$$
x = 1 + 2(-2) = -3,\quad y = 2 - (-2) = 4,\quad z = 3 + (-2) = 1
$$

So the intersection point is

$$
(-3, 4, 1)
$$
:::

<!--
id: vectors-42
note: math-vectors
title: "Find the Closest Point on a Line"
exam: final
skills: [Projection, Lines, Orthogonal Decomposition]
-->

Let the line be

$$
\mathbf{r}(t) = \langle 1, 0, 0 \rangle + t\langle 2, 1, 0 \rangle
$$

and let $Q = (4, 2, 0)$ be a point in the plane.

Find the point on the line that is closest to $Q$.

:::solution
Let $P_0 = (1, 0, 0)$ and $\mathbf{d} = \langle 2, 1, 0 \rangle$.

The closest point occurs where the vector from the line to $Q$ is perpendicular to the direction vector, so we use projection.

First compute

$$
Q - P_0 = \langle 3, 2, 0 \rangle
$$

The parameter is

$$
t = \frac{(Q - P_0)\cdot \mathbf{d}}{\mathbf{d}\cdot \mathbf{d}}
= \frac{3(2) + 2(1)}{2^2 + 1^2}
= \frac{8}{5}
$$

Now find the point:

$$
P = P_0 + t\mathbf{d}
= \langle 1, 0, 0 \rangle + \frac{8}{5}\langle 2, 1, 0 \rangle
$$

$$
= \left\langle \frac{21}{5}, \frac{8}{5}, 0 \right\rangle
$$
:::

<!--
id: vectors-43
note: math-vectors
title: "Decompose a Vector and Measure the Perpendicular Part"
exam: final
skills: [Projection, Orthogonal Decomposition, Magnitude]
-->

Let

$$
\mathbf{u} = \langle 2, 1, 2 \rangle
\quad \text{and} \quad
\mathbf{v} = \langle 4, 1, 0 \rangle.
$$

Find the part of $\mathbf{v}$ parallel to $\mathbf{u}$ and the magnitude of the perpendicular part.

:::solution
First compute the projection:

$$
\mathbf{v} \cdot \mathbf{u} = 4(2) + 1(1) + 0(2) = 9
$$

$$
\mathbf{u} \cdot \mathbf{u} = 2^2 + 1^2 + 2^2 = 9
$$

So

$$
\operatorname{proj}_{\mathbf{u}} \mathbf{v}
= \frac{9}{9}\mathbf{u}
= \langle 2, 1, 2 \rangle
$$

Now find the perpendicular part:

$$
\mathbf{v}_\perp = \mathbf{v} - \operatorname{proj}_{\mathbf{u}} \mathbf{v}
= \langle 4, 1, 0 \rangle - \langle 2, 1, 2 \rangle
= \langle 2, 0, -2 \rangle
$$

Its magnitude is

$$
\|\mathbf{v}_\perp\| = \sqrt{2^2 + 0^2 + (-2)^2} = \sqrt{8} = 2\sqrt{2}
$$
:::

<!--
id: vectors-44
note: math-vectors
title: "Use Dot and Cross Products Together"
exam: final
skills: [Dot Product, Cross Product, Angle Between Vectors]
-->

Two nonzero vectors satisfy

$$
\|\mathbf{u}\| = 5,\qquad \|\mathbf{v}\| = 12,\qquad \mathbf{u}\cdot \mathbf{v} = 30.
$$

Find the angle between the vectors and the magnitude of $\mathbf{u} \times \mathbf{v}$.

:::solution
Use the dot product formula:

$$
\mathbf{u}\cdot \mathbf{v} = \|\mathbf{u}\|\,\|\mathbf{v}\|\cos\theta
$$

So

$$
30 = 5(12)\cos\theta
$$

$$
\cos\theta = \frac{30}{60} = \frac{1}{2}
$$

Therefore,

$$
\theta = 60^\circ
$$

Now use the cross product magnitude formula:

$$
\|\mathbf{u}\times\mathbf{v}\| = \|\mathbf{u}\|\,\|\mathbf{v}\|\sin\theta
$$

Since $\sin 60^\circ = \frac{\sqrt{3}}{2}$,

$$
\|\mathbf{u}\times\mathbf{v}\|
= 5(12)\cdot \frac{\sqrt{3}}{2}
= 30\sqrt{3}
$$
:::
