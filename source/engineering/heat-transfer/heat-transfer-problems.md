<!--
id: heat-transfer-11
note: engineering-heat-transfer
title: "Identify the Dominant Heat-Transfer Mode"
exam: exam-i
skills: [Three Modes, Heat Transfer Basics]
-->

Name the dominant mode in each situation:

- Heat flowing through a stationary brick wall
- Air removing heat from a hot engine block
- Sunlight warming a roof

:::solution
The dominant modes are:

- Through a stationary wall: conduction
- From the engine block to moving air: convection
- From the sun to the roof: radiation
:::

<!--
id: heat-transfer-12
note: engineering-heat-transfer
title: "Compute Heat Flow Through a Plane Wall"
exam: exam-i
skills: [Conduction, Fourier's Law]
-->

A plane wall has $k = 0.8\ \text{W/(m K)}$, area $A = 3\ \text{m}^2$, thickness $L = 0.05\ \text{m}$, and surface temperatures $T_1 = 60^\circ\text{C}$ and $T_2 = 20^\circ\text{C}$.

What is the heat transfer rate through the wall?

:::solution
Use Fourier's law for a plane wall:

$$
\dot{Q} = kA\frac{T_1 - T_2}{L}
$$

Substitute the values:

$$
\dot{Q} = 0.8(3)\frac{60 - 20}{0.05}
$$

$$
\dot{Q} = 1920\ \text{W}
$$
:::

<!--
id: heat-transfer-13
note: engineering-heat-transfer
title: "Find a Conduction Resistance"
exam: exam-i
skills: [Conduction, Thermal Resistance]
-->

A flat layer has thickness $L = 0.10\ \text{m}$, conductivity $k = 2\ \text{W/(m K)}$, and area $A = 4\ \text{m}^2$.

What is its conduction resistance?

:::solution
For a plane wall,

$$
R_{cond} = \frac{L}{kA}
$$

So

$$
R_{cond} = \frac{0.10}{2(4)} = \frac{0.10}{8} = 0.0125\ \text{K/W}
$$

Equivalently,

$$
R_{cond} = \frac{1}{80}\ \text{K/W}
$$
:::

<!--
id: heat-transfer-14
note: engineering-heat-transfer
title: "Use Newton's Law of Cooling"
exam: exam-i
skills: [Convection, Newton's Law of Cooling]
-->

A surface has area $A_s = 1.5\ \text{m}^2$, convection coefficient $h = 12\ \text{W/(m}^2\text{ K)}$, surface temperature $T_s = 85^\circ\text{C}$, and surrounding fluid temperature $T_\infty = 25^\circ\text{C}$.

What is the convective heat transfer rate?

:::solution
Use Newton's law of cooling:

$$
\dot{Q} = hA_s(T_s - T_\infty)
$$

Substitute:

$$
\dot{Q} = 12(1.5)(85 - 25)
$$

$$
\dot{Q} = 12(1.5)(60) = 1080\ \text{W}
$$
:::

<!--
id: heat-transfer-15
note: engineering-heat-transfer
title: "Find a Convection Resistance"
exam: exam-i
skills: [Convection, Thermal Resistance]
-->

A surface has $h = 15\ \text{W/(m}^2\text{ K)}$ and area $A_s = 0.4\ \text{m}^2$.

What is the convection resistance?

:::solution
Use

$$
R_{conv} = \frac{1}{hA_s}
$$

So

$$
R_{conv} = \frac{1}{15(0.4)} = \frac{1}{6}\ \text{K/W}
$$

That is approximately

$$
0.167\ \text{K/W}
$$
:::

<!--
id: heat-transfer-16
note: engineering-heat-transfer
title: "Evaluate Linearized Radiation Loss"
exam: exam-i
skills: [Radiation, Linearized Radiation]
-->

A hot surface has area $A = 2.5\ \text{m}^2$ and linearized radiation coefficient $h_r = 6\ \text{W/(m}^2\text{ K)}$.

If the surface is $30\ \text{K}$ warmer than the surroundings, what is the radiative heat transfer rate?

:::solution
Using the linearized radiation model,

$$
\dot{Q}_{rad} = h_rA(T_s - T_{sur})
$$

Substitute:

$$
\dot{Q}_{rad} = 6(2.5)(30)
$$

$$
\dot{Q}_{rad} = 450\ \text{W}
$$
:::

<!--
id: heat-transfer-17
note: engineering-heat-transfer
title: "Compute Heat Generated in a Solid"
exam: exam-i
skills: [Heat Generation, Volume]
-->

A solid has volumetric heat generation rate $\dot{q}''' = 2.5\times 10^5\ \text{W/m}^3$ and volume $V = 0.004\ \text{m}^3$.

What is the total heat generation rate?

:::solution
Use

$$
\dot{Q}_{gen} = \dot{q}'''V
$$

So

$$
\dot{Q}_{gen} = (2.5\times 10^5)(0.004) = 1000\ \text{W}
$$
:::

<!--
id: heat-transfer-18
note: engineering-heat-transfer
title: "Add Resistances in Series"
exam: exam-i
skills: [Thermal Resistance, Series Networks]
-->

Three thermal resistances are connected in series:

$$
R_1 = 0.10\ \text{K/W},\quad R_2 = 0.25\ \text{K/W},\quad R_3 = 0.15\ \text{K/W}
$$

What is the equivalent resistance?

:::solution
For resistances in series,

$$
R_{eq} = R_1 + R_2 + R_3
$$

So

$$
R_{eq} = 0.10 + 0.25 + 0.15 = 0.50\ \text{K/W}
$$
:::

<!--
id: heat-transfer-19
note: engineering-heat-transfer
title: "Use Reciprocity for a View Factor"
exam: exam-i
skills: [Radiation, View Factors]
-->

Two surfaces have areas $A_1 = 2\ \text{m}^2$ and $A_2 = 3\ \text{m}^2$.

If the view factor from surface 1 to surface 2 is $F_{1\to 2} = 0.30$, what is $F_{2\to 1}$?

:::solution
Use reciprocity:

$$
A_1F_{1\to 2} = A_2F_{2\to 1}
$$

Solve for $F_{2\to 1}$:

$$
F_{2\to 1} = \frac{A_1F_{1\to 2}}{A_2}
$$

$$
F_{2\to 1} = \frac{2(0.30)}{3} = 0.20
$$
:::

<!--
id: heat-transfer-110
note: engineering-heat-transfer
title: "Compute a Biot Number"
exam: exam-i
skills: [Biot Number, Lumped Capacitance]
-->

A solid has $h = 20\ \text{W/(m}^2\text{ K)}$, characteristic length $L_c = 0.01\ \text{m}$, and conductivity $k = 200\ \text{W/(m K)}$.

What is the Biot number, and is the lumped-capacitance assumption reasonable?

:::solution
Use

$$
Bi = \frac{hL_c}{k}
$$

So

$$
Bi = \frac{20(0.01)}{200} = 0.001
$$

Since $Bi \ll 0.1$, the lumped-capacitance approximation is reasonable.
:::

<!--
id: heat-transfer-21
note: engineering-heat-transfer
title: "Steady Heat Loss Through a Composite Wall"
exam: exam-ii
skills: [Composite Walls, Convection, Thermal Resistance]
-->

A wall separates indoor air at $100^\circ\text{C}$ from outdoor air at $20^\circ\text{C}$.

The wall has area $A = 2\ \text{m}^2$, inner convection coefficient $h_1 = 10\ \text{W/(m}^2\text{ K)}$, outer convection coefficient $h_2 = 20\ \text{W/(m}^2\text{ K)}$, thickness $L = 0.10\ \text{m}$, and conductivity $k = 0.5\ \text{W/(m K)}$.

What is the heat transfer rate?

:::solution
Build the resistance network:

$$
R_{tot} = \frac{1}{h_1A} + \frac{L}{kA} + \frac{1}{h_2A}
$$

Compute each term:

$$
R_{tot} = \frac{1}{10(2)} + \frac{0.10}{0.5(2)} + \frac{1}{20(2)}
$$

$$
R_{tot} = 0.05 + 0.10 + 0.025 = 0.175\ \text{K/W}
$$

Now use

$$
\dot{Q} = \frac{T_{\infty,1} - T_{\infty,2}}{R_{tot}}
$$

so

$$
\dot{Q} = \frac{100 - 20}{0.175} \approx 457\ \text{W}
$$
:::

<!--
id: heat-transfer-22
note: engineering-heat-transfer
title: "Heat Flow Through Cylindrical Insulation"
exam: exam-ii
skills: [Cylindrical Conduction, Thermal Resistance]
-->

A pipe has inner radius $r_1 = 0.02\ \text{m}$ and outer radius $r_2 = 0.04\ \text{m}$.

The insulation has conductivity $k = 0.04\ \text{W/(m K)}$ and length $L = 2\ \text{m}$.

What is the cylindrical conduction resistance of the insulation?

:::solution
For radial conduction through a cylinder,

$$
R_{cond,cyl} = \frac{\ln(r_2/r_1)}{2\pi kL}
$$

Substitute:

$$
R_{cond,cyl} = \frac{\ln(0.04/0.02)}{2\pi(0.04)(2)}
$$

$$
R_{cond,cyl} = \frac{\ln 2}{0.5027} \approx 1.38\ \text{K/W}
$$
:::

<!--
id: heat-transfer-23
note: engineering-heat-transfer
title: "Track Interface Temperatures in a Resistance Network"
exam: exam-ii
skills: [Contact Resistance, Thermal Resistance]
-->

A hot surface at $80^\circ\text{C}$ is connected to a cold surface at $20^\circ\text{C}$ through three resistances in series:

$$
R_1 = 0.20\ \text{K/W},\quad R_{contact} = 0.10\ \text{K/W},\quad R_2 = 0.20\ \text{K/W}
$$

What is the heat transfer rate, and what is the temperature immediately after the contact resistance?

:::solution
First find the total resistance:

$$
R_{tot} = 0.20 + 0.10 + 0.20 = 0.50\ \text{K/W}
$$

Then the heat rate is

$$
\dot{Q} = \frac{80 - 20}{0.50} = 120\ \text{W}
$$

The temperature drop across the first resistance is

$$
\Delta T_1 = \dot{Q}R_1 = 120(0.20) = 24^\circ\text{C}
$$

The temperature drop across the contact resistance is

$$
\Delta T_{contact} = \dot{Q}R_{contact} = 120(0.10) = 12^\circ\text{C}
$$

So the temperature immediately after the contact resistance is

$$
80 - 24 - 12 = 44^\circ\text{C}
$$
:::

<!--
id: heat-transfer-24
note: engineering-heat-transfer
title: "Lumped Cooling After a Fixed Time"
exam: exam-ii
skills: [Transient Heat Transfer, Lumped Capacitance]
-->

A body has mass $m = 2\ \text{kg}$ and specific heat $c_p = 500\ \text{J/(kg K)}$.

It cools by convection with $h = 10\ \text{W/(m}^2\text{ K)}$ and area $A_s = 0.5\ \text{m}^2$.

The initial temperature is $100^\circ\text{C}$, the surrounding temperature is $20^\circ\text{C}$, and the time is $100\ \text{s}$.

What is the body temperature after 100 seconds?

:::solution
For lumped cooling,

$$
T(t) = T_\infty + (T_i - T_\infty)\exp\left(-\frac{t}{\tau}\right)
$$

where

$$
\tau = \frac{mc_p}{hA_s}
$$

Compute the time constant:

$$
\tau = \frac{2(500)}{10(0.5)} = 200\ \text{s}
$$

Now evaluate the temperature:

$$
T(100) = 20 + (100 - 20)\exp\left(-\frac{100}{200}\right)
$$

$$
T(100) = 20 + 80e^{-0.5} \approx 68.5^\circ\text{C}
$$
:::

<!--
id: heat-transfer-25
note: engineering-heat-transfer
title: "Cold-Stream Outlet Temperature in a Heat Exchanger"
exam: exam-ii
skills: [Heat Exchangers, Energy Balance]
-->

A heat exchanger transfers heat from a hot stream to a cold stream.

The hot stream has $\dot{m}_h = 0.5\ \text{kg/s}$, $c_{p,h} = 4000\ \text{J/(kg K)}$, and cools from $90^\circ\text{C}$ to $60^\circ\text{C}$.

The cold stream has $\dot{m}_c = 1.0\ \text{kg/s}$ and $c_{p,c} = 3000\ \text{J/(kg K)}$.

If losses to the surroundings are negligible, what is the cold-stream outlet temperature?

:::solution
Use the energy balance:

$$
\dot{Q} = \dot{m}_h c_{p,h}(T_{h,in} - T_{h,out})
$$

So

$$
\dot{Q} = 0.5(4000)(90 - 60) = 60000\ \text{W}
$$

Set this equal to the cold-side heat gain:

$$
60000 = 1.0(3000)(T_{c,out} - 20)
$$

Solve:

$$
T_{c,out} - 20 = 20
$$

$$
T_{c,out} = 40^\circ\text{C}
$$
:::

<!--
id: heat-transfer-26
note: engineering-heat-transfer
title: "Required Area from LMTD"
exam: exam-ii
skills: [Heat Exchangers, LMTD]
-->

A counterflow heat exchanger has:

- Hot stream: $\dot{m}_h = 1.0\ \text{kg/s}$, $c_{p,h} = 4200\ \text{J/(kg K)}$, $100^\circ\text{C} \to 75^\circ\text{C}$
- Cold stream: $\dot{m}_c = 0.7\ \text{kg/s}$, $c_{p,c} = 3000\ \text{J/(kg K)}$, $20^\circ\text{C} \to 70^\circ\text{C}$
- Overall heat transfer coefficient $U = 350\ \text{W/(m}^2\text{ K)}$

What area is required?

:::solution
First compute the heat transfer rate from the hot stream:

$$
\dot{Q} = \dot{m}_h c_{p,h}(T_{h,in} - T_{h,out})
$$

$$
\dot{Q} = 1.0(4200)(100 - 75) = 105000\ \text{W}
$$

Check the cold side:

$$
0.7(3000)(70 - 20) = 105000\ \text{W}
$$

Now find the terminal temperature differences:

$$
\Delta T_1 = T_{h,in} - T_{c,out} = 100 - 70 = 30
$$

$$
\Delta T_2 = T_{h,out} - T_{c,in} = 75 - 20 = 55
$$

The log-mean temperature difference is

$$
\Delta T_{lm} = \frac{\Delta T_2 - \Delta T_1}{\ln(\Delta T_2/\Delta T_1)}
$$

$$
\Delta T_{lm} = \frac{55 - 30}{\ln(55/30)} \approx 41.2\ \text{K}
$$

Use

$$
\dot{Q} = UA\Delta T_{lm}
$$

so

$$
A = \frac{105000}{350(41.2)} \approx 7.3\ \text{m}^2
$$
:::

<!--
id: heat-transfer-27
note: engineering-heat-transfer
title: "Recover a Heat Transfer Coefficient from Nusselt Number"
exam: exam-ii
skills: [Nusselt Number, Convection]
-->

A correlation gives $Nu = 25$ for a flow over a surface with $k = 0.6\ \text{W/(m K)}$ and characteristic length $L_c = 0.02\ \text{m}$.

What convection coefficient does this imply?

:::solution
Use the definition of the Nusselt number:

$$
Nu = \frac{hL_c}{k}
$$

Solve for $h$:

$$
h = \frac{Nu\,k}{L_c}
$$

Substitute:

$$
h = \frac{25(0.6)}{0.02} = 750\ \text{W/(m}^2\text{ K)}
$$
:::

<!--
id: heat-transfer-28
note: engineering-heat-transfer
title: "Compute Reynolds and Prandtl Numbers"
exam: exam-ii
skills: [Reynolds Number, Prandtl Number]
-->

A fluid has $\rho = 1.2\ \text{kg/m}^3$, $V = 10\ \text{m/s}$, $L = 0.05\ \text{m}$, $\mu = 1.8\times 10^{-5}\ \text{Pa s}$, $c_p = 1005\ \text{J/(kg K)}$, and $k = 0.026\ \text{W/(m K)}$.

Compute $Re$ and $Pr$. What does the Reynolds number suggest about the flow?

:::solution
First the Reynolds number:

$$
Re = \frac{\rho VL}{\mu}
$$

$$
Re = \frac{1.2(10)(0.05)}{1.8\times 10^{-5}}
$$

$$
Re \approx 33333
$$

Now the Prandtl number:

$$
Pr = \frac{\mu c_p}{k}
$$

$$
Pr = \frac{(1.8\times 10^{-5})(1005)}{0.026} \approx 0.70
$$

A large Reynolds number suggests inertia effects are strong and turbulence is more likely.
:::

<!--
id: heat-transfer-31
note: engineering-heat-transfer
title: "Heat Loss Through a Layered Wall in a Room"
exam: final
skills: [Composite Walls, Convection, Thermal Resistance]
-->

Indoor air is at $22^\circ\text{C}$ and outdoor air is at $-8^\circ\text{C}$.

A wall has area $A = 10\ \text{m}^2$, inside convection coefficient $h_1 = 8\ \text{W/(m}^2\text{ K)}$, outside convection coefficient $h_2 = 25\ \text{W/(m}^2\text{ K)}$, drywall thickness $L_1 = 0.013\ \text{m}$ with $k_1 = 0.17\ \text{W/(m K)}$, and insulation thickness $L_2 = 0.09\ \text{m}$ with $k_2 = 0.04\ \text{W/(m K)}$.

What is the heat loss rate?

:::solution
Write the total resistance:

$$
R_{tot} = \frac{1}{h_1A} + \frac{L_1}{k_1A} + \frac{L_2}{k_2A} + \frac{1}{h_2A}
$$

Compute each term:

$$
R_{tot} = \frac{1}{8(10)} + \frac{0.013}{0.17(10)} + \frac{0.09}{0.04(10)} + \frac{1}{25(10)}
$$

$$
R_{tot} \approx 0.0125 + 0.0076 + 0.225 + 0.004 = 0.2491\ \text{K/W}
$$

Then

$$
\dot{Q} = \frac{22 - (-8)}{0.2491} \approx 120\ \text{W}
$$
:::

<!--
id: heat-transfer-32
note: engineering-heat-transfer
title: "Decide Whether Added Pipe Insulation Helps"
exam: final
skills: [Critical Radius, Cylindrical Conduction]
-->

A pipe has outer radius $r_0 = 0.015\ \text{m}$, insulation conductivity $k = 0.06\ \text{W/(m K)}$, and surrounding convection coefficient $h = 3\ \text{W/(m}^2\text{ K)}$.

If a thin layer of insulation is added, will the heat loss initially increase or decrease?

:::solution
Compute the critical radius for a cylinder:

$$
r_{crit} = \frac{k}{h}
$$

So

$$
r_{crit} = \frac{0.06}{3} = 0.02\ \text{m}
$$

Because the current radius $0.015\ \text{m}$ is smaller than the critical radius, adding a thin layer of insulation initially increases heat loss.
:::

<!--
id: heat-transfer-33
note: engineering-heat-transfer
title: "Combine Convection and Radiation"
exam: final
skills: [Radiation, Convection, Thermal Resistance]
-->

A surface has area $A = 1.2\ \text{m}^2$, surface temperature $T_s = 120^\circ\text{C}$, ambient temperature $T_\infty = 20^\circ\text{C}$, convection coefficient $h = 10\ \text{W/(m}^2\text{ K)}$, and linearized radiation coefficient $h_r = 5\ \text{W/(m}^2\text{ K)}$.

If the surrounding radiation temperature is the same as the ambient temperature, what is the total heat loss rate?

:::solution
Treat convection and linearized radiation as parallel heat-transfer paths:

$$
\dot{Q} = (h + h_r)A(T_s - T_\infty)
$$

Substitute:

$$
\dot{Q} = (10 + 5)(1.2)(120 - 20)
$$

$$
\dot{Q} = 15(1.2)(100) = 1800\ \text{W}
$$
:::

<!--
id: heat-transfer-34
note: engineering-heat-transfer
title: "Time to Reach a Target Temperature"
exam: final
skills: [Transient Heat Transfer, Lumped Capacitance]
-->

A body has a time constant of $\tau = 60\ \text{s}$, initial temperature $T_i = 20^\circ\text{C}$, and surrounding temperature $T_\infty = 200^\circ\text{C}$.

How long does it take to reach $110^\circ\text{C}$?

:::solution
Use the lumped transient relation:

$$
\frac{T(t) - T_\infty}{T_i - T_\infty} = \exp\left(-\frac{t}{\tau}\right)
$$

Substitute the target temperature:

$$
\frac{110 - 200}{20 - 200} = \exp\left(-\frac{t}{60}\right)
$$

The left side is

$$
\frac{-90}{-180} = 0.5
$$

So

$$
\exp\left(-\frac{t}{60}\right) = 0.5
$$

Take the natural log:

$$
t = 60\ln 2 \approx 41.6\ \text{s}
$$
:::

<!--
id: heat-transfer-35
note: engineering-heat-transfer
title: "Heat Flow Through a Bolted Joint with Contact Resistance"
exam: final
skills: [Contact Resistance, Thermal Resistance, Composite Systems]
-->

Two plates in a bolted joint are connected by conduction resistances $R_1 = 0.20\ \text{K/W}$ and $R_2 = 0.20\ \text{K/W}$, with a contact resistance of $R_{contact} = 0.10\ \text{K/W}$ between them.

The hot side is at $80^\circ\text{C}$ and the cold side is at $20^\circ\text{C}$.

What is the heat transfer rate, and what temperature drop occurs across the contact resistance?

:::solution
Add the resistances:

$$
R_{tot} = 0.20 + 0.10 + 0.20 = 0.50\ \text{K/W}
$$

Then

$$
\dot{Q} = \frac{80 - 20}{0.50} = 120\ \text{W}
$$

The drop across the contact resistance is

$$
\Delta T_{contact} = \dot{Q}R_{contact} = 120(0.10) = 12^\circ\text{C}
$$
:::

<!--
id: heat-transfer-41
note: engineering-heat-transfer
title: "Reduce a Network with Parallel Paths"
exam: final
skills: [Parallel Networks, Thermal Resistance]
-->

A thermal circuit has a hot-side resistance of $0.15\ \text{K/W}$, then two parallel paths with resistances $0.60\ \text{K/W}$ and $0.30\ \text{K/W}$, and finally a cold-side resistance of $0.05\ \text{K/W}$.

If the hot side is at $60^\circ\text{C}$ and the cold side is at $10^\circ\text{C}$, what is the total heat transfer rate?

:::solution
First reduce the parallel part:

$$
\frac{1}{R_p} = \frac{1}{0.60} + \frac{1}{0.30}
$$

$$
\frac{1}{R_p} = 1.667 + 3.333 = 5
$$

So

$$
R_p = 0.20\ \text{K/W}
$$

Now add the series resistances:

$$
R_{tot} = 0.15 + 0.20 + 0.05 = 0.40\ \text{K/W}
$$

Finally,

$$
\dot{Q} = \frac{60 - 10}{0.40} = 125\ \text{W}
$$
:::

<!--
id: heat-transfer-42
note: engineering-heat-transfer
title: "Check Lumped Validity and Predict Cooling"
exam: final
skills: [Biot Number, Lumped Capacitance, Transient Heat Transfer]
-->

A small metal part has $h = 18\ \text{W/(m}^2\text{ K)}$, $L_c = 0.005\ \text{m}$, $k = 120\ \text{W/(m K)}$, mass $m = 0.8\ \text{kg}$, specific heat $c_p = 500\ \text{J/(kg K)}$, and area $A_s = 0.4\ \text{m}^2$.

Its initial temperature is $100^\circ\text{C}$, the surroundings are at $25^\circ\text{C}$, and the time of interest is $100\ \text{s}$.

Is the lumped-capacitance model reasonable, and what is the temperature after 100 seconds?

:::solution
Check the Biot number:

$$
Bi = \frac{hL_c}{k} = \frac{18(0.005)}{120} = 0.00075
$$

Since $Bi \ll 0.1$, the lumped model is reasonable.

Now find the time constant:

$$
\tau = \frac{mc_p}{hA_s} = \frac{0.8(500)}{18(0.4)} = \frac{400}{7.2} \approx 55.6\ \text{s}
$$

Use the lumped cooling formula:

$$
T(t) = T_\infty + (T_i - T_\infty)\exp\left(-\frac{t}{\tau}\right)
$$

So

$$
T(100) = 25 + 75\exp\left(-\frac{100}{55.6}\right) \approx 37.4^\circ\text{C}
$$
:::

<!--
id: heat-transfer-43
note: engineering-heat-transfer
title: "Design a Counterflow Exchanger Area"
exam: final
skills: [Heat Exchangers, LMTD, Energy Balance]
-->

A counterflow heat exchanger has the following data:

- Hot stream: $\dot{m}_h = 1.0\ \text{kg/s}$, $c_{p,h} = 4200\ \text{J/(kg K)}$, $100^\circ\text{C} \to 75^\circ\text{C}$
- Cold stream: $\dot{m}_c = 0.7\ \text{kg/s}$, $c_{p,c} = 3000\ \text{J/(kg K)}$, $20^\circ\text{C} \to 70^\circ\text{C}$
- Overall heat transfer coefficient $U = 350\ \text{W/(m}^2\text{ K)}$

What area is required?

:::solution
The heat transfer rate is

$$
\dot{Q} = 1.0(4200)(100 - 75) = 105000\ \text{W}
$$

The terminal temperature differences are

$$
\Delta T_1 = 100 - 70 = 30
$$

$$
\Delta T_2 = 75 - 20 = 55
$$

So the log-mean temperature difference is

$$
\Delta T_{lm} = \frac{55 - 30}{\ln(55/30)} \approx 41.2\ \text{K}
$$

Now solve for area:

$$
A = \frac{\dot{Q}}{U\Delta T_{lm}} = \frac{105000}{350(41.2)} \approx 7.3\ \text{m}^2
$$
:::

<!--
id: heat-transfer-44
note: engineering-heat-transfer
title: "Write the Governing Model for Radiation Cooling"
exam: final
skills: [Radiation, Lumped Capacitance, Problem-Solving Workflow]
-->

A small object in a vacuum cools only by radiation to a large surrounding enclosure. The object is small enough that the lumped-capacitance model is valid.

What governing equation should you write for $T(t)$?

:::solution
Because the object is lumped, its temperature is uniform in space and depends only on time. The energy balance is

$$
mc_p\frac{dT}{dt} = -\varepsilon\sigma A\left(T^4 - T_{sur}^4\right)
$$

If you want a linearized network model, you can write

$$
mc_p\frac{dT}{dt} = -h_rA(T - T_{sur})
$$

with

$$
h_r \approx \varepsilon\sigma(T_s + T_{sur})(T_s^2 + T_{sur}^2)
$$

So the workflow is: identify radiation as the only mode, confirm lumped behavior, and then write the transient energy balance.
:::
