import React,{useState,useEffect} from "react";
import Rating from "../components/Rating"
import "./style.css";

export default function App() {
  // const [data,setData] = useState([])

  // useEffect(()=>{
  //   fetch("http://localhost:3003/filelist")
  //   .then(data => data.json())
  //   .then(data =>{
  //     data = data.files
  //     setData(data)
  //     console.log(data)
  //   })
  // },[])

  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {data.map(value=>
        <p>{value}</p>
      )} */}
      <Rating />
    </div>
  );
}
