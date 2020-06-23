# Lab 26 --- Hooks API

In this lab, you will be creating a ToDo application, utilizing functional components and the Hooks API

## Application Overview

Your ToDo application should have the following features: 

* Users should have access to a form where a new ToDo task can be added. This form should have the following fields: 
  * Task Description / Text
  * Assigned To
  * Status (complete or incomplete)
  * Difficulty (a number between 1 and 5)
* When users submit their new task form, they should see their task appear in a list of current tasks. This list should allow you to select any task to toggle it from complete to incomplete or vice versa. 
  * For this lab, your application does not have to persist tasks after application reload / refresh.
* The title on the browser tab should update to show the number of incomplete tasks. For example, the title could read "4 Incomplete ToDo Items" or something similar. 

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
		Header.js
		Footer.js
		ToDo.js
		ToDoForm.js
		ToDoItem.js
		ToDoList.js
	/styles
		styles.scss
	App.js
	index.js
```

## Code Implementation

> The following outline below is a suggested implementation. Note that your lab does NOT have to constrain itself to these suggestions; there are many ways to code an application and we encourage creativity and unique approaches! This suggested implementation is primarily for anyone who is having trouble knowing where/how to start.

Note that for this lab, **all components must be functional components**. Do not use class components. 

### index.js

This file should in most cases be left unchanged.

### App.js

This will be the main content container for your application. In this file, you should import your Header, Footer and ToDo components, and display them in some order/layout. You may also add additional HTML within this component's render function. This file should also import your SASS styles from `styles.scss`.

### components/Header.js

This component should be a simplistic header, which displays the title of the application, your name, and any other details you feel useful. 

### components/Footer.js

This component should be a simplistic footer, which provides links to your LinkedIn, social media, or anything else you feel useful. 

### components/ToDo.js

This component will be the wrapper for all ToDo functionality, and will manage the state for all the ToDo sub-components. This file should import the ToDoForm and present it on the page, and it should also provide a list of the current ToDo tasks using the ToDoList component. 

### components/ToDoForm.js

This component should create an entry form that will allow users to add a new task item to their ToDo list. The fields this component should include are: 

* Task Description / Text (textarea entry)
* Assigned To (name entry)
* Status (complete or incomplete checkbox / toggle)
* Difficulty (a number between 1 and 5)

This form should also have a submit button; when clicked the form data will be sent to the ToDo component to create a new ToDo item in the list. 

### components/ToDoItem.js

This component should take in all the information for a single ToDo task item as props, and then render that information in certain HTML layout. It should also create a toggle to mark the task as complete or incomplete, initialized to whatever was specified in the initial task creation. 

### components/ToDoList.js

This component should render all the current existing ToDo task items, utilizing ToDoItem to render each individual task. 

Within this component, you might want to implement a `useEffect()` hook to change the title of the browser with the incomplete task count.

### tests

Write enzyme tests for your components to fully test rendering and behavior on user interaction. You **do not** need to do any snapshot testing for this lab. 

### Stretch Goal

Implement some method to persist the ToDo tasks over browser reloads by sending the data to an API which saves the content to a database. Every time the application mounts, ping this API to get the current saved ToDo tasks. Every time a task is modified (for example, toggled from incomplete to complete or vice versa), update this task in the database using the API

## Design Implementation

There are no specific design requirements for this lab, except that any style code must be written in SASS. You may utilize an existing style library, such as [React Bootstrap](https://react-bootstrap.github.io/) to help with styling and to provide a starting collection of components. 

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