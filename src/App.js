import './App.css';
import {Redirect, Route} from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Signup from './componet/signup'
import Login from './componet/login'
import Home from './componet/home'
import Navbar from './navbar'
import Profile from './componet/profile'
import SendMoney from './componet/sendmoney'
import Editprofile from './componet/editprofile'

function App() {
  const [user, setUser] = useState(null)
  const [profileorcard, setProfileorcard] = useState(null)


  const getUserInfo = async () =>{
    
    const userId = localStorage.getItem('userId')
    try {
    const user = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/getuser/${userId}`)
    console.log(user)
    if( user.data.user){
      setUser(user.data.user)
    }
    } 
    catch(error){
      console.log(error)
    }
  }
  useEffect(() =>{getUserInfo()}, [])


  return (
    <div className="App">
      <Navbar user = {user}  setUser = {setUser}/>

      <Route path = '/home' exact render = {() =>{
        if(user)
        {
          return <Home user = {user}/>
        }else{
          return <Redirect to = "/login"/>
        }
        
      }}/>

      <Route path = '/sendmoney' exact render = {() =>{
        if(user)
        {
          return <SendMoney/>
        }else{
          return <Redirect to = "/login"/>
        }
        
      }}/>

      <Route path = '/editprofile' exact render = {() =>{
        if(user)
        {
          return <Editprofile user = {user} profileorcard = {profileorcard}/>
        }else{
          return <Redirect to = "/login"/>
        }
        
      }}/>

      <Route path = '/profile' exact render = {() =>{
        if(user)
        {
          return <Profile user = {user}  setUser = {setUser} setProfileorcard= {setProfileorcard}/>
        }else{
          return <Redirect to = "/login"/>
        }
        
      }}/>

      <Route path = '/signup' exact render = {() =>{
        
        if(user)
        {
          return <Redirect to = "/home"/>
        }else{
          return <Signup  setUser = {setUser}/>
        }
        
      }}/>

      <Route path = '/login' exact render = {() =>{

        if(user)
        {
          return <Redirect to = "/home"/>
        }else{
          return <Login  setUser = {setUser}/>
        }
      
      }}/>
      
    </div>
  );
}

export default App;
