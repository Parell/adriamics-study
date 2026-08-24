<!--
id: mechanics-of-materials-11
note: engineering-mechanics-of-materials
title: "Compute the Normal Stress in a Tension Member"
exam: exam-i
skills: [Normal Stress, Axial Loading]
-->

A steel bar carries a tensile force of $24\ \text{kN}$ and has a cross-sectional area of $600\ \text{mm}^2$.

What is the average normal stress in the bar?

:::solution
Use the axial stress formula:

$$
\sigma = \frac{P}{A}
$$

Substitute the values:

$$
\sigma = \frac{24\,000}{600} = 40\ \text{N/mm}^2
$$

So the normal stress is

$$
40\ \text{MPa}
$$
:::

<!--
id: mechanics-of-materials-12
note: engineering-mechanics-of-materials
title: "Find Engineering Strain from Elongation"
exam: exam-i
skills: [Strain, Deformation]
-->

A bar with original length $750\ \text{mm}$ elongates by $1.5\ \text{mm}$.

What is the engineering strain?

:::solution
Use the strain definition:

$$
\varepsilon = \frac{\delta}{L}
$$

Substitute the values:

$$
\varepsilon = \frac{1.5}{750} = 0.002
$$

So the engineering strain is

$$
2.0 \times 10^{-3}
$$
:::

<!--
id: mechanics-of-materials-13
note: engineering-mechanics-of-materials
title: "Use Hooke's Law for a Linear Elastic Material"
exam: exam-i
skills: [Hooke's Law, Stress-Strain]
-->

A linearly elastic material has Young's modulus $E = 210\ \text{GPa}$.
If it experiences a normal stress of $105\ \text{MPa}$, what is the axial strain?

:::solution
Use Hooke's law:

$$
\sigma = E\varepsilon
$$

Solve for strain:

$$
\varepsilon = \frac{\sigma}{E}
$$

Substitute:

$$
\varepsilon = \frac{105}{210\,000} = 0.0005
$$

So the axial strain is

$$
5.0 \times 10^{-4}
$$
:::

<!--
id: mechanics-of-materials-14
note: engineering-mechanics-of-materials
title: "Compute Free Thermal Expansion"
exam: exam-i
skills: [Thermal Strain, Expansion]
-->

A steel rod has length $2.5\ \text{m}$ and coefficient of thermal expansion

$$
\alpha = 12 \times 10^{-6}/^\circ\text{C}.
$$

If the temperature increases by $20^\circ\text{C}$ and the rod is free to expand, how much does its length change?

:::solution
Use free thermal expansion:

$$
\delta_{th} = \alpha L \Delta T
$$

Substitute:

$$
\delta_{th} = (12 \times 10^{-6})(2.5)(20)
$$

$$
\delta_{th} = 6.0 \times 10^{-4}\ \text{m}
$$

Convert to millimeters:

$$
\delta_{th} = 0.6\ \text{mm}
$$
:::

<!--
id: mechanics-of-materials-15
note: engineering-mechanics-of-materials
title: "Find the Maximum Shear Stress in a Circular Shaft"
exam: exam-i
skills: [Torsion, Shear Stress]
-->

A solid circular shaft with diameter $60\ \text{mm}$ carries a torque of $600\ \text{N}\cdot\text{m}$.

What is the maximum shear stress in the shaft?

:::solution
Use the torsion formula at the outer surface:

$$
\tau_{max} = \frac{Tc}{J}
$$

For a solid circular shaft,

$$
J = \frac{\pi d^4}{32}, \quad c = \frac{d}{2}
$$

Substitute $T = 600\,000\ \text{N}\cdot\text{mm}$ and $d = 60\ \text{mm}$:

$$
\tau_{max} = \frac{600\,000(30)}{\pi(60^4)/32}
$$

$$
\tau_{max} \approx 14.1\ \text{MPa}
$$
:::

<!--
id: mechanics-of-materials-16
note: engineering-mechanics-of-materials
title: "Compute the Angle of Twist"
exam: exam-i
skills: [Angle of Twist, Torsion]
-->

A solid circular shaft has length $1.5\ \text{m}$, diameter $50\ \text{mm}$, shear modulus $G = 80\ \text{GPa}$, and applied torque $900\ \text{N}\cdot\text{m}$.

What is the angle of twist?

:::solution
Use the torsion deformation formula:

$$
\phi = \frac{TL}{JG}
$$

For a solid circular shaft,

$$
J = \frac{\pi d^4}{32}
$$

Substitute in consistent units:

$$
T = 900\,000\ \text{N}\cdot\text{mm}, \quad L = 1500\ \text{mm}, \quad G = 80\,000\ \text{N/mm}^2
$$

Then

$$
\phi = \frac{900\,000(1500)}{\left[\pi(50^4)/32\right](80\,000)}
$$

$$
\phi \approx 0.0275\ \text{rad}
$$

In degrees, this is about

$$
1.6^\circ
$$
:::

<!--
id: mechanics-of-materials-17
note: engineering-mechanics-of-materials
title: "Find the Maximum Bending Stress in a Rectangle"
exam: exam-i
skills: [Bending Stress, Section Properties]
-->

A beam section is rectangular with width $100\ \text{mm}$ and height $150\ \text{mm}$.
The internal bending moment at a section is $8\ \text{kN}\cdot\text{m}$.

What is the maximum bending stress?

:::solution
Use the flexure formula:

$$
\sigma_{max} = \frac{Mc}{I}
$$

For a rectangle,

$$
I = \frac{bh^3}{12}
$$

Here,

$$
I = \frac{100(150^3)}{12} = 28\,125\,000\ \text{mm}^4
$$

and

$$
c = \frac{150}{2} = 75\ \text{mm}
$$

Convert the moment:

$$
M = 8\ \text{kN}\cdot\text{m} = 8\,000\,000\ \text{N}\cdot\text{mm}
$$

Now compute:

$$
\sigma_{max} = \frac{8\,000\,000(75)}{28\,125\,000} \approx 21.3\ \text{MPa}
$$
:::

<!--
id: mechanics-of-materials-18
note: engineering-mechanics-of-materials
title: "Compute Maximum Beam Shear Stress in a Rectangle"
exam: exam-i
skills: [Beam Shear Stress, Shear Force]
-->

A rectangular beam has width $50\ \text{mm}$ and height $150\ \text{mm}$.
The internal shear force is $15\ \text{kN}$.

What is the maximum shear stress at the neutral axis?

:::solution
For a rectangular section, the maximum shear stress is

$$
\tau_{max} = \frac{3V}{2A}
$$

where

$$
A = bh = 50(150) = 7500\ \text{mm}^2
$$

Substitute:

$$
\tau_{max} = \frac{3(15\,000)}{2(7500)} = 3.0\ \text{MPa}
$$

So the maximum shear stress is

$$
3.0\ \text{MPa}
$$
:::

<!--
id: mechanics-of-materials-19
note: engineering-mechanics-of-materials
title: "Interpret a Concentrated Load in a Shear Diagram"
exam: exam-i
skills: [Internal Force Resultants, Shear Diagrams]
-->

A beam's shear-force diagram is being drawn from left to right.
At one point, the beam crosses a $12\ \text{kN}$ downward concentrated load.

What happens to the shear-force diagram at that point?

:::solution
A downward concentrated load causes a downward jump in the shear diagram by the same magnitude.

So the shear-force diagram drops by

$$
12\ \text{kN}
$$

at that point.
:::

<!--
id: mechanics-of-materials-110
note: engineering-mechanics-of-materials
title: "Find the Euler Buckling Load"
exam: exam-i
skills: [Euler Buckling, Columns]
-->

A pinned-pinned column has

$$
E = 200\ \text{GPa}, \quad I = 1.0 \times 10^6\ \text{mm}^4, \quad L = 3\ \text{m}.
$$

What is the critical buckling load?

:::solution
Use Euler buckling with $K = 1$ for pinned-pinned ends:

$$
P_{cr} = \frac{\pi^2EI}{(KL)^2}
$$

Substitute in consistent units:

$$
E = 200\,000\ \text{N/mm}^2, \quad L = 3000\ \text{mm}
$$

So

$$
P_{cr} = \frac{\pi^2(200\,000)(1.0 \times 10^6)}{3000^2}
$$

$$
P_{cr} \approx 219\ \text{kN}
$$
:::

<!--
id: mechanics-of-materials-21
note: engineering-mechanics-of-materials
title: "Sum the Elongation of a Two-Segment Bar"
exam: exam-ii
skills: [Axial Deformation, Piecewise Segments]
-->

A steel bar has two segments in series. Segment 1 has length $400\ \text{mm}$ and area $200\ \text{mm}^2$. Segment 2 has length $600\ \text{mm}$ and area $300\ \text{mm}^2$.
The bar carries a tensile force of $12\ \text{kN}$ throughout, and $E = 200\ \text{GPa}$.

What is the total elongation?

:::solution
Use the deformation formula on each segment:

$$
\delta = \sum \frac{PL}{AE}
$$

For segment 1:

$$
\delta_1 = \frac{12\,000(400)}{200(200\,000)} = 0.12\ \text{mm}
$$

For segment 2:

$$
\delta_2 = \frac{12\,000(600)}{300(200\,000)} = 0.12\ \text{mm}
$$

So the total elongation is

$$
\delta_{tot} = 0.24\ \text{mm}
$$
:::

<!--
id: mechanics-of-materials-22
note: engineering-mechanics-of-materials
title: "Analyze a Stepped Bar with Constant Axial Force"
exam: exam-ii
skills: [Axial Stress, Piecewise Segments, Deformation]
-->

A stepped steel bar is in tension with an axial force of $18\ \text{kN}$.
Its segments are:

$$
(500\ \text{mm}, 250\ \text{mm}^2),\quad (300\ \text{mm}, 500\ \text{mm}^2),\quad (700\ \text{mm}, 250\ \text{mm}^2)
$$

Take $E = 200\ \text{GPa}$.

Find the stress in each segment and the total elongation.

:::solution
The axial force is the same in every segment, so the stress in each segment is

$$
\sigma = \frac{P}{A}
$$

Segment 1:

$$
\sigma_1 = \frac{18\,000}{250} = 72\ \text{MPa}
$$

Segment 2:

$$
\sigma_2 = \frac{18\,000}{500} = 36\ \text{MPa}
$$

Segment 3:

$$
\sigma_3 = \frac{18\,000}{250} = 72\ \text{MPa}
$$

Now compute elongation segment by segment:

$$
\delta_{tot} = \sum \frac{PL}{AE}
$$

$$
\delta_{tot} =
\frac{18\,000(500)}{250(200\,000)}
+\frac{18\,000(300)}{500(200\,000)}
+\frac{18\,000(700)}{250(200\,000)}
$$

$$
\delta_{tot} = 0.36 + 0.054 + 0.252 = 0.486\ \text{mm}
$$
:::

<!--
id: mechanics-of-materials-23
note: engineering-mechanics-of-materials
title: "Find the Stress from a Fully Restrained Temperature Rise"
exam: exam-ii
skills: [Thermal Stress, Constrained Expansion]
-->

A steel bar with length $2\ \text{m}$ is fixed between rigid walls.
Its coefficient of thermal expansion is

$$
\alpha = 12 \times 10^{-6}/^\circ\text{C},
$$

and $E = 200\ \text{GPa}$.
If the temperature rises by $35^\circ\text{C}$, what thermal stress develops?

:::solution
For a fully restrained bar, the total strain is zero, so the thermal stress is

$$
\sigma = E\alpha\Delta T
$$

Substitute:

$$
\sigma = (200\,000)(12 \times 10^{-6})(35)
$$

$$
\sigma = 84\ \text{MPa}
$$

Because the bar is prevented from expanding, the stress is compressive.
:::

<!--
id: mechanics-of-materials-24
note: engineering-mechanics-of-materials
title: "Share Load Between Parallel Bars"
exam: exam-ii
skills: [Parallel Members, Compatibility, Stiffness]
-->

Two bars connect rigid plates in parallel. Each bar is $800\ \text{mm}$ long and has cross-sectional area $400\ \text{mm}^2$.
One bar is steel with $E = 200\ \text{GPa}$, and the other is aluminum with $E = 70\ \text{GPa}$.
The plates are pulled by a total tensile load of $27\ \text{kN}$.

How much force does each bar carry?

:::solution
Because the bars are in parallel between rigid plates, they have the same elongation.
So the force in each bar is proportional to its stiffness:

$$
k = \frac{AE}{L}
$$

Since $A$ and $L$ are the same, the force ratio is

$$
F_s : F_a = E_s : E_a = 200 : 70 = 20 : 7
$$

The total load is $27\ \text{kN}$, so there are $27$ parts total.

Steel bar:

$$
F_s = 27 \cdot \frac{20}{27} = 20\ \text{kN}
$$

Aluminum bar:

$$
F_a = 27 \cdot \frac{7}{27} = 7\ \text{kN}
$$

The common elongation is

$$
\delta = \frac{F_sL}{AE_s} = \frac{20\,000(800)}{400(200\,000)} = 0.2\ \text{mm}
$$
:::

<!--
id: mechanics-of-materials-25
note: engineering-mechanics-of-materials
title: "Find Principal Stresses from a Plane Stress State"
exam: exam-ii
skills: [Stress Transformation, Principal Stress, Mohr's Circle]
-->

A point in a member is under the plane stress state

$$
\sigma_x = 84\ \text{MPa}, \quad \sigma_y = 36\ \text{MPa}, \quad \tau_{xy} = 18\ \text{MPa}.
$$

Find the principal stresses and the maximum in-plane shear stress.

:::solution
Use the plane stress transformation results:

$$
\sigma_{1,2} = \frac{\sigma_x+\sigma_y}{2}
\pm
\sqrt{
\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2
}
$$

Compute the average stress:

$$
\frac{84+36}{2} = 60\ \text{MPa}
$$

and the radius:

$$
\sqrt{24^2 + 18^2} = \sqrt{900} = 30\ \text{MPa}
$$

So the principal stresses are

$$
\sigma_1 = 90\ \text{MPa}, \quad \sigma_2 = 30\ \text{MPa}
$$

The maximum in-plane shear stress is

$$
\tau_{max} = 30\ \text{MPa}
$$
:::

<!--
id: mechanics-of-materials-26
note: engineering-mechanics-of-materials
title: "Transform Stress to a Rotated Plane"
exam: exam-ii
skills: [Stress Transformation, Rotated Planes]
-->

Using the same plane stress state

$$
\sigma_x = 84\ \text{MPa}, \quad \sigma_y = 36\ \text{MPa}, \quad \tau_{xy} = 18\ \text{MPa},
$$

find the normal stress and shear stress on a plane rotated $45^\circ$ counterclockwise.

:::solution
Use the stress transformation equations:

$$
\sigma_{x'} = \frac{\sigma_x+\sigma_y}{2}
+ \frac{\sigma_x-\sigma_y}{2}\cos 2\theta
+ \tau_{xy}\sin 2\theta
$$

$$
\tau_{x'y'} = -\frac{\sigma_x-\sigma_y}{2}\sin 2\theta
+ \tau_{xy}\cos 2\theta
$$

With $\theta = 45^\circ$, we have

$$
\cos 90^\circ = 0, \quad \sin 90^\circ = 1
$$

So

$$
\sigma_{x'} = 60 + 18 = 78\ \text{MPa}
$$

and

$$
\tau_{x'y'} = -24\ \text{MPa}
$$

The normal stress on the rotated plane is $78\ \text{MPa}$, and the shear stress is $-24\ \text{MPa}$.
:::

<!--
id: mechanics-of-materials-27
note: engineering-mechanics-of-materials
title: "Use the Beam Shear Formula on a Rectangular Section"
exam: exam-ii
skills: [Beam Shear Stress, Shear Formula]
-->

A rectangular beam has width $50\ \text{mm}$ and height $150\ \text{mm}$.
The internal shear force is $15\ \text{kN}$.

Find the maximum shear stress at the neutral axis using the beam shear formula.

:::solution
For a rectangular section, the maximum shear stress occurs at the neutral axis and can be found from

$$
\tau = \frac{VQ}{It}
$$

Here,

$$
I = \frac{bh^3}{12} = \frac{50(150^3)}{12}
$$

At the neutral axis, the area above the cut is

$$
A' = b\left(\frac{h}{2}\right) = 50(75)
$$

and its centroid is $37.5\ \text{mm}$ from the neutral axis, so

$$
Q = A'\bar{y} = 50(75)(37.5)
$$

Using $t = b = 50\ \text{mm}$, the result simplifies to

$$
\tau_{max} = \frac{3V}{2A}
$$

with

$$
A = bh = 50(150) = 7500\ \text{mm}^2
$$

So

$$
\tau_{max} = \frac{3(15\,000)}{2(7500)} = 3.0\ \text{MPa}
$$
:::

<!--
id: mechanics-of-materials-31
note: engineering-mechanics-of-materials
title: "Integrate the Deflection of a Cantilever"
exam: final
skills: [Beam Deflection, Integration]
-->

A cantilever beam has length $2\ \text{m}$ and an end load of $4\ \text{kN}$.
The beam has $E = 200\ \text{GPa}$ and $I = 8.0 \times 10^6\ \text{mm}^4$.

Find the tip deflection using the moment-curvature relation.

:::solution
Take $x$ from the fixed end. The bending moment is

$$
M(x) = -P(L-x)
$$

and the beam equation is

$$
EI\frac{d^2v}{dx^2} = M(x)
$$

So

$$
EI\frac{d^2v}{dx^2} = -P(L-x)
$$

Integrate once:

$$
EI\frac{dv}{dx} = -PLx + \frac{Px^2}{2} + C_1
$$

At the fixed end, the slope is zero, so $C_1 = 0$.

Integrate again:

$$
EIv = -\frac{PLx^2}{2} + \frac{Px^3}{6} + C_2
$$

At the fixed end, the deflection is zero, so $C_2 = 0$.

At $x = L$,

$$
v(L) = -\frac{PL^3}{3EI}
$$

Substitute $P = 4000\ \text{N}$, $L = 2000\ \text{mm}$, $E = 200\,000\ \text{N/mm}^2$, and $I = 8.0 \times 10^6\ \text{mm}^4$:

$$
|v(L)| = \frac{4000(2000^3)}{3(200\,000)(8.0 \times 10^6)} \approx 6.7\ \text{mm}
$$

So the tip deflection is about $6.7\ \text{mm}$ downward.
:::

<!--
id: mechanics-of-materials-32
note: engineering-mechanics-of-materials
title: "Convert Power to Shaft Diameter"
exam: final
skills: [Power Transmission, Torsion, Shaft Design]
-->

A motor delivers $12\ \text{kW}$ at $900\ \text{rpm}$ to a solid circular shaft.
If the allowable shear stress is $40\ \text{MPa}$, what minimum shaft diameter is required?

:::solution
First convert power and speed to torque:

$$
P = T\omega
$$

The angular speed is

$$
\omega = 2\pi\left(\frac{900}{60}\right) = 30\pi\ \text{rad/s}
$$

So the torque is

$$
T = \frac{12\,000}{30\pi} \approx 127.3\ \text{N}\cdot\text{m}
$$

Now use the torsion stress formula for a solid shaft:

$$
\tau_{max} = \frac{16T}{\pi d^3}
$$

Solve for $d$:

$$
d = \left(\frac{16T}{\pi\tau_{allow}}\right)^{1/3}
$$

Substitute $T = 127\,300\ \text{N}\cdot\text{mm}$ and $\tau_{allow} = 40\ \text{N/mm}^2$:

$$
d \approx 25.4\ \text{mm}
$$

So the minimum practical diameter is

$$
26\ \text{mm}
$$
:::

<!--
id: mechanics-of-materials-33
note: engineering-mechanics-of-materials
title: "Combine Axial Load and Bending"
exam: final
skills: [Combined Loading, Axial Stress, Bending Stress]
-->

A member carries a compressive axial load of $30\ \text{kN}$ and an internal bending moment of $6\ \text{kN}\cdot\text{m}$.
Its cross-section is a rectangle with width $80\ \text{mm}$ and height $160\ \text{mm}$.

Find the normal stress at the top fiber and at the bottom fiber.

:::solution
First compute the axial stress:

$$
\sigma_{ax} = \frac{P}{A} = \frac{30\,000}{80(160)} = 2.34\ \text{MPa}
$$

This is compressive.

Next compute the bending stress:

$$
\sigma_b = \frac{Mc}{I}
$$

For a rectangle,

$$
I = \frac{bh^3}{12} = \frac{80(160^3)}{12} = 34\,133\,333\ \text{mm}^4
$$

and

$$
c = 80\ \text{mm}
$$

Convert the moment:

$$
M = 6\ \text{kN}\cdot\text{m} = 6\,000\,000\ \text{N}\cdot\text{mm}
$$

So

$$
\sigma_b = \frac{6\,000\,000(80)}{34\,133\,333} \approx 14.1\ \text{MPa}
$$

If the moment puts the top fiber in compression, then:

$$
\sigma_{top} = 2.34 + 14.1 = 16.4\ \text{MPa}
$$

$$
\sigma_{bottom} = 14.1 - 2.34 = 11.8\ \text{MPa}
$$

So the top fiber is more highly compressed, and the bottom fiber is in tension.
:::

<!--
id: mechanics-of-materials-34
note: engineering-mechanics-of-materials
title: "Decide Which Column Failure Mode Governs"
exam: final
skills: [Euler Buckling, Yielding, Design Check]
-->

A steel column has length $3\ \text{m}$, pinned-pinned ends, Young's modulus $E = 200\ \text{GPa}$, and a circular cross-section with diameter $40\ \text{mm}$.
The yield strength is $250\ \text{MPa}$.

Compute the Euler critical load and the yield load. Which one is smaller?

:::solution
First compute the second moment of area for a solid circle:

$$
I = \frac{\pi d^4}{64}
$$

With $d = 40\ \text{mm}$,

$$
I = \frac{\pi(40^4)}{64} \approx 1.26 \times 10^5\ \text{mm}^4
$$

Euler buckling load:

$$
P_{cr} = \frac{\pi^2EI}{L^2}
$$

Substitute:

$$
P_{cr} \approx \frac{\pi^2(200\,000)(1.26 \times 10^5)}{3000^2} \approx 27.6\ \text{kN}
$$

Now compute the yield load:

$$
A = \frac{\pi d^2}{4} \approx 1257\ \text{mm}^2
$$

$$
P_y = \sigma_y A = 250(1257) \approx 314\ \text{kN}
$$

Since $27.6\ \text{kN} < 314\ \text{kN}$, Euler buckling governs.
:::

<!--
id: mechanics-of-materials-35
note: engineering-mechanics-of-materials
title: "Check a Plane Stress State with von Mises"
exam: final
skills: [von Mises, Failure Criterion, Plane Stress]
-->

A ductile part has the plane stress state

$$
\sigma_x = 70\ \text{MPa}, \quad \sigma_y = 10\ \text{MPa}, \quad \tau_{xy} = 20\ \text{MPa}.
$$

If the yield strength is $75\ \text{MPa}$, find the von Mises stress and decide whether yielding is predicted.

:::solution
Use the plane-stress von Mises formula:

$$
\sigma_{vm} = \sqrt{\sigma_x^2 - \sigma_x\sigma_y + \sigma_y^2 + 3\tau_{xy}^2}
$$

Substitute:

$$
\sigma_{vm} = \sqrt{70^2 - 70(10) + 10^2 + 3(20^2)}
$$

$$
\sigma_{vm} = \sqrt{4900 - 700 + 100 + 1200}
$$

$$
\sigma_{vm} = \sqrt{5500} \approx 74.2\ \text{MPa}
$$

Because $74.2\ \text{MPa} < 75\ \text{MPa}$, yielding is not predicted.
The part is just barely safe.
:::

<!--
id: mechanics-of-materials-41
note: engineering-mechanics-of-materials
title: "Include a Stress Concentration in a Torsion Design Check"
exam: final
skills: [Stress Concentration, Torsion, Design Check]
-->

A solid circular shaft has diameter $50\ \text{mm}$ and a shoulder with stress concentration factor $K_t = 1.6$.
If the allowable maximum shear stress is $50\ \text{MPa}$, what is the largest torque the shaft can carry?

:::solution
The local maximum shear stress is

$$
\tau_{max} = K_t \tau_{nom}
$$

So the nominal stress must satisfy

$$
\tau_{nom} \le \frac{50}{1.6} = 31.25\ \text{MPa}
$$

For a solid circular shaft,

$$
\tau_{nom} = \frac{16T}{\pi d^3}
$$

Solve for $T$:

$$
T = \frac{\tau_{nom}\pi d^3}{16}
$$

Substitute $d = 50\ \text{mm}$:

$$
T = \frac{31.25\pi(50^3)}{16} \approx 7.67 \times 10^5\ \text{N}\cdot\text{mm}
$$

So the largest torque is

$$
767\ \text{N}\cdot\text{m}
$$
:::

<!--
id: mechanics-of-materials-42
note: engineering-mechanics-of-materials
title: "Solve a Thermal-Indeterminate Parallel-Bar System"
exam: final
skills: [Thermal Stress, Parallel Members, Compatibility]
-->

Two bars connect rigid plates in parallel.
Each bar is $800\ \text{mm}$ long and has cross-sectional area $400\ \text{mm}^2$.
One bar is steel with $E = 200\ \text{GPa}$ and $\alpha = 12 \times 10^{-6}/^\circ\text{C}$.
The other is aluminum with $E = 70\ \text{GPa}$ and $\alpha = 23 \times 10^{-6}/^\circ\text{C}$.

The temperature rises by $10^\circ\text{C}$, and the plates are also pulled by a total tensile load of $18\ \text{kN}$.

Find the force in each bar.

:::solution
Because the plates are rigid, both bars have the same total elongation.
Let $\delta$ be that common elongation.

For each bar,

$$
F_i = k_i(\delta - \delta_{th,i}), \quad k_i = \frac{AE_i}{L}
$$

Compute the stiffnesses:

$$
k_s = \frac{400(200\,000)}{800} = 100\,000\ \text{N/mm}
$$

$$
k_a = \frac{400(70\,000)}{800} = 35\,000\ \text{N/mm}
$$

Compute the free thermal expansions:

$$
\delta_{th,s} = (12 \times 10^{-6})(800)(10) = 0.12\ \text{mm}
$$

$$
\delta_{th,a} = (23 \times 10^{-6})(800)(10) = 0.23\ \text{mm}
$$

Force equilibrium gives

$$
F_s + F_a = 18\,000
$$

and

$$
100\,000(\delta - 0.12) + 35\,000(\delta - 0.23) = 18\,000
$$

So

$$
135\,000\delta = 38\,050
$$

$$
\delta \approx 0.282\ \text{mm}
$$

Now compute the forces:

$$
F_s = 100\,000(0.282 - 0.12) \approx 16.2\ \text{kN}
$$

$$
F_a = 35\,000(0.282 - 0.23) \approx 1.8\ \text{kN}
$$

So the steel bar carries about $16.2\ \text{kN}$ and the aluminum bar carries about $1.8\ \text{kN}$.
:::

<!--
id: mechanics-of-materials-43
note: engineering-mechanics-of-materials
title: "Check a Shaft in Combined Bending and Torsion"
exam: final
skills: [Combined Loading, Torsion, Failure Criterion]
-->

A solid circular shaft with diameter $60\ \text{mm}$ carries a bending moment of $300\ \text{N}\cdot\text{m}$ and a torque of $500\ \text{N}\cdot\text{m}$.

Find the principal stresses at the outer surface and the von Mises stress.
If the yield strength is $40\ \text{MPa}$, is the shaft safe?

:::solution
At the outer surface, the bending stress is

$$
\sigma = \frac{32M}{\pi d^3}
$$

and the torsional shear stress is

$$
\tau = \frac{16T}{\pi d^3}
$$

Substitute $d = 60\ \text{mm}$, $M = 300\,000\ \text{N}\cdot\text{mm}$, and $T = 500\,000\ \text{N}\cdot\text{mm}$:

$$
\sigma \approx 14.1\ \text{MPa}, \quad \tau \approx 11.8\ \text{MPa}
$$

Now treat this as a plane stress state with $\sigma_x = 14.1\ \text{MPa}$, $\sigma_y = 0$, and $\tau_{xy} = 11.8\ \text{MPa}$.

The principal stresses are

$$
\sigma_{1,2} = \frac{\sigma_x}{2} \pm \sqrt{\left(\frac{\sigma_x}{2}\right)^2 + \tau_{xy}^2}
$$

So

$$
\sigma_1 \approx 20.8\ \text{MPa}, \quad \sigma_2 \approx -6.7\ \text{MPa}
$$

The von Mises stress is

$$
\sigma_{vm} = \sqrt{\sigma_x^2 + 3\tau_{xy}^2}
$$

$$
\sigma_{vm} \approx \sqrt{14.1^2 + 3(11.8^2)} \approx 24.8\ \text{MPa}
$$

Since $24.8\ \text{MPa} < 40\ \text{MPa}$, the shaft is safe by the von Mises criterion.
:::

<!--
id: mechanics-of-materials-44
note: engineering-mechanics-of-materials
title: "Apply Goodman Fatigue Design"
exam: final
skills: [Fatigue, Goodman Diagram, Design Check]
-->

A member has alternating stress and mean stress

$$
\sigma_a = 40\ \text{MPa}, \quad \sigma_m = 100\ \text{MPa}.
$$

The endurance limit is $S_e = 240\ \text{MPa}$ and the ultimate tensile strength is $S_{ut} = 600\ \text{MPa}$.

What factor of safety does the Goodman relation predict?

:::solution
Use the Goodman design relation:

$$
\frac{\sigma_a}{S_e} + \frac{\sigma_m}{S_{ut}} \le \frac{1}{n}
$$

Substitute the values:

$$
\frac{40}{240} + \frac{100}{600} = \frac{1}{6} + \frac{1}{6} = \frac{1}{3}
$$

So

$$
\frac{1}{n} = \frac{1}{3}
$$

which gives

$$
n = 3
$$
:::

<!--
id: mechanics-of-materials-45
note: engineering-mechanics-of-materials
title: "Check an Eccentrically Loaded Column"
exam: final
skills: [Combined Loading, Euler Buckling, Design Check]
-->

A solid steel column has diameter $30\ \text{mm}$, length $3\ \text{m}$, and modulus $E = 200\ \text{GPa}$.
It carries a compressive load of $8\ \text{kN}$ applied with eccentricity $15\ \text{mm}$.

Find the maximum compressive stress and the Euler buckling load.
If the allowable compressive stress is $70\ \text{MPa}$, which check is more restrictive?

:::solution
The eccentric load creates both axial stress and bending stress.

Area:

$$
A = \frac{\pi d^2}{4} = \frac{\pi(30^2)}{4} \approx 706.9\ \text{mm}^2
$$

Axial stress:

$$
\sigma_{ax} = \frac{P}{A} = \frac{8000}{706.9} \approx 11.3\ \text{MPa}
$$

Bending moment from eccentricity:

$$
M = Pe = 8000(15) = 120\,000\ \text{N}\cdot\text{mm}
$$

For a solid circular section,

$$
I = \frac{\pi d^4}{64} \approx 39\,789\ \text{mm}^4
$$

and

$$
c = 15\ \text{mm}
$$

Bending stress:

$$
\sigma_b = \frac{Mc}{I} = \frac{120\,000(15)}{39\,789} \approx 45.3\ \text{MPa}
$$

So the maximum compressive stress is

$$
\sigma_{max} \approx 11.3 + 45.3 = 56.6\ \text{MPa}
$$

Now compute Euler buckling:

$$
P_{cr} = \frac{\pi^2EI}{L^2}
$$

with $L = 3000\ \text{mm}$:

$$
P_{cr} \approx \frac{\pi^2(200\,000)(39\,789)}{3000^2} \approx 8.7\ \text{kN}
$$

Since the applied load is $8\ \text{kN}$, the column is below the Euler load but only by a small margin.

The compressive stress check is also below the $70\ \text{MPa}$ allowable.
The more restrictive check is buckling, because $8\ \text{kN}$ is close to $8.7\ \text{kN}$.
:::
