import React from 'react'
import { checkValidation } from '../Pages/Signup/helpers/validate';
export default function CustomInput(props) {
   
    const { type , name ,placeholder} =props
    const handleChange=(e)=>{
        let key = e.target.name;
        let value = e.target.value;
        let isValid = checkValidation(key,value)
        props.inputContent(key,value,isValid);
    }
    return (
        <>
            <input type={type}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                style={{ height: "2em", border: "1px solid black", borderRadius: "4px" }}
            />
        </>
    )
}