import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import SignIn from '../../../containers/auth/SignIn';
import Root from '../../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
      <Root>
        <SignIn />
      </Root>
    </MemoryRouter>
  );
});

afterEach(() => wrapped.unmount());

describe('Signup UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });

    it('has 3 input fields and a button', () => {
      expect(wrapped.find('input').length).toEqual(3);
    });
  });
});
