# Optimization

Optimization is the mathematics of choosing the best available option. The quantity we care about is the **objective**: cost, error, time, energy, risk, or perhaps negative profit. The choices we are allowed to make form the **feasible set**.

For example, if \(x\) is the amount of material in a design, we might want to

$$
\text{minimize } f(x) \qquad \text{subject to } x\ge 0.
$$

More generally, the decision may be a vector \(\mathbf{x}\), and the problem is

$$
\min_{\mathbf{x}\in\mathcal F} f(\mathbf{x}).
$$

Here \(f\) is the objective and \(\mathcal F\) is the feasible set. A maximization problem can be changed into minimization by minimizing \(-f\).

### The basic vocabulary

These words describe the pieces of every optimization problem:

| Word | Meaning |
|---|---|
| **decision variable** | A quantity we are allowed to choose, such as \(x\) or \(\mathbf{x}=(x,y)\). |
| **objective function** | A formula that scores a choice. We minimize it, or maximize it by changing its sign. |
| **constraint** | A rule that limits which choices are allowed. |
| **feasible set** | The collection of all choices that satisfy every constraint. |
| **feasible point** | One particular choice inside the feasible set. |
| **optimizer** | A feasible point with the best objective value. |

For example, in

$$
\min_x x^2 \qquad\text{subject to}\qquad x\ge1,
$$

\(x\) is the decision variable, \(x^2\) is the objective, and \(x\ge1\) is the constraint. The feasible set is the interval \([1,\infty)\). The optimizer is \(x=1\), because it is the allowed point closest to the unconstrained best point \(x=0\).

An asterisk marks a point that we think is optimal. Thus \(x^*\) means "the candidate value of \(x\)," and \(\mathbf{x}^*\) means "the candidate vector." The phrase "evaluate the Hessian at \(\mathbf{x}^*\)" simply means: calculate the Hessian formula, then substitute the coordinates of \(\mathbf{x}^*\).

This note develops the ideas in stages. It uses the derivative rules from [Derivatives](/study/math/derivatives/), and the gradient and Hessian from [Multivariable Differential Calculus](/study/math/multivariable-calculus/multivariable-differential-calculus/). Matrices, eigenvalues, and numerical methods become useful later, but they are not needed for the opening examples.

## Unconstrained and constrained optimization

Optimization problems may be unconstrained, with the best point sought anywhere in the domain, or constrained, with equality, inequality, or bound conditions restricting the feasible set. The sections below develop both cases, then connect them to convexity and numerical methods.

### Start with a one-variable problem

Suppose the cost of producing \(x\) items is

$$
C(x)=x^2-6x+13.
$$

A smooth **interior** minimum—one that is not at an endpoint or boundary—must have zero slope:

$$
C'(x)=2x-6=0 \quad\Longrightarrow\quad x=3.
$$

The second derivative is \(C''(x)=2>0\), so \(x=3\) is a local minimum. Completing the square makes the answer even clearer:

$$
C(x)=(x-3)^2+4.
$$

Since \((x-3)^2\ge0\), the global minimum is \(C(3)=4\). This small example contains the basic workflow:

1. Write down the quantity to minimize.
2. Find candidates by setting the derivative to zero.
3. Classify candidates with curvature.
4. Check endpoints, constraints, and other candidates.

The word **local** means "best nearby." The word **global** means "best among every feasible choice." A stationary point—one where the derivative is zero—may be a minimum, a maximum, or neither.

### Boundaries matter

If \(0\le x\le4\), the point \(x=3\) is feasible. But if \(0\le x\le2\), there is no interior stationary point in the feasible interval. The minimum must then occur at a boundary; compare \(C(0)\) and \(C(2)\).

This is why setting the derivative equal to zero is only part of an optimization solution. Constraints can move the best point to an edge.

### Several variables: slopes become a gradient

Now let the decision be \(\mathbf{x}=(x,y)\). Consider

$$
f(x,y)=(x-2)^2+2(y+1)^2+5.
$$

The objective is smallest when both squared terms are zero, so the answer is \((2,-1)\). Calculus reaches the same answer by collecting the two partial derivatives into the **gradient**:

$$
\nabla f(x,y)=
\left\langle\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}\right\rangle
=\langle2(x-2),4(y+1)\rangle.
$$

At an interior optimum there is no downhill direction left. Therefore every component of the gradient is zero:

$$
\nabla f(x^*,y^*)=\mathbf0.
$$

For this example,

$$
2(x-2)=0,\qquad4(y+1)=0,
$$

which gives \((x^*,y^*)=(2,-1)\). The gradient points in the direction of steepest increase, so \(-\nabla f\) points in the direction of steepest local decrease.

### Curvature: minimum, maximum, or saddle?

Setting the gradient to zero finds **stationary points**, but does not classify them. A stationary point is only a location where the first-order slopes vanish; it might still be a minimum, a maximum, or a saddle.

To study the shape near a point, use second derivatives. In two variables, the second partial derivatives form the **Hessian**:

$$
\nabla^2f(x,y)=
\begin{bmatrix}
f_{xx}&f_{xy}\\
f_{yx}&f_{yy}
\end{bmatrix}.
$$

For the example \(f(x,y)=(x-2)^2+2(y+1)^2+5\), the stationary point is \((2,-1)\). Its Hessian is

$$
\nabla^2f(x,y)=
\begin{bmatrix}2&0\\0&4\end{bmatrix}.
$$

The Hessian **at the stationary point** is found by substituting \(x=2\) and \(y=-1\) into the Hessian formula. In this example the matrix happens to be the same everywhere. It says the surface curves upward in both coordinate directions, confirming a minimum.

For a general stationary point, let

$$
D=f_{xx}f_{yy}-(f_{xy})^2.
$$

| Test | Conclusion |
|---|---|
| \(D>0\) and \(f_{xx}>0\) | local minimum |
| \(D>0\) and \(f_{xx}<0\) | local maximum |
| \(D<0\) | saddle point |
| \(D=0\) | test is inconclusive |

A saddle point rises in some directions and falls in others. For instance, \(f(x,y)=x^2-y^2\) has gradient zero at the origin, but it is not a minimum: moving along the \(x\)-axis increases \(f\), while moving along the \(y\)-axis decreases it.

For more than two variables, a **positive-definite** Hessian means the objective curves upward in every direction; a **negative-definite** Hessian curves downward; an **indefinite** Hessian curves upward in some directions and downward in others, indicating a saddle. These are names for the behavior of the quadratic expression \(\mathbf v^{\mathsf T}H\mathbf v\), where \(H\) is the Hessian and \(\mathbf v\) is a direction.

## Convexity: when local means global

A function is **convex** when its graph has no dents that curve below a chord. In one variable, \(f''(x)\ge0\) on an interval is a common way to recognize convexity. In several variables, a twice-differentiable function is convex when

$$
\nabla^2 f(\mathbf{x})\succeq0
$$

throughout its domain. This means \(\mathbf{v}^{\mathsf T}\nabla^2f(\mathbf{x})\mathbf{v}\ge0\) for every direction \(\mathbf v\). The symbol \(\succeq0\) is shorthand for “positive semidefinite,” meaning “never curves downward,” though it may be flat in some directions.

A set is convex if the straight line between any two points in it stays in the set:

$$
\mathbf{x},\mathbf{y}\in\mathcal F,\quad0\le t\le1
\implies t\mathbf{x}+(1-t)\mathbf{y}\in\mathcal F.
$$

A convex objective on a convex feasible set has no misleading local minima: every local minimum is global. If the objective is strictly convex, it has at most one minimizer.

For the quadratic

$$
f(\mathbf{x})=\tfrac12\mathbf{x}^{\mathsf T}Q\mathbf{x}
+\mathbf c^{\mathsf T}\mathbf{x}+d,
$$

convexity is equivalent to \(Q\succeq0\). The eigenvalues of \(Q\) describe curvature in its principal directions.

### Constraints and the boundary

Constraints describe choices that are not allowed. Common forms are

$$
h_j(\mathbf{x})=0 \quad\text{(equality)},\qquad
g_i(\mathbf{x})\le0 \quad\text{(inequality)},
$$

along with bounds such as \(\ell\le\mathbf{x}\le u\).

Consider minimizing \(x^2+y^2\) subject to \(x+y=1\). The unconstrained minimum is \((0,0)\), but it is not feasible. The constrained minimum lies on the line \(x+y=1\), at the point closest to the origin: \((1/2,1/2)\).

For a smooth equality constraint \(h(\mathbf{x})=0\), the **Lagrangian** packages the objective and constraint together:

$$
\mathcal L(\mathbf{x},\lambda)=f(\mathbf{x})+\lambda h(\mathbf{x}).
$$

At a regular constrained optimum, solve

$$
\nabla f(\mathbf{x}^*)+\lambda^*\nabla h(\mathbf{x}^*)=\mathbf0,
\qquad h(\mathbf{x}^*)=0.
$$

Geometrically, the objective cannot decrease while staying on the constraint curve, so its gradient is parallel to the constraint's gradient.

For inequalities, the Karush–Kuhn–Tucker (KKT) conditions add multipliers \(\mu_i\ge0\):

$$
\nabla f+J_{\mathbf h}^{\mathsf T}\boldsymbol\lambda
+J_{\mathbf g}^{\mathsf T}\boldsymbol\mu=\mathbf0,
\quad \mathbf h=0,\quad \mathbf g\le0,\quad
\boldsymbol\mu\ge0,\quad \mu_i g_i=0.
$$

The final relation is **complementary slackness**. An inactive constraint has \(g_i<0\), so its multiplier is zero. For convex problems with suitable regularity assumptions, KKT conditions are also sufficient for global optimality.

## Finding an answer numerically

For simple functions we can solve equations by hand. Real objectives may have thousands or millions of variables, so numerical methods improve a current guess instead.

### Gradient, Newton, and quasi-Newton methods

Gradient descent is the basic first-order optimization method. It uses the gradient to choose a direction and a step size to improve the objective.

#### Gradient descent

Starting at \(\mathbf{x}_k\), take a step downhill:

$$
\mathbf{x}_{k+1}=\mathbf{x}_k-\alpha_k\nabla f(\mathbf{x}_k),
$$

where \(\alpha_k>0\) is the step size. A step that is too small is slow; one that is too large can overshoot or diverge. Backtracking reduces a trial step until

$$
f(\mathbf{x}_k-\alpha\mathbf g_k)
\le f(\mathbf{x}_k)-c\alpha\|\mathbf g_k\|^2,
\qquad0<c<1.
$$

Stop when the gradient and the change in the objective are both small. Poorly scaled variables create long zig-zag paths; rescaling can help.

#### Newton and quasi-Newton methods

Newton's method uses curvature to choose a better direction. With \(H_k=\nabla^2f(\mathbf{x}_k)\), solve

$$
H_k\mathbf p_k=-\nabla f(\mathbf{x}_k),
\qquad\mathbf{x}_{k+1}=\mathbf{x}_k+\alpha_k\mathbf p_k.
$$

Near a well-behaved solution, Newton's method can converge very quickly. However, forming a Hessian is expensive, and an indefinite Hessian can point uphill. Line searches or trust regions make the method safer.

Quasi-Newton methods estimate curvature from gradient changes instead of forming second derivatives. BFGS is a standard choice; L-BFGS stores only a small amount of history and is useful for large problems.

## Important problem families

Once the basic language is familiar, several useful families fit into the same picture.

### Linear and quadratic programming

Linear and quadratic programs are important structured optimization problems. Their objectives and constraints have algebraic forms that allow specialized solvers and stronger optimality guarantees.

#### Linear programming

In a linear program, both the objective and constraints are linear:

$$
\min_{\mathbf{x}}\ \mathbf c^{\mathsf T}\mathbf x
\quad\text{subject to}\quad A\mathbf x\le\mathbf b,\quad\mathbf x\ge\mathbf0.
$$

The feasible set is a polyhedron. If a finite optimum exists, at least one optimum occurs at a vertex, which motivates the simplex method. Interior-point methods are often effective for large sparse problems.

#### Quadratic programming

Quadratic programming uses a quadratic objective and linear constraints:

$$
\min_{\mathbf{x}}\ \tfrac12\mathbf{x}^{\mathsf T}Q\mathbf{x}
+\mathbf c^{\mathsf T}\mathbf x
\quad\text{subject to}\quad A\mathbf x\le\mathbf b,\quad E\mathbf x=\mathbf d.
$$

When \(Q\succeq0\), the problem is convex and KKT conditions characterize the global solution. Bounded least squares, portfolios, and model predictive control are examples.

### Multi-objective optimization

Often there is no single "best" choice: a design may trade low cost against low mass or high speed against low risk. A point is **Pareto optimal** if improving one objective would worsen at least one other objective. The set of such choices is the Pareto front.

A common compromise is a weighted sum:

$$
\min_{\mathbf{x}\in\mathcal F}\sum_{i=1}^m w_i\widetilde f_i(\mathbf{x}),
\qquad w_i\ge0.
$$

Normalize the objectives first so that units and scale do not silently choose the result. Report the weights and resulting tradeoff.

## A practical workflow

1. Define the decision variables, units, objective, and constraints. Decide which quantities are minimized or maximized.
2. Check feasibility and scaling. Ask whether the functions are differentiable and whether convexity makes a global answer likely.
3. Solve simple cases analytically. For larger smooth problems, consider gradient, Newton, or quasi-Newton methods; use LP or QP solvers when the model has that structure.
4. Verify the result: inspect the objective, gradient or KKT residuals, constraint violations, bounds, and sensitivity to the starting point and tolerances.
5. Check the model itself. A solver can accurately optimize an objective that is still a poor representation of the real decision.

### Checkpoint

You are ready to use this note when you can explain local versus global minima, find and classify a stationary point, interpret a gradient as a direction, recognize basic convexity, set up a Lagrange-multiplier system, and describe why a numerical solver needs a step-size or stopping rule.

