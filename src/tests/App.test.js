import React from 'react';
import App from '../App'
import renderer from 'react-test-renderer';



it('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

// note it was necessary to manually install babel-core@7.0.0-bridge.0 for jest tests to properly run