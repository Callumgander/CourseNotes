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
- 