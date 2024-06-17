import { useState } from "react";
import Header from "./Components/Header";
import Results from "./Components/Result";
import Input from "./Components/Input";

function App() {
   
  const[UserInput , setUserInput] = useState({
    initialInvestment : 10000,
       annualInvestment : 1200,
       expectedReturn : 6 , 
       duration : 10,

   });
   const inputIsvalid = UserInput.duration >= 1;
   function handleChange(inputIdentifier , newValue)
    {
        setUserInput((prevUserInput) => {
            return {
            ...prevUserInput,
                [inputIdentifier] : +newValue,
                // this + sign is chnage the string into munber in js 
                // event.target.value jo he vo by default string hi bhejta he number nhi so uske liye + sign.
            };
        });
    }
 
  


  return (
   <>
    <Header />
    <Input UserInput = {UserInput} onChange = {handleChange} />
    {!inputIsvalid && <p className="center">Please enter a duration greater then zero.</p>}
     {inputIsvalid && <Results  input={UserInput}/> }
    </>
  )
}

export default App;
