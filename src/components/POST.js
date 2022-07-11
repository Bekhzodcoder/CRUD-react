import React, {useState} from 'react';

const POST = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    function myFunc(){
        const data = {name, email, number}
        fetch('https://62c2a546876c4700f529cd71.mockapi.io/react',{
            method:'POST',
            headers:{
                'Accept':'Application/json',
                'Content-type':'Application/json'
            },
            body:JSON.stringify(data)
        })
        .then(result=>{
            // console.warn('result', result);
            result.json().then((resp)=>{
                console.warn('resp', resp);
            })
        })
    }

    const style = {
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
    }
    return (
        <>
        <div style={{style}}>
            <input type='text' name='name' value={name} onChange = {(e)=>setName(e.target.value)} />   
            <input type='text' nam='email' value={email} onChange = {(e)=>setEmail(e.target.value)}/>   
            <input type='text' name='number' value={number} onChange = {(e)=>setNumber(e.target.value)}/>   
            <button type='button' onClick={myFunc}>Jo'natish</button>
        </div>
        </>
    );
};
export default POST;