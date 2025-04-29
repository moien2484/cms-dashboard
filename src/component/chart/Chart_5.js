import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '10 اردیبهشت',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '12 اردیبهشت',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '14 اردیبهشت',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '16 اردیبهشت',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '18 اردیبهشت',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  
];

export default class Chart5 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <ResponsiveContainer aspect={2}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#24695c" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#ba895d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
