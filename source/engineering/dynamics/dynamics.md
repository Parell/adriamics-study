# Kinematics fundamentals

Kinematics describes how objects move.

## Position, displacement, velocity, acceleration

For one-dimensional motion with position \(x(t)\):

$$
v = \frac{dx}{dt}
$$

$$
a = \frac{dv}{dt} = \frac{d^2x}{dt^2}
$$

Useful differential forms:

$$
v\,dv = a\,dx
$$

when acceleration is a function of position, and

$$
a\,dt = dv
$$

when acceleration is a function of time.

## Vector form

For 2D or 3D motion:

$$
\mathbf{r} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}
$$

$$
\mathbf{v} = \frac{d\mathbf{r}}{dt}
$$

$$
\mathbf{a} = \frac{d\mathbf{v}}{dt}
$$

The safest workflow is to write position as a vector first, then differentiate.

---

# Rectilinear motion

Rectilinear motion is motion along a straight line. It is the simplest and most common starting point.

## Constant acceleration

If acceleration \(a\) is constant:

$$
v = v_0 + at
$$

$$
x = x_0 + v_0 t + \frac{1}{2}at^2
$$

$$
v^2 = v_0^2 + 2a(x-x_0)
$$

These are valid only when \(a\) is constant.

## Variable acceleration

If acceleration varies with time:

$$
a(t) = \frac{dv}{dt}
$$

Integrate to get velocity, then position.

If acceleration varies with position:

$$
a(x) = v\frac{dv}{dx}
$$

This is useful in spring, drag, and braking problems.

## Example pattern

If a car starts from rest and accelerates at a constant \(2 \, \text{m/s}^2\) for \(5\) s:

$$
v = 0 + 2(5) = 10 \, \text{m/s}
$$

$$
x = \frac{1}{2}(2)(5^2) = 25 \, \text{m}
$$

---

# Curvilinear motion

Curvilinear motion occurs along a curved path. Two common coordinate systems are Cartesian and normal-tangential coordinates.

## Cartesian components

For a particle with coordinates \(x(t)\), \(y(t)\), and \(z(t)\):

$$
\mathbf{v} = \dot{x}\mathbf{i} + \dot{y}\mathbf{j} + \dot{z}\mathbf{k}
$$

$$
\mathbf{a} = \ddot{x}\mathbf{i} + \ddot{y}\mathbf{j} + \ddot{z}\mathbf{k}
$$

This is the best choice when the path is naturally described by coordinates.

## Normal-tangential components

When motion follows a known curved path:

$$
\mathbf{v} = v\mathbf{t}
$$

$$
\mathbf{a} = a_t\mathbf{t} + a_n\mathbf{n}
$$

where

$$
a_t = \frac{dv}{dt}
$$

and

$$
a_n = \frac{v^2}{\rho}
$$

with \(\rho\) the radius of curvature.

Interpretation:

- \(a_t\) changes speed
- \(a_n\) changes direction

## Polar coordinates

For planar motion:

$$
\mathbf{v} = \dot{r}\mathbf{e}_r + r\dot{\theta}\mathbf{e}_\theta
$$

$$
\mathbf{a} = \left(\ddot{r} - r\dot{\theta}^2\right)\mathbf{e}_r + \left(r\ddot{\theta} + 2\dot{r}\dot{\theta}\right)\mathbf{e}_\theta
$$

Polar coordinates are useful for motion involving rotation about a point.

---

# Relative motion

Relative motion compares the motion of one body to another moving reference frame.

## Translation of reference frames

For particles \(A\) and \(B\):

$$
\mathbf{r}_B = \mathbf{r}_A + \mathbf{r}_{B/A}
$$

Differentiating:

$$
\mathbf{v}_B = \mathbf{v}_A + \mathbf{v}_{B/A}
$$

$$
\mathbf{a}_B = \mathbf{a}_A + \mathbf{a}_{B/A}
$$

## Common use cases

- A person walking on a moving walkway
- A boat moving in a current
- A slider in a rotating slot
- Two connected bodies with one body providing the frame for the other

## Rotating frames

When the reference frame rotates, additional terms appear:

$$
\mathbf{v}_B = \mathbf{v}_A + \mathbf{v}_{rel} + \boldsymbol{\omega} \times \mathbf{r}_{B/A}
$$

$$
\mathbf{a}_B = \mathbf{a}_A + \mathbf{a}_{rel} + 2\boldsymbol{\omega} \times \mathbf{v}_{rel} + \boldsymbol{\alpha} \times \mathbf{r}_{B/A} + \boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}_{B/A})
$$

The \(2\boldsymbol{\omega} \times \mathbf{v}_{rel}\) term is the Coriolis term.

---

# Particle kinetics

Particle kinetics links forces to translational acceleration.

## Newton's second law

For a particle:

$$
\sum \mathbf{F} = m\mathbf{a}
$$

Write the force balance in component form:

$$
\sum F_x = ma_x,\quad \sum F_y = ma_y,\quad \sum F_z = ma_z
$$

## Free-body diagrams

A free-body diagram is the main tool for particle kinetics.

Include:

- Weight \(W = mg\)
- Normal reactions
- Friction forces
- Cable tensions
- Applied forces

## Friction

Static friction satisfies

$$
f_s \le \mu_s N
$$

Kinetic friction is usually modeled as

$$
f_k = \mu_k N
$$

The friction force opposes impending or relative motion along the contact surface.

## Typical workflow

1. Draw the particle and isolate it.
2. Choose axes aligned with the motion if possible.
3. Write \(\sum \mathbf{F} = m\mathbf{a}\).
4. Add kinematic relations if needed.
5. Solve algebraically before substituting numbers.

---

# Work-energy methods

Work-energy is often faster than force-balance when displacement is easier to track than time.

## Work

The work of a force is

$$
W = \int \mathbf{F}\cdot d\mathbf{r}
$$

For a constant force in the direction of motion:

$$
W = Fs
$$

## Kinetic energy

For a particle:

$$
T = \frac{1}{2}mv^2
$$

Work-energy theorem:

$$
T_1 + \sum W_{1\to2} = T_2
$$

## Conservative forces

Gravity and springs are conservative.

Potential energy forms:

$$
V_g = mgy
$$

$$
V_s = \frac{1}{2}kx^2
$$

Mechanical energy form:

$$
T_1 + V_1 + W_{nc} = T_2 + V_2
$$

where \(W_{nc}\) is work by nonconservative forces such as friction.

## Example pattern

For a block released on a rough incline, the work-energy method often gives speed after sliding a known distance without needing time explicitly.

---

# Impulse-momentum methods

Impulse-momentum is useful when forces act over a short time, such as impacts or thrust events.

## Linear impulse-momentum

For a particle:

$$
\int_{t_1}^{t_2} \sum \mathbf{F}\,dt = m\mathbf{v}_2 - m\mathbf{v}_1
$$

Component form is often easiest.

## Angular impulse-momentum

About a point \(O\):

$$
\int_{t_1}^{t_2} \sum M_O\,dt = H_{O2} - H_{O1}
$$

## When to use it

- Impact problems
- Short duration force histories
- Average force from collision data
- Problems where velocity change is known and time is short

## Caution

Impulse-momentum is not ideal if the force is unknown and the time interval is long unless the impulse can be integrated or approximated.

---

# Rigid-body kinematics

Rigid-body motion combines translation and rotation.

## Plane motion

For planar motion of a rigid body:

$$
\mathbf{v}_B = \mathbf{v}_A + \boldsymbol{\omega} \times \mathbf{r}_{B/A}
$$

$$
\mathbf{a}_B = \mathbf{a}_A + \boldsymbol{\alpha} \times \mathbf{r}_{B/A} + \boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}_{B/A})
$$

## Pure translation

If every line in the body remains parallel to itself:

- All points have the same velocity
- All points have the same acceleration

## Pure rotation about a fixed axis

For a point at radius \(r\):

$$
v = \omega r
$$

$$
a_t = \alpha r
$$

$$
a_n = \omega^2 r
$$

Direction matters:

- \(a_t\) is tangent to the path
- \(a_n\) points toward the center of rotation

## Instantaneous center of zero velocity

In planar motion, a body can often be treated as instantaneously rotating about a point with zero velocity. This is a useful geometric shortcut for velocity analysis, but it does not replace full acceleration analysis.

---

# Rigid-body kinetics

Rigid-body kinetics extends Newton's laws to bodies with rotation.

## Translation of the mass center

For a rigid body:

$$
\sum \mathbf{F} = m\mathbf{a}_G
$$

where \(G\) is the center of mass.

## Rotation about the mass center

For planar motion:

$$
\sum M_G = I_G \alpha
$$

where \(I_G\) is the mass moment of inertia about the center of mass.

## Rotation about another point

About a fixed point \(O\):

$$
\sum M_O = I_O \alpha
$$

if the axis is fixed in an inertial frame.

Parallel-axis theorem:

$$
I_O = I_G + md^2
$$

where \(d\) is the distance between axes.

## Common inertia facts

- Thin rod about center: \(I = \frac{1}{12}mL^2\)
- Thin rod about end: \(I = \frac{1}{3}mL^2\)
- Solid disk about center: \(I = \frac{1}{2}mr^2\)
- Solid sphere about center: \(I = \frac{2}{5}mr^2\)

## Energy for rigid bodies

Total kinetic energy:

$$
T = \frac{1}{2}mv_G^2 + \frac{1}{2}I_G\omega^2
$$

This form is useful for rolling, pulleys, and rotating links.

---

# Choosing the right method

The best method depends on what the problem gives and what it asks for.

## Use kinematics when

- You need position, velocity, or acceleration only
- No forces are required
- The motion is prescribed

## Use Newton-Euler when

- Forces or moments are explicitly requested
- Unknown reactions matter
- Acceleration is known or can be found

## Use work-energy when

- Displacement is known
- Speed is needed rather than time
- Conservative forces dominate

## Use impulse-momentum when

- The time interval is short
- Impacts or average forces are involved
- Velocity change is easier to track than acceleration

## Practical decision rule

If the problem asks for a force, start with free-body diagrams and Newton's laws. If it asks for a speed after moving through a distance, work-energy is often shorter. If it asks about collision or impact, impulse-momentum is usually best.

---

# Common pitfalls

- Mixing up **kinematics** and **kinetics**
- Using constant-acceleration formulas when acceleration is not constant
- Forgetting to define a positive sign convention
- Leaving out the normal or tangential acceleration component
- Treating the center of mass as the same thing as a geometric center without checking symmetry
- Using \(I_G\) when the problem needs \(I_O\), or vice versa
- Forgetting that friction direction is opposite impending or relative motion
- Applying rigid-body formulas to deformable systems
- Skipping the free-body diagram and trying to solve from memory

## Sanity checks

- Units must match at every step
- Acceleration direction should agree with the chosen coordinates
- A force balance should reduce correctly in special cases
- Energy methods should conserve mechanical energy only when the model allows it

---

# Formula sheet

## Particle motion

$$
\mathbf{v} = \frac{d\mathbf{r}}{dt},\quad \mathbf{a} = \frac{d\mathbf{v}}{dt}
$$

$$
\sum \mathbf{F} = m\mathbf{a}
$$

$$
T = \frac{1}{2}mv^2
$$

$$
\int \sum \mathbf{F}\,dt = m\mathbf{v}_2 - m\mathbf{v}_1
$$

## Curvilinear motion

$$
a_t = \frac{dv}{dt}
$$

$$
a_n = \frac{v^2}{\rho}
$$

$$
\mathbf{a} = \left(\ddot{r} - r\dot{\theta}^2\right)\mathbf{e}_r + \left(r\ddot{\theta} + 2\dot{r}\dot{\theta}\right)\mathbf{e}_\theta
$$

## Rigid-body motion

$$
\mathbf{v}_B = \mathbf{v}_A + \boldsymbol{\omega} \times \mathbf{r}_{B/A}
$$

$$
\mathbf{a}_B = \mathbf{a}_A + \boldsymbol{\alpha} \times \mathbf{r}_{B/A} + \boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}_{B/A})
$$

$$
\sum M_G = I_G \alpha
$$

$$
T = \frac{1}{2}mv_G^2 + \frac{1}{2}I_G\omega^2
$$

## Energy

$$
T_1 + \sum W_{1\to2} = T_2
$$

$$
T_1 + V_1 + W_{nc} = T_2 + V_2
$$

## Friction

$$
f_s \le \mu_s N,\quad f_k = \mu_k N
$$

## Problem-solving checklist

1. Draw the system and the free-body diagram.
2. Identify whether the body is a particle or rigid body.
3. Choose coordinates that simplify the equations.
4. Decide whether force, energy, or impulse methods are best.
5. Write the governing equations before plugging in numbers.
6. Check units and limiting cases.

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
