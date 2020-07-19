import React, { useState, useEffect } from 'react';
import { Grommet, List } from 'grommet';
import axios from 'axios';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

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
    <Grommet theme={theme}>
      <div className="App">
        <List
          primaryKey="title"
          data={data.trips.map(trip => ({ title: trip["title"] }))}
        />
      </div>
    </Grommet>
  );
}

export default App;
