import React, { useState, useEffect } from 'react';
import { ScatterChart,Scatter, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import wineData from './wine.json';


interface WineData {
  alcohol: number;
  color_intensity: number;
  magnesium: number;
  wine_type: string;
  
}

const App = () => {
  const [data, setData] = useState<WineData[]>([]);

  useEffect(() => {
    setData(wineData);
  }, []);

  return (
    <div>
      <h1 >Wine Data Visualization</h1>
      <h2>Scatter Plot: Color Intensity and Hue </h2>
      <ScatterChart width={500} height={400} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="Color intensity" name="Color intensity" unit="%" />
        <YAxis type="number" dataKey="Hue" name="Hue" unit="ph" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Wine Data" data={data} fill="#8884d8" />
      </ScatterChart>
      <h2>Bar Chart: Alcohol and Malic Acid</h2>
      <BarChart width={500} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Alcohol" />
        <YAxis dataKey="Malic Acid" name="Malic Acid" unit="mg/L" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Bar dataKey="Malic Acid" fill="#8884d8" name="Malic Acid" />
      </BarChart>
    </div>
  );
};

export default App;