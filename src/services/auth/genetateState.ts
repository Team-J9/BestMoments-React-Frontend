import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';

const generateState = () => {
  const state = uuidv4();
  const secret = process.env.REACT_APP_STATE_SECRET!;
  const hash = CryptoJS.HmacSHA256(state, secret).toString(CryptoJS.enc.Hex);
  const signedState = `${state}.${hash}`;
  localStorage.setItem('oauth_state', signedState);
  return signedState;
};

export default generateState;
