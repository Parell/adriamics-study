# Stress and traction

The traction acting on a plane with unit normal $\mathbf n$ is

$$
\mathbf t^{(\mathbf n)} = \boldsymbol\sigma\mathbf n,
$$

where $\boldsymbol\sigma$ is the Cauchy stress tensor. In Cartesian coordinates,

$$
\boldsymbol\sigma = \begin{bmatrix}
\sigma_x & \tau_{xy} & \tau_{xz}\\
\tau_{yx} & \sigma_y & \tau_{yz}\\
\tau_{zx} & \tau_{zy} & \sigma_z
\end{bmatrix}.
$$

For a classical continuum without couple stresses, angular momentum balance gives $\boldsymbol\sigma=\boldsymbol\sigma^T$.

The principal stresses are the eigenvalues of $\boldsymbol\sigma$. They act on planes where the traction has no shear component and are useful for yield and fracture criteria.

## Principal stresses and directions

The principal stresses $\sigma_i$ and their associated unit directions $\mathbf n_i$ satisfy the eigenvalue problem

$$
\boldsymbol\sigma\mathbf n_i=\sigma_i\mathbf n_i.
$$

They can be found from the characteristic equation

$$
\det(\boldsymbol\sigma-\sigma\mathbf I)=0.
$$

For a plane-stress state, the two in-plane principal stresses are

$$
\sigma_{1,2}=\frac{\sigma_x+\sigma_y}{2}
\pm\sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2+\tau_{xy}^2},
$$

with $\sigma_1\geq\sigma_2$. The orientation $\theta_p$ of a principal plane measured from the $x$ axis obeys

$$
\tan(2\theta_p)=\frac{2\tau_{xy}}{\sigma_x-\sigma_y}.
$$

The two principal planes are perpendicular. On a principal plane, the normal traction is a principal stress and the shear traction is zero. This is why principal stresses are often more useful than the original Cartesian components for failure checks.

The maximum in-plane shear stress is

$$
\tau_{\max}=\frac{\sigma_1-\sigma_2}{2},
$$

and it occurs on planes oriented $45^\circ$ from the principal planes. In three dimensions, order the principal stresses as $\sigma_1\geq\sigma_2\geq\sigma_3$; the absolute maximum shear stress is

$$
\tau_{\max,\,3D}=\frac{\sigma_1-\sigma_3}{2}.
$$

The mean stress is $\sigma_m=(\sigma_1+\sigma_2+\sigma_3)/3$, while the differences between principal stresses control the deviatoric, distortion-producing part of the state.

## Stress and strain tensors

Stress and strain are second-order tensors: their components depend on the chosen coordinate basis, but the physical state does not. In three dimensions,

$$
\boldsymbol\sigma =
\begin{bmatrix}
\sigma_{xx} & \tau_{xy} & \tau_{xz}\\
\tau_{xy} & \sigma_{yy} & \tau_{yz}\\
\tau_{xz} & \tau_{yz} & \sigma_{zz}
\end{bmatrix},
\qquad
\boldsymbol\varepsilon =
\begin{bmatrix}
\varepsilon_{xx} & \varepsilon_{xy} & \varepsilon_{xz}\\
\varepsilon_{xy} & \varepsilon_{yy} & \varepsilon_{yz}\\
\varepsilon_{xz} & \varepsilon_{yz} & \varepsilon_{zz}
\end{bmatrix}.
$$

The diagonal terms are normal stresses or strains. The off-diagonal terms are shear components. Tensor shear strain is half the corresponding engineering shear strain:

$$
\gamma_{xy}=2\varepsilon_{xy},\qquad \gamma_{xz}=2\varepsilon_{xz},\qquad \gamma_{yz}=2\varepsilon_{yz}.
$$

Under a rotation represented by the orthogonal matrix $\mathbf Q$, tensor components transform as

$$
\boldsymbol\sigma' = \mathbf Q\boldsymbol\sigma\mathbf Q^T,
\qquad
\boldsymbol\varepsilon' = \mathbf Q\boldsymbol\varepsilon\mathbf Q^T.
$$

Useful coordinate-independent quantities include the trace, determinant, and stress invariants. The first stress invariant is

$$
I_1=\operatorname{tr}(\boldsymbol\sigma)=\sigma_{xx}+\sigma_{yy}+\sigma_{zz}.
$$

The mean or hydrostatic stress is $p=I_1/3$. The deviatoric stress tensor, which represents the distortion-producing part of stress, is

$$
\mathbf s=\boldsymbol\sigma-p\mathbf I.
$$

In plane stress, $\sigma_{zz}=\tau_{xz}=\tau_{yz}=0$. In plane strain, the out-of-plane strain components are constrained, but $\sigma_{zz}$ generally is not zero.

# Strain and displacement

For small deformation, the infinitesimal strain tensor is

$$
\boldsymbol\varepsilon = \frac12\left(\nabla\mathbf u + (\nabla\mathbf u)^T\right),
$$

where $\mathbf u$ is the displacement field. Normal strain measures extension; engineering shear strain is $\gamma_{xy}=2\varepsilon_{xy}$.

Rigid translation and rotation produce no strain. A compatible strain field must arise from a single-valued displacement field; this requirement is expressed by the compatibility equations.

# Constitutive behavior

For a homogeneous, isotropic, linear-elastic solid,

$$
\boldsymbol\sigma = 2G\boldsymbol\varepsilon + \lambda\,\operatorname{tr}(\boldsymbol\varepsilon)\mathbf I,
$$

where $G$ and $\lambda$ are LamÃ© constants. In terms of Young's modulus $E$ and Poisson's ratio $\nu$,

$$
G=\frac{E}{2(1+\nu)},\qquad \lambda=\frac{E\nu}{(1+\nu)(1-2\nu)}.
$$

Linear elasticity is appropriate only while the material response is approximately reversible and proportional. Plasticity, viscoelasticity, damage, and fracture require additional constitutive models.

## Generalized Hooke's law

For a homogeneous, isotropic, small-strain elastic solid, generalized Hooke's law relates every stress component to every normal strain component and the corresponding shear strain:

$$
\begin{aligned}
\varepsilon_x &= \frac{1}{E}\left(\sigma_x-\nu(\sigma_y+\sigma_z)\right),\\
\varepsilon_y &= \frac{1}{E}\left(\sigma_y-\nu(\sigma_x+\sigma_z)\right),\\
\varepsilon_z &= \frac{1}{E}\left(\sigma_z-\nu(\sigma_x+\sigma_y)\right),\\
\gamma_{xy} &= \frac{\tau_{xy}}{G},\qquad
\gamma_{yz}=\frac{\tau_{yz}}{G},\qquad
\gamma_{zx}=\frac{\tau_{zx}}{G}.
\end{aligned}
$$

The equivalent stiffness form is

$$
\boldsymbol\sigma = 2G\boldsymbol\varepsilon+\lambda\,\operatorname{tr}(\boldsymbol\varepsilon)\mathbf I,
$$

with

$$
G=\frac{E}{2(1+\nu)},\qquad
\lambda=\frac{E\nu}{(1+\nu)(1-2\nu)}.
$$

Thus, an isotropic linear-elastic material is fully specified by any two independent elastic constants, commonly $E$ and $\nu$. Other useful constants are the bulk modulus

$$
K=\frac{E}{3(1-2\nu)}=\lambda+\frac{2G}{3}.
$$

For plane stress, $\sigma_z=\tau_{xz}=\tau_{yz}=0$, so

$$
\begin{bmatrix}\varepsilon_x\\\varepsilon_y\\\gamma_{xy}\end{bmatrix}
=\begin{bmatrix}
1/E & -\nu/E & 0\\
-\nu/E & 1/E & 0\\
0 & 0 & 1/G
\end{bmatrix}
\begin{bmatrix}\sigma_x\\\sigma_y\\\tau_{xy}\end{bmatrix}.
$$

For plane strain, $\varepsilon_z=\gamma_{xz}=\gamma_{yz}=0$; the out-of-plane stress $\sigma_z$ must be found from the constitutive equations and is generally nonzero. Hooke's law applies only within the linear elastic range and does not describe permanent deformation after unloading.

## Plane stress and plane strain

These are two-dimensional idealizations of a three-dimensional solid. The correct choice depends on geometry, loading, and which direction is effectively unconstrained.

### Plane stress

Plane stress assumes that the faces normal to the $z$ direction are traction-free or carry negligible traction:

$$
\sigma_z=\tau_{xz}=\tau_{yz}=0.
$$

The in-plane constitutive equations are

$$
\begin{bmatrix}\sigma_x\\\sigma_y\\\tau_{xy}\end{bmatrix}
=\begin{bmatrix}
\dfrac{E}{1-\nu^2} & \dfrac{\nu E}{1-\nu^2} & 0\\
\dfrac{\nu E}{1-\nu^2} & \dfrac{E}{1-\nu^2} & 0\\
0 & 0 & G
\end{bmatrix}
\begin{bmatrix}\varepsilon_x\\\varepsilon_y\\\gamma_{xy}\end{bmatrix}.
$$

Although $\sigma_z=0$, the out-of-plane strain is generally nonzero:

$$
\varepsilon_z=-\frac{\nu}{E}(\sigma_x+\sigma_y).
$$

Thin plates, thin sheets, and thin regions near free surfaces are commonly modeled with plane stress.

### Plane strain

Plane strain assumes that deformation in the $z$ direction is prevented or negligible:

$$
\varepsilon_z=\gamma_{xz}=\gamma_{yz}=0.
$$

For an isotropic material, the out-of-plane stress is

$$
\sigma_z=\nu(\sigma_x+\sigma_y).
$$

The in-plane equations can be written as

$$
\begin{bmatrix}\sigma_x\\\sigma_y\\\tau_{xy}\end{bmatrix}
=\begin{bmatrix}
\dfrac{E(1-\nu)}{(1+\nu)(1-2\nu)} & \dfrac{E\nu}{(1+\nu)(1-2\nu)} & 0\\
\dfrac{E\nu}{(1+\nu)(1-2\nu)} & \dfrac{E(1-\nu)}{(1+\nu)(1-2\nu)} & 0\\
0 & 0 & G
\end{bmatrix}
\begin{bmatrix}\varepsilon_x\\\varepsilon_y\\\gamma_{xy}\end{bmatrix}.
$$

Long tunnels, dams, retaining structures, and the interior of very long bodies are often approximated as plane strain. Plane stress and plane strain are not interchangeable: plane stress sets out-of-plane stresses to zero, while plane strain sets out-of-plane strains to zero.

# Equilibrium, energy, and failure

In the absence of inertia, body force $\mathbf b$, and prescribed traction $\mathbf t$, equilibrium is

$$
\nabla\cdot\boldsymbol\sigma + \mathbf b = \mathbf 0.
$$

The strain-energy density for linear elasticity is

$$
W=\frac12\boldsymbol\sigma:\boldsymbol\varepsilon.
$$

## Energy methods

Energy methods determine displacements and rotations from work and strain energy rather than by integrating the full displacement field directly. For a linearly elastic body loaded gradually from zero to its final load, the total strain energy is

$$
U=\int_V \frac12\boldsymbol\sigma:\boldsymbol\varepsilon\,dV.
$$

For common one-dimensional members, this becomes

$$
U=\int \frac{N^2}{2EA}\,dx
 +\int \frac{M^2}{2EI}\,dx
 +\int \frac{V^2}{2\kappa GA}\,dx
 +\int \frac{T^2}{2GJ}\,dx,
$$

where $N$, $M$, $V$, and $T$ are the internal axial force, bending moment, shear force, and torque. The shear term is often neglected for slender beams; $\kappa$ is the shear-correction factor.

### Castigliano's theorem

If the strain energy $U$ is expressed in terms of an applied force or moment, the corresponding displacement or rotation is

$$
\delta_i=\frac{\partial U}{\partial P_i},
\qquad
\theta_i=\frac{\partial U}{\partial M_i}.
$$

For example, if a constant axial force $P$ stretches a prismatic bar of length $L$ and area $A$,

$$
U=\frac{P^2L}{2EA},
\qquad
\delta=\frac{\partial U}{\partial P}=\frac{PL}{EA}.
$$

### Unit-load method

To find a displacement at a point, apply a virtual unit force or unit moment in the desired direction. For a beam with bending moment $M(x)$ from the real loads and $m(x)$ from the unit load,

$$
\delta=\int_0^L\frac{M(x)m(x)}{EI}\,dx.
$$

More generally, axial, bending, shear, and torsional contributions are added:

$$
\delta=\int\left(\frac{Nn}{EA}+\frac{Mm}{EI}+\frac{Vv}{\kappa GA}+\frac{Tt}{GJ}\right)dx.
$$

Energy methods require a compatible, linearly elastic model and correctly signed internal-force diagrams. They are especially useful for finding one or a few displacements in statically determinate or indeterminate structures.

## Yield criteria

Yield criteria predict the onset of plastic deformation in a ductile material from the stress state. Let the ordered principal stresses be $\sigma_1\geq\sigma_2\geq\sigma_3$, and let $\sigma_Y$ be the uniaxial yield strength.

### Tresca criterion

The Tresca, or maximum-shear-stress, criterion predicts yielding when

$$
\tau_{\max}=\frac{\sigma_1-\sigma_3}{2}=\frac{\sigma_Y}{2},
$$

or equivalently,

$$
\sigma_1-\sigma_3=\sigma_Y.
$$

Tresca is simple and conservative for many ductile metals. It depends only on the largest difference between principal stresses, so hydrostatic stress does not cause yielding in this idealization.

### von Mises criterion

The von Mises, or distortion-energy, criterion uses the equivalent stress

$$
\sigma_{\mathrm{vm}}=
\sqrt{\frac{(\sigma_1-\sigma_2)^2+(\sigma_2-\sigma_3)^2+(\sigma_3-\sigma_1)^2}{2}}.
$$

Yielding begins when

$$
\sigma_{\mathrm{vm}}=\sigma_Y.
$$

In Cartesian components,

$$
\sigma_{\mathrm{vm}}=
\sqrt{\sigma_x^2+\sigma_y^2+\sigma_z^2-
\sigma_x\sigma_y-\sigma_y\sigma_z-\sigma_z\sigma_x+
3(\tau_{xy}^2+\tau_{yz}^2+\tau_{zx}^2)}.
$$

For pure shear, von Mises gives $\tau_Y=\sigma_Y/\sqrt{3}$, while Tresca gives $\tau_Y=\sigma_Y/2$. The factor of safety against initial yield can therefore be written as $n=\sigma_Y/\sigma_{\mathrm{eq}}$, using the equivalent stress from the selected criterion.

Engineering checks commonly include yielding, fracture, excessive deformation, buckling, fatigue, and contact failure. Always state the assumptions, sign convention, coordinate system, units, and failure criterion before calculating.

# Elasticity and plasticity

## Elasticity

Elastic deformation is recoverable: when the load is removed, the body returns to its original shape. In linear elasticity, stress is proportional to strain and the stiffness is constant:

$$
\boldsymbol\sigma=\mathbf C:\boldsymbol\varepsilon.
$$

For an isotropic material, $E$ and $\nu$ determine the stiffness. Elasticity is generally valid only for small strains and stresses below yield. The elastic strain energy density is

$$
W=\frac12\boldsymbol\sigma:\boldsymbol\varepsilon.
$$

## Plasticity

Plastic deformation is permanent. After unloading, the total strain remains divided into elastic and plastic parts:

$$
\boldsymbol\varepsilon=\boldsymbol\varepsilon^e+\boldsymbol\varepsilon^p.
$$

The elastic part is recovered during unloading; the plastic part remains. A simple uniaxial idealization is

$$
\varepsilon=\frac{\sigma}{E}+\varepsilon^p.
$$

The yield surface separates elastic and plastic stress states. For von Mises plasticity,

$$
f(\boldsymbol\sigma)=\sigma_{\mathrm{vm}}-\sigma_Y\leq0.
$$

The conditions are:

- $f<0$: elastic state
- $f=0$: initial yielding or active plastic loading
- $f>0$: inadmissible stress state in the ideal model

During plastic loading, the yield strength may change. Isotropic hardening expands the yield surface, while kinematic hardening translates it and is useful for cyclic loading. An ideal perfectly plastic material keeps the same yield stress after yielding.

## Uniaxial stress--strain curve

Important regions of a ductile material's curve are:

1. Linear elastic region: slope $E$.
2. Yield point: permanent deformation begins.
3. Plastic region: strain grows with limited stress increase.
4. Strain hardening: additional plastic strain requires increasing stress.
5. Ultimate tensile strength and necking.
6. Fracture.

The area under the elastic portion represents recoverable energy; the area associated with plastic deformation represents energy dissipated as permanent work and heat.

## Elastic versus plastic analysis

Use an elastic model when stresses are below yield and unloading recovery matters. Use a plasticity model when permanent deformation, residual stress, collapse load, metal forming, or cyclic response matters. A common calculation sequence is:

$$
\text{trial elastic stress}\rightarrow\text{yield check}\rightarrow\text{plastic correction}\rightarrow\text{update hardening}.
$$

## Quick study summary

| Topic | Main idea | Key equation |
|---|---|---|
| Stress tensor | Traction depends on plane orientation | $\mathbf t^{(\mathbf n)}=\boldsymbol\sigma\mathbf n$ |
| Strain tensor | Small deformation from displacement gradients | $\boldsymbol\varepsilon=\tfrac12(\nabla\mathbf u+\nabla\mathbf u^T)$ |
| Hooke's law | Linear elastic stress--strain relation | $\boldsymbol\sigma=2G\boldsymbol\varepsilon+\lambda\operatorname{tr}(\boldsymbol\varepsilon)\mathbf I$ |
| Principal stress | Eigenvalues of the stress tensor | $\boldsymbol\sigma\mathbf n=\sigma\mathbf n$ |
| Plane stress | Out-of-plane stresses vanish | $\sigma_z=\tau_{xz}=\tau_{yz}=0$ |
| Plane strain | Out-of-plane strains vanish | $\varepsilon_z=\gamma_{xz}=\gamma_{yz}=0$ |
| Energy methods | Work and strain energy give displacement | $\delta=\partial U/\partial P$ |
| Tresca | Yield controlled by maximum shear stress | $\sigma_1-\sigma_3=\sigma_Y$ |
| von Mises | Yield controlled by distortion energy | $\sigma_{\mathrm{vm}}=\sigma_Y$ |
| Plasticity | Permanent strain remains after unloading | $\boldsymbol\varepsilon=\boldsymbol\varepsilon^e+\boldsymbol\varepsilon^p$ |

## Problem-solving checklist

1. Define the coordinate system and sign convention.
2. Write equilibrium equations.
3. Assemble the stress and strain tensors.
4. Apply the correct constitutive law.
5. Decide whether the state is plane stress, plane strain, or three-dimensional.
6. Calculate principal stresses or an equivalent stress if failure is relevant.
7. Check yield, deformation, and units.

## Sources

- [Engineering LibreTexts](https://eng.libretexts.org/)
- Gere and Goodno, *Mechanics of Materials*
- Sadd, *Elasticity: Theory, Applications, and Numerics*
