<!--
id: thermodynamics-i-11
note: physics-thermodynamics-i
title: "Identify a Closed System"
exam: exam-i
skills: [System type, Boundaries]
-->

A gas is sealed inside a piston-cylinder device. The piston can move, and heat can cross the boundary, but no mass can enter or leave.

What type of system is this?

:::solution
This is a **closed system** or **control mass**.

Mass does not cross the boundary, but energy can cross as heat or work.
:::

<!--
id: thermodynamics-i-12
note: physics-thermodynamics-i
title: "Classify Properties by Size Dependence"
exam: exam-i
skills: [Extensive properties, Intensive properties]
-->

Which of the following are extensive properties?

$$
m,\quad P,\quad H,\quad T
$$

:::solution
An extensive property depends on system size.

So the extensive properties are

$$
m \text{ and } H
$$

Pressure $P$ and temperature $T$ are intensive properties.
:::

<!--
id: thermodynamics-i-13
note: physics-thermodynamics-i
title: "Convert Gauge Pressure to Absolute Pressure"
exam: exam-i
skills: [Pressure, Units]
-->

A tire gauge reads $220\ \text{kPa}$ and the atmospheric pressure is $101\ \text{kPa}$.

What is the absolute pressure of the tire?

:::solution
Use

$$
P_{abs} = P_{gage} + P_{atm}
$$

So

$$
P_{abs} = 220 + 101 = 321\ \text{kPa}
$$
:::

<!--
id: thermodynamics-i-14
note: physics-thermodynamics-i
title: "Convert Celsius to Kelvin"
exam: exam-i
skills: [Temperature, Units]
-->

Convert $27^\circ\text{C}$ to Kelvin.

:::solution
Use the absolute temperature relation:

$$
T(K) = T(^\circ C) + 273.15
$$

So

$$
T = 27 + 273.15 = 300.15\ \text{K}
$$
:::

<!--
id: thermodynamics-i-15
note: physics-thermodynamics-i
title: "Choose the Phase Region"
exam: exam-i
skills: [Pure substances, Phase regions]
-->

A pure substance is at a pressure of $500\ \text{kPa}$ and a temperature below $T_{sat}$ at that pressure.

What phase region is it in?

:::solution
If the temperature is below the saturation temperature at the given pressure, the substance is in the **compressed liquid** or **subcooled liquid** region.
:::

<!--
id: thermodynamics-i-16
note: physics-thermodynamics-i
title: "Compute Quality from Masses"
exam: exam-i
skills: [Quality, Saturated mixtures]
-->

A saturated liquid-vapor mixture contains $3\ \text{kg}$ of saturated liquid and $9\ \text{kg}$ of saturated vapor.

What is the quality $x$?

:::solution
Use

$$
x = \frac{m_g}{m_f + m_g}
$$

So

$$
x = \frac{9}{3+9} = \frac{9}{12} = 0.75
$$
:::

<!--
id: thermodynamics-i-17
note: physics-thermodynamics-i
title: "Use the Ideal Gas Law"
exam: exam-i
skills: [Ideal gas, Equation of state]
-->

An ideal gas has

$$
P = 300\ \text{kPa},\qquad T = 300\ \text{K},\qquad R = 0.287\ \text{kJ/(kg\cdot K)}.
$$

What is the specific volume $v$?

:::solution
Use the specific ideal gas law:

$$
Pv = RT
$$

So

$$
v = \frac{RT}{P} = \frac{0.287(300)}{300} = 0.287\ \text{m}^3/\text{kg}
$$
:::

<!--
id: thermodynamics-i-18
note: physics-thermodynamics-i
title: "Find Constant-Pressure Boundary Work"
exam: exam-i
skills: [Boundary work, Sign conventions]
-->

A gas expands at constant pressure from $0.50\ \text{m}^3$ to $0.80\ \text{m}^3$ while the pressure remains $150\ \text{kPa}$.

What is the boundary work?

:::solution
For constant pressure,

$$
W_b = P(V_2 - V_1)
$$

So

$$
W_b = 150(0.80 - 0.50) = 150(0.30) = 45\ \text{kJ}
$$

The work is positive because the system does work on the surroundings.
:::

<!--
id: thermodynamics-i-19
note: physics-thermodynamics-i
title: "Apply the Closed-System First Law"
exam: exam-i
skills: [First Law, Closed systems]
-->

A closed system receives $120\ \text{kJ}$ of heat and does $35\ \text{kJ}$ of work. Neglect changes in kinetic and potential energy.

What is the change in internal energy?

:::solution
Use the closed-system First Law:

$$
\Delta U = Q - W
$$

So

$$
\Delta U = 120 - 35 = 85\ \text{kJ}
$$
:::

<!--
id: thermodynamics-i-110
note: physics-thermodynamics-i
title: "Compute Mass Flow Rate"
exam: exam-i
skills: [Mass flow rate, Control volumes]
-->

Air with density $1.2\ \text{kg/m}^3$ flows through a duct with area $0.050\ \text{m}^2$ at a speed of $20\ \text{m/s}$.

What is the mass flow rate?

:::solution
Use

$$
\dot{m} = \rho A V
$$

So

$$
\dot{m} = 1.2(0.050)(20) = 1.2\ \text{kg/s}
$$
:::

<!--
id: thermodynamics-i-21
note: physics-thermodynamics-i
title: "Find a Saturated Mixture Property"
exam: exam-ii
skills: [Saturated mixtures, Quality]
-->

A saturated mixture has

$$
u_f = 500\ \text{kJ/kg},\qquad u_{fg} = 1500\ \text{kJ/kg},\qquad x = 0.20.
$$

What is the specific internal energy $u$?

:::solution
Use the saturated mixture relation:

$$
u = u_f + x u_{fg}
$$

So

$$
u = 500 + 0.20(1500) = 500 + 300 = 800\ \text{kJ/kg}
$$
:::

<!--
id: thermodynamics-i-22
note: physics-thermodynamics-i
title: "Approximate a Compressed-Liquid Enthalpy"
exam: exam-ii
skills: [Compressed liquid approximation, Property data]
-->

At a given temperature, a liquid has

$$
h_f(T) = 340.0\ \text{kJ/kg},\qquad v_f(T) = 0.0010\ \text{m}^3/\text{kg}
$$

and

$$
P - P_{sat}(T) = 500\ \text{kPa}.
$$

Approximate the compressed-liquid enthalpy $h$.

:::solution
Use the compressed-liquid approximation:

$$
h \approx h_f(T) + v_f(T)\left[P - P_{sat}(T)\right]
$$

So

$$
h \approx 340.0 + 0.0010(500)
$$

Since $1\ \text{kPa}\cdot\text{m}^3/\text{kg} = 1\ \text{kJ/kg}$,

$$
h \approx 340.5\ \text{kJ/kg}
$$
:::

<!--
id: thermodynamics-i-23
note: physics-thermodynamics-i
title: "Use an Isentropic Ideal-Gas Relation"
exam: exam-ii
skills: [Isentropic ideal gas relations, Ideal gas]
-->

Air with $k = 1.4$ is compressed isentropically from $P_1 = 100\ \text{kPa}$ and $T_1 = 300\ \text{K}$ to $P_2 = 400\ \text{kPa}$.

What is the final temperature $T_2$?

:::solution
For an isentropic ideal gas,

$$
\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(k-1)/k}
$$

Substitute the values:

$$
T_2 = 300\left(\frac{400}{100}\right)^{0.4/1.4}
$$

$$
T_2 \approx 300(4^{0.2857}) \approx 446\ \text{K}
$$
:::

<!--
id: thermodynamics-i-24
note: physics-thermodynamics-i
title: "Evaluate Polytropic Boundary Work"
exam: exam-ii
skills: [Polytropic work, Boundary work, Ideal gas]
-->

An ideal gas undergoes an isothermal expansion. At the initial state,

$$
P_1 = 200\ \text{kPa},\qquad V_1 = 0.30\ \text{m}^3,
$$

and the final volume is $V_2 = 0.60\ \text{m}^3$.

What is the boundary work?

:::solution
For an ideal-gas isothermal process, $n=1$ and

$$
W_b = P_1V_1 \ln\left(\frac{V_2}{V_1}\right)
$$

Compute:

$$
W_b = 200(0.30)\ln(2)
$$

$$
W_b = 60(0.693) \approx 41.6\ \text{kJ}
$$
:::

<!--
id: thermodynamics-i-25
note: physics-thermodynamics-i
title: "Solve a Spring-Loaded Energy Balance"
exam: exam-ii
skills: [Spring work, First Law, Closed systems]
-->

A piston-cylinder device compresses a linear spring from $x_1 = 0$ to $x_2 = 0.20\ \text{m}$. The spring constant is $k = 8.0\ \text{kN/m}$.

During the process, the closed system receives $Q = 1.0\ \text{kJ}$ of heat and no other work occurs.

Find the spring work and the change in internal energy.

:::solution
For a linear spring,

$$
W = \frac{1}{2}k(x_2^2 - x_1^2)
$$

So

$$
W = \frac{1}{2}(8000)(0.20^2) = 160\ \text{J} = 0.16\ \text{kJ}
$$

Now apply the First Law:

$$
\Delta U = Q - W
$$

$$
\Delta U = 1.0 - 0.16 = 0.84\ \text{kJ}
$$
:::

<!--
id: thermodynamics-i-26
note: physics-thermodynamics-i
title: "Analyze a Turbine"
exam: exam-ii
skills: [Turbine, Steady-flow energy]
-->

A steady adiabatic turbine has negligible kinetic and potential energy changes. The mass flow rate is $3\ \text{kg/s}$, the inlet enthalpy is $h_1 = 3200\ \text{kJ/kg}$, and the outlet enthalpy is $h_2 = 2500\ \text{kJ/kg}$.

What is the power output of the turbine?

:::solution
For an adiabatic turbine with negligible kinetic and potential energy changes,

$$
\dot{W}_{out} = \dot{m}(h_1 - h_2)
$$

So

$$
\dot{W}_{out} = 3(3200 - 2500) = 3(700) = 2100\ \text{kW}
$$
:::

<!--
id: thermodynamics-i-27
note: physics-thermodynamics-i
title: "Analyze a Throttling Valve"
exam: exam-ii
skills: [Throttling valve, Enthalpy]
-->

A throttling valve drops the pressure of a fluid from $900\ \text{kPa}$ to $200\ \text{kPa}$.

If the inlet enthalpy is $h_1 = 245\ \text{kJ/kg}$, what is the outlet enthalpy?

:::solution
For throttling,

$$
h_1 = h_2
$$

So

$$
h_2 = 245\ \text{kJ/kg}
$$
:::

<!--
id: thermodynamics-i-28
note: physics-thermodynamics-i
title: "Compute Ideal-Gas Entropy Change"
exam: exam-ii
skills: [Entropy, Ideal gas entropy changes]
-->

Air has

$$
c_p = 1.005\ \text{kJ/(kg\cdot K)},\qquad R = 0.287\ \text{kJ/(kg\cdot K)}.
$$

It changes from $T_1 = 300\ \text{K}$ and $P_1 = 100\ \text{kPa}$ to $T_2 = 450\ \text{K}$ and $P_2 = 200\ \text{kPa}$.

Find $s_2 - s_1$.

:::solution
Use the constant-specific-heat ideal-gas entropy relation:

$$
s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right)
$$

Substitute:

$$
s_2 - s_1 = 1.005\ln\left(\frac{450}{300}\right) - 0.287\ln(2)
$$

$$
s_2 - s_1 \approx 1.005(0.4055) - 0.287(0.6931)
$$

$$
s_2 - s_1 \approx 0.4075 - 0.1988 = 0.2087\ \text{kJ/(kg\cdot K)}
$$
:::

<!--
id: thermodynamics-i-31
note: physics-thermodynamics-i
title: "Mix Two Streams"
exam: final
skills: [Mixing chamber, Control volumes, First Law]
-->

An adiabatic mixing chamber has two inlet streams of the same substance:

$$
\dot{m}_1 = 1\ \text{kg/s},\quad h_1 = 300\ \text{kJ/kg}
$$

and

$$
\dot{m}_2 = 2\ \text{kg/s},\quad h_2 = 500\ \text{kJ/kg}.
$$

Find the outlet mass flow rate and outlet enthalpy.

:::solution
Apply mass conservation:

$$
\dot{m}_{out} = \dot{m}_1 + \dot{m}_2 = 1 + 2 = 3\ \text{kg/s}
$$

For an adiabatic mixing chamber with no work and negligible kinetic and potential energy changes:

$$
\sum \dot{m}_{in}h_{in} = \dot{m}_{out}h_{out}
$$

So

$$
1(300) + 2(500) = 3h_{out}
$$

$$
1300 = 3h_{out}
$$

$$
h_{out} = 433.3\ \text{kJ/kg}
$$
:::

<!--
id: thermodynamics-i-32
note: physics-thermodynamics-i
title: "Analyze a Heat Exchanger"
exam: final
skills: [Heat exchanger, Control volumes, Energy balance]
-->

An adiabatic heat exchanger has a hot stream and a cold stream. The hot stream has

$$
\dot{m}_h = 2\ \text{kg/s},\quad h_{h,in} = 350\ \text{kJ/kg},\quad h_{h,out} = 250\ \text{kJ/kg}.
$$

The cold stream has

$$
\dot{m}_c = 3\ \text{kg/s},\quad h_{c,in} = 100\ \text{kJ/kg}.
$$

Find the cold-stream outlet enthalpy.

:::solution
With negligible heat loss to the surroundings, the enthalpy lost by the hot stream equals the enthalpy gained by the cold stream:

$$
\dot{m}_h(h_{h,in}-h_{h,out}) = \dot{m}_c(h_{c,out}-h_{c,in})
$$

Substitute:

$$
2(350-250) = 3(h_{c,out}-100)
$$

$$
200 = 3(h_{c,out}-100)
$$

$$
h_{c,out}-100 = 66.7
$$

$$
h_{c,out} = 166.7\ \text{kJ/kg}
$$
:::

<!--
id: thermodynamics-i-33
note: physics-thermodynamics-i
title: "Evaluate a Heat Engine"
exam: final
skills: [Heat engine, Efficiency, Second Law]
-->

A heat engine absorbs $900\ \text{kJ}$ from a hot reservoir and rejects $540\ \text{kJ}$ to a cold reservoir during one cycle.

Find the net work output and the thermal efficiency.

:::solution
For a cycle,

$$
W_{net,out} = Q_H - Q_L
$$

So

$$
W_{net,out} = 900 - 540 = 360\ \text{kJ}
$$

Thermal efficiency is

$$
\eta_{th} = \frac{W_{net,out}}{Q_H}
$$

Thus

$$
\eta_{th} = \frac{360}{900} = 0.40
$$

So the efficiency is $40\%$.
:::

<!--
id: thermodynamics-i-34
note: physics-thermodynamics-i
title: "Evaluate a Refrigerator"
exam: final
skills: [Refrigerator, COP, Second Law]
-->

A refrigerator removes $420\ \text{kJ}$ of heat from the cold space and requires $140\ \text{kJ}$ of work input.

Find $Q_H$, $COP_R$, and $COP_{HP}$.

:::solution
Use the refrigerator energy balance:

$$
W_{net,in} = Q_H - Q_L
$$

So

$$
Q_H = Q_L + W_{net,in} = 420 + 140 = 560\ \text{kJ}
$$

The refrigerator COP is

$$
COP_R = \frac{Q_L}{W_{net,in}} = \frac{420}{140} = 3
$$

The heat pump COP is

$$
COP_{HP} = \frac{Q_H}{W_{net,in}} = \frac{560}{140} = 4
$$
:::

<!--
id: thermodynamics-i-35
note: physics-thermodynamics-i
title: "Check Entropy Generation"
exam: final
skills: [Entropy principle, Second Law]
-->

Six hundred kilojoules of heat flows directly from a $600\ \text{K}$ reservoir to a $300\ \text{K}$ reservoir.

What is the entropy change of the universe, and does this process satisfy the Second Law?

:::solution
The hot reservoir loses entropy:

$$
\Delta S_H = -\frac{600}{600} = -1\ \text{kJ/K}
$$

The cold reservoir gains entropy:

$$
\Delta S_C = \frac{600}{300} = 2\ \text{kJ/K}
$$

So the universe changes by

$$
\Delta S_{universe} = -1 + 2 = 1\ \text{kJ/K}
$$

Because $\Delta S_{universe} > 0$, the process satisfies the Second Law.
:::

<!--
id: thermodynamics-i-41
note: physics-thermodynamics-i
title: "Evaluate an Otto Cycle"
exam: final
skills: [Otto cycle, Efficiency]
-->

An air-standard Otto cycle has a compression ratio of $r = 8$ and $k = 1.4$.

What is the thermal efficiency?

:::solution
For the ideal Otto cycle,

$$
\eta_{Otto} = 1 - \frac{1}{r^{k-1}}
$$

Substitute the values:

$$
\eta_{Otto} = 1 - \frac{1}{8^{0.4}}
$$

Since

$$
8^{0.4} \approx 2.30
$$

we get

$$
\eta_{Otto} \approx 1 - \frac{1}{2.30} \approx 0.565
$$

So the efficiency is about $56.5\%$.
:::

<!--
id: thermodynamics-i-42
note: physics-thermodynamics-i
title: "Evaluate a Brayton Cycle"
exam: final
skills: [Brayton cycle, Efficiency]
-->

An air-standard Brayton cycle has a pressure ratio of $r_p = 6$ and $k = 1.4$.

What is the thermal efficiency?

:::solution
For the ideal Brayton cycle,

$$
\eta_{Brayton} = 1 - \frac{1}{r_p^{(k-1)/k}}
$$

Substitute the values:

$$
\eta_{Brayton} = 1 - \frac{1}{6^{0.2857}}
$$

Since

$$
6^{0.2857} \approx 1.67
$$

we get

$$
\eta_{Brayton} \approx 1 - \frac{1}{1.67} \approx 0.40
$$

So the efficiency is about $40\%$.
:::

<!--
id: thermodynamics-i-43
note: physics-thermodynamics-i
title: "Compute Rankine Cycle Efficiency"
exam: final
skills: [Rankine cycle, First Law, Cycles]
-->

An ideal Rankine cycle has the following enthalpies:

$$
h_1 = 200,\quad h_2 = 210,\quad h_3 = 3200,\quad h_4 = 2200
$$

all in $\text{kJ/kg}$.

Find the pump work input, turbine work output, net work output, and thermal efficiency.

:::solution
Use the Rankine cycle relations:

$$
w_{pump,in} = h_2 - h_1 = 210 - 200 = 10\ \text{kJ/kg}
$$

$$
w_{turb,out} = h_3 - h_4 = 3200 - 2200 = 1000\ \text{kJ/kg}
$$

Net work output:

$$
w_{net,out} = w_{turb,out} - w_{pump,in} = 1000 - 10 = 990\ \text{kJ/kg}
$$

Heat input:

$$
q_{in} = h_3 - h_2 = 3200 - 210 = 2990\ \text{kJ/kg}
$$

Thermal efficiency:

$$
\eta_{Rankine} = \frac{w_{net,out}}{q_{in}} = \frac{990}{2990} \approx 0.331
$$

So the efficiency is about $33.1\%$.
:::

<!--
id: thermodynamics-i-44
note: physics-thermodynamics-i
title: "Apply the Workflow to a Sealed Tank"
exam: final
skills: [Problem-solving workflow, Closed systems, Sign conventions]
-->

A rigid, sealed tank contains gas. It loses $5\ \text{kJ}$ of heat to the surroundings and receives $12\ \text{kJ}$ of electrical work input. Neglect kinetic and potential energy changes.

Using the closed-system First Law and the sign convention in the note, find $\Delta U$.

:::solution
The tank is a **closed system** because no mass crosses the boundary.

Using the note's sign convention:

$$
Q = -5\ \text{kJ}
$$

because heat leaves the system, and

$$
W = -12\ \text{kJ}
$$

because work is done on the system, not by the system.

Now apply the First Law:

$$
\Delta U = Q - W
$$

So

$$
\Delta U = -5 - (-12) = 7\ \text{kJ}
$$
:::
