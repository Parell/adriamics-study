# Metallurgy and Manufacturing

## The manufacturing chain

Metallurgy explains how composition, thermal history, defects, and microstructure determine material behavior. Manufacturing turns that material into a part with a required geometry, tolerance, surface, cost, and service life.

$$
\text{composition} \rightarrow \text{processing} \rightarrow \text{microstructure} \rightarrow \text{properties} \rightarrow \text{performance}
$$

Every route must satisfy loading, temperature, environment, geometry, tolerance, production volume, cost, safety, and inspection requirements. A process is not successful merely because it can make the shape: it must make the required material state reliably.

## Phase diagrams

A phase is a region with uniform structure and composition. A binary phase diagram maps equilibrium phases as functions of temperature and composition. It is a map of possible states, not a prediction of how quickly transformations occur.

To read a two-phase field, locate the alloy point, draw a horizontal tie line, read the phase compositions at its ends, and use the lever rule. For phases $\alpha$ and $\beta$:

$$
W_\alpha=\frac{C_\beta-C_0}{C_\beta-C_\alpha},\qquad
W_\beta=\frac{C_0-C_\alpha}{C_\beta-C_\alpha}
$$

Here $C_0$ is overall composition and $C_\alpha,C_\beta$ are phase compositions. Fractions are mass fractions when the composition axis is mass percent, and they must sum to one.

Important invariant reactions are:

| Reaction | Transformation on cooling |
| --- | --- |
| Eutectic | $L\rightarrow\alpha+\beta$ |
| Eutectoid | One solid $\rightarrow$ two solids |
| Peritectic | $L+\alpha\rightarrow\beta$ |

In steels, ferrite ($\alpha$) is BCC and relatively soft, austenite ($\gamma$) is FCC and dissolves more carbon, and cementite ($\mathrm{Fe_3C}$) is hard and brittle. Pearlite is a ferrite-cementite mixture. Bainite and martensite depend on non-equilibrium cooling paths.

Slow cooling favors diffusion-controlled products. Rapid cooling can suppress diffusion, retain a high-temperature phase, and create metastable products and residual stress.

## Diffusion

Diffusion is atomic transport down a chemical-potential gradient. In one dimension, Fick's laws are

$$
J=-D\frac{dC}{dx},\qquad
\frac{\partial C}{\partial t}=D\frac{\partial^2C}{\partial x^2}.
$$

$J$ is flux, $C$ is concentration, $x$ is distance, and $D$ is diffusivity. Temperature dependence is commonly modeled by

$$
D=D_0\exp\left(-\frac{Q}{RT}\right).
$$

An order-of-magnitude diffusion distance is $\ell\sim\sqrt{Dt}$. Exact transient solutions depend on geometry and boundary conditions; semi-infinite cases often use the error function. Diffusion controls carburizing, nitriding, homogenization, sintering, precipitation, oxidation, and creep. Grain boundaries may provide faster short-circuit paths than the lattice.

## Heat treatment and strengthening

| Treatment | Purpose and usual result |
| --- | --- |
| Annealing | Soften, relieve stress, and approach an equilibrium structure |
| Normalizing | Refine grains and equalize a steel structure |
| Quenching | Suppress diffusion and increase hardness, with distortion risk |
| Tempering | Reheat quenched steel to trade hardness for toughness |
| Solution treatment and aging | Dissolve solute, quench, then form strengthening precipitates |

Hardenability is the ability of a steel section to develop hardness to a depth; it is not the same as maximum hardness. Section size, alloying, austenite grain size, and quench severity matter. Quenching can create martensite but also thermal and transformational stresses, so tempering and distortion control are part of the design.

Common strengthening mechanisms include grain refinement, solid-solution strengthening, strain hardening, precipitation hardening, and transformation strengthening. They can raise yield strength while reducing ductility or toughness, so the required property balance matters more than hardness alone.

## Solidification and casting

Solidification begins with nucleation and continues through grain growth. Greater nucleation and faster cooling generally produce finer grains. Dendritic growth can reject solute and create microsegregation. Shrinkage must be fed by liquid metal from a riser or another feeder.

Casting design should provide draft, gradual section changes, fillets, a practical parting line, adequate mold permeability, and controlled filling. Common defects include gas porosity, shrinkage cavities, cold shuts, misruns, inclusions, hot tears, and mold erosion. Diagnose a defect from its location and morphology together with the filling and cooling history.

## Forming

Rolling reduces thickness between rotating rolls; forging uses compressive deformation in dies; extrusion pushes material through a die; drawing pulls material through a die. These processes can preserve material continuity and create useful grain flow.

Friction raises forming load, causes redundant deformation, and can create shape defects. Work hardening raises flow stress as plastic strain accumulates; hot working lowers resistance and can enable recovery and recrystallization. Account for draft, reduction per pass, springback, residual stress, trimming, and machining allowance. Typical defects include laps, cracks, orange peel, earing, center bursts, and barreling.

## Machining

Machining removes material with a cutting edge. Cutting speed $V$, feed $f$, and depth of cut $a_p$ control removal rate, forces, temperature, finish, and tool life. For turning, an approximate removal rate is

$$
Q\approx\pi DNfa_p,
$$

and cutting power is

$$
P=F_cV.
$$

Tool wear may be flank wear, crater wear, chipping, built-up edge, or thermal failure. A simplified tool-life relation is $VT^n=C$. Increasing speed can improve productivity while sharply shortening tool life. Machining economics must include setup, tool changes, scrap, inspection, coolant, and machine losses.

## Welding and joining

Fusion welding creates a melted fusion zone and a heat-affected zone (HAZ) that did not melt but may undergo grain growth, transformation, softening, embrittlement, or corrosion-resistance loss. Nonuniform heating and cooling produce residual stress and distortion.

Control methods include joint preparation, clean surfaces, qualified filler metal, preheat, interpass-temperature limits, balanced sequences, and suitable fixturing. Common defects include lack of fusion, lack of penetration, porosity, slag inclusion, undercut, overlap, and cracks. Process choice depends on material, thickness, access, rate, quality, automation, and inspection.

## Additive manufacturing

Powder-bed fusion, directed-energy deposition, binder jetting, material extrusion, and vat photopolymerization build parts layer by layer using different feedstocks and energy sources. Layerwise heat flow creates anisotropy and residual stress.

Defects include lack of fusion, keyholing, porosity, balling, warping, poor surface finish, and dimensional error. Orientation changes strength, support volume, build time, stair-stepping, and thermal history. Post-processing may include support removal, heat treatment, hot isostatic pressing, machining, polishing, coating, or inspection. Qualification must specify the machine, feedstock, orientation, parameters, and post-processing; nominally identical alloys can have different properties.

## Process selection

Screen processes against the following requirements:

| Requirement | Question |
| --- | --- |
| Material | Can the process handle the alloy and heat treatment? |
| Geometry | Are there walls, undercuts, draft, holes, or channels? |
| Volume | Is tooling justified by the production rate? |
| Tolerance and surface | Are secondary machining or finishing operations needed? |
| Performance | Are defects, texture, residual stress, and anisotropy acceptable? |
| Economics | What are tooling, labor, cycle, scrap, inspection, and capital costs? |

Eliminate incompatible processes first, then compare capability, secondary operations, total cost, sustainability, and qualification risk. A complex low-volume housing may favor additive manufacture followed by machining of sealing faces. A high-volume fatigue-critical bracket may favor forging followed by machining and heat treatment. The correct answer is a defensible route, not a universally best process.

## Worked example

An alloy has $C_0=40$ wt% B at a temperature where $C_\alpha=20$ wt% B and $C_\beta=70$ wt% B. The phase fractions are

$$
W_\alpha=\frac{70-40}{70-20}=0.60,\qquad
W_\beta=\frac{40-20}{70-20}=0.40.
$$

Thus the equilibrium structure is 60% $\alpha$ and 40% $\beta$ by mass. The phase compositions are not the overall composition.

If this material is made into a medium-volume bracket with a complex cavity and machined fatigue-critical holes, casting followed by heat treatment and finish machining is a reasonable starting route. Verify feeding, porosity, fatigue performance, inspection, and tooling cost. If volume is high and geometry is simple, forging may provide better consistency and fatigue resistance.

## Common mistakes

- Treating an equilibrium diagram as a prediction for every cooling rate.
- Applying the lever rule to phase compositions not taken from one tie line.
- Confusing hardenability with hardness.
- Assuming quenching always improves a part.
- Ignoring feeding, draft, and shrinkage in casting design.
- Treating friction as negligible in forming and machining.
- Calling all weld-adjacent material the fusion zone instead of distinguishing the HAZ.
- Assuming an additive part is isotropic because its nominal alloy matches a wrought alloy.
- Selecting by unit cost while ignoring tooling, scrap, inspection, and secondary operations.

## Practice problems

### Problem 1: phase fractions

At a temperature, $C_0=30$ wt% B in an $\alpha+\beta$ field with $C_\alpha=10$ and $C_\beta=50$ wt% B. Find the fractions.

**Solution:**

$$
W_\alpha=\frac{50-30}{50-10}=0.50,\qquad W_\beta=0.50.
$$

### Problem 2: diffusion distance

Estimate the distance after $t=3600$ s when $D=2.0\times10^{-11}\ \mathrm{m^2/s}$.

**Solution:**

$$
\ell\sim\sqrt{Dt}=\sqrt{(2.0\times10^{-11})(3600)}\approx2.7\times10^{-4}\ \mathrm{m}=0.27\ \mathrm{mm}.
$$

### Problem 3: cutting power

A cutter experiences $F_c=900$ N at $V=2.0$ m/s. Find the cutting power.

**Solution:** $P=F_cV=(900)(2.0)=1800$ W, or 1.8 kW. Motor input is higher because of machine losses.

### Problem 4: process choice

Choose a starting route for ten aluminum housings with complex internal channels and machined sealing faces.

**Solution:** Additive manufacturing is a strong candidate because low volume avoids expensive tooling and internal channels favor layerwise construction. Qualify orientation, porosity, heat treatment, and support removal, then machine the sealing faces.

## Progression

Study phase diagrams and diffusion first, then heat treatment and solidification. Connect microstructure to forming, machining, welding, and additive manufacturing. Finish with process selection. The central question is: how will this process change the material, and will the resulting part still satisfy its service requirements?

## Sources

- [Engineering LibreTexts](https://eng.libretexts.org/)
- Callister and Rethwisch, *Materials Science and Engineering*
- Groover, *Fundamentals of Modern Manufacturing*
- Dieter, *Mechanical Metallurgy*
