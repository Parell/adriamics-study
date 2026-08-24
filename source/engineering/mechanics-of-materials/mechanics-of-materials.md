# Stress, strain, and constitutive behavior

## Normal stress

Average normal stress under an axial force:

$$
\sigma = \frac{P}{A}
$$

where:

- $P$ is the internal axial force
- $A$ is the cross-sectional area

Tension is usually taken as positive and compression as negative.

## Shear stress

Average shear stress:

$$
\tau = \frac{V}{A}
$$

where $V$ is the shear force acting over the area.

For nonuniform shear, the average stress is not enough. Use the appropriate distribution formula for the geometry.

## Normal strain

Engineering strain is

$$
\varepsilon = \frac{\delta}{L}
$$

where:

- $\delta$ is the change in length
- $L$ is the original length

For small deformations, engineering strain is usually sufficient.

## Shear strain

Shear strain $\gamma$ measures angular distortion. For small angles,

$$
\gamma \approx \theta
$$

with $\gamma$ in radians.

## Hooke's law

For linear elastic uniaxial behavior:

$$
\sigma = E\varepsilon
$$

where $E$ is Young's modulus.

For shear:

$$
\tau = G\gamma
$$

where $G$ is the shear modulus.

The elastic constants are related by

$$
E = 2G(1+\nu)
$$

where $\nu$ is Poisson's ratio.

## Poisson effect

Under axial tension, a material usually contracts laterally:

$$
\varepsilon_{lat} = -\nu \varepsilon_{ax}
$$

This matters in three-dimensional stress states and constrained members.

---

# Axial loading of bars

## Deformation of a prismatic bar

For a bar with constant area and axial force:

$$
\delta = \frac{PL}{AE}
$$

If the axial force or area changes along the length:

$$
\delta = \int_0^L \frac{P(x)}{A(x)E(x)}\,dx
$$

For piecewise constant segments, sum the deformation of each segment.

## Stress in axial members

If the internal axial force is constant over a segment:

$$
\sigma = \frac{P}{A}
$$

Sign matters. Tension and compression should not be mixed in the same formula without a sign convention.

## Statically determinate axial problems

Use equilibrium to find the reaction forces, then compute internal axial force, stress, and deformation.

Typical steps:

1. Draw the free-body diagram.
2. Solve the support reactions.
3. Cut the bar to find internal axial force.
4. Compute stress with $\sigma = P/A$.
5. Compute deformation with $\delta = PL/(AE)$ or the integral form.

## Example pattern

If a bar has two segments in series, the total deformation is

$$
\delta_{tot} = \sum_i \frac{P_iL_i}{A_iE_i}
$$

If the same axial force passes through all segments, each segment contributes according to its own $L$, $A$, and $E$.

## Stress concentration

A sudden change in geometry creates a local stress concentration. The nominal stress may be acceptable while the local peak stress is not.

For design, check whether the problem supplies a stress concentration factor $K_t$:

$$
\sigma_{max} = K_t \sigma_{nom}
$$

---

# Thermal strain and statically indeterminate axial systems

## Free thermal expansion

For uniform temperature change:

$$
\delta_{th} = \alpha L \Delta T
$$

where $\alpha$ is the coefficient of thermal expansion.

## Constrained thermal stress

If expansion is fully prevented:

$$
\varepsilon_{total} = 0
$$

so

$$
\sigma = E\alpha\Delta T
$$

The sign depends on whether the temperature increase is constrained in compression or the temperature decrease is constrained in tension.

## Statically indeterminate members

When equilibrium is not enough, add compatibility:

- Force equilibrium
- Deformation compatibility
- Constitutive relations

Common approach:

1. Introduce a redundant reaction or internal force.
2. Write equilibrium.
3. Write the compatibility condition for total deformation.
4. Express each deformation in terms of the unknown force.
5. Solve the system.

## Rigid supports and multiple materials

For bars in series with different $E$ or $A$ values, compatibility requires that the total change in length matches the support spacing or imposed displacement.

For parallel members, the deformation is often the same in each member:

$$
\delta_1 = \delta_2 = \cdots
$$

Then the forces distribute according to stiffness:

$$
k = \frac{AE}{L}
$$

and for parallel members:

$$
P_i = k_i \delta
$$

---

# Torsion of circular shafts

## Torsion formula

For a circular shaft under torque $T$:

$$
\tau = \frac{Tr}{J}
$$

where:

- $\tau$ is the shear stress at radius $r$
- $J$ is the polar moment of inertia

Maximum shear stress occurs at the outer surface:

$$
\tau_{max} = \frac{Tc}{J}
$$

where $c$ is the outer radius.

## Polar moment of inertia

For a solid circular shaft:

$$
J = \frac{\pi d^4}{32}
$$

For a hollow circular shaft:

$$
J = \frac{\pi (d_o^4 - d_i^4)}{32}
$$

## Angle of twist

For constant $T$, $J$, and $G$:

$$
\phi = \frac{TL}{JG}
$$

For varying geometry:

$$
\phi = \int_0^L \frac{T(x)}{J(x)G(x)}\,dx
$$

## Shaft design checks

Common design requirements:

- Stress must stay below the allowable shear stress.
- Twist must stay below a serviceability limit.
- Keyways, shoulders, and holes can create stress concentrations.

## Power transmission

Torque and power are related by

$$
P = T\omega
$$

where:

- $P$ is power
- $\omega$ is angular speed

This relation is often used to determine the design torque for rotating shafts.

---

# Shear and internal force resultants

## Internal resultants

A cut through a member generally exposes:

- Axial force $N$
- Shear force $V$
- Bending moment $M$
- Torque $T$

These internal resultants are found by equilibrium of one side of the cut.

## Sign convention

Different textbooks use slightly different sign conventions. Be consistent within a problem.

The important point is not the exact convention but that:

- Equilibrium equations match the chosen convention
- Stress formulas are applied with the correct sign and orientation

## Shear force and bending moment diagrams

For beams loaded in a plane:

- The slope of the shear diagram equals the distributed load, up to sign convention.
- The slope of the moment diagram equals the shear force.

In differential form, with one common convention:

$$
\frac{dV}{dx} = -w(x)
$$

$$
\frac{dM}{dx} = V(x)
$$

where $w(x)$ is the distributed load.

## Useful diagram facts

- A concentrated force causes a jump in the shear diagram.
- A concentrated moment causes a jump in the moment diagram.
- Uniform distributed load gives a linear shear diagram.
- Constant shear gives a linear moment diagram.

---

# Bending stress in beams

## Flexure formula

For linear elastic bending:

$$
\sigma = \frac{My}{I}
$$

where:

- $M$ is the internal bending moment
- $y$ is the distance from the neutral axis
- $I$ is the second moment of area about the neutral axis

At the outer fiber:

$$
\sigma_{max} = \frac{Mc}{I}
$$

## Neutral axis

The neutral axis is the line in the cross-section where the normal stress from bending is zero.

For homogeneous, symmetric sections in pure bending, the neutral axis passes through the centroid.

## Section modulus

Section modulus is

$$
S = \frac{I}{c}
$$

so the maximum bending stress becomes

$$
\sigma_{max} = \frac{M}{S}
$$

This is useful in design because it packages geometry into one quantity.

## Second moment of area

Common results:

Solid rectangle about centroidal axis:

$$
I = \frac{bh^3}{12}
$$

Solid circle:

$$
I = \frac{\pi d^4}{64}
$$

Parallel-axis theorem:

$$
I = I_c + Ad^2
$$

where $I_c$ is about the centroidal axis and $d$ is the offset to the new axis.

## Composite beams

For beams made of different materials, transform one material into an equivalent material using the modular ratio:

$$
n = \frac{E_2}{E_1}
$$

Then locate the neutral axis and compute the transformed second moment of area.

The key assumptions are:

- Perfect bond between materials
- Plane sections remain plane
- Linear elastic behavior

---

# Beam shear stress

## General shear formula

For transverse shear in a beam:

$$
\tau = \frac{VQ}{It}
$$

where:

- $V$ is the internal shear force
- $Q$ is the first moment of area of the portion above or below the point
- $I$ is the second moment of area of the entire cross-section
- $t$ is the local thickness where the stress is evaluated

## Interpretation of Q

The first moment of area is

$$
Q = \bar{y}A'
$$

where $A'$ is the portion of area on one side of the cut and $\bar{y}$ is the distance from its centroid to the neutral axis.

## Important distribution facts

- Shear stress is zero at free top and bottom surfaces of common beam sections.
- Maximum shear stress often occurs at the neutral axis.
- Rectangular sections have a parabolic shear stress distribution.
- Thin-walled sections require careful treatment of thickness variation.

## Average vs local shear

The average shear stress

$$
\tau_{avg} = \frac{V}{A}
$$

is rarely sufficient for beam sections because the local distribution is not uniform.

---

# Stress and strain transformations

## Plane stress state

A 2D stress state usually has:

$$
\sigma_x,\quad \sigma_y,\quad \tau_{xy}
$$

Normal and shear stresses on a rotated plane are found with transformation equations.

## Stress transformation equations

For a plane rotated by angle $\theta$:

$$
\sigma_{x'} = \frac{\sigma_x+\sigma_y}{2}
+ \frac{\sigma_x-\sigma_y}{2}\cos 2\theta
+ \tau_{xy}\sin 2\theta
$$

$$
\sigma_{y'} = \frac{\sigma_x+\sigma_y}{2}
- \frac{\sigma_x-\sigma_y}{2}\cos 2\theta
- \tau_{xy}\sin 2\theta
$$

$$
\tau_{x'y'} = -\frac{\sigma_x-\sigma_y}{2}\sin 2\theta
+ \tau_{xy}\cos 2\theta
$$

## Principal stresses

Principal stresses occur where shear stress is zero.

$$
\sigma_{1,2} = \frac{\sigma_x+\sigma_y}{2}
\pm
\sqrt{
\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2
}
$$

The maximum in-plane shear stress is

$$
\tau_{max} =
\sqrt{
\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2
}
$$

## Principal planes

The principal angle satisfies

$$
\tan 2\theta_p = \frac{2\tau_{xy}}{\sigma_x-\sigma_y}
$$

The maximum shear planes are 45 degrees from the principal planes in the stress-transformation sense.

## Strain transformation

Strains transform similarly, but use engineering shear strain and the appropriate strain relationships. When in doubt, be careful about factor-of-two differences between tensor shear strain and engineering shear strain.

---

# Mohr's circle

Mohr's circle is a graphical method for plane stress or plane strain transformation.

## What it gives

- Normal stress on rotated planes
- Shear stress on rotated planes
- Principal stresses
- Maximum shear stress
- Orientation of principal and shear planes

## Construction idea

For plane stress, plot the points:

$$
(\sigma_x,\ \tau_{xy})
$$

and

$$
(\sigma_y,\ -\tau_{xy})
$$

The center is

$$
C = \left(\frac{\sigma_x+\sigma_y}{2}, 0\right)
$$

and the radius is

$$
R =
\sqrt{
\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2
}
$$

Then:

$$
\sigma_1 = C_x + R
$$

$$
\sigma_2 = C_x - R
$$

$$
\tau_{max} = R
$$

## Common use

Mohr's circle is especially useful when a problem asks for stresses on an inclined plane or the orientation of a critical plane.

The algebraic formulas are faster if you already know the orientation.
The circle is safer if the geometry of the stress state is easy to mix up.

---

# Deflection of beams and shafts

## Beam curvature relation

For small deflections of an Euler-Bernoulli beam:

$$
\frac{1}{\rho} = \frac{M}{EI}
$$

and for small slopes:

$$
\frac{d^2v}{dx^2} = \frac{M(x)}{EI}
$$

with sign depending on convention.

## Integration method

Starting from the bending moment function:

$$
EI\frac{d^2v}{dx^2} = M(x)
$$

Integrate twice to obtain slope and deflection:

$$
EI\frac{dv}{dx} = \int M(x)\,dx + C_1
$$

$$
EIv = \int\!\!\int M(x)\,dx\,dx + C_1x + C_2
$$

Apply boundary conditions to determine constants.

## Common boundary conditions

- Simply supported end: deflection is zero
- Fixed end: deflection and slope are zero
- Free end: moment and shear conditions apply

## Superposition

If the material remains linear elastic and deflections are small, use superposition:

$$
v_{total} = \sum_i v_i
$$

This is often the fastest way to handle several load cases.

## Area-moment and conjugate-beam ideas

Some courses also use:

- Area-moment method
- Conjugate-beam method
- Virtual work or unit-load method

The key idea is the same: connect internal bending response to displacement.

## Shaft twist revisited

For torsion, the analogous relation is

$$
\frac{d\phi}{dx} = \frac{T(x)}{J(x)G(x)}
$$

so

$$
\phi = \int_0^L \frac{T(x)}{J(x)G(x)}\,dx
$$

---

# Columns and buckling

## Euler buckling

Slender columns can fail by instability before the material reaches yield.

Critical load for an ideal column:

$$
P_{cr} = \frac{\pi^2EI}{(KL)^2}
$$

where:

- $K$ is the effective length factor
- $L$ is the unsupported length
- $EI$ is the flexural rigidity

## Effective length factor

Common idealized end conditions change the effective length:

- Pinned-pinned: $K = 1$
- Fixed-free: $K = 2$
- Fixed-pinned: $K \approx 0.7$
- Fixed-fixed: $K = 0.5$

The exact value depends on the boundary condition model being used.

## Slenderness

Buckling becomes more likely as the slenderness ratio increases:

$$
\lambda = \frac{KL}{r}
$$

where

$$
r = \sqrt{\frac{I}{A}}
$$

is the radius of gyration.

## Design implication

A short stocky column usually fails by material yielding or crushing.
A slender column usually fails by elastic or inelastic buckling.

You must identify which regime applies before choosing the allowable load.

---

# Combined loading and failure criteria

## Superposition of stress components

Many members experience more than one type of loading:

- Axial load
- Bending
- Torsion
- Transverse shear

At a point, the combined stress state is the algebraic sum of the relevant components.

For example, an axial force plus bending gives:

$$
\sigma = \frac{P}{A} \pm \frac{My}{I}
$$

## Combined bending and torsion

For shafts with a transverse force and torque, you may need both:

- Normal stress from bending
- Shear stress from torsion

Then compare the combined state against a failure theory.

## Maximum normal stress criterion

For brittle materials, one simple check is:

$$
\sigma_{max} \le \sigma_{allow}
$$

using the maximum principal stress.

## Maximum shear stress criterion

For ductile materials, a common conservative check uses the maximum shear stress:

$$
\tau_{max} \le \tau_{allow}
$$

This is closely related to yielding in ductile metals.

## Distortion-energy idea

The von Mises criterion is widely used for ductile materials under multiaxial stress.

For plane stress:

$$
\sigma_{vm} = \sqrt{\sigma_x^2 - \sigma_x\sigma_y + \sigma_y^2 + 3\tau_{xy}^2}
$$

Yielding is predicted when

$$
\sigma_{vm} \ge \sigma_y
$$

where $\sigma_y$ is the yield strength.

## Engineering judgment

Use the failure criterion that matches the material and the type of failure expected.

- Ductile metal: often von Mises or maximum shear stress
- Brittle material: often maximum normal stress or Mohr-type criteria

---

# Fatigue and design checks

## Fatigue basics

Repeated or fluctuating stress can cause failure at stresses below the static strength.

Fatigue is usually described by:

- Stress amplitude
- Mean stress
- Number of cycles to failure

Stress amplitude and mean stress are

$$
\sigma_a = \frac{\sigma_{max}-\sigma_{min}}{2}
$$

$$
\sigma_m = \frac{\sigma_{max}+\sigma_{min}}{2}
$$

## S-N concept

An S-N curve relates stress amplitude to fatigue life. Lower stress generally means longer life.

## Goodman-type design idea

A common design relation is

$$
\frac{\sigma_a}{S_e} + \frac{\sigma_m}{S_{ut}} \le \frac{1}{n}
$$

where:

- $S_e$ is endurance limit
- $S_{ut}$ is ultimate tensile strength
- $n$ is factor of safety

Different courses and texts use slightly different fatigue diagrams. Use the one specified in the problem.

## Practical check list

- Identify whether loading is static or cyclic.
- Find local stress concentrations.
- Apply surface, size, and reliability factors if the course uses them.
- Compare against the appropriate fatigue criterion.

---

# Problem-solving workflow

## General workflow

1. Read the problem carefully and identify what must be found.
2. Sketch the member, support conditions, loads, and coordinate axes.
3. Draw free-body diagrams.
4. Solve for reactions using equilibrium.
5. Cut the member and determine internal force resultants.
6. Choose the relevant stress or deformation formula.
7. Check units and sign conventions.
8. Compare against allowable stress, twist, deflection, or buckling criteria.

## What to ask yourself

- Is the member in axial, torsional, bending, shear, or combined loading?
- Is the material linear elastic?
- Is the member prismatic or does geometry vary?
- Is the system determinate or indeterminate?
- Is the problem about strength, stiffness, or stability?

## Fast validation

- Stress units should be force per area.
- Strain should be dimensionless.
- Deflection should have units of length.
- Torque divided by polar moment should yield stress.
- Bending moment divided by section modulus should yield stress.

## If the answer seems unreasonable

Check:

- Sign convention
- Area or moment of inertia
- Unit conversions
- Whether a diameter or radius was used incorrectly
- Whether the neutral axis was located properly
- Whether the correct support condition was used for buckling or deflection

---

# Formula sheet

## Axial

$$
\sigma = \frac{P}{A}
$$

$$
\delta = \frac{PL}{AE}
$$

$$
\delta_{th} = \alpha L\Delta T
$$

## Torsion

$$
\tau = \frac{Tr}{J}
$$

$$
\phi = \frac{TL}{JG}
$$

$$
J_{solid} = \frac{\pi d^4}{32}
$$

$$
J_{hollow} = \frac{\pi(d_o^4-d_i^4)}{32}
$$

## Bending

$$
\sigma = \frac{My}{I}
$$

$$
\sigma_{max} = \frac{Mc}{I} = \frac{M}{S}
$$

$$
I_{rect} = \frac{bh^3}{12}
$$

$$
I_{circle} = \frac{\pi d^4}{64}
$$

$$
I = I_c + Ad^2
$$

## Beam shear

$$
\tau = \frac{VQ}{It}
$$

## Stress transformation

$$
\sigma_{1,2} = \frac{\sigma_x+\sigma_y}{2}
\pm
\sqrt{
\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2
}
$$

$$
\tau_{max} =
\sqrt{
\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2
}
$$

## Deflection and buckling

$$
\frac{d^2v}{dx^2} = \frac{M(x)}{EI}
$$

$$
P_{cr} = \frac{\pi^2EI}{(KL)^2}
$$

$$
r = \sqrt{\frac{I}{A}}
$$

## Multiaxial failure

$$
\sigma_{vm} = \sqrt{\sigma_x^2 - \sigma_x\sigma_y + \sigma_y^2 + 3\tau_{xy}^2}
$$

---

# Common mistakes

- Using the wrong area moment of inertia for the bending axis.
- Confusing polar moment of inertia $J$ with second moment of area $I$.
- Applying $\sigma = P/A$ to a nonuniform stress field without checking the assumptions.
- Forgetting that beam bending stress varies linearly with distance from the neutral axis.
- Using the average shear stress instead of the beam shear formula when local stress matters.
- Mixing up radius and diameter in torsion formulas.
- Forgetting that thermal strain can create stress only when expansion is restrained.
- Solving an indeterminate problem using equilibrium alone.
- Using Euler buckling for a column that is too stocky for elastic buckling to apply.
- Ignoring stress concentrations near holes, fillets, or shoulders.
- Checking only stress when deflection or twist is the governing limit.
- Using the wrong failure criterion for brittle versus ductile materials.

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
