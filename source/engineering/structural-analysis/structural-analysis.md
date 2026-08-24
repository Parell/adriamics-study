# Structural analysis

Structural analysis predicts the forces, reactions, displacements, and internal actions in a structure. The central distinction is between what equilibrium can determine and what requires deformation information. A structure is **statically determinate** when equilibrium alone is sufficient. It is **statically indeterminate** when additional equations based on compatibility and constitutive behavior are required.

The main solution families are:

- **Force methods:** choose redundant reactions or internal forces as unknowns, then enforce compatibility.
- **Stiffness methods:** choose nodal displacements as unknowns, relate them to forces with stiffness equations, and assemble the system.
- **Energy methods:** calculate a displacement or rotation from strain energy or virtual work.

These methods describe the same linear-elastic structure in different coordinates. A good analyst chooses the representation that makes the unknowns, boundary conditions, and checks clearest.

## Assumptions and notation

This note uses small-displacement, linear-elastic structural models. Let $\mathbf u$ be the vector of unknown displacements, $\mathbf f$ the applied nodal-load vector, and $\mathbf r$ the support-reaction vector. For a beam or frame, $E$ is Young's modulus, $A$ is area, $I$ is the second moment of area, and $L$ is member length.

The model may assume:

- supports and connections behave as ideal pins, rollers, or fixed ends;
- geometry and loads are known;
- material properties are constant over each member;
- deformation is small enough that the original geometry is adequate;
- superposition is valid;
- loads are applied slowly enough that inertia can be neglected.

State these assumptions before solving. A numerically precise answer from a poor idealization is not a reliable structural result.

## Equilibrium and determinacy

For a planar rigid body,

$$
\sum F_x=0,\qquad \sum F_y=0,\qquad \sum M_z=0.
$$

These equations enforce global equilibrium. A free-body diagram must show every external load and every unknown reaction, with a sign convention and dimensions.

For a simple planar structure, compare the number of independent unknown reaction components with the number of independent equilibrium equations. This count is a first diagnostic, not a complete test: internal releases, mechanisms, redundant members, and three-dimensional constraints can change the result.

If there are more unknowns than equilibrium equations, define the degree of static indeterminacy as the excess number, subject to the structure being stable. If there are too few effective constraints, the structure is a mechanism and has no unique static solution. A stable indeterminate structure needs compatibility equations in addition to equilibrium.

For a member cut, the internal actions commonly include axial force $N$, shear force $V$, and bending moment $M$. Equilibrium determines these actions for a determinate structure. Deformation relationships then connect the actions to displacement:

$$
\varepsilon=\frac{N}{EA},\qquad
\kappa=\frac{M}{EI},\qquad
\gamma\ \text{(if shear deformation is modeled)}.
$$

## Compatibility and constitutive behavior

Compatibility means that connected parts fit together after deformation. Typical conditions are:

- a fixed support has zero displacement and rotation;
- a pin permits rotation but imposes the appropriate translational constraints;
- connected members share the displacement of their joint;
- a rigid link preserves the specified distance or relative rotation;
- a support settlement imposes a known, rather than zero, displacement.

Equilibrium tells how forces balance. Compatibility tells how displacements agree. The constitutive law connects them. For an axial prismatic member,

$$
\delta=\frac{NL}{EA}.
$$

For bending, Euler--Bernoulli beam theory gives

$$
EI\frac{d^2v}{dx^2}=M(x),
$$

with the sign determined by the chosen convention. The boundary conditions on $v$ and $dv/dx$ provide the compatibility information needed after integrating.

A support settlement, temperature change, or fabrication error can create reactions in an indeterminate structure even with no external load. Compatibility must include the imposed deformation rather than automatically setting total displacement to zero.

## Force or flexibility method

The force method uses equilibrium to express the structure in terms of selected redundants. Remove each redundant to create a primary determinate structure. Apply the real loads and unit values of the redundants, then enforce the original displacement conditions.

For one redundant $X$ and a compatibility condition $\Delta=\Delta_0$,

$$
\Delta_{load}+fX=\Delta_0,
$$

where $f$ is the flexibility coefficient: the displacement in the redundant's direction caused by a unit redundant. Therefore,

$$
X=\frac{\Delta_0-\Delta_{load}}{f}.
$$

For multiple redundants,

$$
\begin{bmatrix}\Delta_1\\\Delta_2\\\vdots\end{bmatrix}
=
\begin{bmatrix}f_{11}&f_{12}&\cdots\\f_{21}&f_{22}&\cdots\\\vdots&\vdots&\ddots\end{bmatrix}
\begin{bmatrix}X_1\\X_2\\\vdots\end{bmatrix}
+\begin{bmatrix}\Delta_{1,load}\\\Delta_{2,load}\\\vdots\end{bmatrix}.
$$

The flexibility matrix is symmetric for a linear elastic conservative structure: $f_{ij}=f_{ji}$. This is a useful check on a hand calculation.

For a beam, the unit-load method evaluates a displacement directly:

$$
\Delta=\int_0^L\frac{M(x)m(x)}{EI}\,dx,
$$

where $M$ is the moment diagram from the real load and $m$ is the diagram from a unit force or unit moment in the desired direction. Include axial and torsional terms when they are significant.

## Energy methods

For a linearly elastic member, the strain energy is the work stored in deformation. Common contributions are

$$
U=\int\frac{N^2}{2EA}\,dx
+\int\frac{M^2}{2EI}\,dx
+\int\frac{T^2}{2GJ}\,dx
+\int\frac{V^2}{2kGA}\,dx.
$$

The terms are axial, bending, torsional, and shear energy. For slender beams, bending usually dominates; for short deep beams, shear may matter.

Castigliano's theorem gives the displacement in the direction of a load $P_i$:

$$
\delta_i=\frac{\partial U}{\partial P_i}.
$$

If a desired displacement has no existing load, introduce a dummy load $Q$ in that direction and evaluate

$$
\delta=\left.\frac{\partial U}{\partial Q}\right|_{Q=0}.
$$

The unit-load method and Castigliano's theorem are closely related. Use the unit-load form for a single displacement with convenient moment diagrams; use energy differentiation when the stored-energy expression is already simple.

## Stiffness method

The stiffness method makes displacements the primary unknowns. For a linear structure,

$$
\mathbf K\mathbf u=\mathbf f,
$$

where $\mathbf K$ is the global stiffness matrix. A member's local stiffness matrix relates its end forces to end displacements. For a two-node axial member aligned with its local axis,

$$
\mathbf k_e=\frac{EA}{L}
\begin{bmatrix}1&-1\\-1&1\end{bmatrix}.
$$

For a frame or beam, each node may have transverse displacement and rotation, so the element matrix has additional degrees of freedom. Transform local matrices into global coordinates, place each term into the rows and columns associated with the member's global degrees of freedom, and sum contributions at shared nodes.

Apply prescribed supports by eliminating constrained degrees of freedom, partitioning the equations, or using a carefully controlled constraint method. After solving free displacements, recover reactions from

$$
\mathbf r=\mathbf K\mathbf u-\mathbf f
$$

at constrained degrees of freedom. Check equilibrium, boundary conditions, symmetry, and limiting cases.

The stiffness matrix is usually symmetric for a linear elastic structure without nonconservative effects. A singular matrix often indicates an unconstrained rigid-body mode or mechanism. An unexpectedly ill-conditioned matrix can indicate poor units, extreme stiffness ratios, or an inadequate model.

## Worked example: propped cantilever

A prismatic cantilever of length $L$ and constant $EI$ is fixed at $A$ and supported vertically by a prop at its free end $B$. A downward force $P$ is applied at $B$. The vertical reaction at $B$, call it $R_B$, is one redundant because equilibrium alone cannot determine all reactions.

Remove the prop. The primary structure is a cantilever. Take upward displacement as positive. The end-load deflection from $P$ is

$$
\delta_P=-\frac{PL^3}{3EI}.
$$

The upward redundant $R_B$ produces

$$
\delta_R=+\frac{R_BL^3}{3EI}.
$$

Compatibility at the prop requires zero net vertical displacement:

$$
\delta_P+\delta_R=0.
$$

Therefore,

$$
-\frac{PL^3}{3EI}+\frac{R_BL^3}{3EI}=0
\quad\Longrightarrow\quad
R_B=P.
$$

Vertical equilibrium then gives $A_y=P-R_B=0$. Moment equilibrium about $A$ gives the fixed-end reaction moment $M_A=0$ for this particular load arrangement. The result is physically reasonable: the prop carries the applied end force, leaving no net force or moment to be carried at the fixed end in the ideal model. The support still prevents translation and rotation, but its reactions happen to be zero for this loading.

This example also illustrates a danger: a reaction can be zero under one load case and become nonzero under another. Never infer support irrelevance from one result.

## Practical solution workflow

1. Define geometry, material, loads, supports, releases, and the response of interest.
2. Draw a complete free-body diagram and count unknowns, equations, and possible mechanisms.
3. Select a sign convention and keep it through equilibrium, compatibility, and deformation equations.
4. Choose redundants for a force method or degrees of freedom for a stiffness method.
5. Write compatibility conditions, including settlements, temperature effects, and rigid-link constraints.
6. Solve symbolically as far as useful, then substitute values with consistent units.
7. Recover reactions and internal actions, then check equilibrium and boundary conditions.
8. Check strength, serviceability, stability, sensitivity to stiffness, and whether the assumptions remain valid.

## Common mistakes

- Calling a structure indeterminate without checking whether it is stable.
- Trying to solve redundant reactions from equilibrium alone.
- Removing a redundant but forgetting to restore its compatibility condition.
- Using a force method when the chosen primary structure is itself unstable.
- Mixing displacement signs between the real-load and unit-load cases.
- Applying $M/EI$ bending energy to a member where shear deformation dominates.
- Constraining a stiffness-model degree of freedom twice or failing to constrain a rigid-body mode.
- Treating support settlement as a load when it is actually a prescribed displacement.
- Using an unverified numerical result without checking reactions and residual equilibrium.

## Practice problems

### Problem 1: classify the model

A planar beam has four independent reaction components and only three independent rigid-body equilibrium equations. It is stable. What additional kind of relation is required?

**Solution.**

The beam is statically indeterminate to degree one. One compatibility relation, together with a constitutive deformation relation such as $EI v''=M$, is required.

### Problem 2: axial compatibility

Two identical axial bars, each with stiffness $k=EA/L$, support a rigid plate carrying a centered load $P$. The geometry is symmetric and the plate remains level. Find the force in each bar.

**Solution.**

Compatibility requires equal bar extensions and therefore equal forces, $N_1=N_2$. Equilibrium gives $N_1+N_2=P$, so

$$
N_1=N_2=\frac{P}{2}.
$$

The displacement is $\delta=P/(2k)$.

### Problem 3: unit-load displacement

For a beam, the real-load moment is $M(x)=P(L-x)$ and the unit-load moment for a free-end displacement is $m(x)=L-x$. Find the displacement using the unit-load method for constant $EI$.

**Solution.**

$$
\delta=\int_0^L\frac{P(L-x)^2}{EI}\,dx
 =\frac{P}{EI}\left[\frac{(L-x)^3}{-3}\right]_0^L
 =\frac{PL^3}{3EI}.
$$

This is the familiar cantilever end-load deflection.

### Problem 4: stiffness interpretation

A solved stiffness model has a nearly singular global matrix. Give two likely causes and one check for each.

**Solution.**

The model may contain an unconstrained rigid-body mode; inspect the supports and animate or inspect the corresponding eigenvector. It may also have inconsistent units or extreme stiffness ratios; audit units and compare the matrix diagonal magnitudes. A mechanism or duplicate constraint should also be checked.

## Summary checklist

- Equilibrium balances forces and moments.
- Compatibility makes connected deformations fit.
- Constitutive laws relate force resultants to deformation.
- Force methods solve for redundant forces.
- Stiffness methods solve for displacements through $\mathbf K\mathbf u=\mathbf f$.
- Energy and unit-load methods find selected displacements efficiently.
- Every final result needs equilibrium, compatibility, units, and physical-reasonableness checks.

Structural analysis is therefore a modeling discipline as much as an algebraic one: identify the constraints, choose the unknowns that expose them, and use independent checks before trusting the result.

## Sources

- [Engineering LibreTexts](https://eng.libretexts.org/)
- Hibbeler, *Structural Analysis*
- Gere and Goodno, *Mechanics of Materials*
- Kassimali, *Structural Analysis*
