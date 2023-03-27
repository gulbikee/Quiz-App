import React,{useState} from "react";
import './introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { Navigate, useNavigate } from "react-router-dom";

const Intruduce= ()=>{
    const difficulity=["easy","medium","hard"]
    const [difficulityChange,setdifficulityChange]=useState("")
    const TOTAL_QUESTIONS=10
    console.log(difficulityChange)
    const navigate=useNavigate()
    
    const startQuiz=()=>{
        if(difficulityChange){
            navigate('/quiz/${difficulityChange}/${TOTAL_QUESTIONS}')
        }
    }
    return (
        <div className="introduce">
            <div className="introduce-container">
                <img src="https://play-lh.googleusercontent.com/WkK8-_NYDo0f15qfGsZnn4iZ9G7Q-MMloycE5mdnClbUNnkQ50hZrkWi5xxubg5_F8E" alt="" className="image"/>
            <Dropdown data={difficulity} setdifficulityChange={setdifficulityChange}/>
            <div  onClick={startQuiz} className="introduce-btn" >Start the Quiz</div>

                
            </div>
        </div>
    )
}
export default Intruduce