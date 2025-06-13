import React from 'react';

function Navbar() {
    return (
        <header className="border-b border-gray-300 bg-white px-6 py-4 tracking-wide relative z-50 shadow-md">
            <div className="flex items-center justify-between">

                {/* Left Side (Logo or Sidebar Toggle) */}
                <div className="flex items-center space-x-4">
                    <button id="toggleOpen" className="lg:hidden cursor-pointer">
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                {/* Center - Search Bar */}
                <div className="flex-grow max-w-md mx-4">
                    <div className="bg-gray-100 flex items-center px-4 rounded-full h-10 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" className="w-4 h-4 fill-gray-500 mr-3">
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803z" />
                        </svg>
                        <input type="text" placeholder="Search..." className="w-full outline-none bg-transparent text-slate-900 text-sm" />
                    </div>
                </div>

                {/* Right Side Icons */}
                <div className="flex items-center space-x-6">

                    {/* Heart */}
                    <span className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px"
                            className="cursor-pointer fill-[#000] hover:fill-blue-700 inline-block" viewBox="0 0 64 64">
                            <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                        </svg>
                        <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
                    </span>

                    {/* Cart */}
                    <span className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                            className="cursor-pointer fill-[#000] hover:fill-blue-700 inline-block" viewBox="0 0 512 512">
                            <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" />
                        </svg>
                        <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">4</span>
                    </span>

                    {/* Bell */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px"
                        className="cursor-pointer fill-[#000] hover:fill-blue-700 inline-block" viewBox="0 0 371.263 371.263">
                        <path d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731z" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
