import React, { PureComponent } from "react";
import "./Chart_1.css"
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";

const data = [
  {
    name: "فرودین",
    uv: 2300,
    
  },
  {
    name: "اردیبهشت",
    uv: 3000,
    
  },
  {
    name: "خرداد",
    uv: 2000,
    
  },
  {
    name: "تیر",
    uv: 2780,
    
  },
  {
    name: "مرداد",
    uv: 1890,
    
  },
  {
    name: "شهریور",
    uv: 2390,
    
  },
  {
    name: "مهر",
    uv: 3490,
    
  },
];

const cardinal = curveCardinal.tension(0.2);

export default class Mainchart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/area-chart-different-shapes-6lwnhy";

  render() {
    return (
      <div className="chartcustom rounded">
        <ResponsiveContainer aspect={2}>
        <div className="subject-chart">
        <h2>نمودار کلی فروش</h2>
        <div className="sub-chart">
            <h5>859.25 تومان</h5>
            <i class="bx bx-left-top-arrow-circle bx-rotate-90"></i>
            <p>86 درصد بیشتر از سال گذشته</p>
        </div>
        </div>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Area
              type={cardinal}
              dataKey="uv"
              stroke="#24695c"
              fill="#e6edef"
              fillOpacity={0.3}
              
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
