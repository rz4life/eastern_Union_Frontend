import { useState, useEffect} from 'react'
import axios from 'axios'

const Home =() =>{
    const [exchange, setExchange] = useState('USD')
    const [currency, setCurrency] = useState('EUR')
    const [amount, setAmount] = useState(0)
    const [result, setResult] = useState(0)
    const [symbol, setSymbol] = useState('$')


    const getliveExchnage = async () =>{
        try {
            const exchange = await axios.get(`http://api.currencylayer.com/live?access_key=f28a66f6ab65602d65a83baca3efc947&source=USD&currencies=EUR,MXN,BRL,GBP,CAD,CNY,NGN,USD,RUB&format=1`)
          setExchange(exchange.data.quotes)
          console.log(exchange.data.quotes)
       
        }catch(error){
              console.log(error) 
        }
    }
     useEffect(() =>{getliveExchnage()}, [])
    return(
            <div>
                <h3>Mexican Peso:- ${exchange.USDMXN} to $1</h3>
                <h3>Euro:- €{exchange.USDEUR} to $1</h3>
                <h3>Naira:- ₦{exchange.USDNGN} to $1</h3>
                <h3>Pound:- £{exchange.USDGBP} to $1</h3>
                <h3>US Dollar:- ${exchange.USDUSD} to $1</h3>

                <h2>Convert Money</h2>
                <label for = 'currency'> Select a currency </label>    
                        <select name = 'currency' onChange = {(e) =>(setCurrency(e.target.value))}>
                                <option value = 'EUR'> EUR </option>
                                <option value = 'MXN'> MXN </option>
                                <option value = 'BRL'> BRL </option>
                                <option value = 'CAD'> CAD </option>
                                <option value = 'CNY'> CNY </option>    
                                <option value = 'NGN'> NGN </option>    
                                <option value = 'GBP'> GBP </option>    
                                <option value = 'USD'> USD </option>    
                                <option value = 'RUB'> RUB </option>    
                        </select>
                        <br/>
                        <br/>
                <label for = 'amount'> Enter Amount </label>
                <div className = 'input'>
                    <input name = 'amount' placeholder = 'Enter Amount' value = {amount} onChange = {(e) =>(setAmount(e.target.value))}/>
                </div>
                <br/>
                <button onClick={()=>{
                    console.log(currency)
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
                    }}>=</button>
                <h3>Result:- {symbol}{result}</h3>

            </div>
    )

}
export default Home 