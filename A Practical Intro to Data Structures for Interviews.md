# A Practical Intro to Data Structures for Interviews

## Introduction

What is the general outline of the interview process
- Resume/application -> Coding Challenge -> Recruiter Phone Screen -> Technical Phone Screen -> Onsite Interview

What is the process for the resume/application stage?
- Resume skimmer, manual reading, or submitted by recommendation

What is the process for the coding challenge?
- HackerRank, create a demo app, add a feature to a demo app

What is the process for the recruiter phone screen?
- Friendly, marketing company,  questions about why you are leaving,  what you are working on, what you want next, etc.

What is the process for the technical phone screen?
- code in a collabedit or google doc, pair program on adding a feature to a codebase, high-level questions about your domain and projects

What is the process for the onsite Interview?
- similar to technical phone screen except in person and 3-6hrs long, sometimes a bit harder

What are they looking for, how do you overachieve, and what are some glaring problems at the resume/application stage?
- They're looking to gauge your relevant experience
- Overachieve by getting a recommendation from someone
- Glaring problems are relevant experience being buried, grammar issues, no role fit

What are they looking for, how do you overachieve, and what are some glaring problems at the coding challenge stage?
- They're looking for clean, correct code
- Overachieve by using a linter if you can, ensure you clearly understand the problem, add tests and descriptive comments 
- Glaring problems are messy, unorganized code, didn't solve the challenge, missed details 

What are they looking for, how do you overachieve, and what are some glaring problems at the recruiter phone screen stage?
- They're looking for interest in the role and company, as well as culture fit
- Overachieve by reading the engineering blog if they have one and relevant press about the company, and ask engaging questions, and have some highlights of your experiences ready
- Glaring problems are communication-based: offending the recruiter, didn't seem interested in the company

What are they looking for, how do you overachieve, and what are some glaring problems at the technical phone screen stage?
- They're looking to gauge your technical ability and fit within the company
- Overachieve by having a conversational tone, communicate the entire way, be able to discuss previous projects in-depth
- Glaring problems are inability to describe past project high-level implementation details, not communicative, frustrated

What are they looking for, how do you overachieve, and what are some glaring problems at the onsite interview stage?
- They're looking to gauge your technical ability and fit within the company
- Overachieve by knowing your data structures, your language of choice, and be their friend
- Glaring problems are thought-process was not clear, lack of CS fundamentals, communication

What are some common uses for arrays and strings?
- ordered data, words

What are some common uses for hash tables?
- optimization

What are some common uses for linked lists?
- data insert/delete

What are some common uses for stacks/queues?
- creative auxiliary data structures

What are some common uses for trees and heaps?
- hierarchical data

What are some common uses for graphs?
- complex relationships

## Data Structures Overview

How does a Stack work?
- Stores items in a last-in, first-out (LIFO) order, like a stack of plates

How does a Queue work?
- Stores items in a first-in, first-out (FIFO) order, like an actual queue works

What is enqueueing?
- putting an element at the front of the queue (0)

What is dequeueing?
- taking an element from the front of a queue (0)

What is the main pro of stacks and queues?
- fast operations, pushing and popping, enqueueing and dequeueing are simple linear time

In JS engines, what DS executes your code at runtime?
- the call stack and message queue

What DS is used in text editors and browsers that allows you to undo mistakes or go back to a certain page?
- stacks

How do linked lists work?
- organizes items sequentially, with each item storing a pointer to the next
- First node is the head, last pointer points to null
- basically how you implement a dynamic array 

What are the pros and cons of linked lists?
- fast operations on the ends, flexible size
- however, costly lookups

What are some uses for a linked list?
- Linked Lists are often the underlying data structure for a stack or queue (don't really get why this is?)
- Can be used to implement a least recently used cache using a linked list
- Hash tables often use linked lists to handle collisions

How do hash tables work?
- organizes data for quick look up on values for a given key
- hashing function takes the key, hashes it to a numerical value that for us is just the index of the array, and stores the value there
- they function as sets, not sorted and no duplicates

What are the pros and cons of hash tables?
- fast lookups, flexible keys
- However, slow worst-case lookups, unordered, single-directional lookups

What are the pros and cons of JS arrays?
- fast lookups and appends
- however, slow inserts and deletes

What does putting _ in front of a property on an object mean and why do it?
- it means it's an internal property and that you shouldn't be working on it directly and you should only be accessing it through the methods that are public
- e.g. with the _storage property  on the stack class, you should only interact with it through the push, pop and peak methods 

What are the edge cases for the push method for a stack?
- typechecking what the value being pushed is and checking whether an argument is present/more arguments are present 

What are the edge cases for the pop method for a stack?
- checking if the empty, can't pop an empty array

UP TO QUEUES 