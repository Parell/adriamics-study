# Modeling assumptions

Statics problems usually rely on idealizations. The answer is only as good as the model.

## Rigid body idealization

A rigid body does not deform under load. Distances between points remain fixed.

This assumption is usually valid when deformation is small enough that it does not affect force balance.

## Particle idealization

A particle has mass but no size. It can translate, but it cannot rotate.

Use particle equilibrium when only the net force matters and moments are irrelevant.

## Two-dimensional versus three-dimensional

Many problems are planar, so all forces and geometry lie in one plane.

For 2D equilibrium:

$$
\sum F_x = 0, \qquad \sum F_y = 0, \qquad \sum M_z = 0
$$

For 3D equilibrium:

$$
\sum F_x = 0,\quad \sum F_y = 0,\quad \sum F_z = 0
$$

$$
\sum M_x = 0,\quad \sum M_y = 0,\quad \sum M_z = 0
$$

---

# Forces, moments, and couples

## Force vectors

A force has magnitude, direction, and point of application.

In Cartesian form:

$$
\mathbf{F} = F_x \mathbf{i} + F_y \mathbf{j} + F_z \mathbf{k}
$$

The magnitude is

$$
|\mathbf{F}| = \sqrt{F_x^2 + F_y^2 + F_z^2}
$$

## Moment of a force

The moment of a force about point $O$ is

$$
\mathbf{M}_O = \mathbf{r} \times \mathbf{F}
$$

where $\mathbf{r}$ is the position vector from $O$ to the point of application.

In planar problems, the scalar moment magnitude is often

$$
M_O = F d_\perp
$$

where $d_\perp$ is the perpendicular distance from the point to the force line of action.

## Couple moment

A couple consists of two equal and opposite parallel forces separated by a distance.

Its net force is zero, but it creates a pure moment:

$$
M = F d
$$

Couple moments are free vectors in rigid-body analysis. They can be applied anywhere on the body without changing their effect.

## Varignon's theorem

The moment of a resultant force about a point equals the sum of the moments of its components about that point.

This is useful when breaking a force into components before taking moments.

---

# Equilibrium equations

Equilibrium requires both translational and rotational balance.

## Particle equilibrium

For a particle in 2D:

$$
\sum F_x = 0, \qquad \sum F_y = 0
$$

For a particle in 3D:

$$
\sum F_x = 0, \qquad \sum F_y = 0, \qquad \sum F_z = 0
$$

## Rigid-body equilibrium in 2D

The three independent equations are:

$$
\sum F_x = 0
$$

$$
\sum F_y = 0
$$

$$
\sum M_O = 0
$$

The moment may be taken about any convenient point $O$.

## Rigid-body equilibrium in 3D

The six equations are:

$$
\sum F_x = 0,\ \sum F_y = 0,\ \sum F_z = 0
$$

$$
\sum M_x = 0,\ \sum M_y = 0,\ \sum M_z = 0
$$

These are the only independent equilibrium equations for a rigid body.

---

# Free-body diagrams

A free-body diagram, or FBD, is the most important tool in statics.

## How to build an FBD

1. Isolate the body of interest.
2. Remove the surroundings.
3. Replace every contact, support, and connection with the forces and moments it can exert.
4. Show all known external loads, including weight.
5. Choose axes and sign conventions.

## What belongs on the FBD

- Applied forces
- Reaction forces at supports
- Reaction moments at fixed supports
- Weight acting at the center of gravity
- Friction forces at contact surfaces
- Distributed loads or their resultants

## What does not belong on the FBD

- Internal forces within the body, unless you cut the body open
- Action-reaction pairs acting on different bodies
- Extra geometry that does not affect force balance

## Good practice

Always label unknowns with symbols, not guessed directions.

If the computed value is negative, the actual direction is opposite to the assumed direction.
---

# Support reactions

Different supports impose different kinematic constraints and therefore produce different reaction components.

## Common 2D supports

| Support        | Reaction components                 | Notes                                 |
| -------------- | ----------------------------------- | ------------------------------------- |
| Roller         | One force normal to the surface     | Allows motion along the surface       |
| Pin or hinge   | Two force components, $x$ and $y$   | Prevents translation, allows rotation |
| Fixed support  | Two force components and one moment | Prevents translation and rotation     |
| Cable          | Tension only along cable direction  | Cannot carry compression              |
| Smooth contact | One normal reaction                 | No friction                           |

## Common 3D supports

The reaction set depends on the allowed motions. For example, a ball-and-socket support prevents translation in all directions but does not resist moments.

## Statical determinacy

In 2D, a single rigid body has three equilibrium equations.

- If the number of independent unknown reactions equals three, the system is statically determinate.
- If it exceeds three, the system is statically indeterminate unless additional compatibility relations are used.

Do not confuse "more unknowns than equations" with "unsolvable." It only means equilibrium alone is not enough.

---

# Distributed loads, centroids, and resultants

A distributed load can often be replaced by an equivalent concentrated force.

If the load intensity is $w(x)$, then the resultant force is

$$
R = \int_a^b w(x)\,dx
$$

and its line of action is located at

$$
\bar{x} = \frac{1}{R}\int_a^b x\,w(x)\,dx
$$

for a load distributed along the $x$-axis.

## Common load shapes

Uniform load:

$$
R = wL
$$

Triangular load increasing from zero:

$$
R = \frac{1}{2}w_{max}L
$$

and the resultant acts one-third of the base length from the larger end.

## Use in beam problems

Equivalent resultants simplify support-reaction calculations, but the equivalent force must produce the same net force and the same net moment as the original load.

---

# Trusses

A truss is an assembly of slender members connected by pin joints and loaded only at the joints, ideally.

## Assumptions

- Members are two-force members
- Loads and reactions act at joints
- Member self-weight is neglected or lumped at joints
- Joints are frictionless pins

## Two-force member

If a member is acted on by only two forces, those forces must be equal, opposite, collinear, and directed along the member axis.

Therefore, a two-force member carries only axial force:

- Tension if the member is being pulled
- Compression if the member is being pushed

## Method of joints

Use joint equilibrium to solve truss members.

At each joint:

$$
\sum F_x = 0, \qquad \sum F_y = 0
$$

Procedure:

1. Solve support reactions for the entire truss.
2. Choose a joint with at most two unknown member forces.
3. Assume unknown member forces are tensile.
4. Apply equilibrium at the joint.
5. Move to adjacent joints.

## Method of sections

Cut through the truss and isolate one portion.

In 2D, a cut body gives at most three independent equilibrium equations, so choose the cut to expose no more than three unknown member forces.

Method of sections is faster when you need only a few specific member forces.

## Zero-force members

Some members carry no load for a given loading case.

Rules for quick identification:

- If only two non-collinear members meet at an unloaded joint, both are zero-force members.
- If three members meet at an unloaded joint and two are collinear, the third is zero-force.

Use these as shortcuts, but verify them when the loading changes.

---

# Frames and machines

Frames and machines are assemblies with multiple members that are not necessarily two-force members.

## Frames

A frame is designed to support loads while maintaining shape.

Members often experience:

- Axial force
- Shear force
- Bending moment

## Machines

A machine transmits or modifies forces, often with moving parts.

The analysis strategy is still the same:

1. Isolate each member.
2. Draw FBDs for each body.
3. Apply equilibrium to each body separately.
4. Use action-reaction pairs at pin joints.

## Internal joint forces

At a pin connecting two members, the force on one member is equal in magnitude and opposite in direction to the force on the other member.

This is a third-law pair, but it acts on different bodies, so do not cancel it within a single FBD.

---

# Friction

Friction resists relative motion between surfaces.

## Static friction

Static friction adjusts to prevent slipping, up to a maximum value:

$$
f_s \le \mu_s N
$$

At impending motion:

$$
f_s = \mu_s N
$$

## Kinetic friction

When sliding occurs:

$$
f_k = \mu_k N
$$

Usually $\mu_k < \mu_s$.

## Direction of friction

Friction acts opposite the direction of impending or actual relative motion.

Do not assume friction always points opposite the applied force. It opposes the motion the contact surface would otherwise have.

## Angle of friction

For impending motion,

$$
\tan \phi = \mu_s
$$

where $\phi$ is the angle between the resultant contact reaction and the normal.

## Typical friction workflow

1. Determine the likely direction of impending motion.
2. Draw the normal force and friction force.
3. Use $f_s \le \mu_s N$ or $f_k = \mu_k N$ as appropriate.
4. Solve equilibrium.
5. Check whether the assumed direction is consistent.

---

# Internal loads in beams

When a beam is cut at some location, internal resultants appear on the cut surface.

In 2D beam theory, the internal resultants are:

- Axial force $N$
- Shear force $V$
- Bending moment $M$

## Sign convention

Different textbooks use different conventions. The important thing is consistency.

A common choice for the left segment is:

- Positive $N$ in tension
- Positive $V$ upward on the left face
- Positive $M$ counterclockwise on the left face

## Procedure for internal forces

1. Make a cut at the point of interest.
2. Isolate one side of the cut.
3. Replace the cut by $N$, $V$, and $M$.
4. Apply equilibrium.
5. Interpret signs according to the chosen convention.

## Shear and bending moment relations

For distributed load intensity $w(x)$, shear and moment satisfy:

$$
\frac{dV}{dx} = -w(x)
$$

$$
\frac{dM}{dx} = V(x)
$$

These relations are the basis of shear-force and bending-moment diagrams.

## Useful qualitative facts

- Concentrated force causes a jump in the shear diagram.
- Concentrated couple causes a jump in the moment diagram.
- Where shear is zero, the moment diagram has a local extremum.

---

# Centroids and centers of gravity

The centroid is a purely geometric property. The center of gravity is the point where the resultant weight acts.

If density and gravity are uniform, centroid and center of gravity coincide.

## Composite areas

For a plane area made of simple shapes:

$$
\bar{x} = \frac{\sum A_i x_i}{\sum A_i}, \qquad \bar{y} = \frac{\sum A_i y_i}{\sum A_i}
$$

Use negative area for holes.

## Symmetry shortcuts

- If an area has one axis of symmetry, the centroid lies on that axis.
- If an area has two axes of symmetry, the centroid lies at their intersection.

## Center of gravity

For discrete masses:

$$
\bar{x} = \frac{\sum m_i x_i}{\sum m_i}, \qquad \bar{y} = \frac{\sum m_i y_i}{\sum m_i}
$$

For a continuous body, replace sums with integrals.

---

# Problem-solving workflow

Statics becomes manageable when you follow a fixed process.

## Workflow

1. Read the problem and identify what is being asked.
2. Decide whether the object is a particle, rigid body, truss, frame, beam, or contact problem.
3. Draw a complete free-body diagram.
4. Choose axes that simplify the math.
5. Replace distributed loads with equivalent resultants if appropriate.
6. Write the equilibrium equations.
7. Solve algebraically before substituting numbers when possible.
8. Check units, signs, and physical reasonableness.

## Best habits

- Solve for reactions first if they are needed later.
- Take moments about points that eliminate unknowns.
- Use symmetry when the geometry and loading justify it.
- Keep one consistent sign convention for the whole problem.

---

# Common mistakes

These errors account for most lost points in statics.

- Forgetting a support reaction component
- Drawing the wrong direction for friction
- Using the wrong line of action for a moment
- Treating a couple as a force
- Mixing up action-reaction pairs on the same FBD
- Neglecting the moment of a distributed load
- Using too many unknowns in a truss section
- Applying 2D equations to a 3D problem
- Forgetting that weight acts at the center of gravity
- Inconsistent sign conventions across diagrams and equations

When a computed answer is negative, first check whether the magnitude is reasonable before deciding the sign means the model is wrong.

---

# Formula sheet

## Equilibrium

$$
\sum F_x = 0,\qquad \sum F_y = 0,\qquad \sum M_O = 0
$$

## Moment

$$
\mathbf{M}_O = \mathbf{r} \times \mathbf{F}
$$

$$
M = F d_\perp
$$

## Distributed load resultant

$$
R = \int_a^b w(x)\,dx
$$

$$
\bar{x} = \frac{1}{R}\int_a^b x\,w(x)\,dx
$$

## Friction

$$
f_s \le \mu_s N
$$

$$
f_k = \mu_k N
$$

## Centroid of composite area

$$
\bar{x} = \frac{\sum A_i x_i}{\sum A_i}, \qquad \bar{y} = \frac{\sum A_i y_i}{\sum A_i}
$$

## Beam relations

$$
\frac{dV}{dx} = -w(x), \qquad \frac{dM}{dx} = V(x)
$$

## Two-force member

If only two forces act on a member, they are equal, opposite, and collinear.

---

## Quick reference

If you are stuck, ask these questions:

- What body am I isolating?
- What external forces act on it?
- What reactions can the supports supply?
- Is the problem planar or spatial?
- Can I eliminate unknowns by taking moments about a good point?
- Am I using the correct sign convention?

Statics is usually not hard algebraically. The main difficulty is building the right model.

## Sources

- [Engineering LibreTexts](https://eng.libretexts.org/)
- Hibbeler, *Engineering Mechanics*
- Nilsson and Riedel, *Electric Circuits*
- Sedra and Smith, *Microelectronic Circuits*
- Oppenheim and Willsky, *Signals and Systems*
- Nise, *Control Systems Engineering*
- Incropera et al., *Fundamentals of Heat and Mass Transfer*
- Fox, McDonald, and Pritchard, *Introduction to Fluid Mechanics*
- Groover, *Fundamentals of Modern Manufacturing*
- Callister and Rethwisch, *Materials Science and Engineering*
- Montgomery, *Introduction to Statistical Quality Control*
- Kerzner, *Project Management: A Systems Approach to Planning, Scheduling, and Controlling*
- Law, *Simulation Modeling and Analysis*
- Fraden, *Handbook of Modern Sensors*
- Leake and Borger, *Engineering Design Graphics*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
