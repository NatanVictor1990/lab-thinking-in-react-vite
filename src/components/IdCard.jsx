

import React from "react";
import Greetings from "./Greeting";


function IdCard({lastName,firstName,gender,height,birth,picture}){
    
    return (
        <div className="IDCARD">
            <img src={picture} alt="pic" width={200}height={200} />
          <div className="info">
          <h6>Last Name:{lastName}</h6>
            <h6>First Name:{firstName}</h6>
            <h6>Gender:{gender}</h6>
            <h6>Height:{height}</h6>
            <h6>Birthdate:{birth}</h6>
          </div>
          <Greetings />
        </div>
    )
}




export default IdCard;