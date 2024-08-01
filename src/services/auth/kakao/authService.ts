import generateState from '../genetateState';

const useKakaoLoginService = () => {
  const restApiKey = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirectUri = 'http://localhost:3000/auth/kakao/callback';

  const handleKakaoLogin = () => {
    const state = generateState();
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code&state=${state}`;
    window.location.href = kakaoURL;
  };

  return handleKakaoLogin;
};

export default useKakaoLoginService;
