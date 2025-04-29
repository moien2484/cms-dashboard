import React, { PureComponent } from 'react';
import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 2850,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 1900,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2380,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 3400,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Chart4 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/area-chart-in-responsive-container-y5m29r';

  render() {
    return (
      <div style={{ width: '100%', height: "50%" }}>
        <ResponsiveContainer aspect={1}>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#ba895d" fill="rgba(186, 137, 93, 0.1)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
