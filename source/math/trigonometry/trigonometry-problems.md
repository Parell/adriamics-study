<!--
id: trigonometry-11
note: math-trigonometry
title: "Convert 150 Degrees to Radians"
exam: exam-i
skills: [Angle Measure, Radians]
-->

Convert $150^\circ$ to radians.

:::solution
Use the degree-to-radian conversion rule:

$$
150^\circ \cdot \frac{\pi}{180^\circ} = \frac{150\pi}{180} = \frac{5\pi}{6}
$$
:::

<!--
id: trigonometry-12
note: math-trigonometry
title: "Convert 7 Pi Over 6 to Degrees"
exam: exam-i
skills: [Angle Measure, Radians]
-->

Convert $\frac{7\pi}{6}$ to degrees.

:::solution
Multiply by $\frac{180^\circ}{\pi}$:

$$
\frac{7\pi}{6} \cdot \frac{180^\circ}{\pi} = 7 \cdot 30^\circ = 210^\circ
$$
:::

<!--
id: trigonometry-13
note: math-trigonometry
title: "Read a Unit Circle Coordinate"
exam: exam-i
skills: [Unit Circle, Coordinates]
-->

On the unit circle, what point corresponds to the angle $\frac{\pi}{3}$?

:::solution
On the unit circle, a point at angle $\theta$ has coordinates

$$
(\cos \theta, \sin \theta)
$$

For $\theta = \frac{\pi}{3}$,

$$
\cos\left(\frac{\pi}{3}\right) = \frac{1}{2}, \quad \sin\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}
$$

So the point is

$$
\left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right).
$$
:::

<!--
id: trigonometry-14
note: math-trigonometry
title: "Evaluate Sine Using a Reference Angle"
exam: exam-i
skills: [Reference Angles, Quadrants]
-->

Evaluate $\sin\left(\frac{5\pi}{4}\right)$.

:::solution
The angle $\frac{5\pi}{4}$ is in Quadrant III, and its reference angle is $\frac{\pi}{4}$.

Since sine is negative in Quadrant III,

$$
\sin\left(\frac{5\pi}{4}\right) = -\sin\left(\frac{\pi}{4}\right) = -\frac{\sqrt{2}}{2}
$$
:::

<!--
id: trigonometry-15
note: math-trigonometry
title: "Find a Trig Ratio from a Right Triangle"
exam: exam-i
skills: [Right Triangle Ratios]
-->

A right triangle has opposite side $7$ and hypotenuse $25$ relative to angle $\theta$.

Find $\sin \theta$.

:::solution
Use the definition of sine:

$$
\sin \theta = \frac{\text{opposite}}{\text{hypotenuse}} = \frac{7}{25}
$$
:::

<!--
id: trigonometry-16
note: math-trigonometry
title: "Evaluate a Reciprocal Trig Function"
exam: exam-i
skills: [Reciprocal Identities]
-->

If $\cos \theta = \frac{1}{2}$, what is $\sec \theta$?

:::solution
Secant is the reciprocal of cosine:

$$
\sec \theta = \frac{1}{\cos \theta} = \frac{1}{1/2} = 2
$$
:::

<!--
id: trigonometry-17
note: math-trigonometry
title: "Evaluate a Special Angle Tangent"
exam: exam-i
skills: [Special Angles]
-->

Evaluate $\tan\left(\frac{\pi}{6}\right)$.

:::solution
From the $30^\circ$-$60^\circ$-$90^\circ$ triangle,

$$
\tan\left(\frac{\pi}{6}\right) = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}
$$
:::

<!--
id: trigonometry-18
note: math-trigonometry
title: "Use Periodicity to Simplify an Expression"
exam: exam-i
skills: [Periodicity]
-->

Simplify $\sin(x + 2\pi)$.

:::solution
Sine has period $2\pi$, so adding $2\pi$ does not change its value:

$$
\sin(x + 2\pi) = \sin x
$$
:::

<!--
id: trigonometry-19
note: math-trigonometry
title: "Identify Where Tangent Is Undefined"
exam: exam-i
skills: [Domain, Periodicity]
-->

For which values of $x$ is $\tan x$ undefined?

:::solution
Tangent is undefined when cosine is zero.

That happens at

$$
x = \frac{\pi}{2} + k\pi
$$

for any integer $k$.
:::

<!--
id: trigonometry-110
note: math-trigonometry
title: "Use the Pythagorean Identity to Find Cosine"
exam: exam-i
skills: [Pythagorean Identity, Quadrants]
-->

If $\sin x = \frac{3}{5}$ and $x$ is in Quadrant I, find $\cos x$.

:::solution
Use the Pythagorean identity:

$$
\sin^2 x + \cos^2 x = 1
$$

Substitute $\sin x = \frac{3}{5}$:

$$
\left(\frac{3}{5}\right)^2 + \cos^2 x = 1
$$

$$
\frac{9}{25} + \cos^2 x = 1
$$

$$
\cos^2 x = \frac{16}{25}
$$

Since $x$ is in Quadrant I, cosine is positive:

$$
\cos x = \frac{4}{5}
$$
:::

<!--
id: trigonometry-21
note: math-trigonometry
title: "Evaluate Cosine in Quadrant III"
exam: exam-ii
skills: [Reference Angles, Quadrants]
-->

Evaluate $\cos\left(\frac{7\pi}{6}\right)$.

:::solution
The angle $\frac{7\pi}{6}$ is in Quadrant III, with reference angle $\frac{\pi}{6}$.

Cosine is negative in Quadrant III, so

$$
\cos\left(\frac{7\pi}{6}\right) = -\cos\left(\frac{\pi}{6}\right) = -\frac{\sqrt{3}}{2}
$$
:::

<!--
id: trigonometry-22
note: math-trigonometry
title: "Find a Trig Ratio After Using the Triangle"
exam: exam-ii
skills: [Right Triangle Ratios, Special Triangles]
-->

A right triangle has legs $7$ and $24$.

If $\theta$ is opposite the $7$-unit leg, find $\sec \theta$.

:::solution
First find the hypotenuse:

$$
7^2 + 24^2 = 49 + 576 = 625
$$

So the hypotenuse is

$$
\sqrt{625} = 25
$$

Now use cosine:

$$
\cos \theta = \frac{24}{25}
$$

Therefore,

$$
\sec \theta = \frac{25}{24}
$$
:::

<!--
id: trigonometry-23
note: math-trigonometry
title: "Identify Amplitude, Period, and Midline"
exam: exam-ii
skills: [Graph Transformations, Period]
-->

For

$$
y = -3\sin(2x - \frac{\pi}{3}) + 4,
$$

find the amplitude, period, and midline.

:::solution
For $y = A\sin(Bx - C) + D$:

$$
\text{Amplitude} = |A| = 3
$$

$$
\text{Period} = \frac{2\pi}{|B|} = \frac{2\pi}{2} = \pi
$$

$$
\text{Midline} = y = D = 4
$$
:::

<!--
id: trigonometry-24
note: math-trigonometry
title: "Find a Phase Shift from Standard Form"
exam: exam-ii
skills: [Graph Transformations, Phase Shift]
-->

For

$$
y = 2\cos(3x + \pi) - 1,
$$

what is the phase shift?

:::solution
Rewrite the angle expression:

$$
3x + \pi = 3\left(x + \frac{\pi}{3}\right)
$$

So the graph is shifted left by $\frac{\pi}{3}$.

The phase shift is

$$
-\frac{\pi}{3}
$$

or, equivalently, $\frac{\pi}{3}$ to the left.
:::

<!--
id: trigonometry-25
note: math-trigonometry
title: "Evaluate an Exact Value with a Sum Identity"
exam: exam-ii
skills: [Sum Identities, Special Angles]
-->

Evaluate

$$
\sin\left(\frac{\pi}{4} + \frac{\pi}{6}\right).
$$

:::solution
Use the sum identity:

$$
\sin(a+b) = \sin a \cos b + \cos a \sin b
$$

So,

$$
\sin\left(\frac{\pi}{4} + \frac{\pi}{6}\right)
= \sin\left(\frac{\pi}{4}\right)\cos\left(\frac{\pi}{6}\right)
+ \cos\left(\frac{\pi}{4}\right)\sin\left(\frac{\pi}{6}\right)
$$

Substitute the exact values:

$$
= \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2}
+ \frac{\sqrt{2}}{2}\cdot\frac{1}{2}
$$

$$
= \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4}
= \frac{\sqrt{6}+\sqrt{2}}{4}
$$
:::

<!--
id: trigonometry-26
note: math-trigonometry
title: "Interpret an Inverse Trig Expression"
exam: exam-ii
skills: [Inverse Trig, Principal Range]
-->

Evaluate $\arcsin\left(\frac{\sqrt{3}}{2}\right)$.

:::solution
The principal range of $\arcsin$ is

$$
\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]
$$

The angle in that interval whose sine is $\frac{\sqrt{3}}{2}$ is

$$
\frac{\pi}{3}
$$
:::

<!--
id: trigonometry-27
note: math-trigonometry
title: "Solve a Sine Equation on an Interval"
exam: exam-ii
skills: [Trig Equations, Periodicity]
-->

Solve for $x$ on $[0, 2\pi)$:

$$
2\sin x - 1 = 0
$$

:::solution
First isolate sine:

$$
2\sin x = 1
$$

$$
\sin x = \frac{1}{2}
$$

On $[0, 2\pi)$, sine equals $\frac{1}{2}$ at

$$
x = \frac{\pi}{6} \quad \text{and} \quad x = \frac{5\pi}{6}
$$
:::

<!--
id: trigonometry-28
note: math-trigonometry
title: "Solve a Tangent Equation"
exam: exam-ii
skills: [Trig Equations, Periodicity]
-->

Solve for all real $x$:

$$
\tan x = -1
$$

:::solution
One solution is

$$
x = -\frac{\pi}{4}
$$

Because tangent has period $\pi$, the full solution set is

$$
x = -\frac{\pi}{4} + k\pi
$$

for any integer $k$.
:::

<!--
id: trigonometry-31
note: math-trigonometry
title: "Find a Height from an Angle of Elevation"
exam: final
skills: [Angles of Elevation, Tangent]
-->

A drone is $20$ m horizontally from an observer.

The angle of elevation is $30^\circ$.

How high is the drone?

:::solution
Use tangent:

$$
\tan 30^\circ = \frac{\text{height}}{20}
$$

So

$$
\text{height} = 20\tan 30^\circ
$$

Since $\tan 30^\circ = \frac{\sqrt{3}}{3}$,

$$
\text{height} = 20\cdot\frac{\sqrt{3}}{3} = \frac{20\sqrt{3}}{3}\text{ m}
$$
:::

<!--
id: trigonometry-32
note: math-trigonometry
title: "Use the Law of Sines"
exam: final
skills: [Law of Sines]
-->

In triangle $ABC$, $A = 30^\circ$, $B = 45^\circ$, and $a = 10$.

Find $b$.

:::solution
Use the law of sines:

$$
\frac{a}{\sin A} = \frac{b}{\sin B}
$$

Substitute the known values:

$$
\frac{10}{\sin 30^\circ} = \frac{b}{\sin 45^\circ}
$$

Solve for $b$:

$$
b = 10 \cdot \frac{\sin 45^\circ}{\sin 30^\circ}
$$

$$
b = 10 \cdot \frac{\sqrt{2}/2}{1/2} = 10\sqrt{2}
$$
:::

<!--
id: trigonometry-33
note: math-trigonometry
title: "Use the Law of Cosines"
exam: final
skills: [Law of Cosines]
-->

In triangle $ABC$, the sides are $a = 7$, $b = 9$, and the included angle $C = 60^\circ$.

Find $c$.

:::solution
Use the law of cosines:

$$
c^2 = a^2 + b^2 - 2ab\cos C
$$

Substitute the values:

$$
c^2 = 7^2 + 9^2 - 2(7)(9)\cos 60^\circ
$$

$$
c^2 = 49 + 81 - 126\cdot\frac{1}{2}
$$

$$
c^2 = 130 - 63 = 67
$$

So

$$
c = \sqrt{67}
$$
:::

<!--
id: trigonometry-34
note: math-trigonometry
title: "Interpret a Sinusoidal Model"
exam: final
skills: [Sinusoidal Models, Graph Transformations]
-->

The height of a tide is modeled by

$$
h(t) = 3\sin\left(\frac{\pi t}{6}\right) + 8,
$$

where $t$ is measured in hours.

What are the maximum height and the period?

:::solution
The amplitude is $3$, so the maximum height is

$$
8 + 3 = 11
$$

The period is

$$
\frac{2\pi}{\pi/6} = 12
$$

So the maximum height is $11$ and the period is $12$ hours.
:::

<!--
id: trigonometry-35
note: math-trigonometry
title: "Find the Area of an Oblique Triangle"
exam: final
skills: [Triangle Area, Trig Area Formula]
-->

Two sides of a triangle are $8$ and $12$ with included angle $45^\circ$.

Find the area.

:::solution
Use the area formula for two sides and the included angle:

$$
\text{Area} = \frac{1}{2}ab\sin C
$$

Substitute the values:

$$
\text{Area} = \frac{1}{2}(8)(12)\sin 45^\circ
$$

$$
\text{Area} = 48\cdot\frac{\sqrt{2}}{2} = 24\sqrt{2}
$$
:::

<!--
id: trigonometry-41
note: math-trigonometry
title: "Use a Double-Angle Identity with a Given Sine Value"
exam: final
skills: [Double-Angle Identities, Pythagorean Identity]
-->

If $\sin x = \frac{3}{5}$ and $x$ is in Quadrant I, find $\cos(2x)$.

:::solution
First find $\cos x$ using the Pythagorean identity:

$$
\cos x = \frac{4}{5}
$$

Now use the double-angle identity:

$$
\cos(2x) = \cos^2 x - \sin^2 x
$$

Substitute:

$$
\cos(2x) = \left(\frac{4}{5}\right)^2 - \left(\frac{3}{5}\right)^2
$$

$$
\cos(2x) = \frac{16}{25} - \frac{9}{25} = \frac{7}{25}
$$
:::

<!--
id: trigonometry-42
note: math-trigonometry
title: "Rewrite a Product as a Sum"
exam: final
skills: [Product-to-Sum]
-->

Rewrite $\sin(3x)\cos(x)$ using a product-to-sum identity.

:::solution
Use the identity

$$
\sin a \cos b = \frac{1}{2}[\sin(a+b) + \sin(a-b)]
$$

with $a = 3x$ and $b = x$:

$$
\sin(3x)\cos(x) = \frac{1}{2}[\sin(4x) + \sin(2x)]
$$
:::

<!--
id: trigonometry-43
note: math-trigonometry
title: "Determine the Number of Triangles in an SSA Case"
exam: final
skills: [Law of Sines, SSA Ambiguity]
-->

In a triangle, $A = 30^\circ$, $a = 10$, and $b = 14$.

How many triangles are possible?

:::solution
Use the SSA height test.

The height is

$$
h = b\sin A = 14\sin 30^\circ = 14\cdot\frac{1}{2} = 7
$$

Since

$$
h < a < b
$$

that is,

$$
7 < 10 < 14,
$$

there are two possible triangles.
:::

<!--
id: trigonometry-44
note: math-trigonometry
title: "Evaluate a Half-Angle Exactly"
exam: final
skills: [Half-Angle Formulas, Special Angles]
-->

Find the exact value of $\cos\left(\frac{\pi}{12}\right)$.

:::solution
Use the half-angle formula:

$$
\cos^2\left(\frac{x}{2}\right) = \frac{1+\cos x}{2}
$$

Let $x = \frac{\pi}{6}$. Then $\frac{x}{2} = \frac{\pi}{12}$, so

$$
\cos^2\left(\frac{\pi}{12}\right) = \frac{1+\cos\left(\frac{\pi}{6}\right)}{2}
$$

$$
= \frac{1+\frac{\sqrt{3}}{2}}{2} = \frac{2+\sqrt{3}}{4}
$$

Since $\frac{\pi}{12}$ is in Quadrant I, cosine is positive:

$$
\cos\left(\frac{\pi}{12}\right) = \frac{\sqrt{2+\sqrt{3}}}{2}
$$
:::
