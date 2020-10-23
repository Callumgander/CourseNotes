# DeepMind Deep Learning 2020 notes


- The hallmark of human intelligence is it's generality

- Intelligence measures an agent's ability to achieve goals in a wide range of environments

Reinforcement Learning
- General Purpose Framework for AI
- Agent interacts with the environment
- Select actions to maximise long-term reward
- Encompasses supervised and unsupervised learning as special cases
  
Why use games to solve AI?
1. Microcosms of the real world: games are a proving ground for real-world situations
2. Stimulate intelligence: By presenting a diverse set of challenges
3. Good to test in simulations: efficient, run thousands in parallel, faster than real time
4. Measure progress and performance: measure progress and compare against human performance

Why use Deep Learning?
- Previous systems required feature engineering for every new problem
- Deep learning enables end-to-end learning for a given loss and architecture
- Weak prior knowledge can be encoded via architecture (e.g. convolutions, recurrence)
- Deep Learning made possible by:
  - Greater computational power (GPUs, TPUs)
  - More available data (mobile devices, online services, distributed sensors, crowdsourcing)
  - Better understanding of algorithms and architectures

AlphaZero
- used two neural networks to reduce the size of the search space of possible moves 
- Policy network: takes as input a raw goal position and maps it to a probability distribution over moves, so gives you the probability of a given move being played in a given position
- Value network: takes a given position and gives an evaluation of that position, is it good for black or good for white
- With AlphaGo, the policy network was trained using supervised learning from games done by human experts 
- the policy network could then play like a very high quality player so used reinforcement learning to train the value network

AlphaZero Conclusions
- Deep Learning enables us to search the huge search space of complex board games
- Self-play produces large amounts of data necessary for training the deep neural networks
- Self-play provides an automatic curriculum, starting from simple opponents to stronger and stronger opponents
- System discovers new knowledge
- New directions: learn rules of the game, more than two players, imperfect information, larger action spaces, etc.

Capture the Flag
- Large-scale decentralised multi-agent learning, scalable computational architectures
- Population based training
- Internal reward evolution
- Hierarchical temporal policies
- Ageents exceed human-level, as both teammates and opponents
- Rich emergent representation and behaviour

Training Procedure
- Train a population of agents
- CTF games played by bringing together agents from population for an episode
- Individual streams of experience sent back to participating agents
- Each agent trains with independent RL, independent actions, no global information

Neural Network Architecture of FTW
- Hierarchy of recurrent neural networks at two times scales: slow RNN and fast RNN
- Internal rewards based on game events learned at even slowere time scale

Population based training
- Population of agents serves two purposes
- Provides diverse teammates and opponents: robust multi-agent training without collapses found with naive self-play
- Provides meta-optimisation of agents: using population based training. Used for model selection, hyperparameter adaption, internal reward evolution

Results
- FTW agent is far stronger than baseline agents
- benchmarked by playing tournaments against huamns
- humans only win against agents when playing with an agent teammatte
- humans rated FTW agent as most collaborative

There is a whole field of not just how to training NNs but how they actually represent and understand the world

Capture The Flag Conclusions
- Deep Reinforcement Learning can now learn to play complex multi-player video games at human level
- Train populations of agents to enable optimisation and generalisation
- Use procedurally generated environments to produce robust, generalisable behaviours
- We can now begin too oundeerstand how agents behave and why

AlphaFold 

Proteins - fundamental building blocks of life
- Proteins carry out all kinds of functions in living organisms:
  - catalysing reactions
  - transducing signals across the cell membrane
  - gene regulation
  - cellular transport
  - antibodies
- Proteins are target of many drugs
- Proteins are a class of drugs
- The shape of proteins tells us about their function

Complex 3D shapes emerge from a string of amino acids 
- every protein is made up of a sequenc eof amino acids bonded together
- these amino acids interact locally to form shapes like helices and sheets
- these shapes fold up on larger scales to form the full three-dimensional protein structure
- proteins can interact with other proteins, performing functions such as signalling and transcribing DNA 

Protein Structure Prediction
- Amino acid residues connected in a chain with a repeating -N-C-C- backbone
- Side chains connectede to the C-alpha determine structure
- Structure can tell us about the function of a protein

Protein Structure Prediction
- Goal is to predict the coordinates of every atom, particularly the backbone
- Torsion angles for each residue are a complete parameterisation of backbone geometry
- 2N degrees of freedom for chains of length N

Levinthal's Paradox
- "Many naturally-occurring proteins fold reliably and quickly to their native state despite the astronomical number of possible configurations"
- Example: protein of 361 amino acids
  - 3^361 = 2 x 10^172 configurations
  - Assume protein can sample 10^13 new configurations per second or 3 x 10^20 per year
  - It would take 10^152 years to sample them all
  - Similar number of configurations as theere are legal Go positions

Why deep learning for protein folding?
- Experimental techniques are expensive and time-consuming
  - cryo-electron microsopy
  - nuclear magnetic resonance
  - X-ray crystallography 
- Hard to model long and short range interactions explicitly
- data available from experiments:
  - 150,000 proteins in Protein Data Bank (since 1971)
  - But: much less data than for speech and image recognition
- CASP assessment provides a benchmark with well-defined goals 

What to predict? Pairwise distances between residues

AlphaFold System
- Combine sequence with data from protein database with coevolutionary information
- Predict pairwise distances and configuration angles
- Run gradient descent on resulting score function to obtain configuration estimate

Conclusions AlphaFold
- Deep learning-based distance prediction
  - Gives more accurate predictions of contact between residues
  - A richer source of information than contact prediction
  - Constructs a smooth potential that is easy to optimise 
- Limitations:
  - Accuracy is still limited
  - Method depends on finding homologous sequences
  - Only predicts backbone, side chains filled by external tool (Rosetta)
- Work builds on decades of experimental and computational work of other researchers
- Deep learning can deliver solutions to science and biology problems

The future lectures

Neural Networks Foundations
- What are Neural Networks?
- What kinds of functions can they represent?
- How are they trained?
- What are their limitations? 

Convolutional Neural Networks for Image Recognition
- How can we build prior knowledge into our architectures
- Convolutional Neural Networks encode spatial priors
- Revolutionised image recognition
- Now part of any vision based machine learning application

Vision beyond Imagenet - Advanced models for Computer Vision
- Object detection, semantic segmentation, estimation of optical flow
- Moving images: analysing videos for action recognition and tracking
- Self-supervised learning, also using additional modalities such as audio
- Computer vision for building intelligent agents

Optimization for Machine Learning
- Optimization methods are the engines underlying neural networks that enable them to learn from data
- Fundamentals of gradient-based optimization methods, and their application to training neural networks
- Gradient descent, momentum methods, 2nd-order methods, and stochastic methods

Sequences and Recurrent Networks
- Almost all data is sequential: text, DNA, video, audio
- How can we process such data using machine learning
- Fundamentals of sequence modeling including Recurrent Neural Networks and Long-Short Term Memory (LSTMs)
- Mapping sequences to sequences as in machine translation

Deep Learning for Natural Language Processing
- Why Deep Learning for language?
- Simple recurrent networks to Transformers
- Unsupervised / representation learning for language. From Word2Vec to BERT
- Situated language understanding. Grounding. Embodied language learning 

Attention and Memory in Deep Learning
- Attention and memory: two vital new components of deep learning
- Implicit attention, discrete and differentiable variants of explicit attention
- Networks with external memory, attention for selective recall
- Variable computation time, which can be seen as a form of 'attention by concentration'

Generative Latent Variable Models and Variational Inference
- Unsupervised Learning
- Latent variable modelling and the central role of inference
- Flow-based models which combine high expressive power with tractable inference
- Variational inference for efficient training of intractable models
- VAE modelling framework

Frontiers in Deep Learning: Unsupervised Representation Learning
- What is a good representation?
- Unsupervised learning has potential to address open problems like data efficiency, generalisation, robustness, fairness, etc.
- Different approaches such as disentangling, CPC, VQ-VAE, Bert, auxiliary losses for RL

Generative Adversarial Networks
- Generative adversarial networks promising approach to generative modeling
- Two "competing" networks: a generator tries to fool a discriminator with synthesised data
- Variations, e.g. CycleGAN, VAE-GAN hybrids, bidirectional GAN 
- Domains, such as video and speech synthesis

Responsible Innovation
- AI provides powerful tools that are shaping our lives and society
- With great power comes great responsibility
- How to build safe, robust, and verified AI systems that do exactly what we expect of them
- How to think about the ethical consequences of building and deploying AI systems
<!--  -->