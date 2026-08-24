<!--
id: dynamics-11
note: engineering-dynamics
title: "Classify the Study of Motion"
exam: exam-i
skills: [Kinematics, Kinetics]
-->

Which branch of dynamics describes motion without considering the forces that cause it?

:::solution
That is **kinematics**.

Kinematics describes motion itself, while kinetics connects motion to the forces and moments that produce it.
:::

<!--
id: dynamics-12
note: engineering-dynamics
title: "Differentiate a Position Function"
exam: exam-i
skills: [Position, Velocity, Acceleration]
-->

Given

$$
x(t) = 3t^2 - 2t + 1,
$$

find $v(2)$ and $a(2)$.

:::solution
Differentiate position to get velocity:

$$
v(t) = \frac{dx}{dt} = 6t - 2
$$

Differentiate again to get acceleration:

$$
a(t) = \frac{dv}{dt} = 6
$$

Evaluate at $t=2$:

$$
v(2) = 6(2) - 2 = 10
$$

$$
a(2) = 6
$$
:::

<!--
id: dynamics-13
note: engineering-dynamics
title: "Use Constant Acceleration to Find Speed"
exam: exam-i
skills: [Rectilinear Motion, Constant Acceleration]
-->

A cart starts from rest and accelerates at $4 \, \text{m/s}^2$ for $3$ s. Find its speed.

:::solution
Use the constant-acceleration relation:

$$
v = v_0 + at
$$

Since the cart starts from rest, $v_0 = 0$:

$$
v = 0 + 4(3) = 12 \, \text{m/s}
$$
:::

<!--
id: dynamics-14
note: engineering-dynamics
title: "Find Displacement Under Constant Acceleration"
exam: exam-i
skills: [Rectilinear Motion, Constant Acceleration]
-->

A particle starts at $x_0 = 5$ m with $v_0 = 2 \, \text{m/s}$ and constant acceleration $a = 1 \, \text{m/s}^2$. Find $x$ after $4$ s.

:::solution
Use

$$
x = x_0 + v_0 t + \frac{1}{2}at^2
$$

Substitute the values:

$$
x = 5 + 2(4) + \frac{1}{2}(1)(4^2)
$$

$$
x = 5 + 8 + 8 = 21 \, \text{m}
$$
:::

<!--
id: dynamics-15
note: engineering-dynamics
title: "Read Velocity and Acceleration from Cartesian Components"
exam: exam-i
skills: [Cartesian Components, Curvilinear Motion]
-->

For the position vector

$$
\mathbf{r}(t) = t\,\mathbf{i} + t^2\,\mathbf{j},
$$

find $\mathbf{v}$ and $\mathbf{a}$ at $t=3$.

:::solution
Differentiate the position vector:

$$
\mathbf{v}(t) = \frac{d\mathbf{r}}{dt} = \mathbf{i} + 2t\,\mathbf{j}
$$

Differentiate again:

$$
\mathbf{a}(t) = \frac{d\mathbf{v}}{dt} = 2\,\mathbf{j}
$$

At $t=3$:

$$
\mathbf{v}(3) = \mathbf{i} + 6\,\mathbf{j}
$$

$$
\mathbf{a}(3) = 2\,\mathbf{j}
$$
:::

<!--
id: dynamics-16
note: engineering-dynamics
title: "Compute Normal Acceleration"
exam: exam-i
skills: [Normal-Tangential Motion, Curvilinear Motion]
-->

A particle moves along a curved path at a speed of $15 \, \text{m/s}$ on a path with radius of curvature $25$ m. Find its normal acceleration.

:::solution
Use

$$
a_n = \frac{v^2}{\rho}
$$

So

$$
a_n = \frac{15^2}{25} = \frac{225}{25} = 9 \, \text{m/s}^2
$$
:::

<!--
id: dynamics-17
note: engineering-dynamics
title: "Add Velocities in Relative Motion"
exam: exam-i
skills: [Relative Motion]
-->

A walkway moves east at $1.5 \, \text{m/s}$. A person walks east relative to the walkway at $0.8 \, \text{m/s}$. What is the person's speed relative to the ground?

:::solution
For motion in the same direction, the velocities add:

$$
v = 1.5 + 0.8 = 2.3 \, \text{m/s}
$$

So the person's ground speed is $2.3 \, \text{m/s}$ east.
:::

<!--
id: dynamics-18
note: engineering-dynamics
title: "Apply Newton's Second Law"
exam: exam-i
skills: [Particle Kinetics, Newton's Second Law]
-->

A $5$ kg particle has a net force of $20$ N to the right. Find its acceleration.

:::solution
Use Newton's second law:

$$
\sum F = ma
$$

So

$$
a = \frac{20}{5} = 4 \, \text{m/s}^2
$$

The acceleration is $4 \, \text{m/s}^2$ to the right.
:::

<!--
id: dynamics-19
note: engineering-dynamics
title: "Use Friction at a Contact Surface"
exam: exam-i
skills: [Particle Kinetics, Friction]
-->

A surface has normal force $N = 40$ N and kinetic friction coefficient $\mu_k = 0.25$. Find the kinetic friction force.

:::solution
Use

$$
f_k = \mu_k N
$$

So

$$
f_k = 0.25(40) = 10 \, \text{N}
$$
:::

<!--
id: dynamics-110
note: engineering-dynamics
title: "Find Tangential Speed in Pure Rotation"
exam: exam-i
skills: [Rigid-Body Kinematics, Pure Rotation]
-->

A point lies $0.4$ m from a fixed axis on a rigid body rotating at $\omega = 6 \, \text{rad/s}$. Find the point's speed.

:::solution
For pure rotation,

$$
v = \omega r
$$

So

$$
v = 6(0.4) = 2.4 \, \text{m/s}
$$
:::

<!--
id: dynamics-21
note: engineering-dynamics
title: "Use Work-Energy with a Constant Force"
exam: exam-ii
skills: [Work-Energy Methods, Kinetic Energy]
-->

A $2$ kg cart moves at $3 \, \text{m/s}$. A constant force of $10$ N acts in the direction of motion over $4$ m on a level track. Find the final speed.

:::solution
Initial kinetic energy:

$$
T_1 = \frac{1}{2}mv_1^2 = \frac{1}{2}(2)(3^2) = 9 \, \text{J}
$$

Work done by the force:

$$
W = Fs = 10(4) = 40 \, \text{J}
$$

So

$$
T_2 = T_1 + W = 9 + 40 = 49 \, \text{J}
$$

Then

$$
\frac{1}{2}(2)v_2^2 = 49
$$

$$
v_2^2 = 49
$$

$$
v_2 = 7 \, \text{m/s}
$$
:::

<!--
id: dynamics-22
note: engineering-dynamics
title: "Track Energy with a Spring"
exam: exam-ii
skills: [Work-Energy Methods, Springs]
-->

A $1$ kg block is released from rest by a spring with $k = 100 \, \text{N/m}$ compressed $0.20$ m on a frictionless track. Find the speed when the spring returns to its natural length.

:::solution
The spring potential energy is

$$
V_s = \frac{1}{2}kx^2 = \frac{1}{2}(100)(0.20^2) = 2 \, \text{J}
$$

At the natural length, all of that energy becomes kinetic energy:

$$
\frac{1}{2}mv^2 = 2
$$

With $m=1$ kg:

$$
v^2 = 4
$$

$$
v = 2 \, \text{m/s}
$$
:::

<!--
id: dynamics-23
note: engineering-dynamics
title: "Use Impulse to Find Final Velocity"
exam: exam-ii
skills: [Impulse-Momentum Methods, Linear Momentum]
-->

A $3$ kg particle starts from rest and is acted on by a $30$ N force for $0.2$ s. Find its final speed.

:::solution
The impulse is

$$
J = Ft = 30(0.2) = 6 \, \text{N}\cdot\text{s}
$$

Impulse-momentum gives

$$
J = m(v_2 - v_1)
$$

Since $v_1 = 0$,

$$
6 = 3v_2
$$

$$
v_2 = 2 \, \text{m/s}
$$
:::

<!--
id: dynamics-24
note: engineering-dynamics
title: "Solve a Friction Problem with Force Balance"
exam: exam-ii
skills: [Particle Kinetics, Friction, Newton's Second Law]
-->

A $10$ kg block slides on a horizontal surface. A $50$ N horizontal force pulls it to the right, and $\mu_k = 0.2$. Take $g = 10 \, \text{m/s}^2$. Find the acceleration.

:::solution
The normal force is

$$
N = mg = 10(10) = 100 \, \text{N}
$$

So the kinetic friction force is

$$
f_k = \mu_k N = 0.2(100) = 20 \, \text{N}
$$

The net horizontal force is

$$
50 - 20 = 30 \, \text{N}
$$

Therefore,

$$
a = \frac{30}{10} = 3 \, \text{m/s}^2
$$
:::

<!--
id: dynamics-25
note: engineering-dynamics
title: "Combine Translation and Rotation"
exam: exam-ii
skills: [Rigid-Body Kinematics, Relative Motion]
-->

Point $A$ on a rigid bar moves to the right at $1.5 \, \text{m/s}$. The bar rotates counterclockwise at $3 \, \text{rad/s}$, and point $B$ is $0.6$ m above $A$. Find $\mathbf{v}_B$.

:::solution
Use

$$
\mathbf{v}_B = \mathbf{v}_A + \boldsymbol{\omega} \times \mathbf{r}_{B/A}
$$

Take $\mathbf{v}_A = 1.5\,\mathbf{i}$, $\boldsymbol{\omega} = 3\,\mathbf{k}$, and $\mathbf{r}_{B/A} = 0.6\,\mathbf{j}$.

Then

$$
\boldsymbol{\omega} \times \mathbf{r}_{B/A}
= 3\mathbf{k} \times 0.6\mathbf{j}
= -1.8\,\mathbf{i}
$$

So

$$
\mathbf{v}_B = 1.5\,\mathbf{i} - 1.8\,\mathbf{i} = -0.3\,\mathbf{i}
$$

Point $B$ moves left at $0.3 \, \text{m/s}$.
:::

<!--
id: dynamics-26
note: engineering-dynamics
title: "Find Angular Acceleration from a Moment"
exam: exam-ii
skills: [Rigid-Body Kinetics, Parallel-Axis Theorem]
-->

A thin rod has mass $4$ kg and length $1.5$ m. It rotates about one end. If the net moment about the end is $6$ N$\cdot$m, find its angular acceleration.

:::solution
First find the mass moment of inertia about the end using the parallel-axis theorem:

$$
I_G = \frac{1}{12}mL^2 = \frac{1}{12}(4)(1.5^2) = 0.75 \, \text{kg}\cdot\text{m}^2
$$

The center of mass is $d = 0.75$ m from the end, so

$$
I_O = I_G + md^2 = 0.75 + 4(0.75^2) = 3.0 \, \text{kg}\cdot\text{m}^2
$$

Now use

$$
\sum M_O = I_O \alpha
$$

So

$$
\alpha = \frac{6}{3.0} = 2 \, \text{rad/s}^2
$$
:::

<!--
id: dynamics-27
note: engineering-dynamics
title: "Choose the Best Method"
exam: exam-ii
skills: [Choosing the Right Method]
-->

A problem asks for the speed of a block after it slides a known distance on a rough surface. Which method is usually best?

:::solution
The best choice is usually **work-energy**.

The distance is known, so it is often faster to write the work done by gravity, friction, or other forces and relate it to the change in kinetic energy instead of solving for time first.
:::

<!--
id: dynamics-28
note: engineering-dynamics
title: "Spot a Common Pitfall"
exam: exam-ii
skills: [Common Pitfalls, Rectilinear Motion]
-->

A particle has acceleration $a(t) = 3t$. Can you use $v = v_0 + at$ with $a$ taken at the final time? Why or why not?

:::solution
No. The formula

$$
v = v_0 + at
$$

is valid only when acceleration is constant.

Here $a(t)$ changes with time, so you must integrate

$$
a(t) = \frac{dv}{dt}
$$

to find velocity.
:::

<!--
id: dynamics-31
note: engineering-dynamics
title: "Recognize Variable Acceleration by Position"
exam: final
skills: [Rectilinear Motion, Variable Acceleration]
-->

A particle moves in a straight line with acceleration

$$
a(x) = 4x \, \text{m/s}^2.
$$

If $v = 2 \, \text{m/s}$ at $x = 0$, find the speed when $x = 3$ m.

:::solution
Use the position form of the acceleration relation:

$$
a = v\frac{dv}{dx}
$$

So

$$
v\,dv = 4x\,dx
$$

Integrate from $(x,v) = (0,2)$ to $(3,v)$:

$$
\int_2^v v\,dv = \int_0^3 4x\,dx
$$

$$
\frac{1}{2}(v^2 - 4) = 18
$$

$$
v^2 = 40
$$

$$
v = 2\sqrt{10} \, \text{m/s}
$$
:::

<!--
id: dynamics-32
note: engineering-dynamics
title: "Use Work-Energy on an Incline"
exam: final
skills: [Work-Energy Methods, Gravity]
-->

A $2$ kg crate starts from rest and slides $5$ m down a frictionless $30^\circ$ incline. Take $g = 10 \, \text{m/s}^2$. Find the speed at the bottom.

:::solution
The work done by gravity is

$$
W_g = mgs\sin 30^\circ
$$

So

$$
W_g = 2(10)(5)\left(\frac{1}{2}\right) = 50 \, \text{J}
$$

Since the crate starts from rest,

$$
\frac{1}{2}mv^2 = 50
$$

With $m = 2$ kg:

$$
v^2 = 50
$$

$$
v = 5\sqrt{2} \, \text{m/s}
$$
:::

<!--
id: dynamics-33
note: engineering-dynamics
title: "Use Impulse-Momentum in an Impact"
exam: final
skills: [Impulse-Momentum Methods, Linear Momentum]
-->

A $0.5$ kg puck moving east at $8 \, \text{m/s}$ is struck by an average $12$ N force to the west for $0.5$ s. Find its final velocity.

:::solution
Take east as positive.

The impulse is

$$
J = Ft = (-12)(0.5) = -6 \, \text{N}\cdot\text{s}
$$

Initial momentum:

$$
p_1 = mv_1 = 0.5(8) = 4 \, \text{kg}\cdot\text{m/s}
$$

Impulse-momentum gives

$$
p_2 = p_1 + J = 4 - 6 = -2
$$

So

$$
v_2 = \frac{p_2}{m} = \frac{-2}{0.5} = -4 \, \text{m/s}
$$

The puck ends with speed $4 \, \text{m/s}$ to the west.
:::

<!--
id: dynamics-34
note: engineering-dynamics
title: "Find a Point's Velocity and Acceleration on a Rotating Bar"
exam: final
skills: [Rigid-Body Kinematics, Rigid-Body Kinetics]
-->

A rigid bar has point $A$ moving to the right at $2 \, \text{m/s}$ with acceleration $1 \, \text{m/s}^2$ to the right. The bar rotates counterclockwise with $\omega = 4 \, \text{rad/s}$ and $\alpha = 2 \, \text{rad/s}^2$. Point $B$ is $0.5$ m above $A$. Find $\mathbf{v}_B$ and $\mathbf{a}_B$.

:::solution
Use the rigid-body relations:

$$
\mathbf{v}_B = \mathbf{v}_A + \boldsymbol{\omega} \times \mathbf{r}_{B/A}
$$

$$
\mathbf{a}_B = \mathbf{a}_A + \boldsymbol{\alpha} \times \mathbf{r}_{B/A} + \boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}_{B/A})
$$

Take

$$
\mathbf{v}_A = 2\,\mathbf{i}, \quad \mathbf{a}_A = 1\,\mathbf{i}, \quad \boldsymbol{\omega} = 4\,\mathbf{k}, \quad \boldsymbol{\alpha} = 2\,\mathbf{k}, \quad \mathbf{r}_{B/A} = 0.5\,\mathbf{j}
$$

Then

$$
\boldsymbol{\omega} \times \mathbf{r}_{B/A}
= 4\mathbf{k} \times 0.5\mathbf{j}
= -2\,\mathbf{i}
$$

so

$$
\mathbf{v}_B = 2\,\mathbf{i} - 2\,\mathbf{i} = \mathbf{0}
$$

For acceleration,

$$
\boldsymbol{\alpha} \times \mathbf{r}_{B/A}
= 2\mathbf{k} \times 0.5\mathbf{j}
= -1\,\mathbf{i}
$$

and

$$
\boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}_{B/A})
= 4\mathbf{k} \times (-2\,\mathbf{i})
= -8\,\mathbf{j}
$$

Therefore,

$$
\mathbf{a}_B = 1\,\mathbf{i} - 1\,\mathbf{i} - 8\,\mathbf{j} = -8\,\mathbf{j}
$$

So point $B$ is instantaneously at rest, and its acceleration is $8 \, \text{m/s}^2$ downward.
:::

<!--
id: dynamics-35
note: engineering-dynamics
title: "Choose the Right Impact Method"
exam: final
skills: [Choosing the Right Method, Impulse-Momentum Methods]
-->

A $2$ kg cart slows from $6 \, \text{m/s}$ to $2 \, \text{m/s}$ in $0.1$ s during a collision. What method should you use to find the average impact force, and what is that force?

:::solution
Use **impulse-momentum** because the force acts over a short time and the velocity change is given.

Take the positive direction as the initial direction of motion:

$$
\Delta p = m(v_2 - v_1) = 2(2 - 6) = -8 \, \text{kg}\cdot\text{m/s}
$$

Average force:

$$
F_{\text{avg}} = \frac{\Delta p}{\Delta t} = \frac{-8}{0.1} = -80 \, \text{N}
$$

So the average impact force is $80$ N opposite the cart's motion.
:::

<!--
id: dynamics-41
note: engineering-dynamics
title: "Analyze Planar Motion from Position Functions"
exam: final
skills: [Cartesian Components, Curvilinear Motion]
-->

A particle has position

$$
x(t) = t^2, \qquad y(t) = 2t^2 - 4t.
$$

Find $\mathbf{v}$ and $\mathbf{a}$ at $t=2$, and determine whether the particle is speeding up or slowing down at that instant.

:::solution
Write the velocity vector:

$$
\mathbf{v}(t) = \dot{x}\,\mathbf{i} + \dot{y}\,\mathbf{j}
$$

so

$$
\mathbf{v}(t) = 2t\,\mathbf{i} + (4t - 4)\,\mathbf{j}
$$

At $t=2$:

$$
\mathbf{v}(2) = 4\,\mathbf{i} + 4\,\mathbf{j}
$$

Differentiate again:

$$
\mathbf{a}(t) = 2\,\mathbf{i} + 4\,\mathbf{j}
$$

so

$$
\mathbf{a}(2) = 2\,\mathbf{i} + 4\,\mathbf{j}
$$

The speed is

$$
|\mathbf{v}(2)| = \sqrt{4^2 + 4^2} = 4\sqrt{2}
$$

Since the acceleration points generally in the same direction as the velocity, the particle is speeding up at $t=2$.
:::

<!--
id: dynamics-42
note: engineering-dynamics
title: "Velocity and Acceleration of a Rotating Point"
exam: final
skills: [Rigid-Body Kinematics, Normal-Tangential Motion]
-->

A wheel of radius $0.5$ m has $\omega = 2 \, \text{rad/s}$ and $\alpha = 2 \, \text{rad/s}^2$ at an instant. For a point on the rim, find the speed, tangential acceleration, normal acceleration, and total acceleration magnitude.

:::solution
Use the fixed-axis rotation formulas:

$$
v = \omega r, \qquad a_t = \alpha r, \qquad a_n = \omega^2 r
$$

So

$$
v = 2(0.5) = 1 \, \text{m/s}
$$

$$
a_t = 2(0.5) = 1 \, \text{m/s}^2
$$

$$
a_n = 2^2(0.5) = 2 \, \text{m/s}^2
$$

The total acceleration magnitude is

$$
a = \sqrt{a_t^2 + a_n^2}
= \sqrt{1^2 + 2^2}
= \sqrt{5} \, \text{m/s}^2
$$
:::

<!--
id: dynamics-43
note: engineering-dynamics
title: "Use Rotational Work-Energy"
exam: final
skills: [Work-Energy Methods, Rigid-Body Kinetics]
-->

A uniform rod has mass $2$ kg and length $1$ m and rotates about one end. A constant moment of $6$ N$\cdot$m acts on it as it turns through $90^\circ$ from rest. Find its angular speed at the end of the turn.

:::solution
Use work-energy for rotation:

$$
W = \Delta T
$$

The work done by the moment is

$$
W = M\theta = 6\left(\frac{\pi}{2}\right) = 3\pi \, \text{J}
$$

The rod's moment of inertia about one end is

$$
I_O = \frac{1}{3}mL^2 = \frac{1}{3}(2)(1^2) = \frac{2}{3} \, \text{kg}\cdot\text{m}^2
$$

Since it starts from rest,

$$
\frac{1}{2}I_O\omega^2 = 3\pi
$$

Substitute $I_O = \frac{2}{3}$:

$$
\frac{1}{2}\left(\frac{2}{3}\right)\omega^2 = 3\pi
$$

$$
\frac{1}{3}\omega^2 = 3\pi
$$

$$
\omega^2 = 9\pi
$$

$$
\omega = 3\sqrt{\pi} \, \text{rad/s}
$$
:::

<!--
id: dynamics-44
note: engineering-dynamics
title: "Handle a Rotating Frame with Coriolis Acceleration"
exam: final
skills: [Relative Motion, Rotating Frames]
-->

A collar slides outward in a radial slot on a disk rotating counterclockwise with constant angular velocity $\omega = 4 \, \text{rad/s}$. At the instant shown, the collar is $0.5$ m from the center and has outward relative speed $\dot{r} = 2 \, \text{m/s}$. The disk has no angular acceleration and the radial speed is constant, so $\ddot{r} = 0$. Find the Coriolis acceleration magnitude and the total acceleration vector.

:::solution
For a rotating frame, the Coriolis term is

$$
2\boldsymbol{\omega} \times \mathbf{v}_{rel}
$$

Its magnitude is

$$
2\omega v_{rel} = 2(4)(2) = 16 \, \text{m/s}^2
$$

Since $\dot{r}$ is constant, $\mathbf{a}_{rel} = 0$ and $\boldsymbol{\alpha} = 0$.

The centripetal term is

$$
\boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}) = -\omega^2 r\,\mathbf{e}_r
$$

so

$$
a_r = -(4^2)(0.5) = -8 \, \text{m/s}^2
$$

and the Coriolis term points in the tangential direction:

$$
a_\theta = 16 \, \text{m/s}^2
$$

Therefore,

$$
\mathbf{a} = -8\,\mathbf{e}_r + 16\,\mathbf{e}_\theta
$$

The Coriolis acceleration magnitude is $16 \, \text{m/s}^2$.
:::
