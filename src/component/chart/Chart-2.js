import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '35-39',
    uv: 60,
    pv: 9800,
    fill: '#ba895d',
  },
  {
    name: '40-49',
    uv: 40,
    pv: 3908,
    fill: '#24695c',
  },
  {
    name: '50+',
    uv: 30,
    pv: 4800,
    fill: '#ba895d',
  },
  {
    name: 'unknow',
    uv: 50,
    pv: 4800,
    fill: '#24695c',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radial-bar-chart-gnwjjg';

  render() {
    return (
      <ResponsiveContainer aspect={1}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="70%" barSize={10} data={data}  startAngle ={180}  endAngle={450} >
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
  
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}