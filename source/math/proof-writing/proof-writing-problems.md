<!--
id: proof-writing-11
note: math-proof-writing
title: "Rewrite a Universal Conditional Statement"
exam: exam-i
skills: [Quantifiers, Implication]
-->

Rewrite the statement below using symbols:

> For every integer $n$, if $n$ is even, then $n^2$ is even.

:::solution
This is a universal conditional statement. One symbolic form is

$$
\forall n \in \mathbb{Z},\; (n \text{ is even} \Rightarrow n^2 \text{ is even}).
$$

Using divisibility notation, it can also be written as

$$
\forall n \in \mathbb{Z},\; (2 \mid n \Rightarrow 2 \mid n^2).
$$
:::

<!--
id: proof-writing-12
note: math-proof-writing
title: "Negate a Quantified Statement"
exam: exam-i
skills: [Quantifiers, Negation]
-->

Write the negation of

$$
\forall x \in \mathbb{R}\, \exists y \in \mathbb{R}\,(x < y).
$$

:::solution
Negate the quantifiers in reverse order:

$$
\neg\bigl(\forall x \in \mathbb{R}\, \exists y \in \mathbb{R}\,(x < y)\bigr)
\equiv
\exists x \in \mathbb{R}\, \forall y \in \mathbb{R}\,(x \ge y).
$$

In words, there is a real number that is greater than or equal to every real number.
:::

<!--
id: proof-writing-13
note: math-proof-writing
title: "Split an 'If and Only If'"
exam: exam-i
skills: [Logical Form, Equivalence]
-->

What two implications must be proved to establish $P \Leftrightarrow Q$?

:::solution
You must prove both directions:

$$
P \Rightarrow Q
\quad \text{and} \quad
Q \Rightarrow P.
$$

Proving both directions is exactly what makes the statement an equivalence.
:::

<!--
id: proof-writing-14
note: math-proof-writing
title: "Add Two Even Integers"
exam: exam-i
skills: [Direct Proof, Even/Odd]
-->

Prove that if $m$ and $n$ are even integers, then $m+n$ is even.

:::solution
Since $m$ and $n$ are even, write

$$
m = 2a \quad \text{and} \quad n = 2b
$$

for some integers $a$ and $b$. Then

$$
m+n = 2a + 2b = 2(a+b).
$$

Because $a+b$ is an integer, $m+n$ is even.
:::

<!--
id: proof-writing-15
note: math-proof-writing
title: "Multiply Two Odd Integers"
exam: exam-i
skills: [Direct Proof, Even/Odd]
-->

Prove that if $m$ and $n$ are odd integers, then $mn$ is odd.

:::solution
Since $m$ and $n$ are odd, write

$$
m = 2a+1 \quad \text{and} \quad n = 2b+1
$$

for some integers $a$ and $b$. Then

$$
mn = (2a+1)(2b+1) = 4ab + 2a + 2b + 1.
$$

Factor out a 2 from the even part:

$$
mn = 2(2ab+a+b)+1.
$$

This has the form $2k+1$, so $mn$ is odd.
:::

<!--
id: proof-writing-16
note: math-proof-writing
title: "Add Divisible Numbers"
exam: exam-i
skills: [Direct Proof, Divisibility]
-->

Prove that if $a \mid b$ and $a \mid c$, then $a \mid (b+c)$.

:::solution
Since $a \mid b$, there is an integer $k$ such that $b = ak$.

Since $a \mid c$, there is an integer $\ell$ such that $c = a\ell$.

Then

$$
b+c = ak + a\ell = a(k+\ell).
$$

Because $k+\ell$ is an integer, $a \mid (b+c)$.
:::

<!--
id: proof-writing-17
note: math-proof-writing
title: "A Basic Set Inclusion"
exam: exam-i
skills: [Set Inclusion]
-->

Prove that $A \cap B \subseteq A$.

:::solution
Let $x \in A \cap B$. By definition of intersection, $x \in A$ and $x \in B$.

In particular, $x \in A$. Since every element of $A \cap B$ is an element of $A$, we have

$$
A \cap B \subseteq A.
$$
:::

<!--
id: proof-writing-18
note: math-proof-writing
title: "Check Injectivity"
exam: exam-i
skills: [Injective, Functions]
-->

Let $f(x) = 5x - 2$ on $\mathbb{R}$. Prove that $f$ is injective.

:::solution
Assume $f(x_1) = f(x_2)$. Then

$$
5x_1 - 2 = 5x_2 - 2.
$$

Add $2$ to both sides:

$$
5x_1 = 5x_2.
$$

Divide by $5$:

$$
x_1 = x_2.
$$

Therefore $f$ is injective.
:::

<!--
id: proof-writing-19
note: math-proof-writing
title: "Check Surjectivity"
exam: exam-i
skills: [Surjective, Functions]
-->

Let $g(x) = x^3$ on $\mathbb{R}$. Prove that $g$ is surjective.

:::solution
Let $y \in \mathbb{R}$ be arbitrary. Choose

$$
x = \sqrt[3]{y}.
$$

Then

$$
g(x) = x^3 = (\sqrt[3]{y})^3 = y.
$$

So every real number has a preimage under $g$, and $g$ is surjective.
:::

<!--
id: proof-writing-20
note: math-proof-writing
title: "Give a Witness"
exam: exam-ii
skills: [Existence, Rational Numbers]
-->

Show that there exists a rational number between $1$ and $2$.

:::solution
Choose

$$
\frac{3}{2}.
$$

It is rational, and

$$
1 < \frac{3}{2} < 2.
$$

So a rational number between $1$ and $2$ exists.
:::

<!--
id: proof-writing-21
note: math-proof-writing
title: "Distribute a Set Intersection"
exam: exam-ii
skills: [Set Equality, Set Inclusion]
-->

Prove that

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C).
$$

:::solution
We prove both inclusions.

First let $x \in A \cap (B \cup C)$. Then $x \in A$ and $x \in B \cup C$. So $x \in B$ or $x \in C$.

If $x \in B$, then $x \in A \cap B$. If $x \in C$, then $x \in A \cap C$. In either case,

$$
x \in (A \cap B) \cup (A \cap C).
$$

Now let $x \in (A \cap B) \cup (A \cap C)$. Then either $x \in A \cap B$ or $x \in A \cap C$.

In the first case, $x \in A$ and $x \in B$, so $x \in A \cap (B \cup C)$.

In the second case, $x \in A$ and $x \in C$, so $x \in A \cap (B \cup C)$.

Thus the two sets are equal.
:::

<!--
id: proof-writing-22
note: math-proof-writing
title: "An Even-Difference Relation"
exam: exam-ii
skills: [Relations, Direct Proof]
-->

On the integers, define a relation $R$ by $aRb$ if $a-b$ is even. Prove that $R$ is reflexive, symmetric, and transitive.

:::solution
Reflexive: for any integer $a$,

$$
a-a = 0
$$

is even, so $aRa$.

Symmetric: if $aRb$, then $a-b$ is even. Since

$$
b-a = -(a-b),
$$

and the negative of an even integer is even, $bRa$.

Transitive: if $aRb$ and $bRc$, then

$$
a-b = 2k \quad \text{and} \quad b-c = 2\ell
$$

for some integers $k,\ell$. Adding gives

$$
a-c = (a-b) + (b-c) = 2k + 2\ell = 2(k+\ell),
$$

so $a-c$ is even. Hence $aRc$.
:::

<!--
id: proof-writing-23
note: math-proof-writing
title: "Use the Contrapositive"
exam: exam-ii
skills: [Contrapositive, Even/Odd]
-->

Prove that if $n^2$ is even, then $n$ is even.

:::solution
We prove the contrapositive: if $n$ is odd, then $n^2$ is odd.

If $n$ is odd, then $n = 2k+1$ for some integer $k$. Squaring gives

$$
n^2 = (2k+1)^2 = 4k(k+1) + 1.
$$

This has the form $2m+1$, so $n^2$ is odd.

Therefore the contrapositive is true, and so the original statement is true.
:::

<!--
id: proof-writing-24
note: math-proof-writing
title: "A Contradiction Argument"
exam: exam-ii
skills: [Contradiction, Irrationality]
-->

Prove that $\sqrt{2}$ is irrational.

:::solution
Assume, for contradiction, that

$$
\sqrt{2} = \frac{a}{b}
$$

for integers $a,b$ in lowest terms, with $b \ne 0$. Then

$$
2 = \frac{a^2}{b^2}
\quad \Rightarrow \quad
a^2 = 2b^2.
$$

So $a^2$ is even, which means $a$ is even. Write $a = 2k$. Then

$$
(2k)^2 = 2b^2
\quad \Rightarrow \quad
4k^2 = 2b^2
\quad \Rightarrow \quad
b^2 = 2k^2.
$$

So $b^2$ is even, hence $b$ is even. That means both $a$ and $b$ are even, contradicting that $\frac{a}{b}$ was in lowest terms.

Therefore $\sqrt{2}$ is irrational.
:::

<!--
id: proof-writing-25
note: math-proof-writing
title: "Split Into Cases"
exam: exam-ii
skills: [Cases, Modulo]
-->

Prove that for any integer $n$, $n^2 \equiv 0$ or $1 \pmod{4}$.

:::solution
Consider two cases.

If $n$ is even, then $n = 2k$ for some integer $k$. So

$$
n^2 = (2k)^2 = 4k^2 \equiv 0 \pmod{4}.
$$

If $n$ is odd, then $n = 2k+1$ for some integer $k$. Then

$$
n^2 = (2k+1)^2 = 4k(k+1) + 1 \equiv 1 \pmod{4}.
$$

In either case, $n^2 \equiv 0$ or $1 \pmod{4}$.
:::

<!--
id: proof-writing-26
note: math-proof-writing
title: "Induction on a Sum"
exam: exam-ii
skills: [Induction, Sums]
-->

Prove by induction that for all integers $n \ge 1$,

$$
1 + 2 + \cdots + n = \frac{n(n+1)}{2}.
$$

:::solution
Base case: when $n=1$,

$$
1 = \frac{1\cdot 2}{2}.
$$

So the formula is true for $n=1$.

Inductive hypothesis: assume for some $k \ge 1$ that

$$
1 + 2 + \cdots + k = \frac{k(k+1)}{2}.
$$

Inductive step: then

$$
1 + 2 + \cdots + k + (k+1)
= \frac{k(k+1)}{2} + (k+1).
$$

Factor out $k+1$:

$$
= (k+1)\left(\frac{k}{2} + 1\right)
= \frac{(k+1)(k+2)}{2}.
$$

This is exactly the desired formula with $n = k+1$. Therefore the statement holds for all $n \ge 1$.
:::

<!--
id: proof-writing-27
note: math-proof-writing
title: "Existence and Uniqueness"
exam: exam-ii
skills: [Existence, Uniqueness]
-->

Show that there exists exactly one real number $x$ such that

$$
3x - 7 = 11.
$$

:::solution
Solve the equation:

$$
3x - 7 = 11
\quad \Rightarrow \quad
3x = 18
\quad \Rightarrow \quad
x = 6.
$$

So $x=6$ is a solution, which proves existence.

If $x_1$ and $x_2$ both satisfy $3x - 7 = 11$, then each must equal $6$, so $x_1 = x_2$. Thus the solution is unique.
:::

<!--
id: proof-writing-28
note: math-proof-writing
title: "A Cubic Function Is Bijective"
exam: exam-ii
skills: [Functions, Injective, Surjective]
-->

Let $f(x) = x^3$ on $\mathbb{R}$. Prove that $f$ is bijective.

:::solution
To show injectivity, assume

$$
f(x_1) = f(x_2).
$$

Then

$$
x_1^3 = x_2^3.
$$

For real numbers, this implies $x_1 = x_2$, so $f$ is injective.

To show surjectivity, let $y \in \mathbb{R}$ be arbitrary. Choose

$$
x = \sqrt[3]{y}.
$$

Then

$$
f(x) = x^3 = y.
$$

So every real number has a preimage, and $f$ is surjective.
Therefore $f$ is bijective.
:::

<!--
id: proof-writing-31
note: math-proof-writing
title: "Prove a Linear Map Is Bijective"
exam: final
skills: [Functions, Injective, Surjective]
-->

Let $f(x) = 4x - 1$ on $\mathbb{R}$. Prove that $f$ is bijective.

:::solution
First show injectivity. If $f(x_1) = f(x_2)$, then

$$
4x_1 - 1 = 4x_2 - 1.
$$

Adding $1$ and dividing by $4$ gives

$$
x_1 = x_2.
$$

So $f$ is injective.

Now show surjectivity. Let $y \in \mathbb{R}$ be arbitrary. Solve

$$
y = 4x - 1
$$

for $x$:

$$
x = \frac{y+1}{4}.
$$

This choice gives $f(x)=y$, so $f$ is surjective.

Therefore $f$ is bijective.
:::

<!--
id: proof-writing-32
note: math-proof-writing
title: "Recover a Set Inclusion"
exam: final
skills: [Set Inclusion, Set Equality]
-->

Suppose $A \cap B = A$. Prove that $A \subseteq B$.

:::solution
Let $x \in A$. Since $A \cap B = A$, the element $x$ is also in $A \cap B$.

By definition of intersection, $x \in B$.

Because every element of $A$ is an element of $B$, we conclude

$$
A \subseteq B.
$$
:::

<!--
id: proof-writing-33
note: math-proof-writing
title: "Exactly One of Two Consecutive Integers Is Even"
exam: final
skills: [Cases, Even/Odd]
-->

Prove that for every integer $n$, exactly one of $n$ and $n+1$ is even.

:::solution
Every integer is either even or odd.

If $n$ is even, then $n = 2k$ for some integer $k$, so

$$
n+1 = 2k+1
$$

is odd.

If $n$ is odd, then $n = 2k+1$ for some integer $k$, so

$$
n+1 = 2k+2 = 2(k+1)
$$

is even.

So in either case, exactly one of $n$ and $n+1$ is even.
:::

<!--
id: proof-writing-34
note: math-proof-writing
title: "Sum of the First Odd Numbers"
exam: final
skills: [Induction, Sums]
-->

Prove by induction that for all integers $n \ge 1$,

$$
1 + 3 + \cdots + (2n-1) = n^2.
$$

:::solution
Base case: for $n=1$,

$$
1 = 1^2.
$$

So the statement is true for $n=1$.

Inductive hypothesis: assume for some $k \ge 1$ that

$$
1 + 3 + \cdots + (2k-1) = k^2.
$$

Inductive step: then

$$
1 + 3 + \cdots + (2k-1) + (2k+1) = k^2 + (2k+1).
$$

Simplify:

$$
k^2 + 2k + 1 = (k+1)^2.
$$

So the formula holds for $k+1$. Therefore it holds for all $n \ge 1$.
:::

<!--
id: proof-writing-35
note: math-proof-writing
title: "No Integer Squares to Two"
exam: final
skills: [Contradiction, Integers]
-->

Prove that there is no integer $n$ such that

$$
n^2 = 2.
$$

:::solution
Assume, for contradiction, that there is an integer $n$ with $n^2=2$.

Then $n^2$ is even, so $n$ must be even. Write $n=2k$ for some integer $k$. Substituting gives

$$
(2k)^2 = 2
\quad \Rightarrow \quad
4k^2 = 2
\quad \Rightarrow \quad
2k^2 = 1.
$$

But the left-hand side is even, while the right-hand side is odd, which is impossible.

Therefore no integer $n$ satisfies $n^2=2$.
:::

<!--
id: proof-writing-41
note: math-proof-writing
title: "Quantifier Order Matters"
exam: final
skills: [Quantifiers, Logic]
-->

Give a concrete predicate and domain where

$$
\forall x\, \exists y\, P(x,y)
$$

is true but

$$
\exists y\, \forall x\, P(x,y)
$$

is false.

:::solution
Take the domain to be the real numbers and let

$$
P(x,y): x < y.
$$

Then $\forall x\, \exists y\, P(x,y)$ is true, because for each real number $x$ we can choose $y = x+1$.

But $\exists y\, \forall x\, P(x,y)$ is false, because no single real number $y$ is greater than every real number $x$.

This shows that the order of the quantifiers matters.
:::

<!--
id: proof-writing-42
note: math-proof-writing
title: "A Set Characterization"
exam: final
skills: [Set Equality, Set Inclusion]
-->

Prove that

$$
A \subseteq B \quad \text{if and only if} \quad A \cap B = A.
$$

:::solution
First assume $A \subseteq B$. To show $A \cap B = A$, prove both inclusions.

If $x \in A \cap B$, then $x \in A$, so $A \cap B \subseteq A$.

If $x \in A$, then $x \in B$ as well, since $A \subseteq B$. So $x \in A \cap B$, and hence $A \subseteq A \cap B$.

Therefore $A \cap B = A$.

Now assume $A \cap B = A$. Let $x \in A$. Then $x \in A \cap B$, so $x \in B$.

Thus every element of $A$ is an element of $B$, which means $A \subseteq B$.
:::

<!--
id: proof-writing-43
note: math-proof-writing
title: "A Bijection Gives Exactly One Solution"
exam: final
skills: [Functions, Existence, Uniqueness]
-->

Let $f:\mathbb{R}\to\mathbb{R}$ be bijective. Prove that for each $y\in\mathbb{R}$, the equation $f(x)=y$ has exactly one solution.

:::solution
Let $y \in \mathbb{R}$ be arbitrary.

Since $f$ is surjective, there exists some $x$ such that

$$
f(x) = y.
$$

So a solution exists.

To show uniqueness, suppose $f(x_1)=y$ and $f(x_2)=y$. Then

$$
f(x_1) = f(x_2).
$$

Since $f$ is injective, it follows that

$$
x_1 = x_2.
$$

Therefore the equation $f(x)=y$ has exactly one solution.
:::

<!--
id: proof-writing-44
note: math-proof-writing
title: "Irrationality of Root Two"
exam: final
skills: [Contradiction, Irrationality]
-->

Prove that $\sqrt{2}$ is irrational.

:::solution
Assume, for contradiction, that $\sqrt{2}$ is rational. Then we can write

$$
\sqrt{2} = \frac{a}{b}
$$

for integers $a,b$ in lowest terms, with $b \ne 0$.

Squaring both sides gives

$$
2 = \frac{a^2}{b^2},
$$

so

$$
a^2 = 2b^2.
$$

Thus $a^2$ is even, so $a$ is even. Write $a=2k$ for some integer $k$. Then

$$
4k^2 = 2b^2
\quad \Rightarrow \quad
b^2 = 2k^2.
$$

So $b^2$ is even, which means $b$ is even. That contradicts the assumption that $\frac{a}{b}$ was in lowest terms.

Therefore $\sqrt{2}$ is irrational.
:::
