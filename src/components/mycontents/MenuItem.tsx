import { Link } from 'react-router-dom';

const MenuItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <li>
    <Link
      to={href}
      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

export default MenuItem;
