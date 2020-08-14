# Neural Network Foundations 

What is not covered
- "Old school"
  - (Restricted) Boltzman Machines
  - Deep Belief Networks
  - Hopfield Networks
  - Self Organising Maps
- Biologically Plausible
  - Spiking networks
  - Physical Simulators
- Other
  - Capsules (sort of)
  - Graph Networks (sort of)
  - Neural Differential Equations (sort of)
  - CNNs (yes)
  - RNNs (yes)

What is necessary?
- Compute
- Data
- Modularity: deep learning is not that well defined, it's more of a high level idea of modular blocks that can be arranged in various ways

The deep learning puzzle 
- Yann LeCun: "DL is constructing networks of parameterized functional modules & training them from examples using gradient-based optimization"
- Danillo Rezende: "DL is a collection of tools to build complex modular differentiable functions. These tools are dvoid fo meaning. It is pointless to discuss what DL can or cannoot do. What gives meaning to oit is how it is trained and how the data is fed to it"
- each node should know what to output and how to adjust their input, if their output needs to change

Real Neuron
- Human brain is estimatted to contain around 86,000,000,000 of such neurons, each connected to thousands of others
- Connected to others
- Represents simple computation
- Has inhibition and excitation connections
- Has a state
- Output spikes

Artificial Neuron
- The goal of simple artificial neurons models is to reflect some neurophysiological observations, not to reproduce their dynamics
- Easy to compose
- Represents simple computation
- Has inhibitioon and excitation connections
- Is stateless wrt. time
- Outputs real values

Linear Layer
- In Machine Learning linear really means affine. Neurons in a layer are often called units. Parameters are often called weights
- Easy to compose
- Collection of artificial neurons
- Can be efficiently vectorised
- Fits highly optimised hardware (GPU/TPU)

Sigmoid Activation function
- Activation functions are often called non-linearities. Activation functions are applied point-wise
- Introduces non-linear behaviour
- Produces probability estimate
- Has simple derivatives
- However, saturates and derivatives vanish

Cross entropy
- Most common classification metric
- Cross entropy loss is also called negative log likelihood or logistic loss
- Encodes negation of logarithm of probability of correct classification
- Composable with sigmoid
- However, numerically unstable

Softmax
- Softmax is the most commonly used final activation in classification. It can also be used to have a smooth version of maximum
- Multi-dimensional generalisation of sigmoid
- Produces probability stimate
- Has simple derivatives
- However, saturates, derivatives vanish

Softmax + Cross entropy
- Widely used not only in classification but also in RL. Cannot represent spare outputs (sparsemax). Does not scale too well with k
- Encodes negation of logoarithm of probability of entirely correct classification
- Equivalent to multinomial logistic regression model
- Numerically stable combination

Uses
- Handwritten digits recognition at 92% level
- Highly dimensional spaces are surprisingly easy too shatter with hyperplanes
- Widely used in commercial applications
- For a long time a crucial model for NLP under the name of MaxEnt (Maximum Entropy Classifier)

1-hidden layer network vs XOR
- Hidden layer provides non-linear input space transformation so that the final layer can classify
- With just 2 hidden neurons we solve XOR
- Hidden layer allows us to bend and twist input space
- We use linear model on top, to do the classification

Universal Approximation Theorem
- For any continuous function from a hypercube [0,1]^d to real numbers, and every positive epsilon, there exists a sigmoid based, 1-hidden layer neural network that obtains at most epsilon error in functional space
- A big enough network can approximate, but not represent any smooth function. The math trick is to show that networks are dense in the space of target functions
- One of the most important theoretical results from Neural Networks
- Shows that they are extremely expressive
- However, tells us nothing about learning and size of network grows exponentially

Rectified Linear Unit (ReLU)
- One of the most commonly used activation functions. Made math analysis of networks much simpler
- Introduces non-linear behaviour
- Creates piece-wise linear functions
- Derivatives do not vanish
- However, dead neurons can occur, technically not differentiable at 0

Depth
- Number of linear regions grows exponentially with depth, and polynomially with width
- Expressing symmetries and regularities is much easier with deep model than wide one
- Deep model means many non-linear composition and thus harder learning 

Gradient descent recap
- Choice of learning rate is critical. Main learning algorithm behind deep learning. Many modifications: Adam, RMSProp, etc.
- Works for any "smooth enough" function
- Can be used on non-smooth targets but with less guarantees
- However converges to local optimum

Linear layer as a computational graph
- Note that backward pass is a computational graph itself

There was a bunch of super heavy math stuff that i'm going to need to go back and look at here

Overfitting and regularisation
- Classical results from statistics and Statistical Learning Theory which analyses the worst case scenario
- As your model gets mor epowerful, it can create extremely complex hypotheses, even if they are not needed
- Keeping things simple guarantees that if the training error is small, so will the test be
- Methods to deal with them:
- Lp regularisation
- Dropout 
- Noising data
- Early stopping 
- Batch/Layer norm
- New results take into consideration learning effects
- As models grow, their learning dynamics change, and they become less prone to overfitting
- New interpolation regime shows that you can overfit up to a point where you are over-parameterized and then somehow the model actually becomes more accurate
- Model complexity is not as simple as the number of parameters
- Even big models still can benefit from regularisation techniques
- We need new notions of effective complexity of our hypotheses classes

Diagnosing and debugging
- Initialisation matters
- Overfit small sample 
- Monitor training loss
- Monitor weights norms and NaNs
- Add shape asserts
- Start with Adam
- Change one thing at a time
- It is always worth spending time verifying correctness
- Be suspicious of good results more than bad ones
- Experience is key, just keep trying!

If you want to do research in fundamental building blocks of Neural Networks, do not seek to marginally improve thee way they behave by finding new activation functions

Ask yourself what current modules cannot represent oro guarantee right now, and propose a module that can


https://storage.googleapis.com/deepmind-media/UCLxDeepMind_2020/L2%20-%20UCLxDeepMind%20DL2020.pdf