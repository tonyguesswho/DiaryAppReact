import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import SignUpComponent, { SignUp } from '../../../containers/auth/SignUp';
import Root from '../../../root';

let wrapped;
let wrapper;

const props = {
  clearError: jest.fn(),
  signup: jest.fn()
}

beforeEach(() => {
  wrapped = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
      <Root>
        <SignUpComponent
          clearError={props.clearError}
          signup={props.signup}
        />
      </Root>
    </MemoryRouter>
  );

  wrapper = shallow(
    <SignUp
      clearError={props.clearError}
      signup={props.signup}
    />
  )
});

afterEach(() => wrapped.unmount());

describe('Signup UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });

    it('has 5 input fields and a button', () => {
      expect(wrapped.find('input').length).toEqual(5);
    });

    it('should simulate signup process', () => {
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
