import './formInput.css'
import { useState } from 'react'
import { useRef } from "react";

const FormInput = (props)=>{
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [isValid, setIsValid] = useState(true)
    const collageRef = useRef()

    const userSubmitted = ()=>{
        if (name.trim().length===0 || age.trim().length===0){
            setIsValid(false)
            props.inValid(false, "Enter all input fields")
            return
        }
        console.log(isValid)
        const data = {name: name,age: age, collage : collageRef.current.value, id : Math.random()}
        props.submitted(data)
        setName('')
        setAge('')
        collageRef.current.value=''
    }
    const userTypingName = (e)=>{
        if (e.target.value.trim().length>0){
            setIsValid(true)
        }
        setName(e.target.value)
    }
    const userTypingAge = (e)=>{
        setAge(e.target.value)
        setIsValid(true)
    }
   
    return (
        <div className='box'>
          <div className='container'> 
            <label  className='element'>User Name</label>
            <input value={name}  className='element' onChange={userTypingName} type={'text'}/>
            <label  className='element'>Age (Years)</label>
            <input value={age}  className='element' onChange={userTypingAge} type={'number'}/>
            <label  className='element'>Collage Name</label>
            <input ref={collageRef} className='element' type={'text'}/>
            <button className='btn' onClick={userSubmitted}>Add User</button>
            </div>
        </div>
    )
}

export default FormInput