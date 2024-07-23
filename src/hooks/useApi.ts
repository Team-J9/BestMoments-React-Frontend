import { useState, useEffect, useCallback } from 'react';

const useApi = (apiFunction: Function, args?: any[]) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const memoizedApiFunction = useCallback(() => {
    if (args && args.length > 0) {
      return apiFunction(...args);
    } else {
      return apiFunction();
    }
  }, [apiFunction, args]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await memoizedApiFunction();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [memoizedApiFunction]);

  return { data, error, loading };
};

export default useApi;
