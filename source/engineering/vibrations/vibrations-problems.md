<!--
id: vibrations-11
note: engineering-vibrations
title: "Compute a Natural Frequency"
exam: exam-i
skills: [Single-degree-of-freedom systems, Natural frequency]
-->

A $2\ \mathrm{kg}$ mass is attached to a spring with $k=800\ \mathrm{N/m}$. Find its undamped natural frequency in rad/s and Hz.

:::solution
$$\omega_n=\sqrt{800/2}=20\ \mathrm{rad/s},\qquad f_n=\frac{20}{2\pi}=3.18\ \mathrm{Hz}.$$
:::

<!--
id: vibrations-12
note: engineering-vibrations
title: "Classify Damping"
exam: exam-i
skills: [Damping, Damping ratio]
-->

A system has $m=5\ \mathrm{kg}$, $k=1250\ \mathrm{N/m}$, and $c=20\ \mathrm{N\,s/m}$. Find $\zeta$ and classify the response.

:::solution
$$\omega_n=\sqrt{1250/5}=15.81\ \mathrm{rad/s},\qquad \zeta=\frac{20}{2(5)(15.81)}=0.126.$$

Since $0<\zeta<1$, the system is underdamped.
:::

<!--
id: vibrations-13
note: engineering-vibrations
title: "Estimate Damping from Peaks"
exam: exam-i
skills: [Damping, Logarithmic decrement]
-->

Successive same-sign peaks in a ring-down are $12.0\ \mathrm{mm}$ and $9.0\ \mathrm{mm}$. Estimate the damping ratio for light damping.

:::solution
$$\delta=\ln(12/9)=0.2877,\qquad \zeta\approx\frac{\delta}{2\pi}=0.0458.$$
:::

<!--
id: vibrations-14
note: engineering-vibrations
title: "Find a Harmonic Response"
exam: exam-i
skills: [Forced response, Phase]
-->

A system has static flexibility $1/k=0.002\ \mathrm{m/N}$, frequency ratio $r=0.8$, and damping ratio $\zeta=0.1$. A force has amplitude $F_0=30\ \mathrm N$. Find the steady displacement amplitude and phase.

:::solution
$$M=\frac{1}{\sqrt{(1-0.8^2)^2+(2(0.1)(0.8))^2}}=2.54,$$
$$X=30(0.002)(2.54)=0.152\ \mathrm m,$$
$$\phi=\operatorname{atan2}(0.16,0.36)=24.0^\circ.$$
:::

<!--
id: vibrations-15
note: engineering-vibrations
title: "Solve a Two-Mode Eigenproblem"
exam: exam-i
skills: [Modal analysis, Multiple-degree-of-freedom systems]
-->

For $\mathbf M=m\mathbf I$ and $\mathbf K=k\begin{bmatrix}2&-1\\-1&2\end{bmatrix}$, find the natural frequencies in terms of $\sqrt{k/m}$.

:::solution
The stiffness eigenvalues are $k$ and $3k$, with mode shapes proportional to $[1,1]^T$ and $[1,-1]^T$. Therefore,
$$\omega_1=\sqrt{k/m},\qquad \omega_2=\sqrt{3k/m}.$$
The first mode moves both masses together; the second moves them oppositely.
:::

<!--
id: vibrations-16
note: engineering-vibrations
title: "Interpret an FRF"
exam: exam-i
skills: [Frequency-response functions, Poles and zeros]
-->

An accelerance FRF has a sharp peak near $120\ \mathrm{Hz}$ and a phase change through that peak. What does this suggest, and what additional evidence should be checked?

:::solution
The peak and phase transition suggest a lightly damped mode with a pole near $120\ \mathrm{Hz}$. Check coherence, repeatability, sensor and excitation locations, boundary conditions, frequency resolution, and whether nonlinear behavior changes the peak with amplitude. A peak alone does not prove a linear mode.
:::
