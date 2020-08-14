# Convolutional Neural Networks for Image Recognition

Neural Networks for Images
- A digital image is a 2D grid of pixels
- A neural network expects a vector of numbers as input, so just take a row of the grid of pixels

Locality and translation invariance
- Locality: nearby pixels are more strongly correlated
- Translation invariance: meaningful patterns can occur anywhere in the image

Taking advantage of topological structure
- Weight sharing: use the same network parameters to detect local patterns at many locations in the image
- Hierarchy: local low-level features are composed into larger, more abstract features

The ImageNet Challenge
- Major computer vision benchmark
- Ran from 2010 to 2017
- 1.4M images, 1000 classes
- Image classification

From fully connected to locally connected
- Receptive fields capture parts of the image
- These are then joined togethere in a feature map and share weights


Implementation: the convolution operation
- The kernel slides across the image and produces an output value at each position
- We convolve multiple kernels and obtain multiple feature maps or channels

Inputs and outputs are tensors

Variants of the convolution operation
- Valid convolution: output size = input size - kernel size + 1
- Full convolution: output size = input size + kernel size - 1
- Same convolution: output size = input size
- Strided convolution: kernel slides along the image with a step > 1
- Dilated convolution: kernel is spread out, step > 1 between kernel elements
- Pooling: compute mean or max over small windows to reduce resolution

Stacking the building blocks
- CNNS or "convnets"
- Up to 100s of layers
- Alternate convolutions and pooling to create a hierarchy

LeNet-5 (1998)
- Architecture of LeNet-5, a convnet for handwritten digit recognition
- photo here

AlexNet (2012)
- Architecture: 8 layers, ReLU, dropout, weight decay
- Infrastructure: large dataset, trained 6 days on 2 GPUs
- photo here

Deeper is better
- Each layer is a linear classifier by itself
- More layers - more nonlinearities
- What limits the number of layers in convnets?

VGGNet (2014)
- Stack many convolutional layers before pooling
- Use "same" convolutions to avoid resolution reduction
- Fixed kernel size
- Architecture: up to 19 layers, 3x3 kernels only, "same" convolutions
- Infrastructure: trained for 2-3 weeks on 4 GPUs (data parallelism)

Challenges of depth
- Computational complexity
- Optimisation difficulties

Improving optimisation
- careful initialisation
- sophisticated optimisers
- normalisation layers
- network design

GoogLeNet (2014)

Batch normalisation
- Reduces sensitivity to initialisation
- Introduces stochasticity and acts as a regulariser

ResNet (2015): residual connections
- Residual connections facilitate training deeper networks
- Residual connections are where you can move your input during backpropagation and ignore prior convolutional layers if it's good to do so
- ResNet V2 avoids all nonlinearities in the residual pathway

DenseNet (2016): connect layers to all previous layers

Squeeze-and-excitation networks (2017)
- features can incorporate global context

AmoebaNet (2018): neural architecture search
- Architecture found by evolution
- Search acyclic graphs composed of predefined layers

Reducing complexity
- Depthwise convolutions
- Separable convolutions
- Inverted bottlenecks (MobileNetV2, MNasNet, EfficientNet)

Data augmentation
- By design, convnets are only robust against translation 
- Data augmentation makes them robust against othere transformations: rotation, scaling, shearing, warping, ...

Visualising what a convnet learns

Other topics to explore
- Pre-training and fine-tuning
- Group equivariant convnets: invariance to e.g. rotation
- Recurrence and attention: other building blocks to exploit topological structure

Generative models of images
- Generative adversarial nets
- Variational Autoencoders
- Autoregressive models (PixelCNN)

More convnets
- Representation learning and self-supervised learning
- Convnets for video, audio, text, graphs, ..

Convolutional neural networks replaced handcrafted features with handcrafted architectures

Prior knowledge is not obsolete: it is merely incorporated at a higher level of abstraction


