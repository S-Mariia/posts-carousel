import { useEffect, useRef } from 'react';

import * as d3 from 'd3';

import { Typography } from '@mui/material';
import { StyledBox } from './Statistics.styled';

const Statistics = ({ randStatistics }) => {
  const totalWievs = randStatistics.reduce((acc, item) => acc + item.views, 0);

  const chartRef = useRef(null);
  useEffect(() => {
    const data = [...randStatistics];

    const width = 400;
    const height = 300;

    d3.select(chartRef.current).selectAll('*').remove();

    const svg = d3
      .select('#chart-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-30, 30, width + 30, height - 45])
      .attr('style', 'max-width: 100%; height: 100%;');

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.views) + 30])
      .range([height, 0]);

    const xScale = d3
      .scaleBand()
      .domain(data.map(d => d.day))
      .range([0, width])
      .padding(0.1);

    svg
      .selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => xScale(d.day) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.views) - 12)
      .attr('text-anchor', 'middle')
      .text(d => d.views);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.day))
      .attr('y', d => yScale(d.views))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d.views))
      .attr('fill', '#3b91e1');

    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g').call(d3.axisLeft(yScale));
  }, [randStatistics]);

  return (
    <StyledBox>
      <Typography variant="h5" align="center" gutterBottom>
        Post views for the week
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Total views:
        <span style={{ color: '#F43F5E', fontWeight: 'bold' }}>
          {' '}
          {totalWievs}
        </span>
      </Typography>

      <div
        style={{ margin: '30px 15px 15px 20px' }}
        ref={chartRef}
        id="chart-container"
      ></div>
    </StyledBox>
  );
};

export default Statistics;
