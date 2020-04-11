# Nand2Tetris

## Intro

- All of these notes are from the nand2tetris course on coursera
- You don't have to worry about the "how" only about the "what", higher level programming languages, like python or javascript, abstract you away from the lower level components and their related abstractions, like bytes and machine code
- You only have to worry about the current layer of abstraction until something goes wrong then you might have to worry about lower levels 
- You should at least be aware of the multiple layers of abstraction: elementary logic gates -> CPU, RAM, chipset -> computer architecture -> low level code -> VM code -> high level language
- Nand2Tetris part 1: combinatorial logic -> comb. and seq. logic -> digital design 
- building a chip: design. Take a chip abstraction, specifically Xor, and make a chip diagram with it using the software provided. Then use the diagram to specify it using HDL to make a HDL program. Test it with scripts provided and simulate with the hardware simulator provided 

## Six different projects

- Week 1: Elementary logic gates
- Week 2: Arithmetic-Logic Unit
- Week 3: Registers and memory
- Week 4: Writing low-level programs
- Week 5: Computer architecture
- Week 6: Developing an assembler

## Boolean Functions and Gate Logic

### Boolean Logic

What is the AND operation?
- The AND operation: (x AND y), $x \land y$
- if both are 1 then 1, else 0

What is the OR operation?
- The OR operation: (x OR y), $x \lor y$
- if either or both are 1 then 1, else 0

What is the NOT operation?
- The NOT operation: NOT(x), $\neg x$
- whatever the value is, negate it

What is the result of 1 AND (0 OR (NOT (1)))? 0
- f(x, y, z) = (x AND y) OR (NOT(x) AND z)
- There are a finite number of inputs and outputs, so you can write down all the possible values
- You can describe a function as a formula or a truth table


What are Boolean Identities
- Laws by which you can switch values but the result is still equivalent to the original

What are the communatative laws?
- Communatative laws: (x AND y) = (y AND x), (x OR y) = (y OR x)
- You can switch the position of variables for simple AND OR statements

What are the associative laws?
- Associative laws: (x AND (y AND z)) = ((x AND y) AND z), (x OR (y OR z)) = ((x OR y) OR z)
- You can switch the position of brackets in double AND or OR statements where there is an enclosed bracket within the statement

What are the distributive laws?
- Distributive Laws: (x AND (y OR z)) = (x AND y) OR (x AND z), (x OR (y AND z)) = (x OR y) AND (x OR z)
- When you're comparing x with the AND or OR operator to y OR/AND z, it's the same as comparing to both individually

What are De Morgan Laws?
- De Morgan Laws: NOT(x AND y) = NOT(x) OR NOT(y), NOT(x OR y) = NOT(x) AND NOT(y)
- Whenever you have a NOT statement with two variables and a AND or OR operator inside, it's the same as applying NOT to both independently and using the opposite of whatever operator was used to compare x and y within the NOT statement, i.e if it's AND then use OR to compare them independently
- What is the result of NOT(1 AND 1)? 0
- What is the result of NOT(1) OR NOT(1)? 0

## Boolean Function Synthesis

How do you represent Boolean Functions?
- Boolean Expression -> Truth table
- But can you do Truth Table to Boolean Expression? Yes, and it's what we need to do when we construct a computer. We know what we want to do, truth table, but we don't know how to construct the gates to achieve it, the boolean expression

How do you synthesis boolean expressions from truth tables?
- Using the variables, look at all statements in the truth table that evaluate to 1 and figure out, using the variables, how 1 was evaluated. Then add the OR operator to the end of each of these expressions and combine them together. Then work through this large expression, removing duplicates of variables and simplifying it using boolean identities
- Finding the shortest expression for the problem is not easy. It's NP-Hard problem

- Any Boolean function can be represented using an expression containing AND, OR and NOT operation
- Can we do better? Yes
- Any Boolean function can be represented using an expression containing AND and NOT operations
- Proof: De Morgan's law, e.g. (x OR y) = NOT(NOT(x) AND NOT(y))
- Can we do better? Yes
- Any Boolean function can be represented using an expression containing only NAND operations
- Proof: if we know we can do everything with NOT and AND then all we need to do is show how you can do NOT with NAND gates and AND with NAND gates
- NOT(x) = (x NAND x)
- (x AND y) = NOT(x NAND y)

What is NAND?
- NAND: (x NAND y) = NOT(x AND y)

## Logic Gates 

What is gate logic?
- a technique for implementing Boolean functions using logic gates

What are logic gates?
- A stand alone chip that is designed to deliver a well-defined functionality, i.e. Nand, And, Or, etc.

What is a composite logic gate?
- One that is made of elementary logic gates and other composite logic gates, e.g. Mux, Adder, etc.

What is the functional specification of a NAND gate? 
- if (a==1 and b==1) then out=0 else out=1

What is the functional specification of a AND gate? 
- if (a==1 and b==1) then out=1 else out=0

What is the functional specification of a OR gate? 
- if (a==1 or b==1) then out=1 else out=0

What is the functional specification of a NOT gate? 
- if (in==0) then out=1 else out=0

What is the gate interface?
- the gate abstraction, what the gate is supposed to do

What is the gate implementation?
- how the chip is actually constructed and it functions

Which is unique, the gate interface or the implemention?
- the interface is unique but there can be many different implementations of the gate

## Hardware Description Language (HDL)

### How to design a Xor gate 
From requirements to interface
- Xor: outputs 1 if one, and only one, of its inputs, is 1
- General idea: when a And Not(b) Or b And Not(a)



How to write in HDL
- See below

```
/** Xor gate: out = (a And Not(b)) or (Not(a) And b) */

CHIP Xor {
    IN a, b;
    OUT out;

    PARTS:
    Not (in=a, out=nota);
    Not (in=b, out=notb);
    And (a=a, b=notb, out=aAndNotb);
    And (a=nota, b=b out=aAndNotb);
    Or (a=aAndNotb, b=notaAndb, out=out);
}
```

From gate diagram to HDL
- google to Xor gate diagram to see an example

What is a gate's signature or API?
- Essentially the inputs and outputs you will get given that gate, so using an AND gate, you WILL get the outputs dictated by it's truth table

What type of a programming language is HDL and what are some of it's features?
- HDL is a functional/declarative language
- The order of HDL statements is insignificant
- Before using a chip part, you must know it's interface. For example: Not (in= , out=), And (a= ,b= ,out= ), Or(a= ,b= ,out= )
- Connections like partName(a=a,...) and partName(...,out=out) are common

What are the two most popular HDLs?
- VHDL and Verilog, but there are many more

## Hardware Simulation

What is the hardware simulation process?
- load the HDL file into the hardware simulator
- enter values (0's and 1's) into the chip's input pins (e.g. a and b)
- evaluate the chip's logic
- inspect the resulting values of:
  - the output pins (e.g. out)
  - the internal pins (e.g. nota, notb, aAndNotb, notaAndb)


## Multi-bit Buses

What is a bus?

- a array of bits manipulated together
- e.g. a 16 bit bus is represented as a[16] in HDL

How would you xor the first and last bits of a 16-bit bus named 'bus'?

- Xor(a=bus[0],b=bus[15],out=out)

How do you use sub buses?

- Add16(a[0..7]=lsb, a[8..15]=msb)

## Project 1

- Given NAND, make the following gates
- Elementary logic gates: Not, And, Or, Xor, Mux, Dmux
- 16-bit variants: Not16, And16, Or16, Mux16
- Multi-way variants: Or8Way, Mux4Way16,Mux8Way16, Dmux4Way, Dmux8Way

What is a multiplexor?

- if (sel==0) out=a else out=b
- If the selector is 0, it outputs a, if it's 1 then it outputs b
- A 2-way multiplexor enables selecting, and outputting, one out of two possibles inputs

Where are multiplexors widely used in?

- digital design and communications networks

What is a demultiplexor?

- if (sel==0) {a,b}={in,0} else {a,b}={0,in}
- acts like the "inverse" of a multiplexor
- distributes the single input value into one of two possible destinations

What is an And16 gate?
- a 16bit a and a 16bit b input and a 16bit output
- only outputs 1 if both a and b are 1

What is a Mux4Way16?
- a 16bit, 4-way multiplexor, so 4 inputs, a, b, c, d, each with 16 bits, a selector with 2 bits, that determines the output and a 16 bit output
- the selector and the value of each of the inputs essentially dictates which input is outputted, a, b, c, d

## Week 2

### Binary Numbers

What is the relationship between bit and the number of possibly combinations?
- N bits - $2^n$ possibilities
- e.g. 3 bits - 8 possibilities

What is the value of 101 in binary notation?
- 5

How do we convert binary representations into decimal representations
- each 0 in a list of 0's from right to left represents a power of 2, so the first element, the 0th elements represents 2 to the power of 0, which is 1. This continues up to the nth element which represents 2 to the power of n
- a concrete example of this is 00000111, which is equal to 7 because you have $2^0$(1) + $2^1$(2) + $2^2$(4) = 7

What is the binary representation of 87?
- 01010111

What is the binary representation of 99?
- 01100011

### Binary Addition

How do you do binary addition?
- if one digit contains 1 and the other contains 0, then the result is 1, if both digits contain 0 then both are 0
- if both contain 1 then result is 0 and carry the one to the next number until you reach 2 bits that are both zero and the result is then 1, each 1 and 0 addition that you go past turns results in 0, each 1 and 1 addition still returns 1 and carry the 1 to the next number 

What happens when you have overflow?
- so if you get 10010101 + 11011100 you geet 101110001, 9bits, so overflows by one digit
- the overflow is usually disposed of by the computer

What is a half adder?
- adds two bits

What is a full adder?
- adds three bits

What is an adder?
- adds two numbers

How does a half adder work?
- essentially consists of two operations, suming a and b and then carrying the result if a and b both = 1

How does a full adder work?
- it essentially deals with a, b and a carry and how you sum then and then carry the result
- if all 3 = 1, then sum = 1 and carry = 1. else if a or b = 1 and c = 1, then sum = 0 and carry = 1. else if a and b = 0 and c = 1 then sum = 1 and carry = 0

How does a multi-bit adder work?
- 15 full adders and one half adder for the right most bit

How do you represent the negative number -x using positive numbers and what' this system called?
- 2's complement representation
- $2^n$- x
- Basically use the last digit to represent whether something is positive or negative
- can represent postive numbers in the range of $0 .. 2^n-1 - 1$
- can represent negative numbers in the range of $-1 ... -2^n-1$

