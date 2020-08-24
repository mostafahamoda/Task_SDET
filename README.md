# testcafe

This is the **project_Final** test for [phptravels](https://www.phptravels.net/register).


## Install

```
npm install testcafe -g
```

## Usage

When you run tests from the command line, you need to write this command
testcafe Test21.js --skip-js-errors

## Included Files 
Test21.js -> This file contains all the tests that run on the given webpage 
.testcaferc.json -> Configuration file, testcafe will look for that exact file name in the root directory of the project to get configuration 
page-model.js -> This file cintains the Selectors that is used by testcafe to identify different fields and elements in the DOM of the page 
httpLog.txt -> This file contains the http interceptor response header data ...
report3.html -> Summary report created after the run of Test21.js by testcafe, it contain the case and results of every test case note: that the test case failure is that the test case gives different results than expected 
screenshots -> This Directory contain the screenshots taken of the failed test cases
## Solution 
Testcafe is used to test the phptravels signup page, different fields of the signup page is checked for given features (like the uppercase letter for firstname ..)
a testcafe global fexture called Test is used to perform different tests, a http interceptor is used to hook up the connection betweeb the server and the webpage 
the Test21.js contain a number of tests that write on different webpage fields and then click the submit buttom and check for the response,
A logger is used to obtain the http interceptor data and is saved per-order in httpLog.txt file for later observation,
page-model.js is used to create a model of the given webpage containing different selectors and DOM desired elements,
the page-model.js is included in the Test21.js source file and different features is imported from that file separately, 
a .json file is used to inject the desired different test information to the test API's, and a for loop is used to loop over different elements,
a reporter is used to generate a html report that explain the different test cases and their results whether as expected or not, 
a screen shot is taken in case of test failure and is saved in the screen shot directory,
## Features
a) A separate json file (testFieldValues.json) contains the values for different values so any modification to be made there without modifying the Test21.js file 
b) In case of failure of one og the test, it doesnot affect the procedure of rest of other cases
c) A Separate page-model file is used to contain the features of the desired webpage 
d) Configuration file can be modified easily 
e) An easily used reporter to produce desired custome reports 
f) Testcafe does not neet to initiate a web deiver but uses it's own proxy for testing 
g) Testcafe has a really good comunity which would be very helpful 
h) The ability to use more than one browser to test
## Limitation 
a) Selector of Different web pages need to be Identified manually 
b) High number of tests may take a while to proceed 
## Author
mostafahamoda 
