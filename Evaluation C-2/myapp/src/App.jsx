import { useState } from "react";
import "./App.css";
// import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./componants/AddHouse/AddHouse";

function App() {
  const [show ,setShow]=useState(true)
  return (
    <div className="App">
      {show ? <AddHouse/> : ""}
       <button className="toggleForm" 
       onClick={()=>{
         setShow(!show)
       }}>
        {show ? "ADD HOUSE FORM" : "SHOW HOUSES"}
      </button>
      
      <br />
     
    </div>
  );
}

export default App;