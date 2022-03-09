import React from "react";
import Header from "./header";
import Content from "./content";
import Total from "./total";

const Courses=(props)=>{
    const {courses}=props;

    return(
        <>
        <Header courses={courses}/>
        <Content courses={courses}/>
        <Total courses={courses}/>
        </>
    )
}

export default Courses;