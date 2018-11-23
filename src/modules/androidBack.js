// Use to handle the back press on Android phones
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
