<!--
id: mathematical-mechanics-11
note: physics-mathematical-mechanics
title: "Derive a Lagrange equation"
exam: exam-i
skills: [Euler–Lagrange equations, Lagrangian mechanics]
-->

For $L=\tfrac12m\dot x^2-V(x)$, derive the equation of motion.

:::solution

$$
\frac{\partial L}{\partial\dot x}=m\dot x,
\qquad \frac{\partial L}{\partial x}=-V'(x),
$$

so Euler–Lagrange gives $m\ddot x=-V'(x)$.
:::

<!--
id: mathematical-mechanics-12
note: physics-mathematical-mechanics
title: "Identify a cyclic coordinate"
exam: exam-i
skills: [Cyclic coordinates, Conservation laws]
-->

If $L$ does not contain $\theta$, what quantity is conserved?

:::solution

$p_\theta=\partial L/\partial\dot\theta$ is conserved because $d p_\theta/dt=\partial L/\partial\theta=0$.
:::

<!--
id: mathematical-mechanics-13
note: physics-mathematical-mechanics
title: "Use canonical equations"
exam: exam-i
skills: [Hamiltonian mechanics, Canonical equations]
-->

For $H=p^2/(2m)+kx^2/2$, find $\dot x$ and $\dot p$.

:::solution

$$
\dot x=\frac{\partial H}{\partial p}=\frac{p}{m},
\qquad \dot p=-\frac{\partial H}{\partial x}=-kx.
$$
:::

<!--
id: mathematical-mechanics-14
note: physics-mathematical-mechanics
title: "Compute a Poisson bracket"
exam: exam-i
skills: [Poisson brackets, Time evolution]
-->

Compute $\{x,p^2\}$.

:::solution

$$
\{x,p^2\}=\frac{\partial x}{\partial x}\frac{\partial p^2}{\partial p}=2p.
$$
:::

<!--
id: mathematical-mechanics-15
note: physics-mathematical-mechanics
exam: exam-i
title: "Separate a Hamilton–Jacobi equation"
skills: [Hamilton–Jacobi theory, Separation of variables]
-->

For a free particle with $H=p^2/(2m)$, find a separated principal function with constant momentum $p_0$.

:::solution

Set $S=W(x)-Et$. The Hamilton–Jacobi equation gives $(W')^2/(2m)=E$. Choosing $W'=p_0$ gives $E=p_0^2/(2m)$ and

$$
S(x,t)=p_0x-\frac{p_0^2}{2m}t+C.
$$
:::
