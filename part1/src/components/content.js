import React from "react";
import Part from "./part";

const Content=(props)=>{
    const {courses}=props

return(
    <Part courses={courses}/> 
    )
}

export default Content;