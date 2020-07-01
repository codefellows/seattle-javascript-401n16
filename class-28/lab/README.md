# Lab 28 --- Context API

In this lab, you will be extending your ToDo application to share data using contexts. The data will act like "settings" upon the application.

## Application Overview

Your ToDo application should have the following features: 

* You should have a settings component that lets users toggle the following features: 
  * The maximum number of items on the screen, causing pagination if number of tasks exceeds this 
  * Whether to show or hide tasks that have the status "complete"

* Tasks should be persisted across page reloads through the use of an API, either your own or the provided [401 API server](https://todo-server-401n16.herokuapp.com/api/v1/todo) - See API documentation [here](https://todo-server-401n16.herokuapp.com/api-docs)
  * Note that when using the provided server, there may be multiple students changing the saved database tasks. 
* Users should be able to delete existing tasks by clicking a "delete" button on each task item.
* Users should have access to a form where a new ToDo task can be added. This form should have the following fields: 
  * Task Description / Text
  * Assigned To
  * Status (complete or incomplete)
  * Difficulty (a number between 1 and 5)
* When users submit their new task form, they should see their task appear in a list of current tasks. This list should allow you to select any task to toggle it from complete to incomplete or vice versa. 
* The title on the browser tab should update to show the number of incomplete tasks. For example, the title could read "4 Incomplete ToDo Items" or something similar. 

## Getting Started

For this lab, we will be using [CodeSandbox](http://codesandbox.io) to code and run your React application. This is primarily to speed up grading! Note that you can always code locally using `create-react-app` and then connect CodeSandbox to your repository when you're ready to submit. 

1. Create a branch on your lab 27 repository, or create a new repository for this lab.
2. Set up the file structure for this lab according to the following outline:

> The following outline below is a suggested implementation. Note that your lab does NOT have to constrain itself to these suggestions; there are many ways to code an application and we encourage creativity and unique approaches! This suggested implementation is primarily for anyone who is having trouble knowing where/how to start.

```
package.json
.gitignore

/public
	index.html

/src
	/hooks
		useForm.js
		useFetch.js
	/components
		Header.js
		Footer.js
		Settings.js
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

Note that for this lab, **all components must be functional components**. Do not use class components. You **must** implement and use two custom hooks, `useForm` and `useFetch`. You must also use the `useContext` hook. 

### index.js

This file should in most cases be left unchanged.

### App.js

This will be the main content container for your application. In this file, you should import your Header, Footer and ToDo components, and display them in some order/layout. You may also add additional HTML within this component's render function. This file should also import your SASS styles from `styles.scss`.

### components/Header.js

This component should be a simplistic header, which displays the title of the application, your name, and any other details you feel useful. 

### components/Footer.js

This component should be a simplistic footer, which provides links to your LinkedIn, social media, or anything else you feel useful. 

### components/Settings.js

This file should render out a form that allows users to adjust the settings of the application. In order to change the settings, this component must tap into a context and modify the context value. The following settings must be implemented: 

* Task Display Count - the number of tasks to display on the page at once. If the total task count exceeds this, implement **pagination**
  * Pagination will result in only the first `n` items in the list being displayed, where `n` is set Task Display Count
  * If you have more than `n` items, add a button labeled `next` that will replace the list with the next `n` items in the list.
  * If you are past the first `n` items (i.e. on page 2 or higher), add a button labeled `previous` that will replace the list with the previous `n` items in the list.
* Show/Hide Completed - a toggle to decide if tasks with status completed are shown. 

### components/ToDo.js

This component will be the wrapper for all ToDo functionality, and will manage the state for all the ToDo sub-components. This file should import the ToDoForm and present it on the page, and it should also provide a list of the current ToDo tasks using the ToDoList component. It should also load and update the tasks in the API's database. 

### components/ToDoForm.js

This component should use the `useForm` custom hook to handle form submission, entry field update, and entry value storing. 

This component should create an entry form that will allow users to add a new task item to their ToDo list. The fields this component should include are: 

* Task Description / Text (textarea entry)
* Assigned To (name entry)
* Status (complete or incomplete checkbox / toggle)
* Difficulty (a number between 1 and 5)

This form should also have a submit button; when clicked the form data will be sent to the ToDo component to create a new ToDo item in the list. This new task should be saved to the API's database. 

### components/ToDoItem.js

This component should take in all the information for a single ToDo task item as props, and then render that information in certain HTML layout. It should also create a toggle to mark the task as complete or incomplete, initialized to whatever was specified in the initial task creation. A delete button should be exposed, allowing users to delete that task. 

Note that any changes to the task should be persisted to the API's database, so make POST, DELETE, PUT, etc. requests as needed.

### components/ToDoList.js

This component should render all the current existing ToDo task items, utilizing ToDoItem to render each individual task.

Within this component, you might want to implement a `useEffect()` hook to change the title of the browser with the incomplete task count.

> Stretch Goal: Can you pull out the `useEffect` call for changing the document title into a custom (more generic) hook for editing the document title? 

### hooks/useForm.js

This file should contain the definition for the `useForm` hook. This hook should export two things: a `handleSubmit` function, and a `handleChange` function. It may optionally export a `data` object containing all the current form values. Any component should be able to use the handle functions to manage form change and submission. Here's an example of how this hook might be used: 

```jsx
const {handleSubmit, handleChange} = useForm(callback); 
//....
return (<>
	<input name='fname' type='text' onChange={handleChange} />
  <button type='submit' onClick={handleSubmit}>Submit</button>
</>); 
```

> Note: For the `<input>` in this example, we haven't specified a `value` attribute. When a component initilizes with blank values, we actually don't need to "value-bind" the input fields. This is primarily only used when there is an existing initial value. 

### hooks/useFetch.js

This file should contain the definition for the `useFetch` hook. This hook should export a function to allow the request object to be set, as well as a `response`, `error` or `isLoading` object. When the request object is set, it should carry out a fetch request and change `isLoading` to true until a response is received. The response should then be stored in `response` or `error` based on what the API returned. Here's an example of how this hook might be used: 

```jsx
const { setRequest, response, error, isLoading } = useFetch(); 
//....
return (<>
  <button 
    type='button' 
    onClick={() => {setRequest({
      type: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon'
    }); }}
  >Fetch Pokemon</button>
  
  {isLoading && <LoadingGif />}
  {response && <ResponseDisplay data={response}/>}
  {error && <ErrorDisplay data={error}/>}
</>)
```

### Stretch Goal

The stretch goal for this lab is to provide a "Settings" page for your users using routing. From this page, allow the user to modify their settings, and then save those settings to local storage so that it persists on reload. 

### tests

Write enzyme tests for your components to fully test rendering and behavior on user interaction. You **do not** need to do any snapshot testing for this lab. 

## Design Implementation

There are no specific design requirements for this lab, except that any style code must be written in SASS. You may utilize an existing style library, such as [React Bootstrap](https://react-bootstrap.github.io/) to help with styling and to provide a starting collection of components. 

You are however, required to implement some visual distinction between a complete task item and an incomplete task item. 

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