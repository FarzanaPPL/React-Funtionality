import {Component} from 'react'
import './index.css'

class Calculation extends Component{
    state={inputValue:"", primeRes:"",isPrimeRes:false, factRes:'',isFactRes:false, fibRes:'',isFibRes:false, isShowError:false, palRes:'', isPalRes:false}

    onChangeInputValue=event=>{
        this.setState({inputValue:event.target.value, isPrimeRes:false, isFactRes:false, isFibRes:false, isShowError:false, isPalRes:false})
    }

    onCheckPrime=()=>{
        const {inputValue}=this.state 
        let result
        const num=parseInt(inputValue)
        if(inputValue===''){
            this.setState({isShowError:true})
        }
        else if (num===2){
            result="Prime"
        }
        else if(num<2){
            result="not a prime"
        }
        else{
        let isPrime=false
        for(let i=2;i<num;i++){
            if(num%i===0){
                isPrime=true
            }
            if(isPrime===false){
                result='Prime Number'
            }
            else{
                result='Not Prime Number'
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
        if(n<0){
            fibonnaci="Not in Fibbonacci Series"
        }
        else{
            for (let i=2;i<=n;i++){
                f.push(f[i-1]+f[i-2])
            }
            fibonnaci=f[n]
        }
        this.setState({fibRes:fibonnaci,isFibRes:true})
    }
    onCheckPalindrome=()=>{
        let {inputValue}=this.state 
        inputValue=inputValue.toLowerCase()
        let rev=''
        let pal
        for(let i=0;i<inputValue.length;i++){
            rev=inputValue[i]+rev
        }
        if(inputValue===rev){
            pal="is Palindrome"
        }
        else{
            pal="is Not Palindrome"
        }
        console.log(pal)
        this.setState({palRes:pal,isPalRes:true})
    }

    render(){
        const {inputValue,isPrimeRes,primeRes,factRes,isFactRes, fibRes, isFibRes, isShowError,palRes,isPalRes}=this.state
        return(
            <>
            <div className='inputContainer'>
                <p className="inputTitle">Enter a Number</p>
                <input className="input" type="text" onChange={this.onChangeInputValue} value={inputValue} />
                {isShowError?<p>Enter a valid number</p>:''}
            </div>
            <div className="calculationPartContainer">
            <div className="calculaterContainer">
                <button type="button" className="primeButton" onClick={this.onCheckPrime}>Prime Number</button>
                {isPrimeRes?<p className="result primeResult">{inputValue} is {primeRes}</p>:''}
            </div>
            <div className="calculaterContainer">
                <button className="factButton" onClick={this.onCalculateFactorial}>Factorial</button>
                {isFactRes?<p className="result">{inputValue} factorial is {factRes}</p>:''}
            </div>
            <div className="calculaterContainer">
                <button className="fibButton" onClick={this.onCheckFabinocci}>Fabinocci</button>
                {isFibRes?<p className="result">The fibonnaci number is {fibRes}</p>:''}
            </div>
            <div className="calculaterContainer">
                <button className="palButton" onClick={this.onCheckPalindrome}>Palindrome</button>
                {isPalRes?<p className="result">{inputValue} {palRes}</p>:''}
            </div>
            </div>
            </>
        )
    }
}

export default Calculation