import * as React from 'react'
import {mount} from 'enzyme'
import Review from '../pages/Review'
import { Provider } from 'react-redux';
import store from '../src/store';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
});

describe('Pages', () => {
    describe('Review', () => {
        it('Editing Review Input Box', function () {
            const wrap = mount(<Provider store={store}><Review/></Provider>)
            expect(wrap.find('.edit-text').at(0).simulate('change', {target: {value: "Good job"}})).toBeTruthy();
            expect(wrap.find(".edit-text").at(0).props().value = "Good job").toBeTruthy();
        });

        /* it('Submiting Review', function () {
            const wrap = mount(<Provider store={store}><Review/></Provider>)
            expect(wrap.find('.edit-text').at(0).simulate('change', {target: {value: "Good job"}})).toBeTruthy();
            expect(wrap.find(".submit-button").at(0).simulate("click")).toBeTruthy();
            expect(wrap.containsMatchingElement(<h1>Good job</h1>)).toBeTruthy();
        }); */

        it('Editing Review', function() {
            const wrap = mount(<Provider store={store}><Review/></Provider>)
            expect(wrap.find('.edit-text').at(0).simulate('change', {target: {value: "Good job"}})).toBeTruthy();
            expect(wrap.find(".submit-button").at(0).simulate("click")).toBeTruthy();
            const parent = wrap.find("h1").at(0).parent();
            console.log(parent.debug())
            expect(parent.find(".delete")).toHaveLength(1);
        })
    })  
})