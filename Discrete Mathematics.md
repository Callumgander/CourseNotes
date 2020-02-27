Discrete Maths (Good)

https://www.youtube.com/watch?v=aTlR03t1dTQ&list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS&index=3

Intro to Sets 

- What is a set? A set is a collection of objects
- What are elements of a set? Elements of a set are whatever those objects are
- How do you denote that an object is part of a set? John E nameOfSet (weird E used to show an element is part of a set)
- How do you denote that an object is not part of a set? Not an element of a set is noted with a weird E with a line through it 
- Does order and repetition matter in a set? No it doesn’t
- What is a subset? It’s some portion of a set, every element of A is also in B. This is denoted using ⊆ 
- What does A ⊆ B mean? A is a subset of B
- How do you denote that something is not a subset? Using  ⊄ , I.e. A  ⊄ B means a is not a subset of B

Set-Roster vs Set Builder Notation

- {0, 2, 4, 6, ….} - this is set-roster notation
- … implies the pattern continues
- … can be done on both sides to imply the pattern continues in both directions
- Set-builder notation is a different form of notation used for when the relationships with and between sets is more complicated
- What is the general form for the set-builder notation? {x | P(x) }. x is a variable, | means “such that”, P(x) is property that is true. This is the set of variables x such that x has a particular property
- How do you encapsulate all even integers using set-builder notation? {x | x = twice an integer} i.e. numbers whose square root is an integer, so all even numbers, { x ∣ sqrt(x) ∈ Z }
- What is a set with no objects? {} or O with a line through it, this is the empty set
- What is {∅}? The set that contains the empty set 
- Is ∅ ⊂ {1, 2,3} ? Yes, technically the empty set is a subset of 1, 2, 3 because it doesn’t contain anything. We call this vacuously true because there is nothing to actually check, it’s just true

Cartesian product of Two Sets A x B

- How do you write ordered pairs? (a,b)
- (a,b) = (c,d) if? a=c & b=d, first two components are equal and second two components are equal
- What is the Cartesian product? A x B is the set of all ordered pairs (a,b) where a ∈ A and b ∈ B. So, it’s basically a product that can be contained within a plane of values. So all products of (x,y) are elements of the X and Y axises
- {a,b} x {0,1}

Relations between two sets

- How do you define a Relation R? A relation R between A and B is a subset of A x B

The intuitive idea of a function

- f(x) = x2
- What does the vertical line test essentially mean? It essentially means that if you have one input, you get one output, so when you do the vertical line test and draw a vertical line through the graph of a function, there should only be 1 point on the line where it intersects with the results of the function
- What does domain mean in the context of functions? The set of all possible inputs to a function
- What does range mean in the context of functions? The set of all possible outputs of a function
- What two properties do you want a function to have? It does something to every input in the domain of the function and that there is one output for each input

Formal definition of a Function using the Cartesian product

- What is the formal definition of a Function using the Cartesian product? A function F between A and B is a relation between A and B such that: 
    - For every element x ∈ A there is an element y ∈ B such that (x,y) ∈ F (for every input x, there is some output y)
    - If (x,y) ∈ F and (x,z) ∈ F then y = z (this is the equivalent of the vertical line test)
- Consider the relation C where (x,y) ∈ C, If x2 + y2 = 1. Is this a function? (That formula produces a circle on a graph) No, it’s a circle, so If (x,y) ∈ F and (x,z) ∈ F then y != z, it fails the vertical line test 

Intro to Logical Statements

- What is a statement? A sentence that is either True or False
- What does ~p mean?  not p
- What does p ^ q mean? p and q
- What does p ∨ q mean? p or q
- How could you write the statement “My shirt is grey but my shorts are not” in mathematical logic?
- P: my shirt is grey
- Q: my shorts are grey
- P ^ ~Q
- What is the logical equivalent of But? Logical but and and are the same thing

Logical equivalence

- What is logical equivalence? Two statements are logically equivalent if they have the same truth table
- What is the symbol for logical equivalency? An = sign but with an extra line in the middle

Tautologies and contradictions

- A tautology t is a statement that is always true
- A contradiction c is a statement that is always false

DeMorgan's Laws

- ~(p ∨ q) $\equiv$ (~p) $\land$ (~q)
- p: trefor is a unicorn
- q: trefor is a goldfish
- left side: it's NOT the case that Trefor is either a unicorn OR a goldfish
- right side: Trefor is NOT a unicorn AND NOT a goldfish
- Double negative: ~(~p) $\equiv$ p
- (~(p $\lor$ ~q)) $\land$ t 
- (~p $\land$ ~(~q)) $\land$ t (via DeMorgan's)
- (~p $\land$ q) $\land$ t (via double negative)
- ~p $\land$ q (via identity)

Conditional Statements 

- def: p -> q means: "if p is TRUE then q is TRUE"
- **If** I study hard, **then** I will pass
- if p then q
- p -> q
- **Either** I don't study hard, **or** I pass
- ~p $\lor$ q

Vacuous truth

- When the hypothesis is false, the statement is vacuously true
- ex: **if** Trefor is a unicorn, **then** everyone get's an A
- ex: **Either** trefor is **not** a unicorn, **or** everyone get's an A

Negating a conditional

- ~(p -> q) $\equiv$ ~(~p $\lor$ q)
- ~~p $\land$ ~q) DeMorgan's law 
- p $\land$ ~q

Contrapositive of a conditional

- p -> q $\equiv$ ~q -> ~p
- **If** I study hard, **then** I will pass
- contrapositive: **If** I don't pass, **then** I didn't study hard

Converse and inverse of a conditional statement

- The Converse of a statement p -> q is the statement q -> p
- These are not logically equivalent
- **if** it's a dog, **then** it's a mammal
- **if** it's a mammal, **then** it's a dog
- The Inverse of a statement  p -> q is the statement ~p -> ~q
- $\equiv$ ~q -> ~p, which is the converse of the contrapositive
- so inverse $\equiv$ converse
- **if** it's a dog, **then** it's a mammal  p -> q 
- **if** it's not a dog, **then** it's not a mammal   ~p -> ~q
- also not logically equivalent to the original statement
  
Biconditional Statements "if and only if"

- The biconditional p <-> q means that both p -> q and q -> p
- **If** I study hard, **then** I will pass p -> q
- **If** I pass, **then** I studied hard q -> p
- I will pass **if and only if** I study hard p <-> q

Logical Arguments - Modus Ponens & Modus Tollens

- A valid argument is a list of premises from which the conclusion follows
- **If** I do the dishes, **then** my wife will be happy with me - premise
- I do the dishes - premise
- **Therefore**, my wife is happy with me - conclusion
- Modus Ponens is an argument of the form:
  - **if** p, **then** q. (Psubscript1)
  - p. (Psubscript2)
  - **Therefore** q. (C)
- Modus Tollens is an argument of the form:
  - **if** p, **then** q
  - ~q
  - **Therefore**, ~p 
- Knowing your conclusion is false, forces your assumptions to be false to
- **If** I'm the POTUS **then** I'm an American citizen
- I'm not an American citizen
- **Therefore**, I'm not the POTUS
- 

Logical Argument Forms: Generalizations, Specialization, Contradiction

- Generalization is an argument of the form:
  - p.
  - **Therefore**, p $\lor$ q
  - ex:
  - I'm a Canadian
  - **Therefore**, I'm a Canadian or I'm a unicorn
- Specialization is an argument of the form:
  - p $\land q$.
  - **Therefore**, p.
  - ex:
  - I'm a Canadian and I have a PhD
  - **Therefore**, I'm a Canadian
- Contradiction is an argument of the form:
  - ~p -> c
  - Therefore, p.

Analyzing an argument for validity
- **If** I'm skilled at poker, **then** I will win (p -> q)
- I won money playing poker (q)
- **Therefore**, I'm skilled at poker (p)
- So the argument is trying to use the converse of the statement, q -> p, and as they aren't logically equivalent, this argument is invalid

Predicates and their Truth Sets
- A statement is either TRUE or FALSE
- x > 5 is undetermined, so not a logical statement
- What is a predicate? a predicate is a sentence depending on variables which becomes a statement upon substituting values in the domain
- ex: P(x): x is a factor of 12 with domain $\mathbb{Z}^+$ (all positive integers)
- P(6) is True
- P(5) is False
- P($\frac{1}{3}$) is nonsense because $\frac{1}{3}$ $\not \in$ $\mathbb{Z}^+$
- What is the Truth Set of a predicate? all values x in the domain where P(x) is true 
- The Truth Set of a predicate P(x): {x $\in$ D | P(x)}
- All values x in the domain where P(x) is true

Universal and Existential Quantifiers
- What does $\forall$ mean? $\forall$ represents the universal quantifier that means "for all"
- What is the main use of the universal quantifier? "quantifying" predicates: $\forall$ x $\in$ D, P(x) (for all x in the domain, P(x) is true)
- What does $\forall$ x $\in$ D, P(x) mean? For all x in the domain, P(x) is true
- ex: every dog is a mammal
- D = the set of dogs, P(x): x is a mammal
- What does $\exists$ mean? $\exists$ is the existential quantifier that means "there exists"
- What is the main use of the existential quantifier $\exists$? "quantifying" predicates: $\exists$x $\in$ D, P(x) (there exists x in the domain, such that P(x) is true)
- What does $\exists$x $\in$ D, P(x) mean? there exists x in the domain, such that P(x) is true
- ex: some person is the oldest in the world
- some = $\exists$, x $\in$ D = {people in the world}, oldest = P(x)
- Statement: P: "Roofus is a mammal"
- Predicate: P(x): "x is a mammal"
-  Statement: Q: $\forall x \in D, P(x)$ 

Universal Conditionals P(x) implies Q(x)

- Universal-Conditionals: P(x) => Q(x) means $\forall x \in$ D, P(x) -> Q(x)
- If **x is the POTUS**, then **x is a US citizen**
- if P(x), then Q(x)
- "Every POTUS is a US citizen" 

Negating Universal and Existential Quantifiers 
- Negate "$\forall x \in \mathbb{Z}^+$, x > 3"
- $\exists x \in \mathbb{Z}^+ , x \notin 3$
- => $\exists x \in \mathbb{Z}^+ , x \leqslant 3$
- ~P(x)
- How to negate a universal? $\lnot (\forall x \in D, P(x)) \equiv \exists x \in D, \lnot P(x)$
- negate "**Someone** in our class is taller than 7 feet"
- $\exists x \in D, P(x) $
- $\exists x$ = someone 
- D = our class
- P(x) = x is taller than 7 feet
- negation: $\forall x \in D, \lnot P(x)$
- "Everyone in our class is shorter than 7 feet"
- So when you negate universal or existential quantifiers, what happens is that the $\forall$ turns to a $\exists$ or vice versa, and the predicate, P(x), is negated, $\lnot P(x)$, and vice versa

Negating Logical Statements with Multiple Quantifiers
- ex: "every integer has a larger integer"
- $\forall x \in \mathbb{Z}, P(x)$
- $\forall x \in \mathbb{Z}, \exists y \in \mathbb{Z}, y > x $
- True: choose y = x + 1 $\in \mathbb{Z}$
- Negate: $\exists x \in \mathbb{Z}, \lnot P(x)$
- => $\exists x \in \mathbb{Z}, \forall y \in \mathbb{Z}, y \leqslant x$ 
- Ex: "Some number in D is the largest"
- The statement depends on what the domain is, if it's a limited set then whatever the max will be the largest number but if it's the set of all positive integers there is no largest as the positive integers are infinite
- $\exists x \in D, P(x)$
- some number = $\exists$
- D = D
- P(x) = is the largest
- $\exists x \in D, \forall y \in D, x \geqslant y$
- Negation: $\forall x \in D, \exists y \in D, x < y$

Necessary and Sufficient Conditions
- squares, rectangles, quadrilaterals
- What is the relationship between squares and rectangles? All squares are rectangles but not all rectangles are squares
- **If** x is a Square, **then** x is a Rectangle
- **If** A(x), **then** B(x)
- A(x) is a sufficient condition for B(x)
- i.e. x being a square is sufficient to conclude x is a rectangle
- How could you formally write that A(x) is a sufficient condition for B(x)? **If** A(x), **then** B(x)
- **If** x is a Rectangle, **then** x is a Quadrilateral
- **If** B(x), **then** C(x)
- **If** x is not a Quadrilateral, **then** x is not a Rectangle
- **If** ~C(x), **then** ~B(x)
- C(x) is a necessary condition for B(x)
- i.e. x being a quadrilateral is necessary to conclude x is a rectangle 
- If we want a rectangle, it's **sufficient** to have a Square but it's necessary to have a **quadrilateral**
- A(x) => B(x) => C(x)
- A(x) is a sufficient condition for B(x), B(x) is a necessary condition for A(x)
- Being a square is a sufficient condition for being a rectangle
- Being a rectangle is a necessary condition for being a square
  
Formal Definitions in Maths | Ex: Even & Odd Integers
- informal definition of even integers: n is an even integer if n can be written as twice an integer
- formal definition of even integers: n is an even integer if $\exists k \in \mathbb{Z}$ such that n = 2k
- informal definition of odd integers: n is an odd integer if n is an integer that is not even
- formal definition of odd integers: n is an odd integer if $\exists k \in \math{Z}$ such that n = 2k + 1

How to Prove Maths Theorems
- Theorem: an even integer plus an odd integer is another odd integer
- Proof:
  - Suppose m is even and n is odd
  - $\exists k_{1} \in \mathbb{Z}$ and $\exists k_{1} \in \mathbb{Z}$ so that $m = 2 k_{1}$ and $n = 2k_{2} + 1 $
  - Then, $m + n = (2k_{1})+ (2k_{2} + 1)$
  - $= 2(k_{1} + k_{2}) + 1$
  - Let $k_{3} = k_{1} + k_{2}$, and note it is an integer
  - Hence, $\exists k_{3} \in \mathbb{Z}$ so that $m + n = 2k_{3} + 1$
  - thus $m + n$ is odd
- Begin with the assumptions, end with the conclusions
- Assumption:
  - Suppose m is even and n is odd
- Conclusion:
  - thus $m + n$ is odd
- Definitions:
  - $\exists k_{1} \in \mathbb{Z}$ and $\exists k_{1} \in \mathbb{Z}$ so that $m = 2 k_{1}$ and $n = 2k_{2} + 1 $
  - Hence, $\exists k_{3} \in \mathbb{Z}$ so that $m + n = 2k_{3} + 1$
- Manipulations:
  - Then, $m + n = (2k_{1})+ (2k_{2} + 1)$
  - $= 2(k_{1} + k_{2}) + 1$
  - Let $k_{3} = k_{1} + k_{2}$, and note it is an integer
- Direct Proofs of: $\forall x \in D, P(x) => Q(x)$
  1. State the assumptions
  2. Formally define the assumptions
  3. Manipulate
  4. Arrive at Definition of Conclusion
  5. State the Conclusion
- 