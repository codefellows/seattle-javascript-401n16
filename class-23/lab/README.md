# Lab 23 --- Props and State

In this lab, you will be creating an application similar to Postman, called "RESTy". 

## Application Overview

Using the tools that we've covered, start to build out the RESTy app, which is a simple clone of Postman. This application should have a few areas of user input, which is then used to make an HTTP request using `fetch()`. 

Users should have the following interactable components: 

* A text input field to enter an API URL
* A collection of buttons / A select dropdown to choose which REST method to use (GET, POST, PUT or DELETE)
* A submit button that sends the request via HTTP

In this lab, you **do not** need to provide input fields for users to set their request headers or request body. We will be building upon this application in later labs. 

Once the user submits their chosen request, your application should carry out the request and then visually display the response headers and response body to the user. For this lab, you only have to code for APIs that return JSON data in the response body. The response JSON content should be "pretty printed", or properly tabbed / spaced. 

## Getting Started

For this lab, we will be using [CodeSandbox](http://codesandbox.io) to code and run your React application. This is primarily to speed up grading! Note that you can always code locally using `create-react-app` and then connect CodeSandbox to your repository when you're ready to submit. 

1. Create a repository for this lab which will hold your `README.md` and UML diagram
2. Set up the file structure for this lab according to the following outline:

> The following outline below is a suggested implementation. Note that your lab does NOT have to constrain itself to these suggestions; there are many ways to code an application and we encourage creativity and unique approaches! This suggested implementation is primarily for anyone who is having trouble knowing where/how to start.

```
package.json
.gitignore

/public
	index.html

/src
	/components
		RESTy.js
		Form.js
		Results.js
	App.js
	styles.scss
	index.js
```

## Code Implementation

> The following outline below is a suggested implementation. Note that your lab does NOT have to constrain itself to these suggestions; there are many ways to code an application and we encourage creativity and unique approaches! This suggested implementation is primarily for anyone who is having trouble knowing where/how to start.

### index.js

This file should in most cases be left unchanged.

### App.js

This will be the main content container for your application. In this file, you should import your RESTy, component and display it in some order/layout. You may also add additional HTML within this component's render function. Because this App component does not need to maintain state, consider making it a functional component instead of a class component.

This file should also import your SASS styles from `styles.scss`.

### components/RESTy.js

This component will be your major "smart" component in your application. It should manage state and call the `<Form>` and `<Results>` components, providing them all the information they need as props. The state that this component manages should include: 

* Request URL
* Request Type (GET, POST, PUT, DELETE)
* Response Headers
* Response Body

### components/Form.js

This component should render a text input field and a button series / select dropdown for users to enter in the request URL and type. Note that this should be a "dumb" *functional component* - do not save any state variables in this component. Instead, utilize functions passed via the props. 

This component should also render a "Submit" button, which on click will trigger a callback handler function defined in `<RESTy>` and passed down via props. 

### components/Results.js

This component will display the response in a prettified way. Note that this should be a "dumb" *functional component* - do not save any state variables in this component. Instead, it should take the response header object and the response body object as props and render from that. 

### tests

Write enzyme tests for your RESTy, Form and Results components. You **do not** need to do any snapshot testing for this lab. 

### Stretch Goal

Add a loading indicator or icon in the results area that is displayed in the time between when the user hits the submit button and gets a response from the API. The, when the response is received, replace the loading icon with the reponse content. 

## Design Implementation

Because this is a front end application, we will also be adding design implementation requirements to your lab. These design requirements should be coded in SASS (.scss or .sass) only, not CSS. Be creative with these requirements to fully flex your front end design skills!

> One possible design/layout. Please use your judgement and taste in styling your version of this application.

<img src="resty.png" width="600" >

### styles.scss (or styles.sass)

In this SASS file, add some styling for the RESTy, Form and Results components. Within your SASS code, you must:

-   Utilize at least one variable (for example `$backgroundColor`)
-   Utilize SASS nesting capabilities
-   Utilize partials
-   Utilize at least one mixin

### Stretch Goal

Add a loading indicator or icon in the results area that is displayed in the time between when the user hits the submit button and gets a response from the API. The, when the response is received, replace the loading icon with the reponse content. 

## Deployment

Deploy your lab application using a service of your choice. We recommend Netlify for ease of use. 

## Lab Submission

For this lab, you will be submitting a link to a `README.md` as usual, though this will contain a link to your CodeSandbox implementation instead of your PR.

-   `README.md`
    -   Ensure your lab `README.md` is well detailed in how to run your application
    -   Provide a link to your CodeSandbox project
    -   Provide a link to your deployed site
    -   Provide a [UML diagram](https://www.uml-diagrams.org/index-examples.html) detailing how the modules/files/pieces of your applications fit together.
-   Code Documentation / Cleanliness
    -   Ensure that your code is well formatted
    -   Ensure that all functions and classes within your code are documented with JSDoc comments
        -   [Official Documentation](http://usejsdoc.org/about-getting-started.html)
        -   [Cheat Sheet](https://devhints.io/jsdoc)
        -   [Style Guide](https://github.com/shri/JSDoc-Style-Guide)
        -   Be descriptive about the purpose of the function / class
        -   Declare data types for parameters and return values
        -   Note that you do not have to generate a JSDoc hosted website, just the commenting in your code files will suffice
-   Canvas Submission
    -   Submit a link to your lab's `README.md`
    -   Once your lab has been graded for the first time, you may resubmit the link to your lab's `README.md` exactly once for a regrade