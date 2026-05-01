## Problem
> testing-suite@0.1.0 test > react-scripts test PASS src/_tests_/Input.test.js PASS src/_tests_/Card.test.js PASS src/_tests_/Button.test.js FAIL src/App.test.js ● renders learn react link TestingLibraryElementError: Unable to find an element with the text: /learn react/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

## Solution
Your tests are actually fine. The failure is just a leftover ghost from the default Create React App template 👻

Right now, your App.test.js is still trying to find "learn react", but your app clearly shows:

"Testing Suite"
"Click Me"
"Hello Card"
input field

So Jest is basically saying:
"I looked everywhere… that text does not exist."

Delete the file (also acceptable)

If your assignment only requires testing components, you can simply delete:

src/App.test.js

Run again:

npm test

Boom. All green ✅
