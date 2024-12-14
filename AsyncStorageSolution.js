import AsyncStorage from '@react-native-async-storage/async-storage';

const getValue = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      console.log(`Key '${key}' not found in AsyncStorage`);
      return null; // Or handle the absence of the key as needed
    }
  } catch (error) {
    console.error('AsyncStorage error:', error);
    return null;
  }
};

// Usage example
getValue('myKey').then((data) => {
  console.log(data);
});