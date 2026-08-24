<!--
id: fluid-mechanics-11
note: engineering-fluid-mechanics
title: "Relate Density, Specific Weight, and Viscosity"
exam: exam-i
skills: [Fluid Properties, Newtonian Fluids]
-->

A fluid has density $1000\ \text{kg/m}^3$ and dynamic viscosity $1.0\times 10^{-3}\ \text{Pa}\cdot\text{s}$.

Find:

- its specific weight $\gamma$
- its specific volume $v$
- its kinematic viscosity $\nu$

Also state whether this fluid is usually modeled as incompressible and Newtonian in ordinary pipe flow.

:::solution
Use the definitions:

$$
\gamma = \rho g = 1000(9.81) = 9810\ \text{N/m}^3
$$

$$
v = \frac{1}{\rho} = \frac{1}{1000} = 1.0\times 10^{-3}\ \text{m}^3/\text{kg}
$$

$$
\nu = \frac{\mu}{\rho} = \frac{1.0\times 10^{-3}}{1000} = 1.0\times 10^{-6}\ \text{m}^2/\text{s}
$$

This fluid is commonly modeled as incompressible and Newtonian in ordinary pipe flow.
:::

<!--
id: fluid-mechanics-12
note: engineering-fluid-mechanics
title: "Classify Flow by Reynolds Number"
exam: exam-i
skills: [Reynolds Number, Flow Regime]
-->

Oil flows through a circular pipe with

$$
\rho = 850\ \text{kg/m}^3,\quad \mu = 0.17\ \text{Pa}\cdot\text{s},\quad V = 0.40\ \text{m/s},\quad D = 0.020\ \text{m}.
$$

Find the Reynolds number and classify the flow as laminar, transitional, or turbulent.

:::solution
Compute the Reynolds number:

$$
\mathrm{Re} = \frac{\rho V D}{\mu}
= \frac{850(0.40)(0.020)}{0.17}
= 40
$$

Since $\mathrm{Re} \ll 2300$, the flow is laminar.
:::

<!--
id: fluid-mechanics-13
note: engineering-fluid-mechanics
title: "Find Pressure at a Depth"
exam: exam-i
skills: [Hydrostatics, Pressure]
-->

What is the gauge pressure $6$ m below the free surface in fresh water?

Use $\rho = 1000\ \text{kg/m}^3$ and $g = 9.81\ \text{m/s}^2$.

:::solution
For a fluid at rest, pressure increases with depth:

$$
p = \rho g h
$$

So

$$
p = 1000(9.81)(6) = 58860\ \text{Pa}
$$

$$
p \approx 58.9\ \text{kPa}
$$
:::

<!--
id: fluid-mechanics-14
note: engineering-fluid-mechanics
title: "Convert Gauge Pressure to Pressure Head"
exam: exam-i
skills: [Pressure Head]
-->

A gauge reads $150\ \text{kPa}$ in water.

What pressure head does this correspond to?

:::solution
Pressure head is

$$
\frac{p}{\gamma}
$$

For water, $\gamma = \rho g = 1000(9.81) = 9810\ \text{N/m}^3$.

Thus

$$
\frac{p}{\gamma} = \frac{150000}{9810} \approx 15.3\ \text{m}
$$

So the pressure head is about $15.3$ m of water.
:::

<!--
id: fluid-mechanics-15
note: engineering-fluid-mechanics
title: "Compute Buoyant Force from Displaced Volume"
exam: exam-i
skills: [Buoyancy, Hydrostatics]
-->

A submerged object displaces $0.030\ \text{m}^3$ of water.

What buoyant force acts on it?

:::solution
By Archimedes' principle, the buoyant force equals the weight of the displaced fluid:

$$
F_B = \rho g V_{\text{disp}}
$$

So

$$
F_B = 1000(9.81)(0.030) = 294.3\ \text{N}
$$
:::

<!--
id: fluid-mechanics-16
note: engineering-fluid-mechanics
title: "Use Continuity in a Converging Pipe"
exam: exam-i
skills: [Continuity, Volumetric Flow Rate]
-->

Water flows through a $60$ mm pipe at $3.0\ \text{m/s}$ and then enters a $30$ mm nozzle.

Find the volumetric flow rate and the nozzle exit speed.

:::solution
First compute the flow rate at the larger section:

$$
A_1 = \frac{\pi}{4}(0.060)^2
$$

$$
Q = A_1V_1 = \frac{\pi}{4}(0.060)^2(3.0) \approx 8.48\times 10^{-3}\ \text{m}^3/\text{s}
$$

Now use continuity at the nozzle:

$$
A_2 = \frac{\pi}{4}(0.030)^2
$$

$$
V_2 = \frac{Q}{A_2} = \frac{8.48\times 10^{-3}}{\pi(0.030)^2/4} = 12\ \text{m/s}
$$
:::

<!--
id: fluid-mechanics-17
note: engineering-fluid-mechanics
title: "Apply Bernoulli at the Same Elevation"
exam: exam-i
skills: [Bernoulli Equation, Pressure]
-->

In a horizontal water line, the speed increases from $2\ \text{m/s}$ to $6\ \text{m/s}$.

What is the pressure drop between the two points?

:::solution
For steady, incompressible, inviscid flow at the same elevation,

$$
\frac{p_1}{\gamma} + \frac{V_1^2}{2g}
=
\frac{p_2}{\gamma} + \frac{V_2^2}{2g}
$$

So

$$
p_1 - p_2 = \frac{1}{2}\rho\left(V_2^2 - V_1^2\right)
$$

Substitute the values:

$$
p_1 - p_2 = \frac{1}{2}(1000)(6^2 - 2^2)
$$

$$
p_1 - p_2 = 500(36 - 4) = 16000\ \text{Pa}
$$

So the pressure drops by $16\ \text{kPa}$.
:::

<!--
id: fluid-mechanics-18
note: engineering-fluid-mechanics
title: "Find the Darcy Friction Factor for Laminar Flow"
exam: exam-i
skills: [Friction Factor, Reynolds Number]
-->

A pipe flow has Reynolds number $1600$.

Assuming the flow is laminar, what is the Darcy friction factor?

:::solution
For laminar pipe flow,

$$
f = \frac{64}{\mathrm{Re}}
$$

Therefore

$$
f = \frac{64}{1600} = 0.04
$$
:::

<!--
id: fluid-mechanics-19
note: engineering-fluid-mechanics
title: "Compute Stagnation Pressure"
exam: exam-i
skills: [Stagnation Pressure, Bernoulli Equation]
-->

Air flows with static pressure $101\ \text{kPa}$, density $1.2\ \text{kg/m}^3$, and speed $30\ \text{m/s}$.

What is the stagnation pressure?

:::solution
Use the stagnation pressure relation:

$$
p_0 = p + \frac{1}{2}\rho V^2
$$

Substitute the values:

$$
p_0 = 101000 + \frac{1}{2}(1.2)(30^2)
$$

$$
p_0 = 101000 + 540 = 101540\ \text{Pa}
$$

So

$$
p_0 \approx 101.5\ \text{kPa}
$$
:::

<!--
id: fluid-mechanics-110
note: engineering-fluid-mechanics
title: "Check for Compressibility from Mach Number"
exam: exam-i
skills: [Mach Number, Compressible Flow]
-->

Air moves at $120\ \text{m/s}$ and the local speed of sound is $340\ \text{m/s}$.

Find the Mach number and say whether compressibility effects may matter.

:::solution
Compute the Mach number:

$$
\mathrm{Ma} = \frac{V}{a} = \frac{120}{340} \approx 0.35
$$

Since this is greater than about $0.3$, compressibility effects may matter.
:::

<!--
id: fluid-mechanics-21
note: engineering-fluid-mechanics
title: "Read a Two-Fluid Manometer"
exam: exam-ii
skills: [Hydrostatics, Manometers, Pressure]
-->

A tank gas is connected to a U-tube manometer. On the tank side, $5$ cm of water sits above mercury. The mercury level on the open side is $15$ cm higher than the mercury-water interface on the tank side. The open side is at atmospheric pressure.

Find the gas gauge pressure in the tank.

:::solution
Start at the open surface, where the pressure is atmospheric.

Move down $0.15$ m in mercury:

$$
p = p_{\text{atm}} + \rho_{\text{Hg}} g(0.15)
$$

Then move up $0.05$ m in water to the tank gas:

$$
p_{\text{tank}} = p_{\text{atm}} + \rho_{\text{Hg}} g(0.15) - \rho_w g(0.05)
$$

So the gauge pressure is

$$
p_g = \rho_{\text{Hg}} g(0.15) - \rho_w g(0.05)
$$

Using $\rho_{\text{Hg}} = 13600\ \text{kg/m}^3$ and $\rho_w = 1000\ \text{kg/m}^3$:

$$
p_g = 13600(9.81)(0.15) - 1000(9.81)(0.05)
$$

$$
p_g \approx 19.5\ \text{kPa}
$$
:::

<!--
id: fluid-mechanics-22
note: engineering-fluid-mechanics
title: "Resultant Force on a Submerged Gate"
exam: exam-ii
skills: [Hydrostatic Force, Center of Pressure]
-->

A vertical rectangular gate is $2$ m high and $1$ m wide. Its top edge is $3$ m below the free surface in water.

Find the resultant hydrostatic force and the depth of the center of pressure below the free surface.

:::solution
The centroid of the gate is at a depth

$$
h_c = 3 + 1 = 4\ \text{m}
$$

The area is

$$
A = 2(1) = 2\ \text{m}^2
$$

So the resultant force is

$$
F_R = \rho g h_c A = 1000(9.81)(4)(2) = 78480\ \text{N}
$$

$$
F_R \approx 78.5\ \text{kN}
$$

For the center of pressure,

$$
h_p = h_c + \frac{I_G}{h_cA}
$$

For a rectangle,

$$
I_G = \frac{bh^3}{12} = \frac{1(2^3)}{12} = \frac{8}{12} = 0.667\ \text{m}^4
$$

Thus

$$
h_p = 4 + \frac{0.667}{(4)(2)} \approx 4.08\ \text{m}
$$
:::

<!--
id: fluid-mechanics-23
note: engineering-fluid-mechanics
title: "Match Mass Flow Rates Across a Nozzle"
exam: exam-ii
skills: [Continuity, Mass Flow Rate]
-->

Water enters a $60$ mm pipe at $3.0\ \text{m/s}$ and leaves through a $30$ mm nozzle.

Find the nozzle exit speed and the mass flow rate.

:::solution
Compute the inlet area:

$$
A_1 = \frac{\pi}{4}(0.060)^2
$$

Then the flow rate is

$$
Q = A_1V_1 = \frac{\pi}{4}(0.060)^2(3.0) \approx 8.48\times 10^{-3}\ \text{m}^3/\text{s}
$$

At the nozzle,

$$
A_2 = \frac{\pi}{4}(0.030)^2
$$

so

$$
V_2 = \frac{Q}{A_2} = 12\ \text{m/s}
$$

The mass flow rate is

$$
\dot{m} = \rho Q = 1000(8.48\times 10^{-3}) \approx 8.48\ \text{kg/s}
$$
:::

<!--
id: fluid-mechanics-24
note: engineering-fluid-mechanics
title: "Find Pump Head in an Extended Bernoulli Balance"
exam: exam-ii
skills: [Bernoulli Equation, Head Loss, Pumps]
-->

Water is pumped from one large open reservoir to another large open reservoir that is $8$ m higher.

The system loses $3$ m of head along the way.

What pump head is required if the free-surface velocities are negligible?

:::solution
Between the two reservoir surfaces, the pressure terms cancel and the velocities are negligible. The pump must supply the elevation gain plus the losses:

$$
h_p = 8 + 3 = 11\ \text{m}
$$
:::

<!--
id: fluid-mechanics-25
note: engineering-fluid-mechanics
title: "Compute the Force on a 90-Degree Elbow"
exam: exam-ii
skills: [Momentum Equation, Control Volume]
-->

A $0.10$ m diameter pipe carries water at $4.0\ \text{m/s}$ through a 90-degree elbow.

Neglect pressure forces and weight.

What is the magnitude of the force the fluid exerts on the elbow?

:::solution
First find the mass flow rate:

$$
A = \frac{\pi}{4}(0.10)^2
$$

$$
\dot{m} = \rho AV = 1000\left(\frac{\pi}{4}(0.10)^2\right)(4.0) \approx 31.4\ \text{kg/s}
$$

The inlet velocity is along one axis and the outlet velocity is along a perpendicular axis, both with speed $4.0\ \text{m/s}$.

So the momentum change has components of magnitude

$$
\dot{m}V = 31.4(4.0) = 125.6\ \text{N}
$$

The resultant force magnitude is

$$
F = \sqrt{125.6^2 + 125.6^2} = 125.6\sqrt{2} \approx 177.6\ \text{N}
$$

So the fluid exerts a force of about $178\ \text{N}$ on the elbow.
:::

<!--
id: fluid-mechanics-26
note: engineering-fluid-mechanics
title: "Scale a Free-Surface Model"
exam: exam-ii
skills: [Froude Number, Similitude]
-->

A spillway model is built at $1:36$ scale using the same fluid as the prototype.

If the prototype surface speed is $6\ \text{m/s}$, what model speed gives Froude similarity?

:::solution
For free-surface flow, match the Froude number:

$$
\mathrm{Fr} = \frac{V}{\sqrt{gL}}
$$

So

$$
\frac{V_m}{V_p} = \sqrt{\frac{L_m}{L_p}} = \sqrt{\frac{1}{36}} = \frac{1}{6}
$$

Therefore

$$
V_m = 6\left(\frac{1}{6}\right) = 1\ \text{m/s}
$$

Exact Reynolds similarity is not possible at this scale with the same fluid, so Froude similarity is the governing choice.
:::

<!--
id: fluid-mechanics-27
note: engineering-fluid-mechanics
title: "Combine Major and Minor Losses"
exam: exam-ii
skills: [Darcy-Weisbach, Minor Losses, Head Loss]
-->

Water flows through a $40$ m long pipe of diameter $50$ mm at $2.0\ \text{m/s}$.

The Darcy friction factor is $0.03$, and the total minor-loss coefficient is $2.0$.

Find the total head loss and the equivalent pressure drop.

:::solution
First compute the velocity head:

$$
\frac{V^2}{2g} = \frac{2.0^2}{2(9.81)} \approx 0.204\ \text{m}
$$

Major loss:

$$
h_f = f\frac{L}{D}\frac{V^2}{2g}
= 0.03\left(\frac{40}{0.05}\right)(0.204)
$$

$$
h_f \approx 4.89\ \text{m}
$$

Minor loss:

$$
h_m = K\frac{V^2}{2g} = 2.0(0.204) \approx 0.41\ \text{m}
$$

Total head loss:

$$
h_L = h_f + h_m \approx 5.30\ \text{m}
$$

Equivalent pressure drop:

$$
\Delta p = \rho g h_L = 1000(9.81)(5.30) \approx 5.20\times 10^4\ \text{Pa}
$$

So the pressure drop is about $52\ \text{kPa}$.
:::

<!--
id: fluid-mechanics-28
note: engineering-fluid-mechanics
title: "Calculate Drag from a Coefficient"
exam: exam-ii
skills: [Drag Coefficient, External Flow]
-->

A bluff body in air has reference area $2.0\ \text{m}^2$ and drag coefficient $C_D = 1.2$.

The air density is $1.2\ \text{kg/m}^3$ and the speed is $25\ \text{m/s}$.

What drag force acts on the body?

:::solution
Use the drag-coefficient relation:

$$
C_D = \frac{D}{\tfrac{1}{2}\rho V^2 A}
$$

So

$$
D = \frac{1}{2}\rho V^2 A C_D
$$

Substitute the values:

$$
D = \frac{1}{2}(1.2)(25^2)(2.0)(1.2)
$$

$$
D = 900\ \text{N}
$$
:::

<!--
id: fluid-mechanics-31
note: engineering-fluid-mechanics
title: "Size the Inlet Pressure for a Rising Pipe"
exam: final
skills: [Continuity, Bernoulli Equation, Head Loss]
-->

Water flows at $0.015\ \text{m}^3/\text{s}$ through an $80$ m long, $0.10$ m diameter pipe that rises $5$ m and discharges to atmosphere at the same diameter.

Take the Darcy friction factor as $0.02$ and neglect minor losses.

What inlet gauge pressure is needed?

:::solution
First find the pipe speed:

$$
A = \frac{\pi}{4}(0.10)^2
$$

$$
V = \frac{Q}{A} = \frac{0.015}{\pi(0.10)^2/4} \approx 1.91\ \text{m/s}
$$

The velocity head is

$$
\frac{V^2}{2g} \approx \frac{1.91^2}{2(9.81)} \approx 0.186\ \text{m}
$$

The friction loss is

$$
h_f = f\frac{L}{D}\frac{V^2}{2g}
= 0.02\left(\frac{80}{0.10}\right)(0.186)
$$

$$
h_f \approx 2.97\ \text{m}
$$

Because the pipe diameter is the same at inlet and outlet, the velocity heads cancel. The inlet gauge pressure must supply the elevation rise plus the friction loss:

$$
\frac{p_{in}}{\gamma} = 5 + 2.97 = 7.97\ \text{m}
$$

Thus

$$
p_{in} = 1000(9.81)(7.97) \approx 7.82\times 10^4\ \text{Pa}
$$

So the required inlet gauge pressure is about $78.2\ \text{kPa}$.
:::

<!--
id: fluid-mechanics-32
note: engineering-fluid-mechanics
title: "Find the Force of a Jet on a Flat Plate"
exam: final
skills: [Momentum Equation, Jets]
-->

A $50$ mm diameter water jet moves at $20\ \text{m/s}$ and is brought to rest in the jet direction by a flat plate.

What average force does the jet exert on the plate?

:::solution
The jet area is

$$
A = \frac{\pi}{4}(0.050)^2
$$

The mass flow rate is

$$
\dot{m} = \rho AV = 1000\left(\frac{\pi}{4}(0.050)^2\right)(20)
\approx 39.3\ \text{kg/s}
$$

The change in velocity in the jet direction is from $20\ \text{m/s}$ to $0$, so the force magnitude is

$$
F = \dot{m}V \approx 39.3(20) \approx 785\ \text{N}
$$

So the jet exerts about $785\ \text{N}$ on the plate.
:::

<!--
id: fluid-mechanics-33
note: engineering-fluid-mechanics
title: "Choose the Right Similarity Condition for a Spillway Model"
exam: final
skills: [Froude Number, Similitude, Free-Surface Flow]
-->

A spillway model is built at $1:36$ scale in the same fluid as the prototype.

The prototype surface speed is $6\ \text{m/s}$.

Which similarity condition should be matched, and what model speed follows from that choice?

:::solution
For a free-surface flow, the key similarity condition is Froude similarity because gravity effects control the wave pattern and surface profile.

So

$$
\frac{V_m}{V_p} = \sqrt{\frac{L_m}{L_p}} = \sqrt{\frac{1}{36}} = \frac{1}{6}
$$

Therefore

$$
V_m = 6\left(\frac{1}{6}\right) = 1\ \text{m/s}
$$

Reynolds similarity is not matched exactly at this scale, but Froude similarity is the dominant choice.
:::

<!--
id: fluid-mechanics-34
note: engineering-fluid-mechanics
title: "Check Whether a Converging Nozzle Chokes"
exam: final
skills: [Mach Number, Choked Flow, Isentropic Relations]
-->

Air flows from a large reservoir with stagnation pressure $500\ \text{kPa}$ and stagnation temperature $300\ \text{K}$ through a converging nozzle.

The back pressure is $200\ \text{kPa}$.

Determine whether the nozzle is choked. If it is, find the throat pressure and throat temperature.

:::solution
For air, take $\gamma = 1.4$.

The critical pressure ratio for choking is

$$
\left(\frac{p^*}{p_0}\right)
=
\left(\frac{2}{\gamma+1}\right)^{\gamma/(\gamma-1)}
=
\left(\frac{2}{2.4}\right)^{3.5}
\approx 0.528
$$

The back-pressure ratio is

$$
\frac{p_b}{p_0} = \frac{200}{500} = 0.40
$$

Since $0.40 < 0.528$, the nozzle is choked.

At the throat, $\mathrm{Ma}=1$, so

$$
p^* = 0.528(500\ \text{kPa}) \approx 264\ \text{kPa}
$$

Also,

$$
\frac{T_0}{T^*} = 1 + \frac{\gamma-1}{2}(1^2) = 1.2
$$

so

$$
T^* = \frac{300}{1.2} = 250\ \text{K}
$$
:::

<!--
id: fluid-mechanics-35
note: engineering-fluid-mechanics
title: "Estimate the Minimum Flight Speed for Level Lift"
exam: final
skills: [Lift Coefficient, External Flow, Force Balance]
-->

A glider must support a weight of $5400\ \text{N}$ in level flight.

Its wing area is $16\ \text{m}^2$, the air density is $1.2\ \text{kg/m}^3$, and the lift coefficient is $0.8$.

Estimate the minimum speed for level flight.

:::solution
For level flight, lift equals weight:

$$
L = \frac{1}{2}\rho V^2 A C_L = W
$$

Solve for $V$:

$$
V = \sqrt{\frac{2W}{\rho A C_L}}
$$

Substitute the values:

$$
V = \sqrt{\frac{2(5400)}{(1.2)(16)(0.8)}}
$$

$$
V = \sqrt{703.125} \approx 26.5\ \text{m/s}
$$
:::

<!--
id: fluid-mechanics-41
note: engineering-fluid-mechanics
title: "Balance a Multi-Fluid Manometer"
exam: final
skills: [Hydrostatics, Manometers, Pressure]
-->

An open mercury surface is connected to a tank through a multi-fluid column. Starting at the open surface, move down $0.12$ m in mercury, then up $0.40$ m in water, then up $0.18$ m in oil with density $850\ \text{kg/m}^3$ to reach the tank gas.

What is the tank gauge pressure?

:::solution
Follow the pressure changes along the path:

$$
p_g = \rho_{\text{Hg}}g(0.12) - \rho_w g(0.40) - \rho_o g(0.18)
$$

Using $\rho_{\text{Hg}} = 13600\ \text{kg/m}^3$, $\rho_w = 1000\ \text{kg/m}^3$, and $\rho_o = 850\ \text{kg/m}^3$:

$$
p_g = 13600(9.81)(0.12) - 1000(9.81)(0.40) - 850(9.81)(0.18)
$$

$$
p_g \approx 10.6\ \text{kPa}
$$
:::

<!--
id: fluid-mechanics-42
note: engineering-fluid-mechanics
title: "Size the Pump for a Reservoir-to-Reservoir Line"
exam: final
skills: [Continuity, Bernoulli Equation, Head Loss, Pumps]
-->

Water is pumped from one large open reservoir to another large open reservoir that is $12$ m higher.

The line is $120$ m long, the pipe diameter is $0.08$ m, the Darcy friction factor is $0.025$, and the flow rate is $0.010\ \text{m}^3/\text{s}$.

Two 90-degree elbows have loss coefficients of $0.9$ each.

What pump head is required?

:::solution
First find the pipe speed:

$$
A = \frac{\pi}{4}(0.08)^2
$$

$$
V = \frac{Q}{A} = \frac{0.010}{\pi(0.08)^2/4} \approx 1.99\ \text{m/s}
$$

Then compute the velocity head:

$$
\frac{V^2}{2g} \approx \frac{1.99^2}{2(9.81)} \approx 0.202\ \text{m}
$$

Major loss:

$$
h_f = f\frac{L}{D}\frac{V^2}{2g}
= 0.025\left(\frac{120}{0.08}\right)(0.202)
\approx 7.56\ \text{m}
$$

Minor loss:

$$
h_m = K\frac{V^2}{2g}
= (0.9+0.9)(0.202)
\approx 0.36\ \text{m}
$$

Between the two reservoir surfaces, the pump must supply the elevation rise plus the losses:

$$
h_p = 12 + 7.56 + 0.36 \approx 19.9\ \text{m}
$$
:::

<!--
id: fluid-mechanics-43
note: engineering-fluid-mechanics
title: "Match Reynolds Number in a Wind-Tunnel Model"
exam: final
skills: [Reynolds Number, Similitude, External Flow]
-->

A car is tested in a wind tunnel with a $1:5$ scale model.

The prototype speed is $30\ \text{m/s}$, and the same air is used in both cases.

What model speed is needed to match Reynolds number?

:::solution
For Reynolds similarity,

$$
\mathrm{Re} \propto VL
$$

So

$$
V_mL_m = V_pL_p
$$

With a $1:5$ model, $L_m = L_p/5$, so

$$
V_m = 5V_p = 5(30) = 150\ \text{m/s}
$$

That speed is often impractical, which is why exact dynamic similarity is not always achievable in a wind tunnel.
:::

<!--
id: fluid-mechanics-44
note: engineering-fluid-mechanics
title: "Use Critical Pressure Ratio to Test for Choking"
exam: final
skills: [Mach Number, Choked Flow, Isentropic Relations]
-->

A converging nozzle receives air from a large reservoir at $p_0 = 500\ \text{kPa}$ and $T_0 = 300\ \text{K}$.

What is the largest back pressure that still allows choking? If the nozzle is choked, what are the throat pressure and throat temperature?

:::solution
For air, take $\gamma = 1.4$.

The critical pressure ratio is

$$
\frac{p^*}{p_0} = \left(\frac{2}{\gamma+1}\right)^{\gamma/(\gamma-1)} \approx 0.528
$$

So the largest back pressure that still allows choking is

$$
p_{b,\text{crit}} = 0.528(500\ \text{kPa}) \approx 264\ \text{kPa}
$$

At choking, the throat Mach number is $1$ and

$$
p^* \approx 264\ \text{kPa}
$$

Also,

$$
\frac{T_0}{T^*} = 1 + \frac{\gamma-1}{2}(1^2) = 1.2
$$

so

$$
T^* = \frac{300}{1.2} = 250\ \text{K}
$$
:::
