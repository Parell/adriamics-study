# Tribology

## The tribology problem

Tribology studies interacting surfaces in relative motion. It combines friction, wear, lubrication, materials, surface finish, heat, and reliability. A contact is a system: changing load, speed, material, roughness, temperature, lubricant, or contamination can change the governing failure mechanism.

For a first analysis, define normal load $W$, sliding speed $v$, apparent area $A$, friction force $F$, and wear volume $V_w$. Nominal pressure is $p=W/A$, while the pressure at microscopic asperities can be much higher. The friction coefficient is

$$
\mu=\frac{F}{W}.
$$

Assume steady load and speed and an isothermal contact unless stated otherwise. Recheck these assumptions for start-up, vibration, contamination, thermal gradients, and transient loads.

## Adhesive and abrasive wear

Adhesive wear occurs when asperities deform, weld together, and shear during sliding. It is promoted by high contact stress, poor lubrication, clean or chemically compatible surfaces, similar materials, and insufficient hardness. Material may transfer to the counterface or become loose debris.

The Archard model is a screening relation:

$$
V_w=K\frac{WL}{H},
$$

where $K$ is a dimensionless wear coefficient, $L$ is sliding distance, and $H$ is the softer surface hardness. The coefficient depends strongly on material pair, lubrication, debris, temperature, and test method; it is not a universal material constant.

Abrasive wear occurs when a hard asperity or particle cuts or plows a softer surface. Two-body abrasion has a fixed hard counterface; three-body abrasion has loose particles between surfaces. Grooves aligned with sliding, embedded particles, and directional scratches are common evidence. Control abrasion with suitable hardness, clean lubricant, filtration, seals, compatible coatings, and supported—not merely hard—surface layers.

| Mechanism | Typical clue | Useful control |
| --- | --- | --- |
| Fatigue wear | Pits, spalls, or flakes after repeated loading | Lower stress; improve material quality and lubrication |
| Fretting | Small oscillatory motion and oxidized debris | Increase clamping; remove motion; coat or lubricate |
| Erosive wear | Liquid or particle impact | Reduce velocity; change flow direction; use resistant material |
| Corrosive or tribochemical wear | Chemical reaction accelerated by sliding | Control chemistry, temperature, and additives |

Wear can fail a system before dimensional loss becomes large: debris can damage seals, contaminate a product, change clearance, or increase friction.

## Boundary, mixed, and hydrodynamic lubrication

Lubrication separates surfaces with a fluid, solid film, or adsorbed molecular layer. A useful film parameter is

$$
\Lambda=\frac{h_{\min}}{\sqrt{R_{q1}^2+R_{q2}^2}},
$$

where $h_{\min}$ is minimum film thickness and $R_{q1},R_{q2}$ are RMS roughness values. Approximate regimes are:

| Regime | Film and load support | Main concern |
| --- | --- | --- |
| Boundary, $\Lambda\lesssim1$ | Asperities interact; surface films carry load | Adhesion, scuffing, chemical wear |
| Mixed, roughly $1\lesssim\Lambda\lesssim3$ | Fluid film and asperities share load | Sensitivity to roughness and additives |
| Hydrodynamic or EHL | Surfaces are substantially separated by pressurized fluid | Viscous drag, heat, starvation |

In hydrodynamic lubrication, motion drags fluid into a converging wedge. A simple scaling from the Reynolds equation is

$$
p\sim\frac{\eta U L}{h^2},
$$

where $\eta$ is dynamic viscosity, $U$ is entrainment speed, $L$ is contact length, and $h$ is film thickness. Exact pressure and load capacity require the geometry and boundary conditions. In rolling contacts, elastic deformation changes the geometry, so the full-film case is called elastohydrodynamic lubrication (EHL).

Boundary additives form low-shear reaction or adsorption films. Grease retains oil with a thickener; graphite and molybdenum disulfide can lubricate where liquids cannot survive. Higher viscosity usually increases film thickness but also increases drag and heat. Select viscosity at operating temperature and check compatibility with seals, coatings, elastomers, and the process environment.

## Stribeck curves

The Stribeck curve maps friction as a contact moves from boundary to mixed to full-film lubrication. Its horizontal variable is often proportional to

$$
S\propto\frac{\eta U}{p},
$$

where $p$ is characteristic pressure. Increasing viscosity or speed tends to increase separation; increasing load tends to reduce it.

At low $\eta U/p$, asperities carry much of the load, so friction and wear risk are high. In the mixed regime, more speed or viscosity reduces asperity interaction and friction can reach a minimum. In the full-film regime, wear is low but friction rises gradually because viscous shear dissipates power.

This is a design map, not a fixed lubricant property. Temperature changes viscosity; starvation limits supply; roughness changes transitions; and additives alter boundary friction. Compare tests only when load, speed, temperature, finish, lubricant condition, and run-in history are known.

## Contact mechanics

For two smooth, nonconforming elastic bodies, Hertz theory estimates contact size and pressure without adhesion. For a sphere of radius $R$ against a flat under load $W$,

$$
a=\left(\frac{3WR}{4E^*}\right)^{1/3},
\qquad
p_0=\frac{3W}{2\pi a^2},
$$

where $a$ is contact radius, $p_0$ is peak pressure, and

$$
\frac{1}{E^*}=\frac{1-\nu_1^2}{E_1}+\frac{1-\nu_2^2}{E_2}.
$$

$E_i$ are Young's moduli and $\nu_i$ are Poisson ratios. Pressure is maximum at the center and zero at the edge. It is not uniform: $W/(\pi a^2)$ underestimates the peak by a factor of $3/2$.

Line and elliptical contacts use different geometry, but the design lessons remain: local pressure can greatly exceed nominal pressure, elastic deformation changes the contact, and repeated subsurface stress can initiate fatigue. Check plastic indentation, brinelling, micropitting, scuffing, and rolling-contact fatigue alongside roughness, inclusions, residual stress, lubrication, contamination, and misalignment.

## Bearings and seals

Rolling-bearing selection must consider radial and axial load, speed, stiffness, misalignment, contamination, temperature, mounting, preload, clearance, lubrication, and reliability. A simplified rating-life model is

$$
L_{10}=\left(\frac{C}{P}\right)^p,
$$

where $L_{10}$ is the life at which 90% of a group is expected to survive, $C$ is dynamic load rating, $P$ is equivalent dynamic load, and $p=3$ for ball bearings or approximately $10/3$ for roller bearings. This is not a guarantee for contaminated, poorly lubricated, misaligned, overheated, or electrically damaged bearings.

Sliding bearings can be quiet and compact, but start-up often occurs in boundary or mixed lubrication. They need suitable clearance, oil supply, heat removal, and stable geometry. Excessive clearance reduces load capacity; insufficient clearance can cause seizure after thermal expansion.

Seals retain lubricant and exclude contaminants. Evaluate leakage, pressure, speed, temperature, chemistry, shaft finish, runout, and friction. A seal that is too tight generates heat and wear; one that is too loose admits particles or loses lubricant. Lip, labyrinth, face, and mechanical seals each trade leakage control against friction, tolerance, and serviceability.

## Worked example

A sliding pad carries $W=1000$ N over $L=5.0\times10^4$ m. Let $H=1.0\times10^9$ Pa and $K=2.0\times10^{-4}$. Archard's estimate is

$$
V_w=K\frac{WL}{H}
 =(2.0\times10^{-4})\frac{(1000)(5.0\times10^4)}{1.0\times10^9}
 =1.0\times10^{-5}\ \mathrm{m^3}.
$$

If allowable wear is $4.0\times10^{-6}\ \mathrm{m^3}$, the design misses the target by a factor of $2.5$. Reduce load or sliding distance, increase supported hardness, improve lubrication, or change the material pair so that the effective $K/H$ falls by at least that factor. Verify any new value under representative speed, temperature, debris, and surface finish.

## Common mistakes

- Treating nominal pressure as asperity pressure or Hertz peak pressure.
- Treating $K$ in Archard's law as independent of test conditions.
- Assuming any lubricant reduces friction; high viscosity can increase drag and heat.
- Choosing viscosity at room temperature instead of operating temperature.
- Calling every lubricated contact hydrodynamic without checking film thickness and roughness.
- Reading a Stribeck curve without accounting for starvation, additives, run-in, or temperature.
- Treating $L_{10}$ bearing life as a guaranteed life for one machine.
- Ignoring seal friction, shaft finish, runout, pressure, and chemistry.
- Changing materials while overlooking abrasive contamination or misalignment.

## Practice problems

### Problem 1: Archard wear

A pin carries $W=500$ N and slides $2.0\times10^4$ m. Let $K=1.0\times10^{-4}$ and $H=5.0\times10^8$ Pa. Find wear volume.

**Solution:**

$$V_w=K\frac{WL}{H}=(1.0\times10^{-4})\frac{(500)(2.0\times10^4)}{5.0\times10^8}=2.0\times10^{-6}\ \mathrm{m^3}.$$

### Problem 2: Film parameter

Given $h_{\min}=0.30\ \mu\mathrm{m}$, $R_{q1}=0.10\ \mu\mathrm{m}$, and $R_{q2}=0.14\ \mu\mathrm{m}$, find $\Lambda$.

**Solution:**

$$\Lambda=\frac{0.30}{\sqrt{0.10^2+0.14^2}}\approx1.7.$$

The contact is likely in mixed lubrication.

### Problem 3: Hertz contact

A steel sphere has $R=10$ mm and carries $W=100$ N against a flat. Take $E^*=200$ GPa. Estimate $a$ and $p_0$.

**Solution:**

$$a=\left(\frac{3(100)(0.010)}{4(200\times10^9)}\right)^{1/3}\approx1.55\times10^{-4}\ \mathrm{m},$$

$$p_0=\frac{3(100)}{2\pi(1.55\times10^{-4})^2}\approx2.0\times10^9\ \mathrm{Pa}.$$

### Problem 4: Bearing life

A ball bearing has $C=12$ kN and $P=3$ kN. Estimate $L_{10}$ in millions of revolutions.

**Solution:**

$$L_{10}=\left(\frac{12}{3}\right)^3=64$$

million revolutions. Convert to hours only after specifying speed, then check lubrication, contamination, temperature, and mounting.

## Progression

Start with load, speed, roughness, and materials; classify the wear mechanism and lubrication regime; then use Archard and Hertz relations for screening. Use Stribeck behavior to reason about transitions and bearing/seal models to connect contact conditions to machine life. The central question is not simply “what has the lowest friction?” but “what contact state gives acceptable friction, heat, wear, leakage, and reliability over the full operating cycle?”

## Sources

- [Engineering LibreTexts](https://eng.libretexts.org/)
- Stachowiak and Batchelor, *Engineering Tribology*
- Hamrock, Schmid, and Jacobson, *Fundamentals of Fluid Film Lubrication*
- Harris and Kotzalas, *Rolling Bearing Analysis*
