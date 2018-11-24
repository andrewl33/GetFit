import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CreateCustomGoal from '../../Goals/CreateCustomGoal';

describe('CreateCustomGoal', () => {
  it('renders', () => {
    const tree = renderer.create(<CreateCustomGoal />);
    expect(tree).toMatchSnapshot();
  });
});
