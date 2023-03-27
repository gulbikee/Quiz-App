import React from "react";
 import './Quiz.css'
 import { useParams } from "react-router-dom";
const Quiz=()=>{
    const{difficulity,amount}=useParams()
    return(
        <div className="quiz"> 
            {difficulity}-{amount}
        </div>
    )
}
export default Quiz