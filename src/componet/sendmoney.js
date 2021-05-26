import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const SendMoney = () =>{
    const [friendemail, setFriendemail] = useState('')
    const [alluser, setAlluser] = useState('')
    const [exchange, setExchange] = useState('USD')
    const [currency, setCurrency] = useState('EUR')
    const [amount, setAmount] = useState(0)
    const [page, setPage] = useState('')
    const [result, setResult] = useState(0)
    const [symbol, setSymbol] = useState('$')
    const [show, setShow] = useState('searchbar')



    const getliveExchnage = async () =>{
        try {
            const exchange = await axios.get(`http://api.currencylayer.com/live?access_key=f28a66f6ab65602d65a83baca3efc947&source=USD&currencies=EUR,MXN,BRL,GBP,CAD,CNY,NGN,USD,RUB&format=1`)
          setExchange(exchange.data.quotes)
          console.log(exchange.data.quotes)
       
        }catch(error){
              console.log(error) 
        }
    }
     useEffect(() =>{getliveExchnage()}, [amount])


    const submitform = (e) =>{
        e.preventDefault()
        axios.post (`${process.env.REACT_APP_BACKEND_URL}/users/getalluser`, {
            email: friendemail,
        }).then ((response) =>{
            console.log(response.data.alluser)
            setAlluser(response.data.alluser)
        })
    }

    const expectedAmount = () =>{

        if(currency === 'EUR'){
            setResult(amount*exchange.USDEUR)
            setSymbol('€')
        }
        if(currency === 'NGN'){
             setResult(amount*exchange.USDNGN)
             setSymbol('₦')
        }
        if(currency === 'MXN'){
            setResult(amount*exchange.USDMXN)
            setSymbol('$')
        }
        if(currency === 'GBP'){
            setResult(amount*exchange.USDGBP)
            setSymbol('£')
        }
        if(currency === 'CAD'){
            setResult(amount*exchange.USDCAD)
            setSymbol('$')
        }
        if(currency === 'CNY'){
            setResult(amount*exchange.USDCNY)
            setSymbol('¥')
        }
        if(currency === 'RUB'){
            setResult(amount*exchange.USDRUB)
            setSymbol('₽')
        }
        if(currency === 'BRL'){
            setResult(amount*exchange.USDBRL)
            setSymbol('R$')
        }
        if(currency === 'USD'){
            setResult(amount*exchange.USDUSD)
            setSymbol('$')
        }

    }
    useEffect(() =>{expectedAmount()},[currency])
    
    return(
                <div className = 'sendmoney'>
                    <h2>Send Money to a friend</h2>

                    <div className= 'outeractiontext'> <h4 className = 'actiontext'>Send </h4></div>
                    <div className = 'input'>
                        <input name = 'send' placeholder = 'Enter Amount' value = {amount} onChange = {(e) =>(setAmount(e.target.value))}/>
                    </div>

                    <div className= 'outeractiontext'><h4 className = 'actiontext' >To </h4></div>

                    <div>
                        {
                                page === 'result'?
                                <h3>{alluser.firstname} {alluser.lastname}</h3>
                                :
                                <div>
                                            <form className ='searchform' 
                                            onSubmit = {submitform}
                                            >
                                                    <div className = 'input'>
                                                        <input name='email' placeholder = 'Enter Email' value = {friendemail} onChange = {(e) =>(setFriendemail(e.target.value))}/>
                                                    </div>

                                                    <div className = 'input'>
                                                        <input type = 'submit'  value = 'search'/>
                                                    </div>
                                            </form>
                                            <div>
                                                    {
                                                        alluser ?
                                                        <>
                                                        <h3>{alluser.firstname} {alluser.lastname}</h3>
                                                        <button onClick = {() =>(setPage('result'))}>select</button>
                                                        </>
                                                        :
                                                    
                                                       null
                                                    }
                                            </div>
                                </div>
                        }
                    </div>

                   <div className= 'outeractiontext'><h4 className = 'actiontext' >In</h4> </div>   
                        <select name = 'currency' onChange = {(e) =>(setCurrency(e.target.value))}>
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

                        <h4>Expected Amount:- 
                        {symbol}{result}    
                            </h4>
                        <button>Send Money</button>
                </div>
    )


}
export default SendMoney

// make expect amout reflect correct funtionality
// if user is selected, entire 'to' section should only show user first and last name
// if currency is changed expected amount should reflect change
// send money should create transaction and take you to profile page


//profile
// show all tranctions sent and received