import { useGoogleLogin } from '@react-oauth/google';
import verifyState from '../verifyState';
import { authenticateUser } from '../../../lib/api/auth/api';
import generateState from '../genetateState';

const useGoogleLoginService = () => {
  return useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const state = codeResponse.state;

      if (!state) {
        alert('로그인에 실패하였습니다. 다시 시도해주세요.1');
        return;
      }

      if (!verifyState(state)) {
        alert('로그인에 실패하였습니다. 다시 시도해주세요.2');
        return;
      }

      const { code } = codeResponse;
      const authResponse = await authenticateUser('google', code);
      localStorage.setItem('accessToken', authResponse.accessToken);
      localStorage.setItem('refreshToken', authResponse.refreshToken);
      window.location.href = '/';
    },
    onError: (error) => console.log('로그인 실패', error),
    flow: 'auth-code',
    state: encodeURIComponent(generateState()),
  });
};

export default useGoogleLoginService;
