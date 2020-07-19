import React, { useState, useEffect } from "react";
import { List } from "grommet";
import axios from "axios";

function Trip() {
  const [data, setData] = useState({ trips: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/trips");
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <List
        primaryKey="title"
        data={data.trips.map((trip) => ({ title: trip["title"] }))}
      />
    </React.Fragment>
  );
}

export default Trip;
