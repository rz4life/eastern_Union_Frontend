import axios from 'axios'
import {useEffect, useState} from 'react'

const ViewHistory = () =>{
    const [sentmoney, setSentmoney] =useState([])
    const [receivedmoney, setReceivedmoney] =useState([])
    const [sentorreceived,setSentorreceived] =useState()

    const getSent = async () =>{
        try {
            const userId = localStorage.getItem('userId')
            const getsent = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/transaction/getsentmoney/${userId}`)
            console.log(getsent.data.getsent)
            setSentmoney(getsent.data.getsent)
        }catch(error){
            console.log(error) 
      }
    }

    const getReceived = async () =>{ 
        try {
            const userId = localStorage.getItem('userId')
            const getreceived = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/transaction/getreceivedmoney/${userId}`)
            console.log(getreceived.data.getreceived)
            setReceivedmoney(getreceived.data.getreceived)
        }catch(error){
            console.log(error) 
      }
    }

    return(
        <div>

                <div className= 'outeractiontext' onClick = {() =>(setSentorreceived('sent'), getSent())}><h4 className = 'actiontext' > View Money Sent </h4></div>
                {
                    sentorreceived === 'sent'?
                    sentmoney.map((transaction, i ) =>(
                        <div key = {i} className = 'transactions'>
                            <h2> You sent $ {transaction.amount}</h2>
                            <br/>
                            <h3>To </h3>

                            <h4>{transaction.friend.firstname} {transaction.friend.lastname}</h4> 
                            <p>{transaction.friend.email}</p>
                        </div>

                    ))
                    : null
                }

                <div className= 'outeractiontext' onClick = {() =>(setSentorreceived('received'), getReceived())}><h4 className = 'actiontext' > View  Money Received</h4></div>

                {
                    sentorreceived === 'received' ?

                    receivedmoney.map((transaction, i ) =>(
                        <div key = {i} className = 'transactions'>
                            <h2> You received $ {transaction.amount}</h2>
                            <h3>From </h3>
                            <h4>{transaction.friend.firstname} {transaction.friend.lastname}</h4> 
                            <p>{transaction.friend.email}</p>
                        </div>

                    ))
                    : null
                }
            
        </div>
    )


}

export default ViewHistory