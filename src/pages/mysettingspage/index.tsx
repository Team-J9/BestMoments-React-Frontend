import Image from '../../components/common/Image';

const MySettingsPage = () => {
  return (
    <section className="flex justify-center p-2 md:p-4">
      <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
        <header className="pl-6">
          <h2 className="text-2xl font-bold sm:text-xl">프로필 설정</h2>
        </header>
        <div className="grid max-w-2xl mx-auto mt-8">
          <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
            <Image className="w-40 h-40" src="/assets/image/default_user.png" alt="Default Profile" />
            <div className="flex flex-col space-y-5 sm:ml-8">
              <button
                type="button"
                className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-indigo-700 rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200"
              >
                프로필 변경
              </button>
            </div>
          </div>
          <form className="items-center mt-8 sm:mt-14">
            <div className="flex flex-col items-center w-full mb-2 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <label htmlFor="nickname" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                  닉네임
                </label>
                <input
                  type="text"
                  id="nickname"
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  placeholder="닉네임"
                  readOnly
                />
              </div>
            </div>
            <div className="mb-2 sm:mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                이메일
              </label>
              <input
                type="email"
                id="email"
                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder="이메일"
                value="test123@test.com"
                readOnly
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                내 소개글
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="내 소개글을 작성해보세요!"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                저장하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MySettingsPage;
