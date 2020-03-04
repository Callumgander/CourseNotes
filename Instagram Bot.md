Instagram Bot

- Using this tutorial https://www.youtube.com/watch?v=d2GBO_QjRlo

Installation and set up

- initialize virtual python environment with ```virtualenv -p python3 venv```
-  then activate it with ```source venv/bin/activate```
- install selenium, the only dependency for this project
- selenium allows you to automate activities in the browser
- download chromedriver and move it to usr/local/bin

- add a class for the bot InstaBot
- always need an init function with a class in python
- to start up  the webdriver

    ``` self.driver = webdriver.Chrome()```

- then point it to open instagram with

    ```driver.get("https://instagram.com")

- then just create an instance of that class to test that it works, using python3 main.py
- pass the account name and password as arguments into the InstaBot
- grab the log in buttons xml and make the driver click it
- grab the login and password fields, put the relevant info inside and grab the submit button and click
- once inside get the not now button and click
- to prevent the selenium window from closing at the end of execution, execute with python3 -i main.py to interact interactively with it 
- go to profile, grab followers button, click it, scroll down but not so fast as to trigger the see suggestions option, and scroll down until you are at the end of the list
- grab all items in the list and store their name properties inside names
- 