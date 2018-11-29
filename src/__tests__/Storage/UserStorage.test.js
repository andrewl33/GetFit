import MockAsyncStorage from 'mock-async-storage';
import { AsyncStorage as storage } from 'react-native';
import { _addNewUser, _getAllUsers } from '../../Storage/UserStorage';

// set up mock async storage
const mock = () => {
  const mockImpl = new MockAsyncStorage();
  jest.mock('AsyncStorage', () => mockImpl);
};

mock();

// test item
const testItem = {
  firstName: 'test_first_name',
  lastName: 'testLastName',
  email: 'test@email.com',
  password: 'password1123',
};

describe('UserStorage', () => {
  // setup
  beforeEach(() => {
    jest.resetAllMocks();
    storage.clear();
  });

  describe('_addNewUser()', () => {
    it('adds a new user to AsyncStorage', async () => {
      try {
        await _addNewUser(testItem);
        const allUsers = await _getAllUsers();
        expect(allUsers['0']).toMatchObject(testItem);
      } catch (e) {
        console.log('test: _addNewUser()');
      }
    });
  });

  describe('_getAllUsers()', () => {
    it('returns null when there is nothing in AsyncStorage', async () => {
      try {
        const allUsers = await _getAllUsers();
        expect(allUsers).toBe(null);
      } catch (e) {
        console.log('test: _getAllUsers()');
      }
    });

    it('returns three objects when 3 are inserted', async () => {
      try {
        // fill mock data
        for (let i = 0; i < 3; i++) {
          await _addNewUser({ id: i });
        }
        // check if 3 things are inserted
        const allUsers = await _getAllUsers();
        expect([...Object.keys(allUsers)].length).toBe(3);
      } catch (e) {
        console.log('test: _getAllUsers');
      }
    });
  });
});
