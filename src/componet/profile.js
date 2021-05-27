import {Link} from 'react-router-dom'


const Profile = (props) =>{

return(
    <div>
        <h3>Profile Information </h3>
        <br/>
        <h5>First Name:- {props.user.firstname}</h5>
        <h5>Last Name:-{props.user.lastname}</h5>
        <h5>Current Balance:- ${props.user.balance}</h5>
        <Link to = '/editprofile'>
            <button  onClick = {() => (
                props.setProfileorcard('profile')
            )}> Edit Profile Information</button>
        </Link>
        <h3> Card Information</h3>
        <br/>
        <h5>Card Name:- {props.user.userCardName}</h5>
        <h5>Card Number:- {props.user.userCardNum}</h5>
        <h5>Card Exp:- {props.user.userCardExp}</h5>

        <Link to = '/editprofile'>
            <button  onClick = {() => (
                props.setProfileorcard('card')
            )}> Edit Card Information </button>
        </Link>

    </div>
)

}

export default Profile