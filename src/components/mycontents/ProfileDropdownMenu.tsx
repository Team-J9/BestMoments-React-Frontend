import Image from '../common/Image';
import { useState, useEffect, useRef } from 'react';
import MenuItem from './MenuItem';
import LogoutButton from './LogoutButton';
import UserInfo from './UserInfo';

const ProfileDropdownMenu = ({
  user,
  handleLogout,
}: {
  user: { id: string; profileImageUrl: string; name: string };
  handleLogout: () => void;
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleImageClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative z-50" ref={menuRef}>
      <Image
        id={user.id}
        src={user.profileImageUrl}
        width={40}
        height={40}
        alt="userprofile"
        className="rounded-full cursor-pointer"
        onClick={handleImageClick}
      />
      {isMenuOpen && (
        <div className="absolute right-0 top-12 z-50 bg-white divide-y divide-gray-300 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <UserInfo name={user.name} />
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <MenuItem onClick={handleMenuItemClick} href="my-video">
              내 비디오
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick} href="my-settings">
              설정
            </MenuItem>
          </ul>
          <div className="py-1">
            <LogoutButton onLogout={handleLogout} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdownMenu;
