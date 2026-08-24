<!--
id: linear-system-signal-analysis-11
note: engineering-linear-system-signal-analysis
title: "Classify a Signal"
exam: exam-i
skills: [Signals, Signal Types]
-->

Classify the signal below as continuous-time or discrete-time, and state whether it is deterministic or random:

$$
x(t) = e^{-2t}u(t)
$$

:::solution
The signal is **continuous-time** because it is defined for real values of $t$.

It is **deterministic** because it is given by an explicit formula, not a statistical description.
:::

<!--
id: linear-system-signal-analysis-12
note: engineering-linear-system-signal-analysis
title: "Shift a Step Signal"
exam: exam-i
skills: [Time Shifting]
-->

If

$$
x(t) = u(t),
$$

what is $x(t-3)$?

:::solution
Replace $t$ by $t-3$:

$$
x(t-3) = u(t-3)
$$

This is the original step delayed by $3$ units.
:::

<!--
id: linear-system-signal-analysis-13
note: engineering-linear-system-signal-analysis
title: "Find Even and Odd Parts"
exam: exam-i
skills: [Even and Odd Parts]
-->

Let

$$
x(t) = t + 2.
$$

Find the even part $x_e(t)$ and odd part $x_o(t)$.

:::solution
First compute $x(-t)$:

$$
x(-t) = -t + 2
$$

Now use the formulas:

$$
x_e(t) = \frac{x(t) + x(-t)}{2}
$$

$$
x_o(t) = \frac{x(t) - x(-t)}{2}
$$

So

$$
x_e(t) = \frac{(t+2)+(-t+2)}{2} = 2
$$

and

$$
x_o(t) = \frac{(t+2)-(-t+2)}{2} = t
$$
:::

<!--
id: linear-system-signal-analysis-14
note: engineering-linear-system-signal-analysis
title: "Test Linearity"
exam: exam-i
skills: [Linearity]
-->

Is the system

$$
y(t) = x(t)^2
$$

linear?

:::solution
No. Linearity requires superposition.

For an input $x(t)$, the output is $x(t)^2$. But if we double the input, the output becomes

$$
(2x(t))^2 = 4x(t)^2
$$

whereas doubling the original output gives

$$
2x(t)^2
$$

These are not the same, so the system is not linear.
:::

<!--
id: linear-system-signal-analysis-15
note: engineering-linear-system-signal-analysis
title: "Check Memory and Causality"
exam: exam-i
skills: [Memory, Causality]
-->

For the system

$$
y(t) = x(t) + x(t-1),
$$

state whether the system has memory and whether it is causal.

:::solution
The system **has memory** because $y(t)$ depends on $x(t-1)$, not just the input at the same time.

It is **causal** because it depends only on the present value $x(t)$ and the past value $x(t-1)$, not on any future input.
:::

<!--
id: linear-system-signal-analysis-16
note: engineering-linear-system-signal-analysis
title: "Use the Impulse Shift Property"
exam: exam-i
skills: [Impulse Response, Convolution]
-->

For an LTI system with impulse response $h(t)$, what is the output when the input is

$$
x(t) = \delta(t-2)?
$$

:::solution
An impulse delayed by $2$ units produces a delayed copy of the impulse response:

$$
y(t) = h(t-2)
$$

This follows from the shift property of convolution.
:::

<!--
id: linear-system-signal-analysis-17
note: engineering-linear-system-signal-analysis
title: "Convolve with a Delayed Impulse"
exam: exam-i
skills: [Convolution, Discrete Time]
-->

Given

$$
h[n] = \delta[n] + \delta[n-1]
$$

and

$$
x[n] = \delta[n-2],
$$

find $y[n] = x[n] * h[n]$.

:::solution
Convolution with a delayed impulse shifts the other signal:

$$
y[n] = h[n-2]
$$

So

$$
y[n] = \delta[n-2] + \delta[n-3]
$$
:::

<!--
id: linear-system-signal-analysis-18
note: engineering-linear-system-signal-analysis
title: "Find the Fundamental Angular Frequency"
exam: exam-i
skills: [Fourier Series, Period]
-->

A periodic signal has period

$$
T = 0.25 \text{ s}.
$$

What is its fundamental angular frequency $\omega_0$?

:::solution
Use

$$
\omega_0 = \frac{2\pi}{T}
$$

Substitute $T = 0.25$:

$$
\omega_0 = \frac{2\pi}{0.25} = 8\pi
$$

So the fundamental angular frequency is

$$
8\pi \text{ rad/s}
$$
:::

<!--
id: linear-system-signal-analysis-19
note: engineering-linear-system-signal-analysis
title: "Read a Pole from a Transfer Function"
exam: exam-i
skills: [Transfer Function, Poles and Zeros]
-->

For

$$
H(s) = \frac{1}{s+5},
$$

find the pole and state whether it lies in the left-half plane or right-half plane.

:::solution
The pole is where the denominator is zero:

$$
s + 5 = 0 \quad \Rightarrow \quad s = -5
$$

Since $-5$ has negative real part, the pole lies in the **left-half plane**.
:::

<!--
id: linear-system-signal-analysis-110
note: engineering-linear-system-signal-analysis
title: "Read a Scalar State-Space Model"
exam: exam-i
skills: [State-Space, Continuous Time]
-->

For the system

$$
\dot{x}(t) = -3x(t) + 2u(t), \qquad y(t) = 4x(t) - u(t),
$$

identify $A$, $B$, $C$, and $D$.

:::solution
Compare the equations to

$$
\dot{x}(t) = Ax(t) + Bu(t)
$$

and

$$
y(t) = Cx(t) + Du(t).
$$

So

$$
A = -3,\quad B = 2,\quad C = 4,\quad D = -1.
$$
:::

<!--
id: linear-system-signal-analysis-21
note: engineering-linear-system-signal-analysis
title: "Classify a Differential-Equation Model"
exam: exam-ii
skills: [LTI Systems, Differential Equations]
-->

Determine whether the system

$$
\frac{dy(t)}{dt} + 2y(t) = \frac{dx(t)}{dt} + 3x(t)
$$

is linear and time invariant.

:::solution
The system is **linear** because $x(t)$ and $y(t)$ appear only to the first power and are not multiplied together.

It is **time invariant** because the coefficients are constant and there is no explicit dependence on $t$.

So the system is **LTI**.
:::

<!--
id: linear-system-signal-analysis-22
note: engineering-linear-system-signal-analysis
title: "Split a Polynomial Signal"
exam: exam-ii
skills: [Even and Odd Parts]
-->

Let

$$
x(t) = t^2 + 3t.
$$

Find the even part and odd part of the signal.

:::solution
First compute

$$
x(-t) = t^2 - 3t
$$

Then

$$
x_e(t) = \frac{x(t) + x(-t)}{2}
$$

and

$$
x_o(t) = \frac{x(t) - x(-t)}{2}
$$

So

$$
x_e(t) = \frac{(t^2+3t)+(t^2-3t)}{2} = t^2
$$

and

$$
x_o(t) = \frac{(t^2+3t)-(t^2-3t)}{2} = 3t
$$
:::

<!--
id: linear-system-signal-analysis-23
note: engineering-linear-system-signal-analysis
title: "Output of a Moving-Average Filter"
exam: exam-ii
skills: [Convolution, Impulse Response]
-->

Let

$$
h[n] = \frac{1}{3}\big(\delta[n] + \delta[n-1] + \delta[n-2]\big)
$$

and

$$
x[n] = u[n] - u[n-3].
$$

Find $y[n] = x[n] * h[n]$.

:::solution
The filter averages three consecutive samples:

$$
y[n] = \frac{1}{3}\big(x[n] + x[n-1] + x[n-2]\big)
$$

Since $x[n]$ is a length-3 pulse, the output is

$$
y[n] =
\begin{cases}
\frac{1}{3}, & n=0 \\
\frac{2}{3}, & n=1 \\
1, & n=2 \\
\frac{2}{3}, & n=3 \\
\frac{1}{3}, & n=4 \\
0, & \text{otherwise}
\end{cases}
$$
:::

<!--
id: linear-system-signal-analysis-24
note: engineering-linear-system-signal-analysis
title: "Compute a Sinusoidal Steady-State Output"
exam: exam-ii
skills: [Frequency Response, Sinusoids]
-->

An LTI system has frequency response

$$
H(j\omega) = 2e^{-j\pi/6}
$$

at $\omega = 5$. If the input is

$$
x(t) = \cos(5t),
$$

what is the steady-state output?

:::solution
For a cosine input at frequency $\omega$, the output keeps the same frequency and is scaled and phase shifted by $H(j\omega)$.

The magnitude is $2$ and the phase is $-\pi/6$, so

$$
y(t) = 2\cos\left(5t - \frac{\pi}{6}\right)
$$
:::

<!--
id: linear-system-signal-analysis-25
note: engineering-linear-system-signal-analysis
title: "Shift a Known Fourier Transform"
exam: exam-ii
skills: [Fourier Transform, Time Shift]
-->

Suppose

$$
x(t) = e^{-at}u(t), \qquad a > 0,
$$

has Fourier transform

$$
X(j\omega) = \frac{1}{a + j\omega}.
$$

What is the Fourier transform of $x(t-3)$?

:::solution
Use the time-shift property:

$$
x(t-t_0) \longleftrightarrow e^{-j\omega t_0}X(j\omega)
$$

With $t_0 = 3$,

$$
\mathcal{F}\{x(t-3)\} = e^{-j3\omega}X(j\omega)
$$

So

$$
\mathcal{F}\{x(t-3)\} = \frac{e^{-j3\omega}}{a + j\omega}
$$
:::

<!--
id: linear-system-signal-analysis-26
note: engineering-linear-system-signal-analysis
title: "Solve a First-Order System with Laplace Transforms"
exam: exam-ii
skills: [Laplace Transform, Initial Conditions]
-->

Solve for $y(t)$ given

$$
y'(t) + 4y(t) = u(t), \qquad y(0)=0.
$$

:::solution
Take the Laplace transform of both sides:

$$
sY(s) + 4Y(s) = \frac{1}{s}
$$

So

$$
Y(s) = \frac{1}{s(s+4)}
$$

Use partial fractions:

$$
\frac{1}{s(s+4)} = \frac{1}{4}\left(\frac{1}{s} - \frac{1}{s+4}\right)
$$

Invert term by term:

$$
y(t) = \frac{1}{4}\left(1 - e^{-4t}\right)u(t)
$$
:::

<!--
id: linear-system-signal-analysis-27
note: engineering-linear-system-signal-analysis
title: "Find the Transfer Function of a Difference Equation"
exam: exam-ii
skills: [Z-Transform, Difference Equations]
-->

For the causal system

$$
y[n] - 0.6y[n-1] = x[n],
$$

find the transfer function $H(z)$ and the ROC.

:::solution
Take the Z-transform with zero initial conditions:

$$
Y(z) - 0.6z^{-1}Y(z) = X(z)
$$

Factor out $Y(z)$:

$$
Y(z)\big(1 - 0.6z^{-1}\big) = X(z)
$$

So

$$
H(z) = \frac{Y(z)}{X(z)} = \frac{1}{1 - 0.6z^{-1}}
$$

For the causal system, the ROC is

$$
|z| > 0.6
$$
:::

<!--
id: linear-system-signal-analysis-28
note: engineering-linear-system-signal-analysis
title: "Apply the Nyquist Criterion"
exam: exam-ii
skills: [Sampling, Aliasing]
-->

A signal has highest frequency content at $900$ Hz. What is the Nyquist rate, and is sampling at $1.5$ kHz sufficient to avoid aliasing?

:::solution
The Nyquist rate is

$$
2f_{\max} = 2(900) = 1800 \text{ Hz}
$$

So the sampling rate must be greater than $1800$ Hz to avoid aliasing.

Since $1.5$ kHz $= 1500$ Hz is below $1800$ Hz, it is **not sufficient**.
:::

<!--
id: linear-system-signal-analysis-31
note: engineering-linear-system-signal-analysis
title: "Impulse Input as a Weighted Sum"
exam: final
skills: [Convolution, Impulse Response]
-->

An LTI system has impulse response

$$
h(t) = e^{-2t}u(t).
$$

If the input is

$$
x(t) = 3\delta(t-1) - 2\delta(t) + \delta(t-3),
$$

find the output $y(t)$.

:::solution
Use linearity and the shift property:

$$
y(t) = 3h(t-1) - 2h(t) + h(t-3)
$$

Substitute $h(t)$:

$$
y(t) = 3e^{-2(t-1)}u(t-1) - 2e^{-2t}u(t) + e^{-2(t-3)}u(t-3)
$$
:::

<!--
id: linear-system-signal-analysis-32
note: engineering-linear-system-signal-analysis
title: "Attenuation of a Sinusoid"
exam: final
skills: [Frequency Response, Sinusoids]
-->

An LTI system has frequency response

$$
H(j\omega) = \frac{1}{1+j\omega}.
$$

If the input is

$$
x(t) = 5\cos(2t),
$$

find the steady-state output amplitude and phase shift.

:::solution
Evaluate the frequency response at $\omega=2$:

$$
H(j2) = \frac{1}{1+j2}
$$

Its magnitude is

$$
|H(j2)| = \frac{1}{\sqrt{1^2+2^2}} = \frac{1}{\sqrt{5}}
$$

and its phase is

$$
\angle H(j2) = -\tan^{-1}(2)
$$

So the output amplitude is

$$
5 \cdot \frac{1}{\sqrt{5}} = \sqrt{5}
$$

and the steady-state output is

$$
y(t) = \sqrt{5}\cos\big(2t - \tan^{-1}(2)\big)
$$
:::

<!--
id: linear-system-signal-analysis-33
note: engineering-linear-system-signal-analysis
title: "Aliased Tone"
exam: final
skills: [Sampling, Aliasing]
-->

A $3.4$ kHz sinusoid is sampled at $4$ kHz. What aliased frequency appears after sampling?

:::solution
The sampled spectrum repeats every $f_s = 4$ kHz.

Since

$$
3.4 \text{ kHz} = 4.0 \text{ kHz} - 0.6 \text{ kHz},
$$

the tone folds to

$$
0.6 \text{ kHz} = 600 \text{ Hz}
$$

in the baseband interval $[0, f_s/2]$.
:::

<!--
id: linear-system-signal-analysis-34
note: engineering-linear-system-signal-analysis
title: "State-Space to Transfer Function"
exam: final
skills: [State-Space, Transfer Function]
-->

For the scalar state-space model

$$
\dot{x}(t) = -2x(t) + u(t), \qquad y(t) = 3x(t) + 4u(t),
$$

find the transfer function $H(s)$.

:::solution
Use

$$
H(s) = C(sI-A)^{-1}B + D
$$

with

$$
A=-2,\quad B=1,\quad C=3,\quad D=4.
$$

Then

$$
H(s) = 3(s+2)^{-1}(1) + 4 = \frac{3}{s+2} + 4
$$

So

$$
H(s) = \frac{4s+11}{s+2}
$$
:::

<!--
id: linear-system-signal-analysis-35
note: engineering-linear-system-signal-analysis
title: "Interpret a Symmetric Periodic Waveform"
exam: final
skills: [Fourier Series, Symmetry]
-->

A real periodic signal has period

$$
T = 0.01 \text{ s}
$$

and odd symmetry:

$$
x(-t) = -x(t).
$$

What kinds of Fourier-series terms can appear, and what is the fundamental frequency?

:::solution
Odd symmetry means the Fourier series can contain **sine terms only**. There is no DC term and no cosine terms.

The fundamental frequency is

$$
f_0 = \frac{1}{T} = \frac{1}{0.01} = 100 \text{ Hz}
$$

So the harmonics occur at integer multiples of $100$ Hz.
:::

<!--
id: linear-system-signal-analysis-41
note: engineering-linear-system-signal-analysis
title: "Convolution of Two Rectangular Pulses"
exam: final
skills: [Convolution, Piecewise Signals]
-->

Let

$$
x(t) = u(t) - u(t-2)
$$

and

$$
h(t) = u(t) - u(t-1).
$$

Find

$$
y(t) = x(t) * h(t).
$$

:::solution
Both signals are rectangular pulses. The convolution equals the amount of overlap between the interval $[0,2)$ and the shifted interval $[t-1,t)$.

That overlap length is:

$$
y(t) =
\begin{cases}
0, & t < 0 \\
t, & 0 \le t < 1 \\
1, & 1 \le t < 2 \\
3-t, & 2 \le t < 3 \\
0, & t \ge 3
\end{cases}
$$

So the output is a trapezoid made of two ramps and a flat middle section.
:::

<!--
id: linear-system-signal-analysis-42
note: engineering-linear-system-signal-analysis
title: "Solve a Forced First-Order System"
exam: final
skills: [Laplace Transform, Partial Fractions]
-->

Solve for $y(t)$ given

$$
y'(t) + 3y(t) = e^{-2t}u(t), \qquad y(0)=0.
$$

:::solution
Take the Laplace transform:

$$
sY(s) + 3Y(s) = \frac{1}{s+2}
$$

So

$$
Y(s) = \frac{1}{(s+2)(s+3)}
$$

Use partial fractions:

$$
\frac{1}{(s+2)(s+3)} = \frac{1}{s+2} - \frac{1}{s+3}
$$

Invert term by term:

$$
y(t) = \big(e^{-2t} - e^{-3t}\big)u(t)
$$
:::

<!--
id: linear-system-signal-analysis-43
note: engineering-linear-system-signal-analysis
title: "Stability and Causality from Poles"
exam: final
skills: [Poles and Zeros, Stability]
-->

Consider

$$
H(s) = \frac{s+1}{(s+2)(s-3)}.
$$

Can a causal realization of this system be stable? Explain.

:::solution
The poles are at

$$
s = -2 \quad \text{and} \quad s = 3.
$$

For a **causal** continuous-time rational system, the ROC must lie to the right of the rightmost pole, so here the ROC would be

$$
\Re(s) > 3.
$$

That ROC does not include the $j\omega$ axis, so the system would not be stable.

Therefore, a **causal stable realization is not possible**.
:::

<!--
id: linear-system-signal-analysis-44
note: engineering-linear-system-signal-analysis
title: "Frequency Response from an Exponential Impulse Response"
exam: final
skills: [Frequency Response, Fourier Transform]
-->

A system has impulse response

$$
h(t) = e^{-at}u(t), \qquad a > 0.
$$

For the input

$$
x(t) = \cos(\omega t),
$$

find the steady-state output amplitude and phase shift.

:::solution
The frequency response is

$$
H(j\omega) = \frac{1}{a+j\omega}
$$

so its magnitude is

$$
|H(j\omega)| = \frac{1}{\sqrt{a^2+\omega^2}}
$$

and its phase is

$$
\angle H(j\omega) = -\tan^{-1}\left(\frac{\omega}{a}\right)
$$

Therefore the steady-state output is

$$
y(t) = \frac{1}{\sqrt{a^2+\omega^2}}\cos\left(\omega t - \tan^{-1}\left(\frac{\omega}{a}\right)\right)
$$
:::
