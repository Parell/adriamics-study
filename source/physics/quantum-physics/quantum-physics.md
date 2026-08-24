# Quantum Physics

# Classical limits and why quantum theory is needed

Classical physics works well when the action scale is large compared with Planck's constant:

$$
\hbar = \frac{h}{2\pi}
$$

Quantum effects become important when:

- The system size is comparable to the de Broglie wavelength.
- Energy levels are discrete rather than continuous.
- Measurement disturbs the system at a non-negligible scale.
- Interference and tunneling are observable.

## Empirical clues

### Blackbody radiation

Classical theory predicted the ultraviolet catastrophe. Planck resolved this by assuming energy exchange occurs in quanta:

$$
E = nh\nu
$$

### Photoelectric effect

Light ejects electrons only above a threshold frequency. The maximum electron kinetic energy depends on frequency, not intensity:

$$
K_{\max} = h\nu - \phi
$$

where $\phi$ is the work function.

### Atomic spectra

Atoms emit and absorb only specific frequencies, indicating discrete energy differences.

### Electron diffraction

Particles show interference, which cannot be explained by purely classical trajectories.

---

# Wave functions and probability

The state of a one-dimensional particle is often written as $\psi(x,t)$.

The probability density is

$$
P(x,t) = |\psi(x,t)|^2
$$

and the probability of finding the particle in an interval $[a,b]$ is

$$
\int_a^b |\psi(x,t)|^2\,dx
$$

## Normalization

A physically acceptable wave function must satisfy

$$
\int_{-\infty}^{\infty} |\psi(x,t)|^2\,dx = 1
$$

If a trial function is not normalized, multiply by a constant $A$ and solve for $A$ using the normalization condition.

## Acceptable wave functions

Typical requirements:

- Single-valued
- Finite
- Continuous
- Usually have a continuous first derivative unless the potential is singular or discontinuous

## Expectation values

The average value of position is

$$
\langle x \rangle = \int_{-\infty}^{\infty} x |\psi(x,t)|^2\,dx
$$

More generally, for an operator $\hat{A}$,

$$
\langle A \rangle = \int \psi^*(x,t)\,\hat{A}\,\psi(x,t)\,dx
$$

Expectation values are weighted averages over measurement outcomes.

---

# Schrodinger equation

The time-dependent Schrodinger equation governs state evolution:

$$
i\hbar \frac{\partial \psi}{\partial t} = \hat{H}\psi
$$

where $\hat{H}$ is the Hamiltonian operator, the total energy operator.

For a nonrelativistic particle in a potential $V(x,t)$,

$$
\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V
$$

In one dimension:

$$
i\hbar \frac{\partial \psi}{\partial t}
=
\left(-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x,t)\right)\psi
$$

## Time-independent form

If the potential does not depend on time, use separation of variables:

$$
\psi(x,t) = \phi(x)T(t)
$$

This yields the time-independent Schrodinger equation:

$$
\hat{H}\phi = E\phi
$$

The allowed energies are the eigenvalues $E$.

## Interpretation

The time-independent equation is an eigenvalue problem:

- $\phi$ is an energy eigenstate.
- $E$ is the corresponding allowed energy.
- Boundary conditions quantize the allowed solutions in many systems.

This is the main source of quantization in introductory quantum mechanics.

---

# Operators, observables, and measurement

An observable is represented by a linear operator. For common one-dimensional problems:

$$
\hat{x} = x
$$

$$
\hat{p} = -i\hbar \frac{d}{dx}
$$

$$
\hat{E} = i\hbar \frac{\partial}{\partial t}
$$

$$
\hat{H} = \frac{\hat{p}^2}{2m} + V
$$

## Eigenvalue equation

If

$$
\hat{A}\phi = a\phi
$$

then $\phi$ is an eigenstate of $\hat{A}$ and $a$ is a possible measured value.

## Hermitian operators

Physical observables correspond to Hermitian operators because they have real eigenvalues and orthogonal eigenstates.

## Commutators

The commutator is

$$
[\hat{A},\hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}
$$

If two observables commute, they can often be simultaneously measured with arbitrary precision.

The canonical commutation relation is

$$
[\hat{x},\hat{p}] = i\hbar
$$

This relation underlies the uncertainty principle.

---

# Uncertainty and superposition

The Heisenberg uncertainty principle states

$$
\Delta x\,\Delta p \ge \frac{\hbar}{2}
$$

More generally, non-commuting observables cannot both be sharply defined in the same state.

## Physical meaning

This is not caused by bad instruments. It is a statement about the structure of quantum states.

## Superposition

If $\psi_1$ and $\psi_2$ are allowed states, then

$$
\psi = c_1\psi_1 + c_2\psi_2
$$

is also an allowed state.

Superposition leads to interference because amplitudes add before probabilities are computed.

## Relative phase

Two states with the same probabilities can behave differently if their phases differ. Phase matters whenever states interfere.

---

# Standard model problems

Introductory courses repeatedly use a small set of solvable systems. Mastering their boundary conditions and eigenstates is the fastest way to build skill.

## Infinite square well

For $0 < x < L$ with $V(x)=0$ and infinite walls outside:

$$
\psi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right)
$$

$$
E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}, \quad n=1,2,3,\dots
$$

Key lesson: boundary conditions create discrete energies.

## Finite potential step

A particle approaching a step may be partly reflected even if its classical energy exceeds the barrier height. For $E<V_0$, the wave decays exponentially inside the barrier.

## Potential barrier and tunneling

For a barrier of height $V_0$ and width $a$, the transmitted wave can be nonzero even when $E<V_0$.

Approximate tunneling behavior:

$$
T \propto e^{-2\kappa a}
$$

with

$$
\kappa = \frac{\sqrt{2m(V_0-E)}}{\hbar}
$$

Tunneling is essential in alpha decay, scanning tunneling microscopy, and semiconductor devices.

## Harmonic oscillator

The potential is

$$
V(x)=\frac{1}{2}m\omega^2x^2
$$

Allowed energies are

$$
E_n = \left(n+\frac{1}{2}\right)\hbar\omega, \quad n=0,1,2,\dots
$$

The ground state has nonzero energy:

$$
E_0 = \frac{1}{2}\hbar\omega
$$

This is zero-point energy.

## Hydrogen atom

The Coulomb potential gives discrete bound states with principal quantum number $n$.

Energy levels scale as

$$
E_n \propto -\frac{1}{n^2}
$$

The hydrogen atom explains the origin of atomic spectra and quantum numbers.

---

# Spin and two-level systems

Spin is an intrinsic quantum degree of freedom with no classical analog. For an electron, spin-$\tfrac{1}{2}$ means the measured spin projection along an axis takes only two values:

$$
\pm \frac{\hbar}{2}
$$

## Bra-ket notation

States are often written as kets, such as

$$
|\psi\rangle
$$

An inner product is written

$$
\langle \phi | \psi \rangle
$$

and probabilities are built from these amplitudes.

## Basis states

For a two-state system:

$$
|\psi\rangle = a|0\rangle + b|1\rangle
$$

with

$$
|a|^2 + |b|^2 = 1
$$

This framework applies to spin, polarization, and qubit models.

## Stern-Gerlach intuition

Measurements along one axis project the state into one of the allowed eigenstates for that axis. Measurements along different axes generally do not commute.

---

# Approximation methods

Many realistic quantum systems do not have closed-form solutions. Introductory courses usually emphasize a few approximation ideas.

## Perturbation theory

If

$$
\hat{H} = \hat{H}_0 + \lambda \hat{V}
$$

and $\lambda$ is small, start from the known solutions of $\hat{H}_0$ and compute corrections.

## Variational method

Choose a trial wave function with adjustable parameters and minimize the expected energy:

$$
E[\psi] = \frac{\langle \psi|\hat{H}|\psi\rangle}{\langle \psi|\psi\rangle}
$$

This gives an upper bound to the ground-state energy.

## WKB idea

When the de Broglie wavelength changes slowly, semiclassical approximations can estimate tunneling and quantization.

The basic intuition is to connect classical motion with quantum phase accumulation.

---

# Problem-solving workflow

1. Identify the physical system and the relevant potential.
2. Decide whether the problem is time-dependent or time-independent.
3. Write the Hamiltonian and the correct boundary conditions.
4. Solve the differential equation or eigenvalue problem.
5. Normalize the wave function.
6. Compute observables using expectation values or measurement rules.
7. Check units, limits, and physical interpretation.

## Practical checks

- If the answer should be discrete, verify the boundary conditions force quantization.
- If the state is a superposition, compute probabilities from amplitudes before combining them.
- If a result has exponential decay, check whether it is a barrier or evanescent-wave problem.
- If the system is finite, verify normalization.

## Example workflow: infinite well

1. Set $V=0$ inside the well and $V=\infty$ outside.
2. Impose $\psi(0)=\psi(L)=0$.
3. Solve the sinusoidal differential equation.
4. Keep only the allowed integer modes.
5. Normalize the eigenfunctions.
6. Use $E_n$ to answer questions about level spacing and transitions.

---

# Common pitfalls

- Confusing the wave function with a literal particle trajectory.
- Treating $|\psi|^2$ as the wave function itself instead of the probability density.
- Forgetting to normalize before computing probabilities or expectation values.
- Using the wrong operator for momentum or energy.
- Mixing up state evolution with measurement outcomes.
- Ignoring boundary conditions, which often determine the allowed energies.
- Assuming quantum systems must have zero energy in the ground state.
- Applying classical intuition to tunneling or interference without checking the wavelength scale.

## Units to check

- $\hbar$ has units of JÃ‚Â·s.
- Momentum operator introduces $1/\text{length}$.
- Energy eigenvalues must have units of energy.
- Probability is dimensionless.

---

# Formula summary

## Fundamental relations

$$
E = h\nu = \hbar\omega
$$

$$
\lambda = \frac{h}{p}
$$

$$
i\hbar \frac{\partial \psi}{\partial t} = \hat{H}\psi
$$

$$
\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V
$$

$$
|\psi|^2 = \text{probability density}
$$

$$
\int |\psi|^2\,dx = 1
$$

$$
\langle A \rangle = \int \psi^* \hat{A}\psi\,dx
$$

$$
\Delta x\,\Delta p \ge \frac{\hbar}{2}
$$

## Canonical operators

$$
\hat{x}=x,\qquad \hat{p}=-i\hbar\frac{d}{dx}
$$

## Common model energies

$$
E_n^{\text{well}} = \frac{n^2\pi^2\hbar^2}{2mL^2}
$$

$$
E_n^{\text{osc}} = \left(n+\frac{1}{2}\right)\hbar\omega
$$

## Barrier scale

$$
\kappa = \frac{\sqrt{2m(V_0-E)}}{\hbar}
$$

$$
T \propto e^{-2\kappa a}
$$

---

## Mental model

When solving quantum problems, keep the following sequence in mind:

**state -> operator -> boundary conditions -> eigenvalues -> probabilities -> interpretation**

That order prevents most beginner mistakes and matches how the theory is actually used in practice.

## Sources

- [OpenStax University Physics](https://openstax.org/subjects/science)
- [Physics LibreTexts](https://phys.libretexts.org/)
- Halliday, Resnick, and Walker, *Fundamentals of Physics*
- Serway and Jewett, *Physics for Scientists and Engineers*
- Griffiths, *Introduction to Electrodynamics*
- Griffiths, *Introduction to Quantum Mechanics*
- Taylor, *Classical Mechanics*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
