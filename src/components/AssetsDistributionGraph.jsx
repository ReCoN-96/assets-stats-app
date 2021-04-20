import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

const DoughnutWrapper = styled.div`
  height: 20rem;
  position: relative;
`;
const AmountWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const Amount = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 600;
`;

const Money = styled.span`
  color: ${(props) => props.theme.colors.grey};
  padding: 1rem;
`;

const options = {
  tooltips: { enabled: false },
  hover: { mode: null },
  responsive: true,
  legend: {
    display: false,
  },
  maintainAspectRatio: false,
  cutoutPercentage: 80,
};

const AssetsDistributionGraph = ({ sortedAssets = [] }) => {
  const partArray = sortedAssets.slice(0, 5)
    .map(({ part }) => Number(part));

  const otherPart = 100
  - sortedAssets.slice(0, 5)
    .map(({ part }) => Number(part))
    .reduce((acc, value) => acc + value, 0);

  const totalAmount = sortedAssets.map(
    // eslint-disable-next-line camelcase
    ({ actual_price, quantity }) => actual_price * quantity,
  ).reduce((acc, value) => acc + value, 0);

  const part = [...partArray, otherPart];

  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
    ],
    datasets: [{
      data: part,
      backgroundColor: part.map((el) => `rgb(85, 84, 204, ${el * 0.06})`),
      borderColor: '#1e1e1e',
    }],
  };
  return (
    <DoughnutWrapper>
      <AmountWrapper>
        <Amount>
          {totalAmount}
          {' '}
          $
        </Amount>
        <Money>USD</Money>
      </AmountWrapper>
      <Doughnut
        data={data}
        width={200}
        height={180}
        options={options}
      />
    </DoughnutWrapper>
  );
};

export default AssetsDistributionGraph;
