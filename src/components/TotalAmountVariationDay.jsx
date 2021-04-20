import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const Variation = styled.span`
  color: ${(props) => props.theme.colors.green};
  font-weight: 600;
  font-size: 2.5rem;
`;
const VariationText = styled.span`
  color: ${(props) => props.theme.colors.grey};
  font-size: 1.2rem;
  font-weight: bold;
  padding-left: 1rem;
  vertical-align: super;
`;
const TotalAmountVariationDay = ({
  accountBalanceYesterday,
  accountBalanceToday,
  variation,
}) => {
  const data = {
    labels: ['yesterday', 'today'],
    datasets: [
      {
        lineTension: 0.1,
        borderColor: '#54bd81',
        data: [accountBalanceYesterday, accountBalanceToday],
        backgroundColor: 'transparent',
      },
    ],
  };
  const options = {
    tooltips: {
      enabled: true,
    },
    elements: { point: { radius: 0 } },
    hover: { mode: null },
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false, // this will remove only the label
        },
        gridLines: {
          display: false,
        },
      }],
      yAxes: [{
        ticks: {
          display: false, // this will remove only the label
        },
        gridLines: {
          display: false,
        },
      }],
    },
  };

  return (
    <>
      <Variation>
        {variation > 0 ? '+' : '-' }
        {Number(variation).toFixed(2)}
        %
      </Variation>
      <VariationText>24H %</VariationText>
      <Line
        data={data}
        options={options}
        width={200}
        height={125}
      />
    </>
  );
};

export default TotalAmountVariationDay;
