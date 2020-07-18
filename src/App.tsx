import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({trips: []});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/trips');
      setData(result.data);
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      {data.trips.map(trip => trip["title"])}
    </div>
  );
}

export default App;
