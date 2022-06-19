import Writing from "../pages/writing";
import { RiLayout5Fill, RiFileTextFill, RiLightbulbFlashFill, RiCalendarFill, RiVipDiamondFill } from "react-icons/ri";


export default function Sidebar() {
    const SidebarIcon = ({ icon, text = "" }) => (
        <div className="sidebar-icon">
            {icon}
            <span class=" sidebar-tooltip group-hover:scale-100">
                {text}
            </span>

        </div>
    );
    const Divider = () => <hr className="sidebar-hr" />;


    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col mb-6">
                <div class="w-full navbar bg-base-100 h-16 justify-center bg-opacity-90 backdrop-blur transition-all duration-100 border-b-2 shadow-sm ">
                    <div class="navbar-start">
                        <label for="my-drawer-2" class="btn btn-circle btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>
                    </div>
                    <div class="navbar-center">
                        <a class="btn btn-ghost normal-case text-xl"> Revamp AI</a>

                    </div>
                    <div class="navbar-end">
                        <button class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>

                        </button>
                        <button class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span class="badge badge-xs badge-primary indicator-item"></span>
                            </div>

                        </button>


                    </div>

                </div>
                <div class="flex items-center px-6 pb-6">
                    <Writing />

                </div>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <div class=" flex flex-col h-screen w-20
                  bg-white dark:bg-gray-900 shadow-lg">


                    <div>
                        <SidebarIcon icon={<RiLayout5Fill size="28" />} />
                    </div>
                    <Divider />
                    <div class="flex flex-col space-y-1 mt-3 mb-auto">
                        <div >
                            <SidebarIcon icon={<RiLightbulbFlashFill size="28" />} />
                        </div>
                        <div>
                            <SidebarIcon icon={<RiFileTextFill size="28" />} />
                        </div>
                        <div>
                            <SidebarIcon icon={<RiCalendarFill size="28" />} />
                        </div>
                    </div>
                    <div class="flex flex-col mb-3 space-y-2 mt-auto">
                        <div >
                            <SidebarIcon icon={<RiVipDiamondFill size="28" />} />
                        </div>
                        <div class="avatar cursor-pointer ">
                            <div class="w-10 mx-auto rounded-full ring ring-primary ring-offset-gray-900 hover:opacity-80 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};
