import axios from '../config';

export const authenticateUser = async (provider: string, code: string) => {
  const url = `/auth/${provider}/callback?code=${code}`;
  const response = await axios.get(url);
  return response.data;
};

export const logoutUser = async (token: string) => {
  const url = `/auth/logout/${token}`;
  const response = await axios.patch(url);
  return response.data;
};
