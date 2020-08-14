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

- If your training loss is much lower than validation loss then this means the network might be overfitting. Solutions to this are to decrease your network size, or to increase dropout. For example you could try dropout of 0.5 and so on.
- If your training/validation loss are about equal then your model is underfitting. Increase the size of your model (either number of layers or the raw number of neurons per layer)
-  

## Lesson 2

- Convert whatever data into pictures, e.g. sounds into pictures, point mutations into pictures
- Examples: a zucchini vs cucumber classifier, a islander vs masquerder classifier, hairest dog vs most naked cat, a city classifier by google map images, a batik cloth classifier, think weird
- as said above core lesson is to think what data you could turn into an image? for example, how do you turn sound into an image? or brain waves firing? etc.

Process of making own dataset and model:
- Downloading the images and making the folders
  - so run one of the folder and file cells, then run the path cell that makes the directory
  - then don't run the classes cell and run the download_images cell
  - repeat for each class
  - improve this methodology if you like
- Clean dataset of corrupt images
- Create ImageDataBunch
  - always set the random seed above so that your validation set isn't changing each time, reducing the reliability of your results when you make adjustments
- Train the model with create_cnn using resnet34 and fit_one_cycle
- save the model
- unfreeze model
- use learing rate and plot it
  - with the learning rate you're looking for the strongest downward slope
- save the model
- load the model
- use classification interpretation and plot with a confusin matrix
- clean your data up
  - take the top_losses
  - use the filedeleter widget
  - do both valid and train sets, maybe test too
  - stop once you get to 5 photos that look alright
- retrain your model, it should be more accurate

- the models are generally good at dealing with randomly noisy data but not biasedly noisy data

- look up ipywidgets if you want to learn how to create widgets

Deploying your model
- Changing mindset
  - contrary to popular belief, use a CPU as long as you don't expect huge amounts of traffic
  - it will take about 10-20x longer per image put into the model but that's fine beecause the difference will actually be like 2seconds instead of 0.1seconds
- Get the classes
- fast.ai should automatically detect that you have a GPU and otherwise just use the CPU, if it doesn't just put in the line of code given
- upload the testimg to a variable
- create the imagedatabunch.single_from_classes with the same parameters as before, create the model, load the finished version (learn.load('stage-') or whatever)
- then just do learn.predict(img) and store it into three variables: pred_class (the answer), pred_idx, and outputs
- Use the route thingie as a way to respond with the answer

Things that can go wrong
- Most likely problems are that your learning rate is too high or low or your number of epochs is too high or low
- Learning Rate
  - If your validation loss explodes, then your learning rate is too high
  - If your error rate improves too slowly from epoch to epoch, then your learning rate is too low
  - If your training loss is higher than your validation loss, thene your learning rate is too low
  - You NEVER want a model where your training loss is higher than your validation loss
- Epochs
  - If your training loss is higher than yoour validation loss, it could also be that your epochs are too low
  - If your error rate improves for a while and then starts getting worse again, it could be that you're overfitting and your epochs are too high
- Jeremy says that lots of people will tell you if your training loss is lower than your validation loss, you're overfitting. Jeremy argues that is ABSOLUTELY not true

- Predictors are functions of pixel values
- Essentially all they do is apply the different functions for each class which returns a probability then use argmax to get the index of the class with the highest probability and return it 

- whenever you have a metric in fast.ai, they're being applied to the validation set

- what is a tensor? an array of a regular shape, like a square or a rectangle

- calculating the gradient tells us in which direction to jump, multiplied by the learning rate which tells us how far to jump/how much to alter our weights by

- What is the model/architecture? the mathematical function you're fitting the parameters to, e.g. y'=xa' or resnet34
- What are other names for parameters? coefficients or weights
- What are the parameters? the numbers you're updating
- What is the loss function? tells you how far away or how close you are to the correct function

![](2020-08-06-18-25-13.png)

Week 2 Homework:
- Go through all the extra resources
- Build another classifier
- Deploy it online

## Week 3 Lesson

- there is deployment help on Fast.ai as well as service provider recommendations and tutorials

What were some other people's projects?
- a car classifier
- a guitar classifier
- healthy vs unhealthy food classifier
- Trinidad and Tobago Hummingbird Classifier
- Is this mushroom edible classifier
- video feed to emoji classifier
- American sign language video classifier
- emotion classification from faces

What is the Data Block API?
- a series of classes that help you format your data correctly for the model

- get_transforms flips photos horizontally by default
- metrics have nothing to do with how the model is trained, we only use them for printing out during training, they just show you how you're going
  
What is a partial function application?
- a partial function is the exact same as the function passed into it as a parameter but always uses whatever additional parameters are put into the partial function

Saving Parameters
- learn.save basically saves where your parameters for the model were at and allows you to test out different things without losing your results

Image Segmentation
- image segmentation is basically doing pixel classification, you're classifying what part of the picture each pixel belongs to, is it a building or a bike, etc.
- HOWEVER, to do this, you already need a segmentation map for an image, which needs to be done by hand, so you have to find ones done by others or create it yourself

Faster training tip for larger models (progressive resizing)
- Jeremy suggests that training models on small image sizes, say 64x64 then using larger images, say 128x128, using the same model but fine tuning it and repeating. Trains faster, generalises better but there are still unknowns about exactly how to do it

REMINDER
- If your training loss is higher than your validation loss then you're underfitting 

Uses Unet
- If you're creating a multisegmentation model, Jeremy recommends usinig unet rather than a traditional CNN

Peaking losses before falling
- Losses will peak before falling because the way fit_one_cycle makes the learning rate go up then go down
- This was a good idea because as your beginning you want your learning rate to be higher and gradually increase, so that it jumps down the line faster, but you then want it to slow down and decrease as it approachs the minima

Test out the learn.recorder methods
- When you're running your code, test out the learn.recorder. methods so that you start to get a feel for how your model is working and what the graphs mean

Fixes for running out of GPU memory
- mixed position training, instead of using single precision floating point numbers, use half precision floating point numbers so 16bits rather than 32 bits
- to_fp16()
- however, if your kernel or graphics card dies, it may be because your graphics card is too old

What is a regression model?
- any kind of model where your output is some continous number or set of numbers

Error Metrics
- Go through each of the 3 notebooks, get the error metrics and look up what the maths is for it then figure out how to write it in code

What is an activation function? 
- takes the result of a matrix multiplication and sticks it through some function
  
What is a ReLU activation in code
- actually use max(x, 0)

What is the universal approximation theorem
- if you have enough matrix multiplications, followed by activation functions, you can create arbitrary shapes
- if you have stacks of linear functions and non-linearities, the result can approximate any function arbitrarily closely

## Lesson 3 Homework
- Go through all the addition pages for lesson 3
- Go through all 4 notebooks, run them, play with them and take notes
- See if you can come up with a problem that is either multilabel Classification, image regression or image segmentation and see if you can solve it (if I can't do this, just pick a kaggle problem for each)

What is the data block API?
- The fastai data block API defines a chainable mechanism for transforming raw data (e.g., in image files, .csv files, pandas DataFrames, etc…) into the requisite PyTorch Datasets and Dataloaders that are fed into the forwardfunction of your nn.Module subclass. 
- In less than 10 lines of code, you can define everything you need to split your data into training, validation, and optionally test datasets, apply transforms, and package their respective dataloaders into something called a DataBunch for training.

How does the data block API work?
1. define the source of your inputs
2. define how you want to split your inputs into training and validaton datasets
3. Define the source of your targets (y values) and combine them with the inputsof your training and validation datasets in the form of fastai labellist objects
4. Add a test dataset (optional)
5. Add transforms to your LabelList objects (optional)
6. Build PyTorch DataLoaders from the Datasets defined above and package them up into a fastai DataBunch

What are transforms?
- transforms define data augmentation you want done to either, or both, of your inputs and targets datasets

What do you use ItemList for?
- To hold your inputs and your targets

What do ItemLists represent?
- a collection of ItemList objects, you'll have an ItemList instance for each of your datasets (training, validation, and optionally test)

What does LabelList do?
- merges your inputs ItemList instances with your target ItemList instances

What is the goal of linear regression?
- to fit a line to a set of points

What does this index `x[:,0]` ?
- takes all the rows (:) but keeping the first column (0)

What does having an integer with a dot after it like this `1.` mean in python?
- signals it's a float not an int

What is `x@a` in Linear Regression?
- It's the line

What is `a` in Linear Regression?
- The parameters (weights)

How do you figure out Linear Regression?
- You want to find parameters `a` such that you minimize the error between the points and the line `x@a`

What is the most common error function or loss function for a regression problem?
- Mean squared error

What is gradient descent?
- an algorithm that minimizes functions. Given a function defined by a set of parameters, gradient descent starts with an initial set of parameter values and iteratively moves toward a set of parameter values that minimize the function. This iterative minimization is achieved by taking steps in the negative direction of the function gradient

What loss function do we use for classification problems?
- Cross entropy loss also known asnegative log likelihood loss. This penalizes incorrect confident predictions, and correct unconfident predictions

Mathematical functions can't be applied to words directly, so how is text processed in a TextDataBunch?
- They are converted to numbers using tokenization and numericalization

What is tokenization?
- splitting the raw sentences into words, or more exactly tokens
- Easiest way to do it is just splitting strings by space but you generally need more advanced methods like taking care of punctuation, splitting contractions and cleaning things like HTML from the text

What is numericalization?
- Converting tokens to integers by creating a list of all the words used
- We only keep the ones that appear at least twice with a maximum vocabulary size of 60,000 (by default) and replace the ones that don't make the cut by the unknown token UNK

How was the data API used for the Camvid segmentation dataset?
- storing a SegmentationItemList in src, from folder, splitting using names in valid.txt, get labels from the get_y_fn using the classes taken from codes
- then store the transformed, bunched and normalized data into the data variable

What is weight decay?
- it's a means to penalize having too many parameters and making our model too complex. We don't want to do this too much as more parameters means more interactions between parts of our neural network, these interactiiosn mean more non-linearities, which in turn help us solve complex problems
- we multiple the sum of squares of all our parameters with another small number

Mapping the image to the mask
- `get_y_fn = lambda x: path_lbl/f'{x.stem}_P{x.suffix}'`

What does lr_find do?
- explores the learning rate from start_lr to end_lr (both have defaults) over num_it iterations in learn. If stop_div is true, then stops when losses start to diverge (this is true by default)

What do you do if you're running out of GPU RAM?
- use `learn.purge`

Multiclassification Workflow
- Read the label csv into a pandas dataframe
- configure the transforms you'll use
- Store your data as src in a ImageList object, from csv, split randomly, label from the dataframe
- Transform to 128x128, bunch up, and normalize your src and store it in data
- Configure/define metrics
- Create a cnn learner using the data and the metrics
- Find the learning rate, fit one cycle for 5 epochs
- save stage-1, unfreeze, find new lr, fit one cycle for 5 epochs with new learning rate slice(newlr, oldlr/5)
- save stage-2, freeze, find new lr, fit one cycle for 5 epochs with new learning rate 
- remake data with size being 256 this time
- freeze, find new learning rate, fit_one_cycle for 5 epochs, save stage 1-256
- unfreeze, fit on_cycle again for 5 epochs with lovwer learning rate
- Plot top losses, save stage 2-256
- export

Image Segmentation Workflow
- store the paths for the images and the labels
- figure out how to map the labels onto the images as a mask
- get the codes for what the labels on the mask actually represent (e.g. Animal, building, etc.)
- get the size of the src from the mask
- put the images with their masks in an segmentationitemlist and store it in src
- store the transformed (half the size), bunched and normalized src in data
- create/define the metric
- use a unet_learner with resnet34 and weight decay
- find the learning rate
- fit_one_cycle for some amount of epochs
- save stage-1, load, unfreeze
- reduce the learning rate to a slice between the lr/400 and the lr/4 or something like that
- save stage-2
- destroy your learner to free up memory to train the model again but full sized
- create data from transformed, bunched and normalized src
- put it in a unet_learner
- load stage-2, find the learning rate, fit_one_cycle for 10 epochs
- save as stage-1-big, load, unfreeze, set the new learning rate to a slice from (lr/2, lr/10) and fit for another 10 epochs
- save as stage-2-big, should be done
  
Image Regression workflow
- Convert the data into a useable form (the head pose example is pretty complicated and I have a feeling specific to this problem, so I didn't see much point in describing it further)
- Create the dataset using a PointsItemList from folder, split using a validation function, get the label from a function, transform, bunch it, normalize with imgnet stats
- Put in a CNN learner, find the learning rate, fit_one_cycle for about 5 epochs
- save stage-1, load, show_results



### Lesson 3 Projects
- Multilabel Classification: Design Image Style Classification (https://www.kaggle.com/c/design-image-style-categorization/data)
- Multilabel Classification and Image Regression: Gemstone Classification and Price Classification, given a gemstone figure how what it's price is
- Image Segmentation: 
  - Brain MRI Segmentation (https://www.kaggle.com/mateuszbuda/lgg-mri-segmentation)
  - Ultrasound Nerve Segmentation (https://www.kaggle.com/c/ultrasound-nerve-segmentation/overview/description)

STILL TO DO
- Planet and camvid tiramisu one

## Lesson 4 

What is a language model in NLP?
- a model that learns to predict the next word of a sentence




