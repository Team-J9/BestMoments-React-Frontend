import useKakaoLoginService from '../../../services/auth/kakao/authService';
import Image from '../../common/Image';

const KakaoLoginButton = () => {
  const handleLogin = useKakaoLoginService();

  return (
    <button
      onClick={handleLogin}
      className="font-roboto min-w-[214px] flex items-center bg-[#FEE500] rounded-lg shadow-md px-6 py-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <Image src="/assets/icon/kakao.svg" alt="Kakao Logo" className="h-6 w-6 mr-2" />
      <span>Continue with Kakao</span>
    </button>
  );
};

export default KakaoLoginButton;
