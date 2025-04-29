import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./Chart_3.css"
const data = [
  {
    name: 'فروردین',
    uv: 4000,
    pv: 7800,
    amt: 2400,
  },
  {
    name: 'آذر',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'خرداد',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'تیر',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'مرداد',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'شهریور',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'مهر',
    uv: 3490,
    pv: 6700,
    amt: 2100,
  },
];

export default class BarChart3 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8';

  render() {
    return (
      <ResponsiveContainer aspect={1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          
          <Tooltip />
          
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#24695c" background={{ fill: '#e6edef' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
