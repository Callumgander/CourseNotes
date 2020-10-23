# Advanced Models for Computer Vision

A picture is worth a thousand words, classification models learn only a few

The holy grail is a model that achieves human level scene understanding

By the end of this lecture, you will know how to redefine these building blocks to perform different visual tasks, using different inputs, and different forms of supervision

Important tasks not covered
- image captioning
- pose estimation

Object detection
- Multi-task problem
- Classification and localisation
- Inputs:
  - RGB image H x W x 3
- Outputs:
  - Class label one_hot
  - Object bounding box
  - for all the objects present in the scene
- How do we predict bounded box coordinates

Bounding box prediction
- Mistakes are not quantifiable in classification; the data is not ordered

Quadratic loss for regression
- Minimise the mean squared error over samples
- How do you deal with multiple targets?
- Convert regression into classification, by discretising the output values, and then refine through regression

Summary: classification vs regression
- Basic: maps inputs to defined classes vs maps inputs to continuous values
- Output: discrete values vs continuous values
- Nature of the data: unordered data vs ordered data
- Algorithms: logistic regression, decision trees, neural networks vs linear regression, neural networks

Case study 1: Faster R-CNN
- Two-stage detector
  - Identify good candidate bboxes
  - Classify and refine
- Identify good candidate bboxes
  - discretise bbox space
    - find anchor points
    - find scales and ratios
  - n candidates per anchor
  - predict objectness score for each bbox 
  - sort and keep top K  
- Refine through regression MLP

Case study 2: RetinaNet - one-stage detector
- Most of the candidate bboxes are easy negatives: poor learning signal

Issue with one-stage detectors
- Most of the candidate bboxes are background, easy to classify
- The accumulated loss of the many easy examples overwhelms the loss of rare useful examples
- Faster R-CNN prunes these in stage 1
- One-stage detectors employ hard negative mining heuristics
- RetinaNet uses Focal Loss (FL)

Semantic segmentation
- Bounding boxes are not good representations for certain types of objects, e.g. a person
- We need more refined representations 
- Inputs: RGB image
- Outputs: Class label for every pixel
- Dense prediction problem: how do you generate an output at the same resolution as the input?

Recap: Pooling
- The pooling operation is responsible for reducing the resolution of the feature maps, 
- We generally use pooling modules so that as we go deeper into the model, we want the pooling modules to have an increased receptive fiield, so they can extract more abstract features

Unpooling
- Upsample to increase resolution
- Essentially just copy the initial pixel value to the pixels surrounding the more numerous output pixels
- other upsampling methods
  - unpooling with indices SegNet
  - Deconvolutions Deconv Net

Case study: U-NET
- Encoder - decoder model
- Skip connections to preserve details

Instance segmentation
- Object detection + segmentation
- Pixel-wise labels can be confusing for overlapping objects in the same category

Evaluation Metrics
- Classification
  - Accuracy: percentage of correct predictions
  - top-1: top predictions is the correct class
  - top-5: correct class is in top-5 predictions
- Object detection and segmentation 
  - intersection-over-union (IoU)
  - non-differentiable: used only for evaluation

Benchmarks
- Similar to Imagenet for various tasks
- Public platforms for model evaluation
- Maintain a leaderboard to track state-of-the-art models

Transfer Learning
- Intuition: features are shared across tasks and datasets. Reuse knowledge

Transfer Learning across different domains
- Sim2Real
  - Train in simulation using RL
  - Use Automatic Domain Randomization: data augmentation + hard negative mining
  - Test in real world

Lecturer ran through a visual experiment
- conclusion: motion helps object recognition when learning to see

Videos
- Motion - cues for object recognition during learning
- Natural data augmentation: translation, scale, 3D rotation, camera motion, light changes

Optical flow estimation
- Input: 
  - pair of RGB images
- Targets: 
  - Dense flow map (real values)
  - 2D translation displacements

Case study - FlowNet
- Encoder-decoder architecture similar to U-NET
- Supervised training
- Loss: euclidean distance
- Flying chairs dataset
- Sim2Real transfer

Video models using 3D convolutions
- Video as a volume
  - Stack frames
  - Apply 3D convolutions

3D convolution operation
- The kernel slide across space and time to generate spatio-temporal feature maps

Properties of 3D convolutions
- Strided, dilated, padded, [...] convolutions apply in 3D as well
- 3D convolutions are non-casual
- Masked 3D convolutions are casual

Action recognition
- Inputs:
  - RGB video
  - (optional) flow map
- Targets:
  - action label one_hot, e.g. cricket shot

