## Speaking Numbers between 0 and 2501

### Steps to install / run locally 

* Install Node Package Manager (NPM) and Node.js using this link: https://github.com/npm/npm

* In the command line, cd into the "numbers_speak" parent directory, and type "npm init" to initialize the node project

* Install the testing service "Mocha" using the command: "npm install --save mocha" or "npm install -g mocha" depending on storage preferences

* Open the "index.html" file, and type any integer string to see the spoken word output. 

* To test in the command line, first open the "number.js" and uncomment line 84. Then make sure you are in the parent directory and then type the command "mocha". To run the file in the HTML you'll have to comment out line 84 again. This wasn't ideal but served as a quick solution to a local error with Mocha and NPM.


### Process for completing
* Created simple test file using Mocha.
* Created intermediate functions (ones, teens, tens, hundreds)
* Created master function "speakNum"
* Updated tests to simplify for readability and consolidate around master function
* Refactored master function to be more semantic