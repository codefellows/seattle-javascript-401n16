import React from 'react';
import useFetch from '../hooks/useFetch';

import { shallow } from 'enzyme';

function HookWrapper(props) {
    return <div useFetch={props.useFetch}>test</div>;
}

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

describe('fetch mock works as expected', () => {
    it('lets us mock a success', async () => {
        let res = await fetch('blah', {});
        let data = await res.json();
        expect(data.myKey).toEqual('blah');
    });
    it('lets us mock a failure', async () => {
        let res = await fetch('blah', { headers: { shouldFail: true } });

        expect(res.status).toBe(400);
    });
});

describe('useFetch works as expected', () => {
    const component = shallow(<HookWrapper useFetch={useFetch} />);

    it('returns an error when it should fail', () => {
        const hook = component.find('div').prop('useFetch');
        let { setRequest, isLoading, error, response } = hook({
            headers: { shouldFail: true },
        });

        console.log(setRequest, isLoading, error, response);
        expect(setRequest).toBeInstanceOf(Function);
        expect(isLoading).toBe(false);
    });
});
