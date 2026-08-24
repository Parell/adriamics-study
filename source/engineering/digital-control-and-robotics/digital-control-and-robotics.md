# Digital Control and Robotics

## Frames and rigid-body transformations

Robotics describes a point or body relative to a coordinate frame. A rotation matrix $R\in SO(3)$ satisfies

$$
R^TR=I,\qquad \det R=1.
$$

If a point has coordinates $p_B$ in frame $B$, and frame $B$ has orientation $R_{AB}$ and origin $o_{AB}$ expressed in frame $A$, then

$$
p_A=R_{AB}p_B+o_{AB}.
$$

Homogeneous coordinates combine rotation and translation:

$$
T_{AB}=\begin{bmatrix}R_{AB}&o_{AB}\\0&1\end{bmatrix},\qquad
\begin{bmatrix}p_A\\1\end{bmatrix}=T_{AB}\begin{bmatrix}p_B\\1\end{bmatrix}.
$$

Transforms compose in order: $T_{AC}=T_{AB}T_{BC}$. The inverse is

$$
T_{AB}^{-1}=\begin{bmatrix}R_{AB}^T&-R_{AB}^To_{AB}\\0&1\end{bmatrix}.
$$

Many implementation errors are frame errors. Name every vector with the frame in which it is expressed, and verify composition with a simple identity or zero-translation case.

## Forward and inverse kinematics

Forward kinematics maps joint coordinates $q$ to end-effector pose:

$$
T_{0n}(q)=T_{01}(q_1)T_{12}(q_2)\cdots T_{n-1,n}(q_n).
$$

For a planar two-link arm with lengths $l_1,l_2$,

$$
x=l_1\cos q_1+l_2\cos(q_1+q_2),
$$
$$
y=l_1\sin q_1+l_2\sin(q_1+q_2).
$$

Inverse kinematics reverses this map. The target is reachable only if

$$
|l_1-l_2|\leq\sqrt{x^2+y^2}\leq l_1+l_2.
$$

For reachable points, elbow-up and elbow-down solutions may both exist. Joint limits, collisions, preferred posture, and proximity to singularities select the useful solution. Numerical inverse kinematics minimizes pose error iteratively, but requires a good initial guess and explicit handling of wrapping, limits, and non-convergence.

## Jacobians and singularities

The manipulator Jacobian maps joint velocity to end-effector twist:

$$
\begin{bmatrix}v\\\omega\end{bmatrix}=J(q)\dot q.
$$

It also maps Cartesian wrench to joint torque in the virtual-work relation

$$
\tau=J(q)^TF,
$$

where $F$ combines force and moment components in a consistent frame. A Jacobian loses rank at a singularity. Then some Cartesian motion directions cannot be produced, while small Cartesian forces can require very large joint torques.

For the planar two-link arm, singularity occurs when $\sin q_2=0$: the links are collinear. Track rank, smallest singular value, or a condition number rather than relying only on a visual check. Damped least squares replaces a fragile inverse with

$$
\dot q=J^T(JJ^T+\lambda^2I)^{-1}v_d,
$$

where $\lambda>0$ limits joint velocity near singular configurations.

## Workspace and trajectory generation

The workspace is the set of poses reachable under joint limits, geometry, collisions, and actuator constraints. Reachability alone is not dexterity: a point near a singularity may be reachable but poorly controllable.

Trajectory generation should specify position, velocity, acceleration, and sometimes jerk. A cubic polynomial between scalar endpoints can satisfy position and velocity boundary conditions:

$$
q(t)=a_0+a_1t+a_2t^2+a_3t^3.
$$

A quintic polynomial can additionally satisfy zero or specified endpoint accelerations. Time scaling must check $|\dot q|$, $|\ddot q|$, torque, speed, and collision limits. Interpolating orientation with Euler angles can produce discontinuities or gimbal lock; rotation matrices, axis-angle methods, or quaternions are usually safer.

## Discrete-time systems

Sampling a continuous state model

$$
\dot x=Ax+Bu,\qquad y=Cx+Du
$$

with zero-order-held input gives

$$
x_{k+1}=A_dx_k+B_du_k,
$$

where $A_d=e^{AT}$ and $B_d=\int_0^T e^{A\tau}B\,d\tau$. A scalar first-order difference equation may be written

$$
y[k]=a_1y[k-1]+b_0u[k].
$$

Discrete stability requires every pole to lie strictly inside the unit circle: $|z_i|<1$. Continuous poles map under zero-order sampling as $z_i=e^{s_iT}$. A sampling period that is too large loses dynamics and phase margin even if the continuous plant is stable.

## Z-transform

The Z-transform converts a sequence into an algebraic function:

$$
X(z)=\sum_{k=0}^{\infty}x[k]z^{-k}.
$$

For zero initial conditions, a difference equation becomes a transfer function $G(z)=Y(z)/U(z)$. Poles determine natural response and stability; zeros shape transmission and transient response. The region of convergence matters, especially when distinguishing causal and noncausal sequences.

The final-value theorem, when its stability conditions hold, is

$$
\lim_{k\to\infty}x[k]=\lim_{z\to1}(z-1)X(z).
$$

Do not use it when poles make the final value undefined or when the required convergence conditions fail.

## Sampling, aliasing, and quantization

Sampling at frequency $f_s$ repeats a signal spectrum at multiples of $f_s$. A band-limited signal requires sampling above twice its highest frequency for ideal reconstruction:

$$
f_s>2f_{max}.
$$

Frequencies above the Nyquist frequency $f_s/2$ can fold into the measured band as aliases. An analog anti-alias low-pass filter must attenuate unwanted content before the ADC. Oversampling creates transition bandwidth for a practical filter.

An $N$-bit ADC with range $V_{FS}$ has ideal quantization step approximately $q=V_{FS}/2^N$. Quantization is not the same as sensor noise, clipping, saturation, or aliasing. Choose sampling rate, gain, reference, input protection, and digital filtering as one measurement chain.

## Discrete PID control

A continuous PID law is

$$
u(t)=K_pe(t)+K_i\int e(t)\,dt+K_d\frac{de}{dt}.
$$

One practical discrete form is

$$
u[k]=K_pe[k]+I[k]+K_d\frac{e[k]-e[k-1]}{T_s},
$$
$$
I[k]=I[k-1]+K_iT_se[k].
$$

The integral term removes steady-state error but can wind up while the actuator is saturated. Anti-windup methods include conditional integration and back-calculation. Derivative action amplifies measurement noise, so it is often filtered and applied to the measured signal rather than directly to a changing reference. Tuning must account for sample delay, computation delay, actuator limits, nonlinearities, and the operating range.

## State-space control

State-space models use the smallest useful variables that predict future behavior:

$$
\dot x=Ax+Bu,\qquad y=Cx+Du.
$$

With state feedback $u=-Kx+r$, the closed-loop matrix is $A-BK$. The pair $(A,B)$ is controllable if

$$
\mathcal C=[B\ AB\ A^2B\ \cdots\ A^{n-1}B]
$$

has rank $n$. The pair $(A,C)$ is observable if the corresponding observability matrix has rank $n$. Controllability concerns whether inputs can move the state; observability concerns whether measurements reveal it.

Reference tracking often needs a prefilter or integral state. Saturation, unmodeled dynamics, noisy measurements, and poorly scaled state variables can make a mathematically stable controller perform badly. Check units, eigenvalues, actuator authority, and robustness.

## Observers and Kalman filtering

An observer estimates unmeasured state with a model and measurements:

$$
\hat x_{k+1}=A_d\hat x_k+B_du_k+L(y_k-C\hat x_k).
$$

The estimation error evolves according to $(A_d-LC)e_k$ in the ideal linear case. Choose observer poles faster than the plant when noise and actuator limits allow, but excessive speed amplifies measurement noise and modeling error.

The discrete Kalman filter represents uncertainty with a covariance matrix. For process-noise covariance $Q$ and measurement-noise covariance $R$, prediction is

$$
\hat x^-_k=A_d\hat x_{k-1}+B_du_{k-1},\qquad
P^-_k=A_dP_{k-1}A_d^T+Q.
$$

The measurement update is

$$
K_k=P^-_kC^T(CP^-_kC^T+R)^{-1},
$$
$$
\hat x_k=\hat x^-_k+K_k(y_k-C\hat x^-_k).
$$

Large $Q$ says the model is uncertain; large $R$ says the measurement is noisy. A Kalman filter does not repair bad frames, biased sensors, wrong units, poor timing, or an invalid model.

## Worked example: sampled first-order control

Consider $\dot x=-2x+u$ sampled with $T_s=0.1$ s and zero-order-held input. The exact discrete pole is

$$
z=e^{-2(0.1)}\approx0.819.
$$

Thus the sampled uncontrolled system is stable because $|z|<1$. Its exact input coefficient is

$$
B_d=\int_0^{0.1}e^{-2\tau}\,d\tau=\frac{1-e^{-0.2}}{2}\approx0.091.
$$

The model is $x[k+1]=0.819x[k]+0.091u[k]$. A forward-Euler approximation would give $x[k+1]=0.8x[k]+0.1u[k]$; it is close here, but larger sampling periods can produce significant pole and gain errors or even false instability.

## Common mistakes

- Multiplying transforms in the wrong order or mixing vector frames.
- Treating every reachable pose as dexterous and well-conditioned.
- Inverting a Jacobian near a singularity without damping or limits.
- Interpolating Euler angles without checking discontinuities.
- Assuming a continuous controller is unchanged after sampling.
- Using the Nyquist condition without an anti-alias filter or bandwidth margin.
- Allowing integral windup while the actuator is saturated.
- Checking closed-loop poles but not actuator effort, noise, delay, or model uncertainty.
- Tuning an observer or Kalman filter before checking units, timing, and sensor bias.

## Practice problems

### Problem 1: planar forward kinematics

For a planar arm with $l_1=l_2=1$ m and $q_1=0$, $q_2=\pi/2$, find $(x,y)$.

**Solution:** $x=1+0=1$ m and $y=0+1=1$ m.

### Problem 2: sampling

A sensor signal contains useful content through 200 Hz. What ideal minimum sampling frequency is required, and what practical precaution is needed?

**Solution:** The ideal minimum is greater than 400 Hz. Use a higher rate in practice and an analog anti-alias filter before sampling.

### Problem 3: discrete PID integral update

With $K_i=2$, $T_s=0.05$ s, previous integral $I[k-1]=0.4$, and error $e[k]=0.3$, find $I[k]$.

**Solution:** $I[k]=0.4+2(0.05)(0.3)=0.43$.

### Problem 4: Kalman interpretation

What does increasing measurement covariance $R$ do in a Kalman filter?

**Solution:** It indicates less trust in the measurement, so the Kalman gain generally decreases and the estimate stays closer to the model prediction.

## Progression

Learn frames and kinematics before Jacobians and trajectories. Then study sampling, Z-transforms, and discrete stability before implementing PID. Finish with state feedback, observers, and Kalman filtering. At every stage, connect equations to timing, frames, limits, noise, and the physical authority of the robot or actuator.

## Sources

- [Engineering LibreTexts](https://eng.libretexts.org/)
- Ogata, *Discrete-Time Control Systems*
- Spong, Hutchinson, and Vidyasagar, *Robot Modeling and Control*
- Nise, *Control Systems Engineering*
