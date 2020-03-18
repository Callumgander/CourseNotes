# Building a Simple Interpreter for Pascal using Python

This is project was made with this series by Ruslan Pivak (https://ruslanspivak.com/lsbasi-part1/)

## Part 1

Why do you need to know how interpreters and compilers work?

- You need a lot of technical skills to write an interpreter or compiler, making one can give you some of these
- Interpreters and compilers often look like magic, demystifying and learning how they work and how to build one gives you a measure of control over how they work
- If you want to create your own programming language, you need to be able to create one. It's a helpful skill incase that happens

What are interpreters and compilers?

- Programs that translate a source program in some high-level language into some other form
- This series states that the difference between them is that a compiler translates a source program into machine language while an interpreter executes the code without translating it into machine language (there's a diagram of this on the site)

What languages does this series deal with

- the goal is to create a simple interpreter for Pascal using Python

What does the Token class contain and how does it work?

- it is the class used to represent each token of the expression to be evaluated
- assigns a type property (INT, PLUS, EOF) as well as a value (0-9 Ints, '+' or None)

How does the interpreter class work?

- takes in the inputted expression as a string, initiates the index of the text as a property .pos, and current token as .current_token
- The lexical analyser, get_next_token method, breaks the inputted string into tokens until EOF is reached, used on each char in the string and returns each as a token and increments .pos
- The eat method is used to ensure that the current_token matches the expected token, otherwise it returns an error
- the expr method, assuming the other two methods don't return errors, will take the left integer and add it to the right integer and return the result

How is this initial calculator restricted?

- only accepts single digit integers
- can only do addition
- can't parse whitespaces
- the interpreter presumes the structure Int + Int


