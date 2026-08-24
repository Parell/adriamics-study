<!--
id: multivariable-differential-calculus-11
note: math-multivariable-calculus
title: "Compute a Gradient"
exam: exam-i
skills: [Gradient, Partial Derivatives]
-->

For $f(x,y)=x^2y+3y$, compute $\nabla f$ at $(2,-1)$.

:::solution
$f_x=2xy$ and $f_y=x^2+3$, so $\nabla f(2,-1)=\langle-4,7\rangle$.
:::

<!--
id: multivariable-differential-calculus-12
note: math-multivariable-calculus
title: "Find a Directional Derivative"
exam: exam-i
skills: [Directional Derivative]
-->

For $f(x,y)=x^2+y^2$, find the directional derivative at $(1,2)$ toward $(4,6)$.

:::solution
$\nabla f(1,2)=\langle2,4\rangle$ and the unit direction is $\langle3,4\rangle/5$. Thus $D_uf=22/5$.
:::

<!--
id: multivariable-differential-calculus-21
note: math-multivariable-calculus
title: "Use a Linear Approximation"
exam: exam-ii
skills: [Linearization]
-->

Use the linearization of $f(x,y)=\sqrt{x^2+y^2}$ at $(3,4)$ to estimate $f(3.1,3.9)$.

:::solution
$f(3,4)=5$, $f_x=3/5$, and $f_y=4/5$. Therefore $L=5+(3/5)(0.1)+(4/5)(-0.1)=4.98$.
:::

<!--
id: multivariable-differential-calculus-22
note: math-multivariable-calculus
title: "Classify a Critical Point"
exam: exam-ii
skills: [Hessian Test, Critical Points]
-->

Classify the critical point $(0,0)$ of $f(x,y)=x^2+4y^2$.

:::solution
The Hessian is $\operatorname{diag}(2,8)$, which is positive definite. The point is a strict local minimum.
:::

<!--
id: multivariable-differential-calculus-31
note: math-multivariable-calculus
title: "Set Up a Lagrange System"
exam: final
skills: [Lagrange Multipliers]
-->

Set up, but do not solve, the Lagrange equations for maximizing $f(x,y)=xy$ subject to $x^2+y^2=1$.

:::solution
Set $g=x^2+y^2-1$. The system is $\nabla f=\lambda\nabla g$, namely $\langle y,x\rangle=\lambda\langle2x,2y\rangle$ together with $x^2+y^2=1$.
:::

<!--
id: multivariable-differential-calculus-41
note: math-multivariable-calculus
title: "Interpret a Jacobian"
exam: final
skills: [Jacobian, Linear Approximation]
-->

For $F(x,y)=(x+y,x-y)$, write its Jacobian and explain what it maps locally.

:::solution
$J_F=\begin{bmatrix}1&1\\1&-1\end{bmatrix}$. It maps a small input displacement to the corresponding first-order output displacement.
:::
