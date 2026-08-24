# Failure, Reliability, and Safety

Failure engineering asks three connected questions: **How can a system fail? How likely is each failure? What can we do to prevent harm?** A useful analysis separates the physical failure mechanism from the probability of occurrence and from the consequences of an event.

This note is a systems-level companion to [Mechanics of Materials](../mechanics-of-materials/mechanics-of-materials.md), [Materials Science](../materials-science/materials-science.md), [Tribology](../tribology/tribology.md), and [Engineering Design](../engineering-design/engineering-design.md). Those notes develop detailed stress, material, and contact models; this note organizes them into investigation, reliability, and safety decisions.

## Failure is a loss of required function

A failure occurs when an item cannot perform a specified function within stated limits. It need not be a dramatic fracture: excessive deflection, leakage, inaccurate measurement, unsafe temperature, loss of containment, or unacceptable downtime can all be failures.

State the system boundary, intended function, operating time, environment, and acceptance limits before analyzing failure. The same observation can have different meanings in different contexts: a small crack may be harmless in a cosmetic panel and unacceptable in a pressure boundary.

### Main failure mechanisms

| Mechanism | Typical evidence | Main driver |
| --- | --- | --- |
| Ductile overload | Necking, large plastic deformation, shear lips | Demand exceeds plastic capacity |
| Brittle or cleavage fracture | Little plastic deformation, shiny facets, rapid separation | Low toughness, high constraint, or low temperature |
| Fatigue | Beach marks, striations, crack from a stress raiser | Repeated or fluctuating stress |
| Creep or stress rupture | Time-dependent strain, cavitation, rupture at high temperature | Sustained stress and temperature |
| Wear | Material loss, scoring, pitting, looseness | Sliding, rolling, impact, or particles |
| Corrosion | Section loss, pits, deposits, corrosion products | Electrochemical environment |
| Buckling | Sudden lateral deflection or wrinkling | Instability under compression or shear |

Fracture mode is a conclusion supported by evidence, not a label chosen from the final appearance alone. Preserve the fracture surface, photograph the assembly before disassembly, record loads and environment, and compare failed and unfailed parts.

## Fatigue and fracture

Fatigue can initiate at a notch, surface defect, inclusion, thread root, weld toe, or corrosion pit even when the nominal stress is below yield strength. For a cycle with maximum and minimum stress,

$$
\sigma_a=\frac{\sigma_{\max}-\sigma_{\min}}{2},\qquad
\sigma_m=\frac{\sigma_{\max}+\sigma_{\min}}{2},
$$

where $\sigma_a$ is alternating stress and $\sigma_m$ is mean stress. An S–N method relates stress amplitude to cycles to failure and is useful for high-cycle, predominantly elastic loading. A strain-life method uses elastic and plastic strain amplitudes and is better for low-cycle fatigue. Crack-growth analysis instead models an existing crack, commonly using stress-intensity range $\Delta K$ and

$$
\frac{da}{dN}=C(\Delta K)^m.
$$

Constants and validity ranges must come from appropriate material, geometry, environment, and load-ratio data. Do not treat an S–N curve as proof that a component containing a large crack is safe.

Fracture assessment connects crack size, stress, and toughness. A simplified mode-I check compares

$$
K_I=Y\sigma\sqrt{\pi a}
$$

with fracture toughness $K_{IC}$, where $a$ is crack size and $Y$ is a geometry factor. Real assessments must account for plasticity, constraint, residual stress, crack orientation, and the applicable standard.

## Overload, buckling, wear, and corrosion

Overload is a strength problem: demand exceeds yield, ultimate, shear, bearing, or fracture capacity. Buckling is an equilibrium-stability problem: a small lateral disturbance grows into a large displacement before material strength is necessarily exceeded. For an ideal pin-ended slender column,

$$P_{cr}=\frac{\pi^2EI}{(KL)^2},$$

where $E$ is elastic modulus, $I$ is the least second moment of area, $L$ is length, and $K$ represents end conditions. Imperfections, residual stress, eccentric loading, and inelastic behavior reduce usable capacity.

Wear diagnosis begins with contact load, sliding speed, lubrication, hardness, roughness, contamination, and temperature. Adhesive wear produces transfer or galling; abrasive wear produces grooves; erosive wear is driven by moving particles or droplets; corrosive wear combines chemical attack with motion; fretting occurs during small-amplitude oscillation. Prevention may require a material change, harder surface, coating, lubricant, seal, alignment correction, or lower contact stress.

Corrosion is an electrochemical process involving anodic metal dissolution and a cathodic reaction. Uniform attack, pitting, crevice corrosion, galvanic corrosion, stress-corrosion cracking, and corrosion fatigue require different controls. Design for drainage and inspection, select compatible materials, control chemistry, isolate galvanic couples, and verify coatings or cathodic protection.

## A defensible failure investigation

1. **Define the failure:** state the lost function, time, location, and severity.
2. **Preserve evidence:** control access, label parts, photograph condition, and avoid cleaning or forcing components before documentation.
3. **Build the chronology:** identify manufacture, assembly, commissioning, load changes, maintenance, alarms, environmental exposure, and the first abnormal observation.
4. **Compare populations:** inspect failed, surviving, returned, and correctly manufactured items.
5. **Generate mechanisms:** test overload, fatigue, corrosion, wear, buckling, manufacturing defects, misuse, and system interactions.
6. **Test hypotheses:** use measurements, microscopy, material checks, calculations, nondestructive examination, and controlled reproduction.
7. **Find causes at multiple levels:** distinguish immediate physical cause, contributing conditions, and latent design, process, maintenance, or organizational causes.
8. **Close the loop:** assign corrective actions, verify effectiveness, update drawings and procedures, and share the lesson.

The “5 Whys” and fishbone diagrams organize questions; they do not replace evidence. Fault trees can model how causes combine, but should be built from a defined top event and checked against the actual chronology.

## Reliability and probability of failure

Let $T$ be random time to failure. Reliability is

$$R(t)=P(T>t),$$

and failure probability by time $t$ is $F(t)=1-R(t)$. If a continuous distribution has density $f(t)$, its hazard rate is

$$\lambda(t)=\frac{f(t)}{R(t)}.$$

Hazard is an instantaneous conditional failure rate, not generally the probability of failure in an interval. For an exponential model with constant rate $\lambda$,

$$R(t)=e^{-\lambda t},\qquad \mathrm{MTBF}=\frac{1}{\lambda}.$$

This model describes a stable random-failure period, not every product or maintenance process.

### Weibull model

The two-parameter Weibull reliability model is

$$R(t)=\exp\left[-\left(\frac{t}{\eta}\right)^\beta\right],$$

where $\eta$ is characteristic life ($R(\eta)=e^{-1}$) and $\beta$ is shape. $\beta<1$ suggests decreasing early-life hazard, $\beta\approx1$ constant hazard, and $\beta>1$ wear-out. Estimate parameters from complete and right-censored observations using a justified method; do not discard units that have not failed. A Weibull probability plot checks plausibility but does not prove the model.

## System reliability

For statistically independent components in series, every component must work:

$$R_s=\prod_{i=1}^{n}R_i.$$

For independent parallel components, at least one must work:

$$R_p=1-\prod_{i=1}^{n}(1-R_i).$$

Redundancy helps only when the backup is genuinely independent, available when needed, and not defeated by shared power, software, environment, wiring, or maintenance. Parallel blocks can also introduce switching and dormant-failure modes.

Fault-tree analysis starts with a top event and decomposes it through AND and OR gates. An OR gate occurs when any input causes the output; an AND gate requires all inputs. Minimal cut sets are the smallest combinations of basic events that can produce the top event. Quantitative estimates require consistent event definitions, time bases, and independence assumptions.

FMEA works from lower-level functions toward system effects. Record the local effect, next-level effect, end effect, cause, controls, and action for each failure mode. FMECA adds criticality analysis. Severity, occurrence, and detectability rankings prioritize work, but a risk-priority number is not a physical probability.

Maintainability is the ability to restore function under stated conditions. Track diagnostic, access, repair, logistics, and test time. For a simple steady process,

$$A=\frac{\mathrm{MTBF}}{\mathrm{MTBF}+\mathrm{MTTR}},$$

where $A$ is inherent availability. Preventive maintenance is useful when it reduces total risk or downtime; replacing parts only because a calendar interval passed can create maintenance-induced failures.

## Hazard and risk controls

A hazard is a condition with potential to cause harm. Identify initiating events, hazardous energy or material, exposed people or assets, consequences, safeguards, and recovery actions. Prefer: eliminate; substitute; engineer guards and controls; use procedures and training; then use personal protective equipment.

A risk statement connects likelihood and consequence. Ordinal risk matrices support discussion and triage, but colored cells do not create quantitative truth: categories can be vague, scales nonlinear, and rare catastrophic events averaged away. Use evidence-based models, standards, and explicit uncertainty for consequential decisions.

Layer-of-protection analysis evaluates an initiating-event frequency and the probability that independent protection layers fail. Layers must be effective, auditable, independent, and specific to the initiating event. A basic control and an alarm sharing the same sensor are not independent layers.

Human factors includes workload, interfaces, alarms, procedures, training, fatigue, incentives, communication, and organizational conditions. Treat human error as a design input: make the safe action easy, provide feedback, constrain hazardous states, and avoid relying on memory or perfect attention.

Safety factors and reliability targets are related but not interchangeable. A deterministic factor of safety compares selected capacity and demand:

$$n=\frac{\text{capacity}}{\text{demand}},\qquad \text{margin}=\frac{\text{capacity}}{\text{demand}}-1.$$

It does not automatically specify failure probability because loads, properties, defects, models, and consequences may be uncertain. Functional safety focuses on safety-related functions: define the hazardous event, required risk reduction, safe state, diagnostics, fault response, verification, and lifecycle responsibilities. Integrity levels are risk-reduction and performance claims, not labels that make an unsafe architecture safe.

## Worked example: a redundant shutdown function

A machine has two independent shutdown channels. Channel A has reliability $R_A=0.98$ and channel B has $R_B=0.97$ over the mission. Either can stop the machine, so the shutdown function fails only if both fail:

$$R_{shutdown}=1-(1-R_A)(1-R_B)=1-(0.02)(0.03)=0.9994.$$

The failure probability is $0.0006$ over the stated mission. Shared power, a common sensor, common software, or maintenance error could make actual reliability lower; the independence assumption must be verified.

## Common mistakes

- Calling every fracture fatigue without examining initiation and loading history.
- Using nominal stress while ignoring notches, defects, residual stress, or environment.
- Treating a factor of safety as a probability of survival.
- Fitting Weibull parameters after deleting censored units.
- Multiplying reliabilities without checking independence and time basis.
- Counting dependent safeguards as independent protection layers.
- Ranking FMEA items mechanically and overlooking high-consequence failures.
- Stopping at operator error instead of correcting the design and conditions that made it likely.
- Recommending an action without defining how effectiveness will be verified.

## Practice problems

1. A component has $\sigma_{\max}=120\ \mathrm{MPa}$ and $\sigma_{\min}=-20\ \mathrm{MPa}$. Find $\sigma_a$ and $\sigma_m$.

:::solution
$$\sigma_a=70\ \mathrm{MPa},\qquad \sigma_m=50\ \mathrm{MPa}.$$
:::

2. Three independent series components have reliabilities $0.99$, $0.98$, and $0.97$ over one year. Find system reliability.

:::solution
$$R_s=(0.99)(0.98)(0.97)=0.9407,$$ so failure probability is $0.0593$.
:::

3. A Weibull model has $\beta=2$ and $\eta=10{,}000\ \mathrm h$. Find reliability at $5{,}000\ \mathrm h$ and state whether hazard increases or decreases.

:::solution
$$R(5000)=\exp[-(5000/10000)^2]=e^{-0.25}\approx0.7788.$$ Since $\beta>1$, hazard increases.
:::

4. An OR gate has independent basic-event probabilities $0.02$ and $0.03$. Find the top-event probability.

:::solution
$$P=1-(1-0.02)(1-0.03)=0.0494.$$
:::

## Progression

Study mechanics and materials first, then classify physical failure evidence. Next learn probability distributions and system reliability, followed by FMEA, fault trees, and hazard analysis. Finish by applying the full workflow to a real or simulated failure chronology and defending both the causal evidence and the proposed risk controls.
