import React, {useState, useEffect } from "react";
import axois from "axios";


export default function AllStudent(){
    const [students, setStudent] =  useState([]);
useEffect(()=>{

    function getStudent(){
        axois.get("http://localhost:8070/student/").then((res)=>{
            console.log(res);
            //setStudent(res.data);

        }).catch((err)=> {
            alert(err.massage);
        })
    }
    getStudent();

},[])

    return(
       


        <div className="container">

            <h1>All Students</h1>
        </div>
    )
}