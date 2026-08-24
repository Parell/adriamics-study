<!--
id: classical-mechanics-11
note: physics-classical-mechanics
title: "Model a Body as a Particle"
exam: exam-i
skills: [Modeling assumptions, Scope and core ideas]
-->

A large object is represented by a single position vector in a mechanics model. What simplifying assumption is being used?

:::solution
The object is being treated as a particle.

That means we ignore its size and rotation and focus only on its translational motion.
:::

<!--
id: classical-mechanics-12
note: physics-classical-mechanics
title: "Differentiate a Position Function"
exam: exam-i
skills: [Position, velocity, and acceleration, Kinematics]
-->

If

$$
x(t) = 2t^2 - 3t + 1,
$$

what are $v(2)$ and $a(2)$?

:::solution
Differentiate once to get velocity:

$$
v(t) = \frac{dx}{dt} = 4t - 3
$$

So

$$
v(2) = 4(2) - 3 = 5
$$

Differentiate again to get acceleration:

$$
a(t) = \frac{dv}{dt} = 4
$$

So

$$
a(2) = 4
$$
:::

<!--
id: classical-mechanics-13
note: physics-classical-mechanics
title: "Find the Net Force"
exam: exam-i
skills: [Newton's second law]
-->

A $4$ kg cart accelerates at $3\ \text{m/s}^2$ to the east. What is the net force on the cart?

:::solution
Use Newton's second law:

$$
\sum \mathbf{F} = m\mathbf{a}
$$

So the net force is

$$
F = ma = 4(3) = 12\ \text{N}
$$

to the east.
:::

<!--
id: classical-mechanics-14
note: physics-classical-mechanics
title: "Compute Work from a Constant Force"
exam: exam-i
skills: [Work]
-->

A constant force of $15\ \text{N}$ acts at an angle of $60^\circ$ to a displacement of $4\ \text{m}$. How much work is done?

:::solution
For a constant force,

$$
W = Fd\cos\theta
$$

Substitute the values:

$$
W = 15(4)\cos 60^\circ
$$

Since $\cos 60^\circ = \tfrac{1}{2}$,

$$
W = 60 \cdot \frac{1}{2} = 30\ \text{J}
$$
:::

<!--
id: classical-mechanics-15
note: physics-classical-mechanics
title: "Compute Linear Momentum"
exam: exam-i
skills: [Linear momentum]
-->

A $0.5$ kg puck moves at $8\ \text{m/s}$. What is its momentum?

:::solution
Momentum is

$$
\mathbf{p} = m\mathbf{v}
$$

So the magnitude is

$$
p = 0.5(8) = 4\ \text{kg}\cdot\text{m/s}
$$

The momentum points in the same direction as the velocity.
:::

<!--
id: classical-mechanics-16
note: physics-classical-mechanics
title: "Compute Average Power"
exam: exam-i
skills: [Power]
-->

A machine does $180\ \text{J}$ of work in $3\ \text{s}$. What is its average power?

:::solution
Power is the rate of doing work:

$$
P = \frac{W}{t}
$$

So

$$
P = \frac{180}{3} = 60\ \text{W}
$$
:::

<!--
id: classical-mechanics-17
note: physics-classical-mechanics
title: "Use Rotational Kinematics"
exam: exam-i
skills: [Rotational kinematics]
-->

A wheel starts with angular velocity $\omega_0 = 2\ \text{rad/s}$ and angular acceleration $\alpha = 4\ \text{rad/s}^2$. What is its angular velocity after $3\ \text{s}$?

:::solution
Use

$$
\omega = \omega_0 + \alpha t
$$

Substitute:

$$
\omega = 2 + 4(3) = 14\ \text{rad/s}
$$
:::

<!--
id: classical-mechanics-18
note: physics-classical-mechanics
title: "Find a Torque"
exam: exam-i
skills: [Torque]
-->

A $12\ \text{N}$ force is applied perpendicular to a wrench $0.25\ \text{m}$ from the pivot. What is the torque?

:::solution
Use

$$
\tau = rF\sin\phi
$$

Because the force is perpendicular, $\sin\phi = 1$. So

$$
\tau = 0.25(12) = 3\ \text{N}\cdot\text{m}
$$
:::

<!--
id: classical-mechanics-19
note: physics-classical-mechanics
title: "Find the Period of SHM"
exam: exam-i
skills: [Simple harmonic motion, Period and frequency]
-->

A mass-spring system has $m = 2\ \text{kg}$ and $k = 8\ \text{N/m}$. What is its period?

:::solution
For simple harmonic motion,

$$
\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{8}{2}} = 2
$$

Then

$$
T = \frac{2\pi}{\omega} = \frac{2\pi}{2} = \pi\ \text{s}
$$
:::

<!--
id: classical-mechanics-110
note: physics-classical-mechanics
title: "Write a Lagrangian"
exam: exam-i
skills: [Lagrangian]
-->

For a mass-spring system with kinetic energy

$$
T = \frac{1}{2}m\dot{x}^2
$$

and potential energy

$$
V = \frac{1}{2}kx^2,
$$

what is the Lagrangian $\mathcal{L}$?

:::solution
The Lagrangian is

$$
\mathcal{L} = T - V
$$

So

$$
\mathcal{L} = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2
$$
:::

<!--
id: classical-mechanics-21
note: physics-classical-mechanics
title: "Projectile Motion to the Peak"
exam: exam-ii
skills: [Projectile motion, Kinematics]
-->

A ball is launched from level ground at $20\ \text{m/s}$ at an angle of $60^\circ$ above the horizontal. Take $g = 10\ \text{m/s}^2$. How far horizontally has it traveled when it reaches its highest point?

:::solution
At the top of the flight, the vertical velocity is zero.

The initial vertical component is

$$
v_{0y} = 20\sin 60^\circ = 10\sqrt{3}
$$

That gives the time to the top:

$$
t = \frac{v_{0y}}{g} = \frac{10\sqrt{3}}{10} = \sqrt{3}\ \text{s}
$$

The horizontal speed is constant:

$$
v_{0x} = 20\cos 60^\circ = 10
$$

So the horizontal distance is

$$
x = v_{0x}t = 10\sqrt{3}\ \text{m}
$$
:::

<!--
id: classical-mechanics-22
note: physics-classical-mechanics
title: "Relative Motion on a River"
exam: exam-ii
skills: [Relative motion, Vectors]
-->

A swimmer moves at $3\ \text{m/s}$ due north relative to the water, while the river flows at $4\ \text{m/s}$ due east. What is the swimmer's velocity relative to the bank?

:::solution
Add the velocity vectors:

$$
\mathbf{v}_{\text{bank}} = \mathbf{v}_{\text{swimmer/water}} + \mathbf{v}_{\text{water/bank}}
$$

So the components are $4\ \text{m/s}$ east and $3\ \text{m/s}$ north.

The speed is

$$
\sqrt{4^2 + 3^2} = 5\ \text{m/s}
$$

The direction is

$$
\tan^{-1}\left(\frac{3}{4}\right) \approx 36.9^\circ
$$

north of east.
:::

<!--
id: classical-mechanics-23
note: physics-classical-mechanics
title: "Work-Energy with Friction"
exam: exam-ii
skills: [Work-energy theorem, Friction]
-->

A $2$ kg block starts from rest. A horizontal force of $6\ \text{N}$ pulls it $5\ \text{m}$, while kinetic friction exerts a $2\ \text{N}$ force opposite the motion. What is the block's speed after moving $5\ \text{m}$?

:::solution
The net work is

$$
W_{\text{net}} = (6 - 2)(5) = 20\ \text{J}
$$

By the work-energy theorem,

$$
W_{\text{net}} = \Delta T = \frac{1}{2}mv^2 - 0
$$

So

$$
20 = \frac{1}{2}(2)v^2
$$

$$
v^2 = 20
$$

$$
v = 2\sqrt{5}\ \text{m/s}
$$
:::

<!--
id: classical-mechanics-24
note: physics-classical-mechanics
title: "Impulse Changes Momentum"
exam: exam-ii
skills: [Impulse, Linear momentum]
-->

A $0.5$ kg puck moves at $6\ \text{m/s}$ to the right. A force of $10\ \text{N}$ acts to the left for $0.2\ \text{s}$. What is the puck's final speed?

:::solution
The impulse is

$$
J = F\Delta t = 10(0.2) = 2\ \text{N}\cdot\text{s}
$$

Because the force is to the left, the impulse is negative relative to the original motion.

Initial momentum:

$$
p_i = mv = 0.5(6) = 3
$$

Final momentum:

$$
p_f = p_i - 2 = 1\ \text{kg}\cdot\text{m/s}
$$

So the final speed is

$$
v_f = \frac{p_f}{m} = \frac{1}{0.5} = 2\ \text{m/s}
$$

to the right.
:::

<!--
id: classical-mechanics-25
note: physics-classical-mechanics
title: "Center of Mass of Two Masses"
exam: exam-ii
skills: [Center of mass]
-->

Two masses lie on the $x$-axis: $2$ kg at $x = 0$ and $6$ kg at $x = 4\ \text{m}$. What is the center of mass?

:::solution
Use the discrete center-of-mass formula:

$$
x_{cm} = \frac{\sum m_i x_i}{\sum m_i}
$$

So

$$
x_{cm} = \frac{2(0) + 6(4)}{2 + 6} = \frac{24}{8} = 3\ \text{m}
$$
:::

<!--
id: classical-mechanics-26
note: physics-classical-mechanics
title: "Rolling Without Slipping"
exam: exam-ii
skills: [Rolling without slipping, Rotational kinetic energy]
-->

A wheel of radius $0.3\ \text{m}$ rolls without slipping at $5\ \text{m/s}$. The wheel has mass $4\ \text{kg}$ and moment of inertia $I = \frac{1}{2}mR^2$. Find its angular speed and its total kinetic energy.

:::solution
The no-slip condition gives

$$
v_{cm} = R\omega
$$

so

$$
\omega = \frac{5}{0.3} = \frac{50}{3}\ \text{rad/s}
$$

The translational kinetic energy is

$$
T_{trans} = \frac{1}{2}mv^2 = \frac{1}{2}(4)(25) = 50\ \text{J}
$$

The moment of inertia is

$$
I = \frac{1}{2}(4)(0.3^2) = 0.18\ \text{kg}\cdot\text{m}^2
$$

The rotational kinetic energy is

$$
T_{rot} = \frac{1}{2}I\omega^2
       = \frac{1}{2}(0.18)\left(\frac{50}{3}\right)^2
       = 25\ \text{J}
$$

So the total kinetic energy is

$$
T = 50 + 25 = 75\ \text{J}
$$
:::

<!--
id: classical-mechanics-27
note: physics-classical-mechanics
title: "Static Support Forces"
exam: exam-ii
skills: [Equilibrium conditions, Statics]
-->

A uniform $2$ m beam weighs $40\ \text{N}$ and is supported at both ends. A $60\ \text{N}$ load hangs $1.5$ m from the left end. What are the upward support forces at the left and right ends?

:::solution
Let the left reaction be $R_L$ and the right reaction be $R_R$.

Force balance gives

$$
R_L + R_R = 40 + 60 = 100
$$

Take torques about the left end:

$$
2R_R = 40(1) + 60(1.5)
$$

$$
2R_R = 40 + 90 = 130
$$

$$
R_R = 65\ \text{N}
$$

Then

$$
R_L = 100 - 65 = 35\ \text{N}
$$
:::

<!--
id: classical-mechanics-28
note: physics-classical-mechanics
title: "Derive a Simple Equation of Motion"
exam: exam-ii
skills: [Lagrangian, Euler-Lagrange equation]
-->

For a mass-spring oscillator with

$$
\mathcal{L} = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2,
$$

derive the equation of motion.

:::solution
Apply the Euler-Lagrange equation:

$$
\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{x}}\right) - \frac{\partial \mathcal{L}}{\partial x} = 0
$$

Compute the derivatives:

$$
\frac{\partial \mathcal{L}}{\partial \dot{x}} = m\dot{x}
$$

so

$$
\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{x}}\right) = m\ddot{x}
$$

Also,

$$
\frac{\partial \mathcal{L}}{\partial x} = -kx
$$

Substitute:

$$
m\ddot{x} - (-kx) = 0
$$

so the equation of motion is

$$
m\ddot{x} + kx = 0
$$
:::

<!--
id: classical-mechanics-31
note: physics-classical-mechanics
title: "Two-Body Pulley System"
exam: final
skills: [Newton's second law, Constraints]
-->

A $2$ kg block on a frictionless table is connected by a light string over a frictionless pulley to a hanging $1$ kg mass. Find the acceleration of the system and the string tension. Take $g = 10\ \text{m/s}^2$.

:::solution
Let the acceleration magnitude be $a$.

For the $2$ kg block on the table:

$$
T = 2a
$$

For the $1$ kg hanging mass:

$$
10 - T = a
$$

Substitute $T = 2a$:

$$
10 - 2a = a
$$

$$
10 = 3a
$$

$$
a = \frac{10}{3}\ \text{m/s}^2
$$

Then

$$
T = 2a = \frac{20}{3}\ \text{N}
$$
:::

<!--
id: classical-mechanics-32
note: physics-classical-mechanics
title: "Perfectly Inelastic Collision"
exam: final
skills: [Conservation of linear momentum, Collisions]
-->

A $2$ kg cart moving at $3\ \text{m/s}$ collides with a stationary $4$ kg cart. The carts stick together. What is their final speed, and how much kinetic energy is lost?

:::solution
Use conservation of momentum:

$$
2(3) + 4(0) = (2 + 4)v_f
$$

So

$$
6 = 6v_f
$$

$$
v_f = 1\ \text{m/s}
$$

Initial kinetic energy:

$$
T_i = \frac{1}{2}(2)(3^2) = 9\ \text{J}
$$

Final kinetic energy:

$$
T_f = \frac{1}{2}(6)(1^2) = 3\ \text{J}
$$

So the kinetic energy lost is

$$
9 - 3 = 6\ \text{J}
$$
:::

<!--
id: classical-mechanics-33
note: physics-classical-mechanics
title: "Torque, Angular Acceleration, and Rotation"
exam: final
skills: [Torque, Rotational kinematics, Moment of inertia]
-->

A uniform disk has mass $2$ kg and radius $0.5$ m. A tangential force of $4\ \text{N}$ is applied at the rim for $2\ \text{s}$ starting from rest. Find the angular acceleration, the angular speed after $2\ \text{s}$, and the angle turned through.

:::solution
First find the moment of inertia of the disk:

$$
I = \frac{1}{2}mR^2 = \frac{1}{2}(2)(0.5^2) = 0.25\ \text{kg}\cdot\text{m}^2
$$

The torque is

$$
\tau = rF = 0.5(4) = 2\ \text{N}\cdot\text{m}
$$

So the angular acceleration is

$$
\alpha = \frac{\tau}{I} = \frac{2}{0.25} = 8\ \text{rad/s}^2
$$

Starting from rest,

$$
\omega = \alpha t = 8(2) = 16\ \text{rad/s}
$$

The angular displacement is

$$
\theta = \frac{1}{2}\alpha t^2 = \frac{1}{2}(8)(2^2) = 16\ \text{rad}
$$
:::

<!--
id: classical-mechanics-34
note: physics-classical-mechanics
title: "Compare Two Circular Orbits"
exam: final
skills: [Circular orbits, Central-force intuition]
-->

A satellite moves in a circular orbit of radius $r_1$ around a planet. Another satellite orbits at radius $r_2 = 4r_1$. What are the ratios $v_2/v_1$ and $T_2/T_1$?

:::solution
For circular orbits,

$$
v = \sqrt{\frac{GM}{r}}
$$

so speed scales like $r^{-1/2}$:

$$
\frac{v_2}{v_1} = \sqrt{\frac{r_1}{r_2}} = \sqrt{\frac{1}{4}} = \frac{1}{2}
$$

The orbital period scales like $r^{3/2}$:

$$
\frac{T_2}{T_1} = \left(\frac{r_2}{r_1}\right)^{3/2} = 4^{3/2} = 8
$$
:::

<!--
id: classical-mechanics-35
note: physics-classical-mechanics
title: "Choose the Best Mechanics Tool"
exam: final
skills: [Problem-solving workflow]
-->

For each situation, name the main tool from the workflow that is most useful.

(a) A collision lasts a very short time and external impulse is negligible.  
(b) A rigid sign hangs motionless from two cables.  
(c) An object moves under only conservative forces, but the path is complicated.  
(d) A spinning object has no external torque acting on it.

:::solution
Use the tool that matches the situation:

(a) Momentum conservation  
(b) Equilibrium conditions / statics  
(c) Energy methods  
(d) Angular momentum conservation
:::

<!--
id: classical-mechanics-41
note: physics-classical-mechanics
title: "Rolling Disk Dropping Through a Height"
exam: final
skills: [Rolling without slipping, Rotational kinetic energy, Work and energy]
-->

A solid disk starts from rest and rolls without slipping down a track, dropping through a vertical height $h$. Derive its speed at the bottom in terms of $g$ and $h$.

:::solution
Use conservation of mechanical energy:

$$
mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2
$$

For a solid disk,

$$
I = \frac{1}{2}mR^2
$$

and rolling without slipping gives

$$
\omega = \frac{v}{R}
$$

Substitute:

$$
mgh = \frac{1}{2}mv^2 + \frac{1}{2}\left(\frac{1}{2}mR^2\right)\left(\frac{v^2}{R^2}\right)
$$

$$
mgh = \frac{1}{2}mv^2 + \frac{1}{4}mv^2 = \frac{3}{4}mv^2
$$

So

$$
v = \sqrt{\frac{4gh}{3}}
$$
:::

<!--
id: classical-mechanics-42
note: physics-classical-mechanics
title: "Spin-Up from Conservation of Angular Momentum"
exam: final
skills: [Conservation of angular momentum, Rotational kinetic energy]
-->

A skater's moment of inertia decreases from $6\ \text{kg}\cdot\text{m}^2$ to $2\ \text{kg}\cdot\text{m}^2$ while angular momentum is conserved. If the initial angular speed is $3\ \text{rad/s}$, find the final angular speed and the change in rotational kinetic energy.

:::solution
Conservation of angular momentum gives

$$
I_i\omega_i = I_f\omega_f
$$

So

$$
6(3) = 2\omega_f
$$

$$
\omega_f = 9\ \text{rad/s}
$$

Initial rotational kinetic energy:

$$
T_i = \frac{1}{2}I_i\omega_i^2 = \frac{1}{2}(6)(3^2) = 27\ \text{J}
$$

Final rotational kinetic energy:

$$
T_f = \frac{1}{2}(2)(9^2) = 81\ \text{J}
$$

So the kinetic energy increases by

$$
81 - 27 = 54\ \text{J}
$$
:::

<!--
id: classical-mechanics-43
note: physics-classical-mechanics
title: "Beam Balance with Multiple Loads"
exam: final
skills: [Equilibrium conditions, Statics]
-->

A $3$ m uniform beam weighs $30\ \text{N}$ and is supported at both ends. Additional loads of $20\ \text{N}$ and $50\ \text{N}$ hang at $0.5$ m and $2.5$ m from the left end, respectively. What are the support forces?

:::solution
Let the left and right reactions be $R_L$ and $R_R$.

Force balance:

$$
R_L + R_R = 30 + 20 + 50 = 100
$$

Take torques about the left end:

$$
3R_R = 30(1.5) + 20(0.5) + 50(2.5)
$$

$$
3R_R = 45 + 10 + 125 = 180
$$

$$
R_R = 60\ \text{N}
$$

Then

$$
R_L = 100 - 60 = 40\ \text{N}
$$
:::

<!--
id: classical-mechanics-44
note: physics-classical-mechanics
title: "Lagrangian with Two Springs"
exam: final
skills: [Lagrangian, Euler-Lagrange equation]
-->

A mass moves on a frictionless line between two identical springs, each with spring constant $k$. If the mass is displaced by $x$ from equilibrium, derive the equation of motion using the Lagrangian method.

:::solution
Each spring contributes a potential energy of $\frac{1}{2}kx^2$, so the total potential energy is

$$
V = \frac{1}{2}kx^2 + \frac{1}{2}kx^2 = kx^2
$$

The kinetic energy is

$$
T = \frac{1}{2}m\dot{x}^2
$$

So the Lagrangian is

$$
\mathcal{L} = \frac{1}{2}m\dot{x}^2 - kx^2
$$

Apply the Euler-Lagrange equation:

$$
\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{x}}\right) - \frac{\partial \mathcal{L}}{\partial x} = 0
$$

Compute the derivatives:

$$
\frac{\partial \mathcal{L}}{\partial \dot{x}} = m\dot{x}
$$

so

$$
\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{x}}\right) = m\ddot{x}
$$

and

$$
\frac{\partial \mathcal{L}}{\partial x} = -2kx
$$

Substitute:

$$
m\ddot{x} - (-2kx) = 0
$$

Thus the equation of motion is

$$
m\ddot{x} + 2kx = 0
$$
:::
