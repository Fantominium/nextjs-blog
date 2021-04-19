import React, {useState, useEffect} from 'react'
import { red } from 'ansi-colors';


export default function FooterForm (props) {
    let [errMsg, setErrMsg] = useState('')
    let [successMsg, setSuccessMsg] = useState("")
    useEffect(
        ()=> {
            if(props.errors[0] !== 'undefined' && props.errors[0]) {
                setErrMsg(props.errors[0])
                setSuccessMsg("") 

            } else {
                if(props.validForm) {
                    setSuccessMsg("sent successfully")
                    setErrMsg("")
                }
            }

        }, [props.errors, props.validForm]
    )
    return (
        <div className="footer">
            <form className="footer--form" onSubmit={props.handleSubmit}>
                    <input 
                        id="firstName"
                        name="firstName" 
                        value={props.firstName} 
                        onChange={props.handleChange} 
                        placeholder="First Name" 
                    />
                    
                    <input 
                        id="lastName"
                        name="lastName" 
                        value={props.lastName} 
                        onChange={props.handleChange} 
                        placeholder="Last Name" 
                    />
                    
                    <input 
                        id="email"
                        name="email" 
                        value={props.email} 
                        onChange={props.handleChange} 
                        placeholder="Email" 
                    />

                    <button id="submit">Submit</button>
                    <br/>
                    <span id="failMsg" style={{color:"red"}}>{props.errors ? errMsg : ''}</span>
                    <span id="sucMsg" style={{color:"green"}}>{successMsg ? successMsg : ''}</span>
            </form>
        </div>

    )
}
