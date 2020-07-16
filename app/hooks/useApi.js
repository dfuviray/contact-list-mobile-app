import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {useState, useEffect} from 'react';

const useApi = () => {
  useEffect(() => {
    request();
  }, []);

  const baseUrl = 'https://jsonplaceholder.typicode.com/';
  const endpoint = 'users';

  const api = axios.create({
    baseURL: baseUrl,
  });

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  setAsyncData = async (data) => {
    try {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('contact-list', jsonData);
    } catch (error) {
      console.log('SETTING ASYNC STORAGE #####', error);
    }
  };

  getAsyncData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('contact-list');
      return jsonData != null ? JSON.parse(jsonData) : [];
    } catch (error) {
      console.log('GETTING ASYNC STORAGE #####', error);
    }
  };

  const request = async () => {
    try {
      setError(false);
      setLoading(true);

      const response = await api.get(endpoint);
      const {data: responseData} = response;

      if (!responseData) {
        setLoading(false);
        const getData = await getAsyncData();
        setData(getData);
      }

      setLoading(false);
      setAsyncData(responseData);
      setData(responseData);
    } catch (error) {
      setLoading(false);
      setError(false);

      const getData = await getAsyncData();

      if (getData) setData(getData);

      if (!getData) setError(true);

      console.log('API #####', error);
    }
  };

  return {data, error, loading, request};
};

export default useApi;
