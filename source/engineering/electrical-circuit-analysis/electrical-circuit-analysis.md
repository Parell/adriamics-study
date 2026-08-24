# Core quantities and circuit elements

Electrical circuit analysis studies how voltage, current, charge, and power behave in interconnected components.

## Fundamental quantities

- Current, $i(t)$: rate of charge flow, $i = \dfrac{dq}{dt}$
- Voltage, $v(t)$: electric potential difference
- Charge, $q(t)$
- Power, $p(t)$: instantaneous energy transfer, $p = vi$
- Energy, $w(t)$: accumulated power, $w = \int p\,dt$

## Ideal circuit elements

| Element | Constitutive relation | Notes |
| --- | --- | --- |
| Resistor | $v = Ri$ | Dissipates energy as heat |
| Capacitor | $i = C\dfrac{dv}{dt}$ | Stores energy in an electric field |
| Inductor | $v = L\dfrac{di}{dt}$ | Stores energy in a magnetic field |
| Independent source | Prescribed $v$ or $i$ | Supplies or absorbs power |
| Dependent source | Controlled by another circuit variable | Models active behavior |

## Energy storage

Stored energy in a capacitor:

$$
w_C = \frac{1}{2}Cv^2
$$

Stored energy in an inductor:

$$
w_L = \frac{1}{2}Li^2
$$

Resistors do not store energy. They dissipate it:

$$
p_R = i^2R = \frac{v^2}{R}
$$

---

# Reference directions and sign conventions

Circuit equations are only consistent when voltage and current references are chosen deliberately.

## Passive sign convention

If current enters the positive-labeled terminal of an element, then

$$
p = vi
$$

is positive when the element absorbs power.

If current enters the negative terminal, then the computed power is negative and the element delivers power.

## Practical rule

- Assign a current direction before solving.
- Assign voltage polarity independently or use the passive convention.
- A negative result means the true direction or polarity is opposite to the assumption.

## Common mistake

Do not mix reference directions in the same equation set. Pick one sign convention and keep it everywhere.

---

# Ohm's law and Kirchhoff's laws

## Ohm's law

For a resistor:

$$
v = Ri
$$

This relation is linear and valid only for ideal resistors or elements behaving approximately resistively.

## Kirchhoff's Current Law

At any node, the algebraic sum of currents is zero:

$$
\sum i_k = 0
$$

Interpretation: current entering a node equals current leaving it.

## Kirchhoff's Voltage Law

Around any closed loop, the algebraic sum of voltages is zero:

$$
\sum v_k = 0
$$

Interpretation: total voltage rise equals total voltage drop.

## Where they come from

- KCL reflects conservation of charge.
- KVL reflects conservation of energy in lumped-element circuits.

## Applicability limits

KCL and KVL work cleanly in lumped circuits where physical dimensions are small compared with signal wavelengths and distributed effects can be neglected.

---

# Series, parallel, and equivalent reduction

## Resistors in series

Same current flows through each resistor:

$$
R_{eq} = R_1 + R_2 + \cdots + R_n
$$

## Resistors in parallel

Same voltage appears across each branch:

$$
\frac{1}{R_{eq}} = \sum_{k=1}^n \frac{1}{R_k}
$$

For two resistors:

$$
R_{eq} = \frac{R_1R_2}{R_1 + R_2}
$$

## Voltage divider

For series resistors with input voltage $V_{in}$:

$$
V_{out} = V_{in}\frac{R_2}{R_1 + R_2}
$$

if $V_{out}$ is taken across $R_2$.

## Current divider

For two parallel resistors:

$$
I_1 = I_{in}\frac{R_2}{R_1 + R_2}, \qquad
I_2 = I_{in}\frac{R_1}{R_1 + R_2}
$$

The branch with smaller resistance carries more current.

## Reduction workflow

1. Look for obvious series or parallel groups.
2. Reduce from the innermost structure outward.
3. Restore the circuit if a requested variable is inside a reduced block.

---

# Node-voltage analysis

Node-voltage analysis is usually the most efficient method for circuits with many current sources or many branches tied to a few nodes.

## Method

1. Choose a reference node, usually ground.
2. Label unknown node voltages relative to reference.
3. Write KCL at each nonreference node.
4. Substitute element relations into the current expressions.
5. Solve the resulting linear system.

## Resistor current form

Current from node $a$ to node $b$ through resistor $R$:

$$
i_{ab} = \frac{V_a - V_b}{R}
$$

## Supernode

If a voltage source lies between two nonreference nodes, treat the connected nodes as a **supernode**.

Use:

- One KCL equation for the supernode
- One constraint equation from the voltage source

Example constraint:

$$
V_a - V_b = V_s
$$

## Advantages

- Scales well for large circuits
- Handles current sources naturally
- Produces node voltages directly

## Common pitfall

Do not write KCL separately for nodes connected by an ideal voltage source unless you also include the source constraint.

---

# Mesh-current analysis

Mesh-current analysis is efficient for planar circuits with many voltage sources.

## Method

1. Identify the meshes of the planar circuit.
2. Assign mesh currents, usually clockwise.
3. Write KVL around each mesh.
4. Express shared-element voltages in terms of current differences.
5. Solve the linear system.

## Shared resistor

If two meshes share resistor $R$, the voltage drop across that resistor is

$$
R(i_1 - i_2)
$$

when traversed in the direction of mesh current $i_1$.

## Supermesh

If a current source lies between two meshes, form a **supermesh**:

- Write one KVL equation around the outer perimeter
- Add the current-source constraint equation

## Advantages

- Fewer equations than node analysis in some circuits
- Very natural for voltage-source-dominated networks

## Common pitfall

Mesh analysis only applies directly to planar circuits unless the circuit is re-drawn into a planar equivalent.

---

# Source transformations and superposition

## Source transformation

A voltage source $V_s$ in series with resistance $R$ can be transformed into an equivalent current source:

$$
I_s = \frac{V_s}{R}
$$

in parallel with the same resistance $R$.

Likewise, a current source $I_s$ in parallel with $R$ can be transformed into a voltage source:

$$
V_s = I_sR
$$

in series with $R$.

## Superposition principle

In a linear circuit, the total response is the sum of the responses from each independent source acting alone.

To deactivate sources:

- Replace independent voltage sources with short circuits
- Replace independent current sources with open circuits

Dependent sources remain active.

## When to use it

Superposition is useful when a circuit has multiple independent sources and a desired response is linear in the source excitations.

## Limitation

You cannot superpose power directly, because power is not linear in voltage or current.

---

# Thevenin and Norton equivalents

Any linear two-terminal network can be replaced by an equivalent source-resistance pair.

## Thevenin equivalent

Replace the network with:

- A voltage source $V_{th}$
- In series with resistance $R_{th}$

where $V_{th}$ is the open-circuit terminal voltage.

## Norton equivalent

Replace the network with:

- A current source $I_N$
- In parallel with resistance $R_N$

where $I_N$ is the short-circuit terminal current.

## Conversion

$$
R_{th} = R_N
$$

$$
V_{th} = I_NR_{th}
$$

$$
I_N = \frac{V_{th}}{R_{th}}
$$

## Finding $R_{th}$

For circuits with only independent sources:

1. Deactivate all independent sources.
2. Compute the resistance seen from the terminals.

If dependent sources are present, keep them active and use a test source if needed.

## Test-source method

Apply a test voltage or current at the terminals and compute:

$$
R_{th} = \frac{V_{test}}{I_{test}}
$$

## Why these equivalents matter

They simplify repeated load calculations and make maximum power transfer analysis straightforward.

---

# Power, energy, and maximum power transfer

## Instantaneous power

$$
p(t) = v(t)i(t)
$$

If $p > 0$, the element absorbs power. If $p < 0$, it delivers power.

## DC resistor power

$$
p = i^2R = \frac{v^2}{R}
$$

## Average power

For periodic signals:

$$
P_{avg} = \frac{1}{T}\int_0^T p(t)\,dt
$$

## Maximum power transfer for resistive circuits

If a Thevenin equivalent $V_{th}$ in series with $R_{th}$ drives a load $R_L$, the load receives maximum power when

$$
R_L = R_{th}
$$

The maximum load power is

$$
P_{max} = \frac{V_{th}^2}{4R_{th}}
$$

## Efficiency note

Maximum power transfer does not mean maximum efficiency. At $R_L = R_{th}$, half the power is dissipated internally in the source resistance.

---

# First-order transients: RC and RL

First-order circuits contain one energy storage element and produce exponential responses.

## Capacitor laws

Capacitor voltage cannot change instantaneously:

$$
v_C(0^+) = v_C(0^-)
$$

Current through a capacitor is

$$
i_C = C\frac{dv_C}{dt}
$$

## Inductor laws

Inductor current cannot change instantaneously:

$$
i_L(0^+) = i_L(0^-)
$$

Voltage across an inductor is

$$
v_L = L\frac{di_L}{dt}
$$

## RC step response

For a simple RC circuit with time constant

$$
\tau = RC
$$

the capacitor voltage typically has the form

$$
v_C(t) = v_C(\infty) + \bigl(v_C(0^+) - v_C(\infty)\bigr)e^{-t/\tau}
$$

## RL step response

For a simple RL circuit with time constant

$$
\tau = \frac{L}{R}
$$

the inductor current typically has the form

$$
i_L(t) = i_L(\infty) + \bigl(i_L(0^+) - i_L(\infty)\bigr)e^{-t/\tau}
$$

## Interpretation of the time constant

At $t = \tau$, the response has moved about $63.2\%$ of the way from its initial value toward its final value.

## Initial and final conditions

- At $t = 0^+$, use continuity of capacitor voltage and inductor current.
- At $t \to \infty$, replace the capacitor with an open circuit and the inductor with a short circuit for DC steady state.

---

# Sinusoidal steady state and phasors

Sinusoidal steady-state analysis converts differential equations into algebraic equations at a fixed angular frequency $\omega$.

## Sinusoidal signals

$$
v(t) = V_m\cos(\omega t + \phi)
$$

where:

- $V_m$ is the peak amplitude
- $\omega$ is angular frequency in rad/s
- $\phi$ is phase

## RMS value

For a sinusoid:

$$
V_{rms} = \frac{V_m}{\sqrt{2}}
$$

Similarly,

$$
I_{rms} = \frac{I_m}{\sqrt{2}}
$$

## Phasor representation

A sinusoid can be represented by a complex phasor:

$$
v(t) = \Re\{ \tilde{V}e^{j\omega t}\}
$$

where $\tilde{V}$ contains magnitude and phase.

## Converting elements to impedance

In phasor form:

$$
Z_R = R
$$

$$
Z_C = \frac{1}{j\omega C}
$$

$$
Z_L = j\omega L
$$

This makes Ohm's law look like

$$
\tilde{V} = \tilde{I}Z
$$

---

# Impedance, admittance, and AC power

## Admittance

Admittance is the reciprocal of impedance:

$$
Y = \frac{1}{Z}
$$

Its unit is siemens, S.

For a resistor,

$$
Y_R = \frac{1}{R}
$$

## Series and parallel in AC

- Impedances in series add directly.
- Admittances in parallel add directly.

## Complex power

Using RMS phasors:

$$
\tilde{S} = \tilde{V}\tilde{I}^*
$$

where $^*$ denotes complex conjugate.

Complex power decomposes as

$$
\tilde{S} = P + jQ
$$

where:

- $P$ is real power, in watts
- $Q$ is reactive power, in var

Apparent power magnitude:

$$
|\tilde{S}| = VI
$$

## Power factor

Power factor is

$$
\text{pf} = \cos\theta = \frac{P}{|\tilde{S}|}
$$

where $\theta$ is the phase angle between voltage and current.

## Interpreting reactive elements

- Inductive loads draw lagging current.
- Capacitive loads draw leading current.

## AC analysis workflow

1. Convert the source to phasor form.
2. Replace elements with impedances.
3. Solve the resulting complex circuit with KCL, KVL, or network reduction.
4. Convert the answer back to the time domain if needed.

---

# Resonance and frequency response

## Series resonance

In a series RLC circuit, resonance occurs when

$$
\omega L = \frac{1}{\omega C}
$$

so the reactive parts cancel.

The resonant frequency is

$$
\omega_0 = \frac{1}{\sqrt{LC}}
$$

or

$$
f_0 = \frac{1}{2\pi\sqrt{LC}}
$$

## Parallel resonance

In a parallel RLC circuit, the total admittance is minimized at resonance, and the input impedance is maximized.

## Quality factor

The quality factor $Q$ measures how sharp or selective a resonance is.

For many simple resonant circuits, a larger $Q$ implies a narrower bandwidth.

## Filters

Common first-order behaviors:

- Low-pass: passes low frequencies, attenuates high frequencies
- High-pass: passes high frequencies, attenuates low frequencies

Common second-order behaviors:

- Band-pass: passes a range around a center frequency
- Band-stop / notch: attenuates a narrow frequency range

## Bode plot basics

Use Bode plots to reason about gain and phase versus frequency.

Typical asymptotic slopes:

- One pole: $-20$ dB/decade
- One zero: $+20$ dB/decade

---

# Operational amplifier basics

Ideal op-amp analysis is a standard tool in circuit theory.

## Ideal assumptions

- Infinite open-loop gain
- Infinite input resistance
- Zero output resistance
- Infinite bandwidth

## Golden rules with negative feedback

1. Input currents are approximately zero:

$$
i_+ \approx i_- \approx 0
$$

2. Input voltages are approximately equal:

$$
v_+ \approx v_-
$$

## Common configurations

### Inverting amplifier

$$
V_{out} = -\frac{R_f}{R_{in}}V_{in}
$$

### Noninverting amplifier

$$
V_{out} = \left(1 + \frac{R_f}{R_g}\right)V_{in}
$$

### Summing amplifier

Multiple inputs contribute linearly through weighted resistors.

### Voltage follower

Output is tied to the inverting input, so

$$
V_{out} \approx V_{in}
$$

## Caution

Ideal op-amp rules fail if the output saturates or if feedback is not negative.

---

# Problem-solving workflow

## Recommended workflow

1. Read the problem statement carefully and identify the unknowns.
2. Mark the reference directions for all currents and voltages.
3. Decide whether the circuit is best solved by:
   - reduction
   - node-voltage analysis
   - mesh-current analysis
   - Thevenin/Norton reduction
   - phasors
   - transient methods
4. Simplify the circuit only when the simplification preserves the quantity of interest.
5. Write the governing equations before plugging in numbers.
6. Solve symbolically when possible, then substitute values.
7. Check units, sign, and limiting cases.

## Sanity checks

- Does the answer have the right units?
- Do currents and voltages have reasonable magnitude?
- Does the result reduce correctly when a component becomes very large or very small?
- Is power conserved?

## Common pitfalls

- Mixing peak and RMS values
- Using the wrong reference polarity
- Deactivating dependent sources during Thevenin analysis
- Forgetting capacitor voltage and inductor current continuity
- Applying DC resistor rules directly in AC phasor circuits
- Computing power from peak values without converting consistently

---

# Formula sheet

## DC relations

$$
v = Ri
$$

$$
\sum i = 0
$$

$$
\sum v = 0
$$

## Source and network equivalents

$$
I_N = \frac{V_{th}}{R_{th}}
$$

$$
V_{th} = I_NR_{th}
$$

## Energy storage

$$
w_C = \frac{1}{2}Cv^2
$$

$$
w_L = \frac{1}{2}Li^2
$$

## Time constants

$$
\tau_{RC} = RC
$$

$$
\tau_{RL} = \frac{L}{R}
$$

## Phasor impedances

$$
Z_R = R
$$

$$
Z_C = \frac{1}{j\omega C}
$$

$$
Z_L = j\omega L
$$

## Power

$$
p = vi
$$

$$
\tilde{S} = \tilde{V}\tilde{I}^*
$$

$$
P_{max} = \frac{V_{th}^2}{4R_{th}}
$$

## Resonance

$$
\omega_0 = \frac{1}{\sqrt{LC}}
$$

$$
f_0 = \frac{1}{2\pi\sqrt{LC}}
$$

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

> **Suggested route:** Sections 1–4 build the DC vocabulary and reduction
> skills. Continue to Sections 5–9 for systematic DC analysis and power. Read
> Section 10 only after reviewing first-order ODEs; read Sections 11–13 after
> you are comfortable with complex numbers and sinusoidal functions. Section
> 14 uses the same circuit laws with ideal op-amp assumptions.

The early sections are useful on their own. The later sections form branches:
transients (Section 10) models time-domain storage, while phasors and
frequency response (Sections 11–13) model sinusoidal steady state. Do not use a
steady-state phasor result to answer a startup transient question.
