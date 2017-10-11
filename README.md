# Twitter Clone

## Description
This is a simple Twitter Clone for my Avant Interview. This includes an HTML, CSS, Javascript, and Python file.
This project was begun at 2pm and completed at 4pm. As such, there is much I would like to improve in the future, such as more styling and features (profile picture, login, etc).

### Project Notes
#### Environment
These functions have been tested on Ubuntu 14.04.5 LTS.
Tests done in VirtualBox on Ubuntu via Vagrant(1.8.6) using `python3` (version 3.4.3).

#### Running the web application:
To run this Twitter clone:
* clone this directory: ``
* If you are using Vagrant, make sure the following line is added for port forwarding.
  * `config.vm.network :forwarded_port, guest: 5000, host: 5050 # I expose the port 5000 of my vm to the port 5050 on my computer`
* Run the Python file: `python3 -m twitter_clone.py`
* In your browser, go to `localhost:5050/twitter_clone` to see the web application in action

## Files
All files must be executable to run. To add executable permissions to any file: `chmod u+x file_name`

##### [twitter_clone.py](twitter_clone.py)
Python file to set up the Flask application.

##### [templates/twitter_clone.html](templates/twitter_clone.html)
HTML for the Twitter Clone.

##### [static/styles/twitter_style.css](static/styles/twitter_style.css)
CSS to style the Twitter Clone.

##### [static/scripts/twitter_script.js](static/scripts/twitter_script.js)
Javascript with funcitons to show the hidden tweet form and to update the HMTL with additional tweets.

## Authors
Kristen Loyd        [Github](https://github.com/KRLoyd) |  [LinkedIn](https://www.linkedin.com/in/kristen-loyd-34984a92)

## License
Public Domain, no copyright protection