import authAxios from '../../authConfig';

/**
 * 내 동영상 목록 조회
 * @param page - 페이지 번호 (0부터 시작)
 * @param size - 페이지 크기 (한 페이지에 포함될 동영상 수)
 * @param sort - 정렬 기준
 * @returns 내 동영상 리스트
 */
export const getMyVideoList = async (page = 0, size = 6, sort = []) => {
  const url = '/my-videos';
  const params = {
    page,
    size,
    sort,
  };

  try {
    const response = await authAxios.get(url, { params });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || '영상 가져오기에 실패하였습니다.');
  }
};

/**
 * 동영상 업로드
 * @param file - 업로드할 파일
 * @param title - 동영상 제목
 * @param description - 동영상 설명
 * @param videoStatus - 동영상 상태
 * @returns 업로드된 동영상 정보
 */
export const uploadMyVideos = async (file: File, title: string, description: string, videoStatus: string) => {
  const url = '/my-videos';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('videoStatus', videoStatus);

  try {
    const response = await authAxios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || '영상 업로드에 실패하였습니다.');
  }
};

/**
 * 내 동영상 열람
 * @param videoId
 * @returns 해당 비디오의 디테일
 */
export const getMyVideoDetails = async (videoId: string) => {
  const url = `/my-videos/${videoId}`;
  try {
    const response = await authAxios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || '영상을 불러오는데 실패하였습니다.');
  }
};
