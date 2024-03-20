import React, { useState,useEffect } from "react";
import Course from "./Course";


const Allcourses=()=>{
    
        const [courses,setcourses]=useState([
            {title:"java Courses ",description:"this is courses"},
            {title:"react courses ",description:"this is react courses"}
        ]);

        useEffect(()=>{
            alert("testing");
        },[]);
return(
    <div>
        <h1>All Courses</h1>
        <p>List of courses are as follows</p>
        {
            courses.length > 0 
            ?  courses.map((item) =>
             (
                <Course course = {item}>
              <h1 style={{ fontWeight: "bold" }}>{item.title}</h1>
                </Course>
             )
            )
                :"no courses" 
              
        }
    </div>
);
    
};
export default Allcourses;