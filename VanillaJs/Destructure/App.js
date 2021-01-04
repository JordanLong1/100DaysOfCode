import React from "react";
import Schedule from './Schedule'
export default function App() {

const employee = {

  name: 'Austin Howard Schmeltzer', 
  age: 32, 
  salary: '32/hr',
      address: {
        streetNumber: 101, 
        streetName: 'Looney Tune Way', 
        cityName: 'IdiotVille', 
        state: 'California', 
        zip: '90210'
      }, 
      schedule: {
        clockIn: '7:00 AM', 
        firstBreak: '10:00 AM', 
        lunch: '12:00', 
        afternoonBreak: '2:00', 
        clockOut: '4:00 PM'
      }
    }

    const {name, 
      age, 
      salary, 
      address: 
      {streetNumber, streetName, cityName, state, zip }} = employee;


    const {schedule: {clockIn, firstBreak, lunch, afternoonBreak, clockOut}} = employee;

  return (
    <div className="App">
     <h1>Lets work on destructuring! </h1>
     <h2> Employee Infomation</h2>
     <h4>{name}</h4>
     <h4>{age} </h4>
     <h4> {salary}</h4>
     <h4>{streetNumber} {streetName} {cityName}, {state} {zip} </h4>
  <Schedule clockIn={clockIn} firstBreak={firstBreak} lunch={lunch} secondBreak={afternoonBreak} leave={clockOut}/>

    </div>
  );
}
