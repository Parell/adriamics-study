# Angles and the unit circle

## Angle measure

An angle can be measured in degrees or radians.

The conversion between them is:

$$
180^\circ = \pi \text{ radians}
$$

So:

$$
\theta_{\text{rad}} = \theta_{\text{deg}} \cdot \frac{\pi}{180}
$$

$$
\theta_{\text{deg}} = \theta_{\text{rad}} \cdot \frac{180}{\pi}
$$

## Radians

Radians are the natural unit for trig and calculus. For a circle of radius $r$, an angle $\theta$ in radians satisfies:

$$
\theta = \frac{s}{r}
$$

where $s$ is arc length.

For the unit circle, $r = 1$, so the angle equals the arc length.

## Unit circle definition

The unit circle is the circle centered at the origin with radius 1:

$$
x^2 + y^2 = 1
$$

For an angle $\theta$ measured from the positive $x$-axis, the point on the unit circle is:

$$
(\cos \theta, \sin \theta)
$$

This gives the fundamental definitions:

$$
\cos \theta = x,\quad \sin \theta = y,\quad \tan \theta = \frac{y}{x}
$$

provided $x \neq 0$.

## Quadrants and signs

The signs of trig functions depend on the quadrant:

| Quadrant | $x$ | $y$ | $\sin \theta$ | $\cos \theta$ | $\tan \theta$ |
| --- | --- | --- | --- | --- | --- |
| I | + | + | + | + | + |
| II | - | + | + | - | - |
| III | - | - | - | - | + |
| IV | + | - | - | + | - |

A common mnemonic is:

- All are positive in Quadrant I
- Sine is positive in Quadrants I and II
- Tangent is positive in Quadrants I and III
- Cosine is positive in Quadrants I and IV

## Reference angles

A **reference angle** is the acute angle between the terminal side of an angle and the $x$-axis.

Reference angles let you determine trig values quickly:

1. Find the reference angle.
2. Compute the trig value using the acute angle.
3. Apply the sign from the quadrant.

Example:

$$
\sin\left(\frac{5\pi}{6}\right) = \sin\left(\pi - \frac{\pi}{6}\right) = \frac{1}{2}
$$

because the reference angle is $\pi/6$ and sine is positive in Quadrant II.

---

# Right-triangle ratios

Using the right-triangle facts recalled from Geometry, trig functions can be
defined as ratios of side lengths relative to a chosen acute angle $\theta$.
The ratios belong here because Trigonometry owns angle functions and triangle
solving; the geometric properties of the triangle do not need to be repeated.

Let:

- Opposite side = side across from $\theta$
- Adjacent side = side next to $\theta$
- Hypotenuse = longest side

Then:

$$
\sin \theta = \frac{\text{opposite}}{\text{hypotenuse}}
$$

$$
\cos \theta = \frac{\text{adjacent}}{\text{hypotenuse}}
$$

$$
\tan \theta = \frac{\text{opposite}}{\text{adjacent}}
$$

The reciprocal functions are:

$$
\csc \theta = \frac{1}{\sin \theta}
$$

$$
\sec \theta = \frac{1}{\cos \theta}
$$

$$
\cot \theta = \frac{1}{\tan \theta}
$$

## SOH-CAH-TOA

A compact memory aid:

- SOH: sine = opposite / hypotenuse
- CAH: cosine = adjacent / hypotenuse
- TOA: tangent = opposite / adjacent

## Common exact values

The most common exact trig values come from special right triangles.

### 45-45-90 triangle

Sides are in the ratio:

$$
1 : 1 : \sqrt{2}
$$

So for a $45^\circ$ angle:

$$
\sin 45^\circ = \cos 45^\circ = \frac{\sqrt{2}}{2}
$$

$$
\tan 45^\circ = 1
$$

### 30-60-90 triangle

Sides are in the ratio:

$$
1 : \sqrt{3} : 2
$$

So:

$$
\sin 30^\circ = \frac{1}{2},\quad \cos 30^\circ = \frac{\sqrt{3}}{2}
$$

$$
\sin 60^\circ = \frac{\sqrt{3}}{2},\quad \cos 60^\circ = \frac{1}{2}
$$

and:

$$
\tan 30^\circ = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3},\quad \tan 60^\circ = \sqrt{3}
$$

---

# Core trigonometric functions

## Definitions

The primary trig functions are:

$$
\sin x,\quad \cos x,\quad \tan x,\quad \csc x,\quad \sec x,\quad \cot x
$$

They are periodic functions, which means they repeat values after a fixed interval.

## Periods

The basic periods are:

$$
\sin(x + 2\pi) = \sin x
$$

$$
\cos(x + 2\pi) = \cos x
$$

$$
\tan(x + \pi) = \tan x
$$

## Domain and range

| Function | Domain | Range |
| --- | --- | --- |
| $\sin x$ | all real $x$ | $[-1, 1]$ |
| $\cos x$ | all real $x$ | $[-1, 1]$ |
| $\tan x$ | $x \neq \frac{\pi}{2} + k\pi$ | all real numbers |
| $\csc x$ | $\sin x \neq 0$ | $(-\infty,-1] \cup [1,\infty)$ |
| $\sec x$ | $\cos x \neq 0$ | $(-\infty,-1] \cup [1,\infty)$ |
| $\cot x$ | $x \neq k\pi$ | all real numbers |

for any integer $k$.

## Even and odd functions

Trigonometric symmetry is important:

$$
\sin(-x) = -\sin x
$$

$$
\cos(-x) = \cos x
$$

$$
\tan(-x) = -\tan x
$$

So sine and tangent are odd, while cosine is even.

## Pythagorean identity

The central identity is:

$$
\sin^2 x + \cos^2 x = 1
$$

Dividing by $\cos^2 x$ gives:

$$
\tan^2 x + 1 = \sec^2 x
$$

Dividing by $\sin^2 x$ gives:

$$
1 + \cot^2 x = \csc^2 x
$$

These identities are used constantly for simplification and proof.
---

# Graphs and transformations

## Standard graphs

The graphs of $y = \sin x$ and $y = \cos x$ oscillate between $-1$ and $1$ with period $2\pi$.

Key points:

$$
\sin 0 = 0,\quad \sin\left(\frac{\pi}{2}\right)=1,\quad \sin(\pi)=0
$$

$$
\cos 0 = 1,\quad \cos\left(\frac{\pi}{2}\right)=0,\quad \cos(\pi)=-1
$$

The graph of $y = \tan x$ has vertical asymptotes at:

$$
x = \frac{\pi}{2} + k\pi
$$

## General forms

The common transformed forms are:

$$
y = A\sin(Bx - C) + D
$$

$$
y = A\cos(Bx - C) + D
$$

$$
y = A\tan(Bx - C) + D
$$

where:

- $|A|$ is the amplitude for sine and cosine
- Period for sine and cosine is $\frac{2\pi}{|B|}$
- Period for tangent is $\frac{\pi}{|B|}$
- Horizontal shift is $\frac{C}{B}$
- Vertical shift is $D$

## Amplitude, period, and phase shift

For $y = A\sin(Bx - C) + D$:

$$
\text{Amplitude} = |A|
$$

$$
\text{Period} = \frac{2\pi}{|B|}
$$

$$
\text{Phase shift} = \frac{C}{B}
$$

$$
\text{Midline} = y = D
$$

For cosine, the same formulas apply.

## Graphing workflow

To graph a transformed trig function:

1. Identify $A$, $B$, $C$, and $D$.
2. Compute amplitude, period, and midline.
3. Plot key points over one period.
4. Apply reflections or shifts.
5. Check asymptotes for tangent, secant, cotangent, and cosecant when relevant.

Example:

$$
y = 2\sin\left(3x - \frac{\pi}{2}\right) - 1
$$

has:

- Amplitude $2$
- Period $\frac{2\pi}{3}$
- Phase shift $\frac{\pi/2}{3} = \frac{\pi}{6}$ to the right
- Midline $y = -1$

---

# Key identities

## Cofunction identities

These connect complementary angles:

$$
\sin\left(\frac{\pi}{2} - x\right) = \cos x
$$

$$
\cos\left(\frac{\pi}{2} - x\right) = \sin x
$$

$$
\tan\left(\frac{\pi}{2} - x\right) = \cot x
$$

## Sum and difference identities

For sine:

$$
\sin(a \pm b) = \sin a \cos b \pm \cos a \sin b
$$

For cosine:

$$
\cos(a \pm b) = \cos a \cos b \mp \sin a \sin b
$$

For tangent:

$$
\tan(a \pm b) = \frac{\tan a \pm \tan b}{1 \mp \tan a \tan b}
$$

## Double-angle identities

$$
\sin(2x) = 2\sin x \cos x
$$

$$
\cos(2x) = \cos^2 x - \sin^2 x
$$

Equivalent forms of cosine double angle:

$$
\cos(2x) = 1 - 2\sin^2 x
$$

$$
\cos(2x) = 2\cos^2 x - 1
$$

## Half-angle formulas

From the double-angle identity:

$$
\sin^2\left(\frac{x}{2}\right) = \frac{1 - \cos x}{2}
$$

$$
\cos^2\left(\frac{x}{2}\right) = \frac{1 + \cos x}{2}
$$

These are especially useful when reducing powers or evaluating exact values.

## Product-to-sum and sum-to-product

These appear in more advanced algebra and signal analysis.

Example product-to-sum identity:

$$
\sin a \cos b = \frac{1}{2}[\sin(a+b) + \sin(a-b)]
$$

These identities are helpful for simplifying expressions with multiple angles.

## Verifying identities

When proving an identity:

- Start with one side only
- Rewrite everything in sine and cosine if needed
- Use standard identities, algebra, and factoring
- Do not manipulate both sides simultaneously unless the steps are reversible

Common mistakes:

- Canceling terms across addition
- Using an identity in the wrong direction
- Forgetting domain restrictions

---

# Solving trigonometric equations

Trig equations usually have infinitely many solutions because trig functions are periodic.

## Basic strategy

1. Isolate a trig function if possible.
2. Solve the corresponding reference-angle equation.
3. Use periodicity to write all solutions.
4. Check for excluded values if the equation came from a rational expression.

## Example: sine equation

Solve:

$$
\sin x = \frac{1}{2}
$$

On $[0, 2\pi)$, the solutions are:

$$
x = \frac{\pi}{6},\ \frac{5\pi}{6}
$$

The full solution set is:

$$
x = \frac{\pi}{6} + 2k\pi \quad \text{or} \quad x = \frac{5\pi}{6} + 2k\pi
$$

for any integer $k$.

## Example: tangent equation

Solve:

$$
\tan x = -1
$$

One solution is:

$$
x = -\frac{\pi}{4}
$$

Since tangent has period $\pi$:

$$
x = -\frac{\pi}{4} + k\pi
$$

## Factoring approach

Many trig equations reduce to algebraic factorizations.

Example:

$$
2\sin x \cos x - \sin x = 0
$$

Factor:

$$
\sin x(2\cos x - 1) = 0
$$

So either:

$$
\sin x = 0
$$

or

$$
\cos x = \frac{1}{2}
$$

This gives the full solution set.

## Square-root and inverse issues

When squaring both sides or using inverse functions, extraneous solutions can appear.

Always check solutions in the original equation.

---

# Inverse trigonometric functions

Inverse trig functions recover angles from trig values.

The principal inverses are:

$$
\arcsin x,\quad \arccos x,\quad \arctan x
$$

## Principal ranges

To make inverses functions, each is restricted to a principal range.

| Function | Domain | Range |
| --- | --- | --- |
| $\arcsin x$ | $[-1,1]$ | $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ |
| $\arccos x$ | $[-1,1]$ | $[0,\pi]$ |
| $\arctan x$ | all real numbers | $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ |

## Important distinction

Inverse trig notation does not mean reciprocal.

For example:

$$
\sin^{-1} x = \arcsin x
$$

not

$$
\frac{1}{\sin x}
$$

The reciprocal of sine is $\csc x$.

## Composition rules

On their principal domains:

$$
\sin(\arcsin x) = x
$$

$$
\arcsin(\sin x) = x \quad \text{only on the principal range}
$$

The same caution applies to arccos and arctan.

## Example

If:

$$
\theta = \arctan\left(\frac{\sqrt{3}}{3}\right)
$$

then:

$$
\theta = \frac{\pi}{6}
$$

because $\tan(\pi/6) = \sqrt{3}/3$ and $\pi/6$ lies in the arctan principal range.

---

# Laws for non-right triangles

Trigonometry also solves oblique triangles, which do not contain a right angle.

## Law of sines

For a triangle with sides $a, b, c$ opposite angles $A, B, C$:

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}
$$

This is useful when you know:

- Two angles and a side, or
- Two sides and a non-included angle

## Law of cosines

$$
c^2 = a^2 + b^2 - 2ab\cos C
$$

and cyclic variants:

$$
a^2 = b^2 + c^2 - 2bc\cos A
$$

$$
b^2 = a^2 + c^2 - 2ac\cos B
$$

This is useful when you know:

- Two sides and the included angle, or
- All three sides

## Triangle area formulas

If two sides and the included angle are known:

$$
\text{Area} = \frac{1}{2}ab\sin C
$$

This can be combined with the law of sines or cosines.

## Ambiguous case

With the law of sines, the SSA case may produce:

- No triangle
- One triangle
- Two triangles

This is a real geometric ambiguity, not a calculator mistake.

Always check whether the given data actually forms a valid triangle.

---

# Applications

## Navigation and surveying

Trig is used to determine:

- Heights from angles of elevation
- Distances across inaccessible regions
- Bearing and direction

Example setup:

- Measure an angle of elevation $\theta$
- Measure a horizontal distance $d$
- Compute height using:

$$
h = d\tan \theta
$$

if the observer and target are level horizontally.

## Physics

Trigonometry decomposes vectors into components:

$$
F_x = F\cos \theta,\quad F_y = F\sin \theta
$$

It also models oscillations and waves:

$$
y(t) = A\sin(\omega t + \phi)
$$

where:

- $A$ is amplitude
- $\omega$ is angular frequency
- $\phi$ is phase shift

## Engineering and signal processing

Periodic signals are often represented as sums of sines and cosines.

This leads to:

- Fourier series
- Harmonic analysis
- AC circuit analysis

## Coordinate geometry

The geometric coordinate formulas themselves belong to the
[Geometry note](../geometry/geometry.md). Trigonometry recalls only the
angle-based parametrization used for circles and rotations:

$$
x = r\cos \theta,\quad y = r\sin \theta
$$

and in 3D, rotations and projections rely on the same ideas.

---

# Problem-solving workflow

## Choosing the right tool

Use the following decision process:

1. If the triangle is right, start with SOH-CAH-TOA.
2. If the triangle is not right, use the law of sines or law of cosines.
3. If the problem involves a graph, identify amplitude, period, shift, and midline.
4. If the problem asks for an exact value, look for special angles or identities.
5. If the problem is an equation, isolate one trig function and use periodicity.

## Common pitfalls

- Mixing degrees and radians
- Forgetting that inverse trig functions have restricted ranges
- Using the wrong reference angle sign
- Assuming SSA gives one triangle
- Forgetting excluded values when dividing by trig expressions
- Confusing $\sin^{-1}x$ with $1/\sin x$

## Checking answers

Good checks include:

- Substitute the result back into the original equation
- Confirm quadrant and sign
- Confirm units are consistent
- Verify the angle lies in the requested interval
- For triangle problems, check that the side lengths satisfy triangle inequalities

---

# Formula sheet

## Definitions

$$
\sin \theta = \frac{y}{r},\quad \cos \theta = \frac{x}{r},\quad \tan \theta = \frac{y}{x}
$$

$$
\csc \theta = \frac{1}{\sin \theta},\quad \sec \theta = \frac{1}{\cos \theta},\quad \cot \theta = \frac{1}{\tan \theta}
$$

## Identities

$$
\sin^2 x + \cos^2 x = 1
$$

$$
1 + \tan^2 x = \sec^2 x
$$

$$
1 + \cot^2 x = \csc^2 x
$$

$$
\sin(a \pm b) = \sin a \cos b \pm \cos a \sin b
$$

$$
\cos(a \pm b) = \cos a \cos b \mp \sin a \sin b
$$

$$
\tan(a \pm b) = \frac{\tan a \pm \tan b}{1 \mp \tan a \tan b}
$$

$$
\sin(2x) = 2\sin x \cos x
$$

$$
\cos(2x) = 1 - 2\sin^2 x = 2\cos^2 x - 1
$$

## Triangle laws

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}
$$

$$
c^2 = a^2 + b^2 - 2ab\cos C
$$

$$
\text{Area} = \frac{1}{2}ab\sin C
$$

## Exact values

$$
\sin 0 = 0,\ \cos 0 = 1,\ \tan 0 = 0
$$

$$
\sin\left(\frac{\pi}{6}\right)=\frac{1}{2},\quad \cos\left(\frac{\pi}{6}\right)=\frac{\sqrt{3}}{2}
$$

$$
\sin\left(\frac{\pi}{4}\right)=\cos\left(\frac{\pi}{4}\right)=\frac{\sqrt{2}}{2}
$$

$$
\sin\left(\frac{\pi}{3}\right)=\frac{\sqrt{3}}{2},\quad \cos\left(\frac{\pi}{3}\right)=\frac{1}{2}
$$

### End of note

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
