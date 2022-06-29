import React, {useState, useEffect} from 'react'
import {initialValueUser} from "../../constants/User";
import {handleOnChange} from "../../services/helpers";


export default function LoginPage({onSubmit}) {
    const [user, setUser] = useState(initialValueUser);


    return (
        <>
            <div className="container modalContainer">
                <div className=" modal login">
                    <h1>Login page</h1>
                    <input type="email" className="input" placeholder="Enter email" value={user.email || ''}
                           onChange={event => handleOnChange(event, "email", setUser)}/>
                    <input type="password" className="input" placeholder="Enter password" value={user.password || ''}
                           onChange={event => handleOnChange(event, "password", setUser)}/>
                    <button className="button" onClick={() => onSubmit(user)}>Login</button>
                </div>
            </div>

        </>
    )
}