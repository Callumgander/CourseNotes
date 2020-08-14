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

Summary: classification vs regression
- Basic: maps inputs to defined classes vs maps inputs to continuous values
- Output: discrete values vs continuous values
- Nature of the data: unordered data vs ordered data
- Algorithms: logistic regression, decision trees, neural networks vs linear regression, neural networks


