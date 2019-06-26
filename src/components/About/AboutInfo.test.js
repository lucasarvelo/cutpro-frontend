import React from 'react';
import AboutInfo from './AboutInfo';
import renderer from 'react-test-renderer';

test('About information is render', () => {
  const component = renderer.create(<AboutInfo />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
