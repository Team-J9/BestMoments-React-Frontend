import GoogleLoginButton from './google/LoginButton';

const AuthForm = () => {
  return (
    <section className="flex justify-center items-center my-52">
      <div className="w-[90%] sm:w-[560px] bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center border-2 border-blue-400">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">로그인</h1>
        </header>
        <div className="w-full flex flex-col items-center">
          <GoogleLoginButton />
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
