# Introduction to Artificial Intelligence

How does an agent perceive it's environment?
- Through Sensors

How does an agent interact with it's environment? 
- Using it's actuators?

What do we call the function that maps sensors to actuators?
- The control policy of the agent

What is the loop of perception and interaction with the environment called? 
- the perception action cycle

What makes an environment fully observable?
- if the information your agent can observe at any time is completely sufficient to make the optimal decision
- if the sensors can see the entire state of the environment

What makes an environment partially observable?
- if the information your agent's sensors can see are only a fraction of the state of the environment

What is a deterministic environment?
- one where your agent's actions uniquely determine the outcome
- for example, chess, doesn't matter when or where you move a piece, it moves the same way

What is a stochastic environment?
- while there can be a level of determinism, stochastic means there is a certain amount of randomness involved, such as throwing a dice

What is a discrete environment?
- One where you have finitely many action choices and finitely many things you can sense
- e.g. in chess, there are a finitely many positions and things you can see

What is a continuous environment?
- One where the space of possible actions of things you could sense may be infinite

What is a benign environment?
- An environment that has no objective of its own

What is an adversarial environment?
- An environment that has an objective of it's own or has actors within it with objectives of their own

What are some of the ways you can define an environment?
- Fully vs partially observable
- Deterministic vs stochastic
- discrete vs continuous
- benign vs adversarial 

How would you define checkers environment?
- Fully observable, deterministic, discrete and adversarial

How would you define pokers environment?
- Partially observable, stochastic, discrete, and adversarial

How would you define a self-driving cars environment?
- partially observable, stochastic, continuous, and adversarial

What is one of the ways Sebastian Thrun describes AI?
- AI as uncertainty manage, AI = what to do when you don't know what to do

What are some reasons for uncertainty?
- sensor limits, adversaries, stochastic environments, ignorance, laziness

How would you define a pathfinding problem?
- An initial state
- An action function that takes that state as an argument and returns a set of possible actions in that state 
- A result function that takes in the initial state and an action and returns a resulting state
- A goaltest function that takes in the resulting state and returns a boolean value of truth or false for whether it is correct or not
- A path cost function which takes a path, a sequence of state action transistions, and returns a number which is the cost of that path

