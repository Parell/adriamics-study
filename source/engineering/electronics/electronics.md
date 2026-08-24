# Electronics

## Circuit quantities and signal paths

Electronics uses components to control voltage, current, energy, and information. The basic relations are

$$
v=Ri,\qquad p=vi,
$$

where $v$ is voltage, $i$ is current, and $p$ is instantaneous power. Kirchhoff's current law says currents entering a node sum to zero; Kirchhoff's voltage law says voltage changes around a closed loop sum to zero.

Separate a circuit's operating point from its signal behavior. DC bias establishes the operating point. A small AC signal then produces an incremental response around that point. Always identify the reference node, source resistance, load, expected current, and worst-case power before choosing a component.

## Diodes and transistors

A diode conducts strongly in forward bias and ideally blocks reverse bias. A silicon diode's forward voltage is often roughly 0.6--0.8 V at ordinary current, but the value depends on current, temperature, and device type. A more physical model is

$$
i_D=I_S\left(e^{v_D/(nV_T)}-1\right),
$$

where $I_S$ is scale current, $n$ is an ideality factor, and $V_T=kT/q$ is about 25.9 mV at room temperature.

Diodes are used for rectification, clamping, protection, detection, and regulation. A series resistor limits current. In a half-wave rectifier, the load receives only one polarity of an AC waveform; a bridge rectifier uses both half-cycles but loses approximately two diode drops in the conducting path.

Bipolar junction transistors (BJTs) use emitter, base, and collector currents; in active operation $i_C\approx\beta i_B$. MOSFETs use a gate electric field to control a channel. A simplified enhancement MOSFET is off below threshold $V_{GS}<V_{TH}$ and, in saturation, has approximately

$$
i_D\approx\frac{1}{2}k(V_{GS}-V_{TH})^2,
$$

before channel-length modulation and other nonidealities. The word “saturation” differs between devices: a MOSFET's saturation region is commonly an amplification region, while a BJT saturated switch has both junctions forward biased.

### Biasing and switching

Biasing places a transistor in a known operating region. A switch should be driven far enough on to reduce conduction loss and far enough off to prevent unwanted current. An amplifier should be biased in a region that allows the expected signal swing without cutoff or clipping.

For a resistive load, a first power estimate is $P=I^2R=V^2/R$. Check semiconductor voltage, current, power, safe-operating-area, and thermal limits together.

## Operational amplifiers

An ideal op-amp has infinite open-loop gain, infinite input resistance, zero output resistance, and unlimited bandwidth. With negative feedback and operation away from saturation, the useful rules are

$$
i_+=i_-=0,\qquad v_+=v_-.
$$

The second rule is a consequence of feedback, not a property that applies when the output is saturated or the feedback is positive.

For an inverting amplifier,

$$
v_o=-\frac{R_f}{R_{in}}v_{in},
$$

and for a non-inverting amplifier,

$$
v_o=\left(1+\frac{R_f}{R_g}\right)v_{in}.
$$

Real op-amps have input offset voltage, input bias currents, finite gain-bandwidth product, slew-rate limits, output-current limits, common-mode limits, noise, and input/output voltage ranges. Check these limits when the signal is fast, large, high impedance, or near a supply rail. A rail-to-rail label still has specified output-current and load conditions.

## Filters and frequency response

A filter passes selected frequency components and attenuates others. For a first-order RC low-pass with output across the capacitor,

$$
H(j\omega)=\frac{1}{1+j\omega RC},\qquad f_c=\frac{1}{2\pi RC}.
$$

The high-pass version has

$$
H(j\omega)=\frac{j\omega RC}{1+j\omega RC}.
$$

At the cutoff frequency, the magnitude of a first-order response is $1/\sqrt{2}$ of its passband value, or approximately $-3$ dB. Each first-order pole contributes an eventual slope of about 20 dB per decade. A band-pass passes a range between a lower and upper cutoff; a notch rejects a narrow range.

Active filters use op-amps to add gain, buffering, and controlled pole placement. Filter order, component tolerances, source impedance, load impedance, noise, and op-amp bandwidth all affect the realized response. Draw the intended Bode magnitude and phase before selecting values.

## Power electronics

Power electronics converts and controls electrical energy. Typical stages are:

| Function | Example |
| --- | --- |
| AC to DC | Diode or controlled rectifier |
| DC to DC | Buck, boost, or buck-boost converter |
| DC to AC | Inverter using switched bridge legs |
| AC to AC | Phase controller or high-frequency converter |

An ideal buck converter has, in continuous conduction, approximately

$$
V_o\approx D V_{in},
$$

where $D$ is duty cycle. An ideal boost converter has $V_o\approx V_{in}/(1-D)$. Real converters lose power in switch resistance, diode drops, inductor resistance, capacitor ESR, gate drive, control circuitry, and switching transitions.

PWM controls average output by changing duty cycle. Inductors limit current ripple and capacitors limit voltage ripple, but neither removes the need for feedback, current limiting, startup control, and fault protection. Thermal design requires a junction-to-ambient path and a loss estimate, not merely a heat sink chosen by appearance.

Safety requirements include isolation where needed, fusing, creepage and clearance, controlled discharge of capacitors, current limiting, grounding, and protection against shoot-through in bridge circuits.

## Noise and grounding

Noise can be thermal, shot, flicker ($1/f$), electromagnetic interference, quantization, reference noise, or interference coupled through power and ground networks. A signal-to-noise ratio is

$$
\mathrm{SNR}=10\log_{10}\left(\frac{P_s}{P_n}\right)\ \mathrm{dB},
$$

or $20\log_{10}(V_s/V_n)$ when the impedances and measurement bandwidth are comparable.

Reduce noise at its source, along its coupling path, or at the receiver. Use short return paths, appropriate shielding, twisted pairs for differential signals, filtering, star or plane strategies where appropriate, and high-quality references. A shield is not automatically a signal return; connect it according to the frequency range and safety/isolation requirements.

Ground loops occur when multiple conductive paths create an unwanted circulating current or magnetic pickup path. Diagnose them by changing one connection at a time and measuring with the intended bandwidth. Differential measurement rejects common-mode voltage only within its common-mode range and finite common-mode rejection ratio.

## Worked example: non-inverting amplifier and bandwidth

Design an ideal non-inverting amplifier with gain 11. Choose $R_g=10\ \mathrm{k\Omega}$ from the inverting input to ground. Since

$$
A_v=1+\frac{R_f}{R_g},
$$

choose $R_f=100\ \mathrm{k\Omega}$. A 0.20 V peak input produces 2.2 V peak output, so the supply rails must provide adequate headroom. If the op-amp has a 1 MHz gain-bandwidth product, the approximate closed-loop bandwidth is

$$
f_{BW}\approx\frac{1\ \mathrm{MHz}}{11}\approx91\ \mathrm{kHz}.
$$

This estimate assumes a stable voltage-feedback op-amp and ignores loading, slew rate, noise, offset, and output swing. The resistor network also draws current from the output through $R_f+R_g$; a real design checks that load and resistor noise.

## Common mistakes

- Treating a diode forward voltage as a universal constant.
- Confusing transistor region names between BJTs and MOSFETs.
- Applying the virtual-short op-amp rule when feedback is absent or the output is saturated.
- Ignoring source and load impedance when cascading filters.
- Using the $-3$ dB cutoff as though it were a brick-wall boundary.
- Designing a converter from duty-cycle equations while ignoring discontinuous conduction and losses.
- Checking average power but not transient, switching, or safe-operating-area limits.
- Calling every ground connection a low-noise ground without tracing return current.
- Assuming shielding fixes noise that is actually caused by poor power integrity or aliasing.

## Practice problems

### Problem 1: diode resistor

A 5 V source drives an LED with a 2 V forward drop at 10 mA. Find a series resistor.

**Solution:**

$$
R=\frac{5-2}{0.010}=300\ \Omega.
$$

Choose a standard value at least as large as 300 $\Omega$ after checking brightness, tolerance, supply range, and resistor power $P_R=I^2R=0.03$ W.

### Problem 2: RC cutoff

Find the cutoff frequency for $R=10\ \mathrm{k\Omega}$ and $C=10\ \mathrm{nF}$.

**Solution:**

$$
f_c=\frac{1}{2\pi(10^4)(10^{-8})}\approx1.59\ \mathrm{kHz}.
$$

### Problem 3: buck converter

An ideal buck converter has $V_{in}=24$ V and duty cycle $D=0.25$. Find the average output voltage.

**Solution:** $V_o\approx DV_{in}=0.25(24)=6$ V. Real output is lower under load because of conduction and switching losses.

### Problem 4: noise comparison

A signal is 2 V RMS and noise is 2 mV RMS over the same bandwidth. Find SNR in dB.

**Solution:**

$$
\mathrm{SNR}=20\log_{10}\left(\frac{2}{0.002}\right)=60\ \mathrm{dB}.
$$

## Progression

Begin with voltage, current, power, and device operating regions. Then analyze op-amp feedback and frequency response. Add power conversion with thermal and safety checks, and finish by tracing noise currents and measurement bandwidth through a complete signal path. The central question is whether each component is operating in the region, frequency range, and thermal environment assumed by the model.

## Sources

- [Engineering LibreTexts](https://eng.libretexts.org/)
- Sedra and Smith, *Microelectronic Circuits*
- Nilsson and Riedel, *Electric Circuits*
- Horowitz and Hill, *The Art of Electronics*
