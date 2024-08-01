import authAxios from '../authConfig';

export const getMemberProfile = async () => {
  const url = '/members/my-page';
  try {
    const response = await authAxios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || '유저정보 가져오기에 실패하였습니다.');
  }
};
