import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Wine Data Visualization</h1>
      <h2>Scatter Plot: Color Intensity and Hue </h2>
      <ScatterChart width={500} height={400}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="Color intensity" name="Color intensity" unit="%" />
        <YAxis type="number" dataKey="Hue" name="Hue" unit="units" />
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