import {Component} from 'react'
import './index.css'

class Calculation extends Component{
    state={inputValue:"", primeRes:"",isPrimeRes:false, factRes:'',isFactRes:false, fibRes:'',isFibRes:false}

    onChangeInputValue=event=>{
        this.setState({inputValue:event.target.value, isPrimeRes:false, isFactRes:false, isFibRes:false})
    }

    onCheckPrime=()=>{
        const {inputValue}=this.state 
        let result
        if(inputValue===''){
            alert('Enter a valid number')
        }
        else{
            const num=parseInt(inputValue)
        let isPrime=false
        for(let i=2;i<num;i++){
            if(num%i===0){
                isPrime=true
            }
            if(isPrime===false){
                result='Prime'
            }
            else{
                result='Not Prime'
            }
        }
        }
        this.setState({primeRes:result,isPrimeRes:true})
        
    }

    onCalculateFactorial=()=>{
        const {inputValue}=this.state 
        if(inputValue===''){
            alert("Enter a valid num")
        }
        else{
            let n=parseInt(inputValue)
            let fact=1
            for(let i=1;i<=n;i++){
                fact*=i
            }
            this.setState({factRes:fact,isFactRes:true})
        }
    }

    onCheckFabinocci=()=>{
        const {inputValue}=this.state 
        let n=parseInt(inputValue)
        let fibonnaci
        let f=[0,1]
        for (let i=2;i<=n;i++){
            f.push(f[i-1]+f[i-2])
        }
        fibonnaci=f[n]
        this.setState({fibRes:fibonnaci,isFibRes:true})
    }

    render(){
        const {inputValue,isPrimeRes,primeRes,factRes,isFactRes, fibRes, isFibRes}=this.state
        return(
            <>
            <div className='inputContainer'>
                <p className="inputTitle">Enter a Number</p>
                <input className="input" type="text" onChange={this.onChangeInputValue} value={inputValue} />
            </div>
            <div className="calculationPartContainer">
            <div className="calculaterContainer">
                <button type="button" className="primeButton" onClick={this.onCheckPrime}>Prime Number</button>
                {isPrimeRes?<p className="result primeResult">The num is {primeRes}</p>:<p className="result primeResult">The num is </p>}
            </div>
            <div className="calculaterContainer">
                <button className="factButton" onClick={this.onCalculateFactorial}>Factorial</button>
                {isFactRes?<p className="result">The factorial is {factRes}</p>:<p className="result">The factorial value is</p>}
            </div>
            <div className="calculaterContainer">
                <button className="fibButton" onClick={this.onCheckFabinocci}>Fabinocci</button>
                {isFibRes?<p className="result">The fibonnaci number is {fibRes}</p>:<p className="result">The fibonnaci number is</p>}
            </div>
            </div>
            </>
        )
    }
}

export default Calculation