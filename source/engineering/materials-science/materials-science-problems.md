<!--
id: materials-science-11
note: engineering-materials-science
title: "State the Processing Chain"
exam: exam-i
skills: [Processing-structure-properties]
-->

According to the central idea in the note, what is the order of the four linked factors in materials science?

:::solution
The chain is

$$
\text{Processing} \rightarrow \text{Structure} \rightarrow \text{Properties} \rightarrow \text{Performance}
$$

So processing affects structure, structure affects properties, and properties affect performance.
:::

<!--
id: materials-science-12
note: engineering-materials-science
title: "Identify a Metallic Bond Effect"
exam: exam-i
skills: [Bonding, Metals]
-->

Which bonding type is associated with delocalized electrons, electrical conductivity, and ductility?

:::solution
That is **metallic bonding**.

The delocalized electrons explain why metals conduct electricity and why they can deform plastically without immediately fracturing.
:::

<!--
id: materials-science-13
note: engineering-materials-science
title: "Count Atoms in an FCC Cell"
exam: exam-i
skills: [Crystal structures]
-->

How many atoms are in one face-centered cubic (FCC) unit cell?

:::solution
An FCC unit cell contains

$$
4
$$

atoms.
:::

<!--
id: materials-science-14
note: engineering-materials-science
title: "Name a Vacancy Defect"
exam: exam-i
skills: [Point defects]
-->

What point defect is created when an atom is missing from its normal lattice site?

:::solution
That defect is a **vacancy**.

It is one of the common point defects listed in the note.
:::

<!--
id: materials-science-15
note: engineering-materials-science
title: "State What Miller Indices Describe"
exam: exam-i
skills: [Miller indices, Crystallography]
-->

What do Miller indices describe in a crystal?

:::solution
Miller indices describe **crystallographic planes and directions**.

They are used to identify things like slip systems, cleavage planes, and anisotropy.
:::

<!--
id: materials-science-16
note: engineering-materials-science
title: "Compute Engineering Stress"
exam: exam-i
skills: [Stress, Units]
-->

A tensile specimen carries a force of $12$ kN over an original area of $30$ mm$^2$.

What is the engineering stress?

:::solution
Use

$$
\sigma = \frac{F}{A_0}
$$

so

$$
\sigma = \frac{12{,}000\ \text{N}}{30\ \text{mm}^2} = 400\ \text{N/mm}^2
$$

Since $1\ \text{N/mm}^2 = 1\ \text{MPa}$,

$$
\sigma = 400\ \text{MPa}
$$
:::

<!--
id: materials-science-17
note: engineering-materials-science
title: "Choose the Right Heat Treatment"
exam: exam-i
skills: [Heat treatment]
-->

Which heat treatment is used to increase hardness by rapid cooling?

:::solution
That treatment is **quenching**.

Rapid cooling can suppress diffusion and produce a harder microstructure.
:::

<!--
id: materials-science-18
note: engineering-materials-science
title: "Match a Material Class to Its Traits"
exam: exam-i
skills: [Polymers, Material classes]
-->

Which material class is typically low density, low modulus, viscoelastic, and strongly dependent on temperature and strain rate?

:::solution
That class is **polymers**.

The note lists them as low density, low stiffness, and strongly affected by temperature and strain rate.
:::

<!--
id: materials-science-19
note: engineering-materials-science
title: "Identify the Best Characterization Tool"
exam: exam-i
skills: [XRD, Characterization]
-->

Which characterization method is best for identifying crystal structure and phase identity by lattice spacing?

:::solution
The best method is **X-ray diffraction (XRD)**.

The note says XRD is used for crystal structure and phase identification.
:::

<!--
id: materials-science-110
note: engineering-materials-science
title: "Pick the First Selection Step"
exam: exam-i
skills: [Materials selection]
-->

Before screening candidate materials, what is the first thing you should define in the selection workflow?

:::solution
You should first define the **function of the part**.

From there, you can identify the loading, environment, temperature, lifetime, and other constraints.
:::

<!--
id: materials-science-21
note: engineering-materials-science
title: "Find the Unit-Cell Edge Length"
exam: exam-ii
skills: [Crystal structures, FCC]
-->

An FCC metal has atomic radius $r = 0.125$ nm.

What is the unit-cell edge length?

:::solution
For FCC,

$$
a = 2\sqrt{2}\,r
$$

so

$$
a = 2\sqrt{2}(0.125) \approx 0.3536\ \text{nm}
$$

Thus,

$$
a \approx 0.354\ \text{nm}
$$
:::

<!--
id: materials-science-22
note: engineering-materials-science
title: "Compare Two Grain Sizes"
exam: exam-ii
skills: [Hall-Petch, Grain-size strengthening]
-->

Material A has a grain size of $16\ \mu\text{m}$ and material B has a grain size of $4\ \mu\text{m}$.

According to the Hall-Petch relation, which material should have the higher yield strength, and how do the Hall-Petch terms compare?

:::solution
The Hall-Petch term is proportional to $d^{-1/2}$.

For material A:

$$
16^{-1/2} = \frac{1}{4}
$$

For material B:

$$
4^{-1/2} = \frac{1}{2}
$$

So material B has the larger Hall-Petch term, by a factor of $2$.

Therefore, **material B** should have the higher yield strength.
:::

<!--
id: materials-science-23
note: engineering-materials-science
title: "Use the Lever Rule for Phase Fractions"
exam: exam-ii
skills: [Lever rule, Phase diagrams]
-->

At a temperature in a two-phase $\alpha+\beta$ region, suppose

$$
C_\alpha = 20\%, \quad C_\beta = 80\%, \quad C_0 = 50\%.
$$

Find the mass fractions of $\alpha$ and $\beta$.

:::solution
Use the lever rule:

$$
W_\alpha = \frac{C_\beta - C_0}{C_\beta - C_\alpha}
$$

and

$$
W_\beta = \frac{C_0 - C_\alpha}{C_\beta - C_\alpha}
$$

Substitute the values:

$$
W_\alpha = \frac{80 - 50}{80 - 20} = \frac{30}{60} = 0.5
$$

$$
W_\beta = \frac{50 - 20}{80 - 20} = \frac{30}{60} = 0.5
$$

So the two phases are present in equal amounts.
:::

<!--
id: materials-science-24
note: engineering-materials-science
title: "Interpret the Effect of Temperature on Diffusivity"
exam: exam-ii
skills: [Diffusion, Arrhenius relation]
-->

Using

$$
D = D_0 e^{-Q/RT},
$$

what happens to diffusivity when temperature increases and $D_0$ and $Q$ stay fixed?

:::solution
As $T$ increases, the quantity $-Q/RT$ becomes less negative, so the exponential term gets larger.

Therefore, **diffusivity increases** with temperature, and it usually increases rapidly because of the exponential dependence.
:::

<!--
id: materials-science-25
note: engineering-materials-science
title: "Read a Tensile Curve Milestone"
exam: exam-ii
skills: [Tensile test, Plastic deformation]
-->

On a tensile test curve, what does the ultimate tensile strength mark?

:::solution
The ultimate tensile strength is the **maximum engineering stress** reached on the curve.

After that point, necking usually begins.
:::

<!--
id: materials-science-26
note: engineering-materials-science
title: "Order a Precipitation-Hardening Sequence"
exam: exam-ii
skills: [Precipitation hardening, Heat treatment]
-->

Put the precipitation-hardening steps in order, and state why quenching is used.

:::solution
The usual sequence is:

1. Solution heat treat
2. Quench
3. Age

Quenching is used to retain a **supersaturated solid solution** so that fine precipitates can form during aging.
:::

<!--
id: materials-science-27
note: engineering-materials-science
title: "Convert Strain to True Strain"
exam: exam-ii
skills: [True strain, Deformation]
-->

A specimen stretches from $50$ mm to $55$ mm.

What is the true strain?

:::solution
Use

$$
\varepsilon_t = \ln\left(\frac{L}{L_0}\right)
$$

so

$$
\varepsilon_t = \ln\left(\frac{55}{50}\right) = \ln\left(\frac{11}{10}\right)
$$

That is the exact true strain.
:::

<!--
id: materials-science-28
note: engineering-materials-science
title: "Identify a Crystal Structure from Geometry"
exam: exam-ii
skills: [Crystal structures, Coordination number]
-->

A crystal structure has 4 atoms per unit cell, a coordination number of 12, and a packing factor of 0.74.

Which common crystal structure is it?

:::solution
Those values match **face-centered cubic (FCC)**.

The note lists FCC as having 4 atoms per unit cell, coordination number 12, and packing factor 0.74.
:::

<!--
id: materials-science-31
note: engineering-materials-science
title: "Choose a Material for a Lightweight Stiff Panel"
exam: final
skills: [Composites, Materials selection]
-->

You need a panel for a drone wing skin that is light, stiff, and reinforced in a preferred direction.

Which material class from the note is the best fit?

:::solution
The best fit is a **composite**, especially a fiber-reinforced polymer.

Composites are used for high specific stiffness, directional reinforcement, and tailored performance.
:::

<!--
id: materials-science-32
note: engineering-materials-science
title: "Predict the Phase Fraction from Composition"
exam: final
skills: [Lever rule, Phase diagrams]
-->

An alloy is in an $\alpha+\beta$ region with

$$
C_\alpha = 10\%, \quad C_\beta = 70\%, \quad C_0 = 34\%.
$$

Which phase is more abundant, and by how much?

:::solution
Use the lever rule:

$$
W_\alpha = \frac{C_\beta - C_0}{C_\beta - C_\alpha}
= \frac{70 - 34}{70 - 10}
= \frac{36}{60}
= 0.6
$$

$$
W_\beta = \frac{C_0 - C_\alpha}{C_\beta - C_\alpha}
= \frac{34 - 10}{70 - 10}
= \frac{24}{60}
= 0.4
$$

So $\alpha$ is more abundant, with a mass fraction of $0.6$ versus $0.4$ for $\beta$.
:::

<!--
id: materials-science-33
note: engineering-materials-science
title: "Estimate Crack Safety"
exam: final
skills: [Fracture toughness, Stress intensity]
-->

A component has stress $\sigma = 120$ MPa, crack size $a = 5$ mm, and geometry factor $Y = 1$.

If the fracture toughness is $K_{IC} = 16$ MPa$\sqrt{\text{m}}$, is the component safe by the crack-growth criterion in the note?

:::solution
Use

$$
K = Y\sigma\sqrt{\pi a}
$$

with $a = 5$ mm $= 0.005$ m:

$$
K = 1(120)\sqrt{\pi(0.005)}
$$

$$
K \approx 120 \times 0.125 = 15.0\ \text{MPa}\sqrt{\text{m}}
$$

Since

$$
15.0 < 16,
$$

the component is **safe by this criterion**.
:::

<!--
id: materials-science-34
note: engineering-materials-science
title: "Pick a Heat Treatment for Toughness"
exam: final
skills: [Tempering, Heat treatment]
-->

A steel part is too brittle after quenching.

Which heat treatment should follow to reduce brittleness while keeping useful hardness?

:::solution
The next step should be **tempering**.

The note says tempering reduces brittleness after a quench while helping keep useful hardness.
:::

<!--
id: materials-science-35
note: engineering-materials-science
title: "Choose a Strengthening Mechanism for Aluminum"
exam: final
skills: [Precipitation hardening, Alloys]
-->

A designer strengthens an aluminum alloy by solution heat treating, quenching, and then aging it so that fine precipitates form.

What strengthening mechanism is being used?

:::solution
That is **precipitation hardening**.

The fine precipitates impede dislocation motion and raise strength.
:::

<!--
id: materials-science-41
note: engineering-materials-science
title: "Predict the Effect of Fine Grains and Cold Work"
exam: final
skills: [Hall-Petch, Strain hardening]
-->

A metal is made finer-grained and then cold-worked.

What happens to yield strength and ductility, and why?

:::solution
The **yield strength increases** and the **ductility decreases**.

Fine grains strengthen the metal by impeding dislocation motion, and cold work increases dislocation density, which makes further slip harder.
:::

<!--
id: materials-science-42
note: engineering-materials-science
title: "Select a High-Temperature Insulating Material"
exam: final
skills: [Ceramics, Materials selection]
-->

A part must keep its shape at high temperature, resist wear, and act as an electrical insulator.

Which material class is the best fit, and what tradeoff should you expect?

:::solution
The best fit is a **ceramic**.

The main tradeoff is that ceramics are typically **brittle** and have low ductility.
:::

<!--
id: materials-science-43
note: engineering-materials-science
title: "Explain Why Quenching Changes Properties"
exam: final
skills: [Martensite, Processing-structure-properties]
-->

A rapid quench changes a steel microstructure to martensite.

Explain how the processing change leads to the property change.

:::solution
Rapid quenching suppresses diffusion, so the steel transforms into a **metastable martensitic structure** instead of a diffusion-controlled equilibrium structure.

That new structure is much harder, but also more brittle.

So the processing change leads to a structure change, which then changes properties.
:::

<!--
id: materials-science-44
note: engineering-materials-science
title: "Choose a Hard-But-Not-Brittle Heat Treatment"
exam: final
skills: [Heat treatment, Toughness]
-->

A steel gear needs high hardness, but it must not fail in a brittle way.

Based on the note, what heat-treatment sequence best balances those requirements?

:::solution
The best sequence is to **quench, then temper**.

Quenching raises hardness, and tempering reduces brittleness and improves toughness enough to make the part more reliable in service.
:::
