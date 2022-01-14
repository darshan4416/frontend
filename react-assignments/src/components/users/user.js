import React from 'react';
import { useState, useEffect } from 'react'

function User() {

   const [users, setusers] = useState([]);

   useEffect(async () =>{
    const getData = await fetch('personApi.json')
    console.log(getData)
    const data = await getData.json()
    console.log(data)
    setusers(data);
}, [])
    
    function handleName(e){
        
       users.sort((a,b)=>{
           return a.name.toLowerCase()>b.name.toLowerCase()?1:-1;
       })
    //    console.log(users);
       setusers([...users]);
       let radio = document.querySelector('input[type=radio][name=age]:checked');
        radio.checked = false;
    }
    function handleAge(e){

        users.sort((a,b)=>{
            return a.age>b.age?1:-1;
        });
        setusers([...users]);
        let radio = document.querySelector('input[type=radio][name=person]:checked');
        radio.checked = false;
    }
    
    
    return (
        <>
            <h1>Assignment 3</h1>

            <input onChange={(e)=>handleName(e)} type="radio" id="name" name="person" value="Name" />
            <label for="name">name</label><br/>
           
            <input onChange={(e)=>handleAge(e)} type="radio" id="age" name="age" value="Age" />
            <label for="age">age</label><br/>
            
            
            
            { users.map(user=>{
                
                return (
                    <div>
                        <h2>{user.id}-{user.name} {user.age}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default User
