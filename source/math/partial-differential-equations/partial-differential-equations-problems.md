<!--
id: pde-11
note: math-partial-differential-equations
title: "Classify a PDE"
exam: exam-i
skills: [Classification]
-->

Classify $u_{xx}-u_{yy}=0$.

:::solution
$A=1$, $B=0$, and $C=-1$, so $B^2-AC=1>0$. The equation is hyperbolic.
:::

<!--
id: pde-12
note: math-partial-differential-equations
title: "Identify Boundary Data"
exam: exam-i
skills: [Boundary Conditions]
-->

What type of boundary condition is $u_x(0,t)=5$?

:::solution
It is a Neumann condition because it prescribes a derivative normal to the boundary.
:::

<!--
id: pde-13
note: math-partial-differential-equations
title: "Compute a Diffusivity"
exam: exam-i
skills: [Heat Equation, Units]
-->

A material has $k=40$ W/(m K), $\rho=8000$ kg/m$^3$, and $c_p=500$ J/(kg K). Find $\alpha$.

:::solution
$$
\alpha=\frac{k}{\rho c_p}=\frac{40}{8000(500)}=1.0\times10^{-5}\ \text{m}^2/\text{s}.
$$
:::

<!--
id: pde-14
note: math-partial-differential-equations
title: "Use a Conservation Law"
exam: exam-i
skills: [Conservation Laws]
-->

For $J=-D u_x$ and no source, convert $u_t+J_x=0$ into a diffusion PDE.

:::solution
Substitute the constitutive law:
$$
u_t+(-D u_x)_x=0.
$$
For constant $D$, this is $u_t=D u_{xx}$. If $D$ varies with $x$, retain the conservative form $u_t=(D u_x)_x$.
:::

<!--
id: pde-15
note: math-partial-differential-equations
title: "Separate the Heat Equation"
exam: exam-i
skills: [Separation of Variables]
-->

For $u_t=\alpha u_{xx}$, use $u=X(x)G(t)$ to obtain the two ODEs.

:::solution
$$
XG'=\alpha X''G\quad\Longrightarrow\quad\frac{G'}{\alpha G}=\frac{X''}{X}=-\lambda.
$$
Therefore $G'+\alpha\lambda G=0$ and $X''+\lambda X=0$.
:::

<!--
id: pde-16
note: math-partial-differential-equations
title: "Compute a Wave Speed"
exam: exam-i
skills: [Wave Equation]
-->

A string has tension $120$ N and linear density $0.015$ kg/m. Find its ideal wave speed.

:::solution
$$
c=\sqrt{\frac{\mathcal{T}}{\mu}}=\sqrt{\frac{120}{0.015}}\approx89.4\ \text{m/s}.
$$
:::

<!--
id: pde-17
note: math-partial-differential-equations
title: "Heat-Equation Mode Decay"
exam: exam-i
skills: [Fourier Modes, Heat Equation]
-->

For $L=0.50$ m, $\alpha=2.0\times10^{-5}$ m$^2$/s, and the first mode, find the decay time $\tau_1$.

:::solution
$$
\tau_1=\frac{1}{\alpha(\pi/L)^2}=\frac{L^2}{\alpha\pi^2}
\approx1.27\times10^3\ \text{s}\approx21.2\ \text{min}.
$$
:::

<!--
id: pde-18
note: math-partial-differential-equations
title: "Check Explicit Stability"
exam: exam-i
skills: [Finite Differences, Stability]
-->

With the heat-equation coefficient $\alpha=0.01$ m$^2$/s and $\Delta x=0.02$ m, find the largest $\Delta t$ allowed by $r=\alpha\Delta t/\Delta x^2\le1/2$.

:::solution
$$
\Delta t\le\frac{\Delta x^2}{2\alpha}=\frac{0.02^2}{0.02}=0.02\ \text{s}.
$$
:::
