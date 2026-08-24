# Discrete Mathematics

Discrete mathematics studies finite or countable structures such as propositions, sets, integers, graphs, and algorithms. It is the language of proofs and the mathematical foundation of computer science.

> **Before you begin:** Use [Logic](/study/math/logic/) before this course. Discrete Math introduces the proof techniques used throughout the subject; for a focused, deeper treatment of constructing and presenting proofs, continue to [Proof Writing](/study/math/proof-writing/) afterward.

# Logic and propositions

A **proposition** is a statement that is either true or false.

Examples:

- "7 is prime" is a proposition.
- "$x > 3$" is not a proposition until $x$ is specified.

## Logical operators

| Operator | Meaning       | Symbol                  |
| -------- | ------------- | ----------------------- |
| Negation | not $p$       | $\neg p$                |
| And      | $p$ and $q$   | $p \land q$             |
| Or       | $p$ or $q$    | $p \lor q$              |
| Imply    | if $p$, then $q$ | $p \to q$            |
| Biconditional | $p$ iff $q$ | $p \leftrightarrow q$ |

The implication $p \to q$ is false only when $p$ is true and $q$ is false.

## Common equivalences

These are used constantly in simplification and proof:

$$
\neg (p \land q) \equiv \neg p \lor \neg q
$$

$$
\neg (p \lor q) \equiv \neg p \land \neg q
$$

$$
p \to q \equiv \neg p \lor q
$$

$$
p \leftrightarrow q \equiv (p \to q) \land (q \to p)
$$

$$
\neg (p \to q) \equiv p \land \neg q
$$

## Quantifiers

Quantifiers turn predicates into statements.

- Universal: $\forall x\, P(x)$ means "for all $x$, $P(x)$ holds"
- Existential: $\exists x\, P(x)$ means "there exists an $x$ such that $P(x)$ holds"

Negating quantified statements:

$$
\neg (\forall x\, P(x)) \equiv \exists x\, \neg P(x)
$$

$$
\neg (\exists x\, P(x)) \equiv \forall x\, \neg P(x)
$$

## Converse, inverse, contrapositive

Given $p \to q$:

- Converse: $q \to p$
- Inverse: $\neg p \to \neg q$
- Contrapositive: $\neg q \to \neg p$

Only the contrapositive is logically equivalent to the original implication.

## Example

Statement:

$$
\forall n \in \mathbb{Z},\ n \text{ even } \to n^2 \text{ even}
$$

This is true. A clean proof is:

If $n$ is even, then $n = 2k$ for some integer $k$. Then

$$
n^2 = (2k)^2 = 4k^2 = 2(2k^2)
$$

so $n^2$ is even.

---

# Sets, functions, and relations

## Sets

A **set** is an unordered collection of distinct objects.

Common notation:

$$
a \in A,\quad a \notin A,\quad A \subseteq B
$$

Basic operations:

$$
A \cup B,\quad A \cap B,\quad A \setminus B,\quad A^c
$$

Useful identities:

$$
A \cup \varnothing = A,\quad A \cap U = A
$$

$$
A \cup A = A,\quad A \cap A = A
$$

$$
A \cup B = B \cup A,\quad A \cap B = B \cap A
$$

$$
(A \cup B)^c = A^c \cap B^c
$$

$$
(A \cap B)^c = A^c \cup B^c
$$

## Power sets

The **power set** $\mathcal{P}(A)$ is the set of all subsets of $A$.

If $|A| = n$, then:

$$
|\mathcal{P}(A)| = 2^n
$$

## Cartesian products

The Cartesian product is:

$$
A \times B = \{(a,b) : a \in A,\ b \in B\}
$$

If $|A| = m$ and $|B| = n$, then:

$$
|A \times B| = mn
$$

## Functions

A **function** $f: A \to B$ assigns each element of $A$ exactly one element of $B$.

Important properties:

- Injective: different inputs give different outputs
- Surjective: every element of the codomain is hit
- Bijective: both injective and surjective

If $f$ is bijective, then it has an inverse $f^{-1}$.

## Relations

A **relation** on a set $A$ is a subset of $A \times A$.

Important properties:

- Reflexive: $(a,a) \in R$ for all $a$
- Symmetric: if $(a,b) \in R$, then $(b,a) \in R$
- Antisymmetric: if $(a,b)$ and $(b,a)$ are both in $R$, then $a=b$
- Transitive: if $(a,b)$ and $(b,c)$ are in $R$, then $(a,c)$ is in $R$

## Equivalence relations and partitions

An **equivalence relation** is reflexive, symmetric, and transitive.

It breaks a set into **equivalence classes**.

Example: congruence modulo $n$

$$
a \equiv b \pmod n \iff n \mid (a-b)
$$

## Partial orders

A **partial order** is reflexive, antisymmetric, and transitive.

Examples:

- $\subseteq$ on sets
- $\le$ on integers
- Divisibility on positive integers

Partially ordered sets are often visualized with **Hasse diagrams**.

---

# Proof techniques

Discrete math is proof-heavy. Knowing the structure of a proof matters as much as knowing the definitions.

This is a first introduction to proof methods in context. After completing Discrete Math, use [Proof Writing](/study/math/proof-writing/) for dedicated practice with proof structure, strategy, and presentation.

## Direct proof

Use definitions and algebraic manipulation to move from assumptions to conclusion.

Typical pattern:

1. Assume the hypothesis.
2. Expand the relevant definitions.
3. Derive the target statement.

## Proof by contrapositive

To prove $p \to q$, prove the equivalent statement:

$$
\neg q \to \neg p
$$

This is often easier when the conclusion is negative or divisibility-based.

## Proof by contradiction

Assume the statement is false and derive an impossibility.

Typical pattern:

1. Assume the claim fails.
2. Combine that assumption with known facts.
3. Reach a contradiction such as $0=1$ or "an integer is both even and odd".

## Proof by cases

Split the domain into exhaustive cases and prove the claim in each one.

Example: for integers, common cases are even/odd or positive/zero/negative.

## Existence and uniqueness

For "there exists a unique $x$ such that $P(x)$":

1. Prove existence: show some $x$ satisfies $P(x)$.
2. Prove uniqueness: if $x$ and $y$ both satisfy $P$, then $x=y$.

## Common proof pitfall

Do not verify a general statement with a few examples. Examples can suggest a pattern, but they do not prove it.

---

# Induction and recursion

## Mathematical induction

Induction proves statements indexed by the positive integers.

To prove $P(n)$ for all $n \ge n_0$:

1. Base case: prove $P(n_0)$.
2. Inductive step: assume $P(k)$ is true for an arbitrary $k \ge n_0$.
3. Use that assumption to prove $P(k+1)$.

This assumption is the **inductive hypothesis**.

## Example

Prove:

$$
1 + 2 + \cdots + n = \frac{n(n+1)}{2}
$$

Base case $n=1$:

$$
1 = \frac{1 \cdot 2}{2}
$$

Inductive step: assume true for $n=k$. Then

$$
1 + 2 + \cdots + k + (k+1)
=
\frac{k(k+1)}{2} + (k+1)
=
\frac{(k+1)(k+2)}{2}
$$

so it holds for $k+1$.

## Strong induction

In **strong induction**, assume all earlier cases:

$$
P(n_0), P(n_0+1), \dots, P(k)
$$

and use them to prove $P(k+1)$.

This is useful when each case depends on several previous ones.

## Recursive definitions

Many discrete objects are defined recursively.

Example: Fibonacci numbers

$$
F_0 = 0,\quad F_1 = 1,\quad F_n = F_{n-1} + F_{n-2}\ \text{for } n \ge 2
$$

To work with recursive definitions:

1. Identify base cases.
2. Identify the recurrence rule.
3. Check whether the rule determines each later value uniquely.
---

# Counting and combinatorics

Counting arguments appear everywhere in probability, algorithms, graph theory, and proof.

## Sum and product rules

- Sum rule: if tasks are mutually exclusive and can be done in $a$ or $b$ ways, total ways = $a+b$
- Product rule: if a process has stages with $a$ then $b$ choices, total ways = $ab$

## Factorials and permutations

$$
n! = n(n-1)(n-2)\cdots 2 \cdot 1
$$

The number of ordered arrangements of $r$ objects chosen from $n$ is:

$$
P(n,r) = \frac{n!}{(n-r)!}
$$

## Combinations

The number of unordered selections of $r$ objects from $n$ is:

$$
\binom{n}{r} = \frac{n!}{r!(n-r)!}
$$

Useful identity:

$$
\binom{n}{r} = \binom{n}{n-r}
$$

Pascal identity:

$$
\binom{n}{r} = \binom{n-1}{r} + \binom{n-1}{r-1}
$$

## Binomial theorem

$$
(x+y)^n = \sum_{r=0}^{n} \binom{n}{r} x^{n-r} y^r
$$

## Counting with repetition

If repetition is allowed and there are $n$ choices for each of $k$ positions, the count is:

$$
n^k
$$

The number of multisets of size $r$ chosen from $n$ types is:

$$
\binom{n+r-1}{r}
$$

## Inclusion-exclusion

For two sets:

$$
|A \cup B| = |A| + |B| - |A \cap B|
$$

For three sets:

$$
|A \cup B \cup C|
=
|A| + |B| + |C|
- |A \cap B| - |A \cap C| - |B \cap C|
+ |A \cap B \cap C|
$$

## Pigeonhole principle

If more than $n$ objects are placed into $n$ boxes, at least one box contains at least two objects.

General form:

If $N$ objects are placed into $k$ boxes, some box has at least

$$
\left\lceil \frac{N}{k} \right\rceil
$$

objects.

---

# Discrete probability

Probability in discrete math is usually built on counting.

## Sample spaces and events

- Sample space: $S$
- Event: subset of $S$

If outcomes are equally likely:

$$
P(E) = \frac{|E|}{|S|}
$$

## Basic rules

$$
0 \le P(E) \le 1,\quad P(S)=1,\quad P(E^c)=1-P(E)
$$

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

If $A$ and $B$ are disjoint:

$$
P(A \cup B) = P(A) + P(B)
$$

## Conditional probability

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$

provided $P(B) > 0$.

## Independence

Events $A$ and $B$ are independent if:

$$
P(A \cap B) = P(A)P(B)
$$

Independence is not the same as disjointness.

## Expected value

For a discrete random variable $X$:

$$
\mathbb{E}[X] = \sum_x x\, P(X=x)
$$

Linearity of expectation:

$$
\mathbb{E}[X+Y] = \mathbb{E}[X] + \mathbb{E}[Y]
$$

This holds whether or not $X$ and $Y$ are independent.

## Variance

$$
\mathrm{Var}(X) = \mathbb{E}[(X-\mu)^2]
$$

where $\mu = \mathbb{E}[X]$.

Equivalent formula:

$$
\mathrm{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2
$$

---

# Number theory and modular arithmetic

## Divisibility

For integers $a$ and $b$ with $a \ne 0$, we say $a$ divides $b$, written

$$
a \mid b
$$

if there exists an integer $k$ such that $b = ak$.

Useful facts:

- If $a \mid b$ and $a \mid c$, then $a \mid (b+c)$
- If $a \mid b$, then $a \mid bc$ for any integer $c$

## Prime numbers

A prime number is an integer greater than $1$ with exactly two positive divisors: $1$ and itself.

Fundamental theorem of arithmetic:

Every integer $n > 1$ can be written uniquely, up to order, as a product of primes.

## Greatest common divisor

The greatest common divisor of $a$ and $b$ is written:

$$
\gcd(a,b)
$$

Euclidean algorithm:

$$
\gcd(a,b) = \gcd(b, a \bmod b)
$$

repeated until the remainder is $0$.

## Modular arithmetic

Congruence modulo $n$ means:

$$
a \equiv b \pmod n \iff n \mid (a-b)
$$

You can add, subtract, and multiply congruences:

$$
a \equiv b \pmod n,\ c \equiv d \pmod n
\Rightarrow
a+c \equiv b+d \pmod n
$$

$$
ac \equiv bd \pmod n
$$

Division is not automatically valid modulo $n$.

## Modular inverses

An integer $a$ has a multiplicative inverse modulo $n$ iff:

$$
\gcd(a,n)=1
$$

Then there exists $a^{-1}$ such that:

$$
aa^{-1} \equiv 1 \pmod n
$$

## Example

To solve

$$
3x \equiv 1 \pmod 7
$$

note that $3^{-1} \equiv 5 \pmod 7$ because $3 \cdot 5 = 15 \equiv 1 \pmod 7$. Therefore

$$
x \equiv 5 \pmod 7
$$

---

# Graphs and trees

A **graph** consists of vertices and edges.

Notation:

$$
G = (V,E)
$$

## Basic terminology

- Degree of a vertex: number of incident edges
- Path: sequence of adjacent vertices
- Cycle: closed path with no repeated edges
- Connected graph: every pair of vertices is joined by a path

## Handshaking lemma

For any finite undirected graph:

$$
\sum_{v \in V} \deg(v) = 2|E|
$$

This implies the number of odd-degree vertices is even.

## Special graph classes

- Complete graph: $K_n$
- Bipartite graph: vertices split into two parts and edges go only across
- Complete bipartite graph: $K_{m,n}$

For an undirected graph, the graph is bipartite if and only if it has no odd cycle. (The qualification matters: this statement is not the definition for directed graphs.)

## Trees

A **tree** is a connected graph with no cycles.

Equivalent characterizations of a tree with $n$ vertices:

- It is connected and has $n-1$ edges
- It is acyclic and has $n-1$ edges
- There is a unique simple path between any two vertices

## Rooted trees

In a rooted tree:

- One vertex is the root
- Parent/child relations are defined
- Depth measures distance from the root

Rooted trees are used heavily in recursion, parsing, and search algorithms.

## Traversals

Common traversal orders:

- Preorder
- Inorder
- Postorder
- Breadth-first search

---

# Algorithms, growth, and recurrences

Discrete math often studies whether a procedure is correct and how quickly it grows.

## Asymptotic notation

For functions $f$ and $g$:

$$
f(n) = O(g(n))
$$

means $f$ grows no faster than a constant multiple of $g$ for sufficiently large $n$.

$$
f(n) = \Omega(g(n))
$$

means $f$ grows at least as fast as a constant multiple of $g$.

$$
f(n) = \Theta(g(n))
$$

means both are true.

## Growth hierarchy

From slower to faster, a common order is:

$$
1,\ \log n,\ n,\ n \log n,\ n^2,\ n^3,\ 2^n,\ n!
$$

## Recurrence relations

A recurrence defines a sequence from earlier terms.

Examples:

$$
a_n = a_{n-1} + 3
$$

$$
a_n = 2a_{n-1}
$$

$$
a_n = a_{n-1} + a_{n-2}
$$

## Solving simple recurrences

Arithmetic-type recurrence:

$$
a_n = a_{n-1} + d,\quad a_0 = c
$$

has solution:

$$
a_n = c + nd
$$

Geometric-type recurrence:

$$
a_n = r a_{n-1},\quad a_0 = c
$$

has solution:

$$
a_n = cr^n
$$

## Algorithm correctness

To show an algorithm is correct, prove:

1. It terminates.
2. If it terminates, the output satisfies the specification.

Loop invariants are a standard proof tool:

- State a property true before the loop starts.
- Show one iteration preserves it.
- Use it at termination to prove correctness.

---

# Problem-solving workflow

Use this checklist for most discrete mathematics problems.

## Step 1: Identify the object type

Ask what kind of structure you are working with:

- Proposition
- Set
- Function
- Relation
- Integer
- Graph
- Sequence
- Counting problem

The definitions depend on the object type.

## Step 2: Translate the statement into formal language

Rewrite informal language using symbols when possible:

- Quantifiers
- Set notation
- Divisibility notation
- Graph terminology

This usually exposes the proof strategy.

## Step 3: Choose the right tool

Typical matches:

- Implication: direct proof or contrapositive
- Nonexistence: contradiction
- Integer-indexed claim: induction
- Finite arrangements: sum/product rule, permutations, combinations
- Congruence problem: modular arithmetic
- Structure with vertices and edges: graph methods

## Step 4: Write from definitions

Most proofs become manageable once the key definition is expanded.

Examples:

- Even means $n=2k$
- Divisible means $b=ak$
- Injective means $f(x)=f(y) \Rightarrow x=y$
- Tree means connected and acyclic

## Step 5: Check edge cases

Small values, empty sets, parity changes, and boundary cases often break careless arguments.

## Step 6: Validate the conclusion type

Make sure the proof ends with the right type of claim:

- Equality proved algebraically
- Existence proved by construction
- Uniqueness proved by comparison
- Counting answer justified by combinatorial model

---

# Formula sheet

## Logic

$$
p \to q \equiv \neg p \lor q
$$

$$
\neg (p \land q) \equiv \neg p \lor \neg q
$$

$$
\neg (p \lor q) \equiv \neg p \land \neg q
$$

## Sets

$$
|A \cup B| = |A| + |B| - |A \cap B|
$$

$$
|\mathcal{P}(A)| = 2^{|A|}
$$

$$
|A \times B| = |A||B|
$$

## Counting

$$
n!
$$

$$
P(n,r) = \frac{n!}{(n-r)!}
$$

$$
\binom{n}{r} = \frac{n!}{r!(n-r)!}
$$

$$
(x+y)^n = \sum_{r=0}^{n} \binom{n}{r} x^{n-r} y^r
$$

$$
\binom{n+r-1}{r}
$$

## Probability

$$
P(E) = \frac{|E|}{|S|}
$$

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$

$$
\mathbb{E}[X] = \sum_x x\, P(X=x)
$$

$$
\mathrm{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2
$$

## Number theory

$$
a \equiv b \pmod n \iff n \mid (a-b)
$$

$$
\gcd(a,b) = \gcd(b, a \bmod b)
$$

## Graphs

$$
\sum_{v \in V} \deg(v) = 2|E|
$$

For a tree with $n$ vertices:

$$
|E| = n-1
$$

## Growth

$$
1,\ \log n,\ n,\ n \log n,\ n^2,\ n^3,\ 2^n,\ n!
$$

---

# Common mistakes to avoid

- Confusing the converse of a statement with its contrapositive.
- Negating quantified statements incorrectly.
- Treating examples as proof.
- Using permutations when order does not matter.
- Using combinations when order does matter.
- Cancelling terms in modular arithmetic without checking inverses exist.
- Assuming disjoint events are independent.
- Forgetting that a relation and a function are different objects.
- Claiming a graph is a tree without checking both connectedness and acyclicity.
- Using asymptotic notation as if it were an exact equality.

# Sources

- [OpenStax Mathematics](https://openstax.org/subjects/math)
- [Mathematics LibreTexts](https://math.libretexts.org/)
- Stewart, *Calculus: Early Transcendentals*
- Lay, *Linear Algebra and Its Applications*
- Rosen, *Discrete Mathematics and Its Applications*
- Boyce and DiPrima, *Elementary Differential Equations and Boundary Value Problems*
- Blitzstein and Hwang, *Introduction to Probability*
- [Parell GitHub repository](https://github.com/Parell/parell.github.io)
