import React, { useState } from "react";

const Navbar = () => {
  const [isFeatureMenuOpen, setFeatureMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div className="w-full h-16 flex justify-between items-center md:px-10 md:py-12 py-3 px-4">
      <div className="flex items-center space-x-4 md:space-x-10 ">
        <div className="mr-8">
          <img src="/images/logo.svg" alt="logo" className="w-16 md:w-auto" />
        </div>

        {/* Main menu for md screens */}
        <div className="md:flex gap-5 hidden text-[#696969] text-xl">
          <div className="relative flex items-center gap-3 ">
            <span>Features</span>
            <div
              className="cursor-pointer"
              onClick={() => setFeatureMenuOpen(!isFeatureMenuOpen)}
            >
              <img
                src={
                  isFeatureMenuOpen
                    ? "/images/icon-arrow-up.svg"
                    : "/images/icon-arrow-down.svg"
                }
                alt=""
              />
            </div>

            {/* Dropdown for "Features" on md screens */}
            {isFeatureMenuOpen && (
              <div className="absolute top-8 right-2 w-40 bg-white shadow-lg rounded-md p-3 text-gray-700 text-sm cursor-pointer">
                <div className="flex items-center gap-2 m-2">
                  <img
                    src="/images/icon-todo.svg"
                    alt="Todo Icon"
                    className="w-4 h-4"
                  />
                  <span>Todo List</span>
                </div>
                <div className="flex items-center gap-2 m-2">
                  <img
                    src="/images/icon-calendar.svg"
                    alt="Calendar Icon"
                    className="w-4 h-4"
                  />
                  <span>Calendar</span>
                </div>
                <div className="flex items-center gap-2 m-2">
                  <img
                    src="/images/icon-reminders.svg"
                    alt="Reminders Icon"
                    className="w-4 h-4"
                  />
                  <span>Reminders</span>
                </div>
                <div className="flex items-center gap-2 m-2">
                  <img
                    src="/images/icon-planning.svg"
                    alt="Planning Icon"
                    className="w-4 h-4"
                  />
                  <span>Planning</span>
                </div>
              </div>
            )}
          </div>

          <div className="relative flex items-center gap-3">
            <span>Company</span>
            <div
              className="cursor-pointer"
              onClick={() => setCompanyMenuOpen(!isCompanyMenuOpen)}
            >
              <img
                src={
                  isCompanyMenuOpen
                    ? "/images/icon-arrow-up.svg"
                    : "/images/icon-arrow-down.svg"
                }
                alt=""
              />
            </div>

            {/* Dropdown for "Company" on md screens */}
            {isCompanyMenuOpen && (
              <div className="absolute top-8 left-4 w-40 bg-white shadow-lg rounded-md p-3 text-gray-700 flex flex-col text-sm cursor-pointer">
                <span className="p-1">History</span>
                <span className="p-1">Our Team</span>
                <span className="p-1">Blog</span>
              </div>
            )}
          </div>
          <div>Careers</div>
          <div>About</div>
        </div>
      </div>

      <div className="md:flex gap-8 hidden text-[#696969] text-xl">
        <button className=" w-full px-4 py-2   hover:border-gray-800 rounded-xl border-2">
          Login
        </button>
        <button className="w-full px-4 py-2  hover:border-gray-800 rounded-xl border-2">
          Register
        </button>
      </div>

      {/* Mobile menu icon */}
      <img
        src={
          isMenuOpen ? "/images/icon-close-menu.svg" : "/images/icon-menu.svg"
        }
        alt="menu"
        className="md:hidden block"
        onClick={() => setisMenuOpen(!isMenuOpen)}
      />

      {/* Sidebar for mobile screens */}
      {isMenuOpen && (
        <div className="fixed top-14 right-0 h-full text-[#696969] bg-white  w-64 shadow-xl  z-20 p-5 md:hidden">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span>Features</span>
              <img
                src={
                  isFeatureMenuOpen
                    ? "/images/icon-arrow-up.svg"
                    : "/images/icon-arrow-down.svg"
                }
                alt=""
                onClick={() => setFeatureMenuOpen(!isFeatureMenuOpen)}
              />
            </div>
            {isFeatureMenuOpen && (
              <div className="flex flex-col pl-4 space-y-2">
                <div className="flex items-center gap-2">
                  <img src="/images/icon-todo.svg" alt="" srcset="" />
                  <span>Todo List</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/icon-calendar.svg"
                    alt="Calendar Icon"
                    className="w-4 h-4"
                  />
                  <span>Calendar</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/icon-reminders.svg"
                    alt="Reminders Icon"
                    className="w-4 h-4"
                  />
                  <span>Reminders</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/icon-planning.svg"
                    alt="Planning Icon"
                    className="w-4 h-4"
                  />
                  <span>Planning</span>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span>Company</span>
              <img
                src={
                  isCompanyMenuOpen
                    ? "/images/icon-arrow-up.svg"
                    : "/images/icon-arrow-down.svg"
                }
                alt=""
                onClick={() => setCompanyMenuOpen(!isCompanyMenuOpen)}
              />
            </div>
            {isCompanyMenuOpen && (
              <div className="flex flex-col pl-4 space-y-2">
                <span>History</span>
                <span>Our Team</span>
                <span>Blog</span>
              </div>
            )}
            <span>Careers</span>
            <span>About</span>
            <div className=" mx-auto space-y-3">
              <button className="mt-4 w-full  hover:border-gray-800 rounded-xl border-2 p-4 text-center">
                Login
              </button>
              <button className="w-full hover:border-gray-800 rounded-xl border-2 p-4 text-center">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
