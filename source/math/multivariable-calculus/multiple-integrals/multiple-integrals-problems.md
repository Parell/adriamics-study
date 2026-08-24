<!--
id: multiple-integrals-11
note: math-multiple-integrals
title: "Evaluate a Rectangle Integral"
exam: exam-i
skills: [Iterated Integrals]
-->

Evaluate $\int_0^1\int_0^2 (x+y)\,dy\,dx$.

:::solution
Integrating in $y$ gives $2x+2$. Integrating from $0$ to $1$ gives $3$.
:::

<!--
id: multiple-integrals-12
note: math-multiple-integrals
title: "Compute an Average Value"
exam: exam-i
skills: [Average Value, Double Integrals]
-->

Find the average value of $f(x,y)=x+y$ on the unit square.

:::solution
$\iint_{[0,1]^2}(x+y)\,dA=1$, and the area is $1$, so the average is $1$.
:::

<!--
id: multiple-integrals-21
note: math-multiple-integrals
title: "Use a Polar Jacobian"
exam: exam-ii
skills: [Polar Coordinates, Jacobian]
-->

Write the polar-coordinate integral for the area of the disk $x^2+y^2\le4$.

:::solution
The bounds are $0\le r\le2$ and $0\le\theta\le2\pi$, so the area is $\int_0^{2\pi}\int_0^2 r\,dr\,d\theta$.
:::

<!--
id: multiple-integrals-22
note: math-multiple-integrals
title: "Set Up a Mass Integral"
exam: exam-ii
skills: [Density, Double Integrals]
-->

Set up the mass of the rectangle $0\le x\le2$, $0\le y\le1$ with surface density $\rho(x,y)=x+y$.

:::solution
$m=\int_0^2\int_0^1(x+y)\,dy\,dx$.
:::

<!--
id: multiple-integrals-31
note: math-multiple-integrals
title: "Choose Spherical Bounds"
exam: final
skills: [Spherical Coordinates, Volume Integrals]
-->

Set up the volume of the sphere $x^2+y^2+z^2\le a^2$ using the convention in the note.

:::solution
$\int_0^{2\pi}\int_0^\pi\int_0^a \rho^2\sin\phi\,d\rho\,d\phi\,d\theta$.
:::

<!--
id: multiple-integrals-41
note: math-multiple-integrals
title: "Reverse an Iterated Integral"
exam: final
skills: [Changing Order, Region Bounds]
-->

Reverse the order of integration for $\int_0^1\int_x^1 f(x,y)\,dy\,dx$.

:::solution
The region is $0\le x\le y\le1$, so the reversed integral is $\int_0^1\int_0^y f(x,y)\,dx\,dy$.
:::
