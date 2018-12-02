import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Landing from '../../components/Landing';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Landing />);
});

describe('Landing UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
