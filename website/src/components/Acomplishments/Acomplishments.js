import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "15+", text: 'Open Source Projects'},
  { number: "Python", text: 'Finance Tracker\nComputer Vision\n Machine Learning', },
  { number: "Java", text: 'Pet Expense Tracker\n Vigenere Cypher', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key = {index}> 
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>

        ))}
      </Boxes>
  </Section>
);

export default Acomplishments;
