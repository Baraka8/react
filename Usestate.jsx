
import React, { useState } from "react";

function Usestate(){
    const [name, setName] = useState();//the name must be none as default 
    const [age, setAge] = useState(0); //the age must be 0 ase default.

    const updateName = () => {
        setName("Baraka");  } //to update name 

    const increamentAge = () => {
        setAge(age + 1); // to increase age.
    }
      const decreaseAge = ()  => {
        setAge(age - 1) // to decrease age
      }
      const resetAge = () => {
        setAge(0)
      }
    
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            
            <p>AGE: {age}</p>
            <button onClick={increamentAge}>Increase Age</button>
            <button onClick={resetAge}>Reset Age</button>
            <button onClick={decreaseAge}>decrease Age</button>
        </div>
    );

}
export default Usestate