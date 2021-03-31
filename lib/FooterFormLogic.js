import React, {useState, useEffect} from 'react'
import FooterFormRender from '../components/FooterFormRender'
import footerStyle from '../components/style_modules/footer.module.css'

export default function FooterFormLogic () {

const [inputData, setInputData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    passwordConfirm:''

})
const[errors, setErrors] = useState ({
    errors: [],
    validForm: true,
})

/**
 * Handle Validations, operates on object inputData
 * TODO: stronger validations
 * @param {*} inputData 
 */
function handleVali(inputData) {
    let errors = []
    let validForm = true

    //name vali
    if(!inputData.firstName || !inputData.lastName){
        errors.push("Neither first nor last name can be empty. Please enter something")
        validForm = false
    }
    if(!inputData.firstName.match(/^[a-zA-Z]+$/)) {
        errors.push("No Special characters please")
        validForm = false
    }
    if(!inputData.lastName.match(/^[a-zA-Z]+$/)) {
        errors.push("No Special characters please")
        validForm = false
    }

    //email vali
    if(!inputData.email) {
        errors.push("Email is mandatory")
        validForm = false
    }
    if (inputData.email) {
        let atPos = inputData.email.indexOf('@')
        let dotPos = inputData.email.indexOf('.')
        if(!(atPos < dotPos && atPos > 0) )
        {
            errors.push("Not a valid email address")
            validForm = false
        }
    }
    if (inputData.password !== inputData.passwordConfirm) {
        errors.push("Passwords do not match")
        validForm = false
    }


    setErrors({errors:errors, validForm:validForm})
}

/**
 * HandleSubmit to send form data to the db
 * @param {*} event 
 */
function handleSubmit(event) {
    event.preventDefault()
    let newSub = []
    newSub = inputData
    handleVali(newSub)

    /**
     * After handling the validation, pass object to data handler to insert into the db. Call that function here after importing it above
     */


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
            validForm = {errors.validForm}
            />
        </div>

    )
}
