<!--
id: discrete-math-11
note: math-discrete-math
title: "Negate a Universal Implication"
exam: exam-i
skills: [Quantifiers, Implication]
-->

Write the negation of the statement:

$$
\forall n \in \mathbb{Z},\ n \text{ prime } \to n \text{ odd}
$$

:::solution
The negation of $\forall n\, P(n)$ is $\exists n\, \neg P(n)$.

Here $P(n)$ is the implication "if $n$ is prime, then $n$ is odd." The negation of an implication is:

$$
p \to q \equiv \neg p \lor q
$$

so its negation is:

$$
p \land \neg q
$$

Therefore the negation is:

$$
\exists n \in \mathbb{Z},\ n \text{ is prime and } n \text{ is not odd}
$$

Equivalently, there exists an integer $n$ that is prime and even.
:::

<!--
id: discrete-math-12
note: math-discrete-math
title: "Write the Contrapositive"
exam: exam-i
skills: [Implication, Contrapositive]
-->

Write the contrapositive of the statement:

$$
\text{If } n \text{ is divisible by } 4,\text{ then } n \text{ is even.}
$$

:::solution
For a statement $p \to q$, the contrapositive is $\neg q \to \neg p$.

Here:

- $p$: $n$ is divisible by $4$
- $q$: $n$ is even

So the contrapositive is:

$$
\text{If } n \text{ is not even, then } n \text{ is not divisible by } 4.
$$

Since integers are either even or odd, this can also be written as:

$$
\text{If } n \text{ is odd, then } n \text{ is not divisible by } 4.
$$
:::

<!--
id: discrete-math-13
note: math-discrete-math
title: "Use De Morgan's Law"
exam: exam-i
skills: [Negation, De Morgan's Laws]
-->

Simplify the negation:

$$
\neg (p \lor q)
$$

:::solution
By De Morgan's law,

$$
\neg (p \lor q) \equiv \neg p \land \neg q
$$

So the simplified form is:

$$
\neg p \land \neg q
$$
:::

<!--
id: discrete-math-14
note: math-discrete-math
title: "Compute a Set Union and Intersection"
exam: exam-i
skills: [Sets, Union and Intersection]
-->

Let

$$
A = \{1,2,3,5\}
\quad \text{and} \quad
B = \{3,4,5,6\}.
$$

Find $A \cap B$ and $A \cup B$.

:::solution
The elements common to both sets are $3$ and $5$, so:

$$
A \cap B = \{3,5\}
$$

The union contains every element that appears in either set:

$$
A \cup B = \{1,2,3,4,5,6\}
$$
:::

<!--
id: discrete-math-15
note: math-discrete-math
title: "Count the Subsets of a Set"
exam: exam-i
skills: [Power Sets, Counting]
-->

If a set $A$ has $4$ elements, how many subsets does $A$ have?

:::solution
A set with $n$ elements has $2^n$ subsets.

Here $n=4$, so the number of subsets is

$$
2^4 = 16
$$
:::

<!--
id: discrete-math-16
note: math-discrete-math
title: "Classify a Function"
exam: exam-i
skills: [Functions, Injective and Surjective]
-->

Let $f : \{1,2,3\} \to \{a,b\}$ be defined by

$$
f(1)=a,\quad f(2)=b,\quad f(3)=a.
$$

Is $f$ injective, surjective, both, or neither?

:::solution
The function is **not injective** because different inputs can give the same output:

$$
f(1)=a \quad \text{and} \quad f(3)=a
$$

The function is **surjective** because both elements of the codomain are hit:

$$
a \text{ is hit by } 1 \text{ and } 3,\quad b \text{ is hit by } 2
$$

So $f$ is surjective but not injective.
:::

<!--
id: discrete-math-17
note: math-discrete-math
title: "Find the Size of a Cartesian Product"
exam: exam-i
skills: [Cartesian Products, Counting]
-->

If $|A| = 3$ and $|B| = 7$, how many ordered pairs are in $A \times B$?

:::solution
For finite sets,

$$
|A \times B| = |A||B|
$$

So

$$
|A \times B| = 3 \cdot 7 = 21
$$
:::

<!--
id: discrete-math-18
note: math-discrete-math
title: "Check a Partial Order"
exam: exam-i
skills: [Relations, Partial Orders]
-->

Let

$$
R = \{(1,1),(2,2),(3,3),(1,2),(1,3),(2,3)\}
$$

be a relation on $\{1,2,3\}$. Is $R$ a partial order?

:::solution
Check the three conditions:

- Reflexive: $(1,1)$, $(2,2)$, and $(3,3)$ are all in $R$.
- Antisymmetric: there is no pair $(a,b)$ and $(b,a)$ with $a \neq b$.
- Transitive: $(1,2)$ and $(2,3)$ imply $(1,3)$, and the other required transitive cases are also present.

So $R$ is a partial order.
:::

<!--
id: discrete-math-19
note: math-discrete-math
title: "Solve a Congruence Modulo 5"
exam: exam-i
skills: [Modular Arithmetic, Inverses]
-->

Solve for $x$:

$$
2x \equiv 1 \pmod 5
$$

:::solution
We need the multiplicative inverse of $2$ modulo $5$.

Since

$$
2 \cdot 3 = 6 \equiv 1 \pmod 5,
$$

the inverse of $2$ mod $5$ is $3$. Multiply both sides by $3$:

$$
x \equiv 3 \pmod 5
$$
:::

<!--
id: discrete-math-110
note: math-discrete-math
title: "Count the Edges in a Tree"
exam: exam-i
skills: [Trees, Graphs]
-->

A tree has $14$ vertices. How many edges does it have?

:::solution
For a tree with $n$ vertices, the number of edges is

$$
n - 1
$$

So with $n=14$,

$$
|E| = 14 - 1 = 13
$$
:::

<!--
id: discrete-math-21
note: math-discrete-math
title: "Negate a Quantified Statement"
exam: exam-ii
skills: [Quantifiers, Implication]
-->

Write the negation of:

$$
\forall n \in \mathbb{Z},\ n \text{ even } \to n^2 \text{ even}
$$

:::solution
The negation of $\forall n\, P(n)$ is $\exists n\, \neg P(n)$.

The negation of $p \to q$ is $p \land \neg q$.

So the negation is:

$$
\exists n \in \mathbb{Z},\ n \text{ is even and } n^2 \text{ is not even}
$$
:::

<!--
id: discrete-math-22
note: math-discrete-math
title: "Use Congruence Modulo 4"
exam: exam-ii
skills: [Equivalence Relations, Modular Arithmetic]
-->

Consider the relation on integers defined by

$$
a \sim b \iff a \equiv b \pmod 4.
$$

Explain why this is an equivalence relation, and describe the equivalence class of $7$.

:::solution
Congruence modulo $4$ is:

- Reflexive, because $a \equiv a \pmod 4$
- Symmetric, because if $a \equiv b \pmod 4$, then $b \equiv a \pmod 4$
- Transitive, because if $a \equiv b \pmod 4$ and $b \equiv c \pmod 4$, then $a \equiv c \pmod 4$

So it is an equivalence relation.

The class of $7$ is all integers congruent to $7$ mod $4$, which is the same as all integers congruent to $3$ mod $4$:

$$
[7] = \{\dots,-5,-1,3,7,11,15,\dots\}
$$
:::

<!--
id: discrete-math-23
note: math-discrete-math
title: "Prove a Divisibility Claim by Contrapositive"
exam: exam-ii
skills: [Contrapositive, Divisibility]
-->

Prove that if $n^2$ is even, then $n$ is even.

:::solution
Use the contrapositive: prove that if $n$ is odd, then $n^2$ is odd.

If $n$ is odd, then $n = 2k+1$ for some integer $k$. Then

$$
n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1
$$

which is odd.

So the contrapositive is true, and therefore the original statement is true.
:::

<!--
id: discrete-math-24
note: math-discrete-math
title: "Prove a Summation Formula by Induction"
exam: exam-ii
skills: [Induction, Summation]
-->

Use mathematical induction to prove that

$$
1 + 2 + \cdots + n = \frac{n(n+1)}{2}
$$

for all $n \ge 1$.

:::solution
Base case $n=1$:

$$
1 = \frac{1 \cdot 2}{2}
$$

so the formula holds.

Inductive step: assume the formula holds for $n=k$:

$$
1 + 2 + \cdots + k = \frac{k(k+1)}{2}
$$

Then

$$
1 + 2 + \cdots + k + (k+1)
= \frac{k(k+1)}{2} + (k+1)
$$

Factor out $(k+1)$:

$$
= (k+1)\left(\frac{k}{2} + 1\right)
= (k+1)\left(\frac{k+2}{2}\right)
= \frac{(k+1)(k+2)}{2}
$$

This is exactly the formula with $n=k+1$. Therefore the statement holds for all $n \ge 1$.
:::

<!--
id: discrete-math-25
note: math-discrete-math
title: "Count Committees with a Required Member"
exam: exam-ii
skills: [Combinations, Counting]
-->

From a group of $8$ students, how many $3$-person committees can be formed if one specific student must be included?

:::solution
If one student must be included, choose the other $2$ committee members from the remaining $7$ students.

The number of ways is

$$
\binom{7}{2} = 21
$$
:::

<!--
id: discrete-math-26
note: math-discrete-math
title: "Compute a Conditional Probability"
exam: exam-ii
skills: [Conditional Probability, Counting]
-->

In a club of $12$ students, $7$ are in math club and $4$ are in both math club and robotics club.

If a student is known to be in math club, what is the probability that the student is also in robotics club?

:::solution
Use conditional probability:

$$
P(R \mid M) = \frac{P(R \cap M)}{P(M)}
$$

In counting form, this is

$$
\frac{4}{7}
$$

So the probability is $\frac{4}{7}$.
:::

<!--
id: discrete-math-27
note: math-discrete-math
title: "Apply the Euclidean Algorithm"
exam: exam-ii
skills: [Greatest Common Divisor, Euclidean Algorithm]
-->

Find $\gcd(252,198)$.

:::solution
Use the Euclidean algorithm:

$$
252 = 198 + 54
$$

$$
198 = 3\cdot 54 + 36
$$

$$
54 = 1\cdot 36 + 18
$$

$$
36 = 2\cdot 18 + 0
$$

The last nonzero remainder is

$$
18
$$

So

$$
\gcd(252,198) = 18
$$
:::

<!--
id: discrete-math-28
note: math-discrete-math
title: "Compare Two Growth Rates"
exam: exam-ii
skills: [Asymptotic Notation, Growth Rates]
-->

Which grows faster as $n$ becomes large: $n \log n$ or $n^2$?

:::solution
Compare the ratio:

$$
\frac{n^2}{n \log n} = \frac{n}{\log n}
$$

This ratio grows without bound as $n$ increases, so $n^2$ grows faster.

Equivalently,

$$
n \log n = O(n^2)
$$

but $n^2$ is not $O(n \log n)$.
:::

<!--
id: discrete-math-31
note: math-discrete-math
title: "Count Committees with a Restriction"
exam: final
skills: [Combinations, Inclusion-Exclusion]
-->

A school needs a $4$-person committee from $10$ students. Two students are the team captains, and the committee must include at least one captain.

How many committees are possible?

:::solution
Count all committees, then subtract those with no captains.

Total committees:

$$
\binom{10}{4} = 210
$$

Committees with no captains are chosen from the other $8$ students:

$$
\binom{8}{4} = 70
$$

So the number with at least one captain is

$$
210 - 70 = 140
$$
:::

<!--
id: discrete-math-32
note: math-discrete-math
title: "Apply the Pigeonhole Principle"
exam: final
skills: [Pigeonhole Principle, Counting]
-->

What is the smallest number of students needed to guarantee that at least $3$ students were born in the same month?

:::solution
There are $12$ months, so there are $12$ boxes.

To avoid having $3$ students in any one month, you can place at most $2$ students in each month:

$$
12 \cdot 2 = 24
$$

One more student forces some month to contain at least $3$ students.

So the smallest number is

$$
25
$$
:::

<!--
id: discrete-math-33
note: math-discrete-math
title: "Find the Expected Value of a Simple Game"
exam: final
skills: [Expected Value, Probability]
-->

A fair die is rolled. You win \$5 if the result is even and lose \$2 if the result is odd. What is the expected value of the game?

:::solution
The probability of rolling an even number is $\frac{1}{2}$, and the probability of rolling an odd number is $\frac{1}{2}$.

So the expected value is

$$
\mathbb{E}[X] = \frac{1}{2}(5) + \frac{1}{2}(-2)
$$

$$
\mathbb{E}[X] = \frac{3}{2}
$$

So the expected value is \$1.50.
:::

<!--
id: discrete-math-34
note: math-discrete-math
title: "Use Modular Arithmetic on a Calendar"
exam: final
skills: [Modular Arithmetic, Congruence]
-->

Today is Wednesday. What day of the week will it be $100$ days from now?

:::solution
Days of the week repeat every $7$ days, so compute

$$
100 \bmod 7 = 2
$$

So $100$ days from Wednesday is $2$ days later:

Thursday.
:::

<!--
id: discrete-math-35
note: math-discrete-math
title: "Solve a Geometric Recurrence"
exam: final
skills: [Recurrences, Exponential Growth]
-->

A bacteria culture starts with $2$ bacteria and triples each hour.

If $a_n$ is the number of bacteria after $n$ hours, find a formula for $a_n$ and compute $a_4$.

:::solution
The recurrence is

$$
a_0 = 2,\quad a_n = 3a_{n-1}
$$

This is a geometric recurrence, so the explicit formula is

$$
a_n = 2 \cdot 3^n
$$

Now evaluate at $n=4$:

$$
a_4 = 2 \cdot 3^4 = 2 \cdot 81 = 162
$$
:::

<!--
id: discrete-math-41
note: math-discrete-math
title: "Prove Prime Factorization by Strong Induction"
exam: final
skills: [Strong Induction, Prime Factorization]
-->

Prove that every integer $n \ge 2$ can be written as a product of primes.

:::solution
We use strong induction.

Base case: $n=2$. The number $2$ is prime, so it is already a product of primes.

Inductive step: assume every integer from $2$ through $k$ can be written as a product of primes. We prove the claim for $k+1$.

- If $k+1$ is prime, then it is already a product of primes.
- If $k+1$ is composite, then

$$
k+1 = ab
$$

for some integers $a,b$ with

$$
2 \le a \le k,\quad 2 \le b \le k
$$

By the strong inductive hypothesis, both $a$ and $b$ can be written as products of primes. Multiplying those factorizations gives a product of primes for $k+1$.

Therefore every integer $n \ge 2$ can be written as a product of primes.
:::

<!--
id: discrete-math-42
note: math-discrete-math
title: "Count Multiples with Inclusion-Exclusion"
exam: final
skills: [Inclusion-Exclusion, Counting]
-->

How many integers from $1$ to $100$ are divisible by $2$, $3$, or $5$?

:::solution
Use inclusion-exclusion.

Counts of multiples:

$$
\left\lfloor \frac{100}{2} \right\rfloor = 50,\quad
\left\lfloor \frac{100}{3} \right\rfloor = 33,\quad
\left\lfloor \frac{100}{5} \right\rfloor = 20
$$

Subtract overlaps:

$$
\left\lfloor \frac{100}{6} \right\rfloor = 16,\quad
\left\lfloor \frac{100}{10} \right\rfloor = 10,\quad
\left\lfloor \frac{100}{15} \right\rfloor = 6
$$

Add back the triple overlap:

$$
\left\lfloor \frac{100}{30} \right\rfloor = 3
$$

So the total is

$$
50 + 33 + 20 - 16 - 10 - 6 + 3 = 74
$$
:::

<!--
id: discrete-math-43
note: math-discrete-math
title: "Use Degrees to Test a Tree"
exam: final
skills: [Handshaking Lemma, Trees, Graphs]
-->

A connected graph has $6$ vertices with degree sequence

$$
3,3,2,2,1,1.
$$

Use the handshaking lemma to find the number of edges, then decide whether the graph can be a tree.

:::solution
First add the degrees:

$$
3+3+2+2+1+1 = 12
$$

By the handshaking lemma,

$$
2|E| = 12
$$

so

$$
|E| = 6
$$

A tree with $6$ vertices must have

$$
6 - 1 = 5
$$

edges. Since this graph has $6$ edges, it cannot be a tree.
:::

<!--
id: discrete-math-44
note: math-discrete-math
title: "Verify a Loop Invariant"
exam: final
skills: [Loop Invariants, Algorithm Correctness]
-->

Consider the algorithm:

```text
total = 0
for k from 1 to n:
    total = total + k
```

State a loop invariant and use it to explain why the algorithm returns

$$
1 + 2 + \cdots + n.
$$

:::solution
A good loop invariant is:

> After the loop has processed the numbers $1,2,\dots,k$, the variable `total` equals $1+2+\cdots+k$.

Why it works:

- Before the loop starts, `total = 0`, which matches the sum of no terms.
- Each iteration adds the next integer, so if the invariant is true before an iteration, it remains true after that iteration.
- When the loop finishes, $k=n$, so `total` equals

$$
1 + 2 + \cdots + n
$$

Therefore the algorithm is correct.
:::
