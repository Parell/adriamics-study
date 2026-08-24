# Classical Mechanics

# Kinematics in one and three dimensions

Kinematics describes motion without explaining its cause.

## Position, velocity, and acceleration

In one dimension:

$$
v = \frac{dx}{dt}
$$

$$
a = \frac{dv}{dt} = \frac{d^2x}{dt^2}
$$

In vector form:

$$
\mathbf{v} = \frac{d\mathbf{r}}{dt}
$$

$$
\mathbf{a} = \frac{d\mathbf{v}}{dt}
$$

## Constant-acceleration relations

For constant acceleration in one dimension:

$$
v = v_0 + at
$$

$$
x = x_0 + v_0 t + \frac{1}{2}at^2
$$

$$
v^2 = v_0^2 + 2a(x - x_0)
$$

$$
x - x_0 = \frac{1}{2}(v + v_0)t
$$

These are valid only when acceleration is constant.

## Projectile motion

For ideal projectile motion with no air resistance:

- horizontal acceleration is zero
- vertical acceleration is $-g$

So:

$$
x(t) = x_0 + v_{0x}t
$$

$$
y(t) = y_0 + v_{0y}t - \frac{1}{2}gt^2
$$

The trajectory is parabolic.

## Relative motion

If frame $B$ moves relative to frame $A$, then:

$$
\mathbf{r}_{P/A} = \mathbf{r}_{P/B} + \mathbf{r}_{B/A}
$$

Velocities and accelerations follow by differentiating with respect to time.

This is essential in moving-platform and rotating-frame problems.

---

# Newton's laws and free-body diagrams

Newton's laws connect force to motion.

## Newton's first law

A body remains at rest or moves with constant velocity unless acted on by a net external force.

This defines an inertial frame.

## Newton's second law

For a particle:

$$
\sum \mathbf{F} = m\mathbf{a}
$$

In components:

$$
\sum F_x = ma_x,\quad \sum F_y = ma_y,\quad \sum F_z = ma_z
$$

## Newton's third law

For every action there is an equal and opposite reaction.

If body A exerts a force on body B, then body B exerts an equal-magnitude opposite-direction force on body A.

## Free-body diagrams

A free-body diagram is the main setup tool in dynamics.

Include only external forces acting on the chosen body.

Typical forces:

- weight: $\mathbf{W} = m\mathbf{g}$
- normal force
- tension
- spring force: $\mathbf{F} = -k\mathbf{x}$
- friction
- drag

## Friction

Static friction satisfies:

$$
f_s \le \mu_s N
$$

Kinetic friction is approximately:

$$
f_k = \mu_k N
$$

Friction opposes relative or impending motion.

## Inertial and non-inertial frames

Newton's second law holds in inertial frames.

In accelerating or rotating frames, fictitious forces may be needed to preserve a Newtonian form.

---

# Work, energy, and power

Energy methods are often simpler than force balance when displacement is the main unknown.

## Work

For a force $\mathbf{F}$ along displacement $d\mathbf{r}$:

$$
dW = \mathbf{F}\cdot d\mathbf{r}
$$

So total work is:

$$
W = \int \mathbf{F}\cdot d\mathbf{r}
$$

For constant force over displacement $\Delta \mathbf{r}$:

$$
W = \mathbf{F}\cdot \Delta \mathbf{r}
$$

## Kinetic energy

$$
T = \frac{1}{2}mv^2
$$

## Work-energy theorem

Net work equals change in kinetic energy:

$$
W_{\text{net}} = \Delta T
$$

## Conservative forces and potential energy

A force is conservative if work depends only on initial and final positions.

Examples:

- gravity
- ideal spring force

For conservative forces, define potential energy $V$ such that:

$$
\mathbf{F} = -\nabla V
$$

In one dimension:

$$
F(x) = -\frac{dV}{dx}
$$

Common potentials:

$$
V_g = mgh
$$

$$
V_s = \frac{1}{2}kx^2
$$

## Conservation of mechanical energy

If only conservative forces act:

$$
T_1 + V_1 = T_2 + V_2
$$

More generally, nonconservative work changes mechanical energy:

$$
T_1 + V_1 + W_{nc} = T_2 + V_2
$$

## Power

Power is the rate of doing work:

$$
P = \frac{dW}{dt}
$$

For a force:

$$
P = \mathbf{F}\cdot \mathbf{v}
$$

---

# Momentum, impulse, and collisions

## Linear momentum

$$
\mathbf{p} = m\mathbf{v}
$$

Newton's second law can be written as:

$$
\sum \mathbf{F} = \frac{d\mathbf{p}}{dt}
$$

## Impulse

Impulse is the time integral of force:

$$
\mathbf{J} = \int_{t_1}^{t_2} \mathbf{F}\,dt
$$

Impulse-momentum relation:

$$
\mathbf{J} = \Delta \mathbf{p}
$$

This is especially useful for short-duration forces like impacts.

## Conservation of linear momentum

If the net external impulse is negligible, total momentum is conserved:

$$
\sum \mathbf{p}_{\text{before}} = \sum \mathbf{p}_{\text{after}}
$$

This is often the best approach for collisions and explosions.

## Collisions

### Perfectly inelastic collision

Bodies stick together after impact. Momentum is conserved, kinetic energy is not.

### Elastic collision

Momentum and kinetic energy are both conserved.

### Coefficient of restitution

In one dimension:

$$
e = \frac{\text{relative speed of separation}}{\text{relative speed of approach}}
$$

with $0 \le e \le 1$.

## Center of mass

For discrete masses:

$$
\mathbf{r}_{cm} = \frac{\sum m_i \mathbf{r}_i}{\sum m_i}
$$

The center of mass moves as if all external force were applied there:

$$
\sum \mathbf{F}_{ext} = M\mathbf{a}_{cm}
$$

---

# Rotation and rigid bodies

Rigid-body motion includes translation and rotation.

## Angular variables

Angular displacement:

$$
\theta
$$

Angular velocity:

$$
\omega = \frac{d\theta}{dt}
$$

Angular acceleration:

$$
\alpha = \frac{d\omega}{dt}
$$

## Rotational kinematics

For constant angular acceleration:

$$
\omega = \omega_0 + \alpha t
$$

$$
\theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2
$$

$$
\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)
$$

## Linear and angular relations

For a point at radius $r$:

$$
v = r\omega
$$

$$
a_t = r\alpha
$$

$$
a_n = r\omega^2
$$

Tangential acceleration changes speed, normal acceleration changes direction.

## Moment of inertia

Moment of inertia measures resistance to angular acceleration:

$$
I = \int r^2\,dm
$$

Discrete form:

$$
I = \sum m_i r_i^2
$$

Common results:

- point mass: $I = mr^2$
- rod about center: $I = \frac{1}{12}mL^2$
- rod about end: $I = \frac{1}{3}mL^2$
- solid disk: $I = \frac{1}{2}mR^2$
- hoop: $I = mR^2$

## Parallel-axis theorem

If $I_{cm}$ is moment of inertia about a center-of-mass axis, then for a parallel axis offset by $d$:

$$
I = I_{cm} + md^2
$$

## Rotational kinetic energy

$$
T_{rot} = \frac{1}{2}I\omega^2
$$

For rolling motion, total kinetic energy is often:

$$
T = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2
$$

## Rolling without slipping

The no-slip condition is:

$$
v_{cm} = R\omega
$$

and similarly:

$$
a_{cm} = R\alpha
$$

Rolling problems often combine translation, rotation, and static friction.

---

# Angular momentum and torque

## Torque

Torque is the rotational effect of force:

$$
\boldsymbol{\tau} = \mathbf{r}\times \mathbf{F}
$$

Magnitude:

$$
\tau = rF\sin\phi
$$

where $\phi$ is the angle between $\mathbf{r}$ and $\mathbf{F}$.

## Rotational equation of motion

For a rigid body about a fixed axis:

$$
\sum \tau = I\alpha
$$

## Angular momentum

For a particle:

$$
\mathbf{L} = \mathbf{r}\times \mathbf{p}
$$

For a rigid body about a fixed axis:

$$
L = I\omega
$$

## Angular impulse-momentum

$$
\int_{t_1}^{t_2}\boldsymbol{\tau}\,dt = \Delta \mathbf{L}
$$

## Conservation of angular momentum

If the net external torque is zero:

$$
\mathbf{L}_{before} = \mathbf{L}_{after}
$$

This is especially useful for:

- spinning skaters
- satellites
- planetary motion
- rotating collisions

---

# Oscillations and simple harmonic motion

## Simple harmonic motion

A system exhibits simple harmonic motion when the restoring force is proportional to displacement and directed toward equilibrium:

$$
F = -kx
$$

Then:

$$
m\ddot{x} + kx = 0
$$

with solution:

$$
x(t) = A\cos(\omega t + \phi)
$$

where

$$
\omega = \sqrt{\frac{k}{m}}
$$

## Period and frequency

$$
T = \frac{2\pi}{\omega}
$$

$$
f = \frac{1}{T}
$$

## Velocity and acceleration in SHM

If

$$
x(t) = A\cos(\omega t + \phi)
$$

then

$$
v(t) = -A\omega\sin(\omega t + \phi)
$$

$$
a(t) = -\omega^2 x(t)
$$

The acceleration is always directed toward equilibrium.

## Energy in SHM

Total energy is constant:

$$
E = \frac{1}{2}kA^2
$$

with exchange between kinetic and potential energy:

$$
T = \frac{1}{2}mv^2,\qquad V = \frac{1}{2}kx^2
$$

## Damping and forcing

Real oscillators may include damping and external forcing:

$$
m\ddot{x} + c\dot{x} + kx = F_0\cos(\Omega t)
$$

Important behaviors:

- underdamping: oscillates with decaying amplitude
- critical damping: fastest return without oscillation
- overdamping: non-oscillatory and slower
- resonance: large response near natural frequency

---

# Gravitation and central forces

## Newton's law of gravitation

Two masses attract with force:

$$
F = G\frac{m_1m_2}{r^2}
$$

directed along the line joining them.

## Gravitational potential energy

For two masses:

$$
U(r) = -G\frac{m_1m_2}{r}
$$

Near Earth, the approximation

$$
U \approx mgh
$$

is valid for small height changes.

## Circular orbits

For a body of mass $m$ in a circular orbit of radius $r$ around mass $M$:

$$
\frac{mv^2}{r} = G\frac{Mm}{r^2}
$$

so

$$
v = \sqrt{\frac{GM}{r}}
$$

The orbital period is

$$
T = 2\pi \sqrt{\frac{r^3}{GM}}
$$

## Central-force intuition

In central-force motion:

- force points toward or away from a center
- angular momentum is conserved
- motion often reduces to an effective one-dimensional radial problem

---

# Constraints, equilibrium, and statics

Static equilibrium means no translational or rotational acceleration.

## Equilibrium conditions

For a particle:

$$
\sum \mathbf{F} = 0
$$

For a rigid body:

$$
\sum \mathbf{F} = 0
$$

$$
\sum \tau = 0
$$

## Typical statics workflow

1. Draw the free-body diagram.
2. Choose convenient axes.
3. Write force-balance equations.
4. Write torque-balance equations about a smart pivot.
5. Solve for unknown reactions, tensions, or loads.

## Constraints

Constraints reduce the degrees of freedom of a system.

Examples:

- bead constrained on a wire
- block on an incline
- pulley system
- rigid rod with pinned supports

Constraint forces often do no work in idealized models, but they still matter in force balance.

---

# Lagrangian and Hamiltonian ideas

The Lagrangian formulation is a higher-level way to derive equations of motion.

## Generalized coordinates

Instead of using Cartesian coordinates directly, choose coordinates $q_i$ that describe the degrees of freedom efficiently.

Examples:

- pendulum angle $\theta$
- spring extension $x$
- orbital radius $r$

## Lagrangian

$$
\mathcal{L} = T - V
$$

The Euler-Lagrange equation is:

$$
\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}_i}\right) - \frac{\partial \mathcal{L}}{\partial q_i} = 0
$$

for each generalized coordinate $q_i$.

## Why use Lagrange's equations

- constraints are handled naturally
- coordinate choice can match the geometry
- fewer force components may need to be resolved

## Canonical momentum

For coordinate $q_i$:

$$
p_i = \frac{\partial \mathcal{L}}{\partial \dot{q}_i}
$$

## Hamiltonian idea

The Hamiltonian is often the total energy written in terms of coordinates and momenta:

$$
\mathcal{H} = \sum_i p_i \dot{q}_i - \mathcal{L}
$$

In many standard mechanical systems,

$$
\mathcal{H} = T + V
$$

though this is not universal in all formulations.

---

# Problem-solving workflow

## Start with the model

Ask:

- Is the body a particle, rigid body, or system of interacting bodies?
- Is the goal acceleration, velocity, position, force, energy, or time?
- Are there constraints, collisions, or rotational effects?

## Choose the right tool

- Use Newton's laws for direct force-acceleration problems.
- Use energy when forces are conservative or the path is complicated.
- Use momentum for collisions and short impulses.
- Use torque and angular momentum for rotation.
- Use equilibrium equations for static systems.

## Common pitfalls

- Mixing up mass and weight
- Using energy methods while forgetting nonconservative work
- Forgetting direction in vector quantities
- Applying constant-acceleration formulas when acceleration is not constant
- Using the wrong sign convention for torque or angular variables
- Treating a rolling object as pure translation
- Ignoring whether the frame is inertial

## Sanity checks

- Do units match on both sides?
- Does the result reduce to a known special case?
- Does the sign make physical sense?
- Is the answer bounded or physically plausible?

---

# Formula summary

## Kinematics

$$
v = \frac{dx}{dt}, \qquad a = \frac{dv}{dt}
$$

$$
v = v_0 + at
$$

$$
x = x_0 + v_0t + \frac{1}{2}at^2
$$

## Newtonian dynamics

$$
\sum \mathbf{F} = m\mathbf{a}
$$

## Work and energy

$$
W = \int \mathbf{F}\cdot d\mathbf{r}
$$

$$
T = \frac{1}{2}mv^2
$$

$$
W_{net} = \Delta T
$$

$$
T_1 + V_1 + W_{nc} = T_2 + V_2
$$

## Momentum

$$
\mathbf{p} = m\mathbf{v}
$$

$$
\mathbf{J} = \int \mathbf{F}\,dt = \Delta \mathbf{p}
$$

## Rotation

$$
\tau = rF\sin\phi
$$

$$
\sum \tau = I\alpha
$$

$$
L = I\omega
$$

$$
\mathbf{L} = \mathbf{r}\times \mathbf{p}
$$

$$
T_{rot} = \frac{1}{2}I\omega^2
$$

## Spring and SHM

$$
F = -kx
$$

$$
\omega = \sqrt{\frac{k}{m}}
$$

$$
T = \frac{2\pi}{\omega}
$$

## Gravitation

$$
F = G\frac{m_1m_2}{r^2}
$$

$$
U = -G\frac{m_1m_2}{r}
$$

## Rolling

$$
v_{cm} = R\omega
$$

## Lagrangian form

$$
\mathcal{L} = T - V
$$

$$
\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}_i}\right) - \frac{\partial \mathcal{L}}{\partial q_i} = 0
$$

## Compact takeaway

Classical mechanics is mostly about choosing the right representation:

- force balance for instantaneous dynamics
- energy for path-independent force fields
- momentum for impacts and isolated systems
- torque and angular momentum for rotation
- generalized coordinates for constrained motion

## Sources

- [OpenStax University Physics](https://openstax.org/subjects/science)
- [Physics LibreTexts](https://phys.libretexts.org/)
- Halliday, Resnick, and Walker, *Fundamentals of Physics*
- Serway and Jewett, *Physics for Scientists and Engineers*
- Griffiths, *Introduction to Electrodynamics*
- Griffiths, *Introduction to Quantum Mechanics*
- Taylor, *Classical Mechanics*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
