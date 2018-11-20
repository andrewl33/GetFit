import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import GoalListItem from '../../Goals/GoalListItem';

const item = {
  id: 2,
  title: 'Goal Item 2',
  createDate: '1-10-2001',
  endDate: '1-15-2001',
  isActive: true,
  unitType: 'miles',
  startAmount: 0,
  progress: 2.5,
  endAmount: 10,
};

describe('GoalListItem', () => {
  it('renders', () => {
    const tree = renderer.create(<GoalListItem {...item} />);
    expect(tree).toMatchSnapshot();
  });
});
