import { useState, useEffect } from 'react'
import axios from "axios";
import Canvas from './components/Canvas'
function App() {

  const [data, setData] = useState(null);
  const [freemem, setfreemem] = useState(null);
  const [totalmem, settotalmem] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get('./json/data.json')
        .then((response) => {
          setData(response.data);
          setfreemem(response.data.freemem);
          settotalmem(response.data.totalmem);
        })
        .catch((error) => {
          console.log(error)
        });
     
    }
        fetchData();

    //  const intervalId = setInterval(fetchData, 2000);
     
      // return () => clearInterval(intervalId);
  }, [])// 빈배열이면 한번만 실행 근데 왜 갱신될때마다 바뀌는거지? 안에 파일이 바뀌어서 그런가?

  return (
    <>
      <Canvas degree={freemem / (totalmem / 360)}></Canvas>
      <p> {freemem} {totalmem} </p>
      <p>몇도인지 :  {freemem / (totalmem / 360)} </p>
      <p> {totalmem / 360}</p>
      <p> KiloByte : {freemem / 1024} {totalmem / 1024} </p>
      <p> MegaByte : {freemem / 1024 / 1024} {totalmem / 1024 / 1024} </p>
      <p> GigaByte : {freemem / 1024 / 1024 / 1024} {totalmem / 1024 / 1024 / 1024} </p>

    </>
  );
}

export default App;
