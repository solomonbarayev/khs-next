import navLinks from '../content/navLinks';
import styled from 'styled-components';
import {
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../utils/style-variables';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/Logo-Vertical-Color.png';
import { useAuth } from '../contexts/AuthContext';

const Navigation = ({ type, setIsOpen }) => {
  const { user } = useAuth();
  return (
    <Nav className="nav" type={type}>
      <div className="nav__logo">
        <Image src={logo} alt="logo" className="nav__logo-img" type={type} />
      </div>
      {/* menu */}
      <ul className="nav__menu">
        {navLinks.map((linkItem) => {
          const { id, text, link } = linkItem;
          if (text === 'Login' && user != null) {
          } else if (text === 'Dashboard' && user == null) {
          } else if (text === 'Logout' && user == null) {
          } else if (text === 'My Application' && user == null) {
          } else {
            return (
              <li key={id} className="nav__menu-item">
                <Link
                  href={link}
                  className="nav__menu-link"
                  activeclassname="nav__menu-link_active"
                  onClick={() => {
                    if (type === 'mobile') setIsOpen(false);
                  }}>
                  {text}
                </Link>
              </li>
            );
          }
        })}
      </ul>
      <div className="nav__btn-container">
        <button className="nav__btn nav__btn_type_donate">Donate</button>
        <button className="nav__btn nav__btn_type_apply">Apply</button>
      </div>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  box-sizing: border-box;
  display: ${({ type }) => (type === 'mobile' ? 'none' : 'flex')};
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  padding: 15px 20px 20px;
  background-color: ${({ type }) => (type === 'mobile' ? '#fff' : 'aliceblue')};
  height: 100vh;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  .nav__logo-img {
    width: 100%;
    max-width: ${({ type }) => (type === 'mobile' ? '100px' : '180px')};
    max-height: ${({ type }) => (type === 'mobile' ? '150px' : '200px')};
    box-sizing: border-box;
    object-fit: contain;
  }

  .nav__menu {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1.1rem;
    font-family: 'Montserrat', sans-serif;
  }

  .nav__menu-link {
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #1f3c68;
    }
  }

  .nav__btn-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .nav__btn {
      background-color: ${primaryColor};
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 1.1rem;
      font-family: 'Montserrat', sans-serif;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: ${primaryColor};
        opacity: 0.9;
      }

      &_type_apply {
        background-color: ${secondaryColor};
        color: #fff;
        border: 1px solid ${secondaryColor};
        &:hover {
          background-color: #1f3c68;
          border: 1px solid #1f3c68;
          color: ${whiteColor};
        }
      }
    }
  }

  @media (max-width: 1089px) {
    /* display: none; */
    display: ${({ type }) => (type === 'mobile' ? 'flex' : 'none')};
  }
`;
