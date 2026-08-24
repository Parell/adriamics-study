# Mathematical Mechanics

# Functionals and the calculus of variations

A configuration is specified by generalized coordinates $q_1,\ldots,q_n$. A motion is a path $q_i(t)$ through configuration space. A **functional** assigns a number to an entire path:

$$
J[q]=\int_{t_1}^{t_2}F(q,\dot q,t)\,dt.
$$

An **admissible path** satisfies the endpoint, smoothness, and constraint conditions allowed by the problem. A stationary path has zero first-order change under every permitted small variation; it need not be a minimum.

Write a varied path as $q_\varepsilon=q+\varepsilon\eta$, with $\eta(t_1)=\eta(t_2)=0$. Stationarity means

$$
\left.\frac{d}{d\varepsilon}J[q_\varepsilon]\right|_{\varepsilon=0}=0.
$$

The first variation is

$$
\delta J=\int_{t_1}^{t_2}\left(F_q\eta+F_{\dot q}\dot\eta\right)dt.
$$

Integration by parts and the fundamental lemma of the calculus of variations give the **Eulerâ€“Lagrange equation**:

$$
\boxed{\frac{d}{dt}\frac{\partial F}{\partial\dot q}-\frac{\partial F}{\partial q}=0.}
$$

For several coordinates, apply this equation to every $q_i$. If $F$ does not depend explicitly on $q_i$, then $\partial F/\partial\dot q_i$ is constant; $q_i$ is called cyclic or ignorable.

## Hamiltonâ€™s principle

For a conservative system,

$$
L(q,\dot q,t)=T(q,\dot q)-V(q,t),\qquad S[q]=\int_{t_1}^{t_2}L\,dt.
$$

Hamiltonâ€™s principle says that the physical path makes $S$ stationary among nearby paths with the same endpoints. It is a local first-variation statement, not a claim that nature searches through paths in real time.

### Worked example: pendulum

For a pendulum of length $\ell$ and mass $m$, use angle $\theta$ from the downward vertical:

$$
T=\frac12m\ell^2\dot\theta^2,\qquad V=mg\ell(1-\cos\theta),
$$

so $L=T-V$. Then

$$
\frac{\partial L}{\partial\dot\theta}=m\ell^2\dot\theta,
\qquad \frac{\partial L}{\partial\theta}=-mg\ell\sin\theta.
$$

Eulerâ€“Lagrange gives

$$
\boxed{\ddot\theta+\frac g\ell\sin\theta=0.}
$$

For small angles, $\sin\theta\approx\theta$, so the motion is simple harmonic with $\omega_0=\sqrt{g/\ell}$.

# Constraints and generalized forces

A constraint removes possible configurations or velocities.

- A **holonomic** constraint can be written $f_a(q,t)=0$.
- A **nonholonomic** constraint restricts differentials or velocities without necessarily integrating to a position equation.
- An ideal constraint does no virtual work for allowed virtual displacements.

A virtual displacement $\delta q$ is an imagined instantaneous displacement at fixed time that respects the constraints. If

$$
\delta W=\sum_i\mathbf F_i\cdot\delta\mathbf r_i=\sum_jQ_j\delta q_j,
$$

then $Q_j$ is the generalized force conjugate to $q_j$:

$$
Q_j=\sum_i\mathbf F_i\cdot\frac{\partial\mathbf r_i}{\partial q_j}.
$$

It need not have units of newtons; it has units of energy divided by the units of $q_j$. With nonconservative applied forces,

$$
\frac{d}{dt}\frac{\partial L}{\partial\dot q_j}-\frac{\partial L}{\partial q_j}=Q_j^{(nc)}.
$$

For holonomic constraints, introduce multipliers:

$$
L^*=L+\sum_a\lambda_af_a(q,t).
$$

Variation with respect to $\lambda_a$ recovers the constraints; the multiplier equations encode the reaction forces. Eliminate coordinates when only the motion is wanted, and use multipliers when reaction forces are important.

# Symmetry and Noetherâ€™s theorem

A continuous symmetry is a smooth transformation that leaves the action unchanged, or changes $L$ only by a total time derivative. Noetherâ€™s theorem turns each such symmetry into a conserved quantity. For an infinitesimal change $q_i\mapsto q_i+\varepsilon\Delta q_i$ with no boundary contribution,

$$
\mathcal Q=\sum_i p_i\Delta q_i,\qquad p_i=\frac{\partial L}{\partial\dot q_i}
$$

is conserved. The most useful cases are:

| Symmetry | Conserved quantity |
|---|---|
| spatial translation | linear momentum |
| rotation | angular momentum |
| time translation | energy |

If $L$ has no explicit time dependence,

$$
E=\sum_i\dot q_i\frac{\partial L}{\partial\dot q_i}-L
$$

is constant. For $L=T-V$ with a velocity-independent potential, this is $T+V$. Explicit time dependence or an external drive can break this conservation law.

# Hamiltonian mechanics

Define canonical momentum and the Legendre transform:

$$
p_i=\frac{\partial L}{\partial\dot q_i},\qquad H(q,p,t)=\sum_ip_i\dot q_i-L.
$$

The velocityâ€“momentum relation must be invertible before $H$ is a regular Hamiltonian. In phase space, Hamiltonâ€™s equations are

$$
\boxed{\dot q_i=\frac{\partial H}{\partial p_i},\qquad \dot p_i=-\frac{\partial H}{\partial q_i}.}
$$

For $L=\tfrac12m\dot x^2-V(x)$,

$$
p=m\dot x,\qquad H=\frac{p^2}{2m}+V(x).
$$

The Hamiltonian is often total energy, but that identification must be checked for time-dependent coordinates, velocity-dependent potentials, and electromagnetic systems.

# Poisson brackets

For phase-space functions $f(q,p,t)$ and $g(q,p,t)$,

$$
\boxed{\{f,g\}=\sum_i\left(f_{q_i}g_{p_i}-f_{p_i}g_{q_i}\right).}
$$

The fundamental brackets are $\{q_i,q_j\}=0$, $\{p_i,p_j\}=0$, and $\{q_i,p_j\}=\delta_{ij}$. Time evolution is

$$
\frac{df}{dt}=\{f,H\}+\frac{\partial f}{\partial t}.
$$

Thus $f$ is conserved when $\{f,H\}+f_t=0$. The bracket is bilinear, antisymmetric, obeys the product rule, and satisfies the Jacobi identity:

$$
\{f,\{g,h\}\}+\{g,\{h,f\}\}+\{h,\{f,g\}\}=0.
$$

For $H=p^2/(2m)+V(x)$, $\{p,H\}=-V'(x)$, recovering Newtonâ€™s law.

# Canonical transformations

A transformation $(q,p)\mapsto(Q,P)$ is canonical when it preserves Hamiltonâ€™s equations and the symplectic structure. A practical test is preservation of the fundamental brackets:

$$
\{Q_i,Q_j\}=0,\quad\{P_i,P_j\}=0,\quad\{Q_i,P_j\}=\delta_{ij}.
$$

A type-2 generating function $F_2(q,P,t)$ defines

$$
p_i=\frac{\partial F_2}{\partial q_i},\qquad Q_i=\frac{\partial F_2}{\partial P_i},\qquad K=H+\frac{\partial F_2}{\partial t}.
$$

The identity choice $F_2=\sum_iq_iP_i$ gives $Q=q$ and $P=p$. A time-dependent transformation changes the Hamiltonian to $K$, so the old $H$ cannot simply be reused.

# Hamiltonâ€“Jacobi theory

Hamiltonâ€™s principal function $S(q,t)$ is a generating function chosen so that the new momenta and Hamiltonian are constants. It satisfies the **Hamiltonâ€“Jacobi equation**:

$$
\boxed{H\left(q,\frac{\partial S}{\partial q},t\right)+\frac{\partial S}{\partial t}=0.}
$$

For a time-independent Hamiltonian, set $S=W(q)-Et$ to obtain

$$
H\left(q,\frac{\partial W}{\partial q}\right)=E.
$$

For one particle,

$$
\frac{1}{2m}\left(\frac{dW}{dx}\right)^2+V(x)=E,
$$

so $dW/dx=p(x)=\pm\sqrt{2m(E-V(x))}$. Separation can reduce trajectory finding to quadratures and connects mechanics to geometric optics and semiclassical quantum mechanics.

# Common mistakes and workflow

- A stationary action need not be a minimum; maxima and saddle points also satisfy Eulerâ€“Lagrange.
- Fixed endpoints mean the variation vanishes there.
- Do not confuse partial derivatives with the total derivative in Eulerâ€“Lagrange.
- â€œIdeal constraintâ€ means zero virtual work, not necessarily zero real work in every motion.
- Generalized forces have coordinate-dependent units.
- Check the Legendre transform before calling $H$ equal to $T+V$.
- Conservation laws require the corresponding symmetry; explicit time or coordinate dependence can break them.
- Preserve the sign in the Poisson bracket and canonical equations.
- In Hamiltonâ€“Jacobi theory, retain both $H(q,\nabla S,t)$ and $\partial S/\partial t$.

Workflow: list coordinates and constraints; state assumptions; build $T$, $V$, and $L$; apply Eulerâ€“Lagrange; search for cyclic coordinates and symmetries; then check dimensions, limits, and agreement with Newtonian mechanics.

# Formula sheet and summary

$$
\frac{d}{dt}F_{\dot q}-F_q=0,\quad L=T-V,\quad p_i=L_{\dot q_i},\quad H=\sum_ip_i\dot q_i-L
$$

$$
\dot q_i=H_{p_i},\quad\dot p_i=-H_{q_i},\quad\dot f=\{f,H\}+f_t,\quad H(q,\nabla S,t)+S_t=0
$$

Newton emphasizes forces, Lagrange emphasizes stationary action and configuration space, and Hamilton emphasizes flow in phase space. These are complementary descriptions of the same classical dynamics when their assumptions are satisfied.

# Practice problems

1. Derive the equation of motion from $L=\tfrac12m\dot x^2-V(x)$.
2. If $L$ does not contain $\theta$, identify the conserved quantity.
3. For $H=p^2/(2m)+kx^2/2$, find $\dot x$ and $\dot p$.
4. Compute $\{x,p^2\}$.
5. Test whether $Q=q$ and $P=p+aq$ is canonical.
6. For a free particle, find a separated $S(x,t)$ with constant momentum $p_0$.

## Short solutions

1. $m\ddot x=-V'(x)$.
2. $p_\theta=\partial L/\partial\dot\theta$ is constant.
3. $\dot x=p/m$ and $\dot p=-kx$.
4. $\{x,p^2\}=2p$.
5. $\{Q,P\}=\{q,p+aq\}=1$ and the remaining fundamental brackets vanish, so it is canonical.
6. $S=p_0x-p_0^2t/(2m)+C$, since $E=p_0^2/(2m)$.

# Recommended next topics

- Differential geometry and symplectic manifolds
- Rigid-body dynamics and Euler angles
- Continuum mechanics and field-theoretic Lagrangians
- Perturbation theory and actionâ€“angle variables

## Sources

- Taylor, *Classical Mechanics*
- Goldstein, Poole, and Safko, *Classical Mechanics*
- Lanczos, *The Variational Principles of Mechanics*
- [MIT OpenCourseWare: Classical Mechanics](https://ocw.mit.edu/courses/8-223-classical-mechanics-fall-1998/)
