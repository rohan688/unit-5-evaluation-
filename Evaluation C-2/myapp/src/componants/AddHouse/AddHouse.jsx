import { useEffect, useState } from "react"
import axios from 'axios'
import { Trdata } from "./tr"

export const AddHouse=()=>{
    useEffect(()=>{
    getdata();
    },[])


   const [formData,setFormdata]=useState({});
   const [homedata , setHomedata]=useState([]);

   const handlechange=(e)=>{
       const {id,value}=e.target;
       setFormdata({
           ...formData,
           [id]:value
       })
   }
  const getdata=()=>{
      
    axios.get("http://localhost:8080/users").then((res)=>{
    setHomedata(res.data);
      })
  }



   const handlesubmit=(e)=>{
      
       axios.post('http://localhost:8080/users',formData).then(()=>{
       alert("DATA SAVED")
       getdata();    
       })
   }









    return(
        <div className="App">
        <h3>Add House</h3>
        <form onSubmit={handlesubmit}>
        <input type='text' id="name" onChange={handlechange} placeholder="Enter Home Name"></input>
        <input type='text' id="owner" onChange={handlechange} placeholder="Enter Owner Name"></input>
        <input type='text' id="address" onChange={handlechange} placeholder="Enter Home Address"></input>
        <input type='number' id="code" onChange={handlechange} placeholder="Enter Area Code"></input>
        <input type='number' id="rent" onChange={handlechange} placeholder="Enter Rent"></input>
        <select id="preferred"  onChange={handlechange}>
            <option>......</option>
         <option>bachelors</option>
         <option>married</option>
        </select>
        <input type='submit' value="submit"></input>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Owner-Name</th>
                    <th>Address</th>
                    <th>Area Code</th>
                    <th>Rent</th>
                    <th>Preferred</th>
                </tr>
            </thead>
            <tbody>
               {homedata.map((e)=>(<Trdata data={e} key={e.id}/>))} 
            </tbody>
        </table>
        </div>
    )
} 