import { AsyncStorage } from 'react-native';

/**
 * AsyncStorage is global,
 * so we're going to store Goal storage like
 * AsyncStorage: {
 *  Goals: {
 *      <GoalUniqueIdGoesHere>: {
 *        id: <values>
 *        createDate:  <dateString>,
 *        endDate: <dateString>,
 *        isActive: boolean,
 *        unitType: steps | <someSortOfUnitToMeasure>,
 *        startAmount: number,
 *        progress: number,
 *        endAmount: number
 *     },
 *     activeGoals: ["<goalID>"]
 *  }
 * }
 */

/**
 * addNewGoal
 *
 * uses static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void)
 *
 */

export const _addNewGoal = async newGoal => {
  try {
    const oldData = await AsyncStorage.getItem('Goals');
    const data = JSON.parse(oldData);
    data[newGoal.id] = newGoal;
    const newData = JSON.stringify(data);
    AsyncStorage.setItem('Goals', newData);
  } catch (e) {
    // TODO: handle error
  }
};

/**
 * getAllGoals
 *
 * uses https://facebook.github.io/react-native/docs/asyncstorage#getitem
 */
export const _getAllGoals = async () => {
  try {
    const oldData = await AsyncStorage.getItem('Goals');
    const data = JSON.parse(oldData);
    return data;
  } catch (e) {
    console.log('_addNewGoal Error:');
    console.log(e);
  }

  return null;
};

/**
 * just for development
 */

export const _developmentGoalInsert = async () => {
  const initialGoals = {
    1: {
      id: 1,
      createDate: '1-1-2001',
      endDate: '1-2-2001',
      isActive: false,
      unitType: 'steps',
      startAmount: 0,
      progress: 1002,
      endAmount: 5000,
    },
    2: {
      id: 2,
      createDate: '1-10-2001',
      endDate: '1-15-2001',
      isActive: true,
      unitType: 'miles',
      startAmount: 0,
      progress: 2.5,
      endAmount: 10,
    },
    3: {
      id: 3,
      createDate: '1-20-2001',
      endDate: '1-22-2002',
      isActive: false,
      unitType: 'weight',
      startAmount: 180,
      progress: 170,
      endAmount: 150,
    },
  };

  AsyncStorage.setItem('Goals', JSON.stringify(initialGoals));
};
