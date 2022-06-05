import React from 'react';

import { Section, SectionText, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const pdf = (e) =>{
  location.href = '/images/Aditya_Resume.pdf';
}

const Hero = (props) => (
  <Section row no padding>
    <LeftSection>
      <SectionTitle main center> 
      Hey! I'm 
      <SectionTitle2 >Aditya Tripuraneni</SectionTitle2> 
      I am a passionate software developer!
      </SectionTitle>
      <SectionText>
        <Button onClick = {pdf}> Resume </Button>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;