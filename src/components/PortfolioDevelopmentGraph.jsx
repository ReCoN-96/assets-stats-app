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
    // tooltips: {
    //   custom: (tooltipModel) => {
    //     // if chart is not defined, return early
    //     const chart = chartRef.current;
    //     if (!chart) {
    //       return;
    //     }

    //     // hide the tooltip when chartjs determines you've hovered out
    //     if (tooltipModel.opacity === 0) {
    //       // eslint-disable-next-line no-undef
    //       hide();
    //       return;
    //     }

    //     const position = chart.chartInstance.canvas.getBoundingClientRect();
    //     console.log(position);
    //     // assuming your tooltip is `position: fixed`
    //     // set position of tooltip
    //     const left = position.left + tooltipModel.caretX;
    //     const top = position.top + tooltipModel.caretY;

    //     // set values for display of data in the tooltip
    //     const date = tooltipModel.dataPoints[0].xLabel;
    //     const value = tooltipModel.dataPoints[0].yLabel;

    //     setState({
    //       top, left, date, value,
    //     });
    //   },
    // },
  };

  const data = {
    labels: dayArray,
    datasets: [
      {
        label: 'My First dataset',
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
