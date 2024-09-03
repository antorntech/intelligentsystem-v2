import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isNavEffect, setIsNavEffect] = useState(false);
  const [isMobileButtonActive, setIsMobileButtonActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const myMenu = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Services", link: "/services" },
    { id: 3, title: "Software", link: "/software" },
    { id: 4, title: "Training", link: "/training" },
    { id: 5, title: "Blogs", link: "/blogs" },
    { id: 6, title: "About", link: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsNavActive(true);
      } else {
        setIsNavActive(false);
      }

      if (window.scrollY > 100) {
        setIsNavEffect(true);
      } else {
        setIsNavEffect(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileButtonActive(!isMobileButtonActive);
  };

  const toggleSubMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);

    // Close the menu if it's open
    if (isMobileButtonActive) {
      setIsMobileButtonActive(false);
    }
  };

  return (
    <header
      className={`header ${isNavActive ? "active-nav" : ""} ${
        isNavEffect ? "nav-effect" : ""
      }`}
    >
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link to="/">
              <img className="img-fluid" src="/images/logo.png" alt="Logo" />
            </Link>
          </div>
          <nav
            className={`main-nav ${isMobileButtonActive ? "slidedown" : ""}`}
          >
            <ul className="menu">
              {myMenu.map((menu) => (
                <li
                  className={`menu-item ${
                    activeMenu === menu.id ? "slidedown" : ""
                  }`}
                  key={menu.id}
                >
                  <NavLink
                    to={menu.link}
                    onClick={() => toggleSubMenu(menu.id)}
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#074ba3" : "",
                      };
                    }}
                  >
                    {menu.title}
                  </NavLink>
                  {/* Example of a sub-menu (if needed) */}
                  {/* <ul
                    className="sub-menu"
                    style={{
                      display: activeMenu === menu.id ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link to={`${menu.link}/subpage1`}>Subpage 1</Link>
                    </li>
                    <li>
                      <Link to={`${menu.link}/subpage2`}>Subpage 2</Link>
                    </li>
                  </ul> */}
                </li>
              ))}
            </ul>
          </nav>
          <Link className="header-btn" to="/contact">
            Get In Touch
          </Link>
          <div
            className={`mobile-button ${isMobileButtonActive ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
