# Relativity

# Why relativity is needed

Classical mechanics assumes that space and time are absolute and that velocities add linearly. That works well when speeds are small compared with the speed of light, but it fails for:

- Particles moving near light speed
- Accurate timing in satellites and particle accelerators
- Strong gravitational fields

Relativity replaces absolute time with spacetime and ensures that the speed of light in vacuum,

$$
c \approx 3.00 \times 10^8\ \text{m/s}
$$

is the same for all inertial observers.

## When to use relativity

Use relativity when:

- A speed is a significant fraction of $c$
- The problem involves light signals, clocks, or simultaneity
- The problem asks for rest mass, rest energy, or invariant interval
- Gravity must be treated as curved spacetime rather than a force in flat space

For everyday speeds, classical formulas are usually adequate because relativistic corrections are tiny.

---

# Special Relativity

Path: `physics/special-relativity`

Special relativity describes physics in flat spacetime. The sections below cover the
special-relativistic toolkit in the order it is normally used.

# Special relativity: postulates and frames

Special relativity applies to inertial frames, meaning frames moving at constant velocity relative to one another.

## Postulates

1. The laws of physics are the same in all inertial frames.
2. The speed of light in vacuum is the same for all inertial observers.

These postulates force space and time to transform together.

## Reference frames

An inertial frame is one that is not accelerating.

Common notation:

- $S$ = unprimed frame
- $S'$ = frame moving at constant velocity $v$ relative to $S$

If the motion is along the $x$-axis, the standard analysis uses one-dimensional Lorentz transformations.

## Events

An **event** is something that happens at a particular place and time.

An event is represented by:

$$
(t, x, y, z)
$$

or, often, by the spacetime coordinate pair $(ct, x)$ in one dimension.

---

# Lorentz transformations

The Lorentz transformations relate the coordinates of the same event between two inertial frames moving at relative speed $v$ along the $x$-axis.

Define:

$$
\gamma = \frac{1}{\sqrt{1-\frac{v^2}{c^2}}}
$$

Then:

$$
x' = \gamma(x-vt)
$$

$$
t' = \gamma\left(t-\frac{vx}{c^2}\right)
$$

The inverse transformations are:

$$
x = \gamma(x'+vt')
$$

$$
t = \gamma\left(t'+\frac{vx'}{c^2}\right)
$$

## Galilean limit

If $v \ll c$, then $\gamma \approx 1$ and the Lorentz transformations reduce to the classical relations:

$$
x' \approx x-vt
$$

$$
t' \approx t
$$

## Interpretation

The transformations mix space and time. That is the mathematical reason that:

- Moving clocks run slow
- Moving rods contract along the direction of motion
- Simultaneity becomes frame-dependent

---

# Spacetime interval and causality

The spacetime interval between two events is invariant under Lorentz transformations.

In one spatial dimension:

$$
\Delta s^2 = c^2\Delta t^2 - \Delta x^2
$$

In three dimensions:

$$
\Delta s^2 = c^2\Delta t^2 - \Delta x^2 - \Delta y^2 - \Delta z^2
$$

The sign convention may vary by text, but the invariant content is the same.

## Interval classification

| Interval type | Condition | Interpretation |
| --- | ---: | --- |
| Timelike | $c^2\Delta t^2 > \Delta x^2+\Delta y^2+\Delta z^2$ | A causal signal moving slower than light can connect the events |
| Lightlike / null | Equality | Connected by a light signal |
| Spacelike | $c^2\Delta t^2 < \Delta x^2+\Delta y^2+\Delta z^2$ | No causal influence at or below light speed can connect them |

## Proper time

Proper time $\Delta \tau$ is the time measured by a clock that travels with the events when the interval is timelike.

For motion in one dimension:

$$
\Delta \tau = \Delta t\sqrt{1-\frac{v^2}{c^2}}
$$

and therefore:

$$
\Delta t = \gamma \Delta \tau
$$

Proper time is the shortest time elapsed between two timelike-separated events among inertial paths.

---

# Time dilation and length contraction

## Time dilation

A moving clock is observed to run slow.

If $\Delta \tau$ is the proper time measured in the clockÃ¢â‚¬â„¢s rest frame, then an observer who sees the clock moving measures:

$$
\Delta t = \gamma \Delta \tau
$$

where $\Delta t$ is larger than the proper time.

### Example pattern

If a muon has a proper lifetime of $\tau_0$ and moves at speed $v$, the observed lifetime is:

$$
\tau = \gamma \tau_0
$$

## Length contraction

An object moving relative to an observer is shortened along the direction of motion.

If $L_0$ is the proper length measured in the objectÃ¢â‚¬â„¢s rest frame, then the observed length is:

$$
L = \frac{L_0}{\gamma}
$$

Only the dimension parallel to the motion contracts.

## Proper quantities

- Proper time: time measured in the object's rest frame
- Proper length: length measured in the object's rest frame

These are the natural reference values in relativity problems.

---

# Relativity of simultaneity

Events that are simultaneous in one frame need not be simultaneous in another.

From the Lorentz transformation:

$$
t' = \gamma\left(t-\frac{vx}{c^2}\right)
$$

two events with $\Delta t = 0$ in one frame generally satisfy:

$$
\Delta t' = -\gamma \frac{v\Delta x}{c^2}
$$

if they are separated in space.

## Why it matters

Relativity of simultaneity is not a minor correction. It is the key idea that makes time dilation and length contraction consistent.

## Common interpretation trap

If two flashes occur at the same time in one frame, that does not mean they were emitted at the same time in every frame. The notion of Ã¢â‚¬Å“same timeÃ¢â‚¬Â is frame-dependent.

---

# Velocity and acceleration in relativity

Classical velocity addition fails at high speed.

## Velocity addition

For colinear velocities:

$$
u' = \frac{u-v}{1-\frac{uv}{c^2}}
$$

Equivalently, if an object moves at speed $u'$ in $S'$ and $S'$ moves at speed $v$ relative to $S$, then the speed in $S$ is:

$$
u = \frac{u'+v}{1+\frac{u'v}{c^2}}
$$

This formula guarantees that no result exceeds $c$ if the inputs are subluminal.

## Why speeds do not simply add

If $u' = c$, then:

$$
u = c
$$

for any inertial frame. Light speed is invariant.

## Relativistic momentum direction

For force and acceleration problems, the acceleration need not point in the same direction as the applied force in a simple Newtonian way because momentum depends on $\gamma$.

---

# Energy and momentum

Relativity unifies energy and momentum into a single framework.

## Relativistic momentum

$$
\mathbf{p} = \gamma m\mathbf{v}
$$

where $m$ is the invariant rest mass.

## Total energy

$$
E = \gamma mc^2
$$

## Rest energy

For an object at rest:

$$
E_0 = mc^2
$$

This is the most famous result in relativity.

## Kinetic energy

Relativistic kinetic energy is:

$$
K = E - E_0 = (\gamma - 1)mc^2
$$

For $v \ll c$, this approaches the classical form:

$$
K \approx \frac{1}{2}mv^2
$$

## Energy-momentum relation

The invariant relation is:

$$
E^2 = (pc)^2 + (mc^2)^2
$$

Special cases:

- If $m=0$:

$$
E = pc
$$

- If the particle is at rest:

$$
E = mc^2
$$

## Four-momentum

The four-momentum combines energy and momentum:

$$
P^\mu = \left(\frac{E}{c}, \mathbf{p}\right)
$$

Its invariant magnitude is tied to rest mass.

---

# Relativistic dynamics and collisions

The relativistic conservation laws look familiar, but the conserved quantities are different from the classical approximations.

## Conservation laws

In an isolated system:

- Total energy is conserved
- Total momentum is conserved
- Angular momentum is conserved

For collisions, use:

$$
\sum E_{in} = \sum E_{out}
$$

and

$$
\sum \mathbf{p}_{in} = \sum \mathbf{p}_{out}
$$

## Inelastic collisions

In relativity, kinetic energy can be converted into rest mass and vice versa, as long as total energy is conserved.

## Threshold and reaction problems

For particle reactions, use the invariant quantity before and after the event. The center-of-momentum frame is often the cleanest choice because the total momentum is zero there.

## Practical workflow

1. Identify the reference frame.
2. Write energy and momentum conservation.
3. Use the relativistic energy-momentum relation.
4. Keep $c$ explicit until the final step.
5. Check whether the result stays below $c$ for any material particle.

## Four-vectors in special relativity

A four-vector is an object whose components transform by the Lorentz transformation.
With the $(+---)$ metric convention, the position four-vector is

$$
X^\mu=(ct,x,y,z),\qquad X_\mu=\eta_{\mu\nu}X^\nu,
$$

where $\eta_{\mu\nu}=\operatorname{diag}(1,-1,-1,-1)$. Its invariant norm is
$X_\mu X^\mu=c^2t^2-\mathbf{x}^2$. Important examples are:

- four-velocity: $U^\mu=dX^\mu/d\tau=\gamma(c,\mathbf v)$;
- four-momentum: $P^\mu=mU^\mu=(E/c,\mathbf p)$;
- four-current: $J^\mu=(c\rho,\mathbf J)$;
- four-gradient: $\partial_\mu=(c^{-1}\partial_t,\nabla)$, with index placement set by the metric.

The four-momentum invariant gives

$$
P_\mu P^\mu=\frac{E^2}{c^2}-p^2=m^2c^2,
$$

which is equivalent to $E^2=(pc)^2+(mc^2)^2$. Four-vector notation makes conservation
laws frame-independent: $\sum P^\mu_{\rm in}=\sum P^\mu_{\rm out}$.

## Electromagnetism in covariant form

The scalar and vector potentials combine into the four-potential

$$
A^\mu=\left(\frac{\phi}{c},\mathbf A\right),
$$

and the electromagnetic field is represented by the antisymmetric field tensor
$F^{\mu\nu}=\partial^\mu A^\nu-\partial^\nu A^\mu$. Its components contain $\mathbf E$
and $\mathbf B$; therefore electric and magnetic fields are frame-dependent parts of
one electromagnetic field.

Maxwell's equations become

$$
\partial_\mu F^{\mu\nu}=\mu_0J^\nu,\qquad
\partial_{[\alpha}F_{\beta\gamma]}=0.
$$

The first equation contains Gauss's law and the AmpÃ¨reâ€“Maxwell law; the second contains
Gauss's law for magnetism and Faraday's law. A gauge transformation
$A^\mu\mapsto A^\mu+\partial^\mu\Lambda$ leaves $F^{\mu\nu}$ unchanged. The Lorentz
force law is $dp^\mu/d\tau=qF^{\mu\nu}U_\nu$, and charge conservation is
$\partial_\mu J^\mu=0$.

---

# General Relativity

Path: `physics/general-relativity`

General relativity describes gravity as geometry: matter determines spacetime
curvature, and freely falling matter follows geodesics.

## Tensors and manifolds

A smooth four-dimensional manifold is a set of events that locally resembles
$\mathbb R^4$. Coordinates $x^\mu$ are labels, not physical objects. A tensor is a
geometric object whose components transform consistently under coordinate changes.
The metric $g_{\mu\nu}$ defines lengths and inner products,

$$
ds^2=g_{\mu\nu}dx^\mu dx^\nu,
$$

and raises or lowers indices: $V_\mu=g_{\mu\nu}V^\nu$. Tensor equations are useful
because they have the same meaning in every coordinate system.

## Metrics and geodesics

The Leviâ€“Civita connection is

$$
\Gamma^\rho_{\mu\nu}=\frac12g^{\rho\sigma}
(\partial_\mu g_{\nu\sigma}+\partial_\nu g_{\mu\sigma}-\partial_\sigma g_{\mu\nu}).
$$

Free particles follow geodesics,

$$
\frac{d^2x^\rho}{d\tau^2}+\Gamma^\rho_{\mu\nu}
\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}=0.
$$

Null geodesics describe light rays; timelike geodesics describe massive freely
falling particles. Gravitational and kinematic time dilation are consequences of the
metric and the observer's worldline.

## Curvature

Curvature is measured by the Riemann tensor

$$
R^\rho{}_{\sigma\mu\nu}=\partial_\mu\Gamma^\rho_{\nu\sigma}-\partial_\nu\Gamma^\rho_{\mu\sigma}
+\Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma}-\Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma}.
$$

Contractions give the Ricci tensor $R_{\mu\nu}=R^\rho{}_{\mu\rho\nu}$ and scalar
$R=g^{\mu\nu}R_{\mu\nu}$. The Einstein tensor
$G_{\mu\nu}=R_{\mu\nu}-\tfrac12Rg_{\mu\nu}$ is divergence-free, ensuring consistency
with local stress-energy conservation.

## Einstein field equations

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu}.
$$

Here $T_{\mu\nu}$ contains energy density, momentum density, pressure, and stresses;
$\Lambda$ is the cosmological constant. In weak, slowly varying fields these equations
reduce to Newtonian gravity.

## Schwarzschild spacetime

Outside a static, spherically symmetric, uncharged mass $M$,

$$
ds^2=-\left(1-\frac{2GM}{rc^2}\right)c^2dt^2+
\left(1-\frac{2GM}{rc^2}\right)^{-1}dr^2+r^2d\Omega^2.
$$

The Schwarzschild radius is $r_s=2GM/c^2$. The surface $r=r_s$ is an event horizon
in these coordinates, while $r=0$ is a curvature singularity. Observable effects
include gravitational redshift, perihelion precession, light deflection, and black-hole
orbital dynamics.

## Gravitational waves

Small perturbations $h_{\mu\nu}$ about flat spacetime, $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$,
contain transverse, tensorial ripples that propagate at $c$. In the far field, changing
quadrupole moments generate waves; an isolated system's changing mass dipole does not.
The waves carry energy and produce measurable tidal strain, detected by comparing the
separations of freely falling test masses.

## Cosmological applications

Homogeneity and isotropy lead to the FLRW metric and scale factor $a(t)$. Einstein's
equations yield the Friedmann equations,

$$
H^2=\left(\frac{\dot a}{a}\right)^2=\frac{8\pi G}{3}\rho-\frac{kc^2}{a^2}+\frac{\Lambda c^2}{3},
$$

with matter density $\rho$, spatial-curvature parameter $k$, and cosmological constant
$\Lambda$. They describe cosmic expansion, redshift, curvature, and the influence of
matter, radiation, and dark energy. The conservation equation
$\dot\rho+3H(\rho+p/c^2)=0$ connects expansion to the equation of state.

---

# General relativity: gravity as geometry

Special relativity handles inertial frames. General relativity extends the framework to accelerated frames and gravity.

## Core idea

Gravity is not treated as an ordinary force in the Newtonian sense. Instead, mass-energy curves spacetime, and free-falling objects follow geodesics in that curved spacetime.

## Equivalence principle

Locally, being in a small freely falling elevator is indistinguishable from being in gravity-free inertial motion.

This principle explains why gravitational effects can be modeled geometrically.

## Stress-energy source

Matter and energy determine curvature. In broad terms:

- Energy density curves spacetime
- Curved spacetime affects motion

The full field equations are beyond most introductory treatments, but the conceptual link is essential.

## When general relativity matters

General relativity is important for:

- GPS timing corrections
- Black holes and neutron stars
- Precision orbital dynamics
- Gravitational lensing
- Cosmology

---

# Gravitational time dilation and light bending

## Gravitational time dilation

Clocks deeper in a gravitational field tick more slowly relative to clocks higher up.

Near a non-rotating spherical body, the qualitative result is:

- Lower gravitational potential means slower clock rate
- Higher gravitational potential means faster clock rate

This effect is measurable and must be corrected in satellite navigation.

## Gravitational redshift

Light climbing out of a gravitational field loses frequency and gains wavelength.

If frequency decreases, then:

$$
E = hf
$$

also decreases for the photon.

## Light bending

Light follows curved spacetime, so its path bends near massive objects.

This is one of the classic observational tests of general relativity.

---

# Common problem-solving workflow

Use this workflow for most relativity problems.

## Step 1: Identify the regime

Decide whether the problem is:

- Special relativity
- General relativity
- A classical limit where relativistic corrections are negligible

## Step 2: Choose the right frame

Pick the frame where the geometry or conservation law is simplest.

Common good choices:

- Rest frame of the particle
- Rest frame of the clock
- Center-of-momentum frame
- Frame in which an event occurs at a single point

## Step 3: List invariants

Useful invariants include:

- Speed of light $c$
- Spacetime interval
- Rest mass
- Total energy-momentum relation

## Step 4: Translate the geometry correctly

Be explicit about:

- Which events are simultaneous in which frame
- Which length is proper length
- Which time is proper time

## Step 5: Write the governing equations

For special relativity:

$$
\gamma = \frac{1}{\sqrt{1-\frac{v^2}{c^2}}}
$$

$$
\Delta t = \gamma \Delta \tau
$$

$$
E^2 = (pc)^2 + (mc^2)^2
$$

For collisions:

$$
\sum E_{in} = \sum E_{out}
$$

$$
\sum \mathbf{p}_{in} = \sum \mathbf{p}_{out}
$$

## Step 6: Check limits

Verify that your result reduces to the classical answer when $v \ll c$.

---

# Formula sheet

## Lorentz factor

$$
\gamma = \frac{1}{\sqrt{1-\frac{v^2}{c^2}}}
$$

## Lorentz transformations

$$
x' = \gamma(x-vt)
$$

$$
t' = \gamma\left(t-\frac{vx}{c^2}\right)
$$

## Interval

$$
\Delta s^2 = c^2\Delta t^2 - \Delta x^2 - \Delta y^2 - \Delta z^2
$$

## Time dilation

$$
\Delta t = \gamma \Delta \tau
$$

## Length contraction

$$
L = \frac{L_0}{\gamma}
$$

## Velocity addition

$$
u = \frac{u'+v}{1+\frac{u'v}{c^2}}
$$

## Momentum and energy

$$
\mathbf{p} = \gamma m\mathbf{v}
$$

$$
E = \gamma mc^2
$$

$$
E_0 = mc^2
$$

$$
K = (\gamma - 1)mc^2
$$

$$
E^2 = (pc)^2 + (mc^2)^2
$$

## Photon relations

For light:

$$
E = hf
$$

$$
E = pc
$$

---

# Common mistakes to avoid

- Using Galilean velocity addition when speeds are relativistic.
- Treating coordinate time as proper time.
- Forgetting that proper length is measured in the object's rest frame.
- Assuming simultaneity is universal.
- Mixing up which frame is $S$ and which is $S'$ in Lorentz transformations.
- Dropping factors of $c$ too early.
- Using $K = \frac{1}{2}mv^2$ at high speed.
- Forgetting that momentum is $\gamma mv$, not just $mv$.
- Applying special-relativity formulas to strong gravity without checking the model.
- Confusing gravitational time dilation with Doppler shift, which are related but not the same effect.

## Sources

- [OpenStax University Physics](https://openstax.org/subjects/science)
- [Physics LibreTexts](https://phys.libretexts.org/)
- Halliday, Resnick, and Walker, *Fundamentals of Physics*
- Serway and Jewett, *Physics for Scientists and Engineers*
- Griffiths, *Introduction to Electrodynamics*
- Griffiths, *Introduction to Quantum Mechanics*
- Taylor, *Classical Mechanics*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
