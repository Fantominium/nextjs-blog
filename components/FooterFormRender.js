import React, {useState, useEffect} from 'react'
import { red } from 'ansi-colors';


export default function FooterForm (props) {
    let [errMsg, setErrMsg] = useState('')
    useEffect(
        ()=> {
            if(props.errors[0] !== 'undefined') {
                setErrMsg(props.errors[0]) 
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
                    <span style={{color:"red"}}>{props.errors ? errMsg : ''}</span>
            </form>
        </div>

    )
}
