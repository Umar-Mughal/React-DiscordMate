import React from "react";
import Logo from "./images/logo.png";
import User from "./images/user-img.png";
import { useCookies } from "react-cookie";

export default function Sidenav(props: any): React.ReactElement {
  const [cookie, setCookie, removeCookie] = useCookies();

  const signOut = (): void => {
    removeCookie("jwt_token");
  };

  return (
    <>
      <input type="checkbox" id="menu-open" className="hidden" />
      <label
        htmlFor="menu-open"
        className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
        data-dev-hint="floating action button"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
      <aside
        id="sidebar"
        className="z-50 h-full pb-6 h-100 border-r border-white/20  bg-[#141E21] text-grey md:w-80 w-3/4 space-y-6 pt-8 px-8 fixed inset-y-0 left-0 transform xl:relative xl:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
        data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
      >
        <div
          className="flex flex-col space-y-6"
          data-dev-hint="optional div for having an extra footer navigation"
        >
          <img className="mb-12" src={Logo} />
          <nav data-dev-hint="main navigation">
            <a
              href="#"
              className="nav-item text-grey/80 bg-[#192729] hover:bg-[#1BA34D] dark:text-white mt-4 flex items-center space-x-2 py-2 px-8 transition duration-200 dark:hover:bg-red hover:bg-light-red hover:text-red hover:shadow-sm rounded-xl text-xl font-semibold"
            >
              <svg
                className="mr-3"
                width={23}
                height={23}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.77 11.25H15.73C13.72 11.25 12.75 10.27 12.75 8.27V4.23C12.75 2.22 13.73 1.25 15.73 1.25H19.77C21.78 1.25 22.75 2.23 22.75 4.23V8.27C22.75 10.27 21.77 11.25 19.77 11.25ZM15.73 2.75C14.55 2.75 14.25 3.05 14.25 4.23V8.27C14.25 9.45 14.55 9.75 15.73 9.75H19.77C20.95 9.75 21.25 9.45 21.25 8.27V4.23C21.25 3.05 20.95 2.75 19.77 2.75H15.73Z"
                  fill="#ffffff"
                />
                <path
                  d="M8.27 11.25H4.23C2.22 11.25 1.25 10.36 1.25 8.52V3.98C1.25 2.14 2.23 1.25 4.23 1.25H8.27C10.28 1.25 11.25 2.14 11.25 3.98V8.51C11.25 10.36 10.27 11.25 8.27 11.25ZM4.23 2.75C2.89 2.75 2.75 3.13 2.75 3.98V8.51C2.75 9.37 2.89 9.74 4.23 9.74H8.27C9.61 9.74 9.75 9.36 9.75 8.51V3.98C9.75 3.12 9.61 2.75 8.27 2.75H4.23Z"
                  fill="#ffffff"
                />
                <path
                  d="M8.27 22.75H4.23C2.22 22.75 1.25 21.77 1.25 19.77V15.73C1.25 13.72 2.23 12.75 4.23 12.75H8.27C10.28 12.75 11.25 13.73 11.25 15.73V19.77C11.25 21.77 10.27 22.75 8.27 22.75ZM4.23 14.25C3.05 14.25 2.75 14.55 2.75 15.73V19.77C2.75 20.95 3.05 21.25 4.23 21.25H8.27C9.45 21.25 9.75 20.95 9.75 19.77V15.73C9.75 14.55 9.45 14.25 8.27 14.25H4.23Z"
                  fill="#ffffff"
                />
                <path
                  d="M21 16.25H15C14.59 16.25 14.25 15.91 14.25 15.5C14.25 15.09 14.59 14.75 15 14.75H21C21.41 14.75 21.75 15.09 21.75 15.5C21.75 15.91 21.41 16.25 21 16.25Z"
                  fill="#ffffff"
                />
                <path
                  d="M21 20.25H15C14.59 20.25 14.25 19.91 14.25 19.5C14.25 19.09 14.59 18.75 15 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"
                  fill="#ffffff"
                />
              </svg>
              Overview
            </a>

            <a
              href="#"
              className="nav-item text-grey/80  bg-[#192729] hover:bg-[#1BA34D] dark:text-white mt-4 flex items-center space-x-2 py-2 px-8 transition duration-200 dark:hover:bg-red hover:bg-light-red hover:text-red hover:shadow-sm rounded-xl text-xl font-semibold"
            >
              <svg
                className="mr-3"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.7">
                  <path
                    d="M7.5 20.9251C7.2375 20.9251 6.96561 20.8594 6.72186 20.7282C6.18748 20.4469 5.85938 19.8844 5.85938 19.2844V17.9533C3.02813 17.6627 1.17188 15.5813 1.17188 12.6001V6.9751C1.17188 3.7501 3.3375 1.58447 6.5625 1.58447H15.9375C19.1625 1.58447 21.3281 3.7501 21.3281 6.9751V12.6001C21.3281 15.8251 19.1625 17.9907 15.9375 17.9907H12.4031L8.40935 20.6533C8.13747 20.8314 7.81875 20.9251 7.5 20.9251ZM6.5625 2.98134C4.14375 2.98134 2.57812 4.54696 2.57812 6.96571V12.5908C2.57812 15.0095 4.14375 16.5752 6.5625 16.5752C6.94688 16.5752 7.26562 16.8939 7.26562 17.2783V19.2752C7.26562 19.397 7.34063 19.4533 7.3875 19.4814C7.43438 19.5095 7.52813 19.5377 7.63126 19.472L11.8031 16.697C11.9156 16.622 12.0563 16.5752 12.1969 16.5752H15.9469C18.3656 16.5752 19.9312 15.0095 19.9312 12.5908V6.96571C19.9312 4.54696 18.3656 2.98134 15.9469 2.98134H6.5625Z"
                    fill="white"
                  />
                  <path
                    d="M11.2496 11.353C10.8652 11.353 10.5464 11.0343 10.5464 10.6499V10.453C10.5464 9.36556 11.3433 8.83117 11.6433 8.62492C11.9902 8.39055 12.1027 8.23118 12.1027 7.98743C12.1027 7.51868 11.7183 7.13428 11.2496 7.13428C10.7808 7.13428 10.3964 7.51868 10.3964 7.98743C10.3964 8.3718 10.0777 8.69055 9.69332 8.69055C9.30898 8.69055 8.99023 8.3718 8.99023 7.98743C8.99023 6.74055 10.0027 5.72803 11.2496 5.72803C12.4964 5.72803 13.5089 6.74055 13.5089 7.98743C13.5089 9.05618 12.7214 9.59054 12.4308 9.78741C12.0652 10.0312 11.9527 10.1905 11.9527 10.453V10.6499C11.9527 11.0437 11.6339 11.353 11.2496 11.353Z"
                    fill="white"
                  />
                  <path
                    d="M11.25 13.6875C10.8563 13.6875 10.5469 13.3687 10.5469 12.9844C10.5469 12.6 10.8656 12.2812 11.25 12.2812C11.6344 12.2812 11.9531 12.6 11.9531 12.9844C11.9531 13.3687 11.6437 13.6875 11.25 13.6875Z"
                    fill="white"
                  />
                </g>
              </svg>
              Support
            </a>
          </nav>
        </div>
        <nav data-dev-hint="second-main-navigation or footer navigation">
          <div className="flex flex-row items-center justify-center">
            <div className="border w-max border-grey/66 p-2 rounded-md mr-2 hover:bg-light-red dark:hover:bg-red hover:border-light-red nav-item ">
              <svg
                width="33"
                height="26"
                viewBox="0 0 33 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4422 0.418886C30.1458 1.02675 27.9395 2.16669 26.8308 2.38457C26.7879 2.39563 26.7529 2.40984 26.7115 2.42089C25.4183 1.15464 23.6463 0.369941 21.685 0.369941C17.7322 0.369941 14.527 3.55136 14.527 7.47484C14.527 7.68167 14.5095 8.06218 14.527 8.26427C9.40822 8.26427 5.67014 5.61336 2.87216 2.20616C2.49835 1.74829 2.10068 1.9867 2.01797 2.31195C1.83186 3.0477 1.76823 4.27764 1.76823 5.15549C1.76823 7.36748 3.51001 9.54 6.22211 10.8868C5.72264 11.0147 5.17226 11.1062 4.59962 11.1062C3.92518 11.1062 3.14893 10.931 2.46972 10.5773C2.21839 10.4463 1.67597 10.4826 1.83663 11.1204C2.48085 13.6766 5.42041 15.4718 8.0466 15.9944C7.4501 16.3433 6.17757 16.2723 5.5922 16.2723C5.37587 16.2723 4.62348 16.2218 4.13674 16.1618C3.69294 16.1081 3.01054 16.2218 3.58159 17.0807C4.808 18.9232 7.58213 20.0805 9.96972 20.1247C7.77142 21.8362 4.1765 22.4614 0.732705 22.4614C0.0359917 22.4457 0.0709865 23.2335 0.632493 23.5256C3.17279 24.8487 7.33398 25.6318 10.3069 25.6318C22.1256 25.6318 28.843 16.6907 28.843 8.2627C28.843 8.12691 28.8398 7.84272 28.8351 7.55694C28.8351 7.52852 28.843 7.50168 28.843 7.47326C28.843 7.43063 28.8303 7.38958 28.8303 7.34695C28.8255 7.13223 28.8207 6.93171 28.816 6.82751C29.7529 6.15649 31.1877 4.99128 31.913 4.09922C32.1596 3.79608 31.9607 3.42821 31.6251 3.54346C30.7614 3.84187 29.2677 4.41973 28.3324 4.53025C30.2046 3.30032 31.1304 2.22985 31.9257 1.04096C32.1977 0.635191 31.8573 0.223106 31.4422 0.418886Z"
                  fill="white"
                />
              </svg>
            </div>
            <a
              href="/login"
              className="border w-max border-grey/66 p-2 rounded-md mr-2 hover:bg-light-red dark:hover:bg-red hover:border-light-red nav-item "
            >
              <svg
                width="33"
                height="25"
                viewBox="0 0 33 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.2559 3.6012C25.8061 1.6472 22.3064 1.10767 20.7898 0.947266H20.7315C20.4982 0.947266 20.2795 1.0785 20.2066 1.29724C20.0753 1.63262 20.2795 1.99717 20.6149 2.0555C22.321 2.40547 24.2895 3.01792 26.0831 4.14074C26.4477 4.35947 26.5352 4.85526 26.2435 5.19065C26.0102 5.45312 25.6165 5.48229 25.3103 5.3073C21.8106 3.14916 17.4651 3.0325 16.6194 3.0325C15.7736 3.0325 11.4282 3.14916 7.92846 5.3073C7.62224 5.48229 7.22852 5.45312 6.99521 5.19065C6.70357 4.85526 6.79106 4.35947 7.15561 4.14074C8.94921 3.01792 10.9178 2.40547 12.6239 2.0555C12.9593 1.99717 13.1634 1.63262 13.0322 1.29724C12.9593 1.0785 12.7405 0.947266 12.5072 0.947266H12.4489C10.9324 1.10767 7.43267 1.6472 4.98289 3.6012C3.55384 4.92817 0.71034 12.5546 0.579102 19.3061C0.579102 19.7581 0.695758 20.2102 0.958235 20.5747C2.66434 22.9808 6.36818 24.4244 9.16794 24.6285C9.59082 24.6577 9.99912 24.4681 10.247 24.1182C10.2616 24.1182 10.2616 24.1036 10.2762 24.089C10.7865 23.3891 10.4803 22.3975 9.66373 22.0913C7.3306 21.2309 6.13487 20.2102 6.06196 20.1373C5.77032 19.8748 5.74115 19.4373 5.98905 19.1457C6.25153 18.854 6.68899 18.8249 6.98063 19.0874C7.02437 19.1165 10.2616 21.8725 16.6194 21.8725C22.9772 21.8725 26.2144 19.1165 26.2581 19.0874C26.5498 18.8249 26.9872 18.854 27.2497 19.1457C27.4976 19.4373 27.4684 19.8748 27.1768 20.1373C27.1039 20.2102 25.9082 21.2309 23.575 22.0913C22.7584 22.3975 22.4522 23.3891 22.9626 24.089C22.9772 24.1036 22.9772 24.1182 22.9917 24.1182C23.2396 24.4681 23.6479 24.6577 24.0708 24.6285C26.8706 24.4244 30.5744 22.9808 32.2805 20.5747C32.543 20.2102 32.6596 19.7581 32.6596 19.3061C32.5284 12.5546 29.6849 4.92817 28.2559 3.6012ZM12.0844 16.9875C10.7428 16.9875 9.64915 15.7335 9.64915 14.2024C9.64915 12.6567 10.7428 11.4026 12.0844 11.4026C13.4405 11.4026 14.5196 12.6567 14.5196 14.2024C14.5196 15.7335 13.4405 16.9875 12.0844 16.9875ZM21.1544 16.9875C19.7983 16.9875 18.7192 15.7335 18.7192 14.2024C18.7192 12.6567 19.7983 11.4026 21.1544 11.4026C22.4959 11.4026 23.5896 12.6567 23.5896 14.2024C23.5896 15.7335 22.4959 16.9875 21.1544 16.9875Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          <div className="flex flex-row items-center mt-12 mb-6 border border-white/60 p-2 px-4 justify-center rounded-lg">
            <img className="mr-3 w-8 h-8" src={User} />
            <div className="flex flex-col items-start">
              <p className=" text-grey/66 text-xs font-light text-left mb-1">
                @GhostyTheDev#0333
              </p>
              <p className=" text-grey/66 text-xs font-light text-left">
                ID: 1343498113
              </p>
            </div>
          </div>

          <a
            href="#"
            className="nav-item text-grey/80 justify-center  hover:text-white my-6 bg-[#EC6660]/10  hover:bg-[#1BA34D] text-[#EC6660] mt-4 flex items-center space-x-2 py-2 px-8 transition duration-200 dark:hover:bg-red hover:bg-light-red hover:text-red hover:shadow-sm rounded-xl text-xl font-semibold"
            onClick={signOut}
          >
            <svg
              className="mr-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.24 22.27H15.11C10.67 22.27 8.53002 20.52 8.16002 16.6C8.12002 16.19 8.42002 15.82 8.84002 15.78C9.24002 15.74 9.62002 16.05 9.66002 16.46C9.95002 19.6 11.43 20.77 15.12 20.77H15.25C19.32 20.77 20.76 19.33 20.76 15.26V8.74001C20.76 4.67001 19.32 3.23001 15.25 3.23001H15.12C11.41 3.23001 9.93002 4.42001 9.66002 7.62001C9.61002 8.03001 9.26002 8.34001 8.84002 8.30001C8.42002 8.27001 8.12001 7.90001 8.15001 7.49001C8.49001 3.51001 10.64 1.73001 15.11 1.73001H15.24C20.15 1.73001 22.25 3.83001 22.25 8.74001V15.26C22.25 20.17 20.15 22.27 15.24 22.27Z"
                fill="#EC6660"
              />
              <path
                d="M15.0001 12.75H3.62012C3.21012 12.75 2.87012 12.41 2.87012 12C2.87012 11.59 3.21012 11.25 3.62012 11.25H15.0001C15.4101 11.25 15.7501 11.59 15.7501 12C15.7501 12.41 15.4101 12.75 15.0001 12.75Z"
                fill="#EC6660"
              />
              <path
                d="M5.84994 16.1C5.65994 16.1 5.46994 16.03 5.31994 15.88L1.96994 12.53C1.67994 12.24 1.67994 11.76 1.96994 11.47L5.31994 8.12C5.60994 7.83 6.08994 7.83 6.37994 8.12C6.66994 8.41 6.66994 8.89 6.37994 9.18L3.55994 12L6.37994 14.82C6.66994 15.11 6.66994 15.59 6.37994 15.88C6.23994 16.03 6.03994 16.1 5.84994 16.1Z"
                fill="#EC6660"
              />
            </svg>
            Sign Out
          </a>
          <div className="flex flex-row items-center text-center mt-3 justify-center">
            <p className="text-white/30 text-xs">Privacy Policy</p>
            <p className="text-white/60 mx-2 text-xs  text-white/60">&</p>
            <p className="text-white/30 text-xs">Terms Of Service</p>
          </div>
          <p className="text-white/30 text-xs mx-auto w-100 text-left mt-2 ml-7">
            Copyright 2022 KASH Monitors.
          </p>
          <p className="text-white/30 text-xs mx-auto w-100 text-left mt-2 ml-16">
            {" "}
            All rights reserved.
          </p>
        </nav>
      </aside>
    </>
  );
}
