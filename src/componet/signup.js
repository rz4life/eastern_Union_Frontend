import axios from 'axios'
import { useState} from 'react'

const Signup = (props) =>{

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userCard_num, setUserCard_num] = useState('')
    const [userCard_name, setUserCard_name] = useState('')
    const [userCard_exp, setUserCard_exp] = useState('')
    const [balance, setBalance] = useState(0)
    const [prefered_currency, setPrefered_currency] = useState('')
 

    const submitform = (e) =>{
        e.preventDefault()
        axios.post (`${process.env.REACT_APP_BACKEND_URL}/users/signup`, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            userCardNum: userCard_num,
            userCardName:userCard_name,
            userCardExp:userCard_exp,
            balance:balance,
            preferedCurrency:prefered_currency
        }).then ((response) =>{
            console.log(response.data)
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.userId)
        }).catch((error) =>{
            console.log(error)
        })

    }

    return(
    <div className = 'signuppage'>

        <div className ='signup'>
            <form onSubmit = {submitform}>
            <h3>Create A new Account</h3>

                <div className = 'input'>
                    <input  placeholder = 'First name' value = {firstname} onChange = {(e) =>(setFirstName(e.target.value))}/>
                </div>

                <div className = 'input'>
                    <input  placeholder = 'last name' value = {lastname} onChange = {(e) =>(setLastName(e.target.value))}/>
                </div>

                <div className = 'input'>   
                    <input placeholder = 'Email' value = {email} onChange = {(e) =>(setEmail(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <input placeholder = 'Password' type = 'password' value = {password} onChange = {(e) =>(setPassword(e.target.value))}/>
                </div>


                <div className = 'input'>
                    <input  placeholder = 'card number' value = {userCard_num} onChange = {(e) =>(setUserCard_num(e.target.value))}/>
                </div>

                <div className = 'input'>
                    <input  placeholder = 'card Name' value = {userCard_name} onChange = {(e) =>(setUserCard_name(e.target.value))}/>
                </div>

                <div className = 'input'>
                    <input  placeholder = 'card Exp' value = {userCard_exp} onChange = {(e) =>(setUserCard_exp(e.target.value))}/>
                </div>

                {/* <div className = 'input'>
                    <input  placeholder = 'preferred currency' value = {prefered_currency} onChange = {(e) =>(setPrefered_currency(e.target.value))}/>
                </div> */}
                <label for = 'currency'> Select a Prefered currency </label>    
                        <select name = 'currency' onChange = {(e) =>(setPrefered_currency(e.target.value))}>
                                <option value = 'EUR'> Euro area Countries (EUR) </option>
                                <option value = 'MXN'> Mexican Pesos (MXN) </option>
                                <option value = 'BRL'> Brazillian real (BRL) </option>
                                <option value = 'CAD'> Canadian Dollar (CAD) </option>
                                <option value = 'CNY'> Chinese yuan (CNY) </option>    
                                <option value = 'NGN'> Nigerian Naira (NGN) </option>    
                                <option value = 'GBP'> Pounds Sterling(GBP)</option>    
                                <option value = 'USD'> US Dollar (USD) </option>    
                                <option value = 'RUB'> Russian Ruble (RUB) </option>   
                        </select>
                <div className = 'input'>
                    <input type = 'submit' value = 'Sign up!'/>
                </div>
            </form>
        </div>
    </div>
)

}

export default Signup