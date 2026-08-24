<!--
id: electrical-circuit-analysis-11
note: engineering-electrical-circuit-analysis
title: "Differentiate a Charge Function"
exam: exam-i
skills: [Current, Derivatives]
-->

If

$$
q(t) = 4t^2 + 3t
$$

in coulombs, what is the current at $t = 2$ s?

:::solution
Current is the derivative of charge:

$$
i(t) = \frac{dq}{dt} = 8t + 3
$$

Evaluate at $t = 2$:

$$
i(2) = 8(2) + 3 = 19
$$

So the current is $19$ A.
:::

<!--
id: electrical-circuit-analysis-12
note: engineering-electrical-circuit-analysis
title: "Compute Power with Passive Sign Convention"
exam: exam-i
skills: [Passive Sign Convention, Power]
-->

A device has $v = 9$ V across it, and the current of $2$ A enters the positive-labeled terminal.

What is the power absorbed by the device?

:::solution
Under the passive sign convention,

$$
p = vi
$$

so

$$
p = 9 \cdot 2 = 18
$$

The device absorbs $18$ W.
:::

<!--
id: electrical-circuit-analysis-13
note: engineering-electrical-circuit-analysis
title: "Find Current from Ohm's Law"
exam: exam-i
skills: [Ohm's Law, Resistors]
-->

A $6~\Omega$ resistor has $24$ V across it.

What current flows through the resistor?

:::solution
Use Ohm's law:

$$
v = Ri
$$

Solve for current:

$$
i = \frac{v}{R} = \frac{24}{6} = 4
$$

So the current is $4$ A.
:::

<!--
id: electrical-circuit-analysis-14
note: engineering-electrical-circuit-analysis
title: "Add Series Resistors"
exam: exam-i
skills: [Series Resistance]
-->

Find the equivalent resistance of three series resistors:

$$
3~\Omega,\quad 5~\Omega,\quad 7~\Omega
$$

:::solution
For series resistors, add the values:

$$
R_{eq} = 3 + 5 + 7 = 15
$$

So the equivalent resistance is $15~\Omega$.
:::

<!--
id: electrical-circuit-analysis-15
note: engineering-electrical-circuit-analysis
title: "Combine Two Parallel Resistors"
exam: exam-i
skills: [Parallel Resistance]
-->

Find the equivalent resistance of $4~\Omega$ and $12~\Omega$ in parallel.

:::solution
For two parallel resistors,

$$
R_{eq} = \frac{R_1R_2}{R_1 + R_2}
$$

So

$$
R_{eq} = \frac{4 \cdot 12}{4 + 12} = \frac{48}{16} = 3
$$

The equivalent resistance is $3~\Omega$.
:::

<!--
id: electrical-circuit-analysis-16
note: engineering-electrical-circuit-analysis
title: "Use a Voltage Divider"
exam: exam-i
skills: [Voltage Divider, Series Resistance]
-->

A $12$ V source drives two series resistors, $2~k\Omega$ and $4~k\Omega$.

If the output is taken across the $4~k\Omega$ resistor, what is $V_{out}$?

:::solution
Use the voltage divider formula:

$$
V_{out} = V_{in}\frac{R_2}{R_1 + R_2}
$$

Substitute the values:

$$
V_{out} = 12\frac{4}{2 + 4} = 12\cdot\frac{2}{3} = 8
$$

So $V_{out} = 8$ V.
:::

<!--
id: electrical-circuit-analysis-17
note: engineering-electrical-circuit-analysis
title: "Use a Current Divider"
exam: exam-i
skills: [Current Divider, Parallel Resistance]
-->

A total current of $6$ A enters two parallel resistors, $3~\Omega$ and $6~\Omega$.

What current flows through the $3~\Omega$ branch?

:::solution
For two parallel resistors, the current in one branch is

$$
I_1 = I_{in}\frac{R_2}{R_1 + R_2}
$$

Here,

$$
I_{3\Omega} = 6\frac{6}{3 + 6} = 6\cdot\frac{2}{3} = 4
$$

So the $3~\Omega$ branch carries $4$ A.
:::

<!--
id: electrical-circuit-analysis-18
note: engineering-electrical-circuit-analysis
title: "Energy in a Capacitor"
exam: exam-i
skills: [Energy Storage, Capacitors]
-->

A capacitor has $C = 2~\mu\text{F}$ and voltage $v = 10$ V.

How much energy is stored in the capacitor?

:::solution
Use the capacitor energy formula:

$$
w_C = \frac{1}{2}Cv^2
$$

Substitute the values:

$$
w_C = \frac{1}{2}(2\times 10^{-6})(10^2)
$$

$$
w_C = 10^{-4}\ \text{J}
$$

So the stored energy is $1.0\times 10^{-4}$ J.
:::

<!--
id: electrical-circuit-analysis-19
note: engineering-electrical-circuit-analysis
title: "Write an Element Impedance"
exam: exam-i
skills: [Phasors, Impedance]
-->

At angular frequency $\omega = 1000$ rad/s, what is the impedance of a $2~\mu\text{F}$ capacitor?

:::solution
For a capacitor,

$$
Z_C = \frac{1}{j\omega C}
$$

Substitute the values:

$$
Z_C = \frac{1}{j(1000)(2\times 10^{-6})}
$$

$$
Z_C = \frac{1}{j0.002} = -j500
$$

So the impedance is $-j500~\Omega$.
:::

<!--
id: electrical-circuit-analysis-110
note: engineering-electrical-circuit-analysis
title: "Balance Currents at a Node"
exam: exam-i
skills: [KCL]
-->

At a node, $2$ A and $5$ A enter, and $3$ A leaves through one branch.

How much current must leave through the other branch?

:::solution
By KCL, the total current entering equals the total current leaving:

$$
2 + 5 = 3 + I
$$

So

$$
7 = 3 + I
$$

$$
I = 4
$$

The other branch must carry $4$ A leaving the node.
:::

<!--
id: electrical-circuit-analysis-21
note: engineering-electrical-circuit-analysis
title: "Write a Branch Current from Node Voltages"
exam: exam-ii
skills: [Node Voltage, Ohm's Law]
-->

Node $a$ is at $12$ V and node $b$ is at $5$ V.

If a $7~\Omega$ resistor connects $a$ to $b$, what is the current from $a$ to $b$?

:::solution
Use the resistor current form:

$$
i_{ab} = \frac{V_a - V_b}{R}
$$

So

$$
i_{ab} = \frac{12 - 5}{7} = 1
$$

The current from $a$ to $b$ is $1$ A.
:::

<!--
id: electrical-circuit-analysis-22
note: engineering-electrical-circuit-analysis
title: "Solve a Simple Supernode"
exam: exam-ii
skills: [Supernodes, KCL, Ohm's Law]
-->

A supernode contains two unknown node voltages $V_a$ and $V_b$.

Node $a$ connects to ground through $6~\Omega$, node $b$ connects to ground through $3~\Omega$, and a $9$ V source connects $b$ to $a$ with the positive terminal at $a$.

If a total of $3$ A enters the supernode from an external source, what is $V_a$?

:::solution
Use KCL on the supernode:

$$
\frac{V_a}{6} + \frac{V_b}{3} = 3
$$

The voltage source gives the constraint:

$$
V_a - V_b = 9
$$

Substitute $V_a = V_b + 9$ into KCL:

$$
\frac{V_b + 9}{6} + \frac{V_b}{3} = 3
$$

Multiply by $6$:

$$
V_b + 9 + 2V_b = 18
$$

$$
3V_b = 9
$$

$$
V_b = 3
$$

Then

$$
V_a = 3 + 9 = 12
$$

So $V_a = 12$ V.
:::

<!--
id: electrical-circuit-analysis-23
note: engineering-electrical-circuit-analysis
title: "Solve Two Mesh Currents"
exam: exam-ii
skills: [Mesh Analysis, KVL, Shared Resistor]
-->

Two clockwise mesh currents $i_1$ and $i_2$ share a $1~\Omega$ resistor.

The left mesh has a $1~\Omega$ resistor and a $12$ V source. The right mesh has a $1~\Omega$ resistor and no source.

What are $i_1$ and $i_2$?

:::solution
Write KVL for each mesh.

Left mesh:

$$
1i_1 + 1(i_1 - i_2) = 12
$$

which simplifies to

$$
2i_1 - i_2 = 12
$$

Right mesh:

$$
1i_2 + 1(i_2 - i_1) = 0
$$

which simplifies to

$$
-i_1 + 2i_2 = 0
$$

From the second equation,

$$
i_1 = 2i_2
$$

Substitute into the first:

$$
2(2i_2) - i_2 = 12
$$

$$
3i_2 = 12
$$

$$
i_2 = 4
$$

Then

$$
i_1 = 8
$$

So $i_1 = 8$ A and $i_2 = 4$ A.
:::

<!--
id: electrical-circuit-analysis-24
note: engineering-electrical-circuit-analysis
title: "Use a Supermesh"
exam: exam-ii
skills: [Supermesh, Mesh Analysis, KVL]
-->

Two clockwise mesh currents $i_1$ and $i_2$ share a branch with a $1$ A current source.

The current source forces

$$
i_2 - i_1 = 1
$$

The outer loop contains two $3~\Omega$ resistors and a $15$ V source.

What are $i_1$ and $i_2$?

:::solution
Write KVL around the outer perimeter of the supermesh:

$$
3i_1 + 3i_2 = 15
$$

The current-source constraint is

$$
i_2 - i_1 = 1
$$

From the constraint,

$$
i_2 = i_1 + 1
$$

Substitute into the KVL equation:

$$
3i_1 + 3(i_1 + 1) = 15
$$

$$
6i_1 + 3 = 15
$$

$$
6i_1 = 12
$$

$$
i_1 = 2
$$

Then

$$
i_2 = 3
$$

So $i_1 = 2$ A and $i_2 = 3$ A.
:::

<!--
id: electrical-circuit-analysis-25
note: engineering-electrical-circuit-analysis
title: "Apply Superposition to a Node"
exam: exam-ii
skills: [Superposition, Node Voltage, Voltage Divider]
-->

A node is connected to ground through a $6~\Omega$ resistor.

The same node is also connected through another $6~\Omega$ resistor to a $12$ V source, and a $3$ A current source injects current into the node from ground.

What is the node voltage?

:::solution
Use superposition.

First, keep the $12$ V source and open the current source. The node is then a divider between $12$ V and ground through two equal $6~\Omega$ resistors, so the node voltage is:

$$
V_1 = 12\frac{6}{6+6} = 6
$$

Next, keep the $3$ A source and short the $12$ V source. Then the node sees two $6~\Omega$ resistors in parallel:

$$
R_{eq} = \frac{6\cdot 6}{6+6} = 3
$$

So the voltage contribution is

$$
V_2 = IR = 3 \cdot 3 = 9
$$

Add the contributions:

$$
V = V_1 + V_2 = 6 + 9 = 15
$$

So the node voltage is $15$ V.
:::

<!--
id: electrical-circuit-analysis-26
note: engineering-electrical-circuit-analysis
title: "Find a Thevenin Equivalent"
exam: exam-ii
skills: [Thevenin Equivalent, Resistance Reduction, Voltage Divider]
-->

A $12$ V source feeds a $2~\Omega$ resistor in series with a node.

From that node to ground is a $4~\Omega$ resistor.

Find the Thevenin equivalent voltage and resistance seen at the node with respect to ground.

:::solution
The open-circuit voltage is the divider voltage across the $4~\Omega$ resistor:

$$
V_{th} = 12\frac{4}{2+4} = 8
$$

To find $R_{th}$, deactivate the independent source. The $12$ V source becomes a short circuit, so the $2~\Omega$ and $4~\Omega$ resistors are both from the node to ground:

$$
R_{th} = \frac{2\cdot 4}{2+4} = \frac{8}{6} = \frac{4}{3}
$$

So the Thevenin equivalent is $V_{th} = 8$ V in series with $R_{th} = \frac{4}{3}~\Omega$.
:::

<!--
id: electrical-circuit-analysis-27
note: engineering-electrical-circuit-analysis
title: "Find an RC Step Response"
exam: exam-ii
skills: [RC Circuits, Time Constant, Capacitors]
-->

A $12$ V source charges a $100~\mu\text{F}$ capacitor through a $3~k\Omega$ resistor.

The capacitor starts at $0$ V.

What is $v_C(t)$ at $t = RC$?

:::solution
First find the time constant:

$$
\tau = RC = (3000)(100\times 10^{-6}) = 0.3\ \text{s}
$$

For a charging capacitor,

$$
v_C(t) = v_C(\infty) + \bigl(v_C(0^+) - v_C(\infty)\bigr)e^{-t/\tau}
$$

Here,

$$
v_C(0^+) = 0,\qquad v_C(\infty) = 12
$$

So

$$
v_C(t) = 12\bigl(1 - e^{-t/0.3}\bigr)
$$

At $t = \tau$,

$$
v_C(\tau) = 12(1 - e^{-1})
$$

which is about $7.6$ V.
:::

<!--
id: electrical-circuit-analysis-28
note: engineering-electrical-circuit-analysis
title: "Find a Series AC Current"
exam: exam-ii
skills: [Phasors, Impedance, Ohm's Law]
-->

A source of $10\angle 0^\circ$ V at $\omega = 1000$ rad/s drives a series $100~\Omega$ resistor and $0.1$ H inductor.

What is the current phasor?

:::solution
Find each impedance:

$$
Z_R = 100
$$

$$
Z_L = j\omega L = j(1000)(0.1) = j100
$$

So the total impedance is

$$
Z = 100 + j100
$$

Apply phasor Ohm's law:

$$
\tilde{I} = \frac{\tilde{V}}{Z} = \frac{10}{100+j100}
$$

Multiply by the complex conjugate:

$$
\tilde{I} = \frac{10(100-j100)}{100^2+100^2}
$$

$$
\tilde{I} = 0.05 - j0.05
$$

In polar form, this is

$$
\tilde{I} \approx 0.0707\angle -45^\circ\ \text{A}
$$

:::

<!--
id: electrical-circuit-analysis-31
note: engineering-electrical-circuit-analysis
title: "Transform a Source to Simplify a Load"
exam: final
skills: [Source Transformation, Current Divider, Norton Equivalent]
-->

A $12$ V source in series with a $6~\Omega$ resistor drives a $6~\Omega$ load.

Use source transformation to find the current through the load.

:::solution
Convert the voltage source and series resistor to a Norton equivalent:

$$
I_N = \frac{V_s}{R} = \frac{12}{6} = 2
$$

So the source becomes a $2$ A current source in parallel with $6~\Omega$.

The load is also $6~\Omega$, so the two parallel resistors split the current equally:

$$
I_L = 2\frac{6}{6+6} = 1
$$

So the load current is $1$ A.
:::

<!--
id: electrical-circuit-analysis-32
note: engineering-electrical-circuit-analysis
title: "Compute Load Power from a Thevenin Model"
exam: final
skills: [Thevenin Equivalent, Power]
-->

A sensor port is modeled by a Thevenin equivalent of $18$ V in series with $3~\Omega$.

If it drives a $6~\Omega$ load, what power does the load absorb?

:::solution
The total series resistance is

$$
R_{tot} = 3 + 6 = 9
$$

So the load current is

$$
I = \frac{18}{9} = 2
$$

The load power is

$$
P_L = I^2R_L = 2^2 \cdot 6 = 24
$$

So the load absorbs $24$ W.
:::

<!--
id: electrical-circuit-analysis-33
note: engineering-electrical-circuit-analysis
title: "Estimate an RL Current After a Switch Closes"
exam: final
skills: [RL Circuits, Time Constant, Inductors]
-->

A $10$ V source, $5~\Omega$ resistor, and $0.5$ H inductor are connected in series when a switch closes at $t=0$.

The inductor current is initially zero.

What is $i_L(0.2\ \text{s})$?

:::solution
First find the time constant:

$$
\tau = \frac{L}{R} = \frac{0.5}{5} = 0.1\ \text{s}
$$

The final current is

$$
i_L(\infty) = \frac{10}{5} = 2
$$

So the current is

$$
i_L(t) = 2\bigl(1 - e^{-t/0.1}\bigr)
$$

At $t = 0.2$ s,

$$
i_L(0.2) = 2(1 - e^{-2})
$$

which is about $1.73$ A.
:::

<!--
id: electrical-circuit-analysis-34
note: engineering-electrical-circuit-analysis
title: "Find Real Power and Power Factor"
exam: final
skills: [AC Power, Power Factor, Phasors]
-->

A $120$ V rms source supplies a load current of $4$ A rms that lags the voltage by $30^\circ$.

What are the real power and the power factor?

:::solution
The power factor is

$$
\text{pf} = \cos 30^\circ = 0.866
$$

Real power is

$$
P = VI\cos\theta = 120 \cdot 4 \cdot 0.866
$$

$$
P \approx 416\ \text{W}
$$

So the load has real power about $416$ W and power factor $0.866$ lagging.
:::

<!--
id: electrical-circuit-analysis-35
note: engineering-electrical-circuit-analysis
title: "Evaluate an Inverting Amplifier"
exam: final
skills: [Operational Amplifiers, Inverting Amplifier, Negative Feedback]
-->

An ideal inverting op-amp has $R_{in} = 2~k\Omega$ and $R_f = 8~k\Omega$.

If $V_{in} = 0.5$ V, what is the output voltage?

:::solution
For an ideal inverting amplifier,

$$
V_{out} = -\frac{R_f}{R_{in}}V_{in}
$$

Substitute the values:

$$
V_{out} = -\frac{8}{2}(0.5)
$$

$$
V_{out} = -2
$$

So the output is $-2$ V.
:::

<!--
id: electrical-circuit-analysis-41
note: engineering-electrical-circuit-analysis
title: "Maximize Power to a Load"
exam: final
skills: [Thevenin Equivalent, Maximum Power Transfer, Power]
-->

A linear network seen from two terminals has a Thevenin equivalent of $20$ V in series with $5~\Omega$.

What load resistance maximizes the power transfer, and what is the maximum load power?

:::solution
Maximum power transfer occurs when

$$
R_L = R_{th}
$$

So the best load is

$$
R_L = 5~\Omega
$$

The maximum power is

$$
P_{max} = \frac{V_{th}^2}{4R_{th}} = \frac{20^2}{4\cdot 5}
$$

$$
P_{max} = 20\ \text{W}
$$

So $R_L = 5~\Omega$ and the maximum load power is $20$ W.
:::

<!--
id: electrical-circuit-analysis-42
note: engineering-electrical-circuit-analysis
title: "Use Continuity in an RC Transient"
exam: final
skills: [RC Circuits, Time Constant, Energy Storage]
-->

A capacitor of $200~\mu\text{F}$ is initially at $6$ V.

At $t = 0$, it is connected through a $1~k\Omega$ resistor to an $18$ V source.

Find $v_C(t)$ and the time when the capacitor reaches $12$ V.

:::solution
The capacitor voltage cannot change instantly, so

$$
v_C(0^+) = 6
$$

The final value is

$$
v_C(\infty) = 18
$$

The time constant is

$$
\tau = RC = (1000)(200\times 10^{-6}) = 0.2\ \text{s}
$$

So

$$
v_C(t) = 18 + (6 - 18)e^{-t/0.2}
$$

or

$$
v_C(t) = 18 - 12e^{-t/0.2}
$$

To find when $v_C(t) = 12$ V:

$$
12 = 18 - 12e^{-t/0.2}
$$

$$
12e^{-t/0.2} = 6
$$

$$
e^{-t/0.2} = \frac{1}{2}
$$

$$
t = 0.2\ln 2
$$

So the capacitor reaches $12$ V after $0.2\ln 2 \approx 0.139$ s.
:::

<!--
id: electrical-circuit-analysis-43
note: engineering-electrical-circuit-analysis
title: "Find the Resonant Frequency of a Series RLC Circuit"
exam: final
skills: [Resonance, Series RLC, Frequency Response]
-->

A series RLC circuit has $L = 50$ mH and $C = 200~\mu\text{F}$.

At what resonant frequency does the reactive part cancel?

:::solution
For series resonance,

$$
\omega_0 = \frac{1}{\sqrt{LC}}
$$

Substitute the values:

$$
\omega_0 = \frac{1}{\sqrt{(0.05)(200\times 10^{-6})}}
$$

$$
\omega_0 = \frac{1}{\sqrt{10^{-5}}} \approx 316.2\ \text{rad/s}
$$

Convert to hertz:

$$
f_0 = \frac{\omega_0}{2\pi} \approx \frac{316.2}{2\pi} \approx 50.3\ \text{Hz}
$$

So the resonant frequency is about $50.3$ Hz.
:::

<!--
id: electrical-circuit-analysis-44
note: engineering-electrical-circuit-analysis
title: "Evaluate an Inverting Summing Amplifier"
exam: final
skills: [Operational Amplifiers, Summing Amplifier, Negative Feedback]
-->

An ideal inverting summing amplifier has feedback resistor $R_f = 12~k\Omega$.

Two inputs are applied through $R_1 = 3~k\Omega$ with $V_1 = 1$ V and $R_2 = 6~k\Omega$ with $V_2 = 2$ V.

What is the output voltage?

:::solution
For an ideal inverting summing amplifier,

$$
V_{out} = -R_f\left(\frac{V_1}{R_1} + \frac{V_2}{R_2}\right)
$$

Substitute the values:

$$
V_{out} = -12\left(\frac{1}{3} + \frac{2}{6}\right)
$$

$$
V_{out} = -12\left(\frac{1}{3} + \frac{1}{3}\right)
$$

$$
V_{out} = -12\left(\frac{2}{3}\right) = -8
$$

So the output voltage is $-8$ V.
:::
