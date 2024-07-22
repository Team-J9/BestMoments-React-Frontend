const UserInfo = ({ name }: { name: string }) => (
  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
    <div className="font-medium truncate">{name}</div>
  </div>
);

export default UserInfo;
