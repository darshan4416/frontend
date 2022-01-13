import React from 'react'
import '../currency/style.css'
import axios from 'axios'
import {useState} from 'react'

function Api() {

    const [data, setdata] = useState([]);

    function callApi(){
        let idx=0;
       
       
        // let retVal = fetch("https://jsonplaceholder.typicode.com/posts")
        // // We get the API response and receive data in JSON format
        // .then((response) => response.json())
        // .catch((error) => console.error(error));

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => setdata(res.data));

    
        
        // for(let i = 0; i<100; i++){
        //     console.log(retVal[0][i]);
        // }
    }


    return (
        <>
            <h3>Assignment-2</h3>

            <button onClick={()=>callApi()}>Call Api</button>
            
            {
                data.map(val => {
                    return (
                        <> 
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">{val.id}</th>
                                    <td>{val.title}</td>
                                    <td>{val.body}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </> 
                    );
                })}
                 
            


        </>
    )
}

export default Api
