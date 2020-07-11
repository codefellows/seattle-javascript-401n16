import React from 'react';
import { shallow } from 'enzyme';
import UnsplashSearcher from '../components/UnsplashSearcher';

const component = shallow(<UnsplashSearcher />);

global.fetch = jest.fn((url, options) => {
    if (options.headers && options.headers.shouldFail) {
        return Promise.resolve({
            status: 400,
        });
    }

    return Promise.resolve({
        status: 200,
        json: () => {
            return Promise.resolve({
                myKey: 'blah',
            });
        },
    });
});

React.useState = jest.fn((init) => {
    let initCopy = init;

    const dummySetter = (value) => {
        initCopy = value;
    };

    return [initCopy, dummySetter];
});

React.useEffect = jest.fn((callback, dependencyArray) => {
    callback();
});

describe('UnsplashSearcher works as expected', () => {
    it('has all default state values', () => {
        let defaults = ['dogs', 10, 3];

        console.log(component.find('img').length);

        component.find('input').forEach((self, indx) => {
            expect(self.text()).toBe(defaults[indx]);
        });
    });
});
