import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SideLogo from "./assets/side-bar-logo.png";
import Dashboard from "./assets/dashboard.png";
import Inspector from "./assets/inspector.png";
import Pest from "./assets/pest.png";
import Treatment from "./assets/treatment.png";
import Users from "./assets/users.png";
import Chat from "./assets/chat.png";
import Orders from "./assets/order.png";
import Logout from "./assets/logout.png";
import { useMyContext } from "../../Context/Context";

function SideBar() {
  const { pageHeading, setPageHeading,setDelTechnician } = useMyContext();
  const { openLogout, setOpenLogout } = useMyContext();
  const activeNave = useLocation();
  const [isActive, setActive] = useState();
  useEffect(() => {
    setActive(activeNave.pathname);
  }, [activeNave]);
  const [toggleNav, setNavbarActive] = useState("-translate-x-full");
  const [activeNavbar, setactiveNavbar] = useState("hidden");
  const toggleSidebar = () => {
    if (toggleNav == "-translate-x-full") {
      setNavbarActive("translate-x-0");
      setactiveNavbar("block");
    } else if (toggleNav == "translate-x-0") {
      setNavbarActive("-translate-x-full");
      setactiveNavbar("hidden");
    }
  };
  const handleLinkClick = (heading) => {
    setPageHeading(heading);
    toggleSidebar();
    setDelTechnician(false)
  };
  return (
    <>
      <Navbar
        fluid
        className="border-b border-[#0a0a0a1c] bg-[#ffff] lg:ps-[272px]"
      >
        <Navbar.Brand className="text-2xl font-semibold py-5 text-black">
          {pageHeading}
        </Navbar.Brand>

        <div className="flex md:order-2">
          {/* <Dropdown
            arrowIcon={false}
            inline
            label={[
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                className="me-3 w-[50px]"
              />,
              <p className="me-3 font-semibold text-[#003a5f]">
                Cameron W. <br />
                <span className="w-full text-start block text-sm mt-1 text-[#c90000]">
                  Admin
                </span>
              </p>,
            ]}
          >
  
          </Dropdown> */}
          <Navbar.Toggle
            onClick={toggleSidebar}
            className="ms-2 lg:hidden md:block text-black"
          />
        </div>
      </Navbar>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 lg:z-0 z-50 w-[255px] h-full transition-transform ${toggleNav} lg:translate-x-0 poppins`}
        aria-label="Sidebar"
      >
        <div className="h-full py-4 pe-5 pt-10 flex justify-between items-center flex-col overflow-y-auto overflow-x-hidden  bg-[#0064a5] relative side-nav">
          <div>
            <div className="flex justify-center items-center w-full">
              <img
                src={SideLogo}
                alt=""
                className="w-[215px] bg-white px-3 py-3 rounded-lg ms-5"
              />
            </div>
            <ul className="space-y-7 font-medium mt-10">
              <li className="flex items-center gap-1">
                {isActive === "/Dashboard" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                <Link
                  onClick={() => handleLinkClick("Dashboard")}
                  to={"/Dashboard"}
                  className={`flex items-center cursor-pointer ${
                    isActive === "/Dashboard" ? "bg-[#c90000]" : ""
                  } py-3 ps-5 text-white rounded group w-[215px]`}
                >
                  <img src={Dashboard} alt="" className="w-[20px]" />
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li className="flex items-center gap-1">
                {isActive === "/All-Clients" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                {isActive === "/Active-Clients" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                {isActive === "/Inactive-Clients" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                {isActive === "/Delete-Clients" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                <Link
                  onClick={() => handleLinkClick("All Clients")}
                  to={"/All-Clients"}
                  className={`flex items-center cursor-pointer ${
                    isActive === "/All-Clients" ||
                    isActive === "/Active-Clients" ||
                    isActive == "/Inactive-Clients" || isActive == "/Delete-Clients" 
                      ? "bg-[#c90000]"
                      : ""
                  } py-3 ps-5 text-white rounded group w-[215px]`}
                >
                  <img src={Users} alt="" className="w-[20px]" />
                  <span className="ms-3">All Clients</span>
                </Link>
              </li>
              <li className="flex items-center gap-1">
                {isActive === "/Technician" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                <Link
                  onClick={() => handleLinkClick("Technician")}
                  to={"/Technician"}
                  className={`flex items-center cursor-pointer ${
                    isActive === "/Technician" ? "bg-[#c90000]" : ""
                  } py-3 ps-5 text-white rounded group w-[215px]`}
                >
                  <img src={Inspector} alt="" className="w-[18px]" />
                  <span className="ms-3">Technician</span>
                </Link>
              </li>
              <li className="flex items-center gap-1">
                {isActive === "/Pests" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                <Link
                  onClick={() => handleLinkClick("Pests Types")}
                  to={"/Pests"}
                  className={`flex items-center cursor-pointer ${
                    isActive === "/Pests" ? "bg-[#c90000]" : ""
                  } py-3 ps-5 text-white rounded group w-[215px]`}
                >
                  <img src={Pest} alt="" className="h-[25px] w-[20px]" />
                  <span className="ms-3">Pests</span>
                </Link>
              </li>
              <li className="flex items-center gap-1">
                {isActive === "/Treatment" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                <Link
                  onClick={() => handleLinkClick("Treatment Types")}
                  to={"/Treatment"}
                  className={`flex items-center cursor-pointer ${
                    isActive === "/Treatment" ? "bg-[#c90000]" : ""
                  } py-3 ps-5 text-white rounded group w-[215px]`}
                >
                  <img src={Treatment} alt="" className="w-[27px]" />
                  <span className="ms-3">Treatment</span>
                </Link>
              </li>
              <li className="flex items-center gap-1">
                {isActive === "/ChatComp" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                <Link
                  onClick={() => handleLinkClick("Chat")}
                  to={"/ChatComp"}
                  className={`flex items-center cursor-pointer ${
                    isActive === "/ChatComp" ? "bg-[#c90000]" : ""
                  } py-3 ps-5 text-white rounded group w-[215px]`}
                >
                  <img src={Chat} alt="" className="w-[20px]" />
                  <span className="ms-3">Chat</span>
                </Link>
              </li>
              <li className="flex items-center gap-1">
                {isActive === "/Orders" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                 {isActive === "/Active-Orders" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                {isActive === "/Orders-History" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                {isActive === "/Orders-Detail" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                {isActive === "/Gallery" && (
                  <span className="inline rounded-r h-full text-5xl w-1 me-3 bg-[#c90000]">
                    &nbsp;
                  </span>
                )}
                <Link
                  onClick={() => handleLinkClick("Pending Orders")}
                  to={"/Orders"}
                  className={`flex items-center cursor-pointer ${
                    isActive === "/Orders" ||
                    isActive === "/Orders-History" ||
                    isActive == "/Orders-Detail" ||
                    isActive == "/Gallery" ||
                    isActive == "/Active-Orders" 
                      ? "bg-[#c90000]"
                      : ""
                  } py-3 ps-5 text-white rounded group w-[215px]`}
                >
                  <img src={Orders} alt="" className="w-[20px]" />
                  <span className="ms-3">Orders</span>
                </Link>
              </li>
              <li className="flex items-center gap-x-2 ms-5">
                <button
                  onClick={() => {
                    setOpenLogout(true);
                    toggleSidebar();
                  }}
                  className="text-white flex items-center mt-5"
                >
                  <img src={Logout} alt="" className="w-[20px]" />
                  <span className="ms-3">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <div
        onClick={toggleSidebar}
        className={`${activeNavbar} lg:hidden bg-gray-900/50 fixed inset-0 z-40`}
      ></div>
    </>
  );
}

export default SideBar;
