<!--
id: logic-11
note: math-logic
title: "Identify Propositions"
exam: exam-i
skills: [Propositions, Truth Values]
-->

Which of the following are propositions?

1. $x > 3$
2. $7$ is prime
3. Close the door.
4. Every even integer is divisible by $2$.

:::solution
1. This is not a proposition because the truth value depends on the unspecified variable $x$.
2. This is a proposition, and it is true.
3. This is not a proposition because it is a command.
4. This is a proposition, and it is true.
:::

<!--
id: logic-12
note: math-logic
title: "Evaluate a Compound Statement"
exam: exam-i
skills: [Logical Connectives, Truth Tables]
-->

Let $P$ be true and $Q$ be false. Find the truth value of

$$
(P \land \neg Q) \lor (\neg P \to Q).
$$

:::solution
Since $Q$ is false, $\neg Q$ is true, so

$$
P \land \neg Q = T \land T = T.
$$

Also, $\neg P$ is false, so

$$
\neg P \to Q = F \to F = T.
$$

Therefore,

$$
(P \land \neg Q) \lor (\neg P \to Q) = T \lor T = T.
$$
:::

<!--
id: logic-13
note: math-logic
title: "Read an Implication Correctly"
exam: exam-i
skills: [Implication, Biconditional]
-->

If $P$ is false and $Q$ is false, determine the truth values of $P \to Q$ and $P \leftrightarrow Q$.

:::solution
An implication is false only when the antecedent is true and the conclusion is false. Since $P$ is false,

$$
P \to Q = T.
$$

A biconditional is true when both statements have the same truth value. Since both $P$ and $Q$ are false,

$$
P \leftrightarrow Q = T.
$$
:::

<!--
id: logic-14
note: math-logic
title: "Find the Contrapositive"
exam: exam-i
skills: [Implication, Contrapositive]
-->

Write the contrapositive of the statement:

If a number is divisible by $6$, then it is divisible by $3$.

:::solution
Let $P$ be "the number is divisible by $6$" and $Q$ be "the number is divisible by $3$."

The contrapositive of $P \to Q$ is

$$
\neg Q \to \neg P.
$$

So the contrapositive is:

If a number is not divisible by $3$, then it is not divisible by $6$.
:::

<!--
id: logic-15
note: math-logic
title: "Negate a Conjunction with a Disjunction"
exam: exam-i
skills: [De Morgan's Laws, Negation]
-->

Find a logically equivalent formula for

$$
\neg(P \land (Q \lor R)).
$$

:::solution
Apply De Morgan's laws:

$$
\neg(P \land (Q \lor R)) \equiv \neg P \lor \neg(Q \lor R).
$$

Then negate the disjunction:

$$
\neg(Q \lor R) \equiv \neg Q \land \neg R.
$$

So an equivalent formula is

$$
\neg P \lor (\neg Q \land \neg R).
$$
:::

<!--
id: logic-16
note: math-logic
title: "Expand a Biconditional"
exam: exam-i
skills: [Biconditional, Logical Equivalence]
-->

Rewrite $P \leftrightarrow Q$ using only implications.

:::solution
A biconditional means both implications hold:

$$
P \leftrightarrow Q \equiv (P \to Q) \land (Q \to P).
$$

This matches the definition of "if and only if."
:::

<!--
id: logic-17
note: math-logic
title: "Negate a Universal Statement"
exam: exam-i
skills: [Quantifiers, Negating Quantifiers]
-->

Negate the statement

$$
\forall x\, P(x).
$$

:::solution
The negation of a universal statement is existential:

$$
\neg \forall x\, P(x) \equiv \exists x\, \neg P(x).
$$

In words: there exists at least one $x$ for which $P(x)$ is false.
:::

<!--
id: logic-18
note: math-logic
title: "Negate an Existential Statement"
exam: exam-i
skills: [Quantifiers, Negating Quantifiers]
-->

Negate the statement

$$
\exists x\, (P(x) \land Q(x)).
$$

:::solution
The negation of an existential statement is universal:

$$
\neg \exists x\, (P(x) \land Q(x)) \equiv \forall x\, \neg(P(x) \land Q(x)).
$$

Now apply De Morgan's law inside the predicate:

$$
\forall x\, (\neg P(x) \lor \neg Q(x)).
$$
:::

<!--
id: logic-19
note: math-logic
title: "Compare Quantifier Order"
exam: exam-i
skills: [Quantifiers, Order Matters]
-->

Are the statements

$$
\forall x\, \exists y\, P(x,y)
$$

and

$$
\exists y\, \forall x\, P(x,y)
$$

logically equivalent?

:::solution
No. The order of quantifiers matters.

The first statement says that for every $x$, you may choose a possibly different $y$.

The second statement says there is one single $y$ that works for every $x$.

These are different claims, so they are not logically equivalent.
:::

<!--
id: logic-110
note: math-logic
title: "Tautology or Contradiction"
exam: exam-i
skills: [Tautology, Contradiction]
-->

Classify each formula:

1. $P \lor \neg P$
2. $P \land \neg P$

:::solution
1. $P \lor \neg P$ is a tautology because it is true for every truth value of $P$.
2. $P \land \neg P$ is a contradiction because it is never true.
:::

<!--
id: logic-21
note: math-logic
title: "Simplify an Expression with an Implication"
exam: exam-ii
skills: [Implication, De Morgan's Laws, Logical Equivalence]
-->

Simplify the formula

$$
\neg(P \land Q) \land P.
$$

:::solution
First apply De Morgan's law:

$$
\neg(P \land Q) \equiv \neg P \lor \neg Q.
$$

So the formula becomes

$$
(\neg P \lor \neg Q) \land P.
$$

Distribute $P$ across the disjunction:

$$
(\neg P \land P) \lor (\neg Q \land P).
$$

Since $\neg P \land P \equiv F$, this simplifies to

$$
P \land \neg Q.
$$
:::

<!--
id: logic-22
note: math-logic
title: "Negate a Universal Conditional"
exam: exam-ii
skills: [Quantifiers, Implication, Negating Quantifiers]
-->

Negate the statement

$$
\forall x\, (P(x) \to Q(x)).
$$

:::solution
First flip the universal quantifier:

$$
\neg \forall x\, (P(x) \to Q(x)) \equiv \exists x\, \neg(P(x) \to Q(x)).
$$

Then use the implication equivalence:

$$
P(x) \to Q(x) \equiv \neg P(x) \lor Q(x).
$$

So

$$
\neg(P(x) \to Q(x)) \equiv P(x) \land \neg Q(x).
$$

Therefore the negation is

$$
\exists x\, (P(x) \land \neg Q(x)).
$$
:::

<!--
id: logic-23
note: math-logic
title: "Chain Two Implications"
exam: exam-ii
skills: [Rules of Inference, Hypothetical Syllogism]
-->

From the premises

$$
P \to Q,\qquad Q \to R,\qquad P,
$$

what conclusion follows?

:::solution
Use hypothetical syllogism on the first two premises:

$$
P \to Q,\ Q \to R \implies P \to R.
$$

Then apply modus ponens with $P$:

$$
P \to R,\ P \implies R.
$$

So the conclusion is

$$
R.
$$
:::

<!--
id: logic-24
note: math-logic
title: "Use Disjunctive Syllogism"
exam: exam-ii
skills: [Rules of Inference, Disjunctive Syllogism]
-->

From the premises

$$
P \lor Q,\qquad \neg P,\qquad Q \to R,
$$

what conclusion follows?

:::solution
First use disjunctive syllogism:

$$
P \lor Q,\ \neg P \implies Q.
$$

Then apply modus ponens to $Q \to R$ and $Q$:

$$
Q \to R,\ Q \implies R.
$$

So the conclusion is

$$
R.
$$
:::

<!--
id: logic-25
note: math-logic
title: "Prove by Cases"
exam: exam-ii
skills: [Proof Methods, Proof by Cases]
-->

Show that $R$ follows from the premises

$$
P \lor Q,\qquad P \to R,\qquad Q \to R.
$$

:::solution
Use proof by cases on $P \lor Q$.

If $P$ is true, then $P \to R$ gives $R$.

If $Q$ is true, then $Q \to R$ gives $R$.

Since one of the two cases must hold, $R$ follows in either case. Therefore,

$$
R
$$
is a valid conclusion.
:::

<!--
id: logic-26
note: math-logic
title: "Put a Formula into CNF"
exam: exam-ii
skills: [Normal Forms, Distributive Laws]
-->

Convert

$$
P \lor (Q \land R)
$$

to an equivalent formula in conjunctive normal form.

:::solution
Use the distributive law:

$$
P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R).
$$

This is in conjunctive normal form because it is an AND of OR-clauses.
:::

<!--
id: logic-27
note: math-logic
title: "Prove a Simple Subset Relation"
exam: exam-ii
skills: [Logic and Sets, Subset Proof]
-->

Prove that

$$
A \cap B \subseteq A.
$$

:::solution
Let $x$ be arbitrary and assume $x \in A \cap B$.

By the definition of intersection, this means $x \in A$ and $x \in B$.

In particular, $x \in A$.

Since every element of $A \cap B$ is in $A$, we conclude

$$
A \cap B \subseteq A.
$$
:::

<!--
id: logic-28
note: math-logic
title: "Apply Resolution"
exam: exam-ii
skills: [Rules of Inference, Resolution]
-->

From the premises

$$
P \lor Q,\qquad \neg P \lor R,\qquad \neg R,
$$

what conclusion follows?

:::solution
Apply resolution to the first two premises:

$$
(P \lor Q),\ (\neg P \lor R) \implies Q \lor R.
$$

Now use disjunctive syllogism with $\neg R$:

$$
Q \lor R,\ \neg R \implies Q.
$$

So the conclusion is

$$
Q.
$$
:::

<!--
id: logic-31
note: math-logic
title: "Find a Counterexample"
exam: final
skills: [Counterexample, Proof Methods]
-->

Disprove the claim that every integer is even.

:::solution
It is enough to give one counterexample.

Take the integer $1$. It is not even, so the claim "every integer is even" is false.

Thus a single counterexample disproof is sufficient.
:::

<!--
id: logic-32
note: math-logic
title: "Spot a Common Invalid Argument"
exam: final
skills: [Pitfalls, Rules of Inference]
-->

Consider the argument:

If a shape is a square, then it is a rectangle. This shape is a rectangle. Therefore, it is a square.

Is the argument valid?

:::solution
No. This is the fallacy of affirming the consequent.

The premise $P \to Q$ does not allow you to conclude $P$ from $Q$.

In this example, many shapes are rectangles without being squares, so the conclusion does not follow.
:::

<!--
id: logic-33
note: math-logic
title: "Translate Necessary and Sufficient"
exam: final
skills: [Implication, Common Pitfalls]
-->

Let $L$ mean "the person is licensed" and $D$ mean "the person is driving."

Translate these statements into symbols:

1. Being licensed is necessary for driving.
2. Being licensed is sufficient for driving.

:::solution
If being licensed is necessary for driving, then driving cannot happen without being licensed:

$$
D \to L.
$$

If being licensed is sufficient for driving, then licensed implies driving:

$$
L \to D.
$$
:::

<!--
id: logic-34
note: math-logic
title: "Find a Satisfying Assignment"
exam: final
skills: [Satisfiability, Truth Tables]
-->

Find truth values for $P$ and $Q$ that make

$$
(P \lor Q) \land \neg P
$$

true.

:::solution
Since $\neg P$ must be true, choose

$$
P = F.
$$

Then $P \lor Q$ becomes true only if $Q$ is true, so choose

$$
Q = T.
$$

One satisfying assignment is $P = F$ and $Q = T$.
:::

<!--
id: logic-35
note: math-logic
title: "Classify a Formula"
exam: final
skills: [Tautology, Contradiction, Contingency]
-->

Is

$$
(P \to Q) \land P \land \neg Q
$$

a tautology, a contradiction, or a contingency?

:::solution
The formula requires both $P \to Q$ and $P$ to be true, which forces $Q$ to be true by modus ponens.

But the formula also requires $\neg Q$.

So the formula cannot be true under any assignment. It is a contradiction.
:::

<!--
id: logic-41
note: math-logic
title: "Simplify a Nested Formula"
exam: final
skills: [Logical Equivalence, De Morgan's Laws, Implication]
-->

Simplify

$$
\neg\bigl((P \to Q) \land (Q \to R)\bigr)
$$

into an equivalent formula using only $\neg$, $\land$, and $\lor$.

:::solution
First replace each implication:

$$
(P \to Q) \land (Q \to R) \equiv (\neg P \lor Q) \land (\neg Q \lor R).
$$

Now negate the conjunction:

$$
\neg\bigl((\neg P \lor Q) \land (\neg Q \lor R)\bigr)
$$

Use De Morgan's law:

$$
\equiv \neg(\neg P \lor Q) \lor \neg(\neg Q \lor R).
$$

Negate each disjunction:

$$
\equiv (P \land \neg Q) \lor (Q \land \neg R).
$$

This is an equivalent formula using only $\neg$, $\land$, and $\lor$.
:::

<!--
id: logic-42
note: math-logic
title: "Compare Nested Quantifiers on a Finite Domain"
exam: final
skills: [Quantifiers, Order Matters, Domain of Discourse]
-->

Let the domain be $\{1,2\}$, and let $P(x,y)$ mean $x=y$.

Determine the truth values of

$$
\forall x\, \exists y\, P(x,y)
$$

and

$$
\exists y\, \forall x\, P(x,y).
$$

:::solution
For $\forall x\, \exists y\, P(x,y)$, every $x$ can choose itself as $y$. So this statement is true.

For $\exists y\, \forall x\, P(x,y)$, we would need one single $y$ that equals both $1$ and $2$. That is impossible, so this statement is false.

Thus the first statement is true and the second is false.
:::

<!--
id: logic-43
note: math-logic
title: "Prove a Set Identity"
exam: final
skills: [Logic and Sets, De Morgan's Laws]
-->

Prove that

$$
(A \cap B)^c = A^c \cup B^c.
$$

:::solution
Let $x$ be arbitrary. Then

$$
x \in (A \cap B)^c
$$

means

$$
x \notin A \cap B.
$$

That is equivalent to saying $x$ is not in both $A$ and $B$, so

$$
x \notin A \quad \text{or} \quad x \notin B.
$$

This is the same as

$$
x \in A^c \quad \text{or} \quad x \in B^c,
$$

which means

$$
x \in A^c \cup B^c.
$$

Since the two sides contain exactly the same elements, the sets are equal.
:::

<!--
id: logic-44
note: math-logic
title: "Check a Mixed Consistency Claim"
exam: final
skills: [Satisfiability, Quantifiers, Rules of Inference]
-->

Is the set of statements

$$
\{\forall x(P(x) \to Q(x)),\ \exists x\, P(x),\ \forall x\, \neg Q(x)\}
$$

consistent?

:::solution
No, the set is inconsistent.

From $\exists x\, P(x)$, choose a witness $c$ such that $P(c)$ is true.

From $\forall x(P(x) \to Q(x))$, we get $P(c) \to Q(c)$, so $Q(c)$ is true.

But $\forall x\, \neg Q(x)$ gives $\neg Q(c)$.

So we obtain both $Q(c)$ and $\neg Q(c)$, which is impossible. Therefore the set is not consistent.
:::
