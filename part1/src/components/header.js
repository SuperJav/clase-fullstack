import React from "react";

const Header=(props)=>{

    const {courses}=props;
    return(
        <h3>{courses.name}</h3>
    )
}

export default Header;