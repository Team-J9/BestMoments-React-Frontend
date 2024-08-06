import generateState from '../genetateState';

const useKakaoLoginService = () => {
  const restApiKey = process.env.REACT_APP_KAKAO_REST_API_KEY;
  // todo : 사용하는 프로토콜과 도메인을 기반으로 동적으로 url을 생성
  const redirectUri = 'http://localhost:3000/auth/kakao/callback';

  const handleKakaoLogin = () => {
    const state = generateState();
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code&state=${state}`;
    window.location.href = kakaoURL;
  };

  return handleKakaoLogin;
};

export default useKakaoLoginService;
