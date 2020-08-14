# Computer Graphics

Using this https://www.scratchapixel.com/lessons/3d-basic-rendering/get-started website

What is a collection of 3D objects in CG called?
- A scene (also includes the concept toof a camera and lights)

What is the topology of the object in CG?
- A system that defines how points we call vertices are connected to each other to make faces, also called polygons

What do we call say a box formed of six polygons?
- a polygonal mesh or simply a mesh

What is another name for an object in CG?
- a model

How do we create an image of a box given the topology of it?
- we need to actually project the corners of the box onto an imaginary canvas, a process we call perspective projection

What is a viewing frustum?
- if you imagine your eye as the canvas, the viewing frustum are all the things in the line of sight, imagine it as a triangle extending out from the sides of your vision encompassing all in front of you

What is the cooordinate system usually called in CG and what's the origin?
- the world coordinate system and the origin is the point (0,0,0)

What is an interesting property oof similar triangles?
- the ratiio between their adjacent and oppositee sides are the same, e.g bc/ab = b'c'/ab'

What happens if the projected point coordinates are out of the range -1 to 1?
- the point will simply not be visible and will be outside of the canvas

What is screen space?
- basically just the canvas

What is normalization?
- take points from whatever range they are normally in and convert them to another range, e.g. between 0 and 1

What does the author argue about Computer graphics?
- Computer graphics is mostly mathematics applied to a computer program

What is Geometry?
- Geometry is a branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space

What is the idea behind a vector being a group of numbers?
- collectively they represent another value or concept that is meaningful in the context  of the problem, e.g. in CG a vector can be used to represent either a position or direction in space

What is the different between a point and a vector in CG?
- a point is a position in 3D space, a vector usually means a direction

What is a homogeneous point?
- a fourth element added to a 3D point for mathematical convenience, it is used when multiplying points with matrices

What do we call moving points around space?
- translation

What's the equivalent of translation for vectors?
- rotation

What is a normal in CG?
- A technical term to describe the orientation of a surface of a geomeetric object at a point on that surface

What is the image plane?
- the 2d surface on which the 3d image scene will exist

How  do we create an image from a 3d scene in two steps?
- project the shapes of the 3d objects onto the image plane (connecting lines from the objects features to the eye)
- draw an outline by drawing on the canvas where the projection lines intersect the image plane

What dictates an objects color and brightness in a scene?
- mostly the result of lights interacting with an object's materials

What three things can happen when a photon hits an object and why is this important?
- they can be either absorbed, reflected or transmitted
- the percentage of photons reflected, absorbed or transmitted varies from one material to another and generally dictates how the object appears in the scene

What are the two types of materials?
- conductors (metals) and dielectrics

What are dielectrics?
- things like glass, plastic, wood, water, etc.

Who first explained that we see objects because of ray's of light?
- Ibn al-Haytham

What is intersting about Ibn al-Haytham's remarks on light?
- if there is not light, we see nothing, if there are no objects we see no light

What is forward ray-tracing?
- replace our eyees with an image plane made up of pixels
- photons will hit the pixels on the image plane, causing the pixels value to be greater than zero
- this is repeated until all pixels values are adjusted, causing a computer generated image

What's the problem with forward ray-tracing?
- based on the fact that photons are actually not just going towards the surface of the eye but going in every possible direction with only a small, small probability of hitting the eye. This is easy in nature as there are countless photons travelling at the speed of light but ton a computer we just can't simulate this
- hence, it's incredibly inefficient and not practical

What is backward ray-tracing or eye tracing?
- you shoot the rays from the eye to the object then to the light source. If the ray from the object to the light source is obstructed, it's original hit pont iis in shadow and these rays are hence called shadow rays

