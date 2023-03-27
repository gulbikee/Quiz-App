import React from "react";
import './Dropdown.css'
const Dropdown= ({data ,setdifficulityChange})=>{
    return(
        <div className="dropdown">
            <select name="" id="" onChange={e=>setdifficulityChange(e.target.value)}>
                {
                   data.map((dt,i)=>(
                    <option value={dt}>{dt}</option>
                   
                   ))

                    
                }
            </select>

        </div>
    )
}
export default Dropdown