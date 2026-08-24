<!--
id: statics-11
note: engineering-statics
title: "State the Plane Equilibrium Equations"
exam: exam-i
skills: [Equilibrium Equations]
-->

Write the three independent equilibrium equations for a rigid body in a plane.

:::solution
For a 2D rigid body, the three equilibrium equations are

$$
\sum F_x = 0, \qquad \sum F_y = 0, \qquad \sum M_O = 0
$$

The moment may be taken about any convenient point $O$.
:::

<!--
id: statics-12
note: engineering-statics
title: "Identify a Particle Model"
exam: exam-i
skills: [Modeling Assumptions]
-->

A body is modeled as having mass but no size, so only translation matters. What idealization is this?

:::solution
This is the **particle idealization**.

A particle has mass but no dimensions, so rotation is ignored and only force balance matters.
:::

<!--
id: statics-13
note: engineering-statics
title: "Compute a Force Moment"
exam: exam-i
skills: [Moments]
-->

A 40 N force acts perpendicular to a wrench 0.6 m from point $O$. Find the moment magnitude about $O$.

:::solution
Use the perpendicular-distance formula:

$$
M_O = Fd = 40(0.6) = 24
$$

So the moment magnitude is

$$
24\ \text{N} \cdot \text{m}
$$
:::

<!--
id: statics-14
note: engineering-statics
title: "Compute a Couple Moment"
exam: exam-i
skills: [Couples, Moments]
-->

Two equal and opposite 25 N forces are separated by 0.30 m. Find the couple moment magnitude.

:::solution
For a couple,

$$
M = Fd
$$

So

$$
M = 25(0.30) = 7.5
$$

The couple moment magnitude is

$$
7.5\ \text{N} \cdot \text{m}
$$
:::

<!--
id: statics-15
note: engineering-statics
title: "Identify Pin Reactions"
exam: exam-i
skills: [Support Reactions]
-->

In 2D, what reaction components can a pin or hinge supply?

:::solution
A pin or hinge can supply **two force components**:

$$
R_x \quad \text{and} \quad R_y
$$

It does not supply a reaction moment.
:::

<!--
id: statics-16
note: engineering-statics
title: "Identify Roller Reactions"
exam: exam-i
skills: [Support Reactions]
-->

A roller sits on a smooth horizontal surface. What reaction does it supply?

:::solution
A roller on a smooth horizontal surface supplies **one vertical normal reaction**.

It allows horizontal motion and does not resist a moment.
:::

<!--
id: statics-17
note: engineering-statics
title: "Replace a Uniform Load"
exam: exam-i
skills: [Distributed Loads, Resultants]
-->

Replace a uniform load of 5 kN/m acting over 4 m with a single equivalent force. Give the magnitude and location.

:::solution
The resultant of a uniform load is

$$
R = wL = 5(4) = 20
$$

So the equivalent force is

$$
20\ \text{kN}
$$

It acts at the midpoint of the loaded region, so the line of action is 2 m from either end.
:::

<!--
id: statics-18
note: engineering-statics
title: "Replace a Triangular Load"
exam: exam-i
skills: [Distributed Loads, Resultants]
-->

Replace a triangular load that increases from 0 to 9 kN/m over 6 m with a single equivalent force. Give the magnitude and its location from the zero-load end.

:::solution
The resultant equals the area of the triangle:

$$
R = \frac{1}{2}(9)(6) = 27
$$

The centroid of a triangular load lies two-thirds of the way from the zero end, so the line of action is

$$
\frac{2}{3}(6) = 4\ \text{m}
$$

from the zero-load end.
:::

<!--
id: statics-19
note: engineering-statics
title: "Find Maximum Static Friction"
exam: exam-i
skills: [Friction]
-->

If $\mu_s = 0.35$ and $N = 400$ N, what is the maximum static friction?

:::solution
At impending motion,

$$
f_s^{\max} = \mu_s N
$$

So

$$
f_s^{\max} = 0.35(400) = 140
$$

The maximum static friction is

$$
140\ \text{N}
$$
:::

<!--
id: statics-110
note: engineering-statics
title: "Locate the Centroid of a Rectangle"
exam: exam-i
skills: [Centroids, Symmetry]
-->

A 8 cm by 10 cm rectangular plate is measured from a lower-left corner. Where is its centroid?

:::solution
For a rectangle, the centroid is at its geometric center.

So the coordinates are

$$
\bar{x} = \frac{8}{2} = 4, \qquad \bar{y} = \frac{10}{2} = 5
$$

The centroid is at

$$
(4,\ 5)\ \text{cm}
$$
:::

<!--
id: statics-21
note: engineering-statics
title: "Find Beam Reactions for a Center Load"
exam: exam-ii
skills: [Equilibrium Equations, Support Reactions]
-->

A 6 m simply supported beam carries a 12 kN point load at midspan. Find the support reactions at $A$ and $B$.

:::solution
Because the load is centered, the reactions are equal.

Using equilibrium:

$$
R_A + R_B = 12
$$

Taking moments about $A$:

$$
6R_B - 12(3) = 0
$$

$$
R_B = 6
$$

Then

$$
R_A = 12 - 6 = 6
$$

So the reactions are

$$
R_A = 6\ \text{kN}, \qquad R_B = 6\ \text{kN}
$$
:::

<!--
id: statics-22
note: engineering-statics
title: "Find Reactions Under a Uniform Load"
exam: exam-ii
skills: [Distributed Loads, Support Reactions]
-->

A 5 m simply supported beam carries a uniform load of 2 kN/m over its entire span. Find the support reactions.

:::solution
Replace the uniform load with a single resultant:

$$
R = 2(5) = 10\ \text{kN}
$$

The resultant acts at the midpoint of the beam, so the reactions are equal by symmetry:

$$
R_A = R_B = \frac{10}{2} = 5
$$

So

$$
R_A = 5\ \text{kN}, \qquad R_B = 5\ \text{kN}
$$
:::

<!--
id: statics-23
note: engineering-statics
title: "Use the Zero-Force Member Rule"
exam: exam-ii
skills: [Trusses, Zero-Force Members]
-->

At an unloaded truss joint, three members meet. Two are collinear. Which member carries zero force?

:::solution
The **third member**, the one that is **not collinear** with the other two, is a zero-force member.

This follows directly from joint equilibrium.
:::

<!--
id: statics-24
note: engineering-statics
title: "Solve a Two-Force Joint"
exam: exam-ii
skills: [Trusses, Method of Joints, Equilibrium Equations]
-->

At a truss joint, member $AB$ is horizontal to the left, and member $AC$ rises 3 m for every 4 m of horizontal run to the right. A 12 kN downward load acts at the joint. Find the force in each member, assuming member forces are tensile if they pull away from the joint.

:::solution
Let the member forces be positive in tension.

For member $AC$, the direction ratios are $4/5$ in $x$ and $3/5$ in $y$.

From vertical equilibrium:

$$
\frac{3}{5}F_{AC} - 12 = 0
$$

$$
F_{AC} = 20\ \text{kN}
$$

From horizontal equilibrium:

$$
-F_{AB} + \frac{4}{5}(20) = 0
$$

$$
F_{AB} = 16\ \text{kN}
$$

So both members are in tension:

$$
F_{AB} = 16\ \text{kN}, \qquad F_{AC} = 20\ \text{kN}
$$
:::

<!--
id: statics-25
note: engineering-statics
title: "Find the Friction Force at Impending Slip"
exam: exam-ii
skills: [Friction, Equilibrium Equations]
-->

A 200 N crate sits on a horizontal floor. A horizontal push of 40 N is applied. If $\mu_s = 0.25$, what friction force acts on the crate?

:::solution
First find the normal force. Since the push is horizontal,

$$
N = 200\ \text{N}
$$

The maximum static friction is

$$
f_s^{\max} = \mu_s N = 0.25(200) = 50\ \text{N}
$$

Because the applied push is only 40 N, the crate does not slip. Static friction matches the push:

$$
f_s = 40\ \text{N}
$$

It acts opposite the push.
:::

<!--
id: statics-26
note: engineering-statics
title: "Find Internal Forces at a Cut"
exam: exam-ii
skills: [Internal Loads, Free-Body Diagrams, Equilibrium Equations]
-->

A 4 m simply supported beam carries an 8 kN point load at midspan. Find the internal shear force and bending moment at a section 3 m from the left support, using the left segment.

:::solution
First find the support reactions. By symmetry,

$$
R_A = R_B = 4\ \text{kN}
$$

Now cut the beam at $x = 3$ m and isolate the left segment.

Using vertical equilibrium with positive shear upward on the cut face:

$$
4 - 8 + V = 0
$$

$$
V = 4\ \text{kN}
$$

Taking moments about the cut, with counterclockwise positive:

$$
-4(3) + 8(1) + M = 0
$$

$$
M = 4\ \text{kN} \cdot \text{m}
$$

So the internal resultants are

$$
V = 4\ \text{kN}, \qquad M = 4\ \text{kN} \cdot \text{m}
$$
:::

<!--
id: statics-27
note: engineering-statics
title: "Find the Centroid of a Composite Area"
exam: exam-ii
skills: [Centroids, Composite Areas]
-->

A 6 cm by 4 cm rectangle has a 2 cm by 2 cm square hole removed from its upper-right corner. Find the centroid of the remaining area relative to the lower-left corner.

:::solution
Treat the hole as negative area.

Big rectangle:

$$
A_1 = 24, \qquad (x_1, y_1) = (3, 2)
$$

Hole:

$$
A_2 = 4, \qquad (x_2, y_2) = (5, 3)
$$

Total area:

$$
A = 24 - 4 = 20
$$

Centroid coordinates:

$$
\bar{x} = \frac{24(3) - 4(5)}{20} = \frac{52}{20} = 2.6
$$

$$
\bar{y} = \frac{24(2) - 4(3)}{20} = \frac{36}{20} = 1.8
$$

So the centroid is

$$
(2.6,\ 1.8)\ \text{cm}
$$
:::

<!--
id: statics-28
note: engineering-statics
title: "Check Static Determinacy"
exam: exam-ii
skills: [Support Reactions, Statical Determinacy]
-->

A 2D beam is supported by a pin at $A$, a roller at $B$, and a cable at $C$. How many independent reaction unknowns are there, and is equilibrium alone enough to solve them?

:::solution
Count the unknown reactions:

- Pin at $A$: 2 components
- Roller at $B$: 1 component
- Cable at $C$: 1 tension

That gives a total of

$$
2 + 1 + 1 = 4
$$

In 2D, rigid-body equilibrium provides only 3 independent equations, so equilibrium alone is **not** enough.

Additional compatibility or geometry information would be needed.
:::

<!--
id: statics-31
note: engineering-statics
title: "Balance a Mixed Beam Load"
exam: final
skills: [Distributed Loads, Support Reactions, Equilibrium Equations]
-->

A 6 m simply supported beam carries a triangular load that increases from 0 at the left end to 6 kN/m at the right end, plus a 6 kN point load located 2 m from the left support. Find the support reactions.

:::solution
Replace the triangular load with an equivalent force:

$$
R_w = \frac{1}{2}(6)(6) = 18\ \text{kN}
$$

Its line of action is 4 m from the left end.

Now write equilibrium:

$$
R_A + R_B = 18 + 6 = 24
$$

Take moments about $A$:

$$
6R_B - 18(4) - 6(2) = 0
$$

$$
6R_B = 84
$$

$$
R_B = 14\ \text{kN}
$$

Then

$$
R_A = 24 - 14 = 10\ \text{kN}
$$

So the reactions are

$$
R_A = 10\ \text{kN}, \qquad R_B = 14\ \text{kN}
$$
:::

<!--
id: statics-32
note: engineering-statics
title: "Required Coefficient of Static Friction"
exam: final
skills: [Friction]
-->

A 600 N crate is pushed horizontally with 300 N just before it moves. What minimum coefficient of static friction is required?

:::solution
On a level floor, the normal force is

$$
N = 600\ \text{N}
$$

At impending motion,

$$
f_s^{\max} = \mu_s N
$$

Since the push is 300 N,

$$
300 = \mu_s(600)
$$

so

$$
\mu_s = 0.5
$$
:::

<!--
id: statics-33
note: engineering-statics
title: "Combine a Force and a Couple"
exam: final
skills: [Moments, Couples]
-->

A 10 kN downward force acts 2 m to the right of point $A$, and a 4 kN*m counterclockwise couple also acts on the body. What is the net moment about $A$? Take counterclockwise as positive.

:::solution
The force creates a clockwise moment about $A$:

$$
M_F = -10(2) = -20\ \text{kN} \cdot \text{m}
$$

The couple adds directly:

$$
M_C = +4\ \text{kN} \cdot \text{m}
$$

So the net moment is

$$
M_A = -20 + 4 = -16\ \text{kN} \cdot \text{m}
$$

That is a moment of

$$
16\ \text{kN} \cdot \text{m}
$$

clockwise.
:::

<!--
id: statics-34
note: engineering-statics
title: "Find the Center of Gravity of Discrete Masses"
exam: final
skills: [Centroids, Center of Gravity]
-->

Three masses lie on a line at $x = 0$ m, $x = 2$ m, and $x = 5$ m. Their masses are 2 kg, 3 kg, and 5 kg. Find $\bar{x}$.

:::solution
Use the center of gravity formula for discrete masses:

$$
\bar{x} = \frac{\sum m_i x_i}{\sum m_i}
$$

Substitute the values:

$$
\bar{x} = \frac{2(0) + 3(2) + 5(5)}{2 + 3 + 5}
$$

$$
\bar{x} = \frac{0 + 6 + 25}{10} = \frac{31}{10} = 3.1
$$

So

$$
\bar{x} = 3.1\ \text{m}
$$
:::

<!--
id: statics-35
note: engineering-statics
title: "Find Shear and Moment at a Section"
exam: final
skills: [Internal Loads, Equilibrium Equations]
-->

A 8 m simply supported beam carries a 12 kN point load 2 m from the left support. Find the internal shear force and bending moment at a section 3 m from the left support.

:::solution
First find the reactions.

Taking moments about the left support:

$$
8R_B - 12(2) = 0
$$

$$
R_B = 3\ \text{kN}
$$

Then

$$
R_A = 12 - 3 = 9\ \text{kN}
$$

Now cut the beam at $x = 3$ m and use the left segment.

Vertical equilibrium with positive shear upward on the cut face gives

$$
9 - 12 + V = 0
$$

$$
V = 3\ \text{kN}
$$

Take moments about the cut, with counterclockwise positive:

$$
-9(3) + 12(1) + M = 0
$$

$$
M = 15\ \text{kN} \cdot \text{m}
$$

So the internal resultants are

$$
V = 3\ \text{kN}, \qquad M = 15\ \text{kN} \cdot \text{m}
$$
:::

<!--
id: statics-41
note: engineering-statics
title: "Load a Beam with Multiple Actions"
exam: final
skills: [Distributed Loads, Support Reactions, Equilibrium Equations]
-->

A 8 m beam is supported by a pin at $A$ and a roller at $B$. It carries a 4 kN/m uniform load over the first 2 m from $A$, an 8 kN point load 5 m from $A$, and an 8 kN*m counterclockwise couple. Find the reactions at $A$ and $B$.

:::solution
Replace the uniform load with a single force:

$$
R_w = 4(2) = 8\ \text{kN}
$$

It acts 1 m from $A$.

Now apply equilibrium:

$$
R_A + R_B = 8 + 8 = 16
$$

Take moments about $A$, with counterclockwise positive:

$$
8R_B + 8 - 8(1) - 8(5) = 0
$$

$$
8R_B = 40
$$

$$
R_B = 5\ \text{kN}
$$

Then

$$
R_A = 16 - 5 = 11\ \text{kN}
$$

So the reactions are

$$
R_A = 11\ \text{kN}, \qquad R_B = 5\ \text{kN}
$$
:::

<!--
id: statics-42
note: engineering-statics
title: "Find the Centroid of an L-Section"
exam: final
skills: [Centroids, Composite Areas]
-->

An 8 cm by 8 cm square has a 4 cm by 4 cm square removed from its upper-right corner. Find the centroid of the remaining area relative to the lower-left corner.

:::solution
Use negative area for the removed square.

Large square:

$$
A_1 = 64, \qquad (x_1, y_1) = (4, 4)
$$

Removed square:

$$
A_2 = 16, \qquad (x_2, y_2) = (6, 6)
$$

Total area:

$$
A = 64 - 16 = 48
$$

Centroid coordinates:

$$
\bar{x} = \frac{64(4) - 16(6)}{48} = \frac{160}{48} = \frac{10}{3}
$$

$$
\bar{y} = \frac{64(4) - 16(6)}{48} = \frac{10}{3}
$$

So the centroid is

$$
\left(\frac{10}{3},\ \frac{10}{3}\right)\ \text{cm}
$$
:::

<!--
id: statics-43
note: engineering-statics
title: "Decide Whether Equilibrium Alone Is Enough"
exam: final
skills: [Statical Determinacy, Support Reactions]
-->

A rigid body in 2D is supported by a pin at $A$, a roller at $B$, and a cable at $C$. How many independent reaction unknowns are present, and can equilibrium alone determine them?

:::solution
Count the unknown reactions:

- Pin at $A$: 2
- Roller at $B$: 1
- Cable at $C$: 1

So there are

$$
2 + 1 + 1 = 4
$$

unknowns in total.

In 2D, a rigid body has only 3 independent equilibrium equations, so equilibrium alone is not enough to solve the problem.
:::

<!--
id: statics-44
note: engineering-statics
title: "Recover Internal Forces from a Cut Segment"
exam: final
skills: [Internal Loads, Free-Body Diagrams, Equilibrium Equations]
-->

A beam segment has a 10 kN upward force at the left end, a 6 kN downward force 1 m from the left end, and a 4 kN*m clockwise couple at 2 m from the left end. A cut is made 3 m from the left end. Using the common left-face convention, find $N$, $V$, and $M$ at the cut.

:::solution
There are no horizontal forces, so

$$
N = 0
$$

For vertical equilibrium, with positive shear upward on the cut face:

$$
10 - 6 + V = 0
$$

$$
V = -4\ \text{kN}
$$

Now take moments about the cut, with counterclockwise positive:

$$
-10(3) + 6(2) - 4 + M = 0
$$

$$
M = 22\ \text{kN} \cdot \text{m}
$$

So the internal resultants are

$$
N = 0, \qquad V = -4\ \text{kN}, \qquad M = 22\ \text{kN} \cdot \text{m}
$$
:::
