import React from 'react';
import {DiDatabase, DiModernizr, DiPhotoshop, DiPython, DiRasberryPi, DiSqllite, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <SectionTitle >Technologies</SectionTitle>
    <SectionText> I am experienced with a variety of technologies as a back end developer!</SectionText> <br/>
    <List>
      <ListItem> 
        <DiDatabase size= "3rem"/>
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            
            Sqlite3 <br/>
            OpenCV<br/>
            Pandas <br/>
            Matplotlib <br/>
            Pygame 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem> 
        <DiPhotoshop size= "3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Photoshop<br/>
            Canva
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem> 
        <DiModernizr size= "3rem"/>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Blender<br/>
            Arduino <br/>
            Raspberry Pi <br/>
            Filmora 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
