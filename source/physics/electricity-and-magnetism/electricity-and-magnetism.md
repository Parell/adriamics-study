# Electricity and Magnetism

# Charge, force, and electric field

Electric charge comes in positive and negative signs. Like charges repel, unlike charges attract.

## Coulomb's law

The force between two point charges is

$$
\mathbf{F}_{12} = k\frac{q_1 q_2}{r^2}\hat{\mathbf{r}}
$$

where $\hat{\mathbf{r}}$ points from one charge to the other along the line joining them.

Magnitude form:

$$
F = k\frac{|q_1 q_2|}{r^2}
$$

## Superposition

For multiple charges, add the individual forces or fields vectorially:

$$
\mathbf{F}_{\text{net}} = \sum_i \mathbf{F}_i,\qquad \mathbf{E}_{\text{net}} = \sum_i \mathbf{E}_i
$$

## Electric field

The electric field is force per unit positive test charge:

$$
\mathbf{E} = \frac{\mathbf{F}}{q_0}
$$

For a point charge:

$$
\mathbf{E} = k\frac{q}{r^2}\hat{\mathbf{r}}
$$

Direction rules:

- Field points away from positive charge.
- Field points toward negative charge.

## Continuous charge distributions

When charge is spread over a line, surface, or volume, use charge density:

$$
\lambda = \frac{dq}{dl},\qquad \sigma = \frac{dq}{dA},\qquad \rho = \frac{dq}{dV}
$$

Then integrate:

$$
d\mathbf{E} = k\frac{dq}{r^2}\hat{\mathbf{r}}
$$

## Common symmetry idea

The hardest step is usually choosing the right symmetry. If a distribution has spherical, cylindrical, or planar symmetry, field calculations can simplify dramatically.

---

# Electric flux and Gauss's law

Electric flux measures how much electric field passes through a surface.

## Flux

For a flat surface in a uniform field:

$$
\Phi_E = \mathbf{E}\cdot \mathbf{A} = EA\cos\theta
$$

More generally:

$$
\Phi_E = \int \mathbf{E}\cdot d\mathbf{A}
$$

## Gauss's law

$$
\oint \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}
$$

This is always true, but it is especially useful when symmetry makes $E$ constant on the chosen Gaussian surface.

## When Gauss's law is useful

Use it when the charge distribution has enough symmetry that you can choose a surface where:

- $E$ is constant on the surface, and
- $\mathbf{E}$ is parallel or perpendicular to the area vector in a simple way.

Typical cases:

- Spherically symmetric charge distributions
- Infinite line charge
- Infinite sheet of charge
- Long uniformly charged cylinder

## Standard results

For a point charge or spherically symmetric distribution outside the charge:

$$
E = k\frac{Q}{r^2}
$$

For an infinite line charge:

$$
E = \frac{\lambda}{2\pi\varepsilon_0 r}
$$

For an infinite sheet of charge:

$$
E = \frac{\sigma}{2\varepsilon_0}
$$

For a long uniformly charged solid cylinder, use Gauss's law separately inside and outside the cylinder.

## Pitfalls

- Flux is not the same as field strength.
- Zero net flux does not mean zero field.
- Gauss's law is not a shortcut unless symmetry supports it.

---

# Electric potential and energy

Electric potential gives a scalar description of electric energy per unit charge.

## Potential difference

The potential difference between two points is

$$
\Delta V = -\int_a^b \mathbf{E}\cdot d\mathbf{\ell}
$$

Potential is often easier to work with than field because it adds as a scalar.

## Potential due to a point charge

$$
V = k\frac{q}{r}
$$

For many charges:

$$
V_{\text{net}} = \sum_i k\frac{q_i}{r_i}
$$

## Relationship between field and potential

In one dimension:

$$
E_x = -\frac{dV}{dx}
$$

In vector form:

$$
\mathbf{E} = -\nabla V
$$

The field points in the direction of steepest decrease in potential.

## Potential energy

The potential energy of a charge in a potential is

$$
U = qV
$$

For two point charges:

$$
U = k\frac{q_1 q_2}{r}
$$

Work done by the electric field is related to the change in potential energy:

$$
W_{\text{field}} = -\Delta U
$$

## Equipotential surfaces

An equipotential surface has constant $V$.

Properties:

- No work is required to move a charge along an equipotential.
- Electric field lines are perpendicular to equipotential surfaces.

---

# Capacitance and dielectrics

A capacitor stores separated charge and electric energy.

## Capacitance

$$
C = \frac{Q}{\Delta V}
$$

Capacitance depends on geometry and dielectric material, not on the amount of charge stored.

## Parallel-plate capacitor

For ideal parallel plates:

$$
C = \varepsilon_0\frac{A}{d}
$$

With dielectric constant $\kappa$:

$$
C = \kappa\varepsilon_0\frac{A}{d}
$$

## Energy stored

$$
U = \frac{1}{2}CV^2 = \frac{Q^2}{2C} = \frac{1}{2}QV
$$

Energy density in an electric field:

$$
u_E = \frac{1}{2}\varepsilon_0 E^2
$$

With a dielectric:

$$
u_E = \frac{1}{2}\varepsilon E^2
$$

where $\varepsilon = \kappa\varepsilon_0$.

## Dielectrics

A dielectric polarizes in an electric field and reduces the effective field inside the material.

Main effects:

- Increases capacitance
- Lowers the field for a given free charge
- Allows more charge storage at the same voltage

## Capacitor combinations

Series:

$$
\frac{1}{C_{\text{eq}}} = \sum_i \frac{1}{C_i}
$$

Parallel:

$$
C_{\text{eq}} = \sum_i C_i
$$

## Common reasoning

- In series, charge magnitude is the same on each capacitor.
- In parallel, voltage is the same across each capacitor.

---

# Current, resistance, and DC circuits

Current is the rate at which charge flows:

$$
I = \frac{dQ}{dt}
$$

Conventional current is defined as the direction positive charge would move.

## Microscopic form of Ohm's law

$$
\mathbf{J} = \sigma \mathbf{E}
$$

where $\mathbf{J}$ is current density and $\sigma$ is conductivity.

## Resistance

For a uniform conductor:

$$
R = \rho\frac{L}{A}
$$

where $\rho$ is resistivity.

Ohm's law in circuit form:

$$
V = IR
$$

## Power

$$
P = IV = I^2R = \frac{V^2}{R}
$$

## Kirchhoff's rules

Kirchhoff's current law:

$$
\sum I_{\text{in}} = \sum I_{\text{out}}
$$

Kirchhoff's voltage law:

$$
\sum \Delta V = 0
$$

for any closed loop.

## Circuit analysis workflow

1. Label nodes and currents.
2. Choose current directions arbitrarily.
3. Write junction equations.
4. Write loop equations with consistent sign conventions.
5. Solve algebraically.
6. Check signs: a negative current means the true direction is opposite your assumption.

## RC circuits

Charging capacitor:

$$
Q(t) = CV\left(1-e^{-t/RC}\right)
$$

Discharging capacitor:

$$
Q(t) = Q_0 e^{-t/RC}
$$

Time constant:

$$
\tau = RC
$$

After one time constant:

- Charging reaches about $63.2\%$ of final value.
- Discharging drops to about $36.8\%$ of initial value.

---

# Magnetic fields and magnetic forces

Magnetic fields act on moving charges and currents.

## Force on a moving charge

$$
\mathbf{F} = q\mathbf{v}\times \mathbf{B}
$$

Magnitude:

$$
F = |q|vB\sin\theta
$$

Important consequences:

- The magnetic force is perpendicular to velocity.
- A magnetic field does no work on a point charge because it does not change speed, only direction.

## Force on a current-carrying wire

For a wire segment:

$$
d\mathbf{F} = I\,d\mathbf{\ell}\times \mathbf{B}
$$

For a straight wire in uniform field:

$$
\mathbf{F} = I\mathbf{L}\times \mathbf{B}
$$

## Motion in a uniform magnetic field

A charge moving perpendicular to a uniform field follows circular motion.

Radius:

$$
r = \frac{mv}{|q|B}
$$

Cyclotron angular frequency:

$$
\omega = \frac{|q|B}{m}
$$

Period:

$$
T = \frac{2\pi m}{|q|B}
$$

If velocity has both parallel and perpendicular components, the path is helical.

---

# Sources of magnetic fields

Moving charge creates magnetic fields.

## Biot-Savart law

For a current element:

$$
d\mathbf{B} = \frac{\mu_0}{4\pi}\frac{I\,d\mathbf{\ell}\times \hat{\mathbf{r}}}{r^2}
$$

This is useful for direct integration when symmetry is limited.

## Ampere's law

$$
\oint \mathbf{B}\cdot d\mathbf{\ell} = \mu_0 I_{\text{enc}}
$$

This is especially effective for highly symmetric current distributions.

## Standard magnetic-field results

Long straight wire:

$$
B = \frac{\mu_0 I}{2\pi r}
$$

Long solenoid:

$$
B \approx \mu_0 n I
$$

where $n$ is turns per unit length.

Toroid:

$$
B = \frac{\mu_0 N I}{2\pi r}
$$

inside the core region.

## Direction rules

- Use the right-hand rule for current and magnetic field direction.
- Field lines form closed loops.
- Unlike electric field lines, magnetic field lines do not begin or end on isolated sources, because magnetic monopoles have not been observed in standard classical physics.

---

# Electromagnetic induction

Changing magnetic flux induces an electromotive force.

## Magnetic flux

$$
\Phi_B = \int \mathbf{B}\cdot d\mathbf{A}
$$

For uniform field:

$$
\Phi_B = BA\cos\theta
$$

## Faraday's law

$$
\mathcal{E} = -\frac{d\Phi_B}{dt}
$$

The negative sign is Lenz's law: the induced effect opposes the change in flux.

## Induced emf in a loop

Induction can come from:

- changing field strength
- changing loop area
- changing loop orientation
- relative motion between conductor and field

## Motional emf

For a conductor of length $L$ moving with speed $v$ perpendicular to a magnetic field:

$$
\mathcal{E} = BLv
$$

## Lenz's law

To find the direction of induced current:

1. Determine whether magnetic flux through the loop is increasing or decreasing.
2. Decide what induced magnetic field would oppose that change.
3. Use the right-hand rule to find the current direction.

This is one of the most common places where sign mistakes happen.

---

# Inductance and RL transients

An inductor resists changes in current because changing current changes magnetic flux.

## Self-inductance

$$
\Phi_B = LI
$$

Induced emf in an inductor:

$$
\mathcal{E} = -L\frac{dI}{dt}
$$

## Energy stored in an inductor

$$
U = \frac{1}{2}LI^2
$$

Energy density in a magnetic field:

$$
u_B = \frac{B^2}{2\mu_0}
$$

## RL circuits

Current growth in a series RL circuit:

$$
I(t) = I_{\infty}\left(1-e^{-tR/L}\right)
$$

Current decay:

$$
I(t) = I_0 e^{-tR/L}
$$

Time constant:

$$
\tau = \frac{L}{R}
$$

## Mutual inductance

Changing current in one coil can induce emf in another nearby coil. This is the principle behind transformers and many sensing systems.

---

# Maxwell's equations

Maxwell's equations unify electricity and magnetism.

## Integral form

Gauss's law for electricity:

$$
\oint \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}
$$

Gauss's law for magnetism:

$$
\oint \mathbf{B}\cdot d\mathbf{A} = 0
$$

Faraday's law:

$$
\oint \mathbf{E}\cdot d\mathbf{\ell} = -\frac{d\Phi_B}{dt}
$$

Ampere-Maxwell law:

$$
\oint \mathbf{B}\cdot d\mathbf{\ell} = \mu_0 I_{\text{enc}} + \mu_0\varepsilon_0 \frac{d\Phi_E}{dt}
$$

## What they mean

- Electric charges create electric fields.
- No isolated magnetic charges appear in classical theory.
- Changing magnetic fields create circulating electric fields.
- Currents and changing electric fields create magnetic fields.

## Why the displacement current term matters

The term

$$
\mu_0\varepsilon_0 \frac{d\Phi_E}{dt}
$$

fixes the inconsistency of Ampere's law for charging capacitors and makes the equations symmetric enough to predict electromagnetic waves.

## Electromagnetic waves

Maxwell's equations imply that self-propagating electric and magnetic fields travel at

$$
c = \frac{1}{\sqrt{\mu_0\varepsilon_0}}
$$

which is the speed of light in vacuum.

---

# Problem-solving workflow

Electromagnetism problems usually become manageable if you classify them correctly before doing algebra.

## Step 1: Identify the regime

- Electrostatics: charges at rest
- Current circuits: charges moving in steady state
- Magnetostatics: steady currents
- Induction: changing flux or changing currents

## Step 2: Choose the best law

- Coulomb's law for point charges
- Gauss's law for symmetric charge distributions
- Potential for scalar energy questions
- Kirchhoff's rules for DC circuits
- Ampere's law or Biot-Savart for magnetic fields
- Faraday's law for induced emf

## Step 3: Use symmetry aggressively

Symmetry often determines:

- the direction of the field
- whether the magnitude is constant on a surface or loop
- whether a direct integral is avoidable

## Step 4: Track signs carefully

Most errors come from:

- mixing up field direction and force direction
- forgetting that $\mathbf{F}=q\mathbf{E}$ reverses for negative charge
- missing the minus sign in Faraday's law
- using inconsistent loop directions in Kirchhoff equations

## Step 5: Sanity-check the result

Ask:

- Does the units match?
- Does the limit make sense as distance goes to infinity or zero?
- Does the sign agree with the physical direction?
- Does the answer reduce to a known special case?

---

# Formula summary

## Electrostatics

$$
\mathbf{F} = k\frac{q_1 q_2}{r^2}\hat{\mathbf{r}}
$$

$$
\mathbf{E} = \frac{\mathbf{F}}{q_0}
$$

$$
\Phi_E = \int \mathbf{E}\cdot d\mathbf{A}
$$

$$
\oint \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}
$$

$$
\Delta V = -\int \mathbf{E}\cdot d\mathbf{\ell}
$$

$$
U = qV
$$

## Capacitors

$$
C = \frac{Q}{\Delta V}
$$

$$
U = \frac{1}{2}CV^2 = \frac{Q^2}{2C}
$$

$$
C_{\text{series}}^{-1} = \sum_i C_i^{-1},\qquad C_{\text{parallel}} = \sum_i C_i
$$

## Circuits

$$
I = \frac{dQ}{dt}
$$

$$
V = IR
$$

$$
P = IV = I^2R = \frac{V^2}{R}
$$

$$
\tau_{RC} = RC,\qquad \tau_{RL} = \frac{L}{R}
$$

## Magnetism

$$
\mathbf{F} = q\mathbf{v}\times \mathbf{B}
$$

$$
d\mathbf{B} = \frac{\mu_0}{4\pi}\frac{I\,d\mathbf{\ell}\times \hat{\mathbf{r}}}{r^2}
$$

$$
\oint \mathbf{B}\cdot d\mathbf{\ell} = \mu_0 I_{\text{enc}}
$$

## Induction

$$
\Phi_B = \int \mathbf{B}\cdot d\mathbf{A}
$$

$$
\mathcal{E} = -\frac{d\Phi_B}{dt}
$$

$$
\mathcal{E} = -L\frac{dI}{dt}
$$

## Maxwell's equations

$$
\oint \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}
$$

$$
\oint \mathbf{B}\cdot d\mathbf{A} = 0
$$

$$
\oint \mathbf{E}\cdot d\mathbf{\ell} = -\frac{d\Phi_B}{dt}
$$

$$
\oint \mathbf{B}\cdot d\mathbf{\ell} = \mu_0 I_{\text{enc}} + \mu_0\varepsilon_0 \frac{d\Phi_E}{dt}
$$

## Common pitfalls

- Treating $E$ and $V$ as interchangeable.
- Applying Gauss's law without symmetry.
- Forgetting the vector nature of magnetic force.
- Using the right-hand rule inconsistently.
- Ignoring the sign convention in induction and circuit loops.

## Sources

- [OpenStax University Physics](https://openstax.org/subjects/science)
- [Physics LibreTexts](https://phys.libretexts.org/)
- Halliday, Resnick, and Walker, *Fundamentals of Physics*
- Serway and Jewett, *Physics for Scientists and Engineers*
- Griffiths, *Introduction to Electrodynamics*
- Griffiths, *Introduction to Quantum Mechanics*
- Taylor, *Classical Mechanics*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
