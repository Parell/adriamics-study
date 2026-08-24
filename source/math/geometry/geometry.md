# Geometry

# Foundations and notation

Geometry studies shape, size, position, and relationships in the plane and in space.

This note focuses on spatial reasoning, congruence, similarity, coordinate geometry,
and measurement. Trigonometric functions and angle-side ratios belong in the
[Trigonometry note](../trigonometry/trigonometry.md).

Geometry supplies the elementary coordinate-geometry prerequisites for vectors:
points, slope, distance, midpoint, and basic spatial language. The vector forms
of notation, dot and cross products, projections, and lines and planes belong in
the [Vectors note](../vectors/vectors.md), which is the authoritative source for
those topics.

Core undefined terms:

- Point: location with no size
- Line: infinite straight path
- Plane: flat two-dimensional surface

Common notation:

- Segment: $\overline{AB}$
- Ray: $\overrightarrow{AB}$
- Line through $A$ and $B$: $\overleftrightarrow{AB}$
- Length of segment $AB$: $AB$
- Angle $ABC$: $\angle ABC$

## Basic ideas

- A line segment has length, a line does not.
- An angle is formed by two rays with a common endpoint.
- A polygon is a closed figure made of line segments.
- A circle is the set of points a fixed distance from a center.

## Postulates and theorems you use constantly

- Through any two points there is exactly one line.
- A segment can be measured and compared.
- A circle can be drawn with any center and radius.
- All right angles are congruent.
- If two lines intersect, vertical angles are congruent.

---

# Angles, lines, and parallelism

## Angle types

| Type | Measure |
| --- | ---: |
| Acute | $0^\circ < \theta < 90^\circ$ |
| Right | $90^\circ$ |
| Obtuse | $90^\circ < \theta < 180^\circ$ |
| Straight | $180^\circ$ |
| Reflex | $180^\circ < \theta < 360^\circ$ |

## Angle relationships

- Complementary angles sum to $90^\circ$.
- Supplementary angles sum to $180^\circ$.
- Vertical angles are congruent.
- Linear pairs are supplementary.

If a line cuts two parallel lines, then:

- Corresponding angles are congruent.
- Alternate interior angles are congruent.
- Same-side interior angles are supplementary.

## Slope intuition for parallel and perpendicular lines

In coordinate geometry:

- Parallel lines have equal slope.
- Perpendicular lines have slopes whose product is $-1$, when both slopes are defined.

If a line has slope $m$, a perpendicular line has slope

$$
m_\perp = -\frac{1}{m}
$$

when $m \ne 0$.

---

# Triangles

Triangles are central because many geometric problems reduce to triangle relationships.

## Angle sum and exterior angles

For any triangle:

$$
A + B + C = 180^\circ
$$

An exterior angle equals the sum of the two remote interior angles:

$$
m\angle ext = m\angle 1 + m\angle 2
$$

## Special triangles

### Isosceles triangle

- Two sides are congruent.
- Base angles are congruent.
- The altitude from the vertex to the base bisects the base and the vertex angle.

### Equilateral triangle

- All sides are congruent.
- All angles are $60^\circ$.

### Right triangle

- One angle is $90^\circ$.
- The side opposite the right angle is the hypotenuse.

## Triangle inequality

For side lengths $a$, $b$, and $c$:

$$
a+b>c,\quad a+c>b,\quad b+c>a
$$

A triangle exists only if the sum of any two side lengths is greater than the third.

## Medians, altitudes, angle bisectors, and perpendicular bisectors

- A median connects a vertex to the midpoint of the opposite side.
- An altitude is perpendicular to the opposite side or its extension.
- An angle bisector divides an angle into two equal angles.
- A perpendicular bisector is perpendicular to a segment and passes through its midpoint.

Key fact:

- The perpendicular bisector of a segment contains all points equidistant from the segment's endpoints.
---

# Congruence and similarity

## Congruence

Figures are congruent if they have the same shape and size. Congruent figures can be matched by rigid motions.

Triangle congruence criteria:

- SSS: three corresponding sides congruent
- SAS: two sides and the included angle congruent
- ASA: two angles and the included side congruent
- AAS: two angles and a non-included side congruent
- HL: hypotenuse and one leg of right triangles congruent

## Similarity

Figures are similar if they have the same shape and proportional side lengths.

Triangle similarity criteria:

- AA: two angles congruent
- SAS: proportional sides with included angle congruent
- SSS: all corresponding sides proportional

If triangles are similar with scale factor $k$, then:

- Corresponding side lengths scale by $k$
- Perimeters scale by $k$
- Areas scale by $k^2$

## Common uses

- Indirect measurement
- Proportional reasoning in maps and scale drawings
- Solving unknown lengths in nested shapes

Example pattern:

If $\triangle ABC \sim \triangle DEF$, then

$$
\frac{AB}{DE}=\frac{BC}{EF}=\frac{AC}{DF}
$$

and corresponding angles are equal.

---

# Right triangles and measurement

## Pythagorean theorem

For a right triangle with legs $a$ and $b$ and hypotenuse $c$:

$$
a^2+b^2=c^2
$$

Common triples:

- $3,4,5$
- $5,12,13$
- $8,15,17$
- $7,24,25$

## Right triangles as geometric tools

Right triangles connect geometric measurement to the Pythagorean theorem. They
also appear in congruence proofs, perpendicular constructions, distance
formulas, and circle problems.

When a problem asks for a sine, cosine, or tangent ratio, an angle of elevation,
or an unknown angle from side lengths, continue in the
[Trigonometry note](../trigonometry/trigonometry.md). That note covers the
unit circle, right-triangle ratios, functions, identities, equations, and
non-right triangles.

## Distance and midpoint

For points $(x_1,y_1)$ and $(x_2,y_2)$:

$$
d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
$$

Midpoint:

$$
M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)
$$

---

# Quadrilaterals and polygons

## Quadrilateral families

| Shape | Defining properties |
| --- | --- |
| Parallelogram | Opposite sides parallel and congruent; opposite angles congruent |
| Rectangle | A parallelogram with four right angles |
| Rhombus | A parallelogram with four congruent sides |
| Square | Both a rectangle and a rhombus |
| Trapezoid | At least one pair of parallel sides |
| Kite | Two pairs of adjacent congruent sides |

Important parallelogram facts:

- Diagonals bisect each other.
- Opposite sides are parallel.
- Opposite angles are equal.

## Polygon angle sums

For an $n$-gon, the sum of interior angles is:

$$
(n-2)180^\circ
$$

Each interior angle of a regular $n$-gon is:

$$
\frac{(n-2)180^\circ}{n}
$$

Each exterior angle of a regular $n$-gon is:

$$
\frac{360^\circ}{n}
$$

The exterior angles of any polygon sum to $360^\circ$.

---

# Circles

## Core definitions

- Center: fixed point in the middle
- Radius: segment from center to circle
- Diameter: chord through the center, equal to $2r$
- Chord: segment connecting two points on the circle
- Secant: line intersecting the circle at two points
- Tangent: line touching the circle at exactly one point

## Circle relationships

- A radius is perpendicular to a tangent at the point of tangency.
- Congruent circles have equal radii.
- Equal chords in the same circle subtend equal arcs and equal central angles.

## Angle measures in circles

- Central angle measure equals its intercepted arc.
- Inscribed angle measure is half its intercepted arc.

If an inscribed angle intercepts arc $\widehat{AB}$, then

$$
m\angle ACB=\frac{1}{2}m\widehat{AB}
$$

## Arc and sector length

Arc length:

$$
s=\frac{\theta}{360^\circ}\cdot 2\pi r
$$

Sector area:

$$
A=\frac{\theta}{360^\circ}\cdot \pi r^2
$$

## Power of a point

Useful circle facts:

- Tangent segments from the same external point are congruent.
- Intersecting chords satisfy

$$
a\cdot b=c\cdot d
$$

- For two secants from one external point:

$$
(\text{external})(\text{whole})=(\text{external})(\text{whole})
$$

- For a tangent and a secant:

$$
(\text{tangent})^2=(\text{external})(\text{whole})
$$

---

# Coordinate geometry (scalar tools)

Coordinate geometry lets you translate geometric questions into algebra.

The formulas in this section are Geometry's scalar 2D tools: points, lines,
slopes, distances, and circles. They prepare the language for vectors without
turning this section into a vector-algebra lesson. Use the
[Vectors note](../vectors/vectors.md) for vector notation, vector lines and
planes, and higher-dimensional generalizations.

## Line formulas

These are previews of line relationships. The authoritative vector line
equation is developed in the Vectors note.

Slope between two points:

$$
m=\frac{y_2-y_1}{x_2-x_1}
$$

Slope-intercept form:

$$
y=mx+b
$$

Point-slope form:

$$
y-y_1=m(x-x_1)
$$

## Equation of a circle

Circle centered at $(h,k)$ with radius $r$:

$$
(x-h)^2+(y-k)^2=r^2
$$

## Common coordinate proofs

- Show two segments are congruent by comparing distances.
- Show a midpoint or bisector by using midpoint formula or equal slopes.
- Show perpendicularity using negative reciprocal slopes.
- Show parallelism using equal slopes.

For vector tests of perpendicularity, parallelism, and geometric objects,
continue to the Vectors note rather than treating this preview as a second
vector reference.

---

# Transformations and symmetry

## Rigid motions

Rigid motions preserve distance and angle measure:

- Translation
- Rotation
- Reflection

Because rigid motions preserve size and shape, they prove congruence.

## Dilations

A dilation changes size but preserves shape.

If the scale factor is $k$:

- Lengths multiply by $k$
- Areas multiply by $k^2$
- Volumes multiply by $k^3$

## Symmetry

- Line symmetry: a figure matches itself across a line
- Rotational symmetry: a figure matches itself after a rotation less than $360^\circ$

Symmetry is often a shortcut for finding equal lengths, angles, or missing parts.

---

# Area, perimeter, surface area, and volume

## Perimeter and area

| Figure | Formula |
| --- | --- |
| Rectangle | $A=lw$ |
| Square | $A=s^2$ |
| Triangle | $A=\frac12 bh$ |
| Parallelogram | $A=bh$ |
| Trapezoid | $A=\frac12(b_1+b_2)h$ |
| Circle | $A=\pi r^2$ |

## Common volumes

| Solid | Formula |
| --- | --- |
| Rectangular prism | $V=lwh$ |
| Prism | $V=Bh$ |
| Cylinder | $V=\pi r^2h$ |
| Pyramid | $V=\frac13Bh$ |
| Cone | $V=\frac13\pi r^2h$ |
| Sphere | $V=\frac43\pi r^3$ |

## Surface area mindset

Surface area is the total area of all outer faces. A reliable method is:

1. Unfold or visualize the net.
2. Compute each face separately.
3. Add all exposed areas.
4. Check for shared faces or overlaps.

---

# Proof strategies and problem-solving workflow

## Common proof tools

- Definitions: use the meaning of congruent, midpoint, bisector, tangent, and so on.
- Algebra: substitute known equalities and solve equations.
- CPCTC: corresponding parts of congruent triangles are congruent.
- Similar triangles: use proportional sides and equal angles.
- Circle theorems: use radii, tangents, arcs, and inscribed angles.
- Coordinate methods: use slopes, distances, and equations.

## Clean problem-solving workflow

1. Sketch the figure and label all givens.
2. Identify the topic: triangles, circles, similarity, coordinates, or transformations.
3. Mark equal angles, equal lengths, parallel lines, or right angles.
4. Choose the shortest path:
   - Pythagorean theorem for right triangles
   - Similarity for proportions
   - Angle chasing for unknown angles
   - Coordinate formulas for algebraic setups
   - Trigonometric ratios or laws for angle-side problems (see the [Trigonometry note](../trigonometry/trigonometry.md))
5. Write equations from the marked relationships.
6. Solve carefully and verify the result fits the geometry.

## Common pitfalls

- Mixing up diameter and radius
- Using the Pythagorean theorem on a non-right triangle
- Forgetting that similar figures have area scale factor $k^2$, not $k$
- Assuming lines are parallel or perpendicular without evidence
- Using degrees and radians inconsistently in circle work

---

# Formula sheet

## Angle and triangle formulas

$$
A+B+C=180^\circ
$$

$$
a^2+b^2=c^2
$$

$$
(\text{triangle exterior angle})=(\text{two remote interior angles})
$$

## Similarity and scaling

$$
\text{scale factor}=\frac{\text{new length}}{\text{original length}}
$$

$$
\text{area scale factor}=k^2
$$

$$
\text{volume scale factor}=k^3
$$

## Coordinate geometry preview

For vector formulas and vector equations of lines and planes, use the
[Vectors note](../vectors/vectors.md).

$$
d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
$$

$$
M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)
$$

$$
m=\frac{y_2-y_1}{x_2-x_1}
$$

## Circle formulas

$$
C=2\pi r
$$

$$
A=\pi r^2
$$

$$
s=\frac{\theta}{360^\circ}\cdot 2\pi r
$$

$$
A_{sector}=\frac{\theta}{360^\circ}\cdot \pi r^2
$$

## Surface area and volume

$$
V_{prism}=Bh
$$

$$
V_{cylinder}=\pi r^2h
$$

$$
V_{pyramid}=\frac13Bh
$$

$$
V_{cone}=\frac13\pi r^2h
$$

$$
V_{sphere}=\frac43\pi r^3
$$

---

## Quick self-check

When you finish a geometry problem, verify:

- Units are correct
- The answer matches the figure type
- The value is reasonable compared with the diagram
- Any angle measure lies between $0^\circ$ and $180^\circ$ when expected
- Any length is nonnegative

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
