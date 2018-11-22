import { BackHandler } from 'react-native';

const handleAndroidBack = callback => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    callback();
    return true;
  });
};

const removeAndroidBackHandler = () => {
  BackHandler.removeEventListener('hardwareBackPress', () => {});
};

export { handleAndroidBack, removeAndroidBackHandler };
