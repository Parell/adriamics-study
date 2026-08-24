<!--
id: relativity-11
note: physics-relativity
title: "State the Two Postulates"
exam: exam-i
skills: [Postulates, Inertial Frames]
-->

State the two postulates of special relativity.

:::solution
The two postulates are:

1. The laws of physics are the same in all inertial frames.
2. The speed of light in vacuum is the same for all inertial observers.

These are the starting point for special relativity.
:::

<!--
id: relativity-12
note: physics-relativity
title: "Compute a Lorentz Factor"
exam: exam-i
skills: [Lorentz Factor]
-->

For a speed of $v = 0.6c$, compute the Lorentz factor $\gamma$.

:::solution
Use

$$
\gamma = \frac{1}{\sqrt{1-\frac{v^2}{c^2}}}.
$$

Substitute $v = 0.6c$:

$$
\gamma = \frac{1}{\sqrt{1-0.6^2}} = \frac{1}{\sqrt{1-0.36}} = \frac{1}{0.8} = 1.25.
$$
:::

<!--
id: relativity-13
note: physics-relativity
title: "Classify an Interval"
exam: exam-i
skills: [Spacetime Interval, Causality]
-->

Two events are separated by $\Delta t = 4\ \text{ns}$ and $\Delta x = 1\ \text{m}$ in one spatial dimension. Classify the spacetime interval.

:::solution
Compute the light-travel distance for the time separation:

$$
c\Delta t = (3.00\times 10^8\ \text{m/s})(4\times 10^{-9}\ \text{s}) = 1.2\ \text{m}.
$$

Since

$$
c^2\Delta t^2 > \Delta x^2
$$

the interval is timelike.
:::

<!--
id: relativity-14
note: physics-relativity
title: "Time Dilation from Proper Time"
exam: exam-i
skills: [Time Dilation, Lorentz Factor]
-->

A clock has proper time $\Delta \tau = 8\ \text{s}$ and moves at $0.6c$ relative to you. How much time do you measure?

:::solution
First find $\gamma$ from $v = 0.6c$:

$$
\gamma = 1.25.
$$

Then use time dilation:

$$
\Delta t = \gamma \Delta \tau = 1.25(8\ \text{s}) = 10\ \text{s}.
$$
:::

<!--
id: relativity-15
note: physics-relativity
title: "Length Contraction of a Rod"
exam: exam-i
skills: [Length Contraction, Proper Length]
-->

A rod has proper length $L_0 = 12\ \text{m}$ and moves at $0.8c$ relative to you. What length do you measure?

:::solution
For $v = 0.8c$,

$$
\gamma = \frac{1}{\sqrt{1-0.8^2}} = \frac{1}{0.6} = \frac{5}{3}.
$$

Use length contraction:

$$
L = \frac{L_0}{\gamma} = \frac{12}{5/3} = 12\cdot \frac{3}{5} = 7.2\ \text{m}.
$$
:::

<!--
id: relativity-16
note: physics-relativity
title: "Relativity of Simultaneity"
exam: exam-i
skills: [Relativity of Simultaneity, Lorentz Transformations]
-->

In one frame, two events are simultaneous and separated by $12\ \text{m}$ along the $x$-axis. If $S'$ moves in the $+x$ direction at $0.6c$, what is $\Delta t'$?

:::solution
If the events are simultaneous in the first frame, then $\Delta t = 0$ and

$$
\Delta t' = -\gamma \frac{v\Delta x}{c^2}.
$$

With $\gamma = 1.25$, $v = 0.6c$, and $\Delta x = 12\ \text{m}$:

$$
\Delta t' = -1.25\cdot \frac{0.6c\cdot 12}{c^2}
= -1.25\cdot \frac{7.2}{c}.
$$

Since $c = 3.00\times 10^8\ \text{m/s}$,

$$
\Delta t' = -3.0\times 10^{-8}\ \text{s} = -30\ \text{ns}.
$$
:::

<!--
id: relativity-17
note: physics-relativity
title: "Add Two Velocities"
exam: exam-i
skills: [Velocity Addition]
-->

A probe moves at $0.5c$ relative to a ship, and the ship moves at $0.5c$ relative to Earth in the same direction. What speed does Earth measure for the probe?

:::solution
Use relativistic velocity addition:

$$
u = \frac{u'+v}{1+\frac{u'v}{c^2}}.
$$

Substitute $u' = 0.5c$ and $v = 0.5c$:

$$
u = \frac{0.5c+0.5c}{1+0.25} = \frac{c}{1.25} = 0.8c.
$$
:::

<!--
id: relativity-18
note: physics-relativity
title: "Find the Rest Energy"
exam: exam-i
skills: [Rest Energy, Mass-Energy Equivalence]
-->

What is the rest energy of a $1\ \text{kg}$ object?

:::solution
Use

$$
E_0 = mc^2.
$$

So

$$
E_0 = (1\ \text{kg})(3.00\times 10^8\ \text{m/s})^2 = 9.0\times 10^{16}\ \text{J}.
$$
:::

<!--
id: relativity-19
note: physics-relativity
title: "Name the Proper Time"
exam: exam-i
skills: [Proper Time]
-->

What do you call the time measured by a clock that travels with two timelike-separated events?

:::solution
That time is called the **proper time**.

It is the time measured in the rest frame of the clock.
:::

<!--
id: relativity-110
note: physics-relativity
title: "Use the Photon Momentum Relation"
exam: exam-i
skills: [Photon Relations]
-->

For a photon with energy $E$, what is its momentum?

:::solution
For light, the relation is

$$
E = pc.
$$

So the momentum is

$$
p = \frac{E}{c}.
$$
:::

<!--
id: relativity-21
note: physics-relativity
title: "Transform One Event"
exam: exam-ii
skills: [Lorentz Transformations, Lorentz Factor]
-->

In frame $S$, an event occurs at $t = 2.0\times 10^{-8}\ \text{s}$ and $x = 3.0\ \text{m}$. If $S'$ moves at $v = 0.6c$ in the $+x$ direction, find $x'$ and $t'$.

:::solution
For $v = 0.6c$, we have $\gamma = 1.25$.

Use the Lorentz transformations:

$$
x' = \gamma(x-vt)
$$

and

$$
t' = \gamma\left(t-\frac{vx}{c^2}\right).
$$

First compute $vt$:

$$
vt = (0.6c)(2.0\times 10^{-8}\ \text{s}) = 3.6\ \text{m}.
$$

So

$$
x' = 1.25(3.0-3.6) = 1.25(-0.6) = -0.75\ \text{m}.
$$

Next,

$$
\frac{vx}{c^2} = \frac{0.6c\cdot 3.0}{c^2} = \frac{1.8}{c} = 6.0\times 10^{-9}\ \text{s}.
$$

Therefore,

$$
t' = 1.25(2.0\times 10^{-8} - 6.0\times 10^{-9})
= 1.25(1.4\times 10^{-8})
= 1.75\times 10^{-8}\ \text{s}.
$$
:::

<!--
id: relativity-22
note: physics-relativity
title: "Use Proper Time and Distance"
exam: exam-ii
skills: [Time Dilation, Proper Time]
-->

A spaceship moves at $0.8c$ for $10\ \mu\text{s}$ as measured in Earth frame. How much proper time passes on the ship, and how far does it travel in Earth frame?

:::solution
For $v = 0.8c$,

$$
\gamma = \frac{5}{3}.
$$

The proper time is

$$
\Delta \tau = \frac{\Delta t}{\gamma} = \frac{10\ \mu\text{s}}{5/3} = 6\ \mu\text{s}.
$$

The Earth-frame distance is

$$
d = vt = (0.8c)(10\times 10^{-6}\ \text{s}) = 2.4\times 10^3\ \text{m}.
$$

So the ship experiences $6\ \mu\text{s}$, and it travels $2400\ \text{m}$ in Earth frame.
:::

<!--
id: relativity-23
note: physics-relativity
title: "Interval to Causality"
exam: exam-ii
skills: [Spacetime Interval, Causality]
-->

Two events are separated by $\Delta t = 20\ \text{ns}$ and $\Delta x = 9\ \text{m}$. Can a light signal connect them?

:::solution
Compute the light-travel distance for the time separation:

$$
c\Delta t = (3.00\times 10^8)(20\times 10^{-9}) = 6\ \text{m}.
$$

Since

$$
c\Delta t < \Delta x,
$$

the interval is spacelike. A light signal cannot connect the events, so there is no causal connection at or below light speed.
:::

<!--
id: relativity-24
note: physics-relativity
title: "Relativistic Kinetic Energy"
exam: exam-ii
skills: [Kinetic Energy, Lorentz Factor]
-->

What is the kinetic energy of a $2\ \text{kg}$ object moving at $0.6c$?

:::solution
For $v = 0.6c$, the Lorentz factor is

$$
\gamma = 1.25.
$$

Use

$$
K = (\gamma - 1)mc^2.
$$

So

$$
K = (1.25 - 1)(2)(3.00\times 10^8)^2.
$$

That is

$$
K = 0.5 \cdot 9.0\times 10^{16} = 4.5\times 10^{16}\ \text{J}.
$$
:::

<!--
id: relativity-25
note: physics-relativity
title: "Energy from Momentum"
exam: exam-ii
skills: [Energy-Momentum Relation, Momentum]
-->

A particle has rest mass $m$ and momentum $p = \frac{3}{4}mc$. Find its total energy in terms of $m$ and $c$.

:::solution
Use the invariant energy-momentum relation:

$$
E^2 = (pc)^2 + (mc^2)^2.
$$

Substitute $p = \frac{3}{4}mc$:

$$
E^2 = \left(\frac{3}{4}mc^2\right)^2 + (mc^2)^2.
$$

Factor out $m^2c^4$:

$$
E^2 = m^2c^4\left(\frac{9}{16} + 1\right)
= m^2c^4\left(\frac{25}{16}\right).
$$

So

$$
E = \frac{5}{4}mc^2.
$$
:::

<!--
id: relativity-26
note: physics-relativity
title: "Particle Reaches the Detector"
exam: exam-ii
skills: [Time Dilation, Applied Problem]
-->

A particle has proper lifetime $2.2\ \mu\text{s}$ and moves at $0.8c$. It is created $500\ \text{m}$ above a detector. Does it reach the detector before decaying?

:::solution
For $v = 0.8c$, we have

$$
\gamma = \frac{5}{3}.
$$

So the lab-frame lifetime is

$$
\Delta t = \gamma \Delta \tau = \frac{5}{3}(2.2\ \mu\text{s}) \approx 3.67\ \mu\text{s}.
$$

The distance traveled is

$$
d = vt \approx (0.8c)(3.67\times 10^{-6}\ \text{s}) \approx 8.8\times 10^2\ \text{m}.
$$

Since $880\ \text{m} > 500\ \text{m}$, the particle reaches the detector before decaying.
:::

<!--
id: relativity-27
note: physics-relativity
title: "Simultaneous Flashes in Another Frame"
exam: exam-ii
skills: [Relativity of Simultaneity, Frame Dependence]
-->

Two lightning flashes happen simultaneously in Earth's frame and are separated by $20\ \text{m}$ along the $x$-axis. If a train moves at $0.6c$ in the $+x$ direction, what time separation does the train measure?

:::solution
Use the simultaneity formula with $\Delta t = 0$:

$$
\Delta t' = -\gamma \frac{v\Delta x}{c^2}.
$$

For $v = 0.6c$, $\gamma = 1.25$. Then

$$
\Delta t' = -1.25\cdot \frac{0.6c\cdot 20}{c^2}
= -1.25\cdot \frac{12}{c}.
$$

Since $c = 3.00\times 10^8\ \text{m/s}$,

$$
\Delta t' = -5.0\times 10^{-8}\ \text{s} = -50\ \text{ns}.
$$

So the flashes are not simultaneous in the train frame.
:::

<!--
id: relativity-28
note: physics-relativity
title: "Photon Energy Loss from Redshift"
exam: exam-ii
skills: [Gravitational Redshift, Photon Relations]
-->

A photon is emitted with frequency $6.0\times 10^{14}\ \text{Hz}$ and later observed at $5.4\times 10^{14}\ \text{Hz}$. By what percentage did its energy change?

:::solution
For a photon,

$$
E = hf,
$$

so energy is proportional to frequency.

The frequency changed from $6.0\times 10^{14}$ to $5.4\times 10^{14}$, which is a factor of

$$
\frac{5.4}{6.0} = 0.9.
$$

So the energy dropped to $90\%$ of its original value, a decrease of $10\%$.
:::

<!--
id: relativity-31
note: physics-relativity
title: "Decide Between SR and GR"
exam: final
skills: [General Relativity, Special Relativity, Inertial Frames]
-->

A problem asks for the clock-rate correction needed for a GPS satellite relative to a ground clock. Which theory is essential, and why?

:::solution
General relativity is essential, because the satellite and the ground clock are in different gravitational potentials.

Special relativity handles motion in inertial frames, but it does not account for gravitational time dilation. GPS needs both motion and gravity, so the gravitational effect requires general relativity.
:::

<!--
id: relativity-32
note: physics-relativity
title: "Muon Reaches the Ground"
exam: final
skills: [Time Dilation, Applied Problem]
-->

A muon has proper lifetime $2.2\ \mu\text{s}$ and moves at $0.6c$. It is created in the upper atmosphere $500\ \text{m}$ above the ground. Does it reach the ground before decaying?

:::solution
For $v = 0.6c$, the Lorentz factor is

$$
\gamma = 1.25.
$$

The lab-frame lifetime is

$$
\Delta t = \gamma \Delta \tau = 1.25(2.2\ \mu\text{s}) = 2.75\ \mu\text{s}.
$$

The distance traveled is

$$
d = vt = (0.6c)(2.75\times 10^{-6}\ \text{s}) \approx 4.95\times 10^2\ \text{m}.
$$

So the muon travels about $495\ \text{m}$, which is just short of $500\ \text{m}$. It does not quite reach the ground.
:::

<!--
id: relativity-33
note: physics-relativity
title: "Why Simultaneity Can Change"
exam: final
skills: [Relativity of Simultaneity, Frame Dependence]
-->

Two lightning strikes happen simultaneously in Earth's frame at opposite ends of a moving train. Explain why a passenger on the train can disagree about whether they were simultaneous.

:::solution
The time coordinate transforms as

$$
t' = \gamma\left(t-\frac{vx}{c^2}\right).
$$

If the two strikes occur at different positions, the $vx/c^2$ term is different for each event. That means equal $t$ in Earth frame does not imply equal $t'$ in the train frame.

So simultaneity depends on the frame.
:::

<!--
id: relativity-34
note: physics-relativity
title: "Final Mass After a Head-On Collision"
exam: final
skills: [Energy-Momentum Relation, Conservation Laws]
-->

Two identical particles each have rest mass $m$ and move directly toward each other at $0.6c$. They collide and stick together. What is the rest mass of the final composite object?

:::solution
For each particle moving at $0.6c$, $\gamma = 1.25$, so each has energy

$$
E = \gamma mc^2 = 1.25mc^2.
$$

The total energy before the collision is

$$
E_{\text{total}} = 2(1.25mc^2) = 2.5mc^2.
$$

Because the particles have equal and opposite momenta, the total momentum is zero. After they stick together, the composite object is at rest, so its rest energy is

$$
Mc^2 = 2.5mc^2.
$$

Therefore,

$$
M = 2.5m.
$$
:::

<!--
id: relativity-35
note: physics-relativity
title: "What Happens to a Photon Climbing Out of Gravity"
exam: final
skills: [Gravitational Redshift, Photon Relations]
-->

A photon climbs out of a gravitational field and its frequency drops by $12\%$. By what percent does its energy drop?

:::solution
For a photon,

$$
E = hf,
$$

so energy changes by the same percentage as frequency.

If the frequency drops by $12\%$, the energy also drops by $12\%$.
:::

<!--
id: relativity-41
note: physics-relativity
title: "Solve for the Relative Speed"
exam: final
skills: [Relativity of Simultaneity, Lorentz Transformations]
-->

In frame $S$, two events are simultaneous and separated by $24\ \text{m}$. Another frame $S'$ measures them to be $80\ \text{ns}$ apart in time. What is the speed of $S'$ relative to $S$? Give the magnitude.

:::solution
With $\Delta t = 0$,

$$
\Delta t' = -\gamma \frac{v\Delta x}{c^2}.
$$

Take magnitudes:

$$
|\Delta t'| = \gamma \frac{v\Delta x}{c^2}.
$$

Substitute $|\Delta t'| = 80\ \text{ns}$ and $\Delta x = 24\ \text{m}$:

$$
c|\Delta t'| = (3.00\times 10^8)(80\times 10^{-9}) = 24\ \text{m}.
$$

So

$$
24 = \gamma v \frac{24}{c},
$$

which simplifies to

$$
\gamma \beta = 1,
$$

where $\beta = v/c$.

Thus

$$
\frac{\beta}{\sqrt{1-\beta^2}} = 1.
$$

Square both sides:

$$
\beta^2 = 1-\beta^2
$$

so

$$
2\beta^2 = 1
\quad\Rightarrow\quad
\beta = \frac{1}{\sqrt{2}}.
$$

Therefore,

$$
v = \frac{c}{\sqrt{2}} \approx 0.707c.
$$
:::

<!--
id: relativity-42
note: physics-relativity
title: "Find the Interval and Proper Time"
exam: final
skills: [Spacetime Interval, Proper Time]
-->

Two events occur $10\ \text{ns}$ apart and $1.8\ \text{m}$ apart. Find the invariant interval and the proper time between them, if it exists.

:::solution
First compute the light-travel distance:

$$
c\Delta t = (3.00\times 10^8)(10\times 10^{-9}) = 3\ \text{m}.
$$

Since $3\ \text{m} > 1.8\ \text{m}$, the interval is timelike.

The invariant interval is

$$
\Delta s^2 = c^2\Delta t^2 - \Delta x^2 = 3^2 - 1.8^2 = 9 - 3.24 = 5.76\ \text{m}^2.
$$

For a timelike interval,

$$
\Delta \tau = \frac{\sqrt{\Delta s^2}}{c} = \frac{2.4\ \text{m}}{3.00\times 10^8\ \text{m/s}} = 8\times 10^{-9}\ \text{s}.
$$

So the proper time is $8\ \text{ns}$.
:::

<!--
id: relativity-43
note: physics-relativity
title: "Why the Final Object Is Heavier"
exam: final
skills: [Energy-Momentum Relation, Conservation Laws]
-->

Two identical particles each have rest mass $m$ and move at $0.6c$ in opposite directions. They collide and form one object at rest. Show that the final object's rest mass is larger than $2m$.

:::solution
Each particle has $\gamma = 1.25$, so each carries energy

$$
E = \gamma mc^2 = 1.25mc^2.
$$

The total energy is

$$
E_{\text{total}} = 2.5mc^2.
$$

Because the momenta cancel, the final object is at rest. Its rest energy is therefore

$$
Mc^2 = 2.5mc^2,
$$

so

$$
M = 2.5m.
$$

That is larger than $2m$ because some kinetic energy has been converted into rest mass.
:::

<!--
id: relativity-44
note: physics-relativity
title: "Explain Why Light Bends Near a Star"
exam: final
skills: [Equivalence Principle, Light Bending, General Relativity]
-->

Why does light bend near a massive object in general relativity, even though light has no rest mass?

:::solution
General relativity says mass-energy curves spacetime, and light follows the curved geometry of spacetime.

So light is not being pulled by a Newtonian force in the usual way. Instead, its path is a geodesic in curved spacetime.

The equivalence principle is the key idea behind this: locally, gravity and acceleration have the same physical effects, so even light is affected by the geometry associated with gravity.
:::
