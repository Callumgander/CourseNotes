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


## Part 2

- Part 2 essentially just does the exercises it asks you to do at the end of part 1, namely: handle whitespaces, allow multi-digit integers, and allow subtraction as well as addition
- His solution creates an advance() method instead how I implemented the isdigit() method to basically check if there was another digit in front of the current_char and if so get_next_token, turn them both into strings, add them together then turn them into an int and return it
- The skip_whitespace is pretty similar to how I implemented mine, both using a while loop to check whether the current char was a whitespace, then advance again, and keep repeating this until you reach a different character or the EOF

What is a lexeme?

- A lexeme is a sequence of characters that form a token, e.g. 3 4 2 form the multidigit token 342 

What does the expr method do?

- Before you can interpret an expression, you first need to recognize what kind of phrase it is, which is what the expr method essentially does: it finds the structure in the stream of tokens it gets from the get_next_token method and then it interprets the phrase that it has recognized, generating the result of the arithmetic expression. It is a parser

What is the process of finding the structure in a stream of tokens? 

- parsing, which is done by the parser

