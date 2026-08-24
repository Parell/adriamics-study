<!--
id: optimization-11
note: math-optimization
title: "Find a Stationary Point"
exam: exam-i
skills: [Gradient, Stationary Points]
-->

Find the stationary point of $f(x,y)=x^2+2y^2-4x+8y$.

:::solution
$\nabla f=\langle2x-4,4y+8\rangle=0$, so $(x,y)=(2,-2)$.
:::

<!--
id: optimization-12
note: math-optimization
title: "Classify a Quadratic"
exam: exam-i
skills: [Hessian, Convexity]
-->

Is $f(x,y)=3x^2+2xy+3y^2$ strictly convex?

:::solution
The Hessian is $\begin{bmatrix}6&2\\2&6\end{bmatrix}$, with eigenvalues $4$ and $8$. It is positive definite, so the function is strictly convex.
:::

<!--
id: optimization-21
note: math-optimization
title: "Write a KKT System"
exam: exam-ii
skills: [KKT Conditions, Inequality Constraints]
-->

Write the KKT conditions for minimizing $f(x)$ subject to $g(x)\le0$.

:::solution
$\nabla f(x)+\mu\nabla g(x)=0$, $g(x)\le0$, $\mu\ge0$, and $\mu g(x)=0$.
:::

<!--
id: optimization-22
note: math-optimization
title: "Recognize a Convex Program"
exam: exam-ii
skills: [Convexity, Global Optimality]
-->

Why does a local minimum of a convex objective over a convex feasible set also solve the global problem?

:::solution
Convexity prevents a feasible point from lying below a local minimum along any feasible line segment, so no feasible point has a smaller objective value.
:::

<!--
id: optimization-31
note: math-optimization
title: "Choose a Method"
exam: final
skills: [Optimization Methods, Modeling]
-->

Choose a natural method for a smooth unconstrained problem whose Hessian is cheap to compute but may be indefinite.

:::solution
Use safeguarded Newton steps with a line search or trust region, because an indefinite Hessian can give an ascent direction.
:::
