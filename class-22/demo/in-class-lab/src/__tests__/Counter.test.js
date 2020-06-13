import React from 'react';
import Counter from '../components/Counter';

// shallow, mount, render

import { shallow } from 'enzyme';

// happy path, edge case, expected failure
// happy path = add one, subtract one (positive numbers)
// edge case = go from 0 to -1, -1 to 0
describe('counter state change works as expected', () => {
    it('lets you add', () => {
        let component = shallow(<Counter />);

        // simulate a user clicking +
        component.find('span.up.clicker').simulate('click', {});

        expect(component.state('count')).toBe(1);
        expect(component.state('polarity')).toBe('positive');
    });

    it('lets you subtract', () => {
        let component = shallow(<Counter />);

        // simulate a user clicking -
        component.find('span.down.clicker').simulate('click', {});

        expect(component.state('count')).toBe(-1);
        expect(component.state('polarity')).toBe('negative');
    });

    it('lets you toggle between positive and negative', () => {
        let component = shallow(<Counter />);

        // simulate a user clicking -
        component.find('span.down.clicker').simulate('click', {});

        expect(component.state('count')).toBe(-1);
        expect(component.state('polarity')).toBe('negative');

        component.find('span.up.clicker').simulate('click', {});

        expect(component.state('count')).toBe(0);
        expect(component.state('polarity')).toBe('');

        component.find('span.up.clicker').simulate('click', {});
        expect(component.state('count')).toBe(1);
        expect(component.state('polarity')).toBe('positive');
    });

    it('handles multiple quick clicks (negative)', () => {
        let component = shallow(<Counter />);

        for (let i = 0; i < 100; i++)
            component.find('span.down.clicker').simulate('click', {});

        expect(component.state('count')).toBe(-100);
        expect(component.state('polarity')).toBe('negative');
    });

    it('handles multiple quick clicks (positive)', () => {
        let component = shallow(<Counter />);

        for (let i = 0; i < 100; i++)
            component.find('span.up.clicker').simulate('click', {});

        expect(component.state('count')).toBe(100);
        expect(component.state('polarity')).toBe('positive');
    });
});
