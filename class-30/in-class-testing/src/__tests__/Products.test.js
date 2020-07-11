import React from 'react';
import { render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Products from '../components/Products';

const storeContainer = mount(
    <Provider store={store}>
        <Products />
    </Provider>,
);

const dispatch = storeContainer.prop('store').dispatch;
const component = storeContainer.find('#products');

describe('', () => {
    xit('', () => {
        expect(true).toBe(true);
    });
});
