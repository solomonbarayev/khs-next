import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';
import { primaryFont } from '../utils/style-variables';
import { BiMenuAltRight } from 'react-icons/bi';
import { useState } from 'react';
import Drawer from './Drawer';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div className="app__layout-wrapper">
        <div className="app__layout-sidebar">
          <Navbar />
        </div>
        <div className="app__layout-content">
          {children}
          <Footer />
        </div>
      </div>

      <HamburgerContainer onClick={() => setIsOpen(!isOpen)}>
        <BiMenuAltRight />
      </HamburgerContainer>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Navbar type="mobile" setIsOpen={setIsOpen} />
      </Drawer>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  font-family: ${primaryFont};

  .app__layout-wrapper {
    display: grid;
    grid-template-columns: 200px 1fr;
    height: 100vh;
    box-sizing: border-box;
  }
  .app__layout-sidebar {
    height: 100vh;
    box-sizing: border-box;
  }

  .app__layout-content {
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;

    //hide scrollbar
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 1089px) {
    .app__layout-wrapper {
      grid-template-columns: 1fr;
    }
    .app__layout-sidebar {
      height: 0;
    }
  }
`;

const HamburgerContainer = styled.div`
  display: none;
  @media (max-width: 1089px) {
    display: block;
    position: absolute;
    z-index: 99999;
    top: 20px;
    right: 20px;
    font-size: 3rem;
    color: #0c1670;
    cursor: pointer;
  }
`;
