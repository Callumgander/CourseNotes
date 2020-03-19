Intro
- What is RegEx? a regular expression is a sequence of characters that define a search pattern. It is mainly used for string pattern matching

Regex Patterns
- How do you create a Regex pattern with python? assign r'stringtosearchfor' to a variable then import re, plug the pattern and the test string into re.findall(regexpattern, test) and boom, done
- How do you create a Regex pattern with javascript? assign a regex pattern to a variable, then create a Regex variable and assign "new RegExp(Regex_Pattern, "g")", where the first parameter is the pattern and the second is the regular expression flag, g stands for global search. then take the test string and .match(Regex) to it

Mathching anything but a newline 
- How to match anything but a newline in python? same as before with assigned the regex pattern using r"...\....\....\....$" then use re.match(regex_pattern, test_string) is not None
- How to match anything but a newline in javascript? same but use /^(.{3}\.){3}.{3}$/g;

Matching Digits and Non-Digit Characters
- How to match digits and non-digit characters in JS? /\d\d\D\d\d/ where \d corresponds to any digit and \D corresponds to any non-digit, so a string like '01D34' will pass
- How to match digits and non-digit characters in python? r"\d\d\D\d\d\D\d\d\d\d"

Matching Whitespace and Non-Whitespace character
- How to match whitespace and non-whitespace characters in JS? \s matches any whitespace chracter, \S matches any non-white space character

How to repeat regex patterns?
- (_____){3} means that whatever's inside the brackets is multipled 3 times, e.g. (\d\D){2} would produce \d\D\d\D

How to match word and non-word characters?
- word characters are a-z, A-Z, 0-9, and _
- use /w for word characters and /W for non-word characters

How to match the start and end of a string?
- ^ is used to match the position at the start of a string
- $ is used to match the position at the end of a string
-