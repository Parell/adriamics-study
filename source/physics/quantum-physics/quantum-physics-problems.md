<!--
id: quantum-physics-i-11
note: physics-quantum-physics-i
title: "Find Probability in a Subinterval"
exam: exam-i
skills: [Probability Density, Integration]
-->

A particle has wave function

$$
\psi(x) = \frac{1}{2}
$$

for $0 \le x \le 4$, and $\psi(x)=0$ elsewhere.

What is the probability of finding the particle in the interval $[0,2]$?

:::solution
The probability is the integral of $|\psi(x)|^2$ over the interval:

$$
P(0 \le x \le 2) = \int_0^2 \left|\frac{1}{2}\right|^2 dx
$$

$$
P(0 \le x \le 2) = \int_0^2 \frac{1}{4}\,dx = \frac{1}{2}
$$

So the probability is $\frac{1}{2}$.
:::

<!--
id: quantum-physics-i-12
note: physics-quantum-physics-i
title: "Normalize a Uniform Wave Function"
exam: exam-i
skills: [Normalization, Wave Functions]
-->

Let

$$
\psi(x) = A
$$

for $0 \le x \le 3$, and $\psi(x)=0$ elsewhere.

Find a normalized value of $A$.

:::solution
Use the normalization condition:

$$
\int_{-\infty}^{\infty} |\psi(x)|^2\,dx = 1
$$

Here that becomes

$$
\int_0^3 |A|^2\,dx = 1
$$

$$
3|A|^2 = 1
$$

So a normalized choice is

$$
A = \frac{1}{\sqrt{3}}
$$

up to an overall phase.
:::

<!--
id: quantum-physics-i-13
note: physics-quantum-physics-i
title: "Energy of the Second Level in an Infinite Well"
exam: exam-i
skills: [Infinite Square Well, Quantized Energies]
-->

For a particle in an infinite square well of width $L$, what is the energy $E_2$ of the $n=2$ state?

:::solution
The note gives

$$
E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}
$$

Substitute $n=2$:

$$
E_2 = \frac{4\pi^2\hbar^2}{2mL^2}
$$

So

$$
E_2 = \frac{2\pi^2\hbar^2}{mL^2}
$$
:::

<!--
id: quantum-physics-i-14
note: physics-quantum-physics-i
title: "Identify the Momentum Operator"
exam: exam-i
skills: [Momentum Operator, Observables]
-->

What is the one-dimensional momentum operator $\hat{p}$?

:::solution
The momentum operator in one dimension is

$$
\hat{p} = -i\hbar \frac{d}{dx}
$$

This is the operator used for momentum measurements in the position representation.
:::

<!--
id: quantum-physics-i-15
note: physics-quantum-physics-i
title: "Use the de Broglie Relation"
exam: exam-i
skills: [de Broglie Wavelength, Momentum]
-->

A particle has de Broglie wavelength $\lambda$.

What is its momentum $p$?

:::solution
Use the de Broglie relation

$$
\lambda = \frac{h}{p}
$$

Solve for $p$:

$$
p = \frac{h}{\lambda}
$$
:::

<!--
id: quantum-physics-i-16
note: physics-quantum-physics-i
title: "Photoelectric Maximum Kinetic Energy"
exam: exam-i
skills: [Photoelectric Effect, Energy Quanta]
-->

A metal has work function $\phi = 4\ \text{eV}$.

Light of energy $h\nu = 6\ \text{eV}$ shines on it.

What is the maximum kinetic energy of the emitted electrons?

:::solution
Use the photoelectric equation:

$$
K_{\max} = h\nu - \phi
$$

Substitute the values:

$$
K_{\max} = 6 - 4 = 2\ \text{eV}
$$

So the maximum kinetic energy is $2\ \text{eV}$.
:::

<!--
id: quantum-physics-i-17
note: physics-quantum-physics-i
title: "Spin-1/2 Outcomes"
exam: exam-i
skills: [Spin-1/2, Measurement]
-->

For an electron, what are the possible measured values of spin projection along an axis?

:::solution
An electron has spin $1/2$, so the only allowed measurement outcomes are

$$
\pm \frac{\hbar}{2}
$$

along the chosen axis.
:::

<!--
id: quantum-physics-i-18
note: physics-quantum-physics-i
title: "Write the Uncertainty Bound"
exam: exam-i
skills: [Uncertainty Principle, Measurement]
-->

If the position uncertainty is $\Delta x$, what is the smallest possible momentum uncertainty $\Delta p$?

:::solution
The Heisenberg uncertainty principle says

$$
\Delta x\,\Delta p \ge \frac{\hbar}{2}
$$

Solve for $\Delta p$:

$$
\Delta p \ge \frac{\hbar}{2\Delta x}
$$
:::

<!--
id: quantum-physics-i-19
note: physics-quantum-physics-i
title: "Write the One-Dimensional Hamiltonian"
exam: exam-i
skills: [Hamiltonian, Schrodinger Equation]
-->

For a particle of mass $m$ in a potential $V(x)$, write the one-dimensional Hamiltonian operator $\hat{H}$.

:::solution
The Hamiltonian is

$$
\hat{H} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x)
$$

This is the energy operator used in the one-dimensional Schrodinger equation.
:::

<!--
id: quantum-physics-i-110
note: physics-quantum-physics-i
title: "Check a Two-Level State"
exam: exam-i
skills: [Bra-Ket Notation, Normalization]
-->

Is the state

$$
|\psi\rangle = \frac{3}{5}|0\rangle + \frac{4}{5}|1\rangle
$$

normalized?

:::solution
Check the sum of the squared magnitudes of the coefficients:

$$
\left|\frac{3}{5}\right|^2 + \left|\frac{4}{5}\right|^2
=
\frac{9}{25} + \frac{16}{25}
= 1
$$

So the state is normalized.
:::

<!--
id: quantum-physics-i-21
note: physics-quantum-physics-i
title: "Normalize and Use the Density"
exam: exam-ii
skills: [Normalization, Probability Density]
-->

Let

$$
\psi(x) = Ax
$$

for $0 \le x \le 1$, and $\psi(x)=0$ elsewhere.

Find $A$, then compute the probability of finding the particle in $0 \le x \le \frac{1}{2}$.

:::solution
First normalize:

$$
\int_0^1 |Ax|^2\,dx = 1
$$

$$
A^2 \int_0^1 x^2\,dx = 1
$$

$$
A^2 \cdot \frac{1}{3} = 1
$$

so

$$
A = \sqrt{3}
$$

Now compute the probability on $[0,\frac{1}{2}]$:

$$
P = \int_0^{1/2} |\sqrt{3}x|^2\,dx
$$

$$
P = 3\int_0^{1/2} x^2\,dx
= 3\left[\frac{x^3}{3}\right]_0^{1/2}
= \frac{1}{8}
$$
:::

<!--
id: quantum-physics-i-22
note: physics-quantum-physics-i
title: "Expectation Value on a Finite Interval"
exam: exam-ii
skills: [Expectation Values, Probability Density]
-->

A particle is uniformly distributed on the interval $[0,L]$.

What is the expectation value $\langle x \rangle$?

:::solution
For a uniform distribution on $[0,L]$, the probability density is

$$
|\psi(x)|^2 = \frac{1}{L}
$$

So

$$
\langle x \rangle = \int_0^L x \cdot \frac{1}{L}\,dx
$$

$$
\langle x \rangle = \frac{1}{L}\left[\frac{x^2}{2}\right]_0^L
= \frac{L}{2}
$$
:::

<!--
id: quantum-physics-i-23
note: physics-quantum-physics-i
title: "Scale the Box Width"
exam: exam-ii
skills: [Infinite Square Well, Scaling Laws]
-->

For an infinite square well, the energy levels satisfy

$$
E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}.
$$

If the width of the well doubles, by what factor does each energy level change?

:::solution
Since $E_n \propto \frac{1}{L^2}$, doubling $L$ multiplies the energy by

$$
\frac{1}{2^2} = \frac{1}{4}
$$

So each energy level becomes one-fourth as large.
:::

<!--
id: quantum-physics-i-24
note: physics-quantum-physics-i
title: "Why Position and Momentum Cannot Both Be Sharp"
exam: exam-ii
skills: [Commutators, Uncertainty Principle]
-->

Can position and momentum both be known exactly in the same state? Use the note's operator relation to justify your answer.

:::solution
No. The note gives the canonical commutation relation

$$
[\hat{x},\hat{p}] = i\hbar
$$

Because the operators do not commute, the observables cannot both be sharply defined at the same time. This is summarized by

$$
\Delta x\,\Delta p \ge \frac{\hbar}{2}
$$
:::

<!--
id: quantum-physics-i-25
note: physics-quantum-physics-i
title: "Compare Barrier Widths"
exam: exam-ii
skills: [Tunneling, Exponential Decay]
-->

For a barrier of height $V_0$ and particle energy $E<V_0$, the note says

$$
T \propto e^{-2\kappa a}
$$

where $a$ is the barrier width.

If one barrier has width $a$ and another has width $3a$, what is the ratio of their transmission coefficients?

:::solution
Let $T_a$ be the transmission for width $a$ and $T_{3a}$ for width $3a$.

Then

$$
T_a \propto e^{-2\kappa a}
$$

and

$$
T_{3a} \propto e^{-2\kappa(3a)} = e^{-6\kappa a}
$$

So the ratio is

$$
\frac{T_{3a}}{T_a} = e^{-4\kappa a}
$$
:::

<!--
id: quantum-physics-i-26
note: physics-quantum-physics-i
title: "Separate Time and Space"
exam: exam-ii
skills: [Separation of Variables, Schrodinger Equation, Eigenvalue Equation]
-->

When the potential does not depend on time, the note says we can try a separated solution of the form

$$
\psi(x,t) = \phi(x)T(t).
$$

What equation does the spatial part satisfy?

:::solution
For a time-independent potential, separation of variables leads to the time-independent Schrodinger equation:

$$
\hat{H}\phi = E\phi
$$

So the spatial part is an eigenfunction of the Hamiltonian, and $E$ is the corresponding allowed energy.
:::

<!--
id: quantum-physics-i-27
note: physics-quantum-physics-i
title: "Hydrogen Energy Scaling"
exam: exam-ii
skills: [Hydrogen Atom, Energy Levels]
-->

Hydrogen bound-state energies scale like

$$
E_n \propto -\frac{1}{n^2}.
$$

If the ground-state energy is $E_1$, what is $E_4$ in terms of $E_1$?

:::solution
Using the inverse-square scaling,

$$
E_4 = \frac{E_1}{4^2} = \frac{E_1}{16}
$$

Because the hydrogen energies are negative, $E_4$ is still negative but closer to zero than $E_1$.
:::

<!--
id: quantum-physics-i-28
note: physics-quantum-physics-i
title: "Ground State and Level Spacing of the Harmonic Oscillator"
exam: exam-ii
skills: [Harmonic Oscillator, Quantized Energies]
-->

For the harmonic oscillator,

$$
E_n = \left(n+\frac{1}{2}\right)\hbar\omega.
$$

Find $E_0$, $E_1$, and the spacing between adjacent levels.

:::solution
Substitute $n=0$:

$$
E_0 = \frac{1}{2}\hbar\omega
$$

Substitute $n=1$:

$$
E_1 = \frac{3}{2}\hbar\omega
$$

The spacing is

$$
E_1 - E_0 = \hbar\omega
$$

So the ground state has nonzero energy, and the levels are evenly spaced.
:::

<!--
id: quantum-physics-i-31
note: physics-quantum-physics-i
title: "Photoelectric Threshold"
exam: final
skills: [Photoelectric Effect, Energy Quanta]
-->

A metal has work function $\phi = 2.1\ \text{eV}$.

It is illuminated by photons with energy $h\nu = 3.6\ \text{eV}$.

Will electrons be emitted? If so, what is $K_{\max}$?

:::solution
Since

$$
h\nu > \phi
$$

electrons are emitted.

Use

$$
K_{\max} = h\nu - \phi
$$

So

$$
K_{\max} = 3.6 - 2.1 = 1.5\ \text{eV}
$$
:::

<!--
id: quantum-physics-i-32
note: physics-quantum-physics-i
title: "Why Electron Diffraction Is Quantum"
exam: final
skills: [Electron Diffraction, de Broglie Wavelength]
-->

An experiment produces an interference pattern from a beam of electrons.

What quantum idea from the note explains this, and when does the effect become noticeable?

:::solution
The pattern shows that electrons have wave behavior, captured by the de Broglie relation

$$
\lambda = \frac{h}{p}
$$

The effect becomes noticeable when the wavelength is comparable to the size of the slit spacing, crystal spacing, or other relevant length scale. That is why pure classical trajectories are not enough.
:::

<!--
id: quantum-physics-i-33
note: physics-quantum-physics-i
title: "Choose the Right Semiclassical Approximation"
exam: final
skills: [WKB, Approximation Methods]
-->

A particle moves through a region where its de Broglie wavelength changes slowly compared with the length scale of the potential.

Which approximation idea from the note is appropriate, and what is its basic intuition?

:::solution
The appropriate idea is the WKB approximation.

Its intuition is semiclassical: connect classical motion with quantum phase accumulation when the wavelength changes slowly, rather than solving the full problem exactly.
:::

<!--
id: quantum-physics-i-34
note: physics-quantum-physics-i
title: "Stern-Gerlach Measurements on Different Axes"
exam: final
skills: [Spin, Noncommuting Observables]
-->

An electron is measured to be spin-up along the $z$-axis.

It is then measured along the $x$-axis.

What can you say about the second measurement?

:::solution
The result along $x$ is not predetermined by the first measurement along $z$.

Measurements along different axes generally do not commute, so the first measurement does not fix the second one with certainty. The second outcome is probabilistic.
:::

<!--
id: quantum-physics-i-35
note: physics-quantum-physics-i
title: "Recognize Perturbation Theory"
exam: final
skills: [Perturbation Theory, Approximation Methods]
-->

A Hamiltonian is written as

$$
\hat{H} = \hat{H}_0 + \lambda \hat{V},
$$

where $\lambda$ is small and the solutions of $\hat{H}_0$ are already known.

Which approximation method should you use?

:::solution
Use perturbation theory.

The idea is to start from the known eigenstates and energies of $\hat{H}_0$ and compute small corrections from the additional term $\lambda \hat{V}$.
:::

<!--
id: quantum-physics-i-41
note: physics-quantum-physics-i
title: "Same Probabilities, Different Phase"
exam: final
skills: [Superposition, Phase, Probability]
-->

Consider the two states

$$
|\psi_+\rangle = \frac{|0\rangle + |1\rangle}{\sqrt{2}}
$$

and

$$
|\psi_-\rangle = \frac{|0\rangle - |1\rangle}{\sqrt{2}}.
$$

In the $|0\rangle,|1\rangle$ basis, they give the same measurement probabilities. Why are they still different states?

:::solution
The probabilities of measuring $|0\rangle$ or $|1\rangle$ are the same because the coefficient magnitudes are the same.

However, the relative phase is different. That phase matters when states interfere, so the two states can behave differently under other measurements or later evolution even though the basis probabilities match.
:::

<!--
id: quantum-physics-i-42
note: physics-quantum-physics-i
title: "Normalize an Even Wave Function and Find Its Mean Position"
exam: final
skills: [Normalization, Expectation Values]
-->

Let

$$
\psi(x) = Ae^{-|x|}
$$

for all real $x$.

Find $A$, then compute $\langle x \rangle$.

:::solution
Normalize the wave function:

$$
\int_{-\infty}^{\infty} |\psi(x)|^2\,dx = 1
$$

So

$$
A^2 \int_{-\infty}^{\infty} e^{-2|x|}\,dx = 1
$$

Use symmetry:

$$
\int_{-\infty}^{\infty} e^{-2|x|}\,dx
= 2\int_0^\infty e^{-2x}\,dx
= 2\cdot \frac{1}{2} = 1
$$

Thus

$$
A^2 = 1
$$

and we may take

$$
A = 1
$$

Now compute the expectation value:

$$
\langle x \rangle = \int_{-\infty}^{\infty} x|\psi(x)|^2\,dx
$$

Since $|\psi(x)|^2$ is even, the integrand $x|\psi(x)|^2$ is odd, so the integral is zero:

$$
\langle x \rangle = 0
$$
:::

<!--
id: quantum-physics-i-43
note: physics-quantum-physics-i
title: "Use a Trial Wave Function"
exam: final
skills: [Variational Method, Approximation Methods]
-->

You choose a trial wave function with an adjustable parameter $\alpha$ and compute

$$
E[\psi] = \frac{\langle \psi|\hat{H}|\psi\rangle}{\langle \psi|\psi\rangle}.
$$

What do you do with $\alpha$, and what does the result tell you about the ground-state energy?

:::solution
You vary $\alpha$ to minimize the expected energy.

That is the variational method. The minimized value is an estimate of the ground-state energy, and the note says it gives an upper bound to that energy.
:::

<!--
id: quantum-physics-i-44
note: physics-quantum-physics-i
title: "Why the Harmonic Oscillator Cannot Have Zero Energy"
exam: final
skills: [Uncertainty Principle, Harmonic Oscillator, Zero-Point Energy]
-->

A student says the harmonic oscillator should have zero ground-state energy because the particle could sit at $x=0$ with $p=0$.

Use the note to explain why this is wrong.

:::solution
The uncertainty principle prevents both position and momentum from being exactly known at the same time:

$$
\Delta x\,\Delta p \ge \frac{\hbar}{2}
$$

So the ground state cannot have both $x=0$ and $p=0$ with zero spread.

The oscillator energies are

$$
E_n = \left(n+\frac{1}{2}\right)\hbar\omega
$$

so the ground-state energy is

$$
E_0 = \frac{1}{2}\hbar\omega
$$

which is nonzero.
:::
