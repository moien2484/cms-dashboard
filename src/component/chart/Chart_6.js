import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2009',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2010',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2011',
    uv: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2012',
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2013',
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2014',
    uv: -250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2015',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default class Chart6 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/area-chart-filled-by-sign-td4jqk';

  render() {
    return (
      <ResponsiveContainer aspect={1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="#24695c" stopOpacity={1} />
              <stop offset={off} stopColor="#ba895d" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
