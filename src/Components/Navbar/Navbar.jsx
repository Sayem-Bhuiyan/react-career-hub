import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navMenu = (
    <div className="flex flex-col md:flex-row gap-5 text-base font-medium">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#7E90FE]" : "text-[#757575]"
        }
      >
        Statistics
      </NavLink>
      <NavLink
        to="/applied_jobs"
        className={({ isActive }) =>
          isActive ? "text-[#7E90FE]" : "text-[#757575]"
        }
      >
        Applied Jobs
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive ? "text-[#7E90FE]" : "text-[#757575]"
        }
      >
        Blogs
      </NavLink>
    </div>
  );

  return (
    <div className="navbar my-5 md:my-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <a className="text-[#474747] font-extrabold text-2xl">
          <NavLink to="/">CareerHub</NavLink>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/applied_jobs' className="text-xl font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-6 py-4 rounded-xl">Start Applying</Link>
      </div>
    </div>
  );
};

export default Navbar;
