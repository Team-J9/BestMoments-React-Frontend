import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-[#6E6E82] border-t-2 shadow">
      <div className="w-full text-center mx-auto max-w-screen-xl p-4 md:flex items-center md:justify-between">
        <span className="text-sm sm:text-center dark:text-gray-400">© 2023 BestMoments All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:mt-0">
          <li className="m-2">
            <Link to="#" className="hover:underline">
              Terms
            </Link>
          </li>
          <li className="m-2">
            <Link to="#" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li className="m-2">
            <Link to="#" className="hover:underline">
              FAQ
            </Link>
          </li>
          <li className="m-2">
            <Link to="#" className="hover:underline">
              Contact
            </Link>
          </li>
          <li className="m-2">
            <Link to="#" className="hover:underline">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
