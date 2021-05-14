import React, {useState, useEffect} from 'react'
import { red } from 'ansi-colors';
import styled from 'styled-components'

//make this a styled component to get arount TypeError?

const Footer = styled.div`
    background: rgba(248, 248, 248, 0.292);
    min-height: 100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    input {
        margin-right: .5em;
        margin-left: .5em;
    }
    @media (min-width: 1350px) {
        flex-flow: row nowrap;
        justify-content: center;
        padding-top: 2em;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }
`
const FooterFormStyle = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-width: 100px;
    margin: 1em;

`
 

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
    useEffect (
        () => {
            const intervalID = setInterval(() => {
                setSuccessMsg("")
                setErrMsg("")
            }, 3000)

            return () => {
                clearInterval(intervalID)
            }
        }, [errMsg, successMsg]
    )
    return (
        <Footer>
            <form onSubmit={props.handleSubmit}>
                <FooterFormStyle>
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
                </FooterFormStyle>
            </form>
        </Footer>

    )
}
