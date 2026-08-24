# What heat transfer is

**Heat transfer** is the study of energy transport driven by a temperature difference.

If two regions are at different temperatures, energy moves from the hotter region to the colder one until equilibrium is approached. The subject is usually organized around three mechanisms:

- Conduction through a material
- Convection between a surface and a moving fluid
- Radiation through electromagnetic emission

Heat transfer problems usually ask for one of four things:

- Heat rate, $\dot{Q}$ in watts
- Temperature distribution, $T(x)$
- Surface temperature
- Required area, thickness, or time

The key modeling idea is to replace a physical system with a simplified thermal network that preserves the dominant resistance to heat flow.

## Basic quantities

| Quantity | Symbol | Typical unit |
| --- | --- | --- |
| Heat | $Q$ | J |
| Heat rate | $\dot{Q}$ | W |
| Temperature | $T$ | K or $^\circ$C |
| Thermal conductivity | $k$ | W/(mÂ·K) |
| Convection coefficient | $h$ | W/(m$^2$Â·K) |
| Emissivity | $\varepsilon$ | dimensionless |
| Specific heat | $c_p$ | J/(kgÂ·K) |
| Density | $\rho$ | kg/m$^3$ |
| Thermal diffusivity | $\alpha$ | m$^2$/s |

---

# Three modes of heat transfer

## Conduction

Energy transfer through a material by molecular interaction or free-electron transport. No bulk motion is required.

Examples:

- Heat flowing through a wall
- A metal spoon warming in soup
- Heat leaking through insulation

## Convection

Heat transfer between a surface and a moving fluid. It combines fluid motion with conduction in the boundary layer.

Examples:

- Air cooling a hot engine block
- Water removing heat from a pipe
- Natural circulation around a warm radiator

## Radiation

Heat transfer by electromagnetic waves emitted by matter because of its temperature.

Examples:

- Sunlight heating a surface
- A glowing furnace wall
- Infrared loss from hot machinery

## Modeling shortcut

Ask which mechanism is dominant:

- Solids usually emphasize conduction
- Fluids usually emphasize convection
- High-temperature, vacuum, or line-of-sight exchange usually emphasizes radiation

In many real systems, more than one mechanism acts at once, so the correct model is often a combination.

---

# Conduction

Conduction is governed by **Fourier's law**.

## Fourier's law

For one-dimensional heat flow in the $x$ direction:

$$
\dot{Q}_x = -kA \frac{dT}{dx}
$$

The negative sign means heat flows in the direction of decreasing temperature.

For a plane wall with constant $k$ and linear temperature profile:

$$
\dot{Q} = kA \frac{T_1 - T_2}{L}
$$

where:

- $A$ is area
- $L$ is thickness
- $T_1 > T_2$ gives positive heat flow from hot to cold

## Thermal conductivity

Thermal conductivity $k$ measures how easily a material conducts heat.

General trends:

- Metals: high $k$
- Liquids and gases: low $k$
- Insulators: very low $k$

The conductivity may depend on temperature, especially in gases, polymers, and some solids.

## Thermal resistance for conduction

For a plane wall:

$$
R_{cond} = \frac{L}{kA}
$$

Then:

$$
\dot{Q} = \frac{T_1 - T_2}{R_{cond}}
$$

## Common geometries

### Plane wall

$$
\dot{Q} = \frac{T_1 - T_2}{\frac{L}{kA}}
$$

### Cylindrical wall

For radial conduction through a cylinder:

$$
\dot{Q} = \frac{2\pi kL (T_1 - T_2)}{\ln(r_2/r_1)}
$$

Thermal resistance:

$$
R_{cond,cyl} = \frac{\ln(r_2/r_1)}{2\pi kL}
$$

### Spherical wall

For radial conduction through a sphere:

$$
\dot{Q} = \frac{4\pi k (T_1 - T_2)}{\frac{1}{r_1} - \frac{1}{r_2}}
$$

Thermal resistance:

$$
R_{cond,sph} = \frac{1}{4\pi k}\left(\frac{1}{r_1} - \frac{1}{r_2}\right)
$$

## Heat generation in solids

If a solid generates heat internally at a volumetric rate $\dot{q}'''$:

$$
\dot{Q}_{gen} = \dot{q}''' V
$$

Internal generation appears in:

- Electrical resistance heating
- Nuclear fuel
- Chemical reactions
- Electronics

Temperature profiles can become parabolic rather than linear.

## Contact resistance

At interfaces, imperfect contact creates an additional resistance. This matters in:

- Bolted joints
- Composite materials
- Thermal paste interfaces

In a lumped network it is treated like any other resistance:

$$
R_{contact} = \frac{\Delta T}{\dot{Q}}
$$

---

# Convection

Convection is modeled with **Newton's law of cooling**.

## Newton's law of cooling

$$
\dot{Q} = hA_s (T_s - T_\infty)
$$

where:

- $h$ is the convection coefficient
- $A_s$ is the surface area
- $T_s$ is the surface temperature
- $T_\infty$ is the free-stream or bulk fluid temperature

If $T_s > T_\infty$, heat leaves the surface.

## Convection resistance

$$
R_{conv} = \frac{1}{hA_s}
$$

## Boundary layer idea

Convection happens because a thin layer of fluid near the surface is slowed by viscosity. Heat crosses that layer mainly by conduction, then is carried away by bulk fluid motion.

That is why $h$ is not a material property in the same sense as $k$; it depends on:

- Fluid properties
- Flow speed
- Surface geometry
- Laminar or turbulent regime
- Surface roughness

## Natural vs forced convection

| Type | Cause of motion | Typical examples |
| --- | --- | --- |
| Forced convection | External fan, pump, wind | Air over a heat sink, water in a pipe |
| Natural convection | Buoyancy from density differences | Warm air rising from a radiator |

## How to use convection correlations

Convection coefficients are usually obtained from empirical correlations:

1. Compute dimensionless groups such as $Re$, $Pr$, and $Nu$
2. Select a correlation for the geometry and flow regime
3. Solve for the Nusselt number
4. Recover $h$ from

$$
Nu = \frac{hL_c}{k}
$$

The characteristic length $L_c$ depends on the geometry.

---

# Radiation

Radiation is thermal energy exchange by electromagnetic emission.

## Stefan-Boltzmann law

For an ideal blackbody:

$$
\dot{Q}_{rad} = \sigma A T^4
$$

For a real surface:

$$
\dot{Q}_{rad} = \varepsilon \sigma A T^4
$$

where:

- $\sigma = 5.670 \times 10^{-8}\ \text{W/(m}^2\text{Â·K}^4)$
- $\varepsilon$ is emissivity, with $0 \le \varepsilon \le 1$

## Net radiation to a large surrounding

If a surface at $T_s$ exchanges radiation with a large enclosure at $T_{sur}$:

$$
\dot{Q}_{rad} = \varepsilon \sigma A \left(T_s^4 - T_{sur}^4\right)
$$

## Linearized radiation resistance

Radiation is nonlinear because of the $T^4$ term. For network analysis, it is often linearized as:

$$
\dot{Q}_{rad} = h_r A (T_s - T_{sur})
$$

where the linearized radiation coefficient is approximately:

$$
h_r = \varepsilon \sigma (T_s + T_{sur})(T_s^2 + T_{sur}^2)
$$

Then:

$$
R_{rad} = \frac{1}{h_r A}
$$

## View factors

For exchange between finite surfaces, geometry matters. The **view factor** $F_{i \to j}$ is the fraction of radiation leaving surface $i$ that strikes surface $j$.

Useful properties:

- $0 \le F_{i \to j} \le 1$
- Reciprocity: $A_i F_{i \to j} = A_j F_{j \to i}$
- Summation rule: $\sum_j F_{i \to j} = 1$

View factors are essential in furnace, enclosure, and spacecraft thermal problems.

---

# Thermal resistance networks

Thermal circuits are one of the most useful simplifications in heat transfer.

## Analogy to electrical circuits

| Heat transfer | Electrical analogy |
| --- | --- |
| Temperature difference $\Delta T$ | Voltage difference $\Delta V$ |
| Heat rate $\dot{Q}$ | Current $I$ |
| Thermal resistance $R_{th}$ | Electrical resistance $R$ |

The basic relation is:

$$
\dot{Q} = \frac{\Delta T}{R_{th}}
$$

## Series resistances

For resistances in series:

$$
R_{eq} = R_1 + R_2 + R_3 + \cdots
$$

The same heat rate passes through every element.

## Parallel resistances

For resistances in parallel:

$$
\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots
$$

The same temperature difference acts across each branch.

## Common combined resistance

A surface with convection on one side and conduction through a wall is often modeled as:

$$
R_{tot} = R_{conv,1} + R_{cond} + R_{conv,2}
$$

Then:

$$
\dot{Q} = \frac{T_{\infty,1} - T_{\infty,2}}{R_{tot}}
$$

This is the standard approach for walls, pipes, windows, and insulation systems.

## Interface temperatures

Once $\dot{Q}$ is known, temperatures at internal nodes follow from repeated drops:

$$
\Delta T_i = \dot{Q} R_i
$$

This is often how surface temperatures are found.

---

# Steady-state composite walls

Composite systems combine several materials or mechanisms.

## Plane wall with multiple layers

For layers in series:

$$
R_{cond,tot} = \sum_{i=1}^{n} \frac{L_i}{k_i A}
$$

If convection occurs on both sides:

$$
R_{tot} = \frac{1}{h_1 A} + \sum_{i=1}^{n} \frac{L_i}{k_i A} + \frac{1}{h_2 A}
$$

Then:

$$
\dot{Q} = \frac{T_{\infty,1} - T_{\infty,2}}{R_{tot}}
$$

## Cylindrical insulation

For pipes and cables, the radial geometry matters. The resistance for each cylindrical layer is:

$$
R_i = \frac{\ln(r_{o,i}/r_{i,i})}{2\pi k_i L}
$$

Add any convection resistances at the inner and outer surfaces.

## Critical radius of insulation

Adding insulation increases conduction resistance but can also increase surface area and reduce convection resistance. For cylinders and spheres there is a **critical radius** at which heat loss is maximized.

For a cylinder:

$$
r_{crit} = \frac{k}{h}
$$

For a sphere:

$$
r_{crit} = \frac{2k}{h}
$$

If the outer radius is below the critical value, adding insulation can increase heat loss rather than reduce it.

## Typical workflow for composite systems

1. Draw the thermal circuit.
2. Label all known temperatures and areas.
3. Convert each layer into a resistance.
4. Add series and parallel pieces correctly.
5. Solve for $\dot{Q}$.
6. Recover interface temperatures.

---

# Transient heat transfer

Transient problems study how temperature changes with time.

## Thermal capacitance

A body stores thermal energy according to:

$$
C_{th} = mc_p
$$

The larger the thermal capacitance, the slower the temperature changes for a given heat input.

## Lumped capacitance model

If internal temperature gradients are small, the body can be treated as spatially uniform:

$$
T = T(t)
$$

This approximation is valid when the **Biot number** is small:

$$
Bi = \frac{hL_c}{k} \lesssim 0.1
$$

where $L_c$ is the characteristic length.

## Lumped cooling/heating solution

For a body exchanging heat by convection with a large surrounding:

$$
\frac{T(t) - T_\infty}{T_i - T_\infty}
=
\exp\left(-\frac{hA_s}{\rho V c_p}t\right)
$$

Equivalently:

$$
T(t) = T_\infty + (T_i - T_\infty)\exp\left(-\frac{t}{\tau}\right)
$$

with time constant:

$$
\tau = \frac{\rho V c_p}{hA_s}
$$

## Diffusion time scale

For distributed systems, the conduction time scale is roughly:

$$
t \sim \frac{L^2}{\alpha}
$$

where thermal diffusivity is:

$$
\alpha = \frac{k}{\rho c_p}
$$

Large $\alpha$ means temperature disturbances spread quickly.

## Common transient methods

- Lumped capacitance
- Semi-infinite solid approximation
- Heisler charts
- Analytical separation-of-variables solutions
- Numerical finite difference or finite element methods

---

# Heat exchangers

Heat exchangers transfer thermal energy between two fluids without mixing them.

## Examples

- Car radiator
- Boiler
- Condenser
- Evaporator
- Shell-and-tube exchanger

## Energy balance

For a heat exchanger:

$$
\dot{Q} = \dot{m}_h c_{p,h}(T_{h,in} - T_{h,out})
=
\dot{m}_c c_{p,c}(T_{c,out} - T_{c,in})
$$

The hot-side heat loss equals the cold-side heat gain if losses to the environment are negligible.

## Log-mean temperature difference

For steady exchangers, the driving temperature difference is often expressed using the LMTD:

$$
\Delta T_{lm} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1/\Delta T_2)}
$$

Then:

$$
\dot{Q} = UA\Delta T_{lm}
$$

where $U$ is the overall heat transfer coefficient.

## Overall heat transfer coefficient

$U$ combines all resistances on both sides of the exchanger wall:

$$
\frac{1}{UA} = R_{hot} + R_{wall} + R_{cold}
$$

This may include:

- Internal convection
- Wall conduction
- External convection
- Fouling resistances

## Practical design idea

Heat exchanger performance improves by:

- Increasing area
- Increasing flow turbulence
- Using higher conductivity materials
- Reducing fouling
- Reducing wall resistance

---

# Dimensionless groups

Dimensionless numbers help organize heat transfer correlations.

## Reynolds number

$$
Re = \frac{\rho V L}{\mu}
$$

Interprets the relative importance of inertia to viscosity.

## Prandtl number

$$
Pr = \frac{\mu c_p}{k} = \frac{\nu}{\alpha}
$$

Interprets momentum diffusivity relative to thermal diffusivity.

## Nusselt number

$$
Nu = \frac{hL}{k}
$$

Compares convection to conduction across the boundary layer.

## Biot number

$$
Bi = \frac{hL_c}{k}
$$

Measures whether internal conduction resistance is important compared with surface convection resistance.

## Fourier number

$$
Fo = \frac{\alpha t}{L^2}
$$

Measures dimensionless time for transient conduction.

## Interpretation shortcuts

- Large $Re$ often means turbulence is more likely
- Large $Nu$ usually means stronger convection
- Small $Bi$ supports the lumped-capacitance approximation
- Large $Fo$ means the body has had more time to equilibrate internally

---

# Problem-solving workflow

Heat transfer problems are easiest when you structure them before calculating.

## Recommended workflow

1. Draw the geometry clearly.
2. Mark the fluid temperatures, surface temperatures, and interfaces.
3. Identify the dominant mode or modes of transfer.
4. Choose the correct model:
   - Fourier law for conduction
   - Newton's law for convection
   - Stefan-Boltzmann law for radiation
   - Resistance network for combined systems
5. Check whether the problem is steady or transient.
6. Check whether properties can be treated as constant.
7. Use a consistent unit system.
8. Solve for the requested variable.
9. Check the sign, magnitude, and limiting behavior.

## Sanity checks

- Heat should flow from higher to lower temperature
- Resistance should be positive
- A larger area should usually reduce resistance
- A better conductor should usually reduce temperature drop
- A stronger convection coefficient should usually increase heat transfer rate

## Common mistakes

- Mixing Celsius and Kelvin in radiation formulas
- Forgetting area in conduction or convection resistance
- Using the wrong area for cylindrical or spherical geometry
- Treating a transient problem as steady
- Applying a lumped model when $Bi$ is not small
- Ignoring contact resistance in layered solids
- Using a heat transfer coefficient outside its intended correlation range

---

# Formula sheet

## Conduction

$$
\dot{Q}_x = -kA\frac{dT}{dx}
$$

$$
R_{cond,plane} = \frac{L}{kA}
$$

$$
R_{cond,cyl} = \frac{\ln(r_2/r_1)}{2\pi kL}
$$

$$
R_{cond,sph} = \frac{1}{4\pi k}\left(\frac{1}{r_1} - \frac{1}{r_2}\right)
$$

## Convection

$$
\dot{Q} = hA_s(T_s - T_\infty)
$$

$$
R_{conv} = \frac{1}{hA_s}
$$

## Radiation

$$
\dot{Q}_{rad} = \varepsilon \sigma A (T_s^4 - T_{sur}^4)
$$

$$
R_{rad} = \frac{1}{h_rA}
$$

## Lumped transient model

$$
\frac{T(t) - T_\infty}{T_i - T_\infty}
=
\exp\left(-\frac{hA_s}{\rho V c_p}t\right)
$$

## Heat exchanger

$$
\dot{Q} = UA\Delta T_{lm}
$$

## Dimensionless numbers

$$
Re = \frac{\rho VL}{\mu},\quad
Pr = \frac{\mu c_p}{k},\quad
Nu = \frac{hL}{k},\quad
Bi = \frac{hL_c}{k},\quad
Fo = \frac{\alpha t}{L^2}
$$

## Sources

- [Engineering LibreTexts](https://eng.libretexts.org/)
- Hibbeler, *Engineering Mechanics*
- Nilsson and Riedel, *Electric Circuits*
- Sedra and Smith, *Microelectronic Circuits*
- Oppenheim and Willsky, *Signals and Systems*
- Nise, *Control Systems Engineering*
- Incropera et al., *Fundamentals of Heat and Mass Transfer*
- Fox, McDonald, and Pritchard, *Introduction to Fluid Mechanics*
- Groover, *Fundamentals of Modern Manufacturing*
- Callister and Rethwisch, *Materials Science and Engineering*
- Montgomery, *Introduction to Statistical Quality Control*
- Kerzner, *Project Management: A Systems Approach to Planning, Scheduling, and Controlling*
- Law, *Simulation Modeling and Analysis*
- Fraden, *Handbook of Modern Sensors*
- Leake and Borger, *Engineering Design Graphics*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
