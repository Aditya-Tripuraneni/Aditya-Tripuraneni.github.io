import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck, DiGhost, DiGhostSmall } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = "/"> 
        <a style = {{display: "flex", alignItems: "center" , color: 'white'}}>
          <DiGhostSmall size = "3.5rem" /> <Span> Portfolio </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li> 
        <Link href = "#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li> 
        <Link href = "#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li> 
        <Link href = "#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href = "https://github.com/Aditya-Tripuraneni">  
        <AiFillGithub size = "3rem" color='black' ></AiFillGithub>
      </SocialIcons>
      <SocialIcons href = "https://www.instagram.com/_aditya.t_/?hl=en">
        <AiFillInstagram size = "3rem" color = 'black'></AiFillInstagram>
      </SocialIcons>

      <SocialIcons href = "https://www.linkedin.com/in/aditya-tripuraneni-66b438240/">
        <AiFillLinkedin size = "3rem" color = 'black' ></AiFillLinkedin>
      </SocialIcons>


    </Div3>
  </Container>
);

export default Header;
