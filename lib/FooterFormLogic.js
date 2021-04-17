import React, {useState, useEffect} from 'react'
import FooterFormRender from '../components/FooterFormRender'
import footerStyle from '../components/style_modules/footer.module.css'
import { options } from 'colorette';

export default function FooterFormLogic () {

const [inputData, setInputData] = useState({
    firstName:'',
    lastName:'',
    email:''

})
const[errors, setErrors] = useState ({
    errors: [],
})
const [validForm, setValidForm] = useState({
    value: false
})

/**
 * Handle Validations, operates on object inputData
 * TODO: stronger validations
 * @param {*} inputData 
 */
function handleVali(inputData) {
    let errors = []

    //name vali
    if(!inputData.firstName || !inputData.lastName){
        errors.push("Neither first nor last name can be empty. Please enter something")
    }
    if(!inputData.firstName.match(/^[a-zA-Z]+$/)) {
        errors.push("No Special characters please")
    }
    if(!inputData.lastName.match(/^[a-zA-Z]+$/)) {
        errors.push("No Special characters please")
    }

    //email vali
    if(!inputData.email) {
        errors.push("Email is mandatory")
    }
    if (inputData.email) {
        let atPos = inputData.email.indexOf('@')
        let dotPos = inputData.email.indexOf('.')
        if(!(atPos < dotPos && atPos > 0) )
        {
            errors.push("Not a valid email address")
        }
    }
    if (inputData.password !== inputData.passwordConfirm) {
        errors.push("Passwords do not match")
    }

    setErrors({errors:errors})
}

/**
 * HandleSubmit to send form data to the db
 * @param {*} event 
 */
async function handleSubmit(event) {
    event.preventDefault()
    let newSub = []
    newSub = inputData
    handleVali(newSub)

    if (errors.errors.length == 0) {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({...inputData})
        }

        const response = await fetch("../api/footerFormApiCors", options)
        const data = await response.json()

        if(data.code === "200"){

            setInputData(()=>{
              return {
                firstName:'',
                lastName:'',
                email:''              
                }  
            })
        }
    }
}
/**
 * HandleChange operates on the event and updates state accordingly
 * @param {*} event 
 */
function handleChange (event) {
    const {name, value} = event.target
    setInputData( prevInputData => {
        return {
            ...prevInputData,
            [name]: value
        }
    })
}

    return (
        <div className={footerStyle.footer}>
            <FooterFormRender 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
            {...inputData} 
            errors = {errors.errors}
            validForm = {validForm.value}
            />
        </div>

    )
}
