import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import SigninComponent, { SignIn } from '../../../containers/auth/SignIn';
import Root from '../../../root';

let wrapped;
let wrapper;

const props = {
  clearError: jest.fn()
}

beforeEach(() => {
  wrapped = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
      <Root>
        <SigninComponent
          clearError={props.clearError}
        />
      </Root>
    </MemoryRouter>
  );

  wrapper = shallow(
    <SignIn
      clearError={props.clearError}
    />
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

    it('should simulate signin process', () => {
      const Signin = wrapper.find('form');

      const mockedEvent = {
        preventDefault: jest.fn()
      }

      Signin.simulate('submit', mockedEvent)
    });

    it('should simulate onChange validation process', () => {
      const Signin = wrapper.find('#password');

      const mockedEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'name',
          value: 'value'
        }
      }

      Signin.simulate('change', mockedEvent)
    });
  });
});
