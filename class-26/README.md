# Class 26 --- Hooks API

## Lecture Videos

[Tuesday](https://www.youtube.com/watch?v=hbXu1OZaaCo) || [Wednesday](https://www.youtube.com/watch?v=fhntwHh3Mso)

## Lecture Overview

So far, we've been forced to use class components any time we want to manage state. This was an initial issue with the React library, but recently the developers of React relased a new API that mitigates this. Using the new Hooks API, we can tap into the features of a class component *while writing a functional component* instead! This reduces the code needed in our components and is overall a great improvement on writing React code. We'll review the basics of this API today. 

At the end of this class, you'll be able to:

-   [x] Understand the pros/cons of functional and class components
-   [x] Use the state and effect hooks within a function component
-   [x] Describe the lifecycle of a React component

Prior to class, review the readings below and answer the discussion questions in your reading repository.

## Reading

The Hooks API is an addition to the React library, introduced in React 16.8. The main functionality they provide is to replicate **state** and **lifecycle** methods that class components have, inside a functional component. Let's talk about each piece one at a time. 

Originally, state variables could only be created within a class component. The reason for this is that a class was able to "stay active" within the React structure, whereas functional components were run once and then no longer managed. Think of how a class instance exists as a variable and continues to store information throughout the life of your application. Meanwhile, functions are meant to be *run*, and don't typically "store" anything. 

However, in the realm of React, developers tended to favor functional components for their ease of implementation, and so Hooks were added as a way to enable that further. 

In order to get a state variable to exist on a functional component, we can now use the `useState` hook. This takes place of our class constructor and `setState` method. For example, here's how the same state variables would look in a class component, versus a functional component: 

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      count: 0, 
      name: ''
    }; 
  }
  
  changeCount(e) {
    this.setState({count: e.target.value}); 
  }
  
   changeName(e) {
    this.setState({name: e.target.value}); 
  }
  
  render() {
    return (<div>
    	<input type='number' value={this.state.count} onChange={this.changeCount.bind(this)}/>
      <input type='text' value={this.state.name} onChange={this.changeName.bind(this)}/> 
    </div>);
  }
}
```

```jsx
import React, {useState} from 'react'; 

function MyComponent(props) {
  const [count, setCount] = useState(0); 
  const [name, setName] = useState(''); 
  
  function changeCount(e) {
    setCount(e.target.value); 
  }
  
   function changeName(e) {
    setName(e.target.value); 
  }
  
  return (<div>
    	<input type='number' value={count} onChange={changeCount}/>
      <input type='text' value={name} onChange={changeName}/> 
    </div>);
}
```

As you can see, using a functional component saves on code length and complexity! 

Another feature that class components have is the ability to plug into **lifecycle** methods. These are functions such as `componentDidMount`, `componentDidUpdate`, etc. These are functions that are automatically called by React when a class component renders, mounts, changes, unmounts, etc. When we write our own class components, we can overwrite these function definitions to run our own code. 

In order to get this same feature in a functional component, the `useEffect` hook is available. This lets you define behavior to execute on component creation, component update, and component deletion. Thus, your functional component can access the same lifecycle moments that a class component can! 

```jsx
useEffect( () => {
  // what to do on component mount + update
  
  return () => {
    // what to do on component deletion / death
  }
}, [ /* any variables to watch for changes */]); 
```

Hooks largely improve our React coding workflow, but there are a few key rules to keep in mind: 

- Hooks must be named with a `use` prefix (such as `useState`, `useEffect`, `useContext`, etc).
- Hooks should only be defined/called at the top level, and never inside loops, conditions or nested functions. 
- Hooks should only be used in React functional components, and not in standard JavaScript functions. 

### External Reading / Viewing

Save or skim through the following links to help broaden your understanding.

| Links                                                        |
| ------------------------------------------------------------ |
| [Making Sense of Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) |
| [The State Hook](https://reactjs.org/docs/hooks-state.html)  |
| [Hooks API](https://reactjs.org/docs/hooks-overview.html)    |
| [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html) |
| [Effects Hook](https://reactjs.org/docs/hooks-effect.html)   |

## Discussion Questions

Create a new markdown page in your reading notes repo for this class. On that page, answer the following questions. You will not be graded on correctness, but rather on your attempt to answer the question. Once you've created your new page, submit a link to that page using the canvas discussion entry field. Links should be somewhat of the format `https://USERNAME.github.io/reading-notes/class-##-reading`.

1. What does a component's lifecycle refer to? 

2. Why are functional components preferred over class components? 

3. What is wrong with the following code? 

   ```jsx
   import React, {useState, useEffect} from 'react'; 
   
   function MyComponent(props) {
     const [count, setCount] = useState(0); 
     
     function changeCount(e) {
       setCount(e.target.value); 
     }
     
     let renderedItems = []
     
     for (let i = 0; i < count; i++) {
       useEffect( () => {
         console.log('component mount/update'); 
       }, [count]); 
       
       renderedItems.push(<div key={i}>Item</div>); 
     }
     
     return (<div>
       	<input type='number' value={count} onChange={changeCount}/>
         {renderedItems}
       </div>);
   }
   ```

   
