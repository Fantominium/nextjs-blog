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
        <div class="footer">
            <form onSubmit={props.handleSubmit}>
                    <input 
                        name="firstName" 
                        value={props.firstName} 
                        onChange={props.handleChange} 
                        placeholder="First Name" 
                    />
                    
                    <input 
                        name="lastName" 
                        value={props.lastName} 
                        onChange={props.handleChange} 
                        placeholder="Last Name" 
                    />
                    
                    <input 
                        name="email" 
                        value={props.email} 
                        onChange={props.handleChange} 
                        placeholder="Email" 
                    />
                    
                    <input
                        type="password" 
                        name="password" 
                        value={props.password} 
                        onChange={props.handleChange} 
                        placeholder="Password" 
                    />
                    
                    <input 
                        type="password"
                        name="passwordConfirm" 
                        value={props.passwordConfirm} 
                        onChange={props.handleChange} 
                        placeholder="Confirm Password" 
                    />
                    <button>Submit</button>
                    <br/>
                    <span style={{color:"red"}}>{props.validForm ? props.validForm : errMsg}</span>
            </form>
        </div>

    )
}
