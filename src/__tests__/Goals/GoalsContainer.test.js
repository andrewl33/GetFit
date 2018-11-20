import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import GoalsContainer from '../../Goals/GoalsContainer';

describe('GoalsContainer', () => {
  it('renders', () => {
    const tree = renderer.create(<GoalsContainer />);
    expect(tree).toMatchSnapshot();
  });
});
