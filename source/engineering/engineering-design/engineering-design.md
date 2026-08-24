# Engineering Design

# The design loop

Engineering design is iterative. Engineers rarely move straight from problem to finished product. They define the need, propose a solution, test the solution against constraints, revise it, and repeat until the design is good enough to release.

A simple design loop is:

1. Define the problem.
2. Convert the problem into measurable requirements.
3. Generate possible solutions.
4. Select the most promising concept.
5. Define the geometry, materials, interfaces, and parts.
6. Analyze whether the design works.
7. Check whether it can be manufactured and inspected.
8. Build and test prototypes or first articles.
9. Release controlled documentation.
10. Manage changes through revision control.

The loop matters because every design decision affects several others. A tighter tolerance may improve fit, but it may also increase cost. A stronger material may reduce failure risk, but it may be harder to machine or more prone to corrosion. A lighter part may improve performance, but it may vibrate more.

## Main categories of design work

| Category           | Main question                          | Typical outputs                                        |
| ------------------ | -------------------------------------- | ------------------------------------------------------ |
| Requirements       | What must the design do?               | Requirement specification, acceptance criteria         |
| Concept design     | What solution approach should be used? | Sketches, trade studies, architecture                  |
| Product definition | What exactly will be built?            | CAD, drawings, BOM, ICDs                               |
| Analysis           | Will it work?                          | Hand calculations, FEA, thermal analysis, power budget |
| Manufacturing      | Can it be made repeatedly?             | Process plan, DFMA review, tooling assumptions         |
| Quality            | Can it be measured and accepted?       | Inspection plan, metrology method, gauge studies       |
| Reliability        | Will it keep working in service?       | FMEA, derating, fatigue checks, maintainability review |
| Release control    | How are changes managed?               | ECOs, revisions, configuration records                 |

## Running example

Use a simple example throughout this guide: an aluminum wall bracket that holds a small sensor box.

The bracket must:

- Support the sensor weight.
- Bolt to a wall.
- Keep the sensor aligned.
- Survive vibration and temperature changes.
- Be easy to manufacture, inspect, and replace.

Even this simple part involves requirements, loads, material selection, CAD, drawings, tolerances, GD&T, fasteners, inspection, failure modes, and revision control.

---

# From need to requirements

**Big idea:** requirements define what success means.

A requirement is a clear statement of what the design must do or satisfy. Without requirements, there is no objective way to decide whether the design is correct.

A weak requirement is vague:

> The bracket should be strong.

A better requirement is measurable:

> The bracket shall support a static vertical load of $500\ \mathrm{N}$ with a minimum factor of safety of $2.0$ against yield.

The second version can be analyzed, tested, and accepted or rejected.

## Need, requirement, and acceptance criterion

These three ideas are related but not the same.

| Item                 | Meaning                        | Example                                                                    |
| -------------------- | ------------------------------ | -------------------------------------------------------------------------- |
| Need                 | The real-world problem         | Hold a sensor on a wall                                                    |
| Requirement          | A measurable design obligation | Support $500\ \mathrm{N}$ static load                                      |
| Acceptance criterion | The pass/fail rule             | Pass if permanent deformation is not observed and calculated $N_y \ge 2.0$ |

A requirement says what must be true. An acceptance criterion says how the requirement will be judged.

## Requirement types

| Type          | What it controls      | Example                                                    |
| ------------- | --------------------- | ---------------------------------------------------------- |
| Functional    | What the design does  | Hold the sensor box in a fixed orientation                 |
| Performance   | How well it does it   | Limit tip deflection to $1.0\ \mathrm{mm}$                 |
| Interface     | How it connects       | Use a $4$-hole wall mounting pattern                       |
| Environmental | Where it must work    | Operate from $-20^\circ\mathrm{C}$ to $60^\circ\mathrm{C}$ |
| Manufacturing | How it may be made    | Use sheet metal bending or machining                       |
| Inspection    | How it is checked     | Verify hole position using a CMM or gauge plate            |
| Reliability   | How long it must last | No fatigue cracking over expected service life             |
| Service       | How it is maintained  | Replaceable with standard hand tools                       |
| Cost or mass  | Resource limits       | Mass below $250\ \mathrm{g}$                               |

Good requirements are specific, measurable, realistic, traceable, and verifiable.

## Verification and validation

**Verification** checks whether the design meets the written requirements.

**Validation** checks whether the requirements actually solve the user’s problem.

| Question                       | Concept      |
| ------------------------------ | ------------ |
| Did we build the design right? | Verification |
| Did we build the right design? | Validation   |

A bracket can pass every written load test and still be a bad design if the real sensor cable cannot be installed. That is a validation problem.

## Traceability

Traceability connects the original need to design decisions and evidence.

$$
\text{need} \rightarrow \text{requirement} \rightarrow \text{design feature} \rightarrow \text{analysis or test} \rightarrow \text{verification result}
$$

Example:

| Trace item     | Bracket example                                           |
| -------------- | --------------------------------------------------------- |
| Need           | Sensor must stay aligned on wall                          |
| Requirement    | Tip deflection shall be $\le 1.0\ \mathrm{mm}$ under load |
| Design feature | Triangular rib added to bracket                           |
| Analysis/test  | Beam estimate and FEA displacement result                 |
| Verification   | Measured prototype deflection $0.6\ \mathrm{mm}$          |

Traceability prevents random design features. Every critical feature should exist for a reason.

## Common mistakes with requirements

- Using words like strong, light, cheap, durable, or easy without numbers.
- Mixing a design solution into a requirement too early.
- Forgetting environment, service, or inspection requirements.
- Writing requirements that cannot be tested.
- Failing to identify which requirements are critical.

---

# Concept design and architecture

**Big idea:** before defining details, engineers decide what kind of solution they are building.

A concept is a possible way to satisfy the requirements. At this stage, the design may be sketches, rough CAD, block diagrams, prototypes, or simple calculations.

The purpose is not to finish the design. The purpose is to choose a direction before spending time on detailed drawings and analysis.

## Functional decomposition

Functional decomposition breaks a problem into smaller functions.

For the bracket example:

| Function       | Possible design feature                     |
| -------------- | ------------------------------------------- |
| Attach to wall | Bolt holes, slots, adhesive pad, clamp      |
| Support sensor | Plate, arm, frame, molded housing           |
| Resist bending | Rib, thicker section, triangular shape      |
| Align sensor   | locating pins, datum surface, machined face |
| Allow service  | accessible screws, removable cover          |

This helps avoid jumping directly to geometry before understanding the job of each feature.

## Concept generation

Common ways to generate concepts:

- Sketch multiple layouts.
- Change material or manufacturing process.
- Change load path.
- Reduce part count.
- Use standard parts.
- Move interfaces.
- Separate functions into modules.
- Combine functions into one part.

For the bracket, possible concepts might be:

| Concept                  | Strength   | Cost          | Manufacturability                  | Notes                                  |
| ------------------------ | ---------- | ------------- | ---------------------------------- | -------------------------------------- |
| Machined block           | High       | High          | Simple geometry but material waste | Good for low volume                    |
| Bent sheet metal bracket | Medium     | Low           | Good for volume                    | Needs bend radius and tolerance review |
| Cast bracket             | High       | Medium-high   | Tooling required                   | Good for high volume                   |
| Plastic molded bracket   | Low-medium | Low at volume | Needs ribs and draft               | Environment may limit use              |

## Trade studies

A trade study compares options against criteria. A simple weighted score can organize the decision, but it should not replace judgment.

Example scoring form:

| Criterion       | Weight | Concept A score | Concept B score |
| --------------- | -----: | --------------: | --------------: |
| Strength        |      5 |               4 |               3 |
| Cost            |      4 |               2 |               5 |
| Mass            |      3 |               3 |               4 |
| Assembly ease   |      3 |               4 |               4 |
| Inspection ease |      2 |               5 |               3 |

Weighted score for one concept:

$$
S = \sum_{i=1}^{n} w_i s_i
$$

where $w_i$ is the criterion weight and $s_i$ is the concept score.

The score is only useful if the criteria are chosen honestly and the major risks are discussed.

## Design intent

Design intent is the reason behind the geometry and specifications.

It answers questions like:

- Which surfaces locate the part?
- Which features carry the load?
- Which dimensions are critical?
- Which tolerances protect assembly?
- Which features are noncritical and can remain loose?
- What should not change during a future revision?

Example:

> The large rear face of the bracket is datum A because it contacts the wall. The two lower holes are datum features B and C because they locate the bracket pattern. The top surface is not a datum because it does not control function.

This kind of reasoning keeps drawings, CAD constraints, GD&T, and inspection aligned.

---

# Interfaces and system boundaries

**Big idea:** many design failures happen where parts or teams meet.

An interface is a boundary where one part, subsystem, supplier, or team connects to another. Interfaces must be controlled because a change on one side can break the other side.

## Types of interfaces

| Interface type       | Examples                                                   |
| -------------------- | ---------------------------------------------------------- |
| Mechanical           | Bolt pattern, locating pin, shaft, bearing, seal, envelope |
| Electrical           | Connector, voltage, current, pinout, grounding             |
| Fluid                | Pressure, flow rate, fitting size, leak rate               |
| Thermal              | Heat path, cooling contact, insulation, heat sink          |
| Software or controls | signal format, timing, command structure                   |
| Human                | handle, label, access panel, service clearance             |

The bracket has mechanical interfaces with the wall and sensor box. It may also have cable clearance and service interfaces.

## Interface control document

An interface control document, or ICD, records what each side must obey.

Typical ICD content:

| ICD item     | Example                                   |
| ------------ | ----------------------------------------- |
| Geometry     | Hole pattern, datum scheme, keep-out zone |
| Loads        | Maximum force, torque, vibration input    |
| Electrical   | Connector model, voltage, pin assignment  |
| Environment  | temperature, moisture, contamination      |
| Ownership    | Which team controls each side             |
| Verification | Inspection method or interface test       |

## Why interface control matters

Suppose the wall bracket team moves a mounting hole by $2\ \mathrm{mm}$ to make the bracket easier to machine. If the sensor box team is not aware of the change, the parts may no longer assemble. Interface control prevents this kind of mismatch.

Interfaces should be identified early, controlled clearly, and changed formally.

---

# Product definition: CAD, drawings, and BOMs

**Big idea:** product definition is the controlled description of what will be built.

Once a concept is selected, the design must become specific enough for manufacturing, inspection, purchasing, assembly, and service.

## CAD

Computer-aided design, or CAD, is the digital model of a part or assembly. CAD helps engineers create geometry, check fit, generate drawings, support simulation, and communicate design intent.

Common CAD file types by role:

| CAD item            | Purpose                                          |
| ------------------- | ------------------------------------------------ |
| Part model          | Defines one component                            |
| Assembly model      | Defines how components fit together              |
| Drawing file        | Produces 2D documentation                        |
| Simplified model    | Removes details for analysis or supplier sharing |
| Manufacturing model | Supports CAM, tooling, or fixtures               |

CAD is not automatically a complete design. A model may show shape, but it may not show tolerances, materials, finishes, inspection rules, or revision status.

## Parametric modeling and intent

Parametric CAD uses dimensions, constraints, and relationships. Good models are built so important design intent survives changes.

Poor modeling intent:

- A hole is located from a random edge that may later move.
- A fillet is added before the feature it depends on is stable.
- Symmetric parts are modeled with unrelated dimensions.

Better modeling intent:

- Holes are located from functional datums.
- Symmetry is controlled with a center plane.
- Critical dimensions are named and easy to edit.
- Nonfunctional cosmetic features are added late.

## Engineering drawings

An engineering drawing is a controlled 2D document that defines a part or assembly for manufacture and inspection.

A drawing usually includes:

| Drawing item   | Purpose                                                 |
| -------------- | ------------------------------------------------------- |
| Views          | Show geometry                                           |
| Dimensions     | Define size and location                                |
| Tolerances     | Define allowed variation                                |
| GD&T           | Control form, orientation, and position                 |
| Datums         | Define measurement reference frame                      |
| Material       | Specify grade or standard                               |
| Surface finish | Specify roughness, coating, or treatment                |
| Notes          | Add manufacturing or inspection requirements            |
| Title block    | Identify part number, revision, owner, scale, approvals |
| Revision block | Record controlled changes                               |

## Model-controlled and drawing-controlled design

Different organizations use different authority structures.

| Approach               | Meaning                                               |
| ---------------------- | ----------------------------------------------------- |
| Drawing-controlled     | The drawing is the master definition                  |
| Model-controlled       | The 3D model is the master definition                 |
| Model-based definition | Manufacturing information is embedded in the 3D model |

The important rule is consistency. Do not define the same requirement in two places if they can disagree.

## Bill of materials

A bill of materials, or BOM, lists the parts required to build a product.

Common BOM fields:

| Field                  | Meaning                                  |
| ---------------------- | ---------------------------------------- |
| Item number            | Position in assembly list                |
| Part number            | Unique identifier                        |
| Description            | Part name                                |
| Quantity               | Number used per assembly                 |
| Revision               | Controlled version                       |
| Material/specification | Required material or standard            |
| Supplier               | Approved vendor                          |
| Make/buy               | Internal part or purchased item          |
| Notes                  | Special handling or assembly information |

The BOM connects engineering to purchasing, manufacturing, assembly, cost, inventory, and service.

## Assembly documentation

Assemblies often need more than part drawings. They may require:

- Exploded views.
- Item balloons tied to the BOM.
- Fastener callouts.
- Torque values.
- Adhesive or lubricant notes.
- Assembly order.
- Inspection checks.
- Functional tests.
- Service instructions.

For the bracket, an assembly drawing might specify bolt type, washer use, installation torque, cable routing, and sensor orientation.

---

# Dimensions, tolerances, and variation

**Big idea:** real parts are imperfect, so design must control acceptable imperfection.

No manufacturing process produces exact geometry. Tolerances define how much variation is allowed while still preserving function.

A dimension has a nominal value and limits.

Example:

$$
25.00 \pm 0.10\ \mathrm{mm}
$$

This means:

$$
24.90\ \mathrm{mm} \le x \le 25.10\ \mathrm{mm}
$$

For a general bilateral tolerance:

$$
x_{min} = x_{nom} - T_-
$$

$$
x_{max} = x_{nom} + T_+
$$

For a symmetric tolerance $\pm T$:

$$
x_{min} = x_{nom} - T
$$

$$
x_{max} = x_{nom} + T
$$

## Why tolerances matter

Tolerances affect:

- Assembly fit.
- Interchangeability.
- Manufacturing cost.
- Inspection cost.
- Scrap rate.
- Supplier capability.
- Product reliability.

A loose tolerance may make assembly unreliable. A tight tolerance may make the part expensive or impossible to produce consistently.

The design question is not “how tight can this be?” It is:

> How loose can this be while the design still works?

## Tolerance types

| Type                | Example                     | Meaning                                 |
| ------------------- | --------------------------- | --------------------------------------- |
| Bilateral           | $25.00 \pm 0.10$            | Variation allowed in both directions    |
| Unilateral          | $25.00^{+0.10}_{-0.00}$     | Variation allowed mostly one way        |
| Limit dimension     | $24.90$ to $25.10$          | Limits stated directly                  |
| General tolerance   | Title-block tolerance       | Default when not individually specified |
| Geometric tolerance | Position, flatness, profile | Controls shape or relationship          |

## Fits and clearances

A clearance is the space between mating parts. A fit describes the relationship between two mating features, usually a hole and shaft.

For a hole and shaft:

$$
C = D_{hole} - D_{shaft}
$$

Minimum clearance:

$$
C_{min} = D_{hole,min} - D_{shaft,max}
$$

Maximum clearance:

$$
C_{max} = D_{hole,max} - D_{shaft,min}
$$

Interpretation:

| Result                          | Meaning             |
| ------------------------------- | ------------------- |
| $C_{min} > 0$                   | Always clearance    |
| $C_{max} < 0$                   | Always interference |
| $C_{min} < 0$ and $C_{max} > 0$ | Transition fit      |

Common fit types:

| Fit type         | Use                                         |
| ---------------- | ------------------------------------------- |
| Clearance fit    | Sliding, rotating, easy assembly            |
| Slip fit         | Removable pins, covers, service parts       |
| Transition fit   | Accurate location with possible light press |
| Interference fit | Pressed bushings, retained bearings, hubs   |

## Tolerance stack-up

Tolerance stack-up predicts how multiple part variations combine in an assembly.

Suppose a bracket must leave a clearance gap $G$ between the sensor and a cover. If several dimensions affect that gap, each tolerance can increase or decrease the final clearance.

Worst-case stack-up assumes every dimension is at its worst possible limit:

$$
T_{total} = \sum_{i=1}^{n} |T_i|
$$

This is conservative. If it passes, the assembly should work even in the worst allowed combination.

A statistical root-sum-square estimate is:

$$
T_{RSS} = \sqrt{T_1^2 + T_2^2 + \cdots + T_n^2}
$$

RSS is less conservative and depends on assumptions about independent, centered process variation.

## Stack-up workflow

1. Define the functional gap, clearance, or alignment requirement.
2. Draw the dimension chain from one side of the requirement to the other.
3. Decide which dimensions increase and decrease the gap.
4. Insert nominal dimensions and tolerances.
5. Calculate minimum and maximum possible gap.
6. Compare to the functional requirement.
7. Tighten only the dimensions that actually control the result.

## Practical tolerance rule

Do not tolerance every feature tightly. Tighten features that control function:

- Bearing seats.
- Seal surfaces.
- Locating holes.
- Critical gaps.
- Alignment surfaces.
- Interfaces to other parts.

Leave nonfunctional cosmetic or clearance features with general tolerances when possible.

---

# GD&T and datums

**Big idea:** GD&T controls geometry using functional references instead of only plus/minus dimensions.

Geometric Dimensioning and Tolerancing, or GD&T, is a symbolic language for controlling form, orientation, location, profile, and runout.

GD&T is useful when ordinary coordinate dimensions do not clearly describe how the part must function or how it should be inspected.

## Datums

A datum is a theoretically exact reference used for measurement and assembly. A datum feature is the real part feature used to establish that reference.

For the bracket:

- The wall-contact face might define datum A.
- One mounting hole might define datum B.
- A second mounting hole or slot might define datum C.

This creates a repeatable coordinate frame for inspection.

## Datum priority

| Datum     | Role                                            |
| --------- | ----------------------------------------------- |
| Primary   | Establishes the main locating plane or axis     |
| Secondary | Further orients the part                        |
| Tertiary  | Fully locks the remaining direction or rotation |

Datums should usually be functional features: surfaces, holes, or axes that actually locate the part in use.

## Common GD&T controls

| Control          | What it controls                  | Common use                                 |
| ---------------- | --------------------------------- | ------------------------------------------ |
| Flatness         | Surface form without a datum      | Sealing or mounting faces                  |
| Straightness     | Line or axis form                 | Shafts, edges, rails                       |
| Circularity      | Roundness of a cross-section      | Rotating parts                             |
| Cylindricity     | Full cylindrical form             | Precision shafts or bores                  |
| Parallelism      | Orientation to a datum            | Sliding surfaces, plates                   |
| Perpendicularity | $90^\circ$ orientation to a datum | Holes, brackets, mounting faces            |
| Angularity       | Specified angle to a datum        | Angled brackets or surfaces                |
| Position         | Location of a feature             | Hole patterns, pins, bosses                |
| Profile          | Shape of a line or surface        | Castings, molded parts, aerodynamic shapes |
| Runout           | Rotational variation              | Shafts, hubs, rotating assemblies          |

## Feature control frame

A feature control frame states the geometric rule.

Conceptually:

$$
\text{control} \; | \; \text{tolerance} \; | \; \text{datum reference frame}
$$

Example meaning:

> The axis of this hole must lie inside a cylindrical tolerance zone relative to datums A, B, and C.

## Position tolerance

Position tolerance is often used for holes because it controls the allowable location of a feature relative to datums.

For a circular position tolerance zone of diameter $T$, the allowed radial error from true position is:

$$
r \le \frac{T}{2}
$$

This is different from separate $x$ and $y$ coordinate tolerances. A circular tolerance zone better matches how a round hole functions.

## Material condition modifiers

| Modifier | Meaning                    | Practical effect                                                             |
| -------- | -------------------------- | ---------------------------------------------------------------------------- |
| RFS      | Regardless of feature size | Geometric tolerance does not depend on actual feature size                   |
| MMC      | Maximum material condition | Allows bonus tolerance as feature departs from worst-case material condition |
| LMC      | Least material condition   | Protects minimum wall thickness or edge distance                             |

For a hole, MMC is the smallest allowed hole. For a shaft or pin, MMC is the largest allowed shaft or pin.

## GD&T workflow

1. Identify how the part is located in the assembly.
2. Choose datum features from functional interfaces.
3. Identify which features need form, orientation, or position control.
4. Apply GD&T only where it improves function or inspection clarity.
5. Check that the tolerance can be measured.
6. Check that the tolerance is compatible with manufacturing capability.

## Common GD&T mistakes

- Choosing datums from nonfunctional surfaces.
- Overusing GD&T where simple dimensions are enough.
- Creating datum schemes that inspection cannot reproduce.
- Tightening position tolerances without stack-up justification.
- Forgetting that datum order matters.

---

# Materials, surfaces, and manufacturing process selection

**Big idea:** geometry only works if the material, surface, and process are compatible with the job.

Material selection and manufacturing process selection should happen together. A material that is strong on paper may be expensive, hard to machine, difficult to weld, prone to corrosion, or incompatible with the required surface finish.

## Material selection

Material selection is the choice of what a part is made from.

Important material properties:

| Property                                  | Meaning                               | Why it matters                         |
| ----------------------------------------- | ------------------------------------- | -------------------------------------- |
| Density $\rho$                            | Mass per volume                       | Weight and inertia                     |
| Elastic modulus $E$                       | Stiffness                             | Deflection and vibration               |
| Yield strength $\sigma_y$                 | Permanent deformation limit           | Static strength                        |
| Ultimate strength                         | Maximum tensile stress before failure | Fracture limit                         |
| Fatigue strength                          | Resistance to cyclic loading          | Long-life parts                        |
| Hardness                                  | Resistance to indentation and wear    | Contact surfaces                       |
| Toughness                                 | Energy absorbed before fracture       | Impact and crack resistance            |
| Thermal conductivity $k$                  | Heat conduction ability               | Cooling and thermal gradients          |
| Coefficient of thermal expansion $\alpha$ | Size change with temperature          | Fits and thermal stress                |
| Corrosion resistance                      | Resistance to chemical attack         | Outdoor, wet, or chemical environments |

## Strength versus stiffness

Strength and stiffness are different.

Strength asks whether the material fails:

$$
\sigma_{max} \le \sigma_{allowable}
$$

Stiffness asks whether the part moves too much:

$$
\delta_{max} \le \delta_{allowable}
$$

A part can be strong enough but too flexible. A rubber part may survive the load but deflect too much. A steel part may be stiff but too heavy.

## Specific properties

For weight-sensitive design, compare properties per unit density.

Specific strength:

$$
\frac{\sigma_y}{\rho}
$$

Specific stiffness:

$$
\frac{E}{\rho}
$$

These help compare materials such as aluminum, steel, titanium, composites, and plastics when mass matters.

## Thermal expansion

Temperature changes alter dimensions:

$$
\Delta L = \alpha L_0 \Delta T
$$

where $\alpha$ is the coefficient of thermal expansion, $L_0$ is original length, and $\Delta T$ is temperature change.

Thermal expansion matters for:

- Precision fits.
- Mixed-material assemblies.
- Electronics housings.
- Bearings and seals.
- Long rails or frames.
- Hot or cold environments.

## Surface finish

Surface finish describes surface texture, often using roughness $R_a$.

Surface finish affects:

- Friction.
- Wear.
- Sealing.
- Adhesion.
- Coating quality.
- Fatigue strength.
- Appearance.
- Cleanability.

Examples:

| Surface                  | Design concern                      |
| ------------------------ | ----------------------------------- |
| Seal face                | Leakage and contact pressure        |
| Bearing surface          | Friction, wear, lubrication         |
| Sliding surface          | Smooth motion and galling           |
| Bonded surface           | Adhesion and preparation            |
| Painted surface          | Corrosion protection and appearance |
| Fatigue-critical surface | Crack initiation from roughness     |

## Coatings and treatments

Common treatments include:

- Anodizing.
- Plating.
- Painting.
- Passivation.
- Heat treatment.
- Case hardening.
- Shot peening.
- Polishing.
- Dry-film lubrication.

Coatings can change dimensions. If a coating adds thickness, it can change a fit, close a clearance, or affect thread engagement.

## Manufacturing process awareness

Different processes have different design rules.

| Process                | Main design concerns                                        |
| ---------------------- | ----------------------------------------------------------- |
| Machining              | Tool access, setups, sharp internal corners, tolerance cost |
| Sheet metal            | Bend radius, relief cuts, flat pattern, grain direction     |
| Casting                | Draft, shrinkage, porosity, wall thickness, parting line    |
| Injection molding      | Draft, ribs, sink marks, gate location, warpage             |
| Welding                | Distortion, access, heat-affected zone, inspection          |
| Additive manufacturing | Supports, anisotropy, surface finish, post-processing       |
| Extrusion              | Constant cross-section, die design, straightness            |
| Forging                | Draft, grain flow, die cost, flash                          |

A design is not finished until the chosen geometry can actually be produced by the chosen process.

---

# Loads, free body diagrams, and load paths

**Big idea:** before calculating stress, understand where the forces go.

Mechanical analysis starts by identifying loads and supports. The most important first tool is usually a free body diagram.

## Free body diagram

A free body diagram, or FBD, isolates one body and shows all external forces and moments acting on it.

For static equilibrium:

$$
\sum F_x = 0
$$

$$
\sum F_y = 0
$$

$$
\sum M = 0
$$

In vector form:

$$
\sum \mathbf{F} = \mathbf{0}
$$

$$
\sum \mathbf{M} = \mathbf{0}
$$

## How to make an FBD

1. Choose the body or part to isolate.
2. Remove surrounding parts.
3. Replace contacts with reaction forces or moments.
4. Add known applied loads.
5. Add weight if relevant.
6. Choose coordinate axes.
7. Write equilibrium equations.
8. Solve for unknown reactions.

For the wall bracket, the sensor creates a downward load and a moment at the wall. The bolts and wall contact must react those loads.

## Load path

The load path is the route force takes through the structure.

For the bracket:

$$
\text{sensor weight} \rightarrow \text{sensor fasteners} \rightarrow \text{bracket arm} \rightarrow \text{wall bolts} \rightarrow \text{wall}
$$

Load path questions:

- Where does the load enter?
- Where does it leave?
- Which features carry tension, compression, shear, bending, or torque?
- Are there sharp corners or thin sections in the path?
- Are fasteners loaded in a good direction?
- Is there an alternate load path if one feature fails?

A strong-looking part can fail if the load path passes through a weak feature.

## Load cases

A load case is one defined loading condition.

Common load cases:

| Load case | Example                                   |
| --------- | ----------------------------------------- |
| Static    | Sensor weight under normal use            |
| Peak      | Installation force or accidental bump     |
| Dynamic   | Vibration from machinery                  |
| Thermal   | Expansion from temperature change         |
| Shipping  | Drop, shock, packaging loads              |
| Misuse    | Reasonable overload or incorrect handling |
| Service   | Loads during repair or replacement        |

Analysis should cover the load cases that matter for requirements and credible use.

---

# Stress, strain, deflection, and margin

**Big idea:** mechanical analysis checks both failure and motion.

A design can fail by breaking, yielding, bending too much, wearing out, overheating, buckling, or vibrating. The basic mechanical checks start with stress, strain, deflection, factor of safety, and margin.

## Stress

Stress is internal force per area.

Axial normal stress:

$$
\sigma = \frac{F}{A}
$$

Average shear stress:

$$
\tau = \frac{V}{A}
$$

Bending stress:

$$
\sigma = \frac{Mc}{I}
$$

where $M$ is bending moment, $c$ is distance from the neutral axis to the outer fiber, and $I$ is the second moment of area.

Stress predicts whether a material will yield, crack, or fail.

## Strain

Strain is deformation compared to original length:

$$
\varepsilon = \frac{\Delta L}{L_0}
$$

For linear elastic behavior:

$$
\sigma = E\varepsilon
$$

where $E$ is elastic modulus.

Stress describes internal loading. Strain describes deformation.

## Deflection

Deflection is how much a part moves under load.

For an axially loaded member:

$$
\delta = \frac{FL}{AE}
$$

For a cantilever beam with an end load:

$$
\delta_{max} = \frac{FL^3}{3EI}
$$

Deflection matters for:

- Alignment.
- Gaps.
- Sealing pressure.
- Gear or bearing contact.
- Optical paths.
- Vibration behavior.
- User feel.

A bracket may have low stress but still allow the sensor to move too much.

## Factor of safety

Factor of safety compares capacity to demand:

$$
N = \frac{\text{capacity}}{\text{demand}}
$$

For yielding:

$$
N_y = \frac{\sigma_y}{\sigma_{max}}
$$

A factor of safety greater than $1$ means estimated capacity exceeds estimated demand.

Required factor of safety depends on:

- Uncertainty in load.
- Material variability.
- Manufacturing quality.
- Inspection quality.
- Consequence of failure.
- Whether people can be injured.
- Whether standards specify a value.

## Design margin

Design margin expresses remaining capacity:

$$
\text{margin} = \frac{\text{capacity}}{\text{demand}} - 1
$$

Since:

$$
N = \frac{\text{capacity}}{\text{demand}}
$$

then:

$$
\text{margin} = N - 1
$$

Interpretation:

| Margin   | Meaning                |
| -------- | ---------------------- |
| Positive | Requirement is met     |
| Zero     | Exactly at limit       |
| Negative | Requirement is not met |

## Basic mechanical analysis workflow

1. Identify the requirement.
2. Identify the load case.
3. Draw the FBD.
4. Find reactions and internal loads.
5. Calculate stress and deflection.
6. Compare to allowable limits.
7. Calculate factor of safety and margin.
8. Check whether assumptions are conservative and realistic.

---

# Failure modes: fatigue, buckling, wear, and details

**Big idea:** a design can fail even when the first static calculation looks acceptable.

A failure mode is a way the design stops satisfying its requirements.

Common failure modes:

| Failure mode | Example                                      |
| ------------ | -------------------------------------------- |
| Yielding     | Bracket permanently bends                    |
| Fracture     | Part cracks suddenly                         |
| Fatigue      | Crack grows after repeated vibration         |
| Buckling     | Thin column or wall collapses sideways       |
| Wear         | Hole or bearing surface becomes loose        |
| Creep        | Part slowly deforms over time at temperature |
| Corrosion    | Material loses section or cracks             |
| Overheating  | Electronics or material degrades             |
| Loosening    | Fastener preload is lost                     |
| Leakage      | Seal no longer holds pressure                |

## Fatigue

Fatigue is failure caused by repeated loading. A part can fail below yield strength if the load repeats enough times.

Fatigue risk increases with:

- High cyclic stress.
- Stress concentrations.
- Rough surfaces.
- Welds.
- Corrosion.
- Tensile mean stress.
- Poor material quality.
- Vibration.

For the bracket, fatigue may matter if the wall is attached to vibrating equipment.

## Stress concentration

A stress concentration occurs where geometry creates locally high stress, such as at holes, sharp corners, grooves, notches, threads, and weld toes.

A simple relation is:

$$
\sigma_{max} = K_t \sigma_{nom}
$$

where $K_t$ is the theoretical stress concentration factor.

Design responses include:

- Larger fillets.
- Smooth transitions.
- Better surface finish.
- Lower local load.
- Moving holes away from high-stress areas.
- Avoiding abrupt section changes.

## Buckling

Buckling is instability under compression. A slender member can collapse sideways before the material reaches yield.

For an ideal column:

$$
P_{cr} = \frac{\pi^2EI}{(KL)^2}
$$

where:

| Symbol   | Meaning                                         |
| -------- | ----------------------------------------------- |
| $P_{cr}$ | critical buckling load                          |
| $E$      | elastic modulus                                 |
| $I$      | second moment of area                           |
| $L$      | unsupported length                              |
| $K$      | effective length factor based on end conditions |

Buckling matters for struts, columns, thin panels, lightweight frames, sheet metal walls, and compression members.

## Fasteners and joints

Fasteners are common failure points because they involve preload, friction, vibration, fatigue, and assembly variation.

Important joint questions:

- Is the joint loaded in tension, shear, bending, or torque?
- Is preload required?
- Can vibration loosen the joint?
- Is thread engagement sufficient?
- Is the material under the head or nut strong enough?
- Is torque controlled during assembly?
- Is there tool access?

Bolt torque is often used as an approximate way to create preload:

$$
T \approx KFd
$$

where $T$ is tightening torque, $K$ is a nut factor, $F$ is preload, and $d$ is nominal bolt diameter.

This estimate is rough because friction dominates the result.

---

# Thermal, vibration, and electrical analysis

**Big idea:** real products heat up, cool down, vibrate, and consume power.

Engineering design is not only static strength. A product can fail because it overheats, resonates, loses voltage, expands too much, or draws more power than expected.

## Heat transfer

Heat transfer is the movement of thermal energy.

The three basic modes are conduction, convection, and radiation.

Conduction through a simple wall:

$$
q = \frac{kA\Delta T}{L}
$$

Convection:

$$
q = hA(T_s - T_\infty)
$$

Radiation:

$$
q = \varepsilon \sigma A(T_s^4 - T_{sur}^4)
$$

where $q$ is heat transfer rate.

## Thermal resistance

Thermal systems can often be modeled like electrical resistance:

$$
q = \frac{\Delta T}{R_{th}}
$$

For conduction through a flat layer:

$$
R_{th} = \frac{L}{kA}
$$

This is useful for heat sinks, electronics enclosures, motors, batteries, insulation, and thermal interfaces.

## Vibration

Vibration is repeated motion caused by dynamic forces. It can cause noise, fatigue, loosened fasteners, sensor error, discomfort, or failure.

For a simple mass-spring system:

$$
\omega_n = \sqrt{\frac{k}{m}}
$$

Frequency in hertz is:

$$
f_n = \frac{\omega_n}{2\pi}
$$

where $k$ is stiffness and $m$ is mass.

## Modal analysis

Modal analysis finds natural frequencies and mode shapes.

A design is at risk when excitation frequencies are near natural frequencies. This can cause resonance, where vibration amplitude becomes large.

Common excitation sources:

- Motors.
- Fans.
- Engines.
- Pumps.
- Road input.
- Rotating imbalance.
- Gear mesh.
- Human input.

Design responses include increasing stiffness, reducing mass, adding damping, isolating the source, or shifting excitation frequency.

## Electrical load analysis

Electrical load analysis checks whether the system can safely provide required voltage, current, and power.

Ohm’s law:

$$
V = IR
$$

Power:

$$
P = VI
$$

For a resistive load:

$$
P = I^2R = \frac{V^2}{R}
$$

Voltage drop in a conductor:

$$
\Delta V = IR_{wire}
$$

Too much voltage drop can cause resets, overheating, poor performance, or failure.

## Power budget

A power budget lists electrical loads and compares demand to available supply.

Total power:

$$
P_{total} = \sum_{i=1}^{n} P_i
$$

For a battery-powered system, a rough runtime estimate is:

$$
t \approx \frac{E_{available}}{P_{average}}
$$

Power budgets should include:

- Continuous loads.
- Startup loads.
- Peak loads.
- Duty cycles.
- Conversion efficiency.
- Thermal limits.
- Reserve margin.

---

# CAE, FEA, and engineering judgment

**Big idea:** simulation is useful only when the model represents the real problem well enough.

Computer-aided engineering, or CAE, uses software to analyze engineering behavior. Finite element analysis, or FEA, divides geometry into small elements to estimate stress, deflection, temperature, vibration, or other fields.

FEA is powerful, but it is not automatically correct. The output depends on assumptions.

## What FEA can help with

| Simulation type   | Used for                              |
| ----------------- | ------------------------------------- |
| Static structural | Stress, deflection, reaction loads    |
| Modal             | Natural frequencies and mode shapes   |
| Harmonic response | Steady-state vibration                |
| Transient dynamic | Time-varying impact, shock, or motion |
| Thermal           | Temperature and heat flow             |
| CFD               | Fluid flow and convection             |
| Fatigue           | Life under cyclic loading             |
| Buckling          | Stability under compression           |

## FEA workflow

1. Define the engineering question.
2. Identify the requirement and pass/fail rule.
3. Simplify geometry without removing important behavior.
4. Assign material properties.
5. Apply loads and constraints.
6. Define contacts, joints, and connections.
7. Mesh the model.
8. Solve.
9. Check reactions and units.
10. Refine the mesh and compare results.
11. Compare to hand calculations or test data.
12. Report assumptions, limitations, results, and margin.

## Boundary conditions

Boundary conditions often dominate simulation error.

An over-constrained model may look too stiff. An under-constrained model may move unrealistically. A load applied over a tiny artificial area may create meaningless peak stress.

Good boundary conditions should represent how the real part is supported, loaded, and connected.

## Mesh convergence

Mesh convergence checks whether a result stabilizes as the mesh is refined.

A simple percent-change check is:

$$
\text{percent change} = \frac{|R_{fine} - R_{coarse}|}{|R_{fine}|}\times 100\%
$$

where $R$ is the result being tracked.

Peak stress at a sharp corner may not converge because ideal sharp corners create singularities. In that case, evaluate a realistic fillet, averaged stress, or a more appropriate failure metric.

## Hand calculations still matter

Hand calculations are used to:

- Check units.
- Estimate magnitude.
- Reveal bad assumptions.
- Verify load paths.
- Provide independent comparison.
- Interpret simulation results.

A simulation result should be questioned if it is not within the same order of magnitude as a simple estimate.

---

# DFMA and manufacturability

**Big idea:** a design is not complete unless it can be made and assembled repeatedly.

Design for Manufacturing and Assembly, or DFMA, means designing parts so they are easy to make, assemble, inspect, and service.

## DFMA goals

DFMA tries to:

- Reduce part count.
- Simplify geometry.
- Use standard materials and fasteners.
- Avoid unnecessary tight tolerances.
- Reduce setup changes.
- Improve tool access.
- Prevent incorrect assembly.
- Lower cost and cycle time.
- Improve inspection clarity.

## Manufacturing constraints by process

| Process                | Constraints to design around                                    |
| ---------------------- | --------------------------------------------------------------- |
| Machining              | Tool access, setup count, inside corner radius, workholding     |
| Sheet metal            | Minimum bend radius, bend relief, flat pattern, springback      |
| Casting                | Draft, wall thickness, shrinkage, porosity, parting line        |
| Injection molding      | Draft, rib thickness, sink marks, gates, ejector marks, warpage |
| Welding                | Distortion, access, heat-affected zone, fixture design          |
| Additive manufacturing | Support material, build direction, anisotropy, roughness        |
| Extrusion              | Constant cross-section, die cost, straightness                  |

## Assembly design principles

Good assembly design usually tries to:

- Make parts self-locating.
- Avoid ambiguous orientation.
- Use common fasteners.
- Provide tool clearance.
- Minimize hidden operations.
- Avoid long tolerance chains.
- Use keying to prevent incorrect assembly.
- Make critical features visible or inspectable.
- Keep service parts accessible.

## Cost drivers

Manufacturing cost is affected by:

- Material choice.
- Part size and weight.
- Tolerance tightness.
- Surface finish.
- Number of setups.
- Tooling cost.
- Inspection burden.
- Scrap rate.
- Assembly labor.
- Supplier availability.
- Production volume.

A common design mistake is to specify precision that function does not require.

---

# Quality, inspection, and metrology

**Big idea:** inspection connects the written design to real manufactured parts.

Quality is not created by inspection alone. Quality is designed into requirements, tolerances, materials, processes, assembly methods, supplier controls, and measurement systems.

## Metrology

Metrology is the science of measurement.

Measurement quality depends on:

- Instrument resolution.
- Calibration.
- Fixturing.
- Operator method.
- Temperature.
- Datum setup.
- Surface condition.
- Part flexibility.
- Measurement uncertainty.

A measured value should not be treated as exact:

$$
x = x_{measured} \pm U
$$

where $U$ is measurement uncertainty.

## Inspection plan

An inspection plan defines what will be measured, how it will be measured, how often it will be measured, and what happens if it fails.

Typical fields:

| Field          | Meaning                           |
| -------------- | --------------------------------- |
| Characteristic | Feature or property being checked |
| Specification  | Required value or limit           |
| Method         | Tool or procedure used            |
| Sample size    | Number of parts checked           |
| Frequency      | How often inspection occurs       |
| Reaction plan  | What happens if a part fails      |
| Record         | Where results are stored          |

For the bracket, an inspection plan may include material certification, hole diameter, hole position, bracket flatness, coating thickness, and visual inspection.

## Gauge R&R

Gauge Repeatability and Reproducibility, or Gauge R&R, checks whether the measurement system is reliable.

- Repeatability: variation when the same operator measures the same part with the same gauge.
- Reproducibility: variation between operators, setups, or gauges.

A poor measurement system can reject good parts or accept bad parts.

## Process capability

Process capability describes whether a stable manufacturing process can consistently meet tolerance.

Let $USL$ be the upper specification limit, $LSL$ the lower specification limit, $\mu$ the process mean, and $\sigma$ the process standard deviation.

Potential capability:

$$
C_p = \frac{USL - LSL}{6\sigma}
$$

Centered capability:

$$
C_{pk} = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)
$$

$C_p$ measures spread compared to tolerance width. $C_{pk}$ also accounts for whether the process is centered.

## SPC

Statistical Process Control, or SPC, tracks process data over time to detect drift, instability, and abnormal variation.

SPC can reveal problems caused by:

- Tool wear.
- Temperature changes.
- Material variation.
- Machine changes.
- Operator changes.
- Fixture wear.

Common SPC tools:

- Control charts.
- Run charts.
- Histograms.
- Process capability studies.
- Pareto charts.
- Out-of-control rules.

## Quality control versus quality assurance

| Concept           | Meaning                                 |
| ----------------- | --------------------------------------- |
| Quality control   | Detecting defects in parts or processes |
| Quality assurance | Creating systems that prevent defects   |

Inspection catches problems. Good design and process control prevent them.

---

# Reliability and risk

**Big idea:** a design must keep working in real service, not just pass once.

Reliability is the ability of a product to perform its required function for a specified time under specified conditions.

## Reliability model

For a constant failure rate $\lambda$, a simple reliability model is:

$$
R(t) = e^{-\lambda t}
$$

Mean time between failures for a repairable system is often approximated as:

$$
MTBF = \frac{1}{\lambda}
$$

This model is useful as a basic reference, but it should not be applied blindly to all failure types.

## MTBF, MTTR, and availability

MTBF is mean time between failures.

MTTR is mean time to repair.

Simple availability:

$$
A = \frac{MTBF}{MTBF + MTTR}
$$

A system can improve availability by failing less often, being faster to repair, or both.

## Derating

Derating means using a component below its maximum rating.

Examples:

- Use a capacitor below its voltage rating.
- Use a power supply below maximum load.
- Keep electronics below maximum junction temperature.
- Use a bearing below rated load.
- Avoid running a motor continuously at its limit.

Derating reduces stress and usually improves reliability.

## Redundancy

Redundancy means adding backup components, paths, or functions.

| Type                  | Meaning                                 |
| --------------------- | --------------------------------------- |
| Active redundancy     | Backup runs at the same time            |
| Standby redundancy    | Backup starts after failure             |
| Functional redundancy | Different method provides same function |
| Structural redundancy | Alternate load path exists              |

Redundancy can improve reliability, but it also adds cost, weight, complexity, and possible new failure modes.

## FMEA

Failure Mode and Effects Analysis, or FMEA, is a structured way to predict failures and reduce risk before they happen.

Common FMEA fields:

| Field        | Meaning                                  |
| ------------ | ---------------------------------------- |
| Function     | What the item must do                    |
| Failure mode | How it could fail                        |
| Effect       | What happens if it fails                 |
| Cause        | Why it could fail                        |
| Controls     | Existing prevention or detection methods |
| Severity     | Seriousness of the effect                |
| Occurrence   | Likelihood of the cause                  |
| Detection    | Likelihood of detection before use       |
| Action       | Recommended risk reduction               |

Traditional risk priority number:

$$
RPN = S \times O \times D
$$

where $S$ is severity, $O$ is occurrence, and $D$ is detection ranking.

RPN helps sort risks, but engineering judgment is still required. A high-severity failure may deserve action even if the RPN is not the largest.

## Fault tree analysis

Fault tree analysis starts with a top-level failure and maps combinations of lower-level failures that could cause it.

Common logic:

| Gate | Meaning                                 |
| ---- | --------------------------------------- |
| OR   | Any listed failure can cause the event  |
| AND  | All listed failures must occur together |

Fault trees are useful for safety-critical systems and complex failure logic.

---

# Failure investigation and root cause analysis

**Big idea:** solving the visible problem is not enough; the cause must be removed.

Root cause analysis finds why a failure happened so the fix prevents recurrence.

## Root cause workflow

1. Define the problem clearly.
2. Contain the issue if needed.
3. Collect failed parts, measurements, photos, and process data.
4. Reconstruct what happened.
5. Identify possible causes.
6. Test the most likely causes.
7. Identify the root cause.
8. Choose corrective action.
9. Verify the corrective action works.
10. Update drawings, processes, training, or controls.

## 5 Whys

5 Whys is a method of asking why repeatedly until the cause chain is clear.

Example:

1. Why did the bracket fail? Because it cracked at the mounting hole.
2. Why did it crack there? Because cyclic stress was high at a sharp corner.
3. Why was there a sharp corner? Because the drawing did not specify a fillet.
4. Why did the drawing omit the fillet? Because fatigue loading was not reviewed.
5. Why was fatigue not reviewed? Because the requirement only listed static load.

A shallow corrective action would replace the broken bracket. A better corrective action would update the requirement, add fatigue review, revise the drawing, and inspect the critical corner.

## Fishbone diagram

A fishbone diagram, or Ishikawa diagram, organizes possible causes into categories.

Common categories:

- Machine.
- Method.
- Material.
- Measurement.
- Manpower.
- Environment.

It is useful because teams often jump to one explanation too early.

## Corrective and preventive action

Corrective action fixes the existing cause.

Preventive action reduces the chance of similar failures elsewhere.

Examples:

| Problem                | Corrective action                  | Preventive action                      |
| ---------------------- | ---------------------------------- | -------------------------------------- |
| Hole pattern incorrect | Revise drawing and scrap bad parts | Add drawing checklist for datum scheme |
| Coating too thick      | Adjust coating process             | Add coating thickness inspection       |
| Fatigue crack          | Add fillet and lower stress        | Add fatigue review to design checklist |
| Wrong revision built   | Rework inventory                   | Improve configuration control          |

---

# Maintainability and serviceability

**Big idea:** a product should be designed for the people who must inspect, repair, and replace it.

Maintainability is how easily a system can be kept working.

Serviceability is how easily parts can be accessed, removed, repaired, or replaced.

## Maintainability design features

Good service design includes:

- Clear access panels.
- Standard tools.
- Replaceable modules.
- Visible labels.
- Safe isolation points.
- Drainage or cleanup access.
- Reasonable fastener access.
- Diagnostic information.
- Replacement procedures.

## Serviceability questions

Ask:

- Can the part be replaced without removing unrelated parts?
- Are fasteners visible and reachable?
- Can the technician tell which revision is installed?
- Are sharp edges, stored energy, hot surfaces, or electrical hazards controlled?
- Can the repaired system be tested afterward?
- Does the design prevent incorrect reassembly?

For the bracket, serviceability might mean the sensor can be removed without removing the wall bracket, and the bracket can be replaced with common tools.

---

# Revision control, ECOs, and configuration management

**Big idea:** released designs must be controlled so everyone builds the same thing.

Once a design is released, uncontrolled changes can cause major problems. Manufacturing may build the wrong version, suppliers may use outdated drawings, tests may be performed on unknown hardware, or field units may not match documentation.

## Revision control

Revision control records released changes.

A revision history should explain:

- What changed.
- Why it changed.
- Who approved it.
- When it became effective.
- Which parts, drawings, CAD files, BOMs, tools, tests, or field units are affected.

## Engineering Change Order

An Engineering Change Order, or ECO, is a formal method for changing a released design.

Typical ECO workflow:

1. Identify the issue or improvement.
2. Define affected parts, drawings, CAD, BOMs, tools, tests, inventory, and field units.
3. Evaluate technical impact.
4. Evaluate cost, schedule, supplier, manufacturing, and service impact.
5. Review and approve.
6. Release revised documentation.
7. Communicate effective date and implementation plan.
8. Keep records for traceability.

## Configuration management

Configuration management ensures the correct version of every part, document, software file, tool, and process is used together.

Configuration problems include:

- Drawing and CAD mismatch.
- Wrong revision ordered.
- Supplier using outdated files.
- Prototype configuration not recorded.
- Test result tied to unknown hardware.
- Field unit different from released design.

## Part numbers and revisions

A part number identifies a controlled item. A revision identifies the version of that item.

A change to form, fit, or function usually requires formal revision control. Some organizations require a new part number for changes that are not backward compatible.

## Release package

A release package may include:

- Requirement specification.
- CAD models.
- Drawings.
- BOM.
- Material specifications.
- Interface documents.
- Analysis reports.
- Test procedures and results.
- Inspection plans.
- Manufacturing instructions.
- ECO and approval records.

The goal is that manufacturing, inspection, suppliers, and service all use the same controlled definition.

---

# Integrated design workflow

**Big idea:** engineering design works when all the pieces are connected.

A good design process does not treat requirements, CAD, tolerances, analysis, manufacturing, and reliability as separate topics. They feed each other.

## Full workflow

1. Define the need.
2. Write measurable requirements.
3. Identify interfaces and constraints.
4. Generate concepts.
5. Compare concepts against requirements, risk, cost, and schedule.
6. Select a design direction.
7. Build preliminary CAD.
8. Identify load paths and failure modes.
9. Select materials and manufacturing processes.
10. Analyze stress, deflection, thermal behavior, vibration, and power as needed.
11. Define datums, tolerances, GD&T, fits, and surface finishes.
12. Perform tolerance stack-ups for critical interfaces.
13. Review manufacturability and assembly.
14. Create drawings, BOM, and inspection plans.
15. Build prototypes or first articles.
16. Test and inspect against requirements.
17. Revise the design based on evidence.
18. Release controlled documentation.
19. Manage changes through ECOs.
20. Monitor field performance and feed lessons back into future designs.

## Choosing the right tool

| Problem                  | Likely tool                               |
| ------------------------ | ----------------------------------------- |
| Unknown forces           | Free body diagram                         |
| Strength check           | Stress analysis and factor of safety      |
| Excess motion            | Deflection or stiffness analysis          |
| Assembly fit             | Tolerance stack-up                        |
| Hole pattern control     | GD&T position tolerance                   |
| Supplier variation       | Process capability                        |
| Measurement disagreement | Gauge R&R                                 |
| Repeated cracking        | Fatigue analysis and root cause analysis  |
| Overheating              | Thermal resistance or heat transfer model |
| Resonance concern        | Modal analysis                            |
| Electrical overload      | Power budget and voltage drop analysis    |
| Field failures           | FMEA, fault tree, and corrective action   |
| Released design update   | ECO and revision control                  |

## Design review questions

Use these questions during design reviews:

- What requirement does this feature satisfy?
- What is the load path?
- What are the credible failure modes?
- What happens at tolerance limits?
- Which dimensions actually control assembly?
- Are datums chosen from functional interfaces?
- Is this tolerance tighter than necessary?
- Can the process make this repeatedly?
- Can inspection measure this reliably?
- Is the material compatible with the environment?
- Can the design be assembled incorrectly?
- Can it be serviced without damaging other parts?
- Does the analysis match real boundary conditions?
- Do CAD, drawings, BOM, test reports, and suppliers use the same revision?

## Common design pitfalls

- Writing vague requirements.
- Treating CAD geometry as a complete product definition.
- Adding tight tolerances everywhere.
- Dimensioning from nonfunctional references.
- Choosing datums that do not match assembly function.
- Ignoring tolerance stack-up until parts fail to fit.
- Selecting material based only on strength.
- Forgetting stiffness, corrosion, wear, temperature, or fatigue.
- Using FEA without checking loads, constraints, mesh, and units.
- Reporting factor of safety without identifying the failure mode.
- Designing parts that can be made but not inspected.
- Ignoring maintainability until field repair is difficult.
- Letting drawings, CAD, BOMs, and suppliers drift out of revision sync.
- Fixing symptoms instead of root causes.

## Pre-release sanity checks

Before release, check:

- Requirements are measurable.
- Acceptance criteria are defined.
- Critical interfaces are controlled.
- CAD and drawings agree.
- BOM matches the assembly.
- Materials and finishes are specified.
- Critical dimensions have tolerances.
- Datums match functional interfaces.
- Stack-ups pass critical fit requirements.
- Load paths are understood.
- Safety factors and margins are positive.
- Thermal, vibration, and electrical limits are addressed where relevant.
- Manufacturing process can hold required tolerances.
- Inspection method is capable.
- Failure modes have been reviewed.
- Service access is acceptable.
- Revision and configuration records are controlled.

---

# Formula summary

## Requirements and scoring

$$
S = \sum_{i=1}^{n} w_i s_i
$$

## Tolerances and fits

$$
x_{min} = x_{nom} - T_-
$$

$$
x_{max} = x_{nom} + T_+
$$

$$
C = D_{hole} - D_{shaft}
$$

$$
C_{min} = D_{hole,min} - D_{shaft,max}
$$

$$
C_{max} = D_{hole,max} - D_{shaft,min}
$$

## Tolerance stack-up

$$
T_{total} = \sum_{i=1}^{n} |T_i|
$$

$$
T_{RSS} = \sqrt{T_1^2 + T_2^2 + \cdots + T_n^2}
$$

## Mechanics

$$
\sum \mathbf{F} = \mathbf{0}
$$

$$
\sum \mathbf{M} = \mathbf{0}
$$

$$
\sigma = \frac{F}{A}
$$

$$
\tau = \frac{V}{A}
$$

$$
\sigma = \frac{Mc}{I}
$$

$$
\varepsilon = \frac{\Delta L}{L_0}
$$

$$
\sigma = E\varepsilon
$$

$$
\delta = \frac{FL}{AE}
$$

$$
\delta_{max} = \frac{FL^3}{3EI}
$$

$$
\sigma_{max} = K_t \sigma_{nom}
$$

$$
P_{cr} = \frac{\pi^2EI}{(KL)^2}
$$

$$
T \approx KFd
$$

## Safety and margin

$$
N = \frac{\text{capacity}}{\text{demand}}
$$

$$
N_y = \frac{\sigma_y}{\sigma_{max}}
$$

$$
\text{margin} = \frac{\text{capacity}}{\text{demand}} - 1
$$

$$
\text{margin} = N - 1
$$

## Materials and thermal expansion

$$
\frac{\sigma_y}{\rho}
$$

$$
\frac{E}{\rho}
$$

$$
\Delta L = \alpha L_0 \Delta T
$$

## Heat transfer

$$
q = \frac{kA\Delta T}{L}
$$

$$
q = hA(T_s - T_\infty)
$$

$$
q = \varepsilon \sigma A(T_s^4 - T_{sur}^4)
$$

$$
q = \frac{\Delta T}{R_{th}}
$$

$$
R_{th} = \frac{L}{kA}
$$

## Vibration

$$
\omega_n = \sqrt{\frac{k}{m}}
$$

$$
f_n = \frac{\omega_n}{2\pi}
$$

## Electrical

$$
V = IR
$$

$$
P = VI
$$

$$
P = I^2R = \frac{V^2}{R}
$$

$$
\Delta V = IR_{wire}
$$

$$
P_{total} = \sum_{i=1}^{n} P_i
$$

$$
t \approx \frac{E_{available}}{P_{average}}
$$

## Quality and reliability

$$
C_p = \frac{USL - LSL}{6\sigma}
$$

$$
C_{pk} = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)
$$

$$
R(t) = e^{-\lambda t}
$$

$$
MTBF = \frac{1}{\lambda}
$$

$$
A = \frac{MTBF}{MTBF + MTTR}
$$

$$
RPN = S \times O \times D
$$

---

## Compact intuition

Engineering design is controlled problem-solving.

The design starts with a need, becomes requirements, turns into geometry and interfaces, gets checked by analysis and testing, becomes manufacturable through tolerances and process choices, becomes trustworthy through inspection and reliability work, and stays controlled through revision management.

A complete engineering design answers:

1. What must it do?
2. What exactly is being built?
3. Will it work under real loads and environments?
4. Can it be manufactured and inspected repeatedly?
5. What can fail, and how is that risk controlled?
6. Can it be maintained?
7. How are future changes controlled?

If those questions are answered clearly, the design is much more likely to survive manufacturing, testing, service, and revision.

---

## Sources

- [Engineering LibreTexts](https://eng.libretexts.org/)
- Hibbeler, *Engineering Mechanics*
- Shigley et al., *Mechanical Engineering Design*
- Leake and Borgerson, *Engineering Design Graphics*
- Groover, *Fundamentals of Modern Manufacturing*
- Callister and Rethwisch, *Materials Science and Engineering*
- Montgomery, *Introduction to Statistical Quality Control*
- Oppenheim and Willsky, *Signals and Systems*
- Nise, *Control Systems Engineering*
- Incropera et al., *Fundamentals of Heat and Mass Transfer*
- Nilsson and Riedel, *Electric Circuits*
- Kerzner, *Project Management: A Systems Approach to Planning, Scheduling, and Controlling*
- Law, *Simulation Modeling and Analysis*
- Fraden, *Handbook of Modern Sensors*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)

Engineering design is the process of turning a need into a product, system, part, or process that can be built, checked, used, maintained, and changed in a controlled way.

A design is not just a CAD model. A complete engineering design explains:

1. What the thing must do.
2. What is being built.
3. Why the chosen solution should work.
4. How much variation is allowed.
5. How it will be manufactured, inspected, and maintained.
6. How failures and future changes will be controlled.

The subject flows best as a sequence:

$$
\text{need} \rightarrow \text{requirements} \rightarrow \text{concept} \rightarrow \text{definition} \rightarrow \text{analysis} \rightarrow \text{manufacturing} \rightarrow \text{verification} \rightarrow \text{release}
$$

Each topic in engineering design fits somewhere in that chain.

---
