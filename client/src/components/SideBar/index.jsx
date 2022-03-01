import { Link } from 'react-router-dom';


const SideBar = () => {

  return (
    <div className="font-zappr text-xl text-blue-300 items-center bg-pink-400 fixed h-full mt-16 pt-4 t-0 w-44 flex flex-col dark:bg-gray-900 dark:text-yellow-300 shadow-lg">
      <div className=''>
      <Link to="/">Dashboard</Link>
      </div>
      <Divider />
      <Link to="/bugs">Bug Table</Link>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
