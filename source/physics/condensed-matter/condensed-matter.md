# Condensed Matter Physics

# Crystal structure

The lattice is an ideal periodic reference; a real crystal also has a basis and defects. Keep those roles separate when interpreting a diffraction or transport problem.

A crystal is described by a lattice and a basis. Primitive translation vectors generate equivalent points:

$$
\mathbf R=n_1\mathbf a_1+n_2\mathbf a_2+n_3\mathbf a_3.
$$

The reciprocal lattice is useful for diffraction and band theory. Constructive diffraction follows Bragg's law:

$$
2d\sin\theta=m\lambda.
$$

Real crystals contain vacancies, interstitials, substitutional impurities, dislocations, and grain boundaries. Defects can dominate diffusion, strength, conductivity, and optical response.

# Phonons and thermal properties

Lattice vibrations are quantized as phonons with energy

$$
E=\hbar\omega\left(n+\frac12\right).
$$

At long wavelength, acoustic phonons behave like sound waves. Optical phonons occur when a unit cell has multiple atoms moving relative to one another. Heat capacity, thermal conductivity, and expansion depend on the phonon spectrum and scattering from boundaries, defects, and other phonons.

# Electrons in solids

Periodic potentials split atomic levels into bands. The Fermiâ€“Dirac distribution is

$$
f(E)=\frac{1}{e^{(E-\mu)/(k_BT)}+1}.
$$

Materials are commonly classified by the relationship between the Fermi level and available states:

| Material | Electronic picture | Typical behavior |
| --- | --- | --- |
| Metal | Partially filled band or overlapping bands | High electrical conductivity |
| Semiconductor | Small band gap | Conductivity increases with temperature or doping |
| Insulator | Large band gap | Very low ordinary conductivity |

For a simple carrier model,

$$
\mathbf J=\sigma\mathbf E, \qquad \sigma=nq\mu.
$$

Doping creates donors or acceptors and changes carrier concentration. In a magnetic field, moving charges experience the Lorentz force and can produce a Hall voltage.

# Magnetism and phase transitions

Diamagnetism opposes an applied field; paramagnetism comes from unpaired moments; ferromagnetism supports spontaneous alignment. Antiferromagnets and ferrimagnets have ordered but opposing sublattices.

Superconductors exhibit zero DC resistance and magnetic flux expulsion below a critical temperature. Their behavior is limited by critical field, current, and temperature.

Near a continuous phase transition, fluctuations become important and macroscopic properties often follow power laws. Order parameters distinguish phases, while symmetry breaking explains why phases have different properties.

# Problem-solving workflow

1. Identify the structure, carriers, or collective mode involved.
2. Decide whether a microscopic, band, lattice, or continuum model is appropriate.
3. State approximations such as low temperature, weak disorder, or parabolic bands.
4. Check dimensions and compare the result with the relevant energy or length scale.

## Summary

Condensed matter physics is organized around structure, excitations, and collective behavior. Diffraction probes structure, transport probes motion, and thermodynamic or magnetic measurements reveal phases and transitions.

## Sources

- [OpenStax University Physics](https://openstax.org/subjects/science)
- [Physics LibreTexts](https://phys.libretexts.org/)
- Kittel, *Introduction to Solid State Physics*
- Ashcroft and Mermin, *Solid State Physics*
