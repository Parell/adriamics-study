# Propositions and truth values

A **proposition** is a declarative statement that is either true or false, but not both.

Examples:

- "$7$ is prime." is a proposition.
- "Close the door." is not a proposition.
- "$x > 3$" is not a proposition until $x$ is specified or quantified.

A proposition is assigned one of two truth values:

- $T$ for true
- $F$ for false

## Atomic and compound propositions

- **Atomic propositions** are basic statements such as $P$, $Q$, or $R$.
- **Compound propositions** are built from atomic propositions using logical connectives.

Example:

$$
(P \land Q) \to R
$$

## Truth tables

Truth tables list the truth value of a compound proposition for every combination of inputs.

They are the most direct way to test equivalence or validity for small propositional formulas.
---

# Logical connectives

The standard connectives are negation, conjunction, disjunction, implication, and biconditional.

## Negation

$$
\neg P
$$

Meaning: "not $P$".

Truth table:

| $P$ | $\neg P$ |
| --- | -------- |
| T   | F        |
| F   | T        |

## Conjunction

$$
P \land Q
$$

Meaning: "$P$ and $Q$". True only when both parts are true.

| $P$ | $Q$ | $P \land Q$ |
| --- | --- | ------------ |
| T   | T   | T            |
| T   | F   | F            |
| F   | T   | F            |
| F   | F   | F            |

## Disjunction

$$
P \lor Q
$$

Meaning: "$P$ or $Q$" in the inclusive sense: at least one is true.

| $P$ | $Q$ | $P \lor Q$ |
| --- | --- | ----------- |
| T   | T   | T           |
| T   | F   | T           |
| F   | T   | T           |
| F   | F   | F           |

## Implication

$$
P \to Q
$$

Meaning: "if $P$, then $Q$." It is false only when $P$ is true and $Q$ is false.

| $P$ | $Q$ | $P \to Q$ |
| --- | --- | ---------- |
| T   | T   | T          |
| T   | F   | F          |
| F   | T   | T          |
| F   | F   | T          |

This truth table often surprises people. The statement does **not** claim that $P$ causes $Q$; it only says the truth of $P$ cannot occur without $Q$.

Equivalent readings of $P \to Q$:

- $P$ implies $Q$
- If $P$, then $Q$
- $P$ only if $Q$
- $P$ is sufficient for $Q$
- $Q$ is necessary for $P$

## Biconditional

$$
P \leftrightarrow Q
$$

Meaning: "$P$ if and only if $Q$." True when both statements have the same truth value.

| $P$ | $Q$ | $P \leftrightarrow Q$ |
| --- | --- | --------------------- |
| T   | T   | T                     |
| T   | F   | F                     |
| F   | T   | F                     |
| F   | F   | T                     |

## Exclusive or

The exclusive or is often written as $P \oplus Q$.

It is true when exactly one of $P$ and $Q$ is true.

---

# Logical equivalence and algebra of propositions

Two propositions are **logically equivalent** if they have the same truth table.

Write this as:

$$
P \equiv Q
$$

Equivalent formulas can replace each other in proofs and simplification.

## Core equivalences

### Double negation

$$
\neg(\neg P) \equiv P
$$

### De Morgan's laws

$$
\neg(P \land Q) \equiv \neg P \lor \neg Q
$$

$$
\neg(P \lor Q) \equiv \neg P \land \neg Q
$$

### Implication

$$
P \to Q \equiv \neg P \lor Q
$$

### Contrapositive

$$
P \to Q \equiv \neg Q \to \neg P
$$

### Biconditional

$$
P \leftrightarrow Q \equiv (P \to Q) \land (Q \to P)
$$

### Distributive laws

$$
P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)
$$

$$
P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)
$$

### Identity and domination

$$
P \land T \equiv P, \qquad P \lor F \equiv P
$$

$$
P \land F \equiv F, \qquad P \lor T \equiv T
$$

### Idempotent laws

$$
P \land P \equiv P, \qquad P \lor P \equiv P
$$

### Complement laws

$$
P \land \neg P \equiv F, \qquad P \lor \neg P \equiv T
$$

## Tautology, contradiction, contingency

- A **tautology** is always true.
- A **contradiction** is always false.
- A **contingency** is sometimes true and sometimes false.

Examples:

$$
P \lor \neg P
$$

is a tautology.

$$
P \land \neg P
$$

is a contradiction.

## Common implication patterns

- **Converse** of $P \to Q$ is $Q \to P$.
- **Inverse** is $\neg P \to \neg Q$.
- **Contrapositive** is $\neg Q \to \neg P$.

Only the contrapositive is logically equivalent to the original implication.

---

# Predicates and quantifiers

Predicate logic extends propositional logic by allowing statements about objects.

A **predicate** is a statement with variables, such as:

$$
P(x): x \text{ is even}
$$

When a variable is assigned a value, the predicate becomes a proposition.

## Quantifiers

### Universal quantifier

$$
\forall x\, P(x)
$$

Meaning: "for all $x$, $P(x)$ holds."

### Existential quantifier

$$
\exists x\, P(x)
$$

Meaning: "there exists at least one $x$ such that $P(x)$ holds."

## Negating quantifiers

Negation flips the quantifier and negates the predicate:

$$
\neg \forall x\, P(x) \equiv \exists x\, \neg P(x)
$$

$$
\neg \exists x\, P(x) \equiv \forall x\, \neg P(x)
$$

These are among the most important rules in logic.

## Order matters

In general,

$$
\forall x\, \exists y\, P(x,y)
$$

is not equivalent to

$$
\exists y\, \forall x\, P(x,y)
$$

Example:

- For every person, there exists a friend.
- There exists one person who is friend to everyone.

These say different things.

## Domain of discourse

The meaning of a quantified statement depends on the domain.

Example:

$$
\forall x\, (x^2 \ge 0)
$$

is true over the real numbers, integers, and natural numbers, but not meaningful without a specified domain.

---

# Rules of inference

Rules of inference describe valid argument forms.

## Propositional rules

### Modus ponens

$$
P \to Q, \quad P \implies Q
$$

### Modus tollens

$$
P \to Q, \quad \neg Q \implies \neg P
$$

### Hypothetical syllogism

$$
P \to Q, \quad Q \to R \implies P \to R
$$

### Disjunctive syllogism

$$
P \lor Q, \quad \neg P \implies Q
$$

### Addition

$$
P \implies P \lor Q
$$

### Simplification

$$
P \land Q \implies P
$$

### Conjunction

$$
P, \ Q \implies P \land Q
$$

### Resolution

$$
(P \lor Q), \ (\neg P \lor R) \implies (Q \lor R)
$$

## Quantifier rules

### Universal instantiation

From $\forall x\, P(x)$, infer $P(c)$ for any specific $c$ in the domain.

### Universal generalization

If $P(c)$ is true for an arbitrary element $c$, infer $\forall x\, P(x)$.

### Existential instantiation

From $\exists x\, P(x)$, introduce a new symbol $c$ with $P(c)$.

### Existential generalization

From $P(c)$, infer $\exists x\, P(x)$.

## Valid argument form

An argument is valid when no case exists where all premises are true and the conclusion is false.

To test validity, you can use:

- Truth tables for small propositional arguments
- Equivalence transformations
- Formal proof rules
- Counterexamples

---

# Proof methods

## Direct proof

Assume the hypotheses and derive the conclusion step by step.

Typical structure:

1. Assume the given premises.
2. Apply definitions and known theorems.
3. Reach the desired statement.

Example target:

$$
P \to Q
$$

Assume $P$ and show $Q$.

## Contrapositive proof

To prove $P \to Q$, prove the equivalent statement:

$$
\neg Q \to \neg P
$$

This is often useful when the negated conclusion is easier to work with.

## Proof by contradiction

Assume the statement is false and derive a contradiction.

To prove $P$, assume $\neg P$ and show an impossibility.

This method is powerful, but do not confuse a contradiction inside the proof with a contradiction in the actual statement.

## Proof by cases

Split into exhaustive cases and prove the conclusion in each one.

If $P \lor Q$ is known, prove the result separately under $P$ and under $Q$.

## Biconditional proofs

To prove $P \leftrightarrow Q$, prove both directions:

$$
P \to Q \qquad \text{and} \qquad Q \to P
$$

## Counterexample

To disprove a universal statement, it is enough to find one counterexample.

Example:

To disprove "all even numbers are prime," use $4$.

---

# Normal forms and simplification

Normal forms standardize formulas so they can be compared or processed systematically.

## Conjunctive normal form

A formula is in **conjunctive normal form** (CNF) if it is an AND of OR-clauses.

Example:

$$
(P \lor Q) \land (\neg P \lor R)
$$

## Disjunctive normal form

A formula is in **disjunctive normal form** (DNF) if it is an OR of AND-terms.

Example:

$$
(P \land Q) \lor (\neg P \land R)
$$

## How to simplify a formula

A reliable workflow is:

1. Remove biconditionals.
2. Replace implications using $P \to Q \equiv \neg P \lor Q$.
3. Push negations inward with De Morgan's laws.
4. Use distributive laws to reach CNF or DNF.
5. Cancel tautological or contradictory pieces.

## Example transformation

Convert

$$
\neg(P \to Q)
$$

into an equivalent formula.

Solution:

$$
\neg(P \to Q) \equiv \neg(\neg P \lor Q)
$$

$$
\equiv P \land \neg Q
$$

## Tautology checking

A formula is a tautology if its negation is unsatisfiable.

Equivalently, to test whether $\phi$ is always true, check whether $\neg \phi$ can ever be true.

---

# Logic and sets

Set operations mirror logical connectives closely.

Let $A$ and $B$ be subsets of a universe $U$.

| Logic            | Sets                  |
| ---------------- | --------------------- |
| $P \land Q$      | $A \cap B$           |
| $P \lor Q$       | $A \cup B$           |
| $\neg P$         | $A^c$ or $U \setminus A$ |
| $P \to Q$        | $A \subseteq B$      |
| $P \leftrightarrow Q$ | $A = B$         |

## De Morgan for sets

$$
(A \cap B)^c = A^c \cup B^c
$$

$$
(A \cup B)^c = A^c \cap B^c
$$

These are direct analogues of the logical laws.

## Subset proof pattern

To prove $A \subseteq B$:

1. Let $x \in A$ be arbitrary.
2. Show $x \in B$.
3. Conclude $A \subseteq B$.

This is the set-theoretic version of a universal implication proof.

---

# Satisfiability and consistency

A formula is **satisfiable** if there exists at least one assignment of truth values that makes it true.

A set of formulas is **consistent** if all of them can be true at the same time.

## Relationships

- **Unsatisfiable** means no assignment makes the formula true.
- A contradiction is unsatisfiable.
- A tautology is true under every assignment.

## Why satisfiability matters

Satisfiability is central in:

- Automated theorem proving
- Circuit design
- Constraint solving
- Verification of software and hardware

## Quick checks

A formula is unsatisfiable if you can derive both $P$ and $\neg P$ from it, or if every simplification path leads to contradiction.

A formula may be satisfiable even when it is not a tautology.

Example:

$$
P \land Q
$$

is satisfiable but not a tautology.

---

# Common pitfalls

## Confusing implication with causation

$P \to Q$ is a logical relation, not a causal claim.

## Mixing up converse and contrapositive

Only the contrapositive is equivalent to the original implication.

## Negating quantifiers incorrectly

Remember:

$$
\neg \forall x\, P(x) \equiv \exists x\, \neg P(x)
$$

not $\forall x\, \neg P(x)$.

## Ignoring the domain

A quantified statement can change meaning if the domain changes.

## Using existential instantiation carelessly

When you instantiate $\exists x\, P(x)$, the symbol you introduce must represent an arbitrary witness, not a special value you are free to reuse later.

## Treating "or" as exclusive by default

In mathematics, $\lor$ is usually inclusive unless explicitly stated otherwise.

## Assuming converse laws

From $P \to Q$, you cannot conclude $Q \to P$.

---

# Problem-solving workflow

When solving a logic problem, work in this order:

1. Identify whether the task is propositional logic, predicate logic, set logic, or proof construction.
2. Rewrite the statement into symbols if helpful.
3. Expand definitions of implication, biconditional, and quantifiers.
4. Simplify using equivalence laws.
5. Choose the right proof method.
6. Check edge cases and counterexamples.
7. Translate the result back into plain language.

## Workflow examples

### To prove an implication

If the goal is $P \to Q$:

- Assume $P$.
- Derive $Q$.
- Or prove $\neg Q \to \neg P$.

### To disprove a universal claim

If the claim is $\forall x\, P(x)$:

- Find one $x$ such that $\neg P(x)$.

### To prove equality of sets

Show both inclusions:

$$
A \subseteq B \qquad \text{and} \qquad B \subseteq A
$$

### To negate a statement

Apply negation rules mechanically:

- Flip $\forall$ to $\exists$
- Flip $\exists$ to $\forall$
- Apply De Morgan's laws
- Negate the innermost predicate

---

# Formula sheet

## Core equivalences

$$
\neg\neg P \equiv P
$$

$$
P \to Q \equiv \neg P \lor Q
$$

$$
P \leftrightarrow Q \equiv (P \to Q) \land (Q \to P)
$$

$$
\neg(P \land Q) \equiv \neg P \lor \neg Q
$$

$$
\neg(P \lor Q) \equiv \neg P \land \neg Q
$$

$$
P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)
$$

$$
P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)
$$

## Quantifiers

$$
\neg \forall x\, P(x) \equiv \exists x\, \neg P(x)
$$

$$
\neg \exists x\, P(x) \equiv \forall x\, \neg P(x)
$$

## Standard inference rules

$$
P \to Q,\ P \implies Q
$$

$$
P \to Q,\ \neg Q \implies \neg P
$$

$$
P \land Q \implies P
$$

$$
P,\ Q \implies P \land Q
$$

## Set analogues

$$
(A \cap B)^c = A^c \cup B^c
$$

$$
(A \cup B)^c = A^c \cap B^c
$$

## Quick reminders

- A universal statement is disproved by one counterexample.
- A biconditional needs both directions.
- The contrapositive preserves meaning; the converse does not.
- Nested quantifiers are order-sensitive.
- Always state the domain when quantifiers are involved.

## Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
