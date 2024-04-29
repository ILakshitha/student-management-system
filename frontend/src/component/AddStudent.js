import React, { useState } from "react";
import axios from "axios";

export default function AddStudent(){

  const [fname,setfname] = useState("");
  const [lname,setlname] = useState("");
  const [age,setAge] = useState("");
  const [gender,setgender] = useState("");
  const [address,setAddress] = useState("");
  

function sendData(event){
  event.preventDefault();
  alert("submited");
  const newStudent={
    fname,
    lname,
    age,
    gender,
    address

  }

  axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
    alert("Student Added!!!")
  }).catch((err)=>{
    alert(err)
  })

}


    return(
        <div className="container">
            <form onSubmit={sendData}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="text1">First Name</label>
      <input type="text" className="form-control" id="text1" onChange={(event)=>{
        setfname(event.target.value);
      }}/>
    </div>
    <div className="form-group col-md-6">
      <label for="text2">Last Name</label>
      <input type="text" className="form-control" id="text2" onChange={(event)=>{
        setlname(event.target.value);
      }}/>
    </div>
  </div>
  <div className="form-group col-md-2">
      <label for="inputZip">Age</label>
      <input type="text" className="form-control" id="inputZip" onChange={(event)=>{
        setAge(event.target.value);
      }}/>
    </div>
  <div className="form-group">
    <label for="inputAddress">Gender</label>
    <input type="text" className="form-control" id="inputAddress" onChange={(event)=>{
        setgender(event.target.value);
      }}/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={(event)=>{
        setAddress(event.target.value);
      }}/>
  </div>
  
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Save</button>
</form>
        </div>
    );
}