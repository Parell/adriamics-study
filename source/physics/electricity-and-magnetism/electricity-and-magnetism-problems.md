<!--
id: electricity-and-magnetism-11
note: physics-electricity-and-magnetism
title: "Force Between Two Point Charges"
exam: exam-i
skills: [Coulomb's law, Point charges]
-->

Two point charges, $q_1 = +3\,\mu\text{C}$ and $q_2 = -2\,\mu\text{C}$, are separated by $0.50\ \text{m}$.

Find the magnitude of the force between them and state whether the force is attractive or repulsive.

:::solution
Use Coulomb's law:

$$
F = k\frac{|q_1q_2|}{r^2}
$$

Substitute the values:

$$
F = 9.0\times 10^9 \frac{(3\times 10^{-6})(2\times 10^{-6})}{(0.50)^2}
$$

$$
F = 0.216\ \text{N}
$$

Because the charges have opposite signs, the force is attractive.
:::

<!--
id: electricity-and-magnetism-12
note: physics-electricity-and-magnetism
title: "Electric Field of a Point Charge"
exam: exam-i
skills: [Electric field, Point charges]
-->

A charge of $+5.0\ \text{nC}$ is located in space.

What is the magnitude of the electric field $0.20\ \text{m}$ away from the charge, and what is its direction?

:::solution
For a point charge,

$$
E = k\frac{|q|}{r^2}
$$

Substitute:

$$
E = 9.0\times 10^9 \frac{5.0\times 10^{-9}}{(0.20)^2}
$$

$$
E = 1125\ \text{N/C}
$$

Since the charge is positive, the field points away from the charge.
:::

<!--
id: electricity-and-magnetism-13
note: physics-electricity-and-magnetism
title: "Linear Charge Density"
exam: exam-i
skills: [Charge densities, Continuous charge distributions]
-->

A uniform charge of $12\ \mu\text{C}$ is spread along a thin wire of length $3.0\ \text{m}$.

What is the linear charge density $\lambda$?

:::solution
Linear charge density is

$$
\lambda = \frac{dq}{dl}
$$

For a uniform wire, this becomes

$$
\lambda = \frac{Q}{L}
$$

So

$$
\lambda = \frac{12\ \mu\text{C}}{3.0\ \text{m}} = 4.0\ \mu\text{C/m}
$$
:::

<!--
id: electricity-and-magnetism-14
note: physics-electricity-and-magnetism
title: "Electric Flux Through a Flat Surface"
exam: exam-i
skills: [Electric flux]
-->

A uniform electric field of magnitude $200\ \text{N/C}$ passes through a flat surface of area $0.15\ \text{m}^2$.

The angle between the field and the surface normal is $30^\circ$.

What is the electric flux?

:::solution
For a flat surface in a uniform field,

$$
\Phi_E = EA\cos\theta
$$

Substitute the values:

$$
\Phi_E = (200)(0.15)\cos 30^\circ
$$

$$
\Phi_E \approx 26\ \text{N}\cdot\text{m}^2/\text{C}
$$
:::

<!--
id: electricity-and-magnetism-15
note: physics-electricity-and-magnetism
title: "Charge Enclosed by a Gaussian Surface"
exam: exam-i
skills: [Gauss's law, Electric flux]
-->

A closed surface has electric flux

$$
\Phi_E = 5.0\times 10^3\ \text{N}\cdot\text{m}^2/\text{C}.
$$

What charge is enclosed by the surface?

:::solution
Gauss's law says

$$
\oint \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}
$$

So

$$
Q_{\text{enc}} = \varepsilon_0\Phi_E
$$

Substitute:

$$
Q_{\text{enc}} = (8.854\times 10^{-12})(5.0\times 10^3)
$$

$$
Q_{\text{enc}} = 4.4\times 10^{-8}\ \text{C}
$$
:::

<!--
id: electricity-and-magnetism-16
note: physics-electricity-and-magnetism
title: "Potential from Two Point Charges"
exam: exam-i
skills: [Electric potential, Superposition]
-->

At a point in space, a $+4.0\ \text{nC}$ charge is $0.30\ \text{m}$ away and a $-1.0\ \text{nC}$ charge is $0.20\ \text{m}$ away.

What is the electric potential at that point?

:::solution
Electric potential adds as a scalar:

$$
V = \sum_i k\frac{q_i}{r_i}
$$

Compute each contribution:

$$
V_1 = 9.0\times 10^9 \frac{4.0\times 10^{-9}}{0.30} = 120\ \text{V}
$$

$$
V_2 = 9.0\times 10^9 \frac{-1.0\times 10^{-9}}{0.20} = -45\ \text{V}
$$

So

$$
V = 120 - 45 = 75\ \text{V}
$$
:::

<!--
id: electricity-and-magnetism-17
note: physics-electricity-and-magnetism
title: "Change in Potential Energy"
exam: exam-i
skills: [Electric potential, Potential energy]
-->

A charge of $+3.0\ \mu\text{C}$ moves from a point at $20\ \text{V}$ to a point at $-10\ \text{V}$.

What is the change in its electric potential energy?

:::solution
Use

$$
\Delta U = q\Delta V
$$

with

$$
\Delta V = V_f - V_i = -10 - 20 = -30\ \text{V}
$$

Then

$$
\Delta U = (3.0\times 10^{-6})(-30)
$$

$$
\Delta U = -9.0\times 10^{-5}\ \text{J}
$$

The potential energy decreases.
:::

<!--
id: electricity-and-magnetism-18
note: physics-electricity-and-magnetism
title: "Dielectric Constant from Capacitance"
exam: exam-i
skills: [Capacitance, Dielectrics]
-->

A capacitor has capacitance $2.0\ \mu\text{F}$ in vacuum. After a dielectric is inserted, its capacitance becomes $6.0\ \mu\text{F}$.

What is the dielectric constant $\kappa$?

:::solution
With a dielectric,

$$
C = \kappa \varepsilon_0 \frac{A}{d}
$$

So the capacitance increases by a factor of $\kappa$:

$$
\kappa = \frac{6.0}{2.0} = 3.0
$$
:::

<!--
id: electricity-and-magnetism-19
note: physics-electricity-and-magnetism
title: "Resistance of a Uniform Wire"
exam: exam-i
skills: [Resistance, Ohm's law]
-->

A wire has resistivity $2.0\times 10^{-6}\ \Omega\cdot\text{m}$, length $4.0\ \text{m}$, and cross-sectional area $2.0\times 10^{-6}\ \text{m}^2$.

Find its resistance, and then find the current if a $12\ \text{V}$ potential difference is applied across it.

:::solution
For a uniform conductor,

$$
R = \rho\frac{L}{A}
$$

Substitute:

$$
R = (2.0\times 10^{-6})\frac{4.0}{2.0\times 10^{-6}} = 4.0\ \Omega
$$

Now use Ohm's law:

$$
V = IR
$$

So

$$
I = \frac{V}{R} = \frac{12}{4.0} = 3.0\ \text{A}
$$
:::

<!--
id: electricity-and-magnetism-110
note: physics-electricity-and-magnetism
title: "Magnetic Force on a Current-Carrying Wire"
exam: exam-i
skills: [Magnetic force, Current]
-->

A straight wire segment of length $0.30\ \text{m}$ carries a current of $5.0\ \text{A}$.
It is placed in a uniform magnetic field of magnitude $0.40\ \text{T}$, and the wire is perpendicular to the field.

What is the magnitude of the magnetic force on the wire?

:::solution
For a straight wire in a uniform field,

$$
F = ILB\sin\theta
$$

Here $\theta = 90^\circ$, so

$$
F = (5.0)(0.30)(0.40)
$$

$$
F = 0.60\ \text{N}
$$
:::

<!--
id: electricity-and-magnetism-21
note: physics-electricity-and-magnetism
title: "Net Field from Two Point Charges on a Line"
exam: exam-ii
skills: [Superposition, Electric field]
-->

Two charges lie on a line: a $+6.0\ \text{nC}$ charge on the left and a $-6.0\ \text{nC}$ charge on the right. A point is exactly halfway between them, $0.10\ \text{m}$ from each charge.

What is the net electric field at the midpoint?

:::solution
Each charge produces a field of magnitude

$$
E = k\frac{|q|}{r^2}
$$

So for one charge,

$$
E_1 = 9.0\times 10^9 \frac{6.0\times 10^{-9}}{(0.10)^2} = 5400\ \text{N/C}
$$

At the midpoint, the field from the positive charge points to the right, and the field from the negative charge also points to the right.

So the fields add:

$$
E_{\text{net}} = 2(5400) = 1.08\times 10^4\ \text{N/C}
$$

The direction is to the right, from the positive charge toward the negative charge.
:::

<!--
id: electricity-and-magnetism-22
note: physics-electricity-and-magnetism
title: "Gauss's Law for an Infinite Sheet"
exam: exam-ii
skills: [Gauss's law, Electric field]
-->

An infinite sheet of charge has surface charge density

$$
\sigma = 3.5\ \mu\text{C/m}^2.
$$

What is the electric field magnitude on either side of the sheet, and what is the direction?

:::solution
For an infinite sheet,

$$
E = \frac{\sigma}{2\varepsilon_0}
$$

Substitute:

$$
E = \frac{3.5\times 10^{-6}}{2(8.854\times 10^{-12})}
$$

$$
E \approx 2.0\times 10^5\ \text{N/C}
$$

Because the sheet is positively charged, the field points away from the sheet on both sides.
:::

<!--
id: electricity-and-magnetism-23
note: physics-electricity-and-magnetism
title: "Work from a Potential Difference"
exam: exam-ii
skills: [Electric potential, Potential energy]
-->

A $3.0\ \mu\text{C}$ charge moves from a point at $20\ \text{V}$ to a point at $-10\ \text{V}$.

How much work does the electric field do on the charge?

:::solution
The work done by the field is

$$
W_{\text{field}} = -\Delta U = -q\Delta V
$$

Here,

$$
\Delta V = -10 - 20 = -30\ \text{V}
$$

So

$$
W_{\text{field}} = -(3.0\times 10^{-6})(-30)
$$

$$
W_{\text{field}} = 9.0\times 10^{-5}\ \text{J}
$$
:::

<!--
id: electricity-and-magnetism-24
note: physics-electricity-and-magnetism
title: "Capacitors in Series"
exam: exam-ii
skills: [Capacitor combinations, Capacitance]
-->

Two capacitors of $3.0\ \mu\text{F}$ and $6.0\ \mu\text{F}$ are connected in series across a $12\ \text{V}$ battery.

Find the equivalent capacitance and the charge on each capacitor.

:::solution
For capacitors in series,

$$
\frac{1}{C_{\text{eq}}} = \frac{1}{3.0} + \frac{1}{6.0} = \frac{1}{2.0}
$$

So

$$
C_{\text{eq}} = 2.0\ \mu\text{F}
$$

The charge stored by the series combination is

$$
Q = C_{\text{eq}}V = (2.0\ \mu\text{F})(12\ \text{V}) = 24\ \mu\text{C}
$$

In series, each capacitor has the same charge, so each one stores $24\ \mu\text{C}$.
:::

<!--
id: electricity-and-magnetism-25
note: physics-electricity-and-magnetism
title: "Kirchhoff Loop with Power"
exam: exam-ii
skills: [Kirchhoff's rules, Power]
-->

A $12\ \text{V}$ battery is connected in series with a $2\ \Omega$ resistor and a $4\ \Omega$ resistor.

Find the circuit current and the power dissipated by the $4\ \Omega$ resistor.

:::solution
The total resistance is

$$
R_{\text{tot}} = 2 + 4 = 6\ \Omega
$$

So the current is

$$
I = \frac{V}{R_{\text{tot}}} = \frac{12}{6} = 2\ \text{A}
$$

The power in the $4\ \Omega$ resistor is

$$
P = I^2R = (2)^2(4) = 16\ \text{W}
$$
:::

<!--
id: electricity-and-magnetism-26
note: physics-electricity-and-magnetism
title: "RC Charging After One Time Constant"
exam: exam-ii
skills: [RC circuits, Time constant]
-->

An RC circuit has $R = 2.0\ \text{k}\Omega$, $C = 100\ \mu\text{F}$, and is connected to a $12\ \text{V}$ battery.

Find the time constant and the charge on the capacitor after one time constant has passed.

:::solution
The time constant is

$$
\tau = RC = (2.0\times 10^3)(100\times 10^{-6}) = 0.20\ \text{s}
$$

The final charge is

$$
Q_{\infty} = CV = (100\times 10^{-6})(12) = 1.2\times 10^{-3}\ \text{C}
$$

After one time constant, the charge is about $63.2\%$ of the final value:

$$
Q(\tau) = 0.632Q_{\infty}
$$

$$
Q(\tau) \approx 0.632(1.2\times 10^{-3}) = 7.6\times 10^{-4}\ \text{C}
$$
:::

<!--
id: electricity-and-magnetism-27
note: physics-electricity-and-magnetism
title: "Magnetic Field of a Long Straight Wire"
exam: exam-ii
skills: [Ampere's law, Magnetic field]
-->

A long straight wire carries a current of $8.0\ \text{A}$.

What is the magnetic field magnitude $5.0\ \text{cm}$ from the wire?

:::solution
For a long straight wire,

$$
B = \frac{\mu_0 I}{2\pi r}
$$

Substitute:

$$
B = \frac{(4\pi\times 10^{-7})(8.0)}{2\pi(0.050)}
$$

$$
B = 3.2\times 10^{-5}\ \text{T}
$$
:::

<!--
id: electricity-and-magnetism-28
note: physics-electricity-and-magnetism
title: "Motion in a Uniform Magnetic Field"
exam: exam-ii
skills: [Magnetic force, Circular motion]
-->

A proton moves perpendicular to a uniform magnetic field of magnitude $0.50\ \text{T}$ with speed $2.0\times 10^5\ \text{m/s}$.

What is the radius of its circular path?

:::solution
For circular motion in a magnetic field,

$$
r = \frac{mv}{|q|B}
$$

Using the proton mass $m = 1.67\times 10^{-27}\ \text{kg}$ and charge $q = 1.60\times 10^{-19}\ \text{C}$:

$$
r = \frac{(1.67\times 10^{-27})(2.0\times 10^5)}{(1.60\times 10^{-19})(0.50)}
$$

$$
r \approx 4.2\times 10^{-3}\ \text{m}
$$
:::

<!--
id: electricity-and-magnetism-31
note: physics-electricity-and-magnetism
title: "Field from an Infinite Line Charge"
exam: final
skills: [Gauss's law, Electric field]
-->

An infinite line of charge has linear charge density

$$
\lambda = 5.0\ \text{nC/m}.
$$

What is the electric field magnitude $0.20\ \text{m}$ from the line?

:::solution
For an infinite line charge,

$$
E = \frac{\lambda}{2\pi\varepsilon_0 r}
$$

Substitute:

$$
E = \frac{5.0\times 10^{-9}}{2\pi(8.854\times 10^{-12})(0.20)}
$$

$$
E \approx 4.5\times 10^2\ \text{N/C}
$$

Since the line charge is positive, the field points away from the line.
:::

<!--
id: electricity-and-magnetism-32
note: physics-electricity-and-magnetism
title: "Magnetic Field Inside a Solenoid"
exam: final
skills: [Ampere's law, Magnetic field]
-->

A solenoid has $900$ turns over a length of $0.30\ \text{m}$ and carries a current of $2.0\ \text{A}$.

What is the magnetic field inside the solenoid?

:::solution
First find the number of turns per unit length:

$$
n = \frac{900}{0.30} = 3000\ \text{m}^{-1}
$$

For a long solenoid,

$$
B \approx \mu_0 n I
$$

Substitute:

$$
B = (4\pi\times 10^{-7})(3000)(2.0)
$$

$$
B \approx 7.5\times 10^{-3}\ \text{T}
$$
:::

<!--
id: electricity-and-magnetism-33
note: physics-electricity-and-magnetism
title: "Direction of an Induced Current"
exam: final
skills: [Faraday's law, Lenz's law]
-->

A circular loop lies in the page. The magnetic field through the loop points into the page and is increasing.

What is the direction of the induced current?

:::solution
The increasing flux into the page must be opposed by an induced field out of the page.

Using the right-hand rule, a field out of the page is produced by a counterclockwise current.

So the induced current is counterclockwise.
:::

<!--
id: electricity-and-magnetism-34
note: physics-electricity-and-magnetism
title: "Motional EMF in a Sliding Bar"
exam: final
skills: [Motional emf, Current]
-->

A metal bar of length $0.40\ \text{m}$ slides at $5.0\ \text{m/s}$ through a magnetic field of magnitude $0.80\ \text{T}$.
The bar and its motion are perpendicular to the field.
The circuit resistance is $2.0\ \Omega$.

Find the induced emf and the current in the circuit.

:::solution
The motional emf is

$$
\mathcal{E} = BLv
$$

So

$$
\mathcal{E} = (0.80)(0.40)(5.0) = 1.6\ \text{V}
$$

Then use Ohm's law:

$$
I = \frac{\mathcal{E}}{R} = \frac{1.6}{2.0} = 0.80\ \text{A}
$$
:::

<!--
id: electricity-and-magnetism-35
note: physics-electricity-and-magnetism
title: "Current Growth in an RL Circuit"
exam: final
skills: [RL circuits, Time constant]
-->

An RL circuit has resistance $4.0\ \Omega$, inductance $0.20\ \text{H}$, and final current $3.0\ \text{A}$.

What is the time constant, and what is the current after $0.05\ \text{s}$?

:::solution
The time constant is

$$
\tau = \frac{L}{R} = \frac{0.20}{4.0} = 0.050\ \text{s}
$$

For current growth,

$$
I(t) = I_{\infty}\left(1-e^{-tR/L}\right)
$$

At $t = 0.05\ \text{s}$,

$$
I = 3.0\left(1-e^{-1}\right)
$$

$$
I \approx 1.9\ \text{A}
$$
:::

<!--
id: electricity-and-magnetism-41
note: physics-electricity-and-magnetism
title: "Charging Capacitor and the Displacement Current"
exam: final
skills: [Maxwell's equations, Current circuits]
-->

A capacitor is charging in a circuit, and the conduction current in the wire is $0.40\ \text{A}$.

According to Maxwell's equations, what must the displacement current term between the capacitor plates be, and why?

:::solution
The Ampere-Maxwell law is

$$
\oint \mathbf{B}\cdot d\mathbf{\ell}
= \mu_0 I_{\text{enc}} + \mu_0\varepsilon_0 \frac{d\Phi_E}{dt}
$$

For the magnetic field prediction to be the same no matter which surface is chosen, the displacement current term must match the conduction current.

So the displacement current is

$$
0.40\ \text{A}
$$

in magnitude.
:::

<!--
id: electricity-and-magnetism-42
note: physics-electricity-and-magnetism
title: "Zero Potential, Nonzero Field"
exam: final
skills: [Electric potential, Electric field]
-->

Two charges, $+2.0\ \text{nC}$ and $-2.0\ \text{nC}$, are placed on a line, each $0.10\ \text{m}$ from the midpoint.

What are the electric potential and the electric field at the midpoint?

:::solution
The electric potential adds as a scalar:

$$
V = k\frac{2.0\times 10^{-9}}{0.10} + k\frac{-2.0\times 10^{-9}}{0.10} = 0
$$

So the potential at the midpoint is zero.

For the field, each charge contributes a field of magnitude

$$
E_1 = 9.0\times 10^9 \frac{2.0\times 10^{-9}}{(0.10)^2} = 1800\ \text{N/C}
$$

At the midpoint, both fields point from the positive charge toward the negative charge, so they add:

$$
E = 3600\ \text{N/C}
$$

The field points toward the negative charge.
:::

<!--
id: electricity-and-magnetism-43
note: physics-electricity-and-magnetism
title: "Electric and Magnetic Flux Through a Closed Surface"
exam: final
skills: [Gauss's law, Maxwell's equations]
-->

A closed surface encloses a net charge of $+3.0\ \text{nC}$ and also surrounds a bar magnet.

What are the net electric flux and the net magnetic flux through the surface?

:::solution
By Gauss's law for electricity,

$$
\Phi_E = \frac{Q_{\text{enc}}}{\varepsilon_0}
$$

So

$$
\Phi_E = \frac{3.0\times 10^{-9}}{8.854\times 10^{-12}}
\approx 3.4\times 10^2\ \text{N}\cdot\text{m}^2/\text{C}
$$

By Gauss's law for magnetism,

$$
\Phi_B = 0
$$

So the surface has nonzero electric flux, but zero net magnetic flux.
:::

<!--
id: electricity-and-magnetism-44
note: physics-electricity-and-magnetism
title: "Faraday Sign Convention"
exam: final
skills: [Faraday's law, Lenz's law]
-->

A circular loop lies in the page. The magnetic field through the loop points out of the page and is increasing.

Take counterclockwise circulation as the positive loop direction.

What is the sign of the induced emf, and what is the actual current direction?

:::solution
With counterclockwise chosen as positive, the associated area vector points out of the page.

The magnetic flux is therefore positive, and because the field is increasing, $d\Phi_B/dt > 0$.

Faraday's law gives

$$
\mathcal{E} = -\frac{d\Phi_B}{dt}
$$

So the induced emf is negative.

A negative emf means the actual current goes opposite the positive loop direction, so the current is clockwise.
:::
