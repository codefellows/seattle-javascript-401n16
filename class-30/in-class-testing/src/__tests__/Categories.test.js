import React from 'react';
import { render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Categories from '../components/Categories';

const storeContainer = mount(
    <Provider store={store}>
        <Categories />
    </Provider>,
);

const dispatch = storeContainer.prop('store').dispatch;
const state = storeContainer.prop('store').getState();
const component = storeContainer.find('#categories');

describe('Categories component works as expected', () => {
    it('renders the correct number of buttons', () => {
        let buttons = component.find('button');
        expect(buttons.length).toBe(state.categories.length);

        buttons.forEach((self, indx) => {
            let expectedString =
                state.categories[indx].displayName ||
                state.categories[indx].name;

            expect(self.text()).toBe(expectedString);
        });
    });

    it('correctly changes the currentCategory on button click', () => {
        let buttons = component.find('button');

        buttons.forEach((self, indx) => {
            self.simulate('click');

            let currState = storeContainer.prop('store').getState();
            expect(currState.currentCategory).toBe(state.categories[indx].name);
        });
    });
});
