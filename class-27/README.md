# Class 27 -- Custom Hooks

## Lecture Videos

[Saturday Morning](https://www.youtube.com/watch?v=2izqjP56QaQ) || [Saturday Afternoon](https://www.youtube.com/watch?v=W4ClX0yinZo)

## Lecture Overview

In our last class, we covered two fundamental hook functions, `useState` and `useEffect`. While there are more standard hook functions, we are going to side-step and talk about creating your own custom hook function. These custom hooks allow you to modularize logic that uses any of the standard hook functions (`useState`, `useEffect`, `useReducer` and `useContext`), and can be extremely useful to create in large scale applications. 

At the end of this class, you'll be able to:

-   [x] Understand the structure of a custom hook
-   [x] Describe use-cases for custom hooks
-   [x] Create custom hooks for 
    -   [x] Fetching API data 
    -   [x] Socket.io connections 

Prior to class, review the readings below and answer the discussion questions in your reading repository.

## Reading

"Custom hooks" is a complex term for something we're already very familiar with: *modularization*. This can be very useful because you can create module files that export various hook functions for you to use anywhere in your application. 

The definition of a custom hook is completely up to the developer; for all intents and purposes a custom hook is just a function that uses one or more of any other established hook functions. You can define custom function parameters and return values, thus allowing for many possibilities! You can technically even create a hook that *does not* use any other existing hook functions. However, in that case you really just have a simple function, and using the hook nomenclature can be misleading. 

Unlike functional components, custom hooks do not render anything. They are meant to run some JavaScript functionality. All custom hooks must also start with the word "use". This tells the React linter that it is acceptable for that function to utilize other hook functions inside of it. 

Here's an example of a possible custom hook that could be used throughout an application. This hook allows you to detect when a certain key is pressed down or not. 

```jsx
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}
```

By modularizing this complex logic into a custom hook, we can now get the value of a statebound variable easily. 

```jsx
function App() {
  // Call our hook for each key that we'd like to monitor
  const happyPress = useKeyPress('h');
  const sadPress = useKeyPress('s');
  const robotPress = useKeyPress('r');
  const foxPress = useKeyPress('f');

  return (
    <div>
      <div>
        {happyPress ? '😊' : ''}
        {sadPress ? '😢' : ''}
        {robotPress ? '🤖' : ''}
        {foxPress ? '🦊' : ''}
      </div>
    </div>
  );
}
```

As you can see, because we have the `use` work prefixed on our custom hook, React will treat this function differently, allowing the function to return a stateful variable. We don't need to ever set the value of the stateful variable in our App component, so we only receive the *getter* and not the setter. This drasitically simplifies our component code! 

Custom hooks offer the flexibility of sharing logic that wasn’t possible in React components before. You can write custom hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. What’s more, you can build hooks that are just as easy to use as React’s built-in features. Check out some of the resources below to see more examples of custom hooks.

### External Reading / Viewing

Save or skim through the following links to help broaden your understanding.

| Links                                                        |
| ------------------------------------------------------------ |
| [Custom Hooks - All You Need to Know](https://www.telerik.com/blogs/everything-you-need-to-create-a-custom-react-hook) |
| [Async Hooks](https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g) |
| [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer) |
| [React Custom Hooks](https://reactjs.org/docs/hooks-custom.html) |
| [Use Hooks](https://usehooks.com/)                           |
| [Hooks List](https://github.com/rehooks/awesome-react-hooks) |
| [10 Essential React Hooks](https://blog.bitsrc.io/10-react-custom-hooks-you-should-have-in-your-toolbox-aa27d3f5564d) |

## Discussion Questions

Create a new markdown page in your reading notes repo for this class. On that page, answer the following questions. You will not be graded on correctness, but rather on your attempt to answer the question. Once you've created your new page, submit a link to that page using the canvas discussion entry field. Links should be somewhat of the format `https://USERNAME.github.io/reading-notes/class-##-reading`.

1. Why do custom hooks need the `use` prefix? 
2. What do custom hooks usually do? 
3. Using the links above, list one custom hook that you would be interested in trying/using. 

