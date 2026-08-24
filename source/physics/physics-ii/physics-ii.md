# Physics II

# Electric charge and Coulomb's law

## Charge

Charge comes in two signs:

- Positive
- Negative

Important facts:

- Like charges repel.
- Opposite charges attract.
- Total charge is conserved in isolated systems.
- Charge is quantized in integer multiples of the elementary charge $e$.

$$
q = n e
$$

## Coulomb's law

The electric force between two point charges is

$$
F = k \frac{|q_1 q_2|}{r^2}
$$

in the direction along the line joining the charges.

Vector form:

$$
\mathbf{F}_{12} = k \frac{q_1 q_2}{r^2} \hat{\mathbf{r}}_{12}
$$

where $\hat{\mathbf{r}}_{12}$ points from charge 1 toward charge 2.

## Superposition

For multiple charges, add forces vectorially:

$$
\mathbf{F}_{net} = \sum_i \mathbf{F}_i
$$

For continuous charge distributions, replace the sum with an integral.

## Common pitfalls

- Forgetting that force is a vector.
- Using the magnitude of charge but losing the sign when finding direction.
- Mixing meters and centimeters.
- Treating distributed charge like a point charge when geometry matters.

---

# Electric field and flux

## Electric field

The electric field is force per unit positive test charge:

$$
\mathbf{E} = \frac{\mathbf{F}}{q_0}
$$

For a point charge:

$$
\mathbf{E} = k \frac{q}{r^2}\hat{\mathbf{r}}
$$

The field points away from positive charge and toward negative charge.

## Field from multiple charges

Use superposition:

$$
\mathbf{E}_{net} = \sum_i \mathbf{E}_i
$$

For continuous charge:

$$
d\mathbf{E} = k \frac{dq}{r^2}\hat{\mathbf{r}}
$$

and integrate over the charge distribution.

## Electric flux

Flux measures how much electric field passes through a surface:

$$
\Phi_E = \int \mathbf{E}\cdot d\mathbf{A}
$$

For uniform $\mathbf{E}$ over a flat surface:

$$
\Phi_E = EA\cos\theta
$$

where $\theta$ is the angle between $\mathbf{E}$ and the surface normal.

## Physical interpretation

- Large flux can come from a strong field, a large area, or favorable orientation.
- Flux can be positive or negative depending on the sign of $\mathbf{E}\cdot d\mathbf{A}$.

---

# Gauss's law

Gauss's law relates electric flux through a closed surface to enclosed charge:

$$
\oint \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{enc}}{\epsilon_0}
$$

## When Gauss's law is useful

Gauss's law is always true, but it is only easy to use when symmetry makes $E$ constant on the chosen Gaussian surface.

Typical symmetries:

- Spherical symmetry
- Cylindrical symmetry
- Planar symmetry

## Common results

For a point charge or spherically symmetric charge distribution:

$$
E = k \frac{Q}{r^2}
$$

For an infinite line charge with linear density $\lambda$:

$$
E = \frac{\lambda}{2\pi\epsilon_0 r}
$$

For an infinite charged sheet with surface density $\sigma$:

$$
E = \frac{\sigma}{2\epsilon_0}
$$

For a conducting surface:

- Electric field inside the conductor is zero in electrostatic equilibrium.
- Excess charge resides on the surface.
- Just outside a conductor,

$$
E_\perp = \frac{\sigma}{\epsilon_0}
$$

## Problem strategy

1. Identify the symmetry.
2. Choose a Gaussian surface that matches the symmetry.
3. Argue where $E$ is constant and where $\mathbf{E}\cdot d\mathbf{A}$ is zero.
4. Integrate flux.
5. Solve for $E$.

---

# Electric potential and potential energy

## Potential energy

Electric potential energy of a charge $q$ in a potential $V$ is

$$
U = qV
$$

The change in potential energy is

$$
\Delta U = q \Delta V
$$

## Electric potential

Potential is potential energy per unit charge:

$$
V = \frac{U}{q}
$$

Potential difference is defined by the work done by the field:

$$
\Delta V = -\int \mathbf{E}\cdot d\mathbf{l}
$$

## Point charge potential

For a point charge:

$$
V = k\frac{q}{r}
$$

Potential is scalar, so use superposition:

$$
V_{net} = \sum_i V_i
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

This means:

- The field points toward decreasing potential.
- Equipotential surfaces are perpendicular to $\mathbf{E}$.

## Useful reasoning pattern

If a problem asks for energy change, the potential route is usually simpler:

$$
\Delta K = -\Delta U = -q \Delta V
$$

for electrostatic motion with no nonconservative work.

---

# Capacitance and dielectrics

## Capacitors

A capacitor stores separated charge and energy.

Definition:

$$
C = \frac{Q}{\Delta V}
$$

Parallel-plate capacitor:

$$
C = \epsilon_0 \frac{A}{d}
$$

with dielectric:

$$
C = \kappa \epsilon_0 \frac{A}{d}
$$

where $\kappa$ is the dielectric constant.

## Series and parallel

Parallel:

$$
C_{eq} = \sum_i C_i
$$

Series:

$$
\frac{1}{C_{eq}} = \sum_i \frac{1}{C_i}
$$

## Energy stored

The energy stored in a capacitor is

$$
U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}
$$

Energy density in an electric field:

$$
u_E = \frac{1}{2}\epsilon_0 E^2
$$

## Dielectrics

A dielectric reduces the effective field inside the capacitor and increases capacitance.

Typical effects:

- Capacitance increases by factor $\kappa$ if geometry is unchanged.
- For an isolated charged capacitor, inserting a dielectric lowers the voltage.
- For a capacitor held at fixed voltage, inserting a dielectric increases charge.

---

# Current, resistance, and DC circuits

## Current

Electric current is rate of charge flow:

$$
I = \frac{dq}{dt}
$$

Conventional current is defined in the direction positive charge would move.

## Ohm's law

For an ohmic conductor:

$$
V = IR
$$

Resistance depends on material and geometry:

$$
R = \rho \frac{L}{A}
$$

where $\rho$ is resistivity.

## Microscopic view

Current density:

$$
\mathbf{J} = \frac{I}{A}
$$

and for many materials:

$$
\mathbf{J} = \sigma \mathbf{E}
$$

where $\sigma = 1/\rho$ is conductivity.

## Power

Electrical power:

$$
P = IV = I^2R = \frac{V^2}{R}
$$

## Kirchhoff's rules

### Junction rule

At a node, charge is conserved:

$$
\sum I_{in} = \sum I_{out}
$$

### Loop rule

Around any closed loop, total potential change is zero:

$$
\sum \Delta V = 0
$$

## Resistor combinations

Series:

$$
R_{eq} = \sum_i R_i
$$

Parallel:

$$
\frac{1}{R_{eq}} = \sum_i \frac{1}{R_i}
$$

## RC circuits

Capacitor charging:

$$
Q(t) = C\mathcal{E}\left(1 - e^{-t/RC}\right)
$$

Capacitor discharging:

$$
Q(t) = Q_0 e^{-t/RC}
$$

Time constant:

$$
\tau = RC
$$

Interpretation:

- After one time constant, charging reaches about 63% of its final value.
- After one time constant, discharging falls to about 37% of its initial value.

## Circuit problem checklist

1. Redraw the circuit cleanly.
2. Label nodes and assumed current directions.
3. Reduce any obvious series and parallel groups.
4. Apply Kirchhoff equations.
5. Check the sign of any negative current or voltage result.

---

# Magnetic fields and magnetic force

## Magnetic field

Magnetic fields are produced by moving charges and currents.

The magnetic force on a moving charge is

$$
\mathbf{F} = q \mathbf{v}\times \mathbf{B}
$$

Magnitude:

$$
F = |q|vB\sin\theta
$$

The magnetic force is always perpendicular to velocity, so it changes direction, not speed, in the ideal case.

## Force on a current-carrying wire

For a wire segment:

$$
d\mathbf{F} = I\, d\mathbf{l}\times \mathbf{B}
$$

For a straight segment of length $L$ in a uniform field:

$$
F = ILB\sin\theta
$$

## Right-hand rule

Use the right hand for cross products:

- Fingers along $\mathbf{v}$ or current direction
- Curl toward $\mathbf{B}$
- Thumb gives force direction for a positive charge or current segment

## Circular motion in a magnetic field

If a charged particle moves perpendicular to a uniform magnetic field, it undergoes circular motion:

$$
r = \frac{mv}{|q|B}
$$

Cyclotron frequency:

$$
\omega = \frac{|q|B}{m}
$$

---

# Sources of magnetic fields

## Biot-Savart law

For a current element:

$$
d\mathbf{B} = \frac{\mu_0}{4\pi}\frac{I\,d\mathbf{l}\times \hat{\mathbf{r}}}{r^2}
$$

This is the magnetic analogue of Coulomb's law for current elements.

## Ampere's law

For a closed loop:

$$
\oint \mathbf{B}\cdot d\mathbf{l} = \mu_0 I_{enc}
$$

Use Ampere's law when symmetry makes $B$ constant on the chosen path.

## Common results

Long straight wire:

$$
B = \frac{\mu_0 I}{2\pi r}
$$

Long solenoid:

$$
B = \mu_0 n I
$$

where $n$ is turns per unit length.

Toroid:

$$
B = \frac{\mu_0 N I}{2\pi r}
$$

inside the core region.

## Magnetic materials

At the introductory level, magnetic materials are often treated through the idea that matter can enhance or weaken the effective field, but the core laws above remain the main tools for problem solving.

---

# Electromagnetic induction

## Magnetic flux

Magnetic flux is

$$
\Phi_B = \int \mathbf{B}\cdot d\mathbf{A}
$$

For a uniform field:

$$
\Phi_B = BA\cos\theta
$$

## Faraday's law

Changing magnetic flux induces an emf:

$$
\mathcal{E} = -\frac{d\Phi_B}{dt}
$$

The minus sign is Lenz's law: the induced effect opposes the flux change.

## Motional emf

For a rod of length $L$ moving with speed $v$ perpendicular to $B$:

$$
\mathcal{E} = BLv
$$

## Induced current

If the circuit resistance is $R$:

$$
I = \frac{\mathcal{E}}{R}
$$

## Inductance

An inductor resists changes in current.

Definition:

$$
\mathcal{E}_L = -L\frac{dI}{dt}
$$

Energy stored in an inductor:

$$
U = \frac{1}{2}LI^2
$$

Magnetic energy density:

$$
u_B = \frac{B^2}{2\mu_0}
$$

## RL circuits

Current growth:

$$
I(t) = I_{max}\left(1 - e^{-tR/L}\right)
$$

Current decay:

$$
I(t) = I_0 e^{-tR/L}
$$

Time constant:

$$
\tau = \frac{L}{R}
$$

---

# AC circuits and resonance

## Sinusoidal voltage and current

For an AC source:

$$
V(t) = V_0 \sin(\omega t)
$$

RMS values:

$$
V_{rms} = \frac{V_0}{\sqrt{2}}, \qquad I_{rms} = \frac{I_0}{\sqrt{2}}
$$

## Reactance

Inductive reactance:

$$
X_L = \omega L
$$

Capacitive reactance:

$$
X_C = \frac{1}{\omega C}
$$

## Impedance in series RLC

$$
Z = \sqrt{R^2 + (X_L - X_C)^2}
$$

Current amplitude:

$$
I_0 = \frac{V_0}{Z}
$$

Phase angle:

$$
\tan \phi = \frac{X_L - X_C}{R}
$$

## Resonance

Resonance occurs when:

$$
X_L = X_C
$$

so the impedance is minimized in a series RLC circuit.

Resonant angular frequency:

$$
\omega_0 = \frac{1}{\sqrt{LC}}
$$

At resonance:

- Current is maximum in a series RLC circuit.
- Voltage and current are in phase.

---

# Electromagnetic waves

Changing electric and magnetic fields sustain each other and propagate as electromagnetic waves.

## Wave speed

In vacuum:

$$
c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}
$$

## Field structure

For a plane EM wave:

- $\mathbf{E} \perp \mathbf{B}$
- Both are perpendicular to the direction of propagation
- The fields are in phase

## Field magnitudes

In vacuum:

$$
E = cB
$$

## Energy transport

Intensity is power per area:

$$
I = \frac{P}{A}
$$

The wave carries energy and momentum.

## Spectrum

The electromagnetic spectrum includes:

- Radio
- Microwave
- Infrared
- Visible
- Ultraviolet
- X-ray
- Gamma ray

Frequency increases while wavelength decreases across that sequence.

---

# Optics and light

Many Physics II courses end with geometrical optics and basic wave optics.

## Reflection

Law of reflection:

$$
\theta_i = \theta_r
$$

## Refraction

Snell's law:

$$
n_1\sin\theta_1 = n_2\sin\theta_2
$$

Index of refraction:

$$
n = \frac{c}{v}
$$

## Total internal reflection

Occurs when light goes from higher to lower refractive index and the incident angle exceeds the critical angle:

$$
\sin\theta_c = \frac{n_2}{n_1}
$$

for $n_1 > n_2$.

## Thin lenses and mirrors

Mirror and lens equation:

$$
\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}
$$

Magnification:

$$
m = -\frac{d_i}{d_o} = \frac{h_i}{h_o}
$$

## Interference and diffraction

For two-source interference, constructive interference occurs when path difference is

$$
\Delta r = m\lambda
$$

and destructive interference occurs when

$$
\Delta r = \left(m+\frac{1}{2}\right)\lambda
$$

for integer $m$.

## Double-slit pattern

For slit separation $d$ and screen distance $L$:

$$
y_m \approx \frac{m\lambda L}{d}
$$

for small angles.

## Single-slit minima

Minima occur when

$$
a\sin\theta = m\lambda
$$

for slit width $a$ and nonzero integer $m$.

---

# Problem-solving workflow

1. Identify the topic family: electrostatics, circuits, magnetism, induction, AC, waves, or optics.
2. Draw the geometry and label all known quantities.
3. Choose the governing law:
   - Coulomb's law or superposition
   - Gauss's law
   - Potential relations
   - Kirchhoff's rules
   - Ampere's law
   - Faraday's law
   - Wave or optics equations
4. Track signs and directions carefully.
5. Check units at the end.
6. Test limiting cases if possible.

## Typical mistakes

- Mixing up electric field and electric potential
- Using the wrong sign in loop or flux equations
- Forgetting that magnetic force is perpendicular to velocity
- Applying Gauss's law when symmetry is not sufficient
- Forgetting RMS values in AC problems
- Using degrees and radians inconsistently in wave formulas

---

# Formula summary

## Electrostatics

$$
\mathbf{F} = k\frac{q_1q_2}{r^2}\hat{\mathbf{r}}
$$

$$
\mathbf{E} = \frac{\mathbf{F}}{q_0}
$$

$$
\oint \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{enc}}{\epsilon_0}
$$

$$
V = k\frac{q}{r}
$$

$$
\mathbf{E} = -\nabla V
$$

## Capacitors and circuits

$$
C = \frac{Q}{\Delta V}
$$

$$
R = \rho \frac{L}{A}
$$

$$
V = IR
$$

$$
P = IV = I^2R = \frac{V^2}{R}
$$

$$
\tau_{RC} = RC
$$

## Magnetism and induction

$$
\mathbf{F} = q\mathbf{v}\times\mathbf{B}
$$

$$
\oint \mathbf{B}\cdot d\mathbf{l} = \mu_0 I_{enc}
$$

$$
\mathcal{E} = -\frac{d\Phi_B}{dt}
$$

$$
\mathcal{E}_L = -L\frac{dI}{dt}
$$

$$
\tau_{RL} = \frac{L}{R}
$$

## AC and waves

$$
V_{rms} = \frac{V_0}{\sqrt{2}}
$$

$$
X_L = \omega L,\qquad X_C = \frac{1}{\omega C}
$$

$$
Z = \sqrt{R^2 + (X_L - X_C)^2}
$$

$$
f = \frac{1}{T},\qquad \omega = 2\pi f
$$

$$
c = \frac{1}{\sqrt{\mu_0\epsilon_0}}
$$

## Optics

$$
n_1\sin\theta_1 = n_2\sin\theta_2
$$

$$
\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}
$$

$$
\Delta r = m\lambda
$$

$$
a\sin\theta = m\lambda
$$

## Sources

- [OpenStax University Physics](https://openstax.org/subjects/science)
- [Physics LibreTexts](https://phys.libretexts.org/)
- Halliday, Resnick, and Walker, *Fundamentals of Physics*
- Serway and Jewett, *Physics for Scientists and Engineers*
- Griffiths, *Introduction to Electrodynamics*
- Griffiths, *Introduction to Quantum Mechanics*
- Taylor, *Classical Mechanics*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
