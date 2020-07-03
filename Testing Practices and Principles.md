# Testing Practices and Principles

What is this talk?
- Fundamentals behind tests and testing frameworks
- Distinctions of different forms of testing
- Writing unit and integration
- Test doubles (mocks/stubs/etc.)
- Use TDD too write new features and to find and fix bugs
- Core principles of testing to ensure your tests give you the confidence you need 

What kind of bugs are there?
- Security, performance, regression, integration, internationalization, business logic, accessibility, user interface, scaling

How do we prevent bugs?
- Static Types: Flow / TypeScript
- Linting: ESLint
- Testing

What kinds of testing can we do?
- Unit Testing
- Integration Testing
- E2E Testing 
- Penetration Testing
- Performance Testing
- Regression Testing 
- a11y Testing
- i18n Testing
- A/B Testing
- Stress Testing
- Usability Testing

At a fundamental level, what is a test?
- Something that throws an error if there is a bug

What is code coverage?
- shows how much of your code is actually being tested, usually uses istanbul. you can find it in the coverage/lcov-report/index.html folder
- Covers what code wasn't run during your tests

Should you aim for 100% code coverage?
- DON'T EXPECT to have 100% code coverage, after a certain point you get diminishing returns and it's probably not worth writing tests for parts of your code that you know function correctly and don't need to be tested

