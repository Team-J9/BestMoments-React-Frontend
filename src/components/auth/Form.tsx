import Spinner from '../common/Spinner';
import GoogleLoginButton from './google/LoginButton';
import KakaoLoginButton from './kakao/LoginButton';

const AuthForm = () => {
  return (
    <section className="flex justify-center items-center my-52">
      <div className="w-[90%] sm:w-[560px] bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center border-2 border-blue-400">
        <header className="mb-6">
          <h1 className="text-3xl text-center font-bold text-gray-900 dark:text-gray-100">시작하기</h1>
          <p className="mt-2">간편하게 가입하고 영상을 업로드 해보세요!</p>
        </header>
        <div className="w-full flex flex-col items-center gap-4">
          <GoogleLoginButton />
          <KakaoLoginButton />
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
