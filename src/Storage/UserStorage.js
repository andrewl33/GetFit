import { AsyncStorage } from 'react-native';

export const _addNewUser = async newUser => {
  try {
    const oldData = await AsyncStorage.getItem('Users');
    let data = {};
    if (oldData === null || oldData === undefined || oldData === 'undefined') {
      data['0'] = newUser;
      data['0'].id = '0';
      data.UserIds = ['0'];
    } else {
      data = JSON.parse(oldData);

      // increment key and set new key
      const newId = data.UserIds.length;
      newId.toString();

      data[newId] = newUser;
      data[newId].id = newId;
      data.UserIds.push(newId.toString());
    }

    const newData = JSON.stringify(data);
    await AsyncStorage.setItem('Users', newData);
  } catch (e) {
    console.log('_addNewUser');
  }

  return null;
};

export const _getAllUsers = async () => {
  try {
    const oldData = await AsyncStorage.getItem('Users');
    let data;
    if (oldData === null || oldData === undefined || oldData === 'undefined') {
      data = null;
    } else {
      data = JSON.parse(oldData);
    }
    delete data.UserIds;
    return data;
  } catch (e) {
    console.log('_getAllUsers Error:');
    console.log(e);
  }

  return null;
};
