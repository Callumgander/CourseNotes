# Intro to Bash, VIM and Regex

What is UNIX?
- An operatiing system developed at AT&T Bell Labs in the 1960s through the 1980s 
- GNU/Linux, MacOSX, and Android are all based on ideas and specifications created by UNIX

What was UNIX originally built for?
- Large mainframe computers that many people would use at the same time and so time-sharing software needed to be made to allocate time

What is a teleprinter?
- It printed the program output on paper

What is the legacy of teletype?
- Every program on a UNIX system can read input from the standard input device (stdin) and write to standard output (stdout)
- By default, stdin comes from the keyboard and stdout gets "printed" to the graphical display

What are the programs within the UNIX operating system?
- kernel, shell, utilities

What is the kernel's job?
- To mediate access between user programs and system resources
  - CPU scheduling
  - I/O to computer hardware
  - memory
- Programs request resources by making a syscall

What is the shell?
- a computer program that can execute other programs from a text-based interface
- Most modern shells are strongly influenced by the first UNIX shells

Why is UNIX still important?
- portable to many kinds of hardware, consistent conventions, vast software ecosystem, text!

What is the unix philosophy?
- a set of design principles for how programs relate to each other
  - each program should do one thing well
  - the output of a program can become the input of another

How do you see what shell you're using?
- echo $SHELL

How do you get the manual for any command in the shell?
- man cmdyouwanttoknow, e.g. man cd

How do you concatenate the output of two programs?
- cat text1.txt text2.txt

How do you use brace expansions and what are they used for?
- they are used to reduce the amount you have to type to produce numerical lists
- $ echo wow{1..10}
- wow1 wow2 wow3 wow4 wow5 wow6 wow7 wow8 wow9 wow10
- echo img{0..100..10}
- img0 img10 img20 img30 .. etc.

