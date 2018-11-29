import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NewAccount from '../../accounts/NewAccount';

describe('NewAccount', () => {
  it('renders', () => {
    const tree = renderer.create(<NewAccount />);
    expect(tree).toMatchSnapshot();
  });
});
