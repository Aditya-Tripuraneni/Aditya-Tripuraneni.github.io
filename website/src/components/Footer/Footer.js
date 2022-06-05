import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href= "mailto:contact@aditya.tripuraneni905@gmail.com">contact@aditya.tripuraneni905@gmail.com </LinkItem>

        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer><Slogan/></CompanyContainer>
          <SocialContainer>
            <SocialIcons href = "https://github.com/Aditya-Tripuraneni">  
              <AiFillGithub size = "3rem" color='black' />
            </SocialIcons>
            <SocialIcons href = "https://www.instagram.com/_aditya.t_/?hl=en">
              <AiFillInstagram size = "3rem" color = 'black'/>
            </SocialIcons>
            <SocialIcons href = "https://www.linkedin.com/in/aditya-tripuraneni-66b438240/">
              <AiFillLinkedin size = "3rem" color = 'black' />
            </SocialIcons>
          </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>

  );
};

export default Footer;
