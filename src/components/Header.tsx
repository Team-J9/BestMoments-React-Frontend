import ThemeSwitcher from './theme/Switcher';
import { Link } from 'react-router-dom';
import Image from './common/Image';
import { useLayoutEffect, useState } from 'react';
import { getUserProfile } from '../lib/api/user/api';
import DropdownMenu from './mycontents/DropdownMenu';

const Header = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const fetchUserProfile = async () => {
      if (localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')) {
        try {
          const user = await getUserProfile();
          setIsLoading(false);
          setUser(user);
        } catch (error) {
          console.error('유저정보 받기 실패', error);
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    /** todo
     * 로그아웃 인증 구현
     */
  };
  return (
    <header className="w-full sticky top-0 flex border-[#6E6E82] border-b-2 p-5 justify-between backdrop-blur-sm">
      <Link className="flex justify-center items-center" to="/">
        <Image src="/assets/image/logo.png" alt="mainlogo" className="w-10 h-10 sm:w-8 sm:h-8" />
        <h1 className="hidden sm:block text-xl sm:text-2xl ml-2">
          BEST
          <span className="bg-gradient-to-r from-[#5097fa] to-[#5363ff] bg-clip-text text-transparent">MOMENTS</span>
        </h1>
      </Link>
      <nav className="flex justify-center items-center gap-5">
        <ThemeSwitcher />
        {isLoading ? (
          <div className="w-[40px] h-[40px]"></div>
        ) : user ? (
          <DropdownMenu user={user} handleLogout={handleLogout} />
        ) : (
          <>
            <Link
              className="flex items-center disabled:opacity-50 disabled:hover:opacity-50 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-400 border-blue-700 disabled:border-0 disabled:bg-blue-500 disabled:text-white ring-white text-white border-b-4 transition duration-300 ease-in-out hover:bg-blue-500 hover:border-blue-800 hover:shadow-none active:shadow-inner active:bg-blue-800 active:text-gray-300 focus-visible:outline-blue-500 text-sm sm:text-base dark:hover:bg-blue-800 dark:bg-blue-700 dark:border-blue-700 dark:border-b-blue-900"
              to="/login"
            >
              로그인
            </Link>
            <Link
              className="flex items-center disabled:opacity-50 disabled:hover:opacity-50 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-400 border-blue-700 disabled:border-0 disabled:bg-blue-500 disabled:text-white ring-white text-white border-b-4 transition duration-300 ease-in-out hover:bg-blue-500 hover:border-blue-800 hover:shadow-none active:shadow-inner active:bg-blue-800 active:text-gray-300 focus-visible:outline-blue-500 text-sm sm:text-base dark:hover:bg-blue-800 dark:bg-blue-700 dark:border-blue-700 dark:border-b-blue-900"
              to="/signup"
            >
              회원가입
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
