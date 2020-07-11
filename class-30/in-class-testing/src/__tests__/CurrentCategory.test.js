import React from 'react';
import { render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import CurrentCategory from '../components/CurrentCategory';

const storeContainer = mount(
    <Provider store={store}>
        <CurrentCategory />
    </Provider>,
);

const dispatch = storeContainer.prop('store').dispatch;
const component = storeContainer.find('#current-category');

describe('', () => {
    xit('', () => {
        expect(true).toBe(true);
    });
});
