# Thermodynamics

# Thermodynamic systems and properties

Thermodynamics studies energy, matter, and property changes at the macroscopic scale.

A **system** is the matter or region selected for analysis. Everything outside the system is the **surroundings**. The boundary may be real or imaginary, fixed or moving.

## Types of systems

| System type                  | Mass crossing boundary? | Energy crossing boundary? | Example                     |
| ---------------------------- | ----------------------: | ------------------------: | --------------------------- |
| Closed system / control mass |                      No |                       Yes | Gas in a piston-cylinder    |
| Open system / control volume |                     Yes |                       Yes | Turbine, compressor, nozzle |
| Isolated system              |                      No |                        No | Ideal insulated sealed tank |

Before solving any problem, identify the system type. This determines the correct balance equation.

## Properties

:::definition Property

A **property** describes the state of a system.

Examples:

- Pressure, $P$
- Temperature, $T$
- Volume, $V$
- Specific volume, $v$
- Density, $\rho$
- Internal energy, $U$
- Enthalpy, $H$
- Entropy, $S$

:::

## Extensive and intensive properties

An **extensive property** depends on system size.

Examples:

$$
m,\quad V,\quad U,\quad H,\quad S
$$

An **intensive property** does not depend on system size.

Examples:

$$
P,\quad T,\quad v,\quad u,\quad h,\quad s
$$

Specific properties are extensive properties per unit mass:

$$
v = \frac{V}{m}
$$

$$
u = \frac{U}{m}
$$

$$
h = \frac{H}{m}
$$

$$
s = \frac{S}{m}
$$

---

# State, equilibrium, and processes

## State

The **state** of a simple compressible system is fixed when enough independent intensive properties are known.

For many simple systems, two independent intensive properties determine the state.

Examples:

$$
P,\ T
$$

$$
P,\ v
$$

$$
T,\ x
$$

where $x$ is quality in a saturated mixture.

## Equilibrium

A system is in thermodynamic equilibrium when it has:

- Thermal equilibrium: no temperature gradients
- Mechanical equilibrium: no unbalanced pressure forces
- Phase equilibrium: no net phase change
- Chemical equilibrium: no net chemical reaction

## Process

A **process** is a change from one equilibrium state to another.

Common processes:

| Process               | Meaning                  |
| --------------------- | ------------------------ |
| Isothermal            | Constant temperature     |
| Isobaric              | Constant pressure        |
| Isochoric / isometric | Constant volume          |
| Adiabatic             | No heat transfer         |
| Isentropic            | Constant entropy         |
| Polytropic            | $PV^n = \text{constant}$ |

## Cycle

A **cycle** is a series of processes that returns the system to its initial state.

For any property over a cycle:

$$
\Delta U = 0
$$

$$
\Delta H = 0
$$

$$
\Delta S = 0
$$

Path functions such as heat and work do not have to be zero over a cycle.

---

# Units, dimensions, and sign conventions

## Common SI units

| Quantity         | Symbol    | SI unit  |
| ---------------- | --------- | -------- |
| Mass             | $m$       | kg       |
| Temperature      | $T$       | K        |
| Pressure         | $P$       | Pa       |
| Energy           | $E$       | J        |
| Power            | $\dot{W}$ | W        |
| Specific volume  | $v$       | m³/kg      |
| Specific energy  | $u, h$    | J/kg     |
| Entropy          | $S$       | J/K      |
| Specific entropy | $s$       | J/(kg·K)   |

## Pressure

Absolute pressure is measured relative to vacuum.

Gauge pressure is measured relative to the atmosphere.

$$
P_{abs} = P_{gage} + P_{atm}
$$

Vacuum pressure is below atmospheric pressure:

$$
P_{abs} = P_{atm} - P_{vac}
$$

## Temperature

Thermodynamic temperature must use an absolute scale.

$$
T(K) = T(^\circ C) + 273.15
$$

## Sign convention used in these notes

These notes use the common engineering convention:

- Heat transfer into the system is positive.
- Work done by the system is positive.

Thus, for a closed system:

$$
\Delta U = Q - W
$$

More generally:

$$
\Delta E = Q - W
$$

where

$$
E = U + KE + PE
$$

---

# Pure substances and property data

A **pure substance** has a fixed chemical composition throughout.

Examples:

- Water
- Nitrogen
- Refrigerant-134a
- Carbon dioxide

A pure substance can exist in multiple phases.

## Phase regions

| Region                               | Description                  |
| ------------------------------------ | ---------------------------- |
| Compressed liquid / subcooled liquid | Liquid not about to vaporize |
| Saturated liquid                     | Liquid about to vaporize     |
| Saturated mixture                    | Liquid and vapor coexist     |
| Saturated vapor                      | Vapor about to condense      |
| Superheated vapor                    | Vapor not about to condense  |

## Saturation temperature and pressure

At a given saturation pressure, a pure substance changes phase at a fixed saturation temperature.

$$
T = T_{sat}(P)
$$

At a given saturation temperature, the corresponding phase-change pressure is:

$$
P = P_{sat}(T)
$$

## Quality

Quality is the mass fraction of vapor in a saturated liquid-vapor mixture.

$$
x = \frac{m_g}{m_f + m_g}
$$

where:

- $m_f$ = mass of saturated liquid
- $m_g$ = mass of saturated vapor

Quality only applies in the saturated mixture region.

## Saturated mixture property relation

For a saturated mixture:

$$
y = y_f + x y_{fg}
$$

where $y$ may represent $v$, $u$, $h$, or $s$.

Also:

$$
y_{fg} = y_g - y_f
$$

Examples:

$$
v = v_f + x v_{fg}
$$

$$
u = u_f + x u_{fg}
$$

$$
h = h_f + x h_{fg}
$$

$$
s = s_f + x s_{fg}
$$

## Enthalpy

Enthalpy is defined as:

$$
H = U + PV
$$

Specific enthalpy is:

$$
h = u + Pv
$$

Enthalpy is especially useful for control-volume problems because flow work is naturally included in $h$.

## How to choose property data

Use this sequence:

1. Identify the substance.
2. Identify known independent properties.
3. Determine the phase or region.
4. Use the correct table or equation of state.
5. Interpolate if needed.

## Compressed liquid approximation

For many liquids, if compressed liquid data are unavailable:

$$
v \approx v_f(T)
$$

$$
u \approx u_f(T)
$$

$$
h \approx h_f(T) + v_f(T)\left[P - P_{sat}(T)\right]
$$

Often, for modest pressure changes:

$$
h \approx h_f(T)
$$

---

# Ideal gases and equations of state

An **equation of state** relates pressure, temperature, and volume.

## Ideal gas equation

For an ideal gas:

$$
PV = mRT
$$

Specific form:

$$
Pv = RT
$$

Molar form:

$$
PV = n\bar{R}T
$$

where:

- $R$ = gas constant for the specific gas
- $\bar{R}$ = universal gas constant
- $n$ = number of moles

Relationship between gas constants:

$$
R = \frac{\bar{R}}{M}
$$

where $M$ is molar mass.

## Density form

Since

$$
v = \frac{1}{\rho}
$$

the ideal gas law can be written as:

$$
P = \rho RT
$$

## Compressibility factor

Real-gas behavior can be estimated using:

$$
Pv = ZRT
$$

where $Z$ is the compressibility factor.

For ideal gases:

$$
Z = 1
$$

If $Z$ is close to 1, the ideal gas model is reasonable.

## Constant specific heats

For ideal gases with constant specific heats:

$$
\Delta u = c_v(T_2 - T_1)
$$

$$
\Delta h = c_p(T_2 - T_1)
$$

and

$$
c_p - c_v = R
$$

Specific heat ratio:

$$
k = \frac{c_p}{c_v}
$$

## Ideal gas entropy changes

For constant specific heats:

$$
s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right)
$$

Equivalent form:

$$
s_2 - s_1 = c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{v_2}{v_1}\right)
$$

## Isentropic ideal gas relations

For an ideal gas with constant specific heats undergoing an isentropic process:

$$
PV^k = constant
$$

$$
Tv^{k-1} = constant
$$

$$
\frac{T_2}{T_1} = \left(\frac{v_1}{v_2}\right)^{k-1}
$$

$$
\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(k-1)/k}
$$

$$
\frac{P_2}{P_1} = \left(\frac{v_1}{v_2}\right)^k
$$

---

# Heat, work, and energy

## Energy

Total energy is:

$$
E = U + KE + PE
$$

where

$$
KE = \frac{1}{2}mV^2
$$

$$
PE = mgz
$$

Specific total energy:

$$
e = u + \frac{V^2}{2} + gz
$$

## Heat

Heat is energy transfer due to temperature difference.

Heat transfer rate:

$$
\dot{Q} = \frac{\delta Q}{dt}
$$

Adiabatic process:

$$
Q = 0
$$

## Work

Work is energy transfer due to a generalized force acting through a generalized displacement.

Power:

$$
\dot{W} = \frac{\delta W}{dt}
$$

## Boundary work

For a quasi-equilibrium closed-system process:

$$
W_b = \int_{1}^{2} P\,dV
$$

If pressure is constant:

$$
W_b = P(V_2 - V_1)
$$

Specific boundary work:

$$
w_b = \int_{1}^{2} P\,dv
$$

## Polytropic work

For a polytropic process:

$$
PV^n = C
$$

If $n \ne 1$:

$$
W_b = \frac{P_2V_2 - P_1V_1}{1-n}
$$

For an ideal gas:

$$
W_b = \frac{mR(T_2 - T_1)}{1-n}
$$

If $n = 1$:

$$
W_b = P_1V_1 \ln\left(\frac{V_2}{V_1}\right)
$$

For an ideal gas when $n = 1$, the process is isothermal:

$$
W_b = mRT \ln\left(\frac{V_2}{V_1}\right)
$$

## Spring work

For a linear spring:

$$
F = kx
$$

Spring work:

$$
W = \int_{x_1}^{x_2} kx\,dx
$$

$$
W = \frac{1}{2}k(x_2^2 - x_1^2)
$$

## Electrical work

Electrical work:

$$
W_e = \int V I\,dt
$$

For constant voltage and current:

$$
W_e = VIt
$$

Electrical power:

$$
\dot{W}_e = VI
$$

---

# First Law for closed systems

The First Law is conservation of energy.

For a closed system:

$$
\Delta E = Q - W
$$

Expanded:

$$
\Delta U + \Delta KE + \Delta PE = Q - W
$$

If kinetic and potential energy changes are negligible:

$$
\Delta U = Q - W
$$

On a mass basis:

$$
\Delta e = q - w
$$

If kinetic and potential energy changes are negligible:

$$
\Delta u = q - w
$$

## Cyclic closed system

For a cycle:

$$
\Delta E_{cycle} = 0
$$

Therefore:

$$
Q_{net} = W_{net}
$$

## Constant-volume closed system

For constant volume boundary work:

$$
W_b = \int P\,dV = 0
$$

If no other work modes occur:

$$
Q = \Delta U
$$

## Constant-pressure closed system

For constant pressure:

$$
W_b = P(V_2 - V_1)
$$

If only boundary work occurs and kinetic/potential energy changes are negligible:

$$
Q = \Delta U + P\Delta V
$$

Since

$$
H = U + PV
$$

for constant pressure:

$$
Q = \Delta H
$$

## Rigid tank

For a rigid tank:

$$
V = constant
$$

$$
W_b = 0
$$

If the tank is also adiabatic and has no other work modes:

$$
\Delta U = 0
$$

---

# First Law for control volumes

A control volume allows mass to cross the boundary.

## Conservation of mass

General mass balance:

$$
\frac{dm_{CV}}{dt} = \sum \dot{m}_{in} - \sum \dot{m}_{out}
$$

At steady state:

$$
\frac{dm_{CV}}{dt} = 0
$$

So:

$$
\sum \dot{m}_{in} = \sum \dot{m}_{out}
$$

For one inlet and one outlet:

$$
\dot{m}_1 = \dot{m}_2 = \dot{m}
$$

## Mass flow rate

Mass flow rate:

$$
\dot{m} = \rho A V
$$

Using specific volume:

$$
\dot{m} = \frac{AV}{v}
$$

where $V$ is flow speed, not volume.

## Energy balance for control volumes

General rate form:

$$
\frac{dE_{CV}}{dt} = \dot{Q} - \dot{W} + \sum \dot{m}_{in}\left(h + \frac{V^2}{2} + gz\right) - \sum \dot{m}_{out}\left(h + \frac{V^2}{2} + gz\right)
$$

At steady state:

$$
0 = \dot{Q} - \dot{W} + \sum \dot{m}_{in}\left(h + \frac{V^2}{2} + gz\right) - \sum \dot{m}_{out}\left(h + \frac{V^2}{2} + gz\right)
$$

For one inlet and one outlet:

$$
\dot{Q} - \dot{W} = \dot{m}\left[(h_2-h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2-z_1)\right]
$$

Specific form:

$$
q - w = (h_2-h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2-z_1)
$$

---

# Common steady-flow devices

For most steady-flow devices, start with:

$$
\dot{Q} - \dot{W} = \dot{m}\left[(h_2-h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2-z_1)\right]
$$

Then remove negligible terms.

## Turbine

A turbine produces work output.

Typical assumptions:

- Steady state
- Adiabatic
- Negligible kinetic and potential energy changes

Energy balance:

$$
\dot{W}_{out} = \dot{m}(h_1 - h_2)
$$

Specific work output:

$$
w_{out} = h_1 - h_2
$$

## Compressor

A compressor requires work input and increases gas pressure.

Typical assumptions:

- Steady state
- Adiabatic
- Negligible kinetic and potential energy changes

Energy balance:

$$
\dot{W}_{in} = \dot{m}(h_2 - h_1)
$$

Specific work input:

$$
w_{in} = h_2 - h_1
$$

## Pump

A pump increases liquid pressure.

For an incompressible liquid:

$$
w_{in} \approx v(P_2 - P_1)
$$

Pump power input:

$$
\dot{W}_{in} \approx \dot{m}v(P_2 - P_1)
$$

## Nozzle

A nozzle increases flow speed.

Typical assumptions:

- Steady state
- Adiabatic
- No shaft work
- Negligible potential energy change

Energy balance:

$$
h_1 + \frac{V_1^2}{2}
=
h_2 + \frac{V_2^2}{2}
$$

Velocity relation:

$$
V_2 =
\sqrt{V_1^2 + 2(h_1-h_2)}
$$

Use SI units carefully: if $h$ is in kJ/kg, multiply by 1000.

## Diffuser

A diffuser decreases flow speed and increases pressure.

Typical assumptions are similar to a nozzle:

$$
h_1 + \frac{V_1^2}{2}
=
h_2 + \frac{V_2^2}{2}
$$

## Throttling valve

A throttling valve causes a pressure drop with no work output.

Typical assumptions:

- Steady state
- Adiabatic
- No shaft work
- Negligible kinetic and potential energy changes

Energy balance:

$$
h_1 = h_2
$$

Throttling is highly irreversible.

## Heat exchanger

A heat exchanger transfers heat between streams.

If the whole heat exchanger is the control volume and heat loss to surroundings is negligible:

$$
\dot{Q}_{CV} \approx 0
$$

For two streams with no work and negligible kinetic/potential energy changes:

$$
\dot{m}_h(h_{h,in}-h_{h,out})
=
\dot{m}_c(h_{c,out}-h_{c,in})
$$

## Mixing chamber

For an adiabatic mixing chamber with no work and negligible kinetic/potential energy changes:

$$
\sum \dot{m}_{in}h_{in}
=
\sum \dot{m}_{out}h_{out}
$$

Mass balance:

$$
\sum \dot{m}_{in}
=
\sum \dot{m}_{out}
$$

---

# Second Law of Thermodynamics

The First Law gives energy conservation. The Second Law gives direction and limits.

## Thermal reservoir

A thermal reservoir can supply or absorb heat without changing temperature.

Examples:

- Atmosphere
- Large lake
- Furnace
- Ocean

## Heat engine

A heat engine receives heat from a high-temperature reservoir, produces net work, and rejects heat to a low-temperature reservoir.

Energy balance over a cycle:

$$
W_{net,out} = Q_H - Q_L
$$

Thermal efficiency:

$$
\eta_{th} = \frac{W_{net,out}}{Q_H}
$$

Equivalent form:

$$
\eta_{th} = 1 - \frac{Q_L}{Q_H}
$$

## Refrigerator

A refrigerator uses work input to move heat from a low-temperature region to a high-temperature region.

Coefficient of performance:

$$
COP_R = \frac{Q_L}{W_{net,in}}
$$

Since

$$
W_{net,in} = Q_H - Q_L
$$

then:

$$
COP_R = \frac{Q_L}{Q_H - Q_L}
$$

## Heat pump

A heat pump uses work input to deliver heat to a high-temperature region.

Coefficient of performance:

$$
COP_{HP} = \frac{Q_H}{W_{net,in}}
$$

Thus:

$$
COP_{HP} = \frac{Q_H}{Q_H - Q_L}
$$

Relationship:

$$
COP_{HP} = COP_R + 1
$$

## Kelvin-Planck statement

No heat engine can convert all the heat it receives from a single reservoir into net work while operating in a cycle.

This means no real heat engine has:

$$
\eta_{th} = 1
$$

## Clausius statement

No refrigerator or heat pump can move heat from a colder body to a hotter body without work input.

## Reversible and irreversible processes

A reversible process can be reversed without leaving any net change in the system or surroundings.

Real processes are irreversible due to effects such as:

- Friction
- Unrestrained expansion
- Mixing
- Heat transfer through a finite temperature difference
- Electrical resistance
- Inelastic deformation

---

# Entropy

Entropy is a thermodynamic property that measures energy dispersal and irreversibility.

For an internally reversible process:

$$
dS = \frac{\delta Q_{rev}}{T}
$$

Specific form:

$$
ds = \frac{\delta q_{rev}}{T}
$$

## Entropy change

Entropy change between two states is independent of path:

$$
\Delta S = S_2 - S_1
$$

For a closed system:

$$
\Delta S = \int_1^2 \frac{\delta Q_{rev}}{T}
$$

## Entropy principle

For an isolated system:

$$
\Delta S_{isolated} \ge 0
$$

For the universe:

$$
\Delta S_{universe} \ge 0
$$

Equality applies to reversible processes:

$$
\Delta S_{universe} = 0
$$

Irreversible processes generate entropy:

$$
\Delta S_{universe} > 0
$$

## Entropy balance for a closed system

General entropy balance:

$$
\Delta S_{system} = \sum \frac{Q_k}{T_k} + S_{gen}
$$

where:

- $Q_k$ is heat transfer at boundary temperature $T_k$
- $S_{gen}$ is entropy generation

Entropy generation cannot be negative:

$$
S_{gen} \ge 0
$$

## Entropy balance for a control volume

Rate form:

$$
\frac{dS_{CV}}{dt} = \sum \frac{\dot{Q}_k}{T_k} + \sum \dot{m}_{in}s_{in} - \sum \dot{m}_{out}s_{out} + \dot{S}_{gen}
$$

At steady state:

$$
0 = \sum \frac{\dot{Q}_k}{T_k} + \sum \dot{m}_{in}s_{in} - \sum \dot{m}_{out}s_{out} + \dot{S}_{gen}
$$

## Isentropic process

An isentropic process has constant entropy:

$$
s_2 = s_1
$$

For a process to be isentropic, it must be both:

- Adiabatic
- Reversible

Adiabatic alone does not guarantee isentropic behavior.

## T-ds relations

First T-ds relation:

$$
Tds = du + Pdv
$$

Second T-ds relation:

$$
Tds = dh - vdP
$$

These apply to simple compressible substances.

---

# Power and refrigeration cycles

A cycle returns the working fluid to its initial state, so property changes over the cycle are zero.

## Carnot cycle

The Carnot cycle is a completely reversible cycle operating between two reservoirs.

Carnot heat engine efficiency:

$$
\eta_{Carnot} = 1 - \frac{T_L}{T_H}
$$

Temperatures must be absolute.

Carnot refrigerator:

$$
COP_{R,Carnot} = \frac{T_L}{T_H - T_L}
$$

Carnot heat pump:

$$
COP_{HP,Carnot} = \frac{T_H}{T_H - T_L}
$$

No engine operating between the same two reservoirs can be more efficient than a Carnot engine.

## Otto cycle

The ideal Otto cycle models spark-ignition engines.

Processes:

1. Isentropic compression
2. Constant-volume heat addition
3. Isentropic expansion
4. Constant-volume heat rejection

Compression ratio:

$$
r = \frac{V_1}{V_2}
$$

Air-standard Otto efficiency:

$$
\eta_{Otto} = 1 - \frac{1}{r^{k-1}}
$$

## Diesel cycle

The ideal Diesel cycle models compression-ignition engines.

Processes:

1. Isentropic compression
2. Constant-pressure heat addition
3. Isentropic expansion
4. Constant-volume heat rejection

Cutoff ratio:

$$
r_c = \frac{V_3}{V_2}
$$

Air-standard Diesel efficiency:

$$
\eta_{Diesel}
=
1
-
\frac{1}{r^{k-1}}
\left[
\frac{r_c^k - 1}{k(r_c - 1)}
\right]
$$

## Brayton cycle

The ideal Brayton cycle models gas turbine engines.

Processes:

1. Isentropic compression
2. Constant-pressure heat addition
3. Isentropic expansion
4. Constant-pressure heat rejection

Pressure ratio:

$$
r_p = \frac{P_2}{P_1}
$$

Air-standard Brayton efficiency:

$$
\eta_{Brayton}
=
1
-
\frac{1}{r_p^{(k-1)/k}}
$$

## Rankine cycle

The ideal Rankine cycle models vapor power plants.

Main components:

1. Pump
2. Boiler
3. Turbine
4. Condenser

Pump work input:

$$
w_{pump,in} = h_2 - h_1
$$

Boiler heat input:

$$
q_{in} = h_3 - h_2
$$

Turbine work output:

$$
w_{turb,out} = h_3 - h_4
$$

Condenser heat rejection:

$$
q_{out} = h_4 - h_1
$$

Net work output:

$$
w_{net,out} = w_{turb,out} - w_{pump,in}
$$

Thermal efficiency:

$$
\eta_{Rankine} = \frac{w_{net,out}}{q_{in}}
$$

## Vapor-compression refrigeration cycle

Main components:

1. Compressor
2. Condenser
3. Expansion valve
4. Evaporator

Compressor work input:

$$
w_{comp,in} = h_2 - h_1
$$

Condenser heat rejection:

$$
q_H = h_2 - h_3
$$

Throttling valve:

$$
h_3 = h_4
$$

Evaporator heat absorption:

$$
q_L = h_1 - h_4
$$

Refrigerator COP:

$$
COP_R = \frac{q_L}{w_{comp,in}}
$$
---

# Problem-solving workflow

Use this checklist for most Thermodynamics problems.

## Step 1: Define the system

Decide whether the system is:

- Closed
- Open
- Isolated

Draw a boundary.

## Step 2: List knowns and unknowns

Write given values with units.

Convert temperatures to absolute scale when needed.

## Step 3: Identify the process model

Examples:

- Steady state
- Adiabatic
- Isothermal
- Isentropic
- Constant pressure
- Constant volume
- Rigid tank
- Throttling
- Polytropic

## Step 4: Determine the substance model

Use one of:

- Property tables
- Ideal gas model
- Incompressible substance model
- Saturated mixture relation
- Real-gas compressibility factor

## Step 5: Choose the correct balance

Closed-system energy balance:

$$
\Delta E = Q - W
$$

Control-volume mass balance:

$$
\frac{dm_{CV}}{dt} = \sum \dot{m}_{in} - \sum \dot{m}_{out}
$$

Control-volume energy balance:

$$
\frac{dE_{CV}}{dt} = \dot{Q} - \dot{W} + \sum \dot{m}_{in}\left(h + \frac{V^2}{2} + gz\right) - \sum \dot{m}_{out}\left(h + \frac{V^2}{2} + gz\right)
$$

Entropy balance:

$$
\Delta S
=
\sum \frac{Q_k}{T_k}
+
S_{gen}
$$

## Step 6: Apply assumptions

Common assumptions:

- Negligible kinetic energy change
- Negligible potential energy change
- Steady state
- Adiabatic
- No shaft work
- Ideal gas
- Constant specific heats

Only cancel terms after stating why.

## Step 7: Solve symbolically first

Keep equations symbolic as long as possible. Substitute numbers after the equation is arranged.

## Step 8: Check physical meaning

Ask:

- Does the sign make sense?
- Are units consistent?
- Is the magnitude reasonable?
- Is entropy generation nonnegative?
- Is efficiency less than the Carnot limit?

---

# Formula sheet

## Basic property relations

$$
v = \frac{V}{m}
$$

$$
\rho = \frac{m}{V} = \frac{1}{v}
$$

$$
h = u + Pv
$$

$$
E = U + KE + PE
$$

$$
e = u + \frac{V^2}{2} + gz
$$

## Ideal gas

$$
PV = mRT
$$

$$
Pv = RT
$$

$$
P = \rho RT
$$

$$
c_p - c_v = R
$$

$$
k = \frac{c_p}{c_v}
$$

## Saturated mixture

$$
x = \frac{m_g}{m_f + m_g}
$$

$$
y = y_f + xy_{fg}
$$

$$
y_{fg} = y_g - y_f
$$

## Closed-system First Law

$$
\Delta E = Q - W
$$

$$
\Delta U + \Delta KE + \Delta PE = Q - W
$$

If kinetic and potential energy changes are negligible:

$$
\Delta U = Q - W
$$

## Boundary work

$$
W_b = \int_1^2 P\,dV
$$

Constant pressure:

$$
W_b = P(V_2 - V_1)
$$

Polytropic process, $n \ne 1$:

$$
W_b = \frac{P_2V_2 - P_1V_1}{1-n}
$$

Polytropic process, $n = 1$:

$$
W_b = P_1V_1\ln\left(\frac{V_2}{V_1}\right)
$$

## Control-volume balances

Mass balance:

$$
\frac{dm_{CV}}{dt} = \sum \dot{m}_{in} - \sum \dot{m}_{out}
$$

Steady-flow energy balance:

$$
\dot{Q} - \dot{W} = \dot{m}\left[(h_2-h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2-z_1)\right]
$$

Mass flow rate:

$$
\dot{m} = \rho AV
$$

$$
\dot{m} = \frac{AV}{v}
$$

## Common devices

Turbine:

$$
\dot{W}_{out} = \dot{m}(h_1-h_2)
$$

Compressor:

$$
\dot{W}_{in} = \dot{m}(h_2-h_1)
$$

Pump:

$$
w_{in} \approx v(P_2-P_1)
$$

Nozzle or diffuser:

$$
h_1 + \frac{V_1^2}{2}
=
h_2 + \frac{V_2^2}{2}
$$

Throttling valve:

$$
h_1 = h_2
$$

## Second Law and entropy

Heat engine efficiency:

$$
\eta_{th} = \frac{W_{net,out}}{Q_H}
$$

$$
\eta_{th} = 1 - \frac{Q_L}{Q_H}
$$

Refrigerator COP:

$$
COP_R = \frac{Q_L}{W_{net,in}}
$$

Heat pump COP:

$$
COP_{HP} = \frac{Q_H}{W_{net,in}}
$$

Carnot efficiency:

$$
\eta_{Carnot} = 1 - \frac{T_L}{T_H}
$$

Entropy inequality:

$$
\Delta S_{universe} \ge 0
$$

Entropy generation:

$$
S_{gen} \ge 0
$$

Closed-system entropy balance:

$$
\Delta S_{system}
=
\sum \frac{Q_k}{T_k}
+
S_{gen}
$$

Steady control-volume entropy balance:

$$
0
=
\sum \frac{\dot{Q}_k}{T_k}
+
\sum \dot{m}_{in}s_{in}
-
\sum \dot{m}_{out}s_{out}
+
\dot{S}_{gen}
$$

## Ideal gas entropy changes

$$
s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right)
$$

$$
s_2 - s_1 = c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{v_2}{v_1}\right)
$$

## Isentropic ideal gas relations

$$
PV^k = constant
$$

$$
Tv^{k-1} = constant
$$

$$
\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(k-1)/k}
$$

$$
\frac{P_2}{P_1} = \left(\frac{v_1}{v_2}\right)^k
$$

---

# Common mistakes to avoid

- Using Celsius instead of Kelvin in ideal gas or Carnot equations.
- Mixing gauge pressure and absolute pressure.
- Applying quality outside the saturated mixture region.
- Calling an adiabatic process isentropic without checking reversibility.
- Forgetting that $h$ includes flow work.
- Using $\Delta U = Q - W$ for open systems without accounting for mass flow.
- Forgetting to convert kJ/kg to J/kg when using velocity terms.
- Assuming work is always positive. The sign depends on whether work is done by or on the system.
- Ignoring entropy generation in irreversible processes.
- Comparing efficiencies without checking reservoir temperatures or cycle assumptions.

## Sources

- [OpenStax University Physics](https://openstax.org/subjects/science)
- [Physics LibreTexts](https://phys.libretexts.org/)
- Halliday, Resnick, and Walker, *Fundamentals of Physics*
- Serway and Jewett, *Physics for Scientists and Engineers*
- Griffiths, *Introduction to Electrodynamics*
- Griffiths, *Introduction to Quantum Mechanics*
- Taylor, *Classical Mechanics*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
