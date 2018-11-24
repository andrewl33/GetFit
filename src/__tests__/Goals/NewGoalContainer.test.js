import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NewGoalContainer from '../../Goals/NewGoalContainer';

describe('NewGoalContainer', () => {
  it('renders', () => {
    const tree = renderer.create(<NewGoalContainer />);
    expect(tree).toMatchSnapshot();
  });
});
