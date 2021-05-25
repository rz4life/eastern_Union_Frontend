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
        <h5>Card Name:- {props.user.userCard_name}</h5>
        <h5>Card Number:- {props.user.userCard_num}</h5>
        <h5>Card Exp:- {props.user.userCard_exp}</h5>

        <Link to = '/editprofile'>
            <button  onClick = {() => (
                props.setProfileorcard('card')
            )}> Edit Card Information </button>
        </Link>

    </div>
)

}

export default Profile