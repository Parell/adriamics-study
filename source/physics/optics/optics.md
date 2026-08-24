# Optics

# Light as a wave and a ray

## Ray model

The ray model is a geometric approximation. It works well when:

- Optical parts are much larger than the wavelength.
- Surfaces are smooth on the scale of the wavelength.
- You only need image location, size, and orientation.

In ray diagrams:

- A ray is drawn along the direction of propagation.
- A point source emits rays in all directions.
- Image formation is found by intersecting rays or extending them backward.

## Wave model

A monochromatic plane wave can be described by

$$
y(x,t) = A \cos(kx - \omega t + \phi)
$$

with

$$
k = \frac{2\pi}{\lambda}, \qquad \omega = 2\pi f
$$

and

$$
v = \lambda f
$$

For light in vacuum,

$$
c = \lambda f
$$

## Refractive index

The refractive index is

$$
n = \frac{c}{v}
$$

Typical values:

- Air: approximately $1.0003$
- Water: about $1.33$
- Glass: often between $1.5$ and $1.9$

The larger the refractive index, the slower light travels in the material.

---

# Geometric optics

Geometric optics is built on three main principles:

1. Light travels in straight lines in a uniform medium.
2. Rays obey the law of reflection.
3. Rays obey Snell's law at interfaces.

## Paraxial approximation

Many optical formulas assume small angles relative to the optical axis. Under this approximation:

$$
\sin \theta \approx \theta, \qquad \tan \theta \approx \theta
$$

This makes ray tracing and lens formulas much simpler.

## Image types

| Image type | Rays actually meet? | Can be projected on a screen? | Typical sign behavior |
| --- | ---: | ---: | --- |
| Real image | Yes | Yes | Usually inverted |
| Virtual image | No, rays only appear to meet | No | Usually upright |

## Object and image conventions

Different courses use slightly different sign conventions. A common one for lenses and mirrors is:

- Real object distances are positive.
- Real image distances are positive for mirrors, but lens conventions can vary.
- Focal length sign depends on whether the element is converging or diverging.

The safest approach is to state the convention being used before solving.

---

# Reflection and mirrors

## Law of reflection

The angle of incidence equals the angle of reflection:

$$
\theta_i = \theta_r
$$

Both angles are measured from the normal to the surface.

## Plane mirrors

A plane mirror forms a virtual image behind the mirror at the same distance as the object in front:

$$
d_i = -d_o
$$

The image is:

- Virtual
- Upright
- Same size as the object
- Laterally inverted

## Spherical mirrors

Two important types:

- **Concave mirror**: converging
- **Convex mirror**: diverging

For a spherical mirror, the focal length is related to the radius of curvature by

$$
f = \frac{R}{2}
$$

## Mirror equation

For paraxial rays:

$$
\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}
$$

Magnification is

$$
m = \frac{h_i}{h_o} = -\frac{d_i}{d_o}
$$

Interpretation:

- $m < 0$: inverted image
- $m > 0$: upright image
- $|m| > 1$: enlarged
- $|m| < 1$: reduced

## Ray tracing for mirrors

Use these principal rays:

- A ray parallel to the axis reflects through the focal point.
- A ray through the focal point reflects parallel to the axis.
- A ray through the center of curvature reflects back on itself.

## Common mirror cases

- Object beyond the center of curvature: real, inverted, reduced image between $f$ and $R$.
- Object at the center of curvature: real, inverted, same size at $R$.
- Object between $R$ and $f$: real, inverted, enlarged image beyond $R$.
- Object inside $f$: virtual, upright, enlarged image behind the mirror.

---

# Refraction and Snell's law

Refraction occurs when light crosses into a medium with a different refractive index. The speed changes, and the direction usually changes too.

## Snell's law

$$
n_1 \sin \theta_1 = n_2 \sin \theta_2
$$

where angles are measured from the normal.

## Physical meaning

- If $n_2 > n_1$, the ray bends toward the normal.
- If $n_2 < n_1$, the ray bends away from the normal.

## Critical angle and total internal reflection

When light moves from a higher index medium to a lower index medium, there is a critical angle:

$$
\sin \theta_c = \frac{n_2}{n_1} \qquad (n_1 > n_2)
$$

For $\theta_1 > \theta_c$, the light undergoes total internal reflection.

Applications:

- Fiber optics
- Prisms
- Endoscopy

## Dispersion

The refractive index depends on wavelength, so different colors travel and refract differently. In normal dispersion:

- Shorter wavelengths usually have larger $n$.
- Blue light bends more than red light.

This is why prisms spread white light into a spectrum.

---

# Thin lenses and image formation

Thin lenses are idealized as lenses with negligible thickness compared to object and image distances.

## Lens types

- **Converging lens**: thicker in the middle, positive focal length
- **Diverging lens**: thinner in the middle, negative focal length

## Thin lens equation

$$
\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}
$$

Magnification:

$$
m = \frac{h_i}{h_o} = -\frac{d_i}{d_o}
$$

## Ray tracing for lenses

Use three principal rays:

- A ray parallel to the axis passes through the far focal point in a converging lens.
- A ray through the near focal point emerges parallel to the axis.
- A ray through the center of the lens continues approximately straight.

## Image behavior

### Converging lens

- Object beyond $f$: real, inverted image on the opposite side.
- Object at $f$: image at infinity.
- Object inside $f$: virtual, upright, enlarged image on the same side as the object.

### Diverging lens

- Always forms a virtual, upright, reduced image on the object side.

## Lensmaker's equation

For a thin lens in air,

$$
\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)
$$

where $R_1$ and $R_2$ are the radii of curvature using the chosen sign convention.

## Multiple optical elements

For lenses in series:

1. Find the image formed by the first element.
2. Use that image as the object for the next element.
3. Keep track of signs and distances carefully.

For thin elements close together, optical powers add:

$$
P = \frac{1}{f}
$$

so

$$
P_{total} = P_1 + P_2 + \cdots
$$

with $f$ in meters and power in diopters $(\text{D})$.

---

# Optical instruments

## Human eye

The eye acts like a variable-focus imaging system. Important terms:

- **Cornea and lens**: provide most of the focusing power
- **Retina**: image plane
- **Accommodation**: change in lens shape to focus at different distances

Common vision defects:

- **Myopia**: nearsightedness, image focuses in front of the retina
- **Hyperopia**: farsightedness, image focuses behind the retina
- **Astigmatism**: different focal lengths in different meridians

Corrective lenses move the focal point onto the retina.

## Magnifiers

A simple magnifier is a converging lens used to form a larger angular image. The key idea is angular magnification, not linear magnification.

## Microscopes

A compound microscope uses:

- An **objective** lens to create a real, enlarged intermediate image
- An **eyepiece** to act as a magnifier for that intermediate image

## Telescopes

Telescopes are used to view far objects under increased angular size.

- **Refracting telescope**: uses lenses
- **Reflecting telescope**: uses mirrors

The essential idea is to collect light with a large aperture and form a manageable image for the eye or detector.

## Camera and sensor systems

For imaging systems:

- Aperture controls light gathering and depth of field.
- Focal length controls field of view and magnification.
- Sensor size influences framing and effective perspective in a given setup.

---

# Wave optics

Wave optics becomes essential when the wavelength cannot be neglected relative to the size of the slit, aperture, or obstacle.

## Superposition principle

When waves overlap, the resulting displacement is the sum of the individual displacements:

$$
y_{total} = y_1 + y_2 + \cdots
$$

Interference and diffraction are both consequences of superposition.

## Coherence

Stable interference requires coherent sources, meaning:

- Same frequency
- Constant phase difference

Laser light is highly coherent compared with ordinary lamps.

## Path difference

Interference depends on path difference $\Delta r$ and phase difference $\Delta \phi$:

$$
\Delta \phi = \frac{2\pi}{\lambda}\Delta r
$$

---

# Interference

Interference is the constructive or destructive addition of waves.

## Double-slit interference

For slit separation $d$ and screen distance $L$ with small angles:

$$
d \sin \theta = m \lambda
$$

for bright fringes, where $m = 0, 1, 2, \dots$

For dark fringes:

$$
d \sin \theta = \left(m + \frac{1}{2}\right)\lambda
$$

On a distant screen,

$$
y_m \approx \frac{m \lambda L}{d}
$$

## Thin-film interference

Thin films produce interference because light reflects from the top and bottom surfaces. Whether the reflected waves reinforce or cancel depends on:

- Path length through the film
- Phase changes upon reflection
- Refractive indices of the layers

Useful rule:

- Reflection from a boundary to a higher refractive index medium adds a phase shift of $\pi$.

## Newton's rings and related patterns

Many interference patterns arise from varying film thickness or geometry. The exact formulas depend on the setup, but the workflow is always:

1. Find the optical path difference.
2. Include any phase reversal on reflection.
3. Apply bright/dark conditions.

---

# Diffraction

Diffraction is the spreading of waves around obstacles and through apertures.

## Single-slit diffraction

For a slit of width $a$, dark fringes occur at

$$
a \sin \theta = m \lambda \qquad m = 1, 2, 3, \dots
$$

The central maximum is the widest and brightest part of the pattern.

## Diffraction grating

For a grating with line spacing $d$,

$$
d \sin \theta = m \lambda
$$

This is the same mathematical condition as double-slit bright fringes, but with many slits the maxima are much sharper.

## Resolution

Diffraction limits the resolving power of optical instruments. A common criterion is the Rayleigh criterion:

$$
\theta_{min} \approx 1.22 \frac{\lambda}{D}
$$

where $D$ is the aperture diameter.

Implications:

- Larger aperture improves resolution.
- Shorter wavelength improves resolution.

## Common misconceptions

- Diffraction is not the same as interference, but both are wave effects and often occur together.
- A smaller aperture does not just "dim" the image; it also increases blur from diffraction.

---

# Polarization

Polarization describes the orientation of the electric field in a transverse wave.

## Types of polarization

- **Linear polarization**: electric field oscillates in one fixed plane
- **Circular polarization**: field rotates with constant magnitude
- **Elliptical polarization**: most general case

Unpolarized light has random polarization directions over time.

## Polarizers

An ideal polarizer transmits only the component of the electric field along its transmission axis.

For incident intensity $I_0$ and angle $\theta$ between the light's polarization direction and the transmission axis:

$$
I = I_0 \cos^2 \theta
$$

This is Malus's law.

## Brewster's angle

At Brewster's angle, reflected light is perfectly polarized:

$$
\tan \theta_B = \frac{n_2}{n_1}
$$

Applications:

- Reducing glare
- Polarized sunglasses
- Optical measurement

---

# Acoustics

Acoustics is the study of mechanical waves, especially sound. Unlike light, sound requires a material medium: particles oscillate around equilibrium positions while energy and information travel through the medium.

## Sound waves

For a sinusoidal wave,

$$
v = f\lambda, \qquad \omega = 2\pi f, \qquad k = \frac{2\pi}{\lambda}
$$

In a fluid, sound is usually a longitudinal pressure wave. In a solid, both longitudinal and transverse elastic waves may occur. The wave speed is set by the medium's stiffness and inertia, not by the frequency alone.

For an ideal gas,

$$
v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma R T}{M}}
$$

where $\gamma$ is the heat-capacity ratio and $M$ is molar mass. Increasing temperature generally increases the speed of sound in a gas.

## Intensity and decibels

The intensity is average power per area:

$$
I = \frac{P_{\text{acoustic}}}{A}
$$

For a point source radiating uniformly, $I \propto 1/r^2$. Sound level is commonly measured relative to $I_0 = 10^{-12}\ \text{W/m}^2$:

$$
\beta = 10\log_{10}\left(\frac{I}{I_0}\right)\ \text{dB}
$$

An increase of $10$ dB corresponds to ten times the intensity, while doubling distance from an ideal point source reduces the level by about $6$ dB.

## Superposition and standing waves

Sound waves obey superposition. Nearby frequencies produce beats with beat frequency

$$
f_{\text{beat}} = |f_1-f_2|.
$$

In a pipe, boundary conditions determine the allowed resonances. For an open-open pipe or closed-closed pipe,

$$
f_n = \frac{nv}{2L}, \qquad n=1,2,3,\ldots
$$

For an open-closed pipe, only odd harmonics occur:

$$
f_n = \frac{(2n-1)v}{4L}, \qquad n=1,2,3,\ldots
$$

The fundamental frequency sets perceived pitch; waveform and harmonic content influence timbre.

## Doppler effect

Relative motion changes the observed frequency. For a stationary medium,

$$
f' = f\frac{v \pm v_o}{v \mp v_s},
$$

where $v_o$ is observer speed and $v_s$ is source speed. Choose the signs so that motion toward the other object raises the observed frequency.

## Reflection, absorption, and applications

- Reflection produces echoes and reverberation.
- Absorption converts acoustic energy into thermal energy and reduces reverberation.
- Diffraction allows sound to bend around obstacles, especially when obstacle size is comparable to $\lambda$.
- Ultrasound uses frequencies above human hearing; medical imaging relies on reflection and changes in acoustic impedance.

At an interface, the acoustic impedance is $Z=\rho v$. A large impedance mismatch produces strong reflection; matching layers improve transmission into a tissue or material.

---

# Common problem-solving workflow

Optics problems usually become manageable if you classify them correctly first.

## Step-by-step workflow

1. Decide whether the problem is geometric or wave optics.
2. Draw a clear diagram with all distances, normals, and rays.
3. Write down the relevant law:
   - Reflection
   - Snell's law
   - Mirror equation
   - Thin lens equation
   - Interference condition
4. Apply the sign convention consistently.
5. Solve algebraically before substituting numbers.
6. Check whether the answer is physically reasonable.

## Fast checks

- If a lens is converging and the object is inside the focal length, the image should be virtual and upright.
- If light goes from higher $n$ to lower $n$, total internal reflection may occur.
- If the aperture is very small relative to wavelength, diffraction must be included.
- If the image distance comes out negative under your convention, the image is virtual.

## Frequent pitfalls

- Mixing up angle measured from the normal with angle measured from the surface.
- Forgetting a phase flip on reflection from lower to higher refractive index.
- Using the thin lens formula with a thick lens without justification.
- Confusing real image with inverted image: real images are usually inverted, but the key distinction is whether rays actually converge.
- Ignoring units when using focal length and optical power.

---

# Formula summary

## Geometry and rays

$$
\theta_i = \theta_r
$$

$$
n_1 \sin \theta_1 = n_2 \sin \theta_2
$$

$$
v = \frac{c}{n}
$$

$$
\sin \theta_c = \frac{n_2}{n_1} \quad (n_1 > n_2)
$$

## Mirrors and lenses

$$
\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}
$$

$$
m = \frac{h_i}{h_o} = -\frac{d_i}{d_o}
$$

$$
f = \frac{R}{2}
$$

$$
\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)
$$

## Wave optics

$$
v = \lambda f
$$

$$
d \sin \theta = m \lambda
$$

$$
d \sin \theta = \left(m + \frac{1}{2}\right)\lambda
$$

$$
a \sin \theta = m \lambda
$$

$$
\theta_{min} \approx 1.22 \frac{\lambda}{D}
$$

## Polarization

$$
I = I_0 \cos^2 \theta
$$

$$
\tan \theta_B = \frac{n_2}{n_1}
$$

---

## Summary

Optics links ray behavior, wave behavior, and imaging systems. The most important skill is choosing the right model:

- Use geometric optics for mirrors, lenses, refraction, and image formation.
- Use wave optics for interference, diffraction, and polarization.

When in doubt, start with a diagram, identify the relevant interfaces or apertures, and track signs and phase changes carefully.

## Sources

- [OpenStax University Physics](https://openstax.org/subjects/science)
- [Physics LibreTexts](https://phys.libretexts.org/)
- Halliday, Resnick, and Walker, *Fundamentals of Physics*
- Serway and Jewett, *Physics for Scientists and Engineers*
- Griffiths, *Introduction to Electrodynamics*
- Griffiths, *Introduction to Quantum Mechanics*
- Taylor, *Classical Mechanics*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
