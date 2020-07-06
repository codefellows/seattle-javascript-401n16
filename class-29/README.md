# Class 29 --- Application State with Redux

## Lecture Videos

[Tuesday]() || [Wednesday]()

## Lecture Overview

Managing global state at the application level can definitely be a challenge. While the Context API provides a mechanism to accomplish this very tactically, **Redux** is a library that specializes in sharing state between components using something called a global "store". In this class, we'll get started with learning the ins and outs of Redux. 

At the end of this class, you'll be able to:

-   [x] Understand the conceptual idea of global state management
-   [x] Understand the role of actions and reducers
-   [x] Implement a simple Redux store for your application

Prior to class, review the readings below and answer the discussion questions in your reading repository.

## Reading

Throughout our discussions of React, we have consistently been manageing the state of different components. State variables are essential in React applications - these varaibles allow us to update the UI a user sees in a very efficient and fast way. 

So far, we know of a few ways to share state variable *values*: 

- Directly from parent to child by passing the state variable in the child's `props`
- From an enclosing context, which stores the variable in it's `value`

And a few ways to share state variable *setters*:

* By passing a setter callback function from parent to child using `props`
* By having the components wrapped in a context, which exposes a setter callback function 

All of these interactions have been from ancestor -> descendant. However, as you may have noticed with the use of contexts, if your "ancestor" is your `<App>` component, then every subsequent component is by nature a `descendant`, and the ancestor -> descendant relationship no longer becomes a major concern. 

This is the same idea behind a Redux store. You can think of this store as a single context that wraps the whole application. The store will save all the stateful variables across the entire application. When any of those variables change, it will efficiently search for the components that rely on those variables, and re-render them. In order for a component to use variables in the store, it will need to `connect` to the store, similar to how a component specifies that it is a consumer of a provider's context. 

A Redux store has three major components: 

* The stored global **state**
* One or more **reducer** functions which determine how to update the state
* One or more **actions** that are "dispatched" by individual components, triggering a reducer to be called

While actions and reducers may sound like complex terms, really they are just a new type of *setter* for the store's stateful variables. Whenever you want to use a global state, there's a high chance that you will have a lot of stateful variables being stored. These variables may have complex relationships with one another. For example, take a look at the following scernario. 

Suppose you have a online shop application that is tracking four important variables:

```jsx
{
  customerName: 'Sarah Smalls',
  purchasedItems: 0, 
  itemsInCart: 0,
  cartSubtotal: 0, 
}
```

When the customer fills their cart, the `itemsInCart` and `cartSubtotal` stateful variables should update. When the customer purchases items, the `purchasedItems`, `itemsInCart` and `cartSubtotal` stateful variables should update. To describe these two scenarios, we will create two actions, `ADD_TO_CART` and `PURCHASE`

> Note: It is a standard convention to write action names in all uppercase letters.

In our components, when we want to trigger an action, we will dispatch it, along with some data payload. This is similar to triggering an event! 

```jsx
// component code 

... 

addToCart(e) {
  	props.dispatch({ 
      type: 'ADD_TO_CART', 
      payload: {
        itemId: 1234,
      	itemPrice: 10.99
      }
    }); 
}

...

<button onClick={addToCart}>Add to Cart</button>
```

If the component is properly connected to the store, then this dispatch action will trigger the store's reducers to be called. This is similar to how handlers are called when an event is triggered. A store's reducer function has the following structure: 

```javascript
const reducer = (state, action) => {
	let newState = {...state}
  
  switch(action.type) {
      //...
  }
  
  return newState;
}
```

As you can see, there are two parameters for a reducer function, the current state and the action object that was dispatched (containing the action type and payload). The current state object is populated by Redux, similar to how an `onClick` event will auto-populate the `event` or `e` parameter. 

A reducer's purpose is to take in the current state and an action, and then determine how to modify the state based on the action. This is why it is common to begin each reducer function with copying the current state (you can't mutate / change the state parameter directly) and then running a switch statement based on the type of action. The body of the switch statement is up to the developer; they define their actions so they should also define the action behavior! Here's how our `ADD_TO_CART` and `PURCHASE` actions might be coded, based on the scenario described above. 

```javascript
const reducer = (state, action) => {
	let newState = {...state}
  
  switch(action.type) {
    case 'ADD_TO_CART': 
      newState.itemsInCart++; 
      newState.cartSubtotal += action.payload.itemPrice; 
      break;
    case 'PURCHASE': 
      newState.purchasedItems += newState.itemsInCart;
      newState.itemsInCart = 0; 
      newState.cartSubtotal = 0; 
    	break;
    default: break
  }
  
  return newState;
}
```

The modified `newState` is then returned by the reducer, and Redux will use this returned value as the new current global state of the application. You can set the initial state of your application by overridding the `state` parameter on the case where it is `null`, which it will be at the start of your application's lifecycle. 

```javascript
const initialState = {
	customerName: 'Sarah Smalls',
  purchasedItems: 0, 
  itemsInCart: 0,
  cartSubtotal: 0, 
}

const reducer = (state = initialState, action) {
  //...
}
```

The final thing to tackle is actually connecting an individual component to the store. As you saw in our `dispatch` example, we specifically called `props.dispatch`. How does this component get that prop variable set to something the Redux store understands as an "event trigger"? The answer is through Redux's `connect` operation: 

```jsx
import React from 'react';
import { connect } from 'react-redux';

function MyComponent(props) {

 function addToCart(e) {
  	props.dispatch({ 
      type: 'ADD_TO_CART', 
      payload: {
        itemId: 1234,
      	itemPrice: 10.99
      }
    }); 
	}
  
  return (
    <>
    	<span>You have {props.itemsInCart}</span>
  		<button onClick={addToCart}>Add to Cart</button>
    </>
  ); 
}

const mapStateToProps = state => ({
  itemsInCart: state.itemsInCart,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dispatch: dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyComponent);
```

The `connect` function, exposed by `react-redux`, allows us to bind this component to the stateful global store. In doing so, any global state variables we want to use are bound to prop key-value pairs, specified by us in the `mapStateToProps` function. Likewise, the `dispatch` function is added to the props under the key `dispatch`, specified by our `mapDispatchToProps` function. Through this, we can communicate with the global state / store using our props. 

### External Reading / Viewing

Save or skim through the following links to help broaden your understanding.

| Links                                                        |
| ------------------------------------------------------------ |
| [Dan Abramov Redux Tutorials](https://egghead.io/courses/getting-started-with-redux) |
| [World's Easiest Guide to Redux](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6) |
| [Testing with Redux and Enzyme](https://medium.com/netscape/testing-a-react-redux-app-using-jest-and-enzyme-b349324803a9) |
| [Testing Reducers](https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1) |
| [Redux Docs](https://redux.js.org/)                          |
| [enzyme-redux npm module](https://www.npmjs.com/package/enzyme-redux) |
| [Middleware Tests with a Mock Store](https://gist.github.com/johncokos/4902683c8e33ed38fb2ba066b8764831) |

## Discussion Questions

Create a new markdown page in your reading notes repo for this class. On that page, answer the following questions. You will not be graded on correctness, but rather on your attempt to answer the question. Once you've created your new page, submit a link to that page using the canvas discussion entry field. Links should be somewhat of the format `https://USERNAME.github.io/reading-notes/class-##-reading`.

1. Why would you wrap your entire application within a context? 
2. What is the purpose of a reducer? 
3. What does an `action` contain? 
4. Why do we need to copy the state in a reducer? 