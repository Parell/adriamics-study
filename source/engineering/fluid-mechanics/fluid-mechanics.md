# Fluid Mechanics

# Fluid properties and classification

## Common properties

| Quantity | Symbol | Typical unit |
| --- | --- | --- |
| Density | $\rho$ | kg/m$^3$ |
| Specific weight | $\gamma$ | N/m$^3$ |
| Specific volume | $v$ | m$^3$/kg |
| Dynamic viscosity | $\mu$ | Pa$\cdot$s |
| Kinematic viscosity | $\nu$ | m$^2$/s |
| Pressure | $p$ | Pa |
| Surface tension | $\sigma$ | N/m |

Relationships:

$$
\gamma = \rho g
$$

$$
\nu = \frac{\mu}{\rho}
$$

$$
v = \frac{1}{\rho}
$$

## Idealizations

### Incompressible fluid

A fluid is modeled as incompressible when density changes are negligible.

This is often valid for liquids and for gases at low speed, typically when the Mach number is small.

### Newtonian fluid

For a Newtonian fluid, shear stress is proportional to the rate of strain:

$$
\tau = \mu \frac{du}{dy}
$$

Water, air, and many engineering fluids are Newtonian under normal conditions.

### Inviscid fluid

An inviscid fluid has negligible viscosity effects. This is a useful approximation outside boundary layers and in simplified Bernoulli analysis.

### Steady flow

At any fixed point, properties do not change with time.

### Uniform flow

Properties are constant across a section.

### Laminar and turbulent flow

- **Laminar flow**: ordered motion, low mixing
- **Turbulent flow**: fluctuating motion, strong mixing

For internal flow, the Reynolds number is the main indicator:

$$
\mathrm{Re} = \frac{\rho V D}{\mu} = \frac{V D}{\nu}
$$

Common pipe-flow guidance:

- Laminar: $\mathrm{Re} \lesssim 2300$
- Transitional: about $2300$ to $4000$
- Turbulent: $\mathrm{Re} \gtrsim 4000$

---

# Pressure and hydrostatics

## Pressure

Pressure is normal force per unit area:

$$
p = \frac{F}{A}
$$

Pressure is isotropic in a fluid at rest.

## Hydrostatic equation

For a fluid at rest under gravity:

$$
\frac{dp}{dz} = -\rho g
$$

If density is constant:

$$
p = p_0 + \rho g (z_0 - z)
$$

This gives the familiar result that pressure increases with depth.

## Pressure head

Pressure can be expressed as an equivalent fluid column height:

$$
\frac{p}{\gamma}
$$

This is called pressure head.

## Manometers

Manometers relate pressure differences to height differences of a static fluid column.

General approach:

1. Pick a starting point with known pressure.
2. Move through connected fluids.
3. Moving downward increases pressure by $\rho g \Delta z$.
4. Moving upward decreases pressure by $\rho g \Delta z$.
5. Equate pressures at the same horizontal level in the same continuous static fluid.

### Common pitfall

The density used in each segment must match the fluid in that segment. Do not use one density for the whole manometer unless the column is truly one fluid.

---

# Fluid statics applications

## Hydrostatic force on a plane surface

For a submerged plane surface:

$$
F_R = \rho g h_c A
$$

where:

- $F_R$ is the resultant hydrostatic force
- $h_c$ is the depth of the centroid below the free surface
- $A$ is the area

### Center of pressure

The line of action is below the centroid because pressure increases with depth.

For a plane surface:

$$
h_p = h_c + \frac{I_G}{h_c A}
$$

where $I_G$ is the second moment of area about the centroidal axis parallel to the free surface.

## Buoyancy

The buoyant force equals the weight of the displaced fluid:

$$
F_B = \rho g V_{\text{disp}}
$$

This is Archimedes' principle.

### Floating condition

For a floating body in equilibrium:

$$
W = F_B
$$

### Stability note

A floating body is statically stable if a small tilt produces a restoring moment. In early engineering work, the metacentric concept is used to assess this.

## Hydrostatic paradox

The pressure at a given depth depends on fluid density and depth, not container shape. Different vessel shapes can have the same pressure at the same depth.

---

# Control volume analysis

Most flow problems are easiest in a **control volume** framework.

## Reynolds transport theorem

For any extensive property $B$ with specific form $b$:

$$
\frac{dB_{sys}}{dt}
=
\frac{d}{dt}\int_{CV} \rho b \, dV
+
\int_{CS} \rho b (\mathbf{V}\cdot \mathbf{n})\, dA
$$

This connects system behavior to control-volume balances.

## Conservation of mass

General form:

$$
\frac{d}{dt}\int_{CV} \rho \, dV
+
\int_{CS} \rho (\mathbf{V}\cdot \mathbf{n})\, dA = 0
$$

For steady one-inlet, one-outlet flow:

$$
\dot{m} = \rho A V
$$

and

$$
\dot{m}_{in} = \dot{m}_{out}
$$

If the fluid is incompressible:

$$
A_1 V_1 = A_2 V_2
$$

## Volumetric flow rate

$$
Q = AV
$$

and

$$
\dot{m} = \rho Q
$$

---

# Bernoulli equation and energy form

## Bernoulli equation

For steady, incompressible, inviscid flow along a streamline with no shaft work and no losses:

$$
\frac{p}{\gamma} + \frac{V^2}{2g} + z = \text{constant}
$$

The three terms are:

- Pressure head
- Velocity head
- Elevation head

## Extended Bernoulli equation

Real engineering flows require pumps, turbines, and losses:

$$
\frac{p_1}{\gamma} + \alpha_1 \frac{V_1^2}{2g} + z_1 + h_p - h_t - h_L
=
\frac{p_2}{\gamma} + \alpha_2 \frac{V_2^2}{2g} + z_2
$$

where:

- $h_p$ is pump head added
- $h_t$ is turbine head removed
- $h_L$ is head loss
- $\alpha$ is the kinetic energy correction factor

For fully developed laminar pipe flow, $\alpha = 2$. For turbulent pipe flow, $\alpha$ is often close to 1.

## Stagnation pressure

If a fluid is brought to rest isentropically or with negligible loss:

$$
p_0 = p + \frac{1}{2}\rho V^2
$$

This is useful in Pitot tube measurements.

## When Bernoulli applies

Use Bernoulli only when the assumptions are acceptable:

- Steady flow
- Incompressible fluid
- Negligible viscous losses along the chosen path
- No shaft work between points, unless included explicitly
- Applied along a streamline unless the flow is irrotational

### Common mistake

Do not use Bernoulli across a pump, across a significant loss, or through a strongly viscous region without adding the missing terms.

---

# Momentum equation

The linear momentum equation is the workhorse for forces on jets, bends, nozzles, and control devices.

## Vector form

For a control volume:

$$
\sum \mathbf{F}
=
\frac{d}{dt}\int_{CV} \rho \mathbf{V}\, dV

+ \int_{CS} \rho \mathbf{V}(\mathbf{V}\cdot \mathbf{n})\, dA
$$

For steady one-inlet, one-outlet flow:

$$
\sum \mathbf{F} = \dot{m}(\mathbf{V}_{out} - \mathbf{V}_{in})
$$

## Engineering use cases

- Force on a pipe elbow
- Thrust from a nozzle
- Reaction force from a jet striking a plate
- Forces from flow deflection in fittings and vanes

## Practical force balance workflow

1. Draw the control volume.
2. Choose coordinate directions.
3. List all external forces:
   - Pressure forces
   - Weight
   - Wall/support reactions
4. Write the momentum balance in each direction.
5. Solve for the unknown reaction or force.

### Sign convention

Be consistent with inlet and outlet velocity directions. Most errors in momentum problems come from sign mistakes, not from the governing equation itself.

---

# Dimensional analysis and similitude

Dimensional analysis reduces variables and identifies key nondimensional groups.

## Buckingham Pi theorem

If a problem has $n$ dimensional variables and $k$ fundamental dimensions, then it can be rewritten using $n-k$ dimensionless groups.

## Important dimensionless numbers

### Reynolds number

$$
\mathrm{Re} = \frac{\rho V L}{\mu}
$$

Ratio of inertial to viscous effects.

### Froude number

$$
\mathrm{Fr} = \frac{V}{\sqrt{gL}}
$$

Ratio of inertial to gravitational effects.

### Mach number

$$
\mathrm{Ma} = \frac{V}{a}
$$

Ratio of flow speed to speed of sound.

### Weber number

$$
\mathrm{We} = \frac{\rho V^2 L}{\sigma}
$$

Ratio of inertial to surface tension effects.

## Similarity

For model testing, geometric, kinematic, and dynamic similarity are the main goals.

- **Geometric similarity**: same shape at different scale
- **Kinematic similarity**: similar velocity patterns
- **Dynamic similarity**: matching force ratios

In many problems, exact similarity is impossible. Then the dominant nondimensional group is matched as closely as practical.

---

# Internal flows and losses

Internal flow refers to flow in pipes, ducts, and channels.

## Hagen-Poiseuille flow

For fully developed laminar flow in a circular pipe:

$$
Q = \frac{\pi D^4}{128 \mu L}\Delta p
$$

The corresponding pressure drop is:

$$
\Delta p = \frac{32 \mu L V}{D^2}
$$

The Darcy friction factor for laminar pipe flow is:

$$
f = \frac{64}{\mathrm{Re}}
$$

## Fully developed pipe flow

In fully developed flow:

- The velocity profile does not change in the flow direction.
- The pressure drops along the pipe.
- Wall shear balances pressure forces.

## Head loss

Total loss is often written as:

$$
h_L = h_f + \sum h_m
$$

where:

- $h_f$ is major loss from friction
- $h_m$ is minor loss from fittings, entrances, expansions, valves, and bends

### Major loss

Using Darcy-Weisbach:

$$
h_f = f \frac{L}{D}\frac{V^2}{2g}
$$

### Minor loss

$$
h_m = K \frac{V^2}{2g}
$$

with loss coefficient $K$.

## Moody chart use

The Darcy friction factor depends on Reynolds number and relative roughness $\varepsilon/D$.

Practical steps:

1. Compute $\mathrm{Re}$.
2. Estimate relative roughness.
3. Read or calculate $f$.
4. Compute major and minor losses.
5. Insert losses into the energy equation.

### Common pitfall

Do not mix Darcy friction factor and Fanning friction factor.

Relationship:

$$
f_{Darcy} = 4 f_{Fanning}
$$

---

# External flow and boundary layers

When a fluid flows over a surface, viscosity creates a thin region near the wall called the **boundary layer**.

## Boundary-layer idea

At the wall, the no-slip condition gives:

$$
u = 0
$$

Away from the wall, velocity approaches the free-stream value.

## Drag

Two main drag components:

- **Skin-friction drag** from shear stress
- **Pressure drag** from flow separation and wake formation

## Lift and circulation

For lifting bodies, pressure differences and circulation produce lift.

This is central in airfoil and hydrofoil analysis.

## Flow separation

Separation occurs when the boundary layer can no longer overcome an adverse pressure gradient. It increases drag and can reduce lift.

## Lift and drag coefficients

For a reference area $A$:

$$
C_D = \frac{D}{\tfrac{1}{2}\rho V^2 A}
$$

$$
C_L = \frac{L}{\tfrac{1}{2}\rho V^2 A}
$$

These coefficients are often determined experimentally or from correlations.

---

# Compressible flow basics

Compressibility matters when density changes are not negligible, especially for gases at high speed.

## Mach number

$$
\mathrm{Ma} = \frac{V}{a}
$$

with $a$ the local speed of sound.

As a rule of thumb:

- $\mathrm{Ma} < 0.3$: compressibility is often negligible
- $\mathrm{Ma} \gtrsim 0.3$: compressibility effects may matter

## Isentropic relations

For a perfect gas undergoing isentropic flow:

$$
\frac{T_0}{T} = 1 + \frac{\gamma - 1}{2}\mathrm{Ma}^2
$$

$$
\frac{p_0}{p} = \left(1 + \frac{\gamma - 1}{2}\mathrm{Ma}^2\right)^{\gamma/(\gamma-1)}
$$

$$
\frac{\rho_0}{\rho} = \left(1 + \frac{\gamma - 1}{2}\mathrm{Ma}^2\right)^{1/(\gamma-1)}
$$

where $\gamma$ is the ratio of specific heats.

## Choked flow

In a converging nozzle, the flow becomes choked when the throat reaches sonic conditions:

$$
\mathrm{Ma} = 1
$$

At that point, mass flow rate reaches a maximum for the given upstream conditions.

---

# Problem-solving workflow

## General workflow

1. Identify the system or control volume.
2. Classify the problem:
   - Fluid statics
   - Bernoulli/energy
   - Momentum
   - Internal flow
   - Dimensional analysis
3. Write the assumptions explicitly.
4. Draw a clear diagram with directions, elevations, and control surfaces.
5. Write the governing equation in symbolic form first.
6. Solve algebraically before substituting numbers.
7. Check units and sign conventions.
8. Sanity-check the result against physics.

## Sanity checks

- Pressure should generally increase with depth in a static fluid.
- Losses should be nonnegative.
- A pump should add head, not remove it.
- A force on a deflector should match the momentum change direction.
- A higher Reynolds number should usually imply stronger inertial effects relative to viscosity.

## Common errors

- Confusing gauge and absolute pressure
- Using Bernoulli when losses are significant but omitting them
- Using the wrong friction factor definition
- Forgetting that pressure acts normal to surfaces
- Mixing up static pressure and stagnation pressure
- Using the wrong sign for elevation change

---

# Formula summary

## Fluid properties

$$
\gamma = \rho g
$$

$$
\nu = \frac{\mu}{\rho}
$$

$$
\mathrm{Re} = \frac{\rho V L}{\mu}
$$

## Hydrostatics

$$
\frac{dp}{dz} = -\rho g
$$

$$
F_B = \rho g V_{\text{disp}}
$$

## Continuity

$$
\dot{m} = \rho A V
$$

$$
\dot{m}_{in} = \dot{m}_{out}
$$

## Bernoulli and energy

$$
\frac{p}{\gamma} + \frac{V^2}{2g} + z = \text{constant}
$$

$$
h_f = f \frac{L}{D}\frac{V^2}{2g}
$$

$$
h_m = K \frac{V^2}{2g}
$$

## Momentum

$$
\sum \mathbf{F} = \dot{m}(\mathbf{V}_{out} - \mathbf{V}_{in})
$$

## Compressible flow

$$
\mathrm{Ma} = \frac{V}{a}
$$

$$
\frac{T_0}{T} = 1 + \frac{\gamma - 1}{2}\mathrm{Ma}^2
$$

---

## Quick reference

If the problem asks for:

- **Pressure at depth**: use hydrostatics
- **Forces on a gate or bend**: use momentum and pressure forces
- **Flow rate through a pipe**: use continuity plus energy and losses
- **Flow regime**: compute Reynolds number
- **Model testing or scaling**: use dimensionless groups
- **Gas flow at high speed**: check Mach number first

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
