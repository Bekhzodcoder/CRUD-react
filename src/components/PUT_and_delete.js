import React, {useState, useEffect} from 'react';

const PUT = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [userId, setUserId] = useState(null)

    useEffect(()=>{
        getUsers();
        getList();
    }, [])

    function getUsers(){
        fetch('https://62c2a546876c4700f529cd71.mockapi.io/react')
            .then((result)=>{
                result.json().then(resp=>{
                    setUsers(resp)
                    setName(resp[0].name)
                    setEmail(resp[0].email)
                    setNumber(resp[0].number)
                    setUserId(resp[0].id)
                })
            })
    }

    function selectUser(id){
        let item = users[id-1];
        setName(item.name)
        setEmail(item.email)
        setNumber(item.number)
        setUserId(item.id)

    }

    function deleteUser(id){
        fetch(`https://62c2a546876c4700f529cd71.mockapi.io/react/${id}`, {
            method: 'DELETE'
        })
            .then(result=>{
                result.json().then(resp=>{
                    getList()
                })
            })
    }

    function getList(){
        fetch('https://62c2a546876c4700f529cd71.mockapi.io/react')
            .then(result=>{
                result.json().then(resp=>{
                    setUsers(resp)
                })
            })
    }

    function updateUser(){
        let item = {name, email, number, userId}
        fetch(`https://62c2a546876c4700f529cd71.mockapi.io/react/${userId}`, {
            method:'PUT',
            headers:{
                'Accept':'Application/json',
                "Content-Type":'Application/json'
            },
            body: JSON.stringify(item)
        })
        .then((result)=>{
            result.json().then(resp=>{
                getUsers();
            })
        })
    }

    return (
        <>
             <table border='1'>
                <tr>
                    <td>ID</td>
                    <td>name</td>
                    <td>email</td>
                    <td>number</td>
                    <td colSpan={2}>Delete and PUT</td>
                </tr>
                {users.map((res, i)=>(
                    <tr key={i}>
                    <th>{res.id}</th>
                    <th>{res.name}</th>
                    <th>{res.email}</th>
                    <th>{res.number}</th>
                    <th><button onClick={()=>deleteUser(res.id)}>Delete</button></th>
                    <th><button onClick={()=>selectUser(res.id)}>Update</button></th>
                   </tr>
                ))}
            </table>

            <div>
            <input type='text' name='name' value={name} onChange = {(e)=>setName(e.target.value)} />   
            <input type='text' nam='email' value={email} onChange = {(e)=>setEmail(e.target.value)}/>   
            <input type='text' name='number' value={number} onChange = {(e)=>setNumber(e.target.value)}/>   
            <button type='button' onClick={updateUser}>Update user</button>
        </div>
        </>
    );
};

export default PUT;