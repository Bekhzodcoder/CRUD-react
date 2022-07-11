import React, {useState, useEffect} from 'react';

const GET = () => {
    const [get, setGet] = useState([])
    useEffect(()=>{
        fetch('https://62c2a546876c4700f529cd71.mockapi.io/react')
            .then((result)=>{
                result.json().then((res)=>{
                    setGet(res)
                })
            })
    }, [])
    return (
        <>
            <table border='1'>
                <tr>
                    <td>ID</td>
                    <td>name</td>
                    <td>email</td>
                    <td>number</td>
                </tr>
                {get.map((res)=>(
                    <tr>
                    <th>{res.id}</th>
                    <th>{res.name}</th>
                    <th>{res.email}</th>
                    <th>{res.number}</th>
                   </tr>
                ))}
            </table>
        </>
    );
};

export default GET;