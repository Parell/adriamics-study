---

# Vector Calculus

## Most important ideas first

Learn these in order: scalar and vector fields; directional derivatives and gradient; divergence and curl; line and surface integrals; conservative and incompressible fields; then Green's, Stokes', and the divergence theorems. Coordinate systems, potential theory, and numerical methods come after those foundations.

---

---

# Gradient and directional change

The gradient tells how a scalar field changes locally. Its components are the rates of change along the coordinate axes:

$$
\nabla f=\left\langle f_x,f_y,f_z\right\rangle
=\left\langle\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right\rangle.
$$

For $f(x,y)$, omit the $z$ component. The units of $\nabla f$ are units of $f$ per unit length.

## Directional derivative

Let $\hat{\mathbf{a}}$ be a unit vector pointing in the direction of travel. The directional derivative is the rate of change of $f$ per unit distance in that direction:

$$
D_{\hat{\mathbf{a}}}f=\nabla f\cdot\hat{\mathbf{a}}.
$$

### Derivation

Move a small distance $ds$ in direction $\hat{\mathbf{a}}$. The displacement is $d\mathbf{r}=\hat{\mathbf{a}}\,ds$. The total differential is

$$
df=\nabla f\cdot d\mathbf{r}.
$$

Substitute $d\mathbf{r}=\hat{\mathbf{a}}ds$ and divide by $ds$:

$$
\frac{df}{ds}=\nabla f\cdot\hat{\mathbf{a}}.
$$

The dot product shows that only the component of the gradient along the motion changes $f$.

## Maximum increase and level sets

By the dot-product relation,

$$
D_{\hat{\mathbf{a}}}f=\|\nabla f\|\cos\theta,
$$

where $\theta$ is the angle between $\nabla f$ and $\hat{\mathbf{a}}$. Therefore:

- maximum increase is $\|\nabla f\|$, in the direction $\nabla f$;
- maximum decrease is $-\|\nabla f\|$, in direction $-\nabla f$;
- no first-order change occurs perpendicular to $\nabla f$.

For a level surface $f(x,y,z)=c$, a tangent displacement $d\mathbf{r}$ satisfies $df=0$. Hence

$$
\nabla f\cdot d\mathbf{r}=0,
$$

so $\nabla f$ is normal to the level surface.

## Worked example: temperature gradient

Let

$$
T(x,y,z)=20+0.8x-0.3y+0.1z^2
$$

with $T$ in $^\circ\mathrm{C}$ and coordinates in m. At $(2,1,3)$,

$$
\nabla T=\langle0.8,-0.3,0.2z\rangle
\quad\Rightarrow\quad
\nabla T=\langle0.8,-0.3,0.6\rangle\ ^\circ\mathrm{C/m}.
$$

In direction $\mathbf{a}=\langle3,4,0\rangle$, first normalize:

$$
\hat{\mathbf{a}}=\frac{1}{5}\langle3,4,0\rangle.
$$

Thus

$$
D_{\hat{\mathbf{a}}}T
=\langle0.8,-0.3,0.6\rangle\cdot\left\langle\frac35,\frac45,0\right\rangle
=0.24\ ^\circ\mathrm{C/m}.
$$

Moving in that direction initially increases temperature by about $0.24^\circ\mathrm{C}$ per meter.

---

# Divergence

Divergence applies to a vector field and measures its local net outflow per unit volume. Imagine a tiny balloon in a flow: positive divergence means the balloon's contents tend to spread outward; negative divergence means net inflow.

For $\mathbf{F}=\langle F_x,F_y,F_z\rangle$,

$$
\boxed{\nabla\cdot\mathbf{F}
=\frac{\partial F_x}{\partial x}
+\frac{\partial F_y}{\partial y}
+\frac{\partial F_z}{\partial z}}
$$

The result is a scalar. If $\mathbf{F}$ is velocity, divergence has units of $\mathrm{s^{-1}}$.

## Local flux interpretation

For a small rectangular box, the net flux through the two faces normal to $x$ is approximately

$$
\left[F_x(x+\Delta x)-F_x(x)\right]\Delta y\Delta z
\approx \frac{\partial F_x}{\partial x}\Delta x\Delta y\Delta z.
$$

Adding the corresponding $y$ and $z$ contributions and dividing by the box volume gives $\nabla\cdot\mathbf{F}$. Thus divergence is the limiting net outward flux density.

## Sources, sinks, and incompressibility

- $\nabla\cdot\mathbf{F}>0$: local source or expansion.
- $\nabla\cdot\mathbf{F}<0$: local sink or compression.
- $\nabla\cdot\mathbf{F}=0$: solenoidal field; there is no net local source.

For a constant-density fluid, mass conservation gives

$$
\nabla\cdot\mathbf{u}=0.
$$

This does not mean every fluid particle moves in a straight line or that the velocity is constant. It means the local volume rate of expansion is zero.

---

# Curl

Curl measures the local tendency of a vector field to circulate around a point. Place a tiny paddle wheel in a fluid: nonzero curl means the wheel tends to rotate. Curl is a vector because its axis and sense matter.

For $\mathbf{F}=\langle P,Q,R\rangle$,

$$
\boxed{\nabla\times\mathbf{F}
=\left\langle
R_y-Q_z,\ P_z-R_x,\ Q_x-P_y
\right\rangle}
$$

The determinant mnemonic is

$$
\nabla\times\mathbf{F}
=
\begin{vmatrix}
\mathbf{i}&\mathbf{j}&\mathbf{k}\\
\partial_x&\partial_y&\partial_z\\
P&Q&R
\end{vmatrix}.
$$

## Circulation density

The component of curl normal to a small surface is the limiting circulation per unit area:

$$
(\nabla\times\mathbf{F})\cdot\hat{\mathbf{n}}
=\lim_{A\to0}\frac{1}{A}\oint_C\mathbf{F}\cdot d\mathbf{r}.
$$

The orientation of $C$ follows the right-hand rule from $\hat{\mathbf{n}}$.

## Example: rigid rotation

For planar solid-body rotation with angular speed $\Omega$,

$$
\mathbf{u}(x,y)=\langle-\Omega y,\Omega x,0\rangle.
$$

Then

$$
\nabla\times\mathbf{u}=\langle0,0,2\Omega\rangle.
$$

The vorticity is twice the rigid body's angular velocity. A factor of two is often missed.

---

# Laplacian and identities

The scalar Laplacian is the divergence of the gradient:

$$
\boxed{\nabla^2 f=\nabla\cdot(\nabla f)=f_{xx}+f_{yy}+f_{zz}}.
$$

It compares the value at a point with nearby values. If $\nabla^2T>0$, the point is locally lower than the surrounding average in the usual Cartesian interpretation; if $\nabla^2T<0$, it is locally higher. Curvature and sign conventions should be interpreted from the governing equation and boundary conditions.

For a vector field, the vector Laplacian is

$$
\nabla^2\mathbf{F}=\langle\nabla^2F_x,\nabla^2F_y,\nabla^2F_z\rangle.
$$

If the field is sufficiently smooth,

$$
\nabla\times(\nabla f)=\mathbf{0},
\qquad
\nabla\cdot(\nabla\times\mathbf{F})=0.
$$

The first follows because mixed partial derivatives cancel, e.g. $f_{zy}-f_{yz}=0$. The second follows by expanding and canceling mixed partials. If mixed derivatives are not continuous, these identities require more care.

An important identity is

$$
\nabla^2\mathbf{F}=\nabla(\nabla\cdot\mathbf{F})-\nabla\times(\nabla\times\mathbf{F}).
$$

---

# Line integrals and conservative fields

A line integral accumulates a field along a curve. If $C$ is parameterized by $\mathbf{r}(t)$ for $a\le t\le b$, then

$$
\int_C\mathbf{F}\cdot d\mathbf{r}
=\int_a^b\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)\,dt.
$$

The dot product selects the component tangent to the path. In mechanics, if $\mathbf{F}$ is force, this integral is work and has units of joules.

For a scalar field $f$, the scalar line integral is

$$
\int_C f\,ds=\int_a^b f(\mathbf{r}(t))\|\mathbf{r}'(t)\|\,dt,
$$

which can represent mass of a wire with linear density $f$.

## Conservative fields

If there is a scalar potential $\phi$ with

$$
\mathbf{F}=\nabla\phi,
$$

then $\mathbf{F}$ is conservative. Along a path,

$$
\int_C\mathbf{F}\cdot d\mathbf{r}
=\int_C\nabla\phi\cdot d\mathbf{r}
=\int_a^b\frac{d}{dt}\phi(\mathbf{r}(t))\,dt
=\phi(B)-\phi(A).
$$

The integral depends only on endpoints, not path. Consequently, every closed-loop integral is zero. On a simply connected region, a continuously differentiable field with $\nabla\times\mathbf{F}=\mathbf{0}$ is conservative. The domain condition matters: a field can have zero curl away from a hole and still have nonzero circulation around the hole.

### Finding a potential

For $\mathbf{F}=\langle P,Q\rangle$, seek $\phi_x=P$ and $\phi_y=Q$.

Example:

$$
\mathbf{F}=\langle2xy+3, x^2+4y\rangle.
$$

Integrate $\phi_x=2xy+3$ with respect to $x$:

$$
\phi=x^2y+3x+g(y).
$$

Differentiate with respect to $y$ and match $Q$:

$$
\phi_y=x^2+g'(y)=x^2+4y
\Rightarrow g(y)=2y^2+C.
$$

Thus $\phi=x^2y+3x+2y^2$ (the constant $C$ is irrelevant).

---

# Surface integrals and flux

A surface integral adds contributions over a surface. For an oriented surface $S$ with unit normal $\hat{\mathbf{n}}$,

$$
\iint_S\mathbf{F}\cdot\hat{\mathbf{n}}\,dS
$$

is the **flux** of $\mathbf{F}$ through $S$. For fluid velocity, it measures volumetric flow rate only when the density and geometric interpretation are appropriate; for mass flux, use $\rho\mathbf{u}$.

If $S$ is parameterized by $\mathbf{r}(u,v)$,

$$
\iint_S\mathbf{F}\cdot d\mathbf{S}
=\iint_D\mathbf{F}(\mathbf{r}(u,v))\cdot(\mathbf{r}_u\times\mathbf{r}_v)\,du\,dv.
$$

The cross product supplies both area scaling and orientation.

For the graph $z=g(x,y)$ with upward orientation,

$$
d\mathbf{S}=\langle-g_x,-g_y,1\rangle\,dx\,dy.
$$

## Worked example: flux through a disk

Let $\mathbf{F}=\langle x,y,z\rangle$ and let $S$ be the disk $x^2+y^2\le a^2$ in the plane $z=0$, oriented upward. Since $\hat{\mathbf{n}}=\mathbf{k}$,

$$
\mathbf{F}\cdot\hat{\mathbf{n}}=z=0,
$$

so the flux is zero. The field lies tangent to that plane at $z=0$; a large field magnitude does not imply large flux through every surface.

---

# Green's, Stokes', and divergence theorems

These theorems connect measurements on a boundary with derivatives inside the region. They are not three unrelated tricks; they are dimension-specific forms of the same boundary-versus-interior principle.

## Green's theorem in the plane

Let $D$ be a positively oriented planar region and $C=\partial D$ its counterclockwise boundary. For $\mathbf{F}=\langle P,Q\rangle$,

$$
\boxed{\oint_C P\,dx+Q\,dy
=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dA}.
$$

The left side is circulation around the boundary; the right side sums the scalar curl density over the region.

The flux form is

$$
\boxed{\oint_C\mathbf{F}\cdot\hat{\mathbf{n}}\,ds
=\iint_D\nabla\cdot\mathbf{F}\,dA}.
$$

## Stokes' theorem

For an oriented surface $S$ with boundary $C$,

$$
\boxed{\oint_C\mathbf{F}\cdot d\mathbf{r}
=\iint_S(\nabla\times\mathbf{F})\cdot\hat{\mathbf{n}}\,dS}.
$$

The boundary orientation is chosen by the right-hand rule. Stokes says total boundary circulation equals total curl piercing the surface.

## Divergence theorem

For a closed, outward-oriented surface $S=\partial V$ enclosing volume $V$,

$$
\boxed{\oiint_S\mathbf{F}\cdot\hat{\mathbf{n}}\,dS
=\iiint_V\nabla\cdot\mathbf{F}\,dV}.
$$

Net outward flux through the boundary equals total source strength inside.

### Choosing a theorem

| Given quantity | Boundary | Interior quantity | Useful theorem |
|---|---|---|---|
| planar circulation | closed curve | scalar curl | Green |
| planar outward flux | closed curve | planar divergence | Green flux form |
| 3D circulation | closed curve | curl through a surface | Stokes |
| 3D outward flux | closed surface | divergence through a volume | Divergence |

### Example: divergence theorem

For $\mathbf{F}=\langle x,y,z\rangle$ on a sphere of radius $a$,

$$
\nabla\cdot\mathbf{F}=3.
$$

Therefore

$$
\oiint_S\mathbf{F}\cdot\hat{\mathbf{n}}\,dS
=\iiint_V3\,dV
=3\left(\frac43\pi a^3\right)=4\pi a^3.
$$

Directly, on the sphere $\mathbf{F}=a\hat{\mathbf{n}}$, giving flux $a(4\pi a^2)=4\pi a^3$, which checks the result.

---

# Conservative, incompressible, and harmonic fields

These labels describe different properties and should not be conflated.

| Property | Condition | Typical meaning |
|---|---|---|
| conservative | $\mathbf{F}=\nabla\phi$ | path-independent work |
| irrotational | $\nabla\times\mathbf{F}=0$ | no local circulation |
| incompressible / solenoidal | $\nabla\cdot\mathbf{F}=0$ | no local net source |
| harmonic scalar | $\nabla^2\phi=0$ | source-free potential field |

On a simply connected domain, conservative and irrotational are equivalent for smooth fields. Neither condition implies incompressibility. A field can be both conservative and incompressible; if $\mathbf{F}=\nabla\phi$, this requires $\nabla^2\phi=0$.

## Physical models

- Electrostatics: $\mathbf{E}=-\nabla V$; electrostatic fields are conservative.
- Heat conduction: Fourier's law is $\mathbf{q}=-k\nabla T$; heat flows down the temperature gradient.
- Incompressible flow: $\nabla\cdot\mathbf{u}=0$ for constant density.
- Diffusion and heat: $\partial T/\partial t=\alpha\nabla^2T$ in a simple homogeneous model.
- Potential flow: $\mathbf{u}=\nabla\phi$ or, under another sign convention, $\mathbf{u}=-\nabla\phi$; the convention must be stated.

---

# Coordinate systems and units

Cartesian formulas are simplest, but cylindrical and spherical coordinates match pipes, shafts, and spheres. The operator formulas change because basis directions and area/volume elements change.

In cylindrical coordinates $(r,\theta,z)$,

$$
\nabla f=\hat{\mathbf{e}}_r f_r+\hat{\mathbf{e}}_\theta\frac1r f_\theta+\hat{\mathbf{e}}_z f_z,
$$

$$
\nabla\cdot\mathbf{F}=\frac1r\frac{\partial(rF_r)}{\partial r}+\frac1r\frac{\partial F_\theta}{\partial\theta}+\frac{\partial F_z}{\partial z}.
$$

The factor $1/r$ is geometric, not optional. Coordinate singularities such as $r=0$ require limits or a different representation.

Dimensional checks are essential:

| Quantity | If $f$ has units $[f]$ |
|---|---|
| $\nabla f$ | $[f]/\mathrm{m}$ |
| $\nabla\cdot\mathbf{F}$ | $[\mathbf{F}]/\mathrm{m}$ |
| $\nabla\times\mathbf{F}$ | $[\mathbf{F}]/\mathrm{m}$ |
| $\nabla^2f$ | $[f]/\mathrm{m^2}$ |
| $\int_C\mathbf{F}\cdot d\mathbf{r}$ | $[\mathbf{F}]\,\mathrm{m}$ |
| $\iint_S\mathbf{F}\cdot d\mathbf{S}$ | $[\mathbf{F}]\,\mathrm{m^2}$ |

---

# Engineering, experiments, and computation

Vector calculus appears wherever a quantity is distributed in space.

- **Fluid mechanics:** continuity uses divergence; vorticity is curl of velocity; Navierâ€“Stokes includes gradients and Laplacians.
- **Heat transfer:** temperature gradients drive heat flux, and the Laplacian appears in conduction.
- **Electromagnetism:** Maxwell's laws are naturally written with divergence and curl.
- **Mechanics and materials:** stress divergence produces force density; displacement gradients produce strain.
- **Control and robotics:** gradients support optimization, while vector fields describe state-space flows.
- **FEM and CFD:** weak forms move derivatives onto test functions using integration by parts; finite-volume methods apply divergence theorem to each control volume.
- **Numerical methods:** discrete gradient, divergence, and curl should preserve identities and conservation as closely as possible.
- **Machine learning:** gradients of loss functions guide parameter updates; automatic differentiation computes derivatives, but it does not remove the need to check units, domains, and boundary conditions.

## A simple experiment

A shallow tray of water with small floating particles can visualize a 2D velocity field. Track particle positions over equal time intervals, estimate $\mathbf{u}(x,y)$, and approximate

$$
\nabla\cdot\mathbf{u}\approx\frac{u(x+\Delta x,y)-u(x-\Delta x,y)}{2\Delta x}
+\frac{v(x,y+\Delta y)-v(x,y-\Delta y)}{2\Delta y}.
$$

Noise, uneven particle spacing, finite camera resolution, and out-of-plane motion make the measured divergence imperfect. A numerical derivative amplifies noise, so smoothing and uncertainty estimates are part of a real experiment.

## Idealized versus real behavior

Theorems assume smooth fields and correctly oriented, sufficiently regular boundaries. Real fields may have shocks, material interfaces, point sources, discontinuities, turbulence, or measurement noise. In such cases use integral balances, weak formulations, distributions, or carefully chosen control volumes rather than blindly differentiating a discontinuous field.

---

# Common mistakes and problem-solving workflow

## Typical mistakes

- Forgetting to normalize the direction vector in a directional derivative.
- Treating divergence as a vector or curl as a scalar.
- Using $\nabla\cdot\mathbf{F}$ when the problem asks for circulation, or $\nabla\times\mathbf{F}$ when it asks for flux.
- Reversing the surface normal or curve orientation.
- Applying the divergence theorem to an open surface without adding the missing pieces.
- Assuming zero curl implies conservative behavior on a domain with a hole.
- Calling $\nabla\cdot\mathbf{u}=0$ â€œzero velocity.â€
- Using cylindrical or spherical formulas as if they were Cartesian.
- Ignoring units: a gradient is not measured in the same units as the original field.

## Reliable workflow

1. Identify the field, domain, boundary, and requested quantity.
2. Draw the orientation and decide whether the boundary is open or closed.
3. Write the relevant operator or integral symbolically.
4. Check smoothness and theorem conditions.
5. Parameterize the curve or surface if direct integration is needed.
6. Use a theorem when it replaces a difficult boundary integral with an easier interior integral.
7. Check units, sign, orientation, and limiting behavior.

---

# Summary

The gradient describes scalar-field change and is normal to level sets. Divergence measures net local outflow, curl measures local circulation, and the Laplacian combines second derivatives to describe local curvature or diffusion. Line integrals accumulate tangential work or circulation; surface integrals accumulate flux. Green's, Stokes', and the divergence theorems relate local differential behavior to measurements on boundaries. Domain, orientation, smoothness, and units are part of the mathematics, not afterthoughts.

---

# Formula sheet

$$
\nabla=\left\langle\partial_x,\partial_y,\partial_z\right\rangle
$$

$$
\nabla f=\langle f_x,f_y,f_z\rangle,
\qquad D_{\hat{\mathbf{a}}}f=\nabla f\cdot\hat{\mathbf{a}}
$$

$$
\nabla\cdot\mathbf{F}=F_{x,x}+F_{y,y}+F_{z,z}
$$

$$
\nabla\times\mathbf{F}=\langle R_y-Q_z,P_z-R_x,Q_x-P_y\rangle
$$

$$
\nabla^2f=f_{xx}+f_{yy}+f_{zz}=\nabla\cdot\nabla f
$$

$$
\int_C\mathbf{F}\cdot d\mathbf{r}=\int_a^b\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)dt
$$

$$
\iint_S\mathbf{F}\cdot d\mathbf{S}=\iint_D\mathbf{F}(\mathbf{r})\cdot(\mathbf{r}_u\times\mathbf{r}_v)dudv
$$

$$
\oint_C\mathbf{F}\cdot d\mathbf{r}=\iint_S(\nabla\times\mathbf{F})\cdot\hat{\mathbf{n}}dS
$$

$$
\oiint_{\partial V}\mathbf{F}\cdot\hat{\mathbf{n}}dS=\iiint_V\nabla\cdot\mathbf{F}dV
$$

$$
\nabla\times\nabla f=\mathbf{0},\qquad\nabla\cdot(\nabla\times\mathbf{F})=0
$$

---

# Glossary

| Term | Meaning |
|---|---|
| scalar field | A number assigned to each point |
| vector field | A vector assigned to each point |
| gradient | Vector of scalar-field partial derivatives |
| directional derivative | Rate of scalar change in a chosen unit direction |
| divergence | Net outward flux per unit volume in the local limit |
| curl | Local circulation density and rotation axis |
| Laplacian | Divergence of the gradient; sum of second spatial derivatives |
| conservative field | A field equal to a gradient of a potential, with path-independent line integral |
| flux | Field passing through an oriented surface |
| circulation | Tangential line integral around a closed curve |
| solenoidal | Having zero divergence |
| irrotational | Having zero curl |
| simply connected | A domain with no holes that obstruct continuous loop contraction |

---

# Practice problems

1. **Easy:** Find $\nabla f$ for $f(x,y,z)=x^2y+3z$ at $(1,2,0)$.
2. **Easy:** Find the divergence of $\mathbf{F}=\langle x^2,xy,4z\rangle$.
3. **Moderate:** Find the curl of $\mathbf{F}=\langle-y,x,0\rangle$ and interpret it.
4. **Moderate:** Compute $D_{\hat{\mathbf{a}}}f$ for $f=x^2+y^2$ at $(1,2)$ in the direction from $(1,2)$ to $(4,6)$.
5. **Moderate:** Determine whether $\mathbf{F}=\langle2xy+1,x^2+2y\rangle$ is conservative and find a potential.
6. **Advanced:** Use the divergence theorem to find the outward flux of $\mathbf{F}=\langle x^3,y^3,z^3\rangle$ through the cube $0\le x,y,z\le1$.
7. **Advanced:** Explain why $\mathbf{F}=\langle-y/(x^2+y^2),x/(x^2+y^2)\rangle$ has zero curl away from the origin but is not conservative on $\mathbb{R}^2\setminus\{(0,0)\}$.

## Short answers and solution outlines

1. $\nabla f=\langle2xy,x^2,3\rangle$, so at the point it is $\langle4,1,3\rangle$.
2. $\nabla\cdot\mathbf{F}=2x+x+4=3x+4$.
3. $\nabla\times\mathbf{F}=\langle0,0,2\rangle$; uniform positive $z$-axis circulation.
4. Direction is $\langle3,4\rangle/5$. Since $\nabla f=\langle2,4\rangle$, the derivative is $(6+16)/5=22/5$.
5. Cross partials agree: $P_y=2x=Q_x$. A potential is $\phi=x^2y+x+y^2$.
6. Divergence is $3x^2+3y^2+3z^2$; integrate over the unit cube to obtain $3$.
7. The origin is a hole. A unit-circle line integral is $2\pi$, so path independence fails despite local zero curl.

---

# Recommended next topics

- Partial differential equations: Laplace, heat, and wave equations
- Fluid mechanics and Navierâ€“Stokes equations
- Electromagnetism and Maxwell's equations
- Tensor calculus and continuum mechanics
- Numerical methods, finite volume, finite difference, and finite element methods
- Differential forms and the generalized Stokes theorem

## Sources

- [OpenStax Calculus](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Marsden and Tromba, *Vector Calculus*
- Griffiths, *Introduction to Electrodynamics*
- Batchelor, *An Introduction to Fluid Dynamics*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)

Vector calculus is the calculus of quantities distributed through space. It studies scalar fields such as temperature and pressure, vector fields such as velocity and force, and the rates at which those fields change, spread, rotate, and pass through surfaces.

It matters because the conservation laws of fluid mechanics, heat transfer, electromagnetism, elasticity, and continuum mechanics are naturally written with vector-calculus operators. The central ideas are:

1. The **gradient** converts a scalar field into its direction of greatest increase.
2. **Divergence** measures local net outflow; **curl** measures local circulation; the **Laplacian** measures a field's local imbalance relative to its neighbors.
3. **Line, surface, and volume integrals** accumulate fields along curves, across surfaces, and throughout regions.
4. **Green's, Stokes', and the divergence theorems** convert local derivatives into global boundary measurements.

Unless stated otherwise, coordinates are Cartesian, fields are sufficiently smooth for the derivatives used, and SI units are assumed. A field may be idealized as continuous even though real matter is molecular and measurements are discrete.
