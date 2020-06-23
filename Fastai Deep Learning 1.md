# Fast.ai Deep Learning Part 1

## Lesson 1

What is an ImageDataBunch?
- Represents all of the data you need to build a model

What is overfitting?
- where you don't learn to see the general thing you're trying to look for but you learn how to see the specific data you trained your model on
- for example, instead of learning how to see cricket players generally, you learn how to identify a specific player because the dataset was disproportionately photos of him 

What do we use to try and prevent overfitting?
- a validation set

What is a validation set?
- a portion of your dataset that the model does not train on but which is used to validate that those it was tested on didn't cause the model to overfit to that specific dataset

Shortcuts for jupyternb
- tab for tab complete options
- shift-tab to show parameters for a function

What is a loss function?
- essentially tells you how good your prediction was 

How do you check something in the fastai docs from jupyter?
- doc(functiontolookat.ormethod)

What should you use instead of a confusion matrix when there are too many classes to compare properly?
- interp.most_confused()

What does the learning rate say?
- How quickly are you updating the parameters of your model

What is batch size and how does it relate to GPU memory??
- The number of images you train at one time, if you get an out of memory error, just reduce the batch size


## Lesson 1 Homework 

- Done the homework of downloading images and creating a classifier, just going to run through the process here to make sure I've got it down
- Import necessary packages
- Create folders for each class and create a CSV file in the project directory that contains urls for the images
- You should now have folders for each class and urls to download the images
- declare a classes variable and assign the names of each class as a list of strings
- Use the download images to get all the images using the CSV
- Remove any images that can't be opened
- Create an imagedatabunch with the data and assign it the data variable
- Look at your data to see what it looks like 
- create a learn variable using the data, a model (e.g. resnet34), and a metric (error_rate)
- Learning: fit with one cycle, save(?), unfreeze(?), find the learning rate,  plot the learning rate, fit with one cycle again but specify the learning rate, save(?)
- Interpretation: load stage2, make a classificationinterpretation from learner using the prior learn, plot a confusion matrix, plot top losses
- clean top losses and similars then retrain model and you're ready to deploy

Why is learning rate "the most important hyper parameter in deep learing"?
- Learning rate decides how much gradient to be back propagated. This in turn decides how much we move towards minima. Small learning rate makes the model converge slowly

What math symbol represents learning rate?
- $\alpha$ - alpha

What does the cyclical learning rates for training neural networks by Leslie N. Smith suggest for finding learning rates?
- The idea is to start with small learning rate (like 1e-4, 1e-3) and increase the learning rate after each mini-batch till loss starts exploding. Once loss starts exploding stop the range test run. Plot the learning rate vs loss plot. Choose the learning rate one order lower than the learning rate where loss is minimum( if loss is low at 0.1, good value to start is 0.01). This is the value where loss is still decreasing.


    If your training loss is much lower than validation loss then this means the network might be overfitting. Solutions to this are to decrease your network size, or to increase dropout. For example you could try dropout of 0.5 and so on.
    If your training/validation loss are about equal then your model is underfitting. Increase the size of your model (either number of layers or the raw number of neurons per layer)
-  

## Lesson 2

- Convert whatever data into pictures, e.g. sounds into pictures, point mutations into pictures
- Examples: a zucchini vs cucumber classifier, a islander vs masquerder classifier, hairest dog vs most naked cat, a city classifier by google map images, a batik cloth classifier, think weird

up to about 24 minutes