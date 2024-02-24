import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend} from "recharts";

const HomeRechart = (props) => {

  const data = [
    {
      "name": "MSFT",
      "2018": 4000,
      "2019": 2400,
      "2020": 2530
    },
    {
      "name": "AMZN",
      "2018": 3000,
      "2019": 1398,
      "2020": 1200
    },
    {
      "name": "APPL",
      "2018": 2000,
      "2019": 9800,
      "2020": 2400
    },
    {
      "name": "FB",
      "2018": 4000,
      "2019": 6200,
      "2020": 5500
    }    
  ];

  return (
   <section>
    <h2>Home Rechart </h2>
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="2018" fill="#8884d8" />
      <Bar dataKey="2019" fill="#82ca9d" />
      <Bar dataKey="2020" fill="#FF8042" />
    </BarChart>
   </section>
  );

};

export default HomeRechart;