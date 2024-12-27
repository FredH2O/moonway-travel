import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  BuildingOffice2Icon,
  GlobeEuropeAfricaIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  const toggleMenu = () => {
    menuOpen
      ? (setAnimation(true),
        setTimeout(() => {
          setAnimation(false);
          setMenuOpen(false);
        }, 600))
      : setMenuOpen(true);
  };

  const navigationLinks = [
    {
      to: "/moonway-travel/",
      label: "Home",
      icon: <HomeIcon className="w-5 h-5 text-secondary mr-1" />,
    },
    {
      to: "/moonway-travel/hotels",
      label: "Hotels",
      icon: <BuildingOffice2Icon className="w-5 h-5 text-secondary mr-1" />,
    },
    {
      to: "/moonway-travel/about",
      label: "About Us",
      icon: <UsersIcon className="w-5 h-5 text-secondary mr-1" />,
    },
    {
      to: "/moonway-travel/destinationdeals",
      label: "Destinations",
      icon: <GlobeEuropeAfricaIcon className="w-5 h-5 text-secondary mr-1" />,
    },
    {
      to: "/moonway-travel/contact",
      label: "Contact",
      icon: <ChatBubbleLeftIcon className="w-5 h-5 text-secondary mr-1" />,
    },
  ];

  return (
    <header className="relative w-full bg-primary text-secondary z-50">
      <nav className="flex justify-between items-center p-4 z-50">
        <div className="flex items-center z-50">
          <img src="./images/moonwayLogo.png" alt="Logo" className="h-10" />
          <h1 className="font-bold text-xl ml-2">Moonway Travels</h1>{" "}
        </div>

        {/* burger icon */}
        <div className="lg:hidden z-20">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-secondary" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-secondary" />
            )}
          </button>
        </div>

        {/* desktop */}
        <ul className="hidden lg:flex space-x-6">
          {navigationLinks.map(({ to, label }) => (
            <li className="flex" key={to}>
              <Link
                to={to}
                className="ml-1 hover:text-accent transition-all duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* mmobile screen */}
        {menuOpen ? (
          <ul
            className={`z-0 animate__animated ${
              animation ? "animate__fadeOutUp" : "animate__slideInDown"
            } absolute flex flex-col items-center space-y-4 top-16 left-0 w-full bg-primary text-secondary lg:hidden p-4`}
          >
            {navigationLinks.map(({ to, label, icon }) => (
              <li className="flex border-secondary" key={to}>
                {icon}
                <Link
                  to={to}
                  aria-label={label}
                  className="ml-2 z-0 hover:text-accent transition duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
