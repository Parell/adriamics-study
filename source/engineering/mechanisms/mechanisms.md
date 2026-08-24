# Mechanisms

## A common mechanism model

Start with the input, the output, and the load path:

$$
\text{power source} \rightarrow \text{input member} \rightarrow \text{transmission} \rightarrow \text{output member} \rightarrow \text{load}
$$

For rotational power,

$$
P=T\omega=2\pi nT
$$

where $P$ is power, $T$ is torque, $\omega$ is angular speed in rad/s, and $n$ is rotational speed in revolutions per second. If speed is in rpm,

$$
P\,[\mathrm{kW}]=\frac{T\,[\mathrm{N\,m}]\,N\,[\mathrm{rpm}]}{9550}.
$$

For a transmission with efficiency $\eta$,

$$
P_{out}=\eta P_{in}.
$$

Do not assume that a mechanism can increase both torque and speed. Neglecting losses, power is conserved, so an increase in torque requires a decrease in angular speed.

### Design workflow

1. Define input speed, input power, output motion, duty cycle, life, environment, and allowable size.
2. Draw the free-body diagrams of each shaft, gear, link, or spring and identify every interface force.
3. Determine the motion ratio and the worst torque, radial force, axial force, and shock load.
4. Select a mechanism family and material using service, cost, lubrication, noise, and manufacturability constraints.
5. Check strength, stiffness, wear, fatigue, stability, and interfaces such as keys, bolts, and fits.
6. Check the result at startup, shutdown, reversal, overload, misalignment, and loss of lubrication.

Use a stated design factor $n_d$ rather than an unexplained margin. A simple allowable-stress check is

$$
\sigma_{allow}=\frac{S}{n_d},\qquad \tau_{allow}=\frac{S_\tau}{n_d},
$$

where $S$ is the relevant strength. The correct factor depends on uncertainty, consequence, loading, fatigue, and applicable standards.

## Shafts, fasteners, keys, and couplings

### Shafts

A shaft carries torque and often bending. For a solid circular shaft in elastic torsion,

$$
\tau_{max}=\frac{16T}{\pi d^3},
$$

and the angle of twist over length (L) is

$$
\phi=\frac{TL}{JG},\qquad J=\frac{\pi d^4}{32}.
$$

For combined bending moment (M) and torque (T), a useful preliminary equivalent-torque form is

$$
T_e=\sqrt{(K_tM)^2+(K_{ts}T)^2},
$$

followed by the torsion equation using (T_e). (K_t) and (K_{ts}) represent stress concentration and fatigue effects; they are not automatically equal to the geometric concentration factors.

For a hollow shaft,

$$
J=\frac{\pi}{32}(d_o^4-d_i^4).
$$

Hollow shafts can reduce mass while retaining much of the torsional stiffness, but keyways, shoulders, bearings, and manufacturing cost may control the design.

### Fasteners

Bolts transfer clamp load, shear, and sometimes tension. The joint should be designed so the clamped members remain in contact under service load. A preloaded joint is not the same as a loose pin: friction from preload may carry transverse load until slip occurs.

Check:

- bolt tensile stress and proof strength;
- shear, bearing, and tear-out in the joined parts;
- thread stripping and adequate engagement;
- preload scatter, relaxation, and embedment;
- fatigue from repeated separation or fluctuating bolt stress.

For a bolt of tensile-stress area (A_t), a first tensile estimate is

$$
\sigma_b=\frac{F_b}{A_t}.
$$

Use the fastener standard’s tensile-stress area rather than the nominal shank area for threaded tension.

### Keys and splines

A key transfers shaft torque to a hub by bearing and shear. For a rectangular key of width (w), height (h), and engaged length (L), the tangential force is

$$
F_t=\frac{2T}{d}.
$$

Approximate checks are

$$
\tau_k=\frac{F_t}{wL},\qquad \sigma_{b,k}=\frac{F_t}{(h/2)L}.
$$

The exact bearing area depends on the key geometry and fit. A keyway weakens the shaft and creates a fatigue notch. Splines distribute torque among multiple teeth and can also allow axial sliding, but they require more precise manufacture and alignment.

### Couplings

Rigid couplings require accurate alignment and transmit torque with little compliance. Flexible couplings accommodate some angular, parallel, or axial misalignment and may damp torsional shock. Select a coupling for rated torque, peak torque, speed, bore, misalignment, environment, service factor, and fail-safe behavior.

## Bearings

Rolling bearings use balls or rollers between races. Sliding bearings support a journal on a lubricating film or boundary layer. Rolling bearings generally offer low starting friction and predictable catalog life; sliding bearings can be quiet, compact, tolerant of contamination, and effective at high loads when lubrication is appropriate.

Separate bearing loads into radial (F_r), axial (F_a), and moment loads. The shaft and housing must also provide fits, shoulders, retention, and thermal expansion paths.

For a basic rating life estimate in millions of revolutions,

$$
L_{10}=\left(\frac{C}{P}\right)^p,
$$

where (C) is the dynamic load rating, (P) is equivalent dynamic load, and (p=3) for ball bearings and (p=10/3) for roller bearings. The (L_{10}) life is the life that 90% of an identical bearing population is expected to reach under the stated conditions; it is not a guarantee for one bearing.

Convert life to hours with

$$
L_{10h}=\frac{10^6L_{10}}{60N}.
$$

Static rating, contamination, lubrication, speed, clearance, misalignment, and temperature can control before catalog dynamic life does. Excessive preload raises heat; excessive clearance causes impact, noise, and poor shaft location.

## Gears

Gears provide positive, no-slip rotary transmission. For a simple external pair,

$$
i=\frac{\omega_1}{\omega_2}=\frac{z_2}{z_1}=\frac{d_2}{d_1},
$$

where (z) is tooth count and (d) is pitch diameter. The pitch-line speed is (v=\omega r). The transmitted tangential tooth force is

$$
F_t=\frac{T}{r}=\frac{2T}{d}.
$$

For pressure angle (phi), the radial separating force for a spur gear is approximately

$$
F_r=F_t\tan\phi.
$$

Helical gears add an axial force, so they need thrust-load management. Gear checks include tooth bending, contact stress (pitting), scoring, wear, interference, backlash, lubrication, alignment, and noise. The smallest pinion often governs because it has fewer teeth and sees more cycles.

## Belts and chains

Belts transmit power through friction or tooth engagement. For a friction belt,

$$
T_1-T_2=\frac{P}{v},
$$

where (T_1) and (T_2) are tight- and slack-side tensions. The capstan relation for impending slip is

$$
\frac{T_1}{T_2}=e^{\mu\theta},
$$

with (	heta) in radians. Belts are quiet and can absorb shock, but they need tensioning and may slip. Timing belts use teeth for positive timing but still require correct tooth engagement and tension.

Chains engage sprocket teeth and therefore do not slip under ordinary operation. They tolerate higher loads than many belts but require lubrication, alignment, guarding, and attention to polygonal action and elongation. Choose belts or chains using power, speed, center distance, shock, noise, contamination, maintenance, and required timing.

## Springs

Springs store and return energy. For a linear spring,

$$
F=kx,\qquad U=\frac{1}{2}kx^2.
$$

For helical compression or extension springs, the spring index is (C=D/d), where (D) is mean coil diameter and (d) is wire diameter. A preliminary torsional stress estimate is

$$
\tau_{max}=K_w\frac{8FD}{\pi d^3},
$$

where (K_w) accounts for curvature and direct shear. The spring rate is approximately

$$
k=\frac{Gd^4}{8D^3N_a},
$$

with (N_a) active coils.

Springs must have adequate travel, avoid coil clash, and remain stable. A slender compression spring can buckle; guide it or check its critical length. Fatigue is often the controlling condition because springs are repeatedly cycled. In parallel, stiffnesses add:

$$
k_{eq}=k_1+k_2+\cdots.
$$

In series,

$$
\frac{1}{k_{eq}}=\frac{1}{k_1}+\frac{1}{k_2}+\cdots.
$$

## Fatigue design and factor of safety

Separate a cyclic stress into alternating and mean components:

$$
\sigma_a=\frac{\sigma_{max}-\sigma_{min}}{2},\qquad
\sigma_m=\frac{\sigma_{max}+\sigma_{min}}{2}.
$$

One preliminary Goodman relation is

$$
\frac{\sigma_a}{S_e}+\frac{\sigma_m}{S_{ut}}\leq\frac{1}{n_d},
$$

where (S_e) is the corrected endurance strength and (S_{ut}) is ultimate tensile strength. For ductile components under combined loading, use a consistent equivalent-stress model and account for notch sensitivity, surface finish, size, temperature, reliability, residual stress, and finite life.

The factor of safety is a ratio between a capacity and a demand, but the capacity must match the failure mode. Check separately for yielding, ultimate fracture, fatigue, buckling, wear, contact stress, excessive deflection, and thermal limits. A large static factor does not prove adequate fatigue life or stability.

## Four-bar linkages and mobility

A planar four-bar has four links, four revolute joints, and one grounded link. The Gruebler–Kutzbach mobility equation for planar mechanisms is

$$
M=3(n-1)-2j_1-j_2,
$$

where (n) is the number of links, (j_1) the number of one-degree-of-freedom joints, and (j_2) the number of two-degree-of-freedom joints. For a conventional four-bar, (M=1).

For link lengths (a,b,c,d), the vector loop is

$$
a e^{i\theta_2}+b e^{i\theta_3}=d+c e^{i\theta_4}.
$$

Differentiate once for velocity and twice for acceleration. The resulting linear equations solve for unknown angular velocities and accelerations after the input motion is known. Toggle positions occur when links become collinear; transmission angle becomes poor and mechanical advantage can become very large while motion authority becomes weak.

The Grashof condition for at least one full rotation is

$$
s+l\leq p+q,
$$

where (s) and (l) are the shortest and longest links. This is a motion classification, not a complete guarantee of useful output motion.

## Cams, ratchets, and screws

A cam prescribes follower displacement as a function of cam angle. Choose a displacement law—constant velocity, simple harmonic, cycloidal, polynomial, or another law—by balancing acceleration, jerk, pressure angle, speed, and manufacturing limits. The pressure angle measures the side thrust imposed on the follower. Excessive pressure angle causes high friction, wear, and possible follower wedging. Check curvature so the cam does not develop an undercut or a sharp cusp.

A ratchet permits intermittent or one-way motion. Pawl geometry must provide positive engagement without jamming, and the tooth and pawl must withstand torque, impact, wear, and repeated indexing. A ratchet is not automatically a load-holding brake: vibration, pawl lift, tooth wear, and reverse shock must be considered.

For a screw, pitch (p) is axial distance between adjacent threads and lead (l) is axial advance per revolution. For a single-start screw, (l=p); for a multi-start screw, (l) is the pitch multiplied by the number of starts. The lead angle is

$$
\lambda=\tan^{-1}\left(\frac{l}{\pi d_m}\right).
$$

An approximate raising-torque relation for a power screw is

$$
T_{raise}=\frac{Fd_m}{2}\frac{\tan\lambda+\mu}{1-\mu\tan\lambda},
$$

before adding collar friction. Efficiency is

$$
\eta=\frac{Fl}{2\pi T}.
$$

For a simple friction model, a screw is self-locking when friction is sufficient that the load does not back-drive it, commonly approximated by (	an\lambda<\mu). Verify this experimentally or with the applicable thread and collar model; vibration can defeat marginal self-locking.

## Position, velocity, and acceleration analysis

The general relative-velocity equation for two points on a rigid link is

$$
\mathbf v_B=\mathbf v_A+\boldsymbol\omega\times\mathbf r_{B/A}.
$$

The acceleration equation is

$$
\mathbf a_B=\mathbf a_A+\boldsymbol\alpha\times\mathbf r_{B/A}
 +\boldsymbol\omega\times(\boldsymbol\omega\times\mathbf r_{B/A}).
$$

The second added term is centripetal acceleration. Vector-loop methods are transparent for small mechanisms; complex mechanisms can be solved numerically by differentiating constraint equations. At every configuration, verify closure, joint limits, singularity proximity, and continuity of position, velocity, and acceleration.

## Common mistakes

- Treating torque as power, or mixing rpm with rad/s without conversion.
- Checking only nominal stress while ignoring keyways, shoulders, threads, and holes.
- Using bearing (L_{10}) life as a guarantee for one bearing.
- Ignoring radial and axial gear forces when sizing shafts and bearings.
- Assuming belts never slip or chains never need lubrication.
- Designing a spring for static strength while ignoring fatigue, surge, and buckling.
- Using a factor of safety without identifying the failure mode and uncertainty it covers.
- Counting mechanism mobility without checking redundant constraints or singular configurations.
- Confusing a screw’s pitch with its lead.
- Solving linkage motion without checking the transmission angle and acceleration peaks.

## Worked example: preliminary shaft and gear sizing

A motor supplies (5\ \mathrm{kW}) at (1500\ \mathrm{rpm}) to a gear pair. The pinion has 20 teeth and the gear has 60 teeth. Estimate the input torque, output speed, output torque at (\eta=0.94), and tangential tooth force if the pinion pitch diameter is (80\ \mathrm{mm}).

Motor torque:

$$
T_1=\frac{9550P}{N}=\frac{9550(5)}{1500}=31.8\ \mathrm{N\,m}.
$$

The speed ratio is

$$
i=\frac{60}{20}=3,
$$

so (N_2=1500/3=500\ \mathrm{rpm}). With efficiency,

$$
T_2=\frac{\eta T_1N_1}{N_2}=\frac{0.94(31.8)(1500)}{500}=89.8\ \mathrm{N\,m}.
$$

The pinion tangential force is

$$
F_t=\frac{2T_1}{d_1}=\frac{2(31.8)}{0.080}=795\ \mathrm N.
$$

This is only a first pass. The final design must add service factors and check tooth bending, contact stress, shaft bending, bearing reactions, key strength, fatigue, lubrication, and guarding.

## Design checklist

Before approving a mechanism concept, record:

- required input and output motion;
- power, torque, speed, duty cycle, and peak transients;
- loads at every interface;
- motion ratio, backlash, compliance, and efficiency;
- material, lubrication, environment, and manufacturing process;
- static strength, fatigue, wear, contact, stiffness, and stability checks;
- alignment, retention, guarding, maintenance, and failure containment;
- applicable standards, test evidence, and unresolved assumptions.

## Sources

- Shigley, Budynas, and Nisbett, *Mechanical Engineering Design*
- Norton, *Design of Machinery*
- Hibbeler, *Engineering Mechanics: Dynamics*
- [Engineering LibreTexts](https://eng.libretexts.org/)

Mechanisms transmit power or guide motion by constraining the relative movement of solid parts. A mechanism may change speed, torque, direction, force, or the type of motion. A machine is a mechanism considered together with a power source, loads, controls, and useful output.

This note is a first design pass. It gives the models needed to choose a mechanism and estimate its size; detailed standards, bearing catalogs, tooth geometry, fatigue data, and finite-element analysis are still required for a release design.
