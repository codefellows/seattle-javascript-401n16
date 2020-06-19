# Class 24 --- Routing and Component Composition

## Lecture Videos

[Tuesday]() || [Wednesday](https://www.youtube.com/watch?v=JPl9q1_CeGg)

## Lecture Overview

Apps written using a component framework such as React are generally composed of many components, assembled hierarchically to create a cohesive application. Components very often need to share state (data) and behaviors (methods). In addition to props and state, components can actually render other components as their children.

At the end of this class, you'll be able to:

-   [x] Understand `props.children`
-   [x] Understand component iteration 
-   [x] Be able to implement a simple multi-page application with routing 
-   [x] Create logical wrapper components
-   [x] Create functional wrapper components

Prior to class, review the readings below and answer the discussion questions in your reading repository.

## Reading

As our components get more complex, we're going to need new ways to define and interact with them. Moreover, we're going to need a way for our application to have distinct "pages" which load unique sets of components. 

In order to transform our application from a single page app to a multi page app, we will be using the package `react-router-dom`. This package allows us to essentially build a switch statement of what components are rendered based on the browser URL. 

```jsx
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Page01 from './components/Page01'; 
import Page02 from './components/Page02'; 

function App(props) {
  return (<BrowserRouter>
  	<Route path='/page01' exact={true}>
      <Page01 />
    </Route>
    <Route path='/page02' exact={true}>
      <Page02 />
    </Route>
  </BrowserRouter>);
}
```

The react router package exposes a `<BrowserRouter>` component. You can think of this as being a container around what the current URL path should show. It acts almost like a switch statement, only rendering the route where the `path` prop matches the URL. Within each `<Route>` component, you can add as many custom components as you like; these will be what the application chooses to render. 

An interesting feature of the `<Route>` component is that it takes and renders *other* components that are nested inside of it. How can we replicate that in our own custom components? For example, assume you had a custom `<Section>` component, which rendered a section container for content with some custom HTML: 

```jsx
function Section(props) {
  return (<section className='section-bleed'>
  	<div className='centered-container'>
      <img className='section-header-image' src={props.image}/>
      { /* some custom child content should go here */ }
    </div>
  </section>); 
}
```

We want this Section component to be versatile, so we don't want to define all of its internal contents. Some sections might have many paragraphs of text, others might have a bulleted list, etc. We want to let anything nested between the opening and closing `<Section>` tag to be pasted in a specified location. 

We can do this by utilizing the `props.children` object. This key value is automatically populated by React any time a component has content between its opening and closing tags: 

```jsx
function Section(props) {
  return (<section className='section-bleed'>
  	<div className='centered-container'>
      <img className='section-header-image' src={props.image}/>
      {props.children}
    </div>
  </section>); 
}
```

By adding `props.children`, we can now use our Section as follows and get the expected HTML output: 

```jsx
<Section image='http://xyz.png'>
	<p>My Section Content</p>
</Section>
<Section image='http://abc.png'>
	<ul>
  	<li>My list item</li>
  </ul>
</Section>
```

```html
<section class='section-bleed'>
	<div class='centered-container'>
    <img class='section-header-img' src='http://xyz.png'/>
    <p>My Section Content</p>
  </div>
</section>

<section class='section-bleed'>
	<div class='centered-container'>
    <img class='section-header-img' src='http://xyz.png'/>
    <ul>
  		<li>My list item</li>
  	</ul>
  </div>
</section>
```

Utilizing `props.children` makes our components much more powerful and versatile. Now we can define our own custom wrappers, or we can implement components with display logic akin to `BrowserRouter` and `Route`. 

### External Reading / Viewing

Save or skim through the following links to help broaden your understanding.

| Links                                                        |
| ------------------------------------------------------------ |
| [React Basics Recap](https://medium.freecodecamp.org/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-ee1d2f4b8030) |
| [props.children](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891) |
| [Browser Router Tutorial](https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/) |
| [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html) |
| [Browser Router API Docs](https://reacttraining.com/react-router/web/api) |

### Handy Code Snippets

Feel free to skim these code snippets, they are mainly here for your reference after class lectures.

#### Using React Router

```jsx
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Page01 from './components/Page01'; 
import Page02 from './components/Page02'; 

function App(props) {
  return (<BrowserRouter>
  	<Route path='/page01' exact={true}>
      <Page01 />
    </Route>
    <Route path='/page02' exact={true}>
      <Page02 />
    </Route>
  </BrowserRouter>);
}
```

#### Using React Router Link

```jsx
import React from 'react';
import { Link } from 'react-router-dom'; 

function NavBar(props) {
  return (<nav>
    	<Link to='/'>Home</Link>
      <Link to='/page01'>Page 01</Link>
      <Link to='/page02'>Page 02</Link>
    </nav>);
}
```

## Discussion Questions

Create a new markdown page in your reading notes repo for this class. On that page, answer the following questions. You will not be graded on correctness, but rather on your attempt to answer the question. Once you've created your new page, submit a link to that page using the canvas discussion entry field. Links should be somewhat of the format `https://USERNAME.github.io/reading-notes/class-##-reading`.

1. Why do we not need more `.html` pages in a multi-page React app? 
2. If we wanted a component to show up on every page, where would we put it and why?
   - Outside the `<BrowserRouter/>`
   - Inside the `<BrowserRouter />`, outside a `<Route />`
   - Inside a `<Route />`
3. What does `props.children` contain? 