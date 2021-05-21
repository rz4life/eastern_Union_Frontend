import {Link} from 'react-router-dom'

const Navbar = (props) =>{


    return(
        <nav className = 'navbar'>  
            {
                props.user ?
                <>
                <Link to = '/home' className = 'navtext'> Home</Link> 
                {' | -- |'} {' -- | '}
                <span onClick={() => {
                            localStorage.removeItem('userId')
                            localStorage.removeItem('chatId')
                             props.setUser(null)
                }}><Link className="navLink" to="/login" className = 'navtext'>Logout</Link></span>
                </>
                :
                <>
                <Link to = '/signup' className = 'navtext'> Signup</Link>
                {' | -- |'} {' -- | '}
                <Link to = '/login' className = 'navtext'> Login</Link> 
                </> 
            }
                  
        </nav>
    )
}
export default Navbar