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

## Part 3 

- This part is mainly about how to parse and interpret arithmetic expressions that have any number  of plus or minus operators in it, exactly what I struggled with in the part 2 exercises

What is a syntax diagram?
- a graphical representation of a programming language's syntax rules. Basically, they visually show you which statements are allowed in your programming language and which are not

What two main purposes do syntax diagrams serve?
- They graphically represent the specification (grammar) of a programming language
- They can be used to help you write your parser - you can map a diagram to code by following simple rules

What is another name for parsing and what is another name for a parser?
- syntax analysis and a syntax analyser

Components of an interpreter so far
- Token types, as string variables 
- A token class with self, type and value
  - method to return a string representation of the token as 'Token(TYPE, value)'
- another method to call this string method and return it's result
- an interpreter class that takes text as a parameter
  - text is assigned to itself, position is set to 0, current_token is None, current_char is text[pos]
- an error method to raise exceptions when there is an error parsing the input
- an advance method to move the position forward as well as check if it's out of bounds or not, otherwise resetting current_chars position
- a skip_whitespace method which while the current character is a whitespace, call the advance method
- an integer method that while the current_char is not None and is a digit will be added to a result string, advance will be called and will continue doing this until the fully multidigit integer has been completed, then converted to an int again and returned
- a get_next_token method, the lexical analyzer
  - while the current_char is not none, check if it's a whitespace and continue
  - if it's a digit just return Token with INTEGER and the integer method as the value 
  - if it's an operator, call the advance method and return Token with the operator name and the operator value
  - if it's not None and fails to match any of these, call the error method
  - outside of the while loop, return the Token(EOF, None) to show that the next token is the end of the expression
- an eat method that takes the token type as an argument, 
  - check's if it's current_token type matches it's supposed type, if so assign the lexical analyser to the current_token, else return an error
- a term method that asssigns the current token to a token variable, calls eat and passes it INTEGER, then returns the value property on the token
- a expression method, the parser/interpreter
  - assigns the get_next_token() method to the current_token property
  - assigns the term method to the result variable
  - while the current_token type is within the list of acceptable operators (e.g. MULTIPLY, etc.) then assign the current_token property to the token variable and call a series of conditionals to check whether the token's type property matches MULTIPLY or whatever other operators you allow for, call eat with operators name passed in, assign result OPERATOR term() to result. Once the while loop finishes, return the result
- declare a main function that while true tries to take in input from the console and assign it to a text variable but breaks if an EOFError is encountered. Call the Interpreter on text and assign it to interpreter, call the expr method of interpreter and assign it to result and then print that result
- Finally, just call the main function

## Part 4

What are some reasons to use grammars?
- A grammar specifies the syntax of a programming language in a concise manner
- A grammar can serve as great documentation
- A grammar is a good starting point even if you manually write your parser from scratch. Quite often you can just convert the grammar to code by following a set of simple rules
- There is a set of tools, called parser generators, which accept a grammar as an input and automatically generate a parser for you based on that grammar

What is another name for a sequence of rules in grammar?
- productions, e,g. expr:factor((Mul|Div)factor)* is a production

What does a rule or production consist of?
- a non-terminal called the head or left-hand side, a colon, and a sequence of terminals and/or non-terminals called the body or right-hand 

In the grammar shown in Part 4 of Simple Interpreters, what are tokens like MUL, DIV, and INTEGER called?
- Terminals

In the grammar shown in Part 4 of Simple Interpreters, what are variables like expr and factor called?
- non-terminals

What is a factor, at least in the simple interpreter articles?
- an integer

What does (...)* mean in the context-free grammar used in Simple Interpreters? 
- matches contents within the group zero or more times