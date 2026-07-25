import {useState, useEffect} from 'react'


export default function Interview()
{

    const[state1,changestate1]=useState();

    const URL="https://ron-swanson-quotes.herokuapp.com/v2/quotes";

    useEffect(()=>{
const fetching=async ()=>{

    try{
        const response= await fetch(URL);
        const data= await response.json();
        console.log(data);
        changestate1(data)
    }
catch(error){
console.log(error);
}
}

fetching();

    },[])

    return (
        <>
      <div className="interview">
        {/* Rendering the fetched quotes */}
        {state1.map((item, id) => (
          <h1 key={id}>{item}</h1> // Return the h1 element with the quote
        ))}
      </div>

        </>
    )
}