import React, { useState, useEffect } from "react";
import axios from "axios";

const MongoDBDataFetcher = (name) => {
  console.log(name);
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await axios.get(
      `https://eu-west-2.aws.data.mongodb-api.com/app/mozok-store-yrvzc/endpoint/${name}`
    );
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return data;
};
export default MongoDBDataFetcher;
