import {Link} from 'react-router-dom'

const Navbar = (props) =>{


    return(
        <nav className = 'navbar'>  
                <Link to = '/home' className = 'navtextlogo'> Eastern Union</Link> 
               
            {
                props.user ?
                <>
                <Link to = '/sendmoney' className = 'navtext'> Send Money</Link> 
                <Link to = '/viewhistory' className = 'navtext'> View History</Link> 
               
                <Link to = '/profile' className = 'navtext'> Profile</Link> 
               
                <span onClick={() => {
                            localStorage.removeItem('userId')
                            localStorage.removeItem('chatId')
                             props.setUser(null)
                }}><Link className="navLink" to="/login" className = 'navtext'>Logout</Link></span>
                </>
                :
                <>
                <Link to = '/signup' className = 'navtext'> Signup</Link>
               
                <Link to = '/login' className = 'navtext'> Login</Link> 
                </> 
            }
                  
        </nav>
    )
}
export default Navbar