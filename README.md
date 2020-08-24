# testcafe

This is the **project_Final** test for [phptravels](https://www.phptravels.net/register).


## Install

```
npm install testcafe -g
```

## Usage

When you run tests from the command line, you need to write this command
testcafe Test21.js --skip-js-errors

```
testcafe chrome 'path/to/test/file.js' --reporter my-reporter
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('my-reporter') // <-
    .run();
```

## Author
mostafahamoda 
