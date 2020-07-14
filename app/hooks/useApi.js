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

  const request = async () => {
    try {
      setLoading(true);

      const response = await api.get(endpoint);
      if (response.status != 200) {
        return setError(true);
      }

      setLoading(false);
      setData(response.data);
    } catch (error) {
      console.log('API #####', error);
    }
  };

  return {data, error, loading};
};

export default useApi;
