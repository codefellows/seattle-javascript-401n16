import React from 'react';
import Header from '../components/Header';

import { render } from 'enzyme';

describe('header renders as expected', () => {
    it('creates a header element', () => {
        let component = render(<Header />);
        expect(component.find('header')).toBeDefined();
        expect(component.find('header h1')).toBeDefined();
    });
});
