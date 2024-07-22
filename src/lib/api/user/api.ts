import authAxios from '../authConfig';

export const getUserProfile = async () => {
  const url = '/members/my-page';
  const response = await authAxios.get(url);
  return response.data;
};
