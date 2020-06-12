# Class 22 --- React Testing and Deployment

## Lecture Videos

[Tuesday](https://www.youtube.com/watch?v=alHvQY-Ln3A) || [Wednesday](https://www.youtube.com/watch?v=-TTwS6lFZ9E)

## Lecture Overview

We should now have some understanding of how React breaks up our UI into small, modular components. React allows you to join HTML and JavaScript into a single file, and that unlocks a lot of unique ways to structure our UI.

When we are testing backend code, mostly we test function input and output. How do we translate this into user interface testing? In user interfaces, usually we're not running functions with inputs and outputs, instead we're rendering HTML and responding to user input. In this class, we'll learn new ways of testing to ensure that our UI components work as expected. 

At the end of this class, you'll be able to:

-   [x] Test a React application using: 
    -   [x] Snapshot testing
    -   [x] Shallow mount testing
    -   [x] Full mount testing 
-   [x] Deploy a React application using `npm build`
    -   [x] Deploy to GitHub Pages
    -   [x] Deploy to AWS S3
    -   [x] Deploy to AWS Amplify 
    -   [x] Deploy to Netlify 

Prior to class, review the readings below and answer the discussion questions in your reading repository.

## Reading

When we learned about Test Driven Development (TDD), we learned that the goal is to write tests _before_ writing feature code. TDD assumes that tests are written first and will fail until the code is complete.

However, with UI, we usually want to take a different approach. One method of UI testing is to write **snapshot** tests, and these tests usually cannot follow the TDD approach. A "snapshot" is a saved file with all the rendered HTML on a page at a certain point in time. Then, subsequent tests attempt to dynamically render that page, and verify that the HTML matches the saved snapshot. 

A snapshot test is useful for a fully developed UI page that you want to ensure does not change throughout development. Thus, the usecase of snapshot test can be limited - they are most useful when a completed application is undergoing some refactoring. If you are consistently changing your UI, any saved snapshots will quickly become out of date, and will incorrectly cause your tests to fail. 

So what other testing options are there? We can use a tool called [Enzyme](https://airbnb.io/enzyme/) to help us render and execute our individual components, instead of attempting to test a fully rendered webpage as a whole. Enzyme allows for **full mounting** and **shallow mounting** tests. 

The term "mount" in the world of software typically means to run and maintain the lifecycle of a piece of software. While the software is "mounted", it is running. When it is "unmounted", the software has been killed and is no longer accessible. 

In the world of React, mounting typically refers to rendering a component and keeping it rendered. This can happen independently of the entire application, so you can really focus in on a single component's execution. 

Full mounting allows you render the entire component as well as any children components. This allows you to fully test the current component and any components it imports. Shallow mounting minimized the render of any imported components, and instead focuses on fully rendering the current component only. Both full mounting and shallow mounting allow you to test the values of state and props variables, which is very powerful! This allows you to ensure that the state changes as expected, or that the props passed in are used as expected. 

Enzyme also allows for **render testing**, which is a kind of mix of snapshot and mount testing. Render testing focuses only on the rendered HTML, and does not have access to state or props variables. To test this component, you would then just ensure that the rendered HTML looks as expected. This can be a good option for testing small components quickly. 

To check that the UI "looks as expected", Enzyme exposes some selector logic to search the rendered output for HTML elements. This is similar to JQuery or CSS selector logic, where you can find an HTML element based on the element tag, class name, id, etc. 

Alongside testing, during this class we will also be exploring the deployment of a React application. While developing, React uses a Node service to create a live website that refreshes as you write code. When you deploy your website however, this functionality is not needed. Because of this, React provides a build script that optimizes your React code for production deployment. Once run, this script creates a seemingly static website with just an `index.html`, JavaScript files and compiled CSS files. The created JavaScript code, however, is complex and optimized using all of the React library features.  

Because these build files are simple website files, you can deploy a React application through any method in where you can create a live website. 

### External Reading / Viewing

Save or skim through the following links to help broaden your understanding.

| Links                                                        |
| ------------------------------------------------------------ |
| [Jest Testing with React](https://create-react-app.dev/docs/running-tests/) |
| [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing) |
| [Static Rendering - Enzyme](https://airbnb.io/enzyme/docs/api/shallow.html) |
| [Shallow Mounting - Enzyme](https://airbnb.io/enzyme/docs/api/render.html) |
| [Full Mounting - Enzyme](https://airbnb.io/enzyme/docs/api/mount.html) |
| [AWS S3 Deployment](https://www.youtube.com/watch?v=Kay-UvVCNFs) |
| [AWS Amplify Deployment](https://www.youtube.com/watch?v=DHLZAzdT44Y) |
| [Netlify Deployment](https://www.youtube.com/watch?v=sGBdp9r2GSg) |

### Handy Code Snippets

Feel free to skim these code snippets, they are mainly here for your reference after class lectures.

#### Build Application 

```
npm run build 
```

```
yarn run build
```

#### Snapshot Test

```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.js';

describe('App component', () => {
    it('renders correctly via snapshot test', () => {
        const page = renderer.create(<App />).toJSON();
        expect(page).toMatchSnapshot();
    });
});
```

#### Updating a Snapshot

```
jest --updateSnapshot
```

#### Mount Testing

```javascript
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from '../components/MyComponent';

configure({ adapter: new Adapter() });

describe('My component', () => {
    it('correctly changes the state variable *count* on button click', () => {
        let component = mount(<MyComponent />);
        let btn = component.find('button#my-btn');

        btn.simulate('click');
        expect(component.state('count')).toBe(1);
    });
});
```

## Discussion Questions

Create a new markdown page in your reading notes repo for this class. On that page, answer the following questions. You will not be graded on correctness, but rather on your attempt to answer the question. Once you've created your new page, submit a link to that page using the canvas discussion entry field. Links should be somewhat of the format `https://USERNAME.github.io/reading-notes/class-##-reading`.

1. Describe a case where snapshot testing would be useful, and describe another case where it would be ineffective.
2. What is the difference between full mount and shallow mount? 
3. What does `npm run build` do? 
