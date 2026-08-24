# Vibrations

## Modeling assumptions and notation

Assume small displacements, linear springs, time-invariant properties, and an initially stationary system unless stated otherwise. Let $x(t)$ be displacement, $\dot{x}$ velocity, and $\ddot{x}$ acceleration. The parameters are mass $m$, damping coefficient $c$, and stiffness $k$:

$$
[m]=\mathrm{kg},\qquad [c]=\mathrm{N\,s/m},\qquad [k]=\mathrm{N/m}.
$$

The equilibrium position is the position at which the static forces balance. Measure vibration displacement from that position whenever possible; this removes constant loads such as weight from the dynamic equation. A model should state whether damping is viscous, frictional, structural, or an equivalent approximation.

## Single-degree-of-freedom free vibration

For a mass connected to a linear spring and viscous damper,

$$
m\ddot{x}+c\dot{x}+kx=f(t).
$$

For free vibration, $f(t)=0$. The undamped natural circular frequency and damping ratio are

$$
\omega_n=\sqrt{\frac{k}{m}},
\qquad c_c=2\sqrt{km},
\qquad \zeta=\frac{c}{c_c}=\frac{c}{2m\omega_n}.
$$

The cases are $\zeta=0$ (undamped), $0<\zeta<1$ (underdamped), $\zeta=1$ (critical), and $\zeta>1$ (overdamped). For the underdamped case,

$$
\omega_d=\omega_n\sqrt{1-\zeta^2},
\qquad
x(t)=e^{-\zeta\omega_n t}\left(A\cos\omega_dt+B\sin\omega_dt\right).
$$

The exponential envelope gives the decay rate; $\omega_d$, not $\omega_n$, is the observed oscillation frequency.

If successive peaks have amplitudes $x_r$ and $x_{r+1}$, the logarithmic decrement is

$$
\delta=\ln\left(\frac{x_r}{x_{r+1}}\right)=\frac{2\pi\zeta}{\sqrt{1-\zeta^2}}.
$$

For light damping, $\zeta\approx\delta/(2\pi)$. Use same-sign peaks and account for noise and nonlinear decay.

## Types and representations of damping

Viscous damping produces a force $c\dot{x}$ and is convenient for linear differential equations. Coulomb damping has approximately constant magnitude opposing motion, $F_c\operatorname{sgn}(\dot{x})$, and produces amplitude-dependent decay. Structural or hysteretic damping is often represented by a loss factor $\eta$ and complex stiffness $k(1+i\eta)$. Modal damping assigns a damping ratio to each mode after the system has been decoupled.

An equivalent viscous coefficient can approximate energy loss over a selected cycle or frequency range, but it is not universal. Do not infer damping from frequency shift alone: frequency and amplitude decay contain different information.

## Forced response

For harmonic force $f(t)=F_0\cos\omega t$, the steady response is $x_{ss}(t)=X\cos(\omega t-\phi)$, where

$$
X=\frac{F_0/k}{\sqrt{(1-r^2)^2+(2\zeta r)^2}},
\qquad r=\frac{\omega}{\omega_n},
\qquad
\phi=\operatorname{atan2}(2\zeta r,1-r^2).
$$

The dimensionless amplification factor is $M=X/(F_0/k)$. At low frequency, response is nearly static and in phase. Near $r=1$, amplitude can be large and phase changes rapidly. At high frequency, displacement decreases approximately as $1/r^2$ and approaches a phase lag of $\pi$.

For base displacement $y(t)=Y\cos\omega t$, the absolute mass displacement $x$ satisfies

$$
m\ddot{x}+c(\dot{x}-\dot{y})+k(x-y)=0.
$$

The relative-displacement transmissibility is

$$
\frac{|X-Y|}{Y}=\frac{r^2}{\sqrt{(1-r^2)^2+(2\zeta r)^2}}.
$$

Force and motion transmissibility differ, so define the output before selecting a formula.

## Resonance and design

Resonance is the large response caused by forcing near a lightly damped modal frequency. For viscous damping, the displacement-amplitude peak occurs at

$$
r_{peak}=\sqrt{1-2\zeta^2}
$$

when $\zeta<1/\sqrt{2}$. Increasing damping lowers and broadens the peak. Detuning changes stiffness, mass, or operating speed so excitation avoids the peak. Other controls include isolation, balancing, absorbers, changed boundary conditions, and limiting dwell time near resonance.

For light damping, the quality factor is approximately

$$
Q\approx\frac{1}{2\zeta}.
$$

High $Q$ means a sharp, sensitive resonance. Include startup, shutdown, speed variation, harmonics, tolerances, and aging in a resonance check.

## Multiple-degree-of-freedom systems

For $n$ coupled coordinates collected in $\mathbf{x}$,

$$
\mathbf{M}\ddot{\mathbf{x}}+\mathbf{C}\dot{\mathbf{x}}+\mathbf{K}\mathbf{x}=\mathbf{f}(t).
$$

Here $\mathbf{M}$ is the mass matrix, $\mathbf{C}$ the damping matrix, and $\mathbf{K}$ the stiffness matrix. Off-diagonal terms appear when one coordinate's motion changes a shared spring or damper deformation. Assemble matrices from force balances or energy, then check symmetry, units, constraints, and rigid-body modes.

For undamped free vibration, $\mathbf{x}=\boldsymbol{\phi}e^{i\omega t}$ gives

$$
(\mathbf{K}-\omega^2\mathbf{M})\boldsymbol{\phi}=\mathbf{0},
\qquad \det(\mathbf{K}-\omega^2\mathbf{M})=0.
$$

The roots give natural frequencies and the vectors $\boldsymbol{\phi}_r$ give mode shapes. A free-free model has physical rigid-body modes at zero frequency.

## Modal analysis

For symmetric positive-definite $\mathbf{M}$ and $\mathbf{K}$, distinct mode shapes satisfy

$$
\boldsymbol{\phi}_r^T\mathbf{M}\boldsymbol{\phi}_s=0,
\qquad \boldsymbol{\phi}_r^T\mathbf{K}\boldsymbol{\phi}_s=0
\quad(r\ne s).
$$

Write $\mathbf{x}=\mathbf{\Phi}\mathbf{q}$, where columns of $\mathbf{\Phi}$ are selected modes and $\mathbf{q}$ are modal coordinates. With mass-normalized modes, $\mathbf{\Phi}^T\mathbf{M}\mathbf{\Phi}=\mathbf I$ and $\mathbf{\Phi}^T\mathbf{K}\mathbf{\Phi}=\boldsymbol{\Omega}^2$. Under proportional damping,

$$
\ddot{q}_r+2\zeta_r\omega_r\dot{q}_r+\omega_r^2q_r=\boldsymbol{\phi}_r^T\mathbf{f}(t).
$$

Participation depends on forcing distribution and measurement location. Low-mode truncation works for smooth, low-frequency response, but omitted modes can matter for local stress, shocks, and high-frequency inputs.

## Frequency-response functions

For complex harmonic amplitudes, the receptance FRF is

$$
\mathbf{H}_x(\omega)=\frac{\mathbf{X}}{\mathbf{F}}=\left(-\omega^2\mathbf{M}+i\omega\mathbf{C}+\mathbf{K}\right)^{-1}.
$$

Its units are displacement per force. Related FRFs are mobility $\mathbf{H}_v=i\omega\mathbf{H}_x$ and accelerance $\mathbf{H}_a=-\omega^2\mathbf{H}_x$. An FRF has magnitude and phase. Poles correspond to modes; zeros can suppress response between resonances.

Measurements require a known input, calibrated sensors, adequate sampling, windowing, and attention to leakage, noise, nonlinearities, and boundary conditions. Coherence helps identify whether the measured output is explained by the measured input.

## Worked example: forced response

A machine has $m=10\ \mathrm{kg}$, $k=4000\ \mathrm{N/m}$, $c=20\ \mathrm{N\,s/m}$, and is driven by $F_0=50\ \mathrm N$ at $\omega=18\ \mathrm{rad/s}$. Then

$$
\omega_n=\sqrt{4000/10}=20\ \mathrm{rad/s},
\qquad \zeta=\frac{20}{2(10)(20)}=0.05,
\qquad r=0.9.
$$

The static amplitude is $F_0/k=0.0125\ \mathrm m$. Thus

$$
M=\frac{1}{\sqrt{(1-0.9^2)^2+(2(0.05)(0.9))^2}}=4.79,
\qquad X=4.79(0.0125)=0.0599\ \mathrm m,
$$

and $\phi=\operatorname{atan2}(0.09,0.19)=25.3^\circ$. The machine moves about $60\ \mathrm{mm}$ and lags the force by about $25^\circ$; a small speed change could substantially change this light-damped response.

## Workflow and common mistakes

1. Define the measured coordinate, equilibrium, supports, excitation, and operating range.
2. Derive the equation from force balance or energy and state the damping model.
3. Check units, limits, positive mass and stiffness, and boundary conditions.
4. Compute modes before interpreting a multi-degree-of-freedom response.
5. Compare displacement, acceleration, force, noise, and fatigue with allowable values.
6. Validate uncertain parameters with a ring-down, sine sweep, impact test, or operating data.

Common mistakes include using $\omega_n$ as the damped frequency, mixing Hz and rad/s, forgetting that base excitation is not an applied force, treating a mode shape's scale as physically meaningful, assuming every resonance is exactly at $\omega_n$, and fitting viscous damping without checking the decay model.

## Sources

- Inman, *Engineering Vibration*
- Rao, *Mechanical Vibrations*
- Den Hartog, *Mechanical Vibrations*
- [Engineering LibreTexts](https://eng.libretexts.org/)

Vibration is oscillatory motion about an equilibrium configuration. The useful engineering model is a balance among inertia, stiffness, damping, and applied excitation. This note develops linear models first, then shows how modal and frequency-domain descriptions organize larger systems.
