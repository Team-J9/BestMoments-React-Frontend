import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { authenticateUser } from '../../../lib/api/auth/api';
import verifyState from '../verifyState';
import Spinner from '../../../components/common/Spinner';

const KakaoRedirectHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const handleAuthentication = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      const state = params.get('state');

      if (state && verifyState(state)) {
        if (code) {
          try {
            const authResponse = await authenticateUser('kakao', code);
            localStorage.setItem('accessToken', authResponse.accessToken);
            localStorage.setItem('refreshToken', authResponse.refreshToken);
            window.location.href = '/';
          } catch (error: any) {
            alert(error.message || '요청에 실패하였습니다.');
            window.location.href = '/auth';
          }
        }
      } else {
        alert('로그인에 실패하였습니다.');
        window.location.href = '/auth';
      }
    };

    handleAuthentication();
  }, [location]);

  return <Spinner />;
};

export default KakaoRedirectHandler;
