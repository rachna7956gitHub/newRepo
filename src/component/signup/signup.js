import React, { useState } from "react"
import "./signup.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Signup = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        mobilenumber: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup = () => {
        const { name, email, password, mobilenumber } = user
        if( name && email && password && mobilenumber){
            axios.post("http://localhost:9002/signup", user)
            .then( res => {
                console.log(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {/* {console.log("User", user)} */}
            
            <h1>Signup</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="text" minLength="10" maxLength = "10" name="mobilenumber" value={user.mobilenumber}  placeholder="Enter your mobile number" onChange={ handleChange }></input>
            <div className="button" onClick={signup}>Signup</div>
            <div>or</div>
            <div className="button"  onClick={() =>{ history.push("/login")}} >Login</div> 
        </div>
    )
}

export default Signup
 
