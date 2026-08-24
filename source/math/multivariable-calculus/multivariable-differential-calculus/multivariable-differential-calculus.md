# Multivariable Calculus

This module studies local change in functions of several variables. Learn it before multiple integrals: gradients, Jacobians, and Hessians describe the local information that later appears in coordinate changes, optimization, and field models.

## Functions and geometry

A scalar-valued function of two variables is

$$
f:D\subseteq\mathbb{R}^2\to\mathbb{R},\qquad z=f(x,y).
$$

Its graph is a surface, and a level curve is $f(x,y)=c$. A vector-valued map returns a vector, such as a velocity field

$$
\mathbf{v}(x,y,z)=\langle u(x,y,z),v(x,y,z),w(x,y,z)\rangle.
$$

## Partial and directional derivatives

Partial derivatives measure change along coordinate directions:

$$
f_x=\lim_{h\to0}\frac{f(x+h,y)-f(x,y)}h,
\qquad
f_y=\lim_{h\to0}\frac{f(x,y+h)-f(x,y)}h.
$$

The directional derivative in a unit direction $\mathbf{u}$ is

$$
D_{\mathbf{u}}f=\nabla f\cdot\mathbf{u}.
$$

The gradient is

$$
\nabla f=\langle f_x,f_y,f_z\rangle.
$$

It points in the direction of steepest increase, with maximum rate $\|\nabla f\|$, and is normal to a level curve or surface.

## Tangent planes, differentials, and linearization

For $z=f(x,y)$, the tangent plane at $(a,b,f(a,b))$ is

$$
z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b).
$$

The total differential gives the first-order change:

$$
df=f_x\,dx+f_y\,dy.
$$

More generally, differentiability means

$$
f(\mathbf{a}+\mathbf{h})=f(\mathbf{a})+\nabla f(\mathbf{a})\cdot\mathbf{h}+o(\|\mathbf{h}\|).
$$

For independent measurement uncertainties, a common estimate is

$$
\sigma_f\approx\sqrt{(f_x\sigma_x)^2+(f_y\sigma_y)^2}.
$$

## Jacobians and the chain rule

For $\mathbf{F}:\mathbb{R}^n\to\mathbb{R}^m$, the Jacobian matrix is

$$
J_{\mathbf{F}}=\left[\frac{\partial F_i}{\partial x_j}\right].
$$

It is the linear approximation:

$$
\mathbf{F}(\mathbf{x}+\Delta\mathbf{x})\approx\mathbf{F}(\mathbf{x})+J_{\mathbf{F}}(\mathbf{x})\Delta\mathbf{x}.
$$

For a composition,

$$
J_{\mathbf{G}\circ\mathbf{F}}(\mathbf{x})
=J_{\mathbf{G}}(\mathbf{F}(\mathbf{x}))J_{\mathbf{F}}(\mathbf{x}).
$$

If $F(x,y)=0$ defines $y$ locally as a function of $x$ and $F_y\ne0$, then

$$
\frac{dy}{dx}=-\frac{F_x}{F_y}.
$$

## Hessians, curvature, and extrema

The Hessian collects second derivatives:

$$
H_f=\nabla^2f=\begin{bmatrix}f_{xx}&f_{xy}\\f_{yx}&f_{yy}\end{bmatrix}.
$$

The second-order Taylor approximation is

$$
f(\mathbf{a}+\mathbf{h})\approx f(\mathbf{a})+\nabla f(\mathbf{a})\cdot\mathbf{h}
+\frac12\mathbf{h}^{\mathsf T}H_f(\mathbf{a})\mathbf{h}.
$$

For a two-variable critical point, let $D=f_{xx}f_{yy}-(f_{xy})^2$. If $D>0$ and $f_{xx}>0$ it is a local minimum; if $D>0$ and $f_{xx}<0$ it is a local maximum; if $D<0$ it is a saddle; and if $D=0$ the test is inconclusive.

For constrained extrema, solve

$$
\nabla f=\lambda\nabla g,\qquad g=c,
$$

then compare all candidates and account for the domain.

## Checkpoint

You are ready for [Multiple Integrals](/study/math/multivariable-calculus/multiple-integrals/) when you can compute a gradient, form a linear approximation, interpret a Jacobian, classify ordinary critical points, and set up a Lagrange-multiplier system.
