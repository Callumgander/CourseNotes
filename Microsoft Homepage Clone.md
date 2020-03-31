# Microsoft Homepage Clone

- Done using this tutorial (https://www.youtube.com/watch?v=uKgn-To1C4Q)
- Image URLs taken from here (https://codepen.io/bradtraversy/details/ZEGGNRb)

Order of operations
- create a index.html, style.css and a folder for the imgs
- add boilerplate html with emmet
- change title, add link take to the style.css
- ! add a bit js so that you can click the menu button and have the menu slide open on smaller screens#
- create a div with class of container
  - create a nav tag in it with class of main-nav
    - create an img tag with the logo img as the source
    - create a unordered list with class of main-menu
      - add 6 items to the list (office, windows, surface, xbox, deals, support)
    - create another unordered list with class of right-menu
      - add a list item with a link tag and an icon inside of that with the font-awesome search icon
      - add another list item with a link tag and an icon inside of that with the font-awesome shopping-cart
- get a cdn for font-awesome from cdnjs and put it above the style.css

- add the base style for the css
- to *, set the box-sizing to border-box, margin to 0, and padding to 0
- to body, set the font-family to Segoe UI, Tahoma, Geneva, Verdan, sans-serif, the background to white #fff, the color to black #000, font-size 15px, line-height to 1.5
- to a tags, set the color to #262626 and text-decoration to none
- to ul tags, set the list-style to none
- to container classes, set the width to 90% and the max-width to 1100px, and the margin to auto
- add a Nav comment to signify where the styling for the nav is
- to the main-nav class, set the display to flex, justify-content to space-between, align-items to center, the height to 60px, the padding to 20px to the top and bottom and 0 to the left and right, the font-size to 13px
- to the main-nav ul, set display to flex
- to the main-nav ul.main-menu, set flex to 1 and margin left to 20px
- to main-nav.logo, set the width to 110px
- to main-nav ul li, set the padding to 0 on top and bottom and 10px on the left and right
- to main-nav ul li a:hover, so when you over the link, set the border-bottom to 2px, solid and with the color #262626
- to main-nav ul li a, set the padding-bottom to 2px so that way the line is pushed down a bit more

- Go back to the html
- Under the nav, add a comment for the showcase
- add a header tag with the class of showcase
  - add a h2 called surface deals
  - add a paragraph tag and copy and paste in the surface deals text
  - add a link tag with a class of btn with the text "Shop Now" with an icon with the class of a chevron right icon

- Go back to the CSS to style the button and the showcase
- to the btn class, set cursor to pointer so that it's a pointer when you hover over it, the display to inline-block, the border to 0, the font-weight to bold, the padding to 10px top and bottom and 20px left and right, the background to #262626, the font-size to 15px
- to btn:hover, set the opacity to 0.9 to slightly lighten it as you go over it with the cursor
- make a showcase comment to show where the css is for the showcase
- to the showcase class, set the width to 100%, the height to 400px, the background url to the showcase img in the img folder with the properties of no-repeat center center/cover, the display to flex then reorientate the flex-direction to column, align the items to center, set justify-content to flex-end, set the padding-bottom to 50px, seet the margin-bottom to 20px
- to the showcase class's h2 and paragraphy, add a 10px to the margin's bottom
- to the showcase class's btn class, add 20px to the top margin

- Back to the html
- add a homecards 1 comment
- 