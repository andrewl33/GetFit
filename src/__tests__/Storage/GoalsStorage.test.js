import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native';
import { _addNewGoal, _getAllGoals } from '../../Storage/GoalsStorage';

// set up mock async storage
const mock = () => {
  const mockImpl = new MockAsyncStorage();
  jest.mock('AsyncStorage', () => mockImpl);
};

mock();

// test item
const testItem = {
  id: 1,
  title: 'Goal Item 1',
  createDate: '1-1-2001',
  endDate: '1-2-2001',
  isActive: false,
  unitType: 'steps',
  startAmount: 0,
  progress: 1002,
  endAmount: 5000,
};

describe('GoalsStorage', () => {
  // setup
  beforeEach(() => {
    jest.resetAllMocks();
    storage.clear();
  });

  describe('_addNewGoal()', () => {
    it('adds a new goal to AsyncStorage', async () => {
      try {
        await _addNewGoal(testItem);
        const allGoals = await _getAllGoals();
        expect(allGoals['1']).toMatchObject(testItem);
      } catch (e) {
        console.log('test: _addNewGoal()');
      }
    });
  });

  describe('_getAllGoals()', () => {
    it('returns null when there is nothing in AsyncStorage', async () => {
      try {
        const allGoals = await _getAllGoals();
        expect(allGoals).toBe(null);
      } catch (e) {
        console.log('test: _getAllGoals()');
      }
    });

    it('returns three objects when 3 are inserted', async () => {
      try {
        // fill mock data
        for (let i = 0; i < 3; i++) {
          await _addNewGoal({ id: i });
        }
        // check if 3 things are inserted
        const allGoals = await _getAllGoals();
        expect([...Object.keys(allGoals)].length).toBe(3);
      } catch (e) {
        console.log('test: _getAllGoals');
      }
    });
  });
});
