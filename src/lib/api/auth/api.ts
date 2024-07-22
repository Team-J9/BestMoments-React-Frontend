import axios from '../config';

export const authenticateUser = async (provider: string, code: string) => {
  const url = `/auth/login/${provider}?code=${code}`;
  const response = await axios.get(url);
  return response.data;
};
