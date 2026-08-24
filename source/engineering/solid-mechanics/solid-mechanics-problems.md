<!--
id: solid-mechanics-11
note: engineering-solid-mechanics
title: "Compute a Principal Stress"
exam: exam-i
skills: [Stress Tensor, Principal Stresses]
-->

For the plane-stress tensor

$$
\boldsymbol\sigma=\begin{bmatrix}80&30\\30&20\end{bmatrix}\ \text{MPa},
$$

find the principal stresses.

:::solution
The principal stresses are the eigenvalues of the matrix:

$$
\sigma_{1,2}=\frac{80+20}{2}\pm\sqrt{\left(\frac{80-20}{2}\right)^2+30^2}.
$$

Therefore,

$$
\sigma_1\approx 100.8\ \text{MPa},\qquad \sigma_2\approx -0.8\ \text{MPa}.
$$
:::

<!--
id: solid-mechanics-12
note: engineering-solid-mechanics
title: "Find Shear Modulus from Young's Modulus"
exam: exam-i
skills: [Elasticity, Material Properties]
-->

An isotropic material has $E=210\ \text{GPa}$ and $\nu=0.30$. Find its shear modulus.

:::solution
Use

$$
G=\frac{E}{2(1+\nu)}=\frac{210}{2(1.30)}\approx 80.8\ \text{GPa}.
$$
:::

<!--
id: solid-mechanics-13
note: engineering-solid-mechanics
title: "Compute a Traction Vector"
exam: exam-i
skills: [Stress Tensor, Traction]
-->

For the plane-stress tensor

$$
\boldsymbol\sigma=\begin{bmatrix}60&20\\20&40\end{bmatrix}\ \text{MPa}
$$

and unit normal $\mathbf n=(1,0)^T$, find the traction vector.

:::solution
Use $\mathbf t^{(\mathbf n)}=\boldsymbol\sigma\mathbf n$:

$$
\mathbf t^{(\mathbf n)}=
\begin{bmatrix}60&20\\20&40\end{bmatrix}
\begin{bmatrix}1\\0\end{bmatrix}
=\begin{bmatrix}60\\20\end{bmatrix}\ \text{MPa}.
$$

The normal component is $60\ \text{MPa}$ and the in-plane shear component is $20\ \text{MPa}$.
:::

<!--
id: solid-mechanics-14
note: engineering-solid-mechanics
title: "Convert Tensor Shear Strain"
exam: exam-i
skills: [Strain Tensor, Engineering Shear Strain]
-->

A strain tensor has $\varepsilon_{xy}=0.002$. What is the engineering shear strain $\gamma_{xy}$?

:::solution
Tensor shear strain is half the engineering shear strain:

$$
\gamma_{xy}=2\varepsilon_{xy}=2(0.002)=0.004.
$$
:::

<!--
id: solid-mechanics-15
note: engineering-solid-mechanics
title: "Check a von Mises Stress"
exam: exam-i
skills: [Yield Criteria, von Mises Stress]
-->

A ductile material is in plane stress with $\sigma_x=80\ \text{MPa}$, $\sigma_y=20\ \text{MPa}$, and $\tau_{xy}=30\ \text{MPa}$. Estimate the von Mises stress.

:::solution
For plane stress,

$$
\sigma_{vm}=\sqrt{\sigma_x^2-\sigma_x\sigma_y+\sigma_y^2+3\tau_{xy}^2}
 =\sqrt{80^2-80(20)+20^2+3(30)^2}
 \approx88.9\ \text{MPa}.
$$
:::
