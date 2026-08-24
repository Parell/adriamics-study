# Partial Differential Equations

Partial differential equations (PDEs) describe how an unknown quantity changes with respect to **several independent variables**. A temperature field $T(x,y,z,t)$, a pressure field $p(x,y,z,t)$, and a displacement field $u(x,t)$ are typical examples. PDEs matter because conservation of mass, momentum, energy, and charge almost always produces fields rather than single numbers.

This note develops the core language of PDEs, the classification of second-order equations, initial and boundary conditions, separation of variables, the wave, heat, and Laplace equations, well-posedness, and conservation laws. The emphasis is on the one-dimensional and rectangular-domain cases that make the ideas transparent; real geometries usually require numerical methods.

# Derivative language and common operators

The **gradient** collects first spatial derivatives of a scalar field:

$$
\nabla u = \begin{bmatrix}u_x\\u_y\\u_z\end{bmatrix}.
$$

It points in the direction of greatest local increase of $u$. The **divergence** of a vector field $\mathbf{q}=(q_x,q_y,q_z)$ measures net outward flow per unit volume:

$$
\nabla\cdot\mathbf{q}=\frac{\partial q_x}{\partial x}+\frac{\partial q_y}{\partial y}+\frac{\partial q_z}{\partial z}.
$$

The **Laplacian** is the divergence of the gradient:

$$
\nabla^2u=\nabla\cdot(\nabla u)=u_{xx}+u_{yy}+u_{zz}.
$$

It measures local curvature. A positive Laplacian means, in a coordinate-independent sense, that the field is locally below the average of its nearby values; the exact visual interpretation depends on the dimension and direction.

## Chain rule along a moving path

If a field $u(x,t)$ is observed by an object moving as $x=x(t)$, then

$$
\frac{d}{dt}u(x(t),t)=u_t+\frac{dx}{dt}u_x.
$$

Writing $v=dx/dt$ gives $u_t+v u_x$, the one-dimensional **material derivative**. It distinguishes change at a fixed location from change carried by motion.

---

# Classification of second-order PDEs

Consider a two-variable linear second-order PDE whose highest-order part is

$$
A u_{xx}+2B u_{xy}+C u_{yy}+\text{lower-order terms}=0.
$$

The discriminant

$$
\Delta=B^2-AC
$$

classifies the equation locally:

| Type | Condition | Typical behavior | Canonical example |
|---|---:|---|---|
| Elliptic | $\Delta<0$ | spatial equilibrium; smoothing | $u_{xx}+u_{yy}=0$ |
| Parabolic | $\Delta=0$ | diffusion; one-way time evolution | $u_t-\alpha u_{xx}=0$ |
| Hyperbolic | $\Delta>0$ | finite-speed propagation; waves | $u_{tt}-c^2u_{xx}=0$ |

The classification is about the principal, highest-derivative terms. Lower-order terms can change details without changing the local type.

## Why the types behave differently

- **Elliptic:** values are coupled throughout the domain. Boundary data determine an equilibrium field.
- **Parabolic:** the field smooths as time advances. Initial data and suitable boundary data determine the future.
- **Hyperbolic:** information travels along characteristic paths at finite speeds. Initial data are propagated, and boundaries must respect incoming information.

For a general equation $a u_{xx}+b u_{xy}+c u_{yy}=0$, the convention without the factor $2$ uses $\Delta=b^2-4ac$. Both conventions agree if used consistently.

## Characteristics and information speed

Characteristics are curves along which the PDE behaves like an ODE or along which disturbances travel. For the wave equation, they are

$$
x-ct=\text{constant},\qquad x+ct=\text{constant}.
$$

Thus a disturbance travels right or left at speed $c$; it does not instantly affect the entire domain.

---

# Conditions needed to define a problem

Writing a PDE alone usually does not select one solution. A complete problem includes a domain, the PDE, and data on the boundary and/or at an initial time.

## Initial conditions

An **initial condition** specifies the field at a starting time, commonly

$$
u(x,0)=f(x).
$$

For a second-order time equation, two initial conditions are usually needed:

$$
u(x,0)=f(x),\qquad u_t(x,0)=g(x).
$$

The second condition is analogous to specifying initial velocity in mechanics.

## Boundary conditions

For a domain $0<x<L$, common boundary conditions are:

| Name | Condition | Interpretation |
|---|---|---|
| Dirichlet | $u(0,t)=a(t)$ | prescribe the field value |
| Neumann | $u_x(0,t)=b(t)$ or $\partial u/\partial n=b$ | prescribe slope or flux |
| Robin | $a u+b u_x=g(t)$ | combine value and flux |
| Periodic | $u(0,t)=u(L,t)$ and $u_x(0,t)=u_x(L,t)$ | join the ends smoothly |

Here $n$ is the outward unit normal, and $\partial u/\partial n=\nabla u\cdot\mathbf{n}$.

For heat conduction, Fourier's law is

$$
\mathbf{q}=-k\nabla T,
$$

where $\mathbf{q}$ is heat flux in W/m$^2$, $k$ is thermal conductivity in W/(m K), and $T$ is temperature in K. Therefore a Neumann condition on heat flux is a condition on $-k\partial T/\partial n$, not merely on $T_x$.

## Compatibility conditions

Data must agree where initial and boundary surfaces meet. If $u(x,0)=f(x)$ and $u(0,t)=a(t)$, then a classical solution requires

$$
f(0)=a(0).
$$

Higher smoothness may require compatibility of derivatives too. Violating compatibility can create corner singularities even when the PDE is otherwise well behaved.

## Well-posedness

Hadamard's criteria say a problem is **well-posed** if:

1. a solution exists;
2. it is unique;
3. it depends continuously on the data.

The third condition means small measurement or rounding errors produce only small solution changes. A problem that fails one of these is ill-posed and needs extra constraints, regularization, or a different interpretation.

---

# Conservation laws and the divergence theorem

Many physical PDEs begin with a balance law. Let $u(\mathbf{x},t)$ be density per unit volume, $\mathbf{J}$ its flux, and $s$ a source per unit volume. Conservation over a fixed control volume $V$ says

$$
\frac{d}{dt}\int_V u\,dV=-\int_{\partial V}\mathbf{J}\cdot\mathbf{n}\,dS+\int_V s\,dV.
$$

The negative sign means outward flux decreases what remains inside. Using the divergence theorem,

$$
\int_{\partial V}\mathbf{J}\cdot\mathbf{n}\,dS=\int_V\nabla\cdot\mathbf{J}\,dV.
$$

If $V$ is arbitrary, the local conservation equation is

$$
\boxed{u_t+\nabla\cdot\mathbf{J}=s.}
$$

This equation is the mathematical form of â€œrate of accumulation = sources âˆ’ net outflow.â€

## Constitutive laws produce PDEs

Conservation alone does not determine the flux. A constitutive law closes the model:

- diffusion: $\mathbf{J}=-D\nabla u$, where $D$ may depend on position or state
- heat conduction: $\mathbf{q}=-k\nabla T$
- electrical conduction: $\mathbf{J}_e=\sigma\mathbf{E}$

For diffusion, substituting $\mathbf{J}=-D\nabla u$ into the conservation law with source $s$ gives

$$
u_t=\nabla\cdot(D\nabla u)+s.
$$

If $D$ is constant, this reduces to $u_t=D\nabla^2u+s$. The minus sign in Fick's law makes flux point down the concentration gradient, producing smoothing.

---

# Separation of variables

Separation of variables assumes a product form, such as

$$
u(x,t)=X(x)G(t).
$$

This does not describe every individual solution. It finds building-block solutions; linear combinations of many such modes can represent a general initial condition.

## Heat equation derivation

Consider

$$
u_t=\alpha u_{xx},\qquad 0<x<L,
$$

with fixed-end conditions $u(0,t)=u(L,t)=0$. The diffusivity $\alpha$ has units m$^2$/s.

Set $u=XG$. Then

$$
XG'=\alpha X''G.
$$

Divide by $\alpha XG$ where nonzero:

$$
\frac{G'}{\alpha G}=\frac{X''}{X}.
$$

The left side depends only on $t$ and the right side only on $x$, so both must equal a constant. Choosing $-\lambda$ gives

$$
G'+\alpha\lambda G=0,
\qquad X''+\lambda X=0.
$$

The boundary conditions require $X(0)=X(L)=0$. Nontrivial solutions occur for

$$
\lambda_n=\left(\frac{n\pi}{L}\right)^2,
\qquad X_n(x)=\sin\left(\frac{n\pi x}{L}\right),
$$

where $n=1,2,3,\ldots$. The time factor is

$$
G_n(t)=e^{-\alpha(n\pi/L)^2t}.
$$

Therefore the general Fourier-series solution is

$$
u(x,t)=\sum_{n=1}^{\infty}b_n e^{-\alpha(n\pi/L)^2t}
\sin\left(\frac{n\pi x}{L}\right),
$$

where the coefficients match $u(x,0)=f(x)$:

$$
b_n=\frac{2}{L}\int_0^L f(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
$$

The physical meaning is important: each spatial mode decays exponentially, and higher-frequency modes decay faster because their curvature is larger.

---

# The heat equation

The heat equation models temperature diffusion in a stationary material with constant properties and no internal heat generation:

$$
\boxed{T_t=\alpha\nabla^2T},
\qquad \alpha=\frac{k}{\rho c_p}.
$$

Here $k$ is conductivity [W/(m K)], $\rho$ is density [kg/m$^3$], $c_p$ is specific heat [J/(kg K)], and $\alpha$ is thermal diffusivity [m$^2$/s].

The equation follows from energy conservation. In one dimension, internal energy changes as $\rho c_pT_t$, while conduction gives $kT_{xx}$, so

$$
\rho c_pT_t=kT_{xx}\quad\Longrightarrow\quad T_t=\frac{k}{\rho c_p}T_{xx}.
$$

## Example: first-mode cooling

For a steel slab, take $L=0.020$ m and $\alpha=1.2\times10^{-5}$ m$^2$/s. The first-mode decay time is

$$
\tau_1=\frac{1}{\alpha(\pi/L)^2}
\approx 10.8\text{ s}.
$$

After $t=30$ s, the first mode is multiplied by

$$
e^{-30/10.8}\approx 0.062.
$$

The result is not â€œthe slab reaches equilibrium in 30 sâ€; it says the first Fourier component has fallen to about $6.2\%$. Boundary conditions, geometry, and the initial shape still matter.

## Idealization and limitations

The basic equation assumes a continuum, local thermal equilibrium, constant $k$, $\rho$, and $c_p$, and negligible radiation and convection unless represented in boundary conditions. At very small scales, during phase changes, or with strong temperature dependence, the model must be modified.

---

# The wave equation

The one-dimensional wave equation is

$$
\boxed{u_{tt}=c^2u_{xx}}.
$$

The field $u(x,t)$ may be string displacement, acoustic pressure in a simplified model, or another disturbance. The constant $c$ is wave speed [m/s]. For a stretched string,

$$
c=\sqrt{\frac{\mathcal{T}}{\mu}},
$$

where $\mathcal{T}$ is tension [N] and $\mu$ is mass per length [kg/m].

## Derivation for a string element

For a small element of length $\Delta x$, small-slope geometry gives the net vertical force approximately

$$
\mathcal{T}\left(u_x(x+\Delta x,t)-u_x(x,t)\right)
\approx \mathcal{T}u_{xx}\Delta x.
$$

Its mass is $\mu\Delta x$, and Newton's law gives

$$
\mu\Delta x\,u_{tt}=\mathcal{T}u_{xx}\Delta x.
$$

Canceling $\Delta x$ yields $u_{tt}=(\mathcal{T}/\mu)u_{xx}$.

## D'Alembert solution

On an infinite string, the solution is

$$
u(x,t)=F(x-ct)+G(x+ct),
$$

representing right- and left-traveling waves. A waveform is transported without the diffusive smoothing of the heat equation. Boundaries reflect waves and create standing-wave modes.

For fixed ends, the separated modes are

$$
u_n(x,t)=\left[A_n\cos\left(\frac{n\pi ct}{L}\right)+B_n\sin\left(\frac{n\pi ct}{L}\right)\right]
\sin\left(\frac{n\pi x}{L}\right).
$$

The time factor oscillates rather than decays. In real systems damping, nonlinear stiffness, and energy loss add terms such as $2\beta u_t$.

---

# Laplace's equation

Laplace's equation is

$$
\boxed{\nabla^2u=0.}
$$

It is elliptic and commonly describes steady temperature without internal generation, electrostatic potential in charge-free regions, and incompressible potential flow.

If a field is steady, $u_t=0$. Starting from the heat equation with no source gives $\nabla^2T=0$. Thus Laplace's equation is often the long-time equilibrium limit of diffusion.

## Mean-value property and maximum principle

For harmonic functions, the value at an interior point equals the average over a surrounding circle or sphere, under suitable smoothness. A related maximum principle says a nonconstant solution cannot attain its maximum or minimum strictly inside a bounded domain; extrema occur on the boundary. This explains why boundary data control the interior and why interior oscillations are smoothed.

## Poisson equation

With a source, the corresponding elliptic equation is

$$
\nabla^2u=f(\mathbf{x}),
$$

called Poisson's equation. For electrostatics, sign and constants depend on the convention for electric potential and charge density; the structural idea is that sources create curvature.

---

# A worked separation example

Solve the heat equation on $0<x<1$ m with zero end temperatures and initial profile

$$
u(x,0)=10\sin(\pi x)+4\sin(3\pi x),
\qquad \alpha=0.01\ \text{m}^2/\text{s}.
$$

The initial profile already consists of two eigenmodes, so no integral is needed to find coefficients. The solution is

$$
u(x,t)=10e^{-0.01\pi^2t}\sin(\pi x)+4e^{-0.09\pi^2t}\sin(3\pi x).
$$

At $t=2$ s,

$$
e^{-0.01\pi^2(2)}\approx0.821,
\qquad e^{-0.09\pi^2(2)}\approx0.170.
$$

The first mode has amplitude about $8.21$, while the third has amplitude about $0.68$. The higher spatial oscillation has nearly disappeared relative to the fundamental mode. This is the signature of diffusion.

---

# Numerical PDEs and real engineering systems

Closed-form solutions are special. Engineers commonly discretize space and solve a large algebraic system.

## Finite differences

On a grid $x_i=i\Delta x$, $t^n=n\Delta t$, central curvature is approximated by

$$
u_{xx}(x_i,t^n)\approx\frac{u_{i+1}^n-2u_i^n+u_{i-1}^n}{\Delta x^2}.
$$

Forward Euler time stepping for the heat equation gives

$$
u_i^{n+1}=u_i^n+r\left(u_{i+1}^n-2u_i^n+u_{i-1}^n\right),
\qquad r=\frac{\alpha\Delta t}{\Delta x^2}.
$$

For this explicit one-dimensional scheme, stability requires $r\le 1/2$ under the standard fixed-grid assumptions. This is a numerical restriction, not a physical law.

## Finite elements and finite volumes

- **FEM** uses weighted residuals and basis functions. It handles irregular geometry, material interfaces, and structural mechanics particularly well.
- **Finite volume** integrates conservation laws over control volumes. Fluxes cancel between neighboring cells, making conservation explicit; it is common in CFD.
- **CFD** solves fluid PDEs such as mass, momentum, and energy conservation, often with turbulence models and nonlinear advection.

## Model hierarchy

An engineering model may ignore effects intentionally:

| Model | Often neglected |
|---|---|
| 1-D heat equation | lateral conduction and 3-D geometry |
| linear wave equation | damping, nonlinear material response |
| incompressible flow | density variations and acoustic waves |
| Laplace equation | transient behavior and internal sources |

Validate assumptions with dimensionless groups, experiments, mesh refinement, and comparison to measured data. A converged numerical answer can still be wrong if the PDE or boundary conditions are wrong.

## Connections to related subjects

- **Mechanics:** continuum momentum balance produces elastodynamics, beam, plate, and Navierâ€“Stokes PDEs.
- **Thermodynamics and heat transfer:** energy balance plus Fourier's law produces diffusion.
- **Electromagnetism:** Maxwell's equations are coupled PDEs for electric and magnetic fields.
- **Control:** distributed-parameter systems, such as flexible beams and thermal plants, have PDE states; model reduction turns them into ODE approximations.
- **Materials:** conductivity, diffusivity, stiffness, and permeability may vary with position or temperature.
- **Numerical methods:** stability, consistency, and convergence connect discretization to reliable computation.
- **FEM and CFD:** weak forms, meshes, fluxes, stabilization, and iterative solvers are practical PDE tools.
- **Machine learning:** neural operators and physics-informed neural networks can approximate solution maps, but they do not remove the need for correct physics, boundary data, and validation.

---

# Common misconceptions and mistakes

- **â€œThe PDE is the solution.â€** The PDE is only the governing relation; domain and data are essential.
- **â€œParabolic means a parabola.â€** The classification describes information and smoothing behavior, not graph shape.
- **â€œA Neumann condition gives the value.â€** It gives a normal derivative or flux.
- **â€œSeparation of variables always works.â€** It requires compatible geometry, boundary conditions, and linear structure; otherwise use another method.
- **â€œHeat travels instantly, so the equation is physically exact.â€** The classical heat equation has mathematically infinite propagation speed. It is an excellent macroscopic approximation in many regimes, but not a universal microscopic theory.
- **â€œMore grid points guarantee accuracy.â€** Boundary conditions, discretization order, stiffness, stability, and model error also matter.
- **â€œA stable simulation is correct.â€** Stability prevents numerical blow-up; it does not verify the model or convergence.
- **â€œUnits can be ignored.â€** For diffusion, $\alpha t/L^2$ must be dimensionless; missing a length scale often creates orders-of-magnitude errors.

---

# Summary

A PDE relates partial derivatives of a field over space and time. Second-order equations are elliptic, parabolic, or hyperbolic, corresponding broadly to equilibrium, diffusion, and finite-speed propagation. Initial conditions select temporal evolution; boundary conditions control exchanges or constraints at the domain boundary. Conservation laws provide the balance equation, while constitutive laws close the model. Separation of variables converts selected PDEs into spatial eigenvalue problems and temporal ODEs. In engineering, numerical discretization is usually necessary, and verification plus validation are as important as solving the algebra.

---

# Formula sheet

$$
\nabla u=(u_x,u_y,u_z),\qquad \nabla\cdot\mathbf{q}=q_{x,x}+q_{y,y}+q_{z,z}
$$

$$
\nabla^2u=u_{xx}+u_{yy}+u_{zz}
$$

$$
u_t+\nabla\cdot\mathbf{J}=s
$$

$$
\mathbf{J}=-D\nabla u,\qquad u_t=\nabla\cdot(D\nabla u)+s
$$

$$
T_t=\alpha\nabla^2T,\qquad \alpha=\frac{k}{\rho c_p}
$$

$$
u_{tt}=c^2u_{xx},\qquad c=\sqrt{\mathcal{T}/\mu}\text{ for a string}
$$

$$
\nabla^2u=0\quad\text{(Laplace)},\qquad \nabla^2u=f\quad\text{(Poisson)}
$$

$$
u_{\text{heat}}=\sum_{n=1}^{\infty}b_ne^{-\alpha(n\pi/L)^2t}\sin(n\pi x/L)
$$

$$
b_n=\frac{2}{L}\int_0^L f(x)\sin(n\pi x/L)\,dx
$$

$$
u_{xx}(x_i)\approx\frac{u_{i+1}-2u_i+u_{i-1}}{\Delta x^2},\qquad r=\frac{\alpha\Delta t}{\Delta x^2}
$$

---

# Glossary

| Term | Meaning |
|---|---|
| Boundary condition | Data prescribed on the edge or surface of a domain |
| Characteristic | Curve along which information propagates or the PDE simplifies |
| Constitutive law | Material or physical relation that closes a balance law |
| Diffusivity | Coefficient controlling the rate of smoothing, often m$^2$/s |
| Domain | Set of spatial and temporal points where the PDE is solved |
| Elliptic | PDE type associated with equilibrium and boundary-controlled fields |
| Flux | Amount crossing a unit area per unit time |
| Hyperbolic | PDE type associated with wave-like, finite-speed propagation |
| Initial condition | Field data specified at the starting time |
| Laplacian | Sum of second spatial derivatives |
| Parabolic | PDE type associated with diffusion and time-directed smoothing |
| Well-posed | Existence, uniqueness, and continuous dependence on data |

---

# Practice problems

1. Classify $u_{xx}+4u_{xy}+3u_{yy}=0$ using the $A u_{xx}+2B u_{xy}+C u_{yy}$ convention.
2. State whether $u(0,t)=0$ is Dirichlet, Neumann, or Robin data.
3. Check the units of $\alpha=k/(\rho c_p)$.
4. Derive the one-dimensional conservation law $u_t+J_x=s$ from a control-volume balance.
5. For $u_t=0.02u_{xx}$ on $0<x<2$ with zero end values and initial data $6\sin(\pi x/2)$, write the solution.
6. For a string with $\mathcal{T}=90$ N and $\mu=0.010$ kg/m, calculate the wave speed.
7. Explain why the third Fourier mode in a heat problem decays nine times faster than the first.
8. For $\alpha=10^{-5}$ m$^2$/s, $\Delta x=0.01$ m, find the largest explicit Euler time step allowed by $r\le1/2$.
9. Explain why prescribing both $u$ and $u_x$ arbitrarily on the entire boundary can overconstrain a second-order elliptic problem.
10. Compare the modeling assumptions and expected behavior of the heat and wave equations in a real sensor cable.

## Short answers and solution outlines

1. $A=1$, $B=2$, $C=3$, so $\Delta=4-3=1>0$: hyperbolic.
2. Dirichlet: the field value is prescribed.
3. $k/[\rho c_p]=(\mathrm{W/(mK)})/[\mathrm{kg/m^3}\cdot\mathrm{J/(kgK)}]=\mathrm{m^2/s}$.
4. Write $d(\int_a^b u\,dx)/dt=J(a)-J(b)+\int_a^b s\,dx$, rewrite the boundary flux using $J(b)-J(a)=\int_a^bJ_xdx$, then use arbitrary $a,b$.
5. $u=6e^{-0.02(\pi/2)^2t}\sin(\pi x/2)$.
6. $c=\sqrt{90/0.010}\approx94.9$ m/s.
7. The decay rate contains $(n\pi/L)^2$, so $n=3$ has $9$ times the rate.
8. $\Delta t\le\Delta x^2/(2\alpha)=0.0001/(2\times10^{-5})=5$ s.
9. Elliptic problems generally need one appropriate boundary condition per boundary point; arbitrary simultaneous value and normal slope data may be incompatible or nonunique.
10. Heat diffusion damps high-frequency signals and uses conductivity and heat capacity; waves propagate at finite speed and require inertia, stiffness, or tension. A cable may need both effects plus damping and frequency-dependent material behavior.

---

# Recommended next topics

Study Fourier series and transforms, eigenvalues and Sturmâ€“Liouville problems, weak formulations, FEM, numerical linear algebra, fluid mechanics, elasticity, and control of distributed systems. After those, continue to nonlinear PDEs, shocks, conservation-law entropy conditions, Green's functions, and functional analysis.
