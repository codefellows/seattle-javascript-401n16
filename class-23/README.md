# Class 23 --- Props and State

## Lecture Videos

[Saturday Morning]() || [Saturday Afternoon]()

## Lecture Overview

One important feature when implementing component-based UI is to communicate events and data across components. In a previous class, we learned how state variables act as local updating variables, and prop variables act as parameters given to a component. In this class, we'll blend the line between the two and uncover more features of state and props.

At the end of this class, you'll be able to:

-   [x] Understand properties upon HTML elements
-   [x] Understand how to use state as a property
-   [x] Be able to pass props from a container component to a child
-   [x] Execute methods in a parent component from a child
-   [x] Manage state from raised events 
-   [x] Handle form input

Prior to class, review the readings below and answer the discussion questions in your reading repository.

## Reading

Forms are one of the most common features of website development. With a complex collection of user input selections, it can be difficult to figure out the proper data storage routes. 

Using component-based UI thinking, when developing a form for a React app a lot of components might intersect. For example, you might have a component called `FormInput` which renders a label, some custom design, and an `<input>` field. This input field would have an `onChange` handler so that as the user types, the text content can be saved into a local state variable. 

However, this `FormInput` might be included as the child of a enclosing `Form` component. This `Form` component might have five `FormInput`s, all storing different data. How can the `Form` component easily get the data from each `FormInput`, even though state variables are typically local access only? 

The solution is through the usage of `props`. As discussed in a previous class, `props` are akin to parameters being passed from a parent component to a child component. 

What makes `props` so powerful is that it can send static variable data **or** entire functions! This allows us to define `onChange` handlers in a parent component, and then pass that handler function to a child component for it to utilize. Thus, when the handler is triggered, the parent component can save the entered value in *its* state variables, instead of having the child component manage it. Take a look at the example below: 

```jsx
// Child Component
function FormInput(props) {
  return (<div>
  	  <label>{props.label}</label>
      <input type='text' onChange={props.onChange} />
    </div>);
}
```

```jsx
// parent component
class Form extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      aInputValue: '', 
      bInputValue: '', 
      cInputValue: '', 
    }
  }
  
  aChanged(e) {
    this.setState({...this.state, aInputValue: e.target.value}); 
  }
  
  bChanged(e) {
    this.setState({...this.state, bInputValue: e.target.value}); 
  }
  
  cChanged(e) {
    this.setState({...this.state, cInputValue: e.target.value}); 
  }
  
  render() {
    return (<div>
      	<FormInput label='a' onChange={this.aChanged.bind(this)} />
      	<FormInput label='b' onChange={this.bChanged.bind(this)} />
      	<FormInput label='c' onChange={this.cChanged.bind(this)} />
      </div>); 
  }
}
```

This allows our child component to not worry about state and instead be a simple functional component, while our parent component manages the state variables for every input in the entire form. This process creates a **dumb** component and a **smart** component. Dumb components don't have complex application logic, and for the most part a dumb component can be dropped into almost any application. Smart components, however, perform a specific action for the application and typically have complex state management logic. 

By maximizing our number of dumb components, we can create more reuseable code that can greatly speed up development time. 

### External Reading / Viewing

Save or skim through the following links to help broaden your understanding.

| Links                                                        |
| ------------------------------------------------------------ |
| [SetState Explained](https://css-tricks.com/understanding-react-setstate/) |
| [Handling Events](https://facebook.github.io/react/docs/handling-events.html) |
| [Forms](https://facebook.github.io/react/docs/forms.html)    |
| [State and Lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html) |
| [Components and Props](https://facebook.github.io/react/docs/components-and-props.html) |

### Handy Code Snippets

Feel free to skim these code snippets, they are mainly here for your reference after class lectures.

## Discussion Questions

Create a new markdown page in your reading notes repo for this class. On that page, answer the following questions. You will not be graded on correctness, but rather on your attempt to answer the question. Once you've created your new page, submit a link to that page using the canvas discussion entry field. Links should be somewhat of the format `https://USERNAME.github.io/reading-notes/class-##-reading`.

1. Why might you want to create a `FormInput` component? 
2. Can a parent component access the state of a child component? 
3. What can be passed along in a prop variable? 
