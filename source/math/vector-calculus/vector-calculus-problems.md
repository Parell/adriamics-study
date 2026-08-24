<!--
id: vector-calculus-11
note: math-vector-calculus
title: "Gradient and Directional Derivative"
exam: exam-i
skills: [Gradient, Directional Derivative]
-->

For $f(x,y)=x^2+3y^2$, find the directional derivative at $(1,-1)$ toward $(4,3)$.

:::solution
The direction is $\langle3,4\rangle/5$. Since $\nabla f=\langle2x,6y\rangle$, at $(1,-1)$ it is $\langle2,-6\rangle$. Therefore

$$
D_{\hat{\mathbf a}}f=\langle2,-6\rangle\cdot\left\langle\frac35,\frac45\right\rangle=-\frac{18}{5}.
$$
:::

<!--
id: vector-calculus-12
note: math-vector-calculus
title: "Divergence and Curl"
exam: exam-i
skills: [Divergence, Curl]
-->

For $\mathbf F=\langle xz,y^2,x^2+y\rangle$, find $\nabla\cdot\mathbf F$ and $\nabla\times\mathbf F$.

:::solution

$$
\nabla\cdot\mathbf F=z+2y+0=z+2y,
$$

and

$$
\nabla\times\mathbf F=\langle1-0,x-2x,0-0\rangle=\langle1,-x,0\rangle.
$$
:::

<!--
id: vector-calculus-23
note: math-vector-calculus
title: "Conservative Field"
exam: exam-ii
skills: [Conservative Fields, Potential]
-->

Evaluate $\int_C\mathbf F\cdot d\mathbf r$ for any path from $(0,1)$ to $(2,3)$ if $\mathbf F=\langle2x+y,x+4y\rangle$.

:::solution
Here $P_y=1=Q_x$, so the field is conservative on $\mathbb R^2$. A potential is $\phi=x^2+xy+2y^2$. The integral is

$$
\phi(2,3)-\phi(0,1)=\left(4+6+18\right)-2=26.
$$
:::

<!--
id: vector-calculus-34
note: math-vector-calculus
title: "Divergence Theorem"
exam: final
skills: [Divergence Theorem, Flux]
-->

Find the outward flux of $\mathbf F=\langle x,y,z\rangle$ through a sphere of radius $2$.

:::solution
The divergence is $3$. The enclosed volume is $4\pi(2^3)/3=32\pi/3$. Hence the flux is $3(32\pi/3)=32\pi$.
:::
