import { ChartWrap } from '../styles/EChartStyle';
import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: '기쁜', value: 6 },
  { name: '슬픈', value: 5 },
  { name: '화난', value: 2 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function EmotionChart() {
  return (
    <ChartWrap>
      <PieChart width={200} height={200}>
        <Pie data={data} cx={100} cy={100} labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill='#8884d8' dataKey='value'>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ChartWrap>
  );
}
