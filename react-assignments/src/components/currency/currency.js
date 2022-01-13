import React, {useState} from "react";
import './style.css';


function Currency() {

    const [country, setCountry] = useState("rupee0");
    const [convertCountry, setconvertCountry] = useState("rupee₹");
    const [inputval, setInputval] = useState(0);
    const [ans, setAns] = useState(0);

    const data = [
        { name: 'India Rupee', symbol: '₹', value: { '₹': 1, '$': 0.013450394, '৳': 1.1543927 } }, 
        { name: 'United States Dollar', symbol: '$', value: { '₹': 74.3417, '$': 1, '৳': 85.90755} },
        { name: 'Bangladeshi taka', symbol: '৳', value: { '₹': 0.866256, '$': 0.0116404, '৳': '1'} }, 
      ]

    function calculate(e){
        console.log({country, convertCountry, inputval});

        const idx = country[country.length-2];
        const symbol = country[country.length-1];
        const to_symbol = convertCountry[convertCountry.length-1];
        

        const ans = inputval * data[idx].value[to_symbol];
        console.log(ans);

        setAns(ans);
    }
   
    return (
        <div>
            {/* <label for="currency">Select currency</label> */}
            <select  value={country} onChange={(e)=>setCountry(e.target.value)} name="currency" id="curr">
            <option value="rupee0₹">Indian Rupee</option>
            <option value="dollar1$">United States Dollar</option>
            <option value="taka2৳">Bangladesh Taka</option>
            </select>
            
            <input value={inputval} onChange={(e)=>setInputval(e.target.value)} type="text" placeholder="Input the value"/>
           
            <select value={convertCountry} onChange={(e)=>setconvertCountry(e.target.value)} name="currency" id="curr">
            <option value="rupee₹">Indian Rupee</option>
            <option value="dollar$">United States Dollar</option>
            <option value="taka৳">Bangladesh Taka</option>
            </select>
            <button onClick={(e)=>calculate(e)}>Convert</button>
            
            {ans?(<span>{ans}</span>):(<span></span>)}
        </div>
    )
}

export default Currency
