import React, { useState } from 'react';
import '../index.css';
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navLinks = [
    {
      label: 'Basmati Rice',
      dropdown: ['Long Grain Basmati', 'Extra Long Grain', 'Sella Basmati'],
    },
    {
      label: 'Organic Basmati Rice',
      dropdown: ['Organic White', 'Organic Brown', 'Organic Sella'],
    },
    {
      label: 'Services',
      dropdown: ['Export Services', 'Private Labeling', 'Bulk Orders'],
    },
    { label: 'About', dropdown: null },
    { label: 'Blog', dropdown: null },
  ];

  const navTextStyle = {
    color: 'rgba(252, 255, 255, 1)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '16px',
    letterSpacing: '0px',
    padding: '0.5rem 0.85rem',
    borderRadius: '6px',
    transition: 'background 0.2s',
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: '#467302',
        padding: '0.55rem 2rem',
        zIndex: 1050,
        minHeight: '78px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
        width:"100%",
      }}
    >
      <div className="container-fluid px-lg-4 d-flex align-items-center width:1096px ">
        
        {/* Logo */}
        <a
          className="navbar-brand"
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="/logo_image.png"
            alt="Logo"
            style={{
              width: '220px',
              height: '60px',
              objectFit: 'contain',
              objectPosition: 'top',
              display: 'block',
            }}
          />
        </a>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{ color: '#fff' }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: 'invert(1)' }}
          ></span>
        </button>

        {/* Nav Links */}
        <div
          className="collapse navbar-collapse justify-content-between align-items-center width:100% width:1096px"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto gap-1">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`nav-item ${link.dropdown ? 'dropdown' : ''}`}
              >
                {link.dropdown ? (
                  <>
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      style={navTextStyle}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(link.label);
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background =
                          'rgba(255,255,255,0.12)')
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = 'transparent')
                      }
                    >
                      {link.label}
                    </a>

                    <ul
                      className={`dropdown-menu ${
                        openDropdown === link.label ? 'show' : ''
                      }`}
                      style={{
                        backgroundColor: '#1e4d1e',
                        border: 'none',
                        borderRadius: '10px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                        padding: '0.5rem',
                        marginTop: '4px',
                      }}
                    >
                      {link.dropdown.map((item) => (
                        <li key={item}>
                          <a
                            className="dropdown-item"
                            href="#"
                            style={{
                              ...navTextStyle,
                              padding: '0.45rem 1rem',
                            }}
                            onMouseEnter={(e) =>
                              (e.target.style.background =
                                'rgba(168,224,99,0.18)')
                            }
                            onMouseLeave={(e) =>
                              (e.target.style.background = 'transparent')
                            }
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    className="nav-link"
                    href="#"
                    style={navTextStyle}
                    onMouseEnter={(e) =>
                      (e.target.style.background =
                        'rgba(255,255,255,0.12)')
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = 'transparent')
                    }
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#"
            className="btn d-flex align-items-center gap-2"
            style={{
              backgroundColor: '#fff',
              color: '#5d7e2a',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              fontSize: '16px',
              borderRadius: '50px',
              padding: '0.25rem 1rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              transition: 'all 0.25s',
              textDecoration: 'none',
              marginRight: '-20px',
              marginLeft: '25px',
              
             
               
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a8e063';
              e.currentTarget.style.color = '#1a3d1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#2d6a2d';
            }}
          >
            
            Get a Quote
            <span
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#92ba55',
    color: 'rgb(255, 255, 255)',
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '32px',
     
  }}
>
  &#9993;
</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;