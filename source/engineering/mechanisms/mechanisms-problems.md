<!--
id: mechanisms-11
note: engineering-mechanisms
title: "Convert Power and Speed to Torque"
exam: exam-i
skills: [Power transmission, Torque]
-->

A shaft transmits (4\ \mathrm{kW}) at (1200\ \mathrm{rpm}). Find its torque.

:::solution
Use

$$
T=\frac{9550P}{N}=\frac{9550(4)}{1200}=31.8\ \mathrm{N\,m}.
$$
:::

<!--
id: mechanisms-12
note: engineering-mechanisms
title: "Find a Gear Ratio"
exam: exam-i
skills: [Gears, Speed ratio]
-->

A 20-tooth pinion drives a 60-tooth gear. What are the speed ratio and output speed if the input is (1500\ \mathrm{rpm})?

:::solution

$$
i=\frac{z_2}{z_1}=\frac{60}{20}=3,
\qquad N_2=\frac{1500}{3}=500\ \mathrm{rpm}.
$$

The output turns one-third as fast, with ideal torque multiplied by three.
:::

<!--
id: mechanisms-13
note: engineering-mechanisms
title: "Compute Gear Tooth Force"
exam: exam-i
skills: [Gears, Interface loads]
-->

A gear has (T=45\ \mathrm{N\,m}) and pitch diameter (d=90\ \mathrm{mm}). Find its tangential tooth force.

:::solution

$$
F_t=\frac{2T}{d}=\frac{2(45)}{0.090}=1000\ \mathrm N.
$$
:::

<!--
id: mechanisms-14
note: engineering-mechanisms
title: "Estimate Bearing Life"
exam: exam-i
skills: [Bearings, Rating life]
-->

A ball bearing has (C=12\ \mathrm{kN}) and equivalent load (P=3\ \mathrm{kN}). Estimate (L_{10}) in million revolutions.

:::solution
For a ball bearing, (p=3):

$$
L_{10}=\left(\frac{C}{P}\right)^3=\left(\frac{12}{3}\right)^3=64
$$

million revolutions.
:::

<!--
id: mechanisms-15
note: engineering-mechanisms
title: "Combine Springs in Parallel"
exam: exam-i
skills: [Springs, Stiffness]
-->

Two linear springs with stiffnesses (k_1=400\ \mathrm{N/m}) and (k_2=600\ \mathrm{N/m}) are installed in parallel. Find the equivalent stiffness and force at (x=0.05\ \mathrm m).

:::solution

$$
k_{eq}=k_1+k_2=1000\ \mathrm{N/m},
\qquad F=k_{eq}x=1000(0.05)=50\ \mathrm N.
$$
:::

<!--
id: mechanisms-16
note: engineering-mechanisms
title: "Separate Mean and Alternating Stress"
exam: exam-i
skills: [Fatigue, Stress components]
-->

A component experiences (sigma_{max}=120\ \mathrm{MPa}) and (sigma_{min}=20\ \mathrm{MPa}). Find (sigma_a) and (sigma_m).

:::solution

$$
\sigma_a=\frac{120-20}{2}=50\ \mathrm{MPa},
\qquad
\sigma_m=\frac{120+20}{2}=70\ \mathrm{MPa}.
$$
:::

<!--
id: mechanisms-17
note: engineering-mechanisms
title: "Count Planar Mechanism Mobility"
exam: exam-i
skills: [Mobility, Kutzbach equation]
-->

A planar mechanism has (n=4) links and (j_1=4) one-degree-of-freedom joints, with no higher pairs. Find its mobility.

:::solution

$$
M=3(n-1)-2j_1=3(4-1)-2(4)=1.
$$

It has one independent input, as expected for a conventional four-bar linkage.
:::

<!--
id: mechanisms-18
note: engineering-mechanisms
title: "Compute Screw Lead Angle"
exam: exam-i
skills: [Power screws, Lead]
-->

A single-start screw has pitch (p=4\ \mathrm{mm}) and mean diameter (d_m=20\ \mathrm{mm}). Find its lead angle.

:::solution
For a single-start screw, (l=p=4\ \mathrm{mm}). Thus

$$
\lambda=\tan^{-1}\left(\frac{4}{\pi(20)}\right)=3.64^\circ.
$$
:::
