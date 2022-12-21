import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

import Link from 'next/link';

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <Copyright>
          Copyright © {new Date().getFullYear()} All Rights Reserved
        </Copyright>
        <SocialButtons>
          <SocialButton>
            {/* <a href="https://www.facebook.com/kochvei" target="_blank">
              <FaFacebookF style={{ color: '#0c1670' }} />
            </a> */}
            <Link href="https://www.facebook.com/kochvei" target="_blank">
              <FaFacebookF style={{ color: '#0c1670' }} />
            </Link>
          </SocialButton>
          <SocialButton>
            <Link href="https://www.instagram.com/kochvei/" target="_blank">
              <BsInstagram style={{ color: '#0c1670' }} />
            </Link>
          </SocialButton>
          <SocialButton>
            <Link
              href="https://www.linkedin.com/company/kochvei/"
              target="_blank">
              <FaLinkedinIn style={{ color: '#0c1670' }} />
            </Link>
          </SocialButton>
        </SocialButtons>
        <Policies>
          <Policy>Privacy Policy</Policy>
          <Policy>Terms of Use</Policy>
          <Policy>Disclaimer</Policy>
        </Policies>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  background-color: #eff9ff;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 7em;
  font-family: 'montserrat', sans-serif;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1033px) {
    flex-direction: column;
    gap: 10px;
    padding: 20px 4em;
    text-align: center;
  }
`;

const Copyright = styled.p`
  @media (max-width: 1033px) {
    order: 3;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 1033px) {
    order: 1;
  }
`;

const SocialButton = styled.button`
  background-color: transparent;
  border: none;
`;

const Policies = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  list-style: none;
  gap: 10px;

  @media (max-width: 1033px) {
    order: 2;
  }

  @media (max-width: 486px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const Policy = styled.li``;
