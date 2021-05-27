import axios from 'axios'
import { useState} from 'react'
import {Redirect} from 'react-router-dom'


const Editprofile = (props) =>{

    const [firstname, setFirstName] = useState(props.user.firstname)
    const [lastname, setLastName] = useState(props.user.lastname)
    const [email, setEmail] = useState(props.user.email)
    const [password, setPassword] = useState(props.user.password)
    const [userCard_num, setUserCard_num] = useState(props.user.userCardNum)
    const [userCard_name, setUserCard_name] = useState(props.user.userCardName)
    const [userCard_exp, setUserCard_exp] = useState(props.user.userCardExp)
    const [balance, setBalance] = useState(0)
    const [prefered_currency, setPrefered_currency] = useState(props.user.prefered_currency)
    
 

    const submitform = (e) =>{
        e.preventDefault()
        const userId = localStorage.getItem('userId')
        axios.put (`${process.env.REACT_APP_BACKEND_URL}/users/editprofile/${userId}`, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            userCardNum: userCard_num,
            userCardName:userCard_name,
            userCardExp:userCard_exp,
            balance:balance,
            prefered_currency:prefered_currency
        }).then ((response) =>{
            console.log(response.data)
            alert('profile edited')
            return <Redirect to = "/home"/>
        }).catch((error) =>{
            console.log(error)
        })

    }

    return(
    <div className = 'editprofilepage'>

        <div className ='editprofile'>
            <form onSubmit = {submitform}>
                {
                    props.profileorcard === 'profile'?
                    <>
                    <h3> Edit Your profile Information</h3>

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
                    </>
                    :
                    null
                }
                {
                    props.profileorcard === 'card' ?
                <>
                <h3> Edit Your Card Information</h3>

                <div className = 'input'>
                    <input  placeholder = 'card number' value = {userCard_num} onChange = {(e) =>(setUserCard_num(e.target.value))}/>
                </div>

                <div className = 'input'>
                    <input  placeholder = 'card Name' value = {userCard_name} onChange = {(e) =>(setUserCard_name(e.target.value))}/>
                </div>

                <div className = 'input'>
                    <input  placeholder = 'card Exp' value = {userCard_exp} onChange = {(e) =>(setUserCard_exp(e.target.value))}/>
                </div>

                <div className = 'input'>
                    <input  placeholder = 'preferred currency' value = {prefered_currency} onChange = {(e) =>(setPrefered_currency(e.target.value))}/>
                </div>
                </>
                :
                null

                }

                <div className = 'input'>
                    <input type = 'submit' value = 'submit'/>
                </div>
            </form>
        </div>
    </div>
)

}

export default Editprofile