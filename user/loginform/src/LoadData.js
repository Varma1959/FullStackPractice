import React, { useState, useEffect } from 'react';
import { getCustomersData } from './apiService';

function LoadData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    getCustomersData()
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) => console.log(error));
  }, []); // Pass an empty array to run the effect only once when the component mounts

  return (
    <table border="1">
      <thead>
        <tr>
          <th>EMAIL</th>
          <th>USERNAME</th>
          <th>PASSWORD</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{item.email}</td>
            <td>{item.username}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LoadData;
