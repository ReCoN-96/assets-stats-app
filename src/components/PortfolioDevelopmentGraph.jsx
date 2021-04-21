import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

const Container = styled.div`
  height: 10rem;
`;

const PortfolioDevelopmentGraph = ({ totalAmount = [] }) => {
  const dayArray = totalAmount.map(({ date }) => moment(date).format('YYYY-MM-DD'));
  const dayAmount = totalAmount.map(({ accountBalanceToday }) => accountBalanceToday);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const data = {
    labels: dayArray,
    datasets: [
      {
        label: 'Amount in $',
        fill: true,
        lineTension: 1,
        backgroundColor: 'rgb(85, 84, 204,0.04)',
        borderColor: 'rgb(85, 84, 204)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(85, 84, 204)',
        pointBackgroundColor: 'transparent',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(85, 84, 204)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dayAmount,
      },
    ],
  };
  return (
    <Container>
      <Line
        data={data}
        option={options}
        height={350}
        width={1100}
      />
    </Container>
  );
};

export default PortfolioDevelopmentGraph;
