# Signals, systems, and core models

## Signals

A **signal** is a function that carries information. In engineering, signals usually represent voltage, current, force, pressure, sound, position, or sensor output.

Common classifications:

| Type            | Example            | Notes                                 |
| --------------- | ------------------ | ------------------------------------- |
| Continuous-time | $x(t)$             | Defined for every real $t$            |
| Discrete-time   | $x[n]$             | Defined only at integer index $n$     |
| Analog          | Microphone voltage | Continuous amplitude                  |
| Digital         | Quantized samples  | Finite resolution and sampled in time |
| Deterministic   | $e^{-at}$          | Exactly described by an equation      |
| Random          | Thermal noise      | Described statistically               |

Useful elementary signals:

$$
u(t) =
\begin{cases}
0, & t < 0 \\
1, & t \ge 0
\end{cases}
$$

$$
\delta(t) \text{ is an impulse with } \int_{-\infty}^{\infty} \delta(t)\,dt = 1
$$

In discrete time:

$$
u[n] =
\begin{cases}
0, & n < 0 \\
1, & n \ge 0
\end{cases}
\qquad
\delta[n] =
\begin{cases}
1, & n = 0 \\
0, & n \ne 0
\end{cases}
$$

## Systems

A **system** transforms an input signal into an output signal.

Examples:

- Electrical filter
- Mechanical mass-spring-damper
- Communication channel
- Digital controller

The most important system class in this subject is the **linear time-invariant** system, or LTI system.

---

# Basic signal operations

## Time shifting

Delaying a signal by $t_0$:

$$
x(t - t_0)
$$

Advancing a signal:

$$
x(t + t_0)
$$

## Time scaling

Stretching or compressing time:

$$
x(at)
$$

If $|a| > 1$, the signal compresses in time. If $0 < |a| < 1$, it stretches.

## Time reversal

$$
x(-t)
$$

## Amplitude scaling

$$
Ax(t)
$$

This changes amplitude without changing the time axis.

## Decomposition into even and odd parts

Any signal can be decomposed as:

$$
x(t) = x_e(t) + x_o(t)
$$

where

$$
x_e(t) = \frac{x(t) + x(-t)}{2}
$$

$$
x_o(t) = \frac{x(t) - x(-t)}{2}
$$

The same formulas hold in discrete time by replacing $t$ with $n$.

---

# System properties

## Linearity

A system is **linear** if it satisfies superposition:

$$
\mathcal{T}\{a x_1 + b x_2\} = a\mathcal{T}\{x_1\} + b\mathcal{T}\{x_2\}
$$

Two parts:

- **Additivity**
- **Homogeneity**

### Quick test

1. Send in $x_1$ and get $y_1$.
2. Send in $x_2$ and get $y_2$.
3. Check whether $a x_1 + b x_2$ produces $a y_1 + b y_2$.

Nonlinear examples:

- Squaring: $y = x^2$
- Saturation and clipping
- Multiplication of two signals

## Time invariance

A system is **time invariant** if shifting the input shifts the output by the same amount.

If

$$
x(t) \to y(t)
$$

then for any shift $t_0$,

$$
x(t - t_0) \to y(t - t_0)
$$

If the system changes behavior over time, it is time-varying.

## Causality

A system is **causal** if the output at time $t$ depends only on present and past inputs, not future inputs.

For discrete time, a causal system can depend on $x[n], x[n-1], x[n-2], \dots$

## Stability

In the bounded-input bounded-output sense, a system is **stable** if every bounded input produces a bounded output.

If

$$
|x(t)| \le M_x
$$

then stability requires

$$
|y(t)| \le M_y
$$

for some finite $M_y$.

## Memory

A system is **memoryless** if output at time $t$ depends only on the input at the same time.

Examples:

- Memoryless: $y(t) = 3x(t)$
- Has memory: $y(t) = x(t) + x(t-1)$

## Invertibility

A system is **invertible** if the input can be uniquely recovered from the output.

Example:

$$
y(t) = 2x(t)
$$

is invertible, with inverse

$$
x(t) = \frac{y(t)}{2}
$$

---

# Linear time-invariant systems

LTI systems are central because they are completely characterized by their response to an impulse.

## Impulse response

For a continuous-time LTI system, the **impulse response** is

$$
h(t) = \mathcal{T}\{\delta(t)\}
$$

For discrete time:

$$
h[n] = \mathcal{T}\{\delta[n]\}
$$

Once $h$ is known, the output for any input is determined by convolution.

## Why LTI systems matter

LTI systems are useful because:

- Superposition applies.
- Shift invariance simplifies analysis.
- Frequency-domain methods become available.
- Differential or difference equations often reduce to algebra.

## Differential and difference equation models

Continuous-time example:

$$
a_1 \frac{dy(t)}{dt} + a_0 y(t) = b_1 \frac{dx(t)}{dt} + b_0 x(t)
$$

Discrete-time example:

$$
y[n] - 0.5y[n-1] = x[n] + x[n-1]
$$

To test whether such a model is LTI, check linearity and whether the coefficients are constant over time.

---

# Convolution

Convolution is the main tool for computing the output of an LTI system.

## Continuous-time convolution

For input $x(t)$ and impulse response $h(t)$:

$$
y(t) = (x * h)(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau)\,d\tau
$$

Equivalent form:

$$
y(t) = \int_{-\infty}^{\infty} h(\tau) x(t - \tau)\,d\tau
$$

## Discrete-time convolution

$$
y[n] = (x * h)[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]
$$

## Graphical convolution workflow

1. Time-reverse one signal.
2. Shift it by $t$ or $n$.
3. Multiply pointwise with the other signal.
4. Integrate or sum over overlap.

## Key properties of convolution

$$
x * h = h * x
$$

$$
x * (h_1 + h_2) = x * h_1 + x * h_2
$$

$$
x * \delta = x
$$

$$
x * \delta(t - t_0) = x(t - t_0)
$$

If one factor is a delayed impulse, convolution simply shifts the other signal.

## Physical meaning

Convolution can be viewed as:

- Decomposing the input into shifted impulses
- Scaling each impulse by the local input value
- Summing the shifted impulse responses

## Example: moving average filter

For discrete time:

$$
h[n] = \frac{1}{3}\big(\delta[n] + \delta[n-1] + \delta[n-2]\big)
$$

Then

$$
y[n] = \frac{1}{3}\big(x[n] + x[n-1] + x[n-2]\big)
$$

This is a simple smoothing filter.

---

# Frequency response and steady-state sinusoidal analysis

## Sinusoids as test signals

For LTI systems, complex exponentials are eigenfunctions:

$$
x(t) = e^{j\omega t} \quad \Rightarrow \quad y(t) = H(j\omega)e^{j\omega t}
$$

where $H(j\omega)$ is the frequency response.

This means the system changes only amplitude and phase, not frequency, for a sinusoidal input.

## Frequency response

If the impulse response is $h(t)$, then

$$
H(j\omega) = \int_{-\infty}^{\infty} h(t)e^{-j\omega t}\,dt
$$

For discrete time:

$$
H(e^{j\omega}) = \sum_{n=-\infty}^{\infty} h[n]e^{-j\omega n}
$$

## Amplitude and phase interpretation

Write

$$
H(j\omega) = |H(j\omega)|e^{j\angle H(j\omega)}
$$

Then a sinusoidal input produces:

$$
y(t) = |H(j\omega)| \cos(\omega t + \angle H(j\omega))
$$

for a cosine input of unit amplitude.

## Bode plots

A Bode plot shows:

- Magnitude in dB:

$$
20\log_{10}|H(j\omega)|
$$

- Phase in degrees or radians

Useful for identifying:

- Low-pass behavior
- High-pass behavior
- Band-pass behavior
- Resonance

## Poles and zeros

For rational transfer functions, poles and zeros strongly shape the response.

- Zeros can attenuate specific frequencies.
- Poles can amplify or destabilize the response.

General rule:

- Poles closer to the imaginary axis or unit circle create stronger effects.

---

# Fourier series and Fourier transform

## Fourier series for periodic signals

If $x(t)$ is periodic with period $T$, it can be written as:

$$
x(t) = \sum_{k=-\infty}^{\infty} c_k e^{jk\omega_0 t}
$$

where

$$
\omega_0 = \frac{2\pi}{T}
$$

and

$$
c_k = \frac{1}{T}\int_{T} x(t)e^{-jk\omega_0 t}\,dt
$$

Fourier series decomposes a periodic signal into harmonics of the fundamental frequency.

## Symmetry shortcuts

If $x(t)$ is real and even:

- Coefficients are real
- Sine terms vanish

If $x(t)$ is real and odd:

- Cosine terms vanish

Use symmetry whenever possible to reduce algebra.

## Fourier transform for aperiodic signals

The Fourier transform is

$$
X(j\omega) = \int_{-\infty}^{\infty} x(t)e^{-j\omega t}\,dt
$$

with inverse

$$
x(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} X(j\omega)e^{j\omega t}\,d\omega
$$

It expresses a signal as a continuum of frequencies.

## Important properties

| Property       | Time domain           | Frequency domain             |
| -------------- | --------------------- | ---------------------------- |
| Linearity      | $ax_1 + bx_2$         | $aX_1 + bX_2$                |
| Time shift     | $x(t-t_0)$            | $e^{-j\omega t_0}X(j\omega)$ |
| Modulation     | $e^{j\omega_0 t}x(t)$ | $X(j(\omega-\omega_0))$      |
| Convolution    | $x*h$                 | $XH$                         |
| Multiplication | $x h$                 | Convolution in frequency     |

## Parseval's relation

Energy is preserved between time and frequency domains:

$$
\int_{-\infty}^{\infty} |x(t)|^2\,dt
= \frac{1}{2\pi}\int_{-\infty}^{\infty} |X(j\omega)|^2\,d\omega
$$

This is useful for energy calculations and spectral interpretation.

## Common transforms

| Signal              | Fourier transform                                             |
| ------------------- | ------------------------------------------------------------- |
| $\delta(t)$         | $1$                                                           |
| $u(t)$              | $\pi\delta(\omega) + \frac{1}{j\omega}$ in distribution sense |
| $e^{-at}u(t),\ a>0$ | $\frac{1}{a+j\omega}$                                         |
| Rectangular pulse   | Sinc-shaped spectrum                                          |

---

# Laplace transform

The Laplace transform is the main tool for continuous-time linear systems with initial conditions.

## Definition

$$
X(s) = \int_{-\infty}^{\infty} x(t)e^{-st}\,dt
$$

where

$$
s = \sigma + j\omega
$$

The unilateral Laplace transform, used heavily in engineering, is

$$
X(s) = \int_0^\infty x(t)e^{-st}\,dt
$$

## Why use Laplace transforms

- Turns differential equations into algebraic equations
- Handles initial conditions naturally
- Provides a pole-zero view of system behavior

## Transfer function

For an LTI system with zero initial conditions:

$$
H(s) = \frac{Y(s)}{X(s)}
$$

For rational systems,

$$
H(s) = \frac{N(s)}{D(s)}
$$

Poles are roots of $D(s)$ and zeros are roots of $N(s)$.

## Stability and causality in the $s$-plane

For a causal continuous-time LTI system:

- Causality generally requires the ROC to be to the right of the rightmost pole.
- Stability requires the ROC to include the $j\omega$ axis.

For rational causal systems, stability typically means all poles lie in the left-half plane.

## Solving differential equations

Example:

$$
\frac{dy(t)}{dt} + ay(t) = x(t)
$$

Taking the Laplace transform with zero initial conditions:

$$
sY(s) + aY(s) = X(s)
$$

So

$$
H(s) = \frac{Y(s)}{X(s)} = \frac{1}{s+a}
$$

## Partial fractions and inverse transform

Workflow:

1. Compute $Y(s) = H(s)X(s)$.
2. Factor the denominator.
3. Use partial fractions.
4. Match each term to a known inverse transform.

This is the standard route for transient response problems.

---

# Z-transform and discrete-time analysis

The Z-transform is the discrete-time counterpart of the Laplace transform.

## Definition

$$
X(z) = \sum_{n=-\infty}^{\infty} x[n]z^{-n}
$$

The unilateral form is

$$
X(z) = \sum_{n=0}^{\infty} x[n]z^{-n}
$$

## Transfer function

For a discrete-time LTI system:

$$
H(z) = \frac{Y(z)}{X(z)}
$$

## Difference equations

Example:

$$
y[n] - ay[n-1] = x[n]
$$

Taking the Z-transform with zero initial conditions gives:

$$
Y(z)(1 - az^{-1}) = X(z)
$$

So

$$
H(z) = \frac{1}{1 - az^{-1}}
$$

## Stability and causality in the $z$-plane

For a causal discrete-time LTI system:

- The ROC is outside the outermost pole.
- Stability requires the unit circle $|z| = 1$ to lie in the ROC.

For rational causal systems, stability typically means all poles lie inside the unit circle.

## Relationship to Fourier analysis

If the unit circle is in the ROC, then the frequency response is found by evaluating:

$$
H(e^{j\omega}) = H(z)\big|_{z=e^{j\omega}}
$$

This connects the Z-transform to steady-state sinusoidal behavior.

---

# Sampling and reconstruction

Sampling converts a continuous-time signal into a discrete-time signal:

$$
x[n] = x(nT_s)
$$

where $T_s$ is the sampling period and

$$
f_s = \frac{1}{T_s}
$$

is the sampling frequency.

## Nyquist criterion

To avoid aliasing for a band-limited signal with maximum frequency $f_{max}$:

$$
f_s > 2f_{max}
$$

The quantity $2f_{max}$ is the Nyquist rate.

## Aliasing

If sampling is too slow, high-frequency components fold into lower frequencies and distort the spectrum.

Common fixes:

- Increase sampling rate
- Use an anti-aliasing low-pass filter before sampling

## Reconstruction

Ideal reconstruction uses sinc interpolation:

$$
x(t) = \sum_{n=-\infty}^{\infty} x[n]\operatorname{sinc}\left(\frac{t-nT_s}{T_s}\right)
$$

This is idealized but useful for theory.

---

# State-space viewpoint

State-space models represent systems using first-order vector equations.

## Continuous-time form

$$
\dot{\mathbf{x}}(t) = A\mathbf{x}(t) + B\mathbf{u}(t)
$$

$$
\mathbf{y}(t) = C\mathbf{x}(t) + D\mathbf{u}(t)
$$

## Discrete-time form

$$
\mathbf{x}[n+1] = A\mathbf{x}[n] + B\mathbf{u}[n]
$$

$$
\mathbf{y}[n] = C\mathbf{x}[n] + D\mathbf{u}[n]
$$

## Why state-space is useful

- Handles multiple inputs and outputs
- Models internal dynamics directly
- Supports modern control and estimation

## Connection to transfer functions

For zero initial conditions:

$$
H(s) = C(sI - A)^{-1}B + D
$$

and similarly in discrete time,

$$
H(z) = C(zI - A)^{-1}B + D
$$

State-space and transfer-function descriptions are equivalent for linear systems, but each is more convenient in different contexts.

---

# Problem-solving workflow

## Decide the domain first

Ask:

- Is the system continuous or discrete?
- Is the analysis time-domain or frequency-domain?
- Are initial conditions given?
- Is the input periodic, impulsive, sinusoidal, or arbitrary?

This decides whether to use convolution, Fourier, Laplace, or Z-transform methods.

## Standard workflow for LTI problems

1. Identify whether the system is linear and time invariant.
2. Write the model as a differential equation, difference equation, or impulse response.
3. Choose the best domain:
   - Convolution for direct time-domain output
   - Fourier for steady-state frequency behavior
   - Laplace or Z-transform for transients and initial conditions
4. Solve algebraically if possible.
5. Check stability, causality, and physical units.

## Common pitfalls

- Confusing time shift with time reversal
- Forgetting that convolution reverses one signal
- Treating $H(s)$ or $H(z)$ as the same thing as a Fourier transform without checking the ROC
- Ignoring initial conditions in differential equations
- Mixing continuous-time frequency $\omega$ with discrete-time frequency $\omega$ without noting units
- Using the wrong sign convention in the complex exponential

## Sanity checks

- Does the answer have the correct units?
- Does the output remain bounded for a bounded input when the system is stable?
- Does a shift in the input produce the same shift in the output for an LTI system?
- Does the result reduce correctly for a simple test case such as a unit impulse or constant input?

---

# Formula summary

## Core definitions

$$
y(t) = (x * h)(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)\,d\tau
$$

$$
y[n] = (x * h)[n] = \sum_{k=-\infty}^{\infty} x[k]h[n-k]
$$

$$
H(j\omega) = \int_{-\infty}^{\infty} h(t)e^{-j\omega t}\,dt
$$

$$
H(s) = \frac{Y(s)}{X(s)}
$$

$$
H(z) = \frac{Y(z)}{X(z)}
$$

## Fourier transform pair

$$
X(j\omega) = \int_{-\infty}^{\infty} x(t)e^{-j\omega t}\,dt
$$

$$
x(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} X(j\omega)e^{j\omega t}\,d\omega
$$

## Laplace transform pair

$$
X(s) = \int_0^\infty x(t)e^{-st}\,dt
$$

## Z-transform pair

$$
X(z) = \sum_{n=0}^{\infty} x[n]z^{-n}
$$

## Stability rules of thumb

- Continuous-time causal rational system: stable if all poles are in the left-half plane.
- Discrete-time causal rational system: stable if all poles are inside the unit circle.

## Sampling rule

$$
f_s > 2f_{max}
$$

---

## Compact intuition

The subject is built around one idea:

> An LTI system is fully described by its impulse response, and every other analysis tool is a different way of exploiting that description.

If you can move comfortably between the time domain, frequency domain, and transform domain, most signal-analysis problems become routine.

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
