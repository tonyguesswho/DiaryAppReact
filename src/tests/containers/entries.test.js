import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Entries from '../../containers/Entries';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
      <Root>
        <Entries />
      </Root>
    </MemoryRouter>
  );
});

afterEach(() => wrapped.unmount());

describe('entry UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
