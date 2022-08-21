import React, { useState, useEffect } from 'react';
import './App.css';
import Scatter from './charts/scatter';
import Bar from './charts/bar'

function App() {
  const [dataa, setData] = useState([]);
  const getData = async () => {
    await fetch('Wine-Data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function async(response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div className="App">
        <Scatter dataa={dataa} />
        <br />
        <br />
        <Bar dataa={dataa} />
      </div>
    </>
  );
}

export default App;
