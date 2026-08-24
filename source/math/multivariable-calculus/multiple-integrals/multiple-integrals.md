# Multiple Integrals

Multiple integrals accumulate quantities over areas and volumes. They are the second module in [Multivariable Calculus](/study/math/multivariable-calculus/multivariable-differential-calculus/), after differential calculus and before vector calculus.

## Meaning and bounds

For a surface density $\rho(x,y)$, mass over a region $R$ is

$$
m=\iint_R\rho(x,y)\,dA.
$$

For a volume density, mass over $E$ is

$$
m=\iiint_E\rho(x,y,z)\,dV.
$$

Over a rectangle, Fubini's theorem gives an iterated integral:

$$
\iint_Rf\,dA=\int_a^b\int_c^d f(x,y)\,dy\,dx.
$$

For a nonrectangular region, sketch first. Describe the same region with the reversed order before changing the bounds.

## Average value and center of mass

If $A=\iint_R1\,dA$, the average value is

$$
f_{\mathrm{avg}}=\frac1A\iint_Rf\,dA.
$$

For a lamina,

$$
\bar x=\frac1m\iint_Rx\rho\,dA,
\qquad
\bar y=\frac1m\iint_Ry\rho\,dA.
$$

The same pattern produces moments and rotational inertias when the appropriate distance-squared factor is included.

## Cylindrical and polar coordinates

For circular geometry,

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad dA=r\,dr\,d\theta.
$$

The factor $r$ is the Jacobian determinant. For a disk of radius $a$,

$$
\iint_{x^2+y^2\le a^2}f\,dA
=\int_0^{2\pi}\int_0^a f(r\cos\theta,r\sin\theta)r\,dr\,d\theta.
$$

In three dimensions, cylindrical coordinates add $z$ and use $dV=r\,dr\,d\theta\,dz$.

## Spherical coordinates

Using $\phi$ measured from the positive $z$-axis,

$$
x=\rho\sin\phi\cos\theta,\quad y=\rho\sin\phi\sin\theta,\quad z=\rho\cos\phi,
$$

and

$$
dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta.
$$

For a full sphere, $0\le\rho\le a$, $0\le\phi\le\pi$, and $0\le\theta\le2\pi$. State the angle convention because some texts interchange $\theta$ and $\phi$.

## General change of variables

If $(x,y)=(x(u,v),y(u,v))$, then

$$
dA=\left|\frac{\partial(x,y)}{\partial(u,v)}\right|du\,dv,
\qquad
\frac{\partial(x,y)}{\partial(u,v)}
=\det\begin{bmatrix}x_u&x_v\\y_u&y_v\end{bmatrix}.
$$

In three dimensions use $|\det J|$ for volume. Check one-to-one behavior and multiplicity; the absolute value accounts for positive area or volume.

## Checkpoint

You are ready for [Vector Calculus](/study/math/vector-calculus/) when you can set up iterated bounds, choose coordinates from geometry, include the correct Jacobian, and interpret an integral as a physical total.
