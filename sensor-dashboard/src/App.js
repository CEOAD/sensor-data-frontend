import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import GaugeChart from 'react-gauge-chart';
import drop from './logo.svg';
function App() {
  const [sensorData, setSensorData] = useState({ Moisture: 0, Humidity: 0, Temperature: 0 });

  useEffect(() => {
    const fetchData = as    ync () => {
      const response = await fetch('http://localhost:5000/api/sensor-data');
      const data = await response.json();
      setSensorData(data);
    };

    fetchData();
  }, []);

  return (
      <div>
        <h1>Sensor Data</h1>
        <GaugeChart id="gauge-chart1"
                    nrOfLevels={30}
                    percent={sensorData.Humidity / 100}
                    textColor="#000000"
        />
        <div>Temperature: {sensorData.Temperature}°C</div>
          <div>
              <img srv={{drop}} alt="drop" />
            <div>Humidity: {sensorData.Humidity}%</div>
          </div>
          </div>
  );
}

export default App;
