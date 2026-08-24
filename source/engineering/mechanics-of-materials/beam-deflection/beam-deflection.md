# Beam Deflection

Beam deflection is the displacement of a beam's centroidal axis under load. A design can satisfy a strength limit and still fail in service if it bends too far, vibrates excessively, or loses alignment. This note develops the Euler-Bernoulli elastic-beam model and shows how to apply it with boundary conditions and superposition.

## Assumptions and notation

The basic model assumes:

- The beam is slender and has a prismatic or piecewise-prismatic cross-section.
- Deflections and rotations are small.
- The material is linear elastic, so $\sigma=E\varepsilon$.
- Plane cross-sections remain plane and normal to the neutral axis.
- Transverse shear deformation is negligible.

The last assumption is the main limitation of Euler-Bernoulli theory. Short, deep beams and beams made from low-shear-modulus materials may require Timoshenko beam theory.

Use the following symbols:

- $x$: coordinate along the undeformed beam
- $v(x)$: transverse deflection
- $M(x)$: internal bending moment
- $E$: Young's modulus
- $I$: second moment of area about the bending axis
- $w(x)$: distributed load, with a chosen sign convention
- $P$: concentrated force

The flexural rigidity is $EI$. Larger $E$ or $I$ means a stiffer beam.

## Elastic beam equation

For small slopes, beam curvature is approximately the second derivative of deflection:

$$
\kappa \approx \frac{d^2v}{dx^2}.
$$

The moment-curvature relation is

$$
EI\frac{d^2v}{dx^2}=M(x),
$$

where the sign may be negative under another convention. The important requirement is consistency between the moment diagram and the deflection direction.

For a constant $EI$, integrate twice:

$$
EI\frac{dv}{dx}=\int M(x)\,dx+C_1,
$$

$$
EIv(x)=\int\!\!\int M(x)\,dx\,dx+C_1x+C_2.
$$

The slope is $\theta(x)=dv/dx$. The integration constants are found from boundary conditions.

An equivalent fourth-order form follows from the load-moment relationships. For one common convention,

$$
\frac{dV}{dx}=-w(x),\qquad \frac{dM}{dx}=V(x),
$$

so

$$
EI\frac{d^4v}{dx^4}=-w(x).
$$

Use either the moment function or the load function, not both independently unless the signs and integration constants are checked carefully.

## Boundary conditions

Boundary conditions describe what the supports permit or prevent.

### Fixed end

At a built-in end, both displacement and rotation vanish:

$$
v=0,\qquad \frac{dv}{dx}=0.
$$

### Simple support

At a pin or roller, transverse displacement is zero and the support does not apply a couple:

$$
v=0,\qquad M=EI\frac{d^2v}{dx^2}=0.
$$

### Free end

At an unloaded free end, both internal moment and shear vanish:

$$
M=0,\qquad V=0.
$$

If a force or couple is applied at the free end, the corresponding shear or moment condition is replaced by that applied end loading.

### Continuity conditions

When a beam is divided into regions, deflection and slope are normally continuous at an ordinary point:

$$
v_1=v_2,\qquad \theta_1=\theta_2.
$$

For a continuous beam with no concentrated couple, moment is also continuous. A concentrated force causes a jump in shear; a concentrated couple causes a jump in moment.

## Standard loading cases

The following results apply to a prismatic beam with constant $E$ and $I$. Deflection directions are shown by magnitude; attach the sign required by your convention.

### Cantilever with an end force

For a cantilever of length $L$ with a transverse force $P$ at the free end:

$$
\delta_{max}=\frac{PL^3}{3EI},
$$

at the free end, and the end rotation is

$$
\theta_{max}=\frac{PL^2}{2EI}.
$$

### Cantilever with a uniform load

For a constant load $w$ over the full length:

$$
\delta_{max}=\frac{wL^4}{8EI},
$$

at the free end, and

$$
\theta_{max}=\frac{wL^3}{6EI}.
$$

### Simply supported beam with a center force

For a centered point force $P$:

$$
\delta_{max}=\frac{PL^3}{48EI},
$$

at midspan.

### Simply supported beam with a uniform load

For a uniform load $w$ over the full span:

$$
\delta_{max}=\frac{5wL^4}{384EI},
$$

at midspan.

The $L^3$ dependence for a point force and $L^4$ dependence for a distributed load make span length especially important in stiffness design.

## Worked example: cantilever end load

A steel cantilever has length $L=1.20\ \mathrm{m}$, rectangular cross-section $b=30\ \mathrm{mm}$ and $h=60\ \mathrm{mm}$, and an end load $P=500\ \mathrm{N}$. Take $E=200\ \mathrm{GPa}$. Find the free-end deflection and rotation.

The section bends about the axis associated with $h$, so

$$
I=\frac{bh^3}{12}
 =\frac{(0.030)(0.060)^3}{12}
 =5.40\times10^{-7}\ \mathrm{m^4}.
$$

Using the cantilever formulas,

$$
\delta=\frac{PL^3}{3EI}
 =\frac{(500)(1.20)^3}{3(200\times10^9)(5.40\times10^{-7})}
 =2.13\times10^{-3}\ \mathrm{m}.
$$

Therefore, the free end deflects approximately $2.13\ \mathrm{mm}$ downward. The rotation is

$$
\theta=\frac{PL^2}{2EI}
 =3.33\times10^{-3}\ \mathrm{rad}
 \approx0.191^\circ.
$$

The result is reasonable: doubling the length would increase the deflection by a factor of eight, while doubling the beam height would increase $I$ by a factor of eight and reduce the deflection by the same factor.

## Superposition

Because the model is linear, responses from separate load cases can be added:

$$
v_{total}(x)=v_1(x)+v_2(x)+\cdots,
$$

and likewise for slope, moment, and shear. Superposition is valid when:

- Material behavior remains linear elastic.
- Geometry changes are small.
- Supports and contact conditions do not change.

For example, a cantilever carrying an end force and a uniform load has free-end deflection

$$
\delta=\frac{PL^3}{3EI}+\frac{wL^4}{8EI},
$$

with signs chosen according to the directions of the loads. Superposition does not mean that two separate load cases have to be solved with separate beams; it means their mathematically linear responses may be combined.

## Choosing a solution method

Use direct integration when the load arrangement is simple and boundary conditions are clear. Use standard tables when the beam and loading match a known case. Use singularity functions or Macaulay brackets when loads change at several positions. Use the area-moment or virtual-work method when only one displacement or rotation is needed.

For a unit-load calculation, apply a unit force at the point and in the direction of the desired displacement. Then, for a linearly elastic beam,

$$
\delta=\int_0^L\frac{M(x)m(x)}{EI}\,dx,
$$

where $M$ is from the real loading and $m$ is from the unit load. This is useful for beams with nonuniform loading or variable $EI$.

## Common mistakes

- Using $I=bh^3/12$ with the wrong dimension as the height. The dimension perpendicular to the bending axis is cubed.
- Applying a simply supported formula to a cantilever or forgetting that a fixed end has zero slope as well as zero deflection.
- Mixing millimetres and metres in $L$, $I$, or $E$.
- Treating a distributed load's intensity $w$ as a total force without multiplying by its loaded length.
- Assuming the maximum moment and maximum deflection occur at the same location in every beam.
- Adding load effects when yielding, large deflection, changing contact, or other nonlinear behavior invalidates superposition.
- Reporting a magnitude without stating the deflection direction or sign convention.

## Practice problems

### Problem 1: simply supported center load

A simply supported beam has $L=2.0\ \mathrm{m}$, $E=70\ \mathrm{GPa}$, $I=1.5\times10^{-6}\ \mathrm{m^4}$, and a centered load of $P=900\ \mathrm{N}$. Find the midspan deflection.

**Solution.**

$$
\delta_{max}=\frac{PL^3}{48EI}
 =\frac{(900)(2.0)^3}{48(70\times10^9)(1.5\times10^{-6})}
 =1.43\times10^{-3}\ \mathrm{m}.
$$

The deflection is $1.43\ \mathrm{mm}$ downward.

### Problem 2: cantilever uniform load

A cantilever has $L=0.8\ \mathrm{m}$, $E=100\ \mathrm{GPa}$, $I=4.0\times10^{-7}\ \mathrm{m^4}$, and a uniform load $w=300\ \mathrm{N/m}$. Find the free-end deflection.

**Solution.**

$$
\delta=\frac{wL^4}{8EI}
 =\frac{(300)(0.8)^4}{8(100\times10^9)(4.0\times10^{-7})}
 =3.84\times10^{-4}\ \mathrm{m}.
$$

The free end deflects $0.384\ \mathrm{mm}$ in the load direction.

### Problem 3: superposition and scaling

A cantilever has an end-load deflection of $1.2\ \mathrm{mm}$ and a uniform-load deflection of $0.8\ \mathrm{mm}$, both downward. What is the total elastic deflection? What happens to the total if $E$ is doubled while geometry and loads remain unchanged?

**Solution.**

By superposition,

$$
\delta_{total}=1.2+0.8=2.0\ \mathrm{mm}.
$$

Every elastic deflection is proportional to $1/E$. Doubling $E$ halves the result, so the new deflection is $1.0\ \mathrm{mm}$.

## Summary checklist

1. Draw the beam, loads, supports, and coordinate system.
2. Determine $M(x)$ or use a verified standard loading formula.
3. Write $EIv''=M(x)$ with a consistent sign convention.
4. Apply support, end, and continuity conditions.
5. Add load cases only when linearity assumptions hold.
6. Check units, direction, maximum location, strength, and serviceability.

## Sources

- [Engineering LibreTexts](https://eng.libretexts.org/)
- Hibbeler, *Mechanics of Materials*
- Gere and Goodno, *Mechanics of Materials*
