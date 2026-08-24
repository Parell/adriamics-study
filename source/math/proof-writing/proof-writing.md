# Proof Writing

# What a proof does

A proof is a finite, logically valid argument that establishes a statement from accepted axioms, definitions, and previously proved results.

The goal is not to explain why a statement feels true. The goal is to remove doubt.

## Proof ingredients

Every proof is built from:

- Definitions
- Known theorems
- Logic rules
- Explicit assumptions from the statement

If a step is not justified by one of these, it is a gap.

## Typical statement forms

Mathematical claims usually have one of these shapes:

- Universal statements: â€œfor allâ€
- Existential statements: â€œthere existsâ€
- Implications: â€œif ... then ...â€
- Equivalences: â€œif and only ifâ€
- Negations: â€œit is not the case that ...â€

Each shape suggests a different proof strategy.

## What counts as a proof

Valid forms include:

- Symbolic derivations from definitions
- A chain of logically equivalent statements
- A complete case analysis
- Induction on a natural parameter
- A contradiction that forces the negation of the assumption

Examples, diagrams, and numerical checks can motivate a proof, but they do not replace one.

---

# Reading mathematical statements

Before proving anything, rewrite the statement carefully.

## Translate the language

Common phrases:

| Phrase | Logical meaning |
| --- | --- |
| â€œFor all \(x\)â€ | \(\forall x\) |
| â€œThere exists \(x\)â€ | \(\exists x\) |
| â€œIf \(P\), then \(Q\)â€ | \(P \Rightarrow Q\) |
| â€œ\(P\) only if \(Q\)â€ | \(P \Rightarrow Q\) |
| â€œ\(P\) if \(Q\)â€ | \(Q \Rightarrow P\) |
| â€œ\(P\) iff \(Q\)â€ | \(P \Leftrightarrow Q\) |
| â€œAt least oneâ€ | existential |
| â€œExactly oneâ€ | existence plus uniqueness |

## Watch the quantifier order

Quantifier order matters:

$$
\forall x\, \exists y\, P(x,y)
\quad \text{is not the same as} \quad
\exists y\, \forall x\, P(x,y).
$$

The first says each \(x\) may have its own \(y\). The second says one single \(y\) works for all \(x\).

## Negations

Negating statements correctly is essential.

$$
\neg(\forall x\, P(x)) \equiv \exists x\, \neg P(x)
$$

$$
\neg(\exists x\, P(x)) \equiv \forall x\, \neg P(x)
$$

$$
\neg(P \Rightarrow Q) \equiv P \land \neg Q
$$

$$
\neg(P \land Q) \equiv \neg P \lor \neg Q
$$

These identities are especially useful for contradiction proofs.

## Unpack definitions

Many proofs are just definitions written carefully.

Examples:

- Even: \(n\) is even if \(n = 2k\) for some integer \(k\)
- Divisible: \(a \mid b\) means \(b = ak\) for some integer \(k\)
- Injective: \(f(x_1) = f(x_2)\) implies \(x_1 = x_2\)
- Surjective: for every \(y\) in the codomain, there exists \(x\) with \(f(x) = y\)

When stuck, rewrite the claim using definitions and symbols.

---

# Core proof structures

Most undergraduate proofs fall into a small number of templates.

## Implication

To prove \(P \Rightarrow Q\), assume \(P\) and show \(Q\).

This is the default proof shape.

## Equivalence

To prove \(P \Leftrightarrow Q\), prove both directions:

$$
P \Rightarrow Q
\quad \text{and} \quad
Q \Rightarrow P.
$$

Sometimes a chain of equivalences is shorter:

$$
P \Leftrightarrow A \Leftrightarrow B \Leftrightarrow Q.
$$

## Existence

To prove \(\exists x\, P(x)\), provide:

- A candidate object \(x\)
- A justification that it satisfies the property

This is a constructive existence proof.

## Uniqueness

To prove â€œthere exists exactly one \(x\) such that \(P(x)\)â€:

1. Prove existence.
2. Assume \(x_1\) and \(x_2\) both satisfy \(P\).
3. Show \(x_1 = x_2\).

## Universal statements

To prove \(\forall x\, P(x)\), start with an arbitrary \(x\) and prove \(P(x)\).

Do not assume special properties of \(x\) unless the statement gives them.

---

# Direct proof

A direct proof starts from the hypotheses and derives the conclusion by valid deductions.

## Template

For a statement \(P \Rightarrow Q\):

1. Assume \(P\).
2. Expand definitions.
3. Use algebra, logic, or known results.
4. Conclude \(Q\).

## Example: even plus even is even

Claim: If \(m\) and \(n\) are even integers, then \(m+n\) is even.

Proof:

Let \(m = 2a\) and \(n = 2b\) for integers \(a,b\). Then

$$
m+n = 2a + 2b = 2(a+b).
$$

Since \(a+b\) is an integer, \(m+n\) is even.

## Example: product of odd integers

If \(m = 2a+1\) and \(n = 2b+1\), then

$$
mn = (2a+1)(2b+1) = 2(2ab+a+b)+1,
$$

so \(mn\) is odd.

## When to use direct proof

Use direct proof when:

- The conclusion follows naturally from the hypothesis
- Definitions are algebraic or constructive
- The statement is about closure, parity, divisibility, or inequalities

---

# Contrapositive and contradiction

These are the two main indirect proof methods.

## Contrapositive

To prove \(P \Rightarrow Q\), you may instead prove:

$$
\neg Q \Rightarrow \neg P.
$$

This is logically equivalent to the original statement.

### Example

Claim: If \(n^2\) is even, then \(n\) is even.

Contrapositive: If \(n\) is odd, then \(n^2\) is odd.

If \(n = 2k+1\), then

$$
n^2 = (2k+1)^2 = 4k(k+1)+1,
$$

which is odd. Hence the contrapositive is true, so the original statement is true.

## Contradiction

To prove \(S\), assume \(\neg S\) and derive an impossibility.

The impossibility may be:

- A logical contradiction such as \(A \land \neg A\)
- A violation of a definition
- A conflict with a known theorem
- A numerical impossibility, such as â€œan integer is both even and oddâ€

### Example

Claim: \(\sqrt{2}\) is irrational.

Assume \(\sqrt{2} = \frac{a}{b}\) in lowest terms. Then

$$
2 = \frac{a^2}{b^2}
$$

so

$$
a^2 = 2b^2.
$$

Thus \(a^2\) is even, so \(a\) is even. Write \(a = 2k\). Then

$$
4k^2 = 2b^2 \implies b^2 = 2k^2,
$$

so \(b\) is even. That contradicts that \(a/b\) was in lowest terms.

Therefore \(\sqrt{2}\) is irrational.

## Choosing between them

- Use contrapositive when the negated conclusion is easier to work with.
- Use contradiction when the negation of the entire statement creates a strong structural conflict.

---

# Cases, existence, and uniqueness

Some proofs need branching logic.

## Proof by cases

If a statement splits naturally into finitely many possibilities, prove each case.

Example:

- \(n\) is even or odd
- \(x \ge 0\) or \(x < 0\)
- A geometric object lies in one of several regions

### Example

Claim: For any integer \(n\), \(n^2 \equiv 0 \text{ or } 1 \pmod{4}\).

If \(n = 2k\), then \(n^2 = 4k^2 \equiv 0 \pmod{4}\).

If \(n = 2k+1\), then

$$
n^2 = 4k(k+1)+1 \equiv 1 \pmod{4}.
$$

So the claim holds in both cases.
## Existence proofs

There are two main types.

### Constructive existence

Give an explicit example.

Example:

To show there exists a rational number between 1 and 2, choose \(\frac{3}{2}\).

### Nonconstructive existence

Show that something must exist without explicitly naming it.

Common tools:

- Pigeonhole principle
- Completeness arguments
- Compactness or extremal arguments

## Uniqueness proofs

To prove uniqueness, the standard move is:

1. Assume two objects satisfy the defining property.
2. Compare them.
3. Conclude they are equal.

This is often paired with an existence proof.

---

# Induction

Induction proves statements indexed by the natural numbers.

## Standard induction

To prove \(P(n)\) for all \(n \ge n_0\):

1. Base case: prove \(P(n_0)\).
2. Inductive hypothesis: assume \(P(k)\) for some arbitrary \(k \ge n_0\).
3. Inductive step: prove \(P(k+1)\).

If both steps work, then \(P(n)\) holds for all \(n \ge n_0\).

## Example

Claim:

$$
1 + 2 + \cdots + n = \frac{n(n+1)}{2}
$$

for all \(n \ge 1\).

Base case \(n=1\):

$$
1 = \frac{1\cdot 2}{2}.
$$

Inductive hypothesis:

$$
1 + 2 + \cdots + k = \frac{k(k+1)}{2}.
$$

Then

$$
1 + 2 + \cdots + k + (k+1)
= \frac{k(k+1)}{2} + (k+1)
$$

$$
= (k+1)\left(\frac{k}{2}+1\right)
= \frac{(k+1)(k+2)}{2}.
$$

So the formula holds for \(k+1\).

## Strong induction

In strong induction, assume \(P(n_0), P(n_0+1), \dots, P(k)\) all hold, then prove \(P(k+1)\).

Use strong induction when the next case depends on multiple earlier cases.

## Common induction pitfalls

- Forgetting the base case
- Assuming what you are trying to prove
- Proving only \(P(k)\Rightarrow P(k+1)\) without starting the chain
- Failing to state the arbitrary integer \(k\)

---

# Proofs about sets, functions, and relations

These proofs rely heavily on unpacking definitions.

## Set equality

To prove \(A = B\), prove both inclusions:

$$
A \subseteq B
\quad \text{and} \quad
B \subseteq A.
$$

To prove \(A \subseteq B\), start with an arbitrary \(x \in A\) and show \(x \in B\).

### Example

Claim:

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C).
$$

Proof idea:

- Show \(x\) in the left side implies \(x\) is in the right side.
- Show \(x\) in the right side implies \(x\) is in the left side.

This is the most reliable way to prove set identities.

## Function properties

### Injective

To prove \(f\) is injective, assume \(f(x_1)=f(x_2)\) and show \(x_1=x_2\).

### Surjective

To prove \(f\) is surjective, let \(y\) be arbitrary in the codomain and find \(x\) such that \(f(x)=y\).

### Bijective

A function is bijective if it is both injective and surjective.

Bijective functions often have inverses.

## Relations

For a relation \(R\), standard properties are:

- Reflexive: \(aRa\)
- Symmetric: \(aRb \Rightarrow bRa\)
- Antisymmetric: \(aRb\) and \(bRa\) imply \(a=b\)
- Transitive: \(aRb\) and \(bRc\) imply \(aRc\)

These are usually proved directly from the definition of the relation.

---

# Common theorem shapes

Many theorems repeat the same patterns under different vocabulary.

## Divisibility proofs

If \(a \mid b\), write \(b = ak\) for some integer \(k\).

Then algebraically manipulate the expression.

Example:

If \(a \mid b\) and \(a \mid c\), then \(a \mid (b+c)\).

Write \(b = ak\) and \(c = a\ell\). Then

$$
b+c = a(k+\ell),
$$

so \(a \mid (b+c)\).

## Parity proofs

Use the forms:

- Even: \(2k\)
- Odd: \(2k+1\)

Then expand and simplify.

## Inequality proofs

Common tools:

- Add the same quantity to both sides
- Multiply or divide by a positive quantity
- Use known bounds
- Apply AM-GM, Cauchy-Schwarz, triangle inequality, or monotonicity

Be careful: multiplying or dividing by a negative number reverses the inequality.

## Maximum/minimum proofs

Typical strategies:

- Differentiate if calculus is allowed
- Use algebraic completion
- Compare to a known bound
- Use an extremal argument

## Existence of solutions

Typical strategies:

- Explicit construction
- Intermediate value theorem
- Counting argument
- Compactness or extremal choice

---

# Writing style and presentation

Good proof writing is clear, not decorative.

## Keep the logical structure visible

Use signposts:

- â€œAssume...â€
- â€œLet \(x\) be arbitrary...â€
- â€œBy definition...â€
- â€œTherefore...â€
- â€œHence...â€
- â€œIt follows that...â€

These guide the reader through the argument.

## State the plan when useful

For longer proofs, start with a short roadmap:

- â€œWe prove this by contradiction.â€
- â€œWe prove both inclusions.â€
- â€œWe use induction on \(n\).â€

## Avoid hidden assumptions

State assumptions explicitly.

Bad:

- â€œLet \(x\) be the solution.â€

Better:

- â€œSuppose \(x\) is any solution.â€
- â€œLet \(x\) be an arbitrary element of \(A\).â€

## Make variable names stable

Do not rename objects without reason. If you introduce \(n\), keep using \(n\).

## Separate algebra from logic

A long algebraic manipulation should still be anchored by a sentence explaining why it matters.

## End with the claim

Finish with a sentence that explicitly links your work back to the statement:

- â€œTherefore, \(P\) holds.â€
- â€œSo \(f\) is injective.â€
- â€œThus \(A = B\).â€

---

# Problem-solving workflow

When you are unsure how to start, use this sequence.

## Step 1: Rewrite the statement

Put the claim in symbols.

Identify:

- Hypotheses
- Conclusion
- Quantifiers
- Definitions involved

## Step 2: Test the shape

Decide whether the proof is best approached by:

- Direct proof
- Contrapositive
- Contradiction
- Cases
- Induction
- Set inclusion

## Step 3: Expand definitions

This often reveals the correct path.

For example:

- â€œ\(n\) is primeâ€
- â€œ\(f\) is injectiveâ€
- â€œ\(A \subseteq B\)â€
- â€œ\(x \in A \cup B\)â€

## Step 4: Try a small example

Concrete examples can expose the structure of the general proof.

They should motivate the argument, not replace it.

## Step 5: Write the argument in order

A good proof usually follows this structure:

1. Start from the assumptions.
2. Apply definitions.
3. Use algebra or known theorems.
4. Reach the conclusion.

## Step 6: Check the proof backwards

Read the conclusion first and verify every step has support.

Ask:

- Did I prove what I claimed?
- Did I use every assumption correctly?
- Did I accidentally assume the result?
- Are the quantifiers correct?

---

# Checklist and common mistakes

## Proof checklist

- State the claim clearly.
- Identify the proof method.
- Expand definitions early.
- Track quantifiers carefully.
- Justify each nontrivial step.
- Use complete cases when needed.
- Close the proof with the exact conclusion.

## Common mistakes

- Proving examples instead of the general statement
- Mixing up â€œifâ€ and â€œonly ifâ€
- Forgetting to prove both directions of an equivalence
- Using a base case that is not actually the first case
- Assuming the conclusion in an inductive step
- Confusing \(\forall\) with \(\exists\)
- Neglecting that a contradiction must be impossible
- Writing algebra that is correct but unrelated to the claim
- Skipping the reason a theorem applies
- Failing to specify the domain of variables

## Quick reference

If the statement is:

- \(P \Rightarrow Q\), try direct proof first
- \(P \Rightarrow Q\) with an awkward conclusion, try contrapositive
- A universal claim over integers, consider induction
- A set identity, prove both inclusions
- An existence statement, try construction or a nonconstructive argument
- A uniqueness statement, prove existence and then compare two candidates

---

# Formula summary

$$
\neg(\forall x\, P(x)) \equiv \exists x\, \neg P(x)
$$

$$
\neg(\exists x\, P(x)) \equiv \forall x\, \neg P(x)
$$

$$
\neg(P \Rightarrow Q) \equiv P \land \neg Q
$$

$$
P \Leftrightarrow Q \iff (P \Rightarrow Q) \land (Q \Rightarrow P)
$$

$$
A = B \iff (A \subseteq B) \land (B \subseteq A)
$$

$$
\text{To prove } \forall x\, P(x), \text{ choose arbitrary } x.
$$

$$
\text{To prove } \exists x\, P(x), \text{ exhibit a witness } x.
$$

$$
\text{To prove } P \Rightarrow Q, \text{ assume } P \text{ and derive } Q.
$$

$$
\text{To prove } P \Rightarrow Q, \text{ it is enough to show } \neg Q \Rightarrow \neg P.
$$

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)

> **Use this course after:** Start with [Logic](/study/math/logic/), then use [Discrete Math](/study/math/discrete-math/) before this course. Discrete Math provides the initial proof introduction; this course is the dedicated deeper treatment of constructing, choosing, and presenting proofs.
