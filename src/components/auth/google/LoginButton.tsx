import Image from '../../common/Image';
import useGoogleLoginService from '../../../services/auth/google/authService';

const GoogleLoginButton = () => {
  const login = useGoogleLoginService();

  return (
    <button
      onClick={() => login()}
      className="font-roboto min-w-[214px] flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <Image src="/assets/icon/google.svg" alt="Google Logo" className="h-6 w-6 mr-2" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
