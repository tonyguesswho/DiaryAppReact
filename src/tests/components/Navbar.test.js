import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navbar from '../../components/Navbar';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Navbar />);
});

describe('NavbarUI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
