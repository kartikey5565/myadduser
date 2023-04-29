// import logo from './logo.svg';
import "./App.css";
import FormInput from "./Components/FormInput";
import AllUsers from "./Components/AllUsers";

import { useState } from "react";

let allusers = [
  { id: 1, name: "Honey Singh", age: 20, collage : "LPU" },
  { id: 2, name: "Money Singh", age: 18, collage: "CUIMS" },
];
const InValidModel = (props)=>{
  return (
    <div className="parent">
            <div className="invalid">
              <div>Invalid input</div>
              <button className="btn" onClick={props.click}>
                Cancel
              </button>
            </div>
          </div>
  );
}
function App() {
  const [users, setUsers] = useState(allusers);
  const [valid, setValid] = useState(true);
  

  const addNewData = (data) => {
    setUsers((pre) => {
      return [data, ...pre];
    });
  };

  const showInValid = () => {
    setValid(false);
  };
  const cancelled = () => {
    setValid(true);
  };

  return (
    <div>
      {valid && (
        <div className="App">
          <FormInput submitted={addNewData} inValid={showInValid} />
          <AllUsers items={users} />
        </div>
      )}
      {!valid &&
       <InValidModel click={cancelled}/>
      }
    </div>
  );
}

export default App;
