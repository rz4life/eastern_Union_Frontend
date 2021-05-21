import axios from 'axios'
import { useState} from 'react'
const Login = (props) =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  

    const submitform = (e) =>{
        e.preventDefault()
            axios.post (`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
                email: email,
                password: password
            }).then ((response) =>{
                console.log(response)
                props.setUser(response.data.user)
                localStorage.setItem('userId', response.data.userId)
            }).catch((error) =>{
                console.log(error)
            })

    }
    return(
    <div className = 'loginpage'>
        <div className = 'login'>

                <form onSubmit = {submitform}>
                    <h3>Login to your Account</h3>
                    <div className = 'input'>
                        
                        <input placeholder = 'email' value = {email} onChange = {(e) =>(setEmail(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        
                        <input placeholder = 'password' type = 'password' value = {password} onChange = {(e) =>(setPassword(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        <input type = 'submit' value = 'Login!'/>
                    </div>

                </form>
        </div>
    </div>
)

}

export default Login