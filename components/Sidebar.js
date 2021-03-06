import Link from "next/link";
import { useRouter } from "next/router";
import {
  RiLayout5Fill,
  RiFileTextFill,
  RiCalendarFill,
  RiVipDiamondFill,
} from "react-icons/ri";
import { ImPilcrow } from "react-icons/im";
import Image from "next/image";

export default function Sidebar({ children }) {
  const SidebarIcon = ({ icon, text = "" }) => (
    <div className="sidebar-icon">
      {icon}
      <span className=" sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
  const Divider = () => <hr className="sidebar-hr" />;
  // const ThemeIcon = () => {
  //     const [darkTheme, setDarkTheme] = useDarkMode();
  //     const handleMode = () => setDarkTheme(!darkTheme);
  // }

  return (
    <div className="drawer drawer-mobile">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mb-6">
        <div className="w-full navbar bg-base-100 dark:bg-base-300 h-16 justify-center bg-opacity-90 backdrop-blur transition-all duration-100 shadow-xl ">
          <div className="navbar-start">
            <label
              for="side-drawer"
              className="btn btn-circle btn-ghost dark:text-white text-gray-700 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <div className="navbar-center">
            <div className="mx-1">
              <Image
                width={45}
                height={45}
                layout="fixed"
                src="/Revampai.svg"
              />
            </div>
            <div
              
              className=" dark:text-white text-gray-700 font-sans font-semibold text-2xl"
            >
              
              Revamp AI
            </div>
          </div>
          <div className="navbar-end">
            <div>
              <label className="swap swap-rotate btn-circle btn-ghost dark:text-white text-gray-700">
                <input type="checkbox" />
                <svg
                  className="swap-on fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>

            <button className="btn btn-ghost btn-circle dark:text-white text-gray-700">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-secondary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
        <div>{children}</div>
      </div>
      <div className="drawer-side">
        <label for="side-drawer" className="drawer-overlay lg:hidden"></label>
        <div
          className=" flex flex-col float-right h-screen min-w-max w-20
                  bg-white dark:bg-base-300 shadow-lg"
        >
          <div className="tooltip-info tooltip" datatip="Dashboard">
            <Link href="/">
              <SidebarIcon icon={<RiLayout5Fill size="28" />} />
            </Link>
          </div>
          <Divider />
          <div className="flex flex-col space-y-1 mt-3 mb-auto">
            <Link href="/writing">
              <div>
                <SidebarIcon icon={<ImPilcrow size="27" />} />
              </div>
            </Link>
            <Link href="/docshistory">
              <div>
                <SidebarIcon icon={<RiFileTextFill size="28" />} />
              </div>
            </Link>
            <Link href="/schedule">
              <div>
                <SidebarIcon icon={<RiCalendarFill size="28" />} />
              </div>
            </Link>
          </div>
          <div className="flex flex-col mb-3 space-y-2 mt-auto">
            <Link href="/pricing">
              <div>
                <SidebarIcon icon={<RiVipDiamondFill size="28" />} />
              </div>
            </Link>
            <div className="avatar cursor-pointer ">
              <div className="w-10 mx-auto rounded-full ring ring-secondary ring-offset-gray-900 hover:opacity-80 ring-offset-2">
                <Image
                  src="https://Linkpi.lorem.space/image/face?hash=3174"
                  width={20}
                  height={20}
                  layout="fixed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
