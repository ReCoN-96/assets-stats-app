import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  display: flex; 
  flex: 40%;
  flex-direction: row;
  height: 4.2rem;
  margin-bottom: 1rem;
  width: max-content;
`;

const Legend = styled.div`
  background-color: ${(props) => props.theme.colors.violet};
  height: 0.3rem;
  width: 2.6rem;
  border-radius: 3rem;
  margin: 0.7rem 0 0 0;
  opacity: ${(props) => props.part * 0.06};
`;
const Name = styled.span`
  color: ${(props) => props.theme.colors.grey};
`;
const Variation = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  padding-top: 0.4rem;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
const AssetsDistributionItem = ({ name, id, part }) => (
  <Container>
    <Legend part={part} />
    <DataWrapper>
      <Name>
        {id}
        {' '}
        {name !== 'Other' && '-'}
        {' '}
        {name}
      </Name>
      <Variation>
        {part}
        %
      </Variation>
    </DataWrapper>
  </Container>
);

export default AssetsDistributionItem;
