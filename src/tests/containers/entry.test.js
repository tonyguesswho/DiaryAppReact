import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Entry from '../../containers/Entry';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
      <Root>
        <Entry />
      </Root>
    </MemoryRouter>
  );
});

afterEach(() => wrapped.unmount());

describe('Entry entry UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
