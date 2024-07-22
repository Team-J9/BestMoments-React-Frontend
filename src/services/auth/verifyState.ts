import CryptoJS from 'crypto-js';

const verifyState = (state: string) => {
  try {
    const storedState = localStorage.getItem('oauth_state');
    if (!storedState) {
      console.error('요청값을 찾을수 없습니다. 다시시도해주세요.');
      return false;
    }

    const [storedStateValue, storedStateHash] = storedState.split('.');
    const secret = process.env.REACT_APP_STATE_SECRET!;
    if (!secret) {
      console.error('요청값을 찾을수 없습니다. 다시시도해주세요.');
      return false;
    }

    const expectedHash = CryptoJS.HmacSHA256(storedStateValue, secret).toString(CryptoJS.enc.Hex);

    if (storedState !== state || storedStateHash !== expectedHash) {
      console.error('요청값이 변조되었습니다. 다시시도해주세요.');
      return false;
    }

    return true;
  } catch (error) {
    console.error('검증 중 오류가 발생했습니다:', error);
    return false;
  }
};

export default verifyState;
