import { AsyncStorage } from 'react-native';

/**
 * AsyncStorage is global,
 * so we're going to store Goal storage like
 * AsyncStorage: {
 *  Goals: {
 *      <GoalUniqueIdGoesHere>: {
 *        id: <values>,
 *        title: string,
 *        createDate:  <dateString>,
 *        endDate: <dateString>,
 *        isActive: boolean,
 *        unitType: steps | <someSortOfUnitToMeasure>,
 *        startAmount: number,
 *        progress: number,
 *        endAmount: number
 *     },
 *     goalIds: ["<goalID>"]
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
    let data = {};
    if (oldData === null || oldData === undefined || oldData === 'undefined') {
      data['0'] = newGoal;
      data['0'].id = '0';
      data.goalIds = ['0'];
    } else {
      data = JSON.parse(oldData);

      // increment key and set new key
      const newId = data.goalIds.length;
      newId.toString();

      data[newId] = newGoal;
      data[newId].id = newId;
      data.goalIds.push(newId.toString());
    }

    const newData = JSON.stringify(data);
    AsyncStorage.setItem('Goals', newData);
  } catch (e) {
    console.log('_addNewGoal');
  }

  return null;
};

/**
 * getAllGoals
 *
 * uses https://facebook.github.io/react-native/docs/asyncstorage#getitem
 */
export const _getAllGoals = async () => {
  try {
    const oldData = await AsyncStorage.getItem('Goals');
    let data;
    if (oldData === null || oldData === undefined || oldData === 'undefined') {
      data = null;
    } else {
      data = JSON.parse(oldData);
    }

    delete data.goalIds;

    return data;
  } catch (e) {
    console.log('_getAllGoals Error:');
    console.log(e);
  }

  return null;
};

/**
 * getNewGoals
 *
 * uses https://facebook.github.io/react-native/docs/asyncstorage#getitem
 */
export const _getNewGoals = async () => {
  try {
    const oldData = await AsyncStorage.getItem('New Goals');
    const data = JSON.parse(oldData);
    return data;
  } catch (e) {
    console.log('_getNewGoals Error:');
    console.log(e);
  }

  return null;
};

/**
 * just for development
 */

export const _developmentGoalInsert = async () => {
  const initialGoals = {
    0: {
      id: 0,
      title: 'Goal Item 1',
      createDate: '1-1-2001',
      endDate: '1-2-2001',
      isActive: false,
      unitType: 'steps',
      startAmount: 0,
      progress: 1002,
      endAmount: 5000,
    },
    1: {
      id: 1,
      title: 'Goal Item 2',
      createDate: '1-10-2001',
      endDate: '1-15-2001',
      isActive: true,
      unitType: 'miles',
      startAmount: 0,
      progress: 2.5,
      endAmount: 10,
    },
    2: {
      id: 2,
      title: 'Goal Item 3',
      createDate: '1-20-2001',
      endDate: '1-22-2002',
      isActive: false,
      unitType: 'lbs',
      startAmount: 180,
      progress: 170,
      endAmount: 150,
    },
    goalIds: ['0', '1', '2'],
  };

  AsyncStorage.setItem('Goals', JSON.stringify(initialGoals));
};

/**
 * just for development; create a static list of new suggested goals
 */

export const _developmentNewGoalInsert = async () => {
  const newGoals = {
    4: {
      id: 4,
      title: 'Pushups',
      createDate: '11-15-2018',
      endDate: '11-22-2018',
      isActive: false,
      unitType: 'pushups',
      startAmount: 0,
      progress: 0,
      endAmount: 700,
    },
    5: {
      id: 5,
      title: 'Running',
      createDate: '11-15-2018',
      endDate: '11-22-2018',
      isActive: false,
      unitType: 'miles',
      startAmount: 0,
      progress: 0,
      endAmount: 25,
    },
    6: {
      id: 6,
      title: 'Losing Weight',
      createDate: '11-15-2018',
      endDate: '11-29-2018',
      isActive: false,
      unitType: 'weight',
      startAmount: 180,
      progress: 180,
      endAmount: 150,
    },
  };

  AsyncStorage.setItem('New Goals', JSON.stringify(newGoals));
};
