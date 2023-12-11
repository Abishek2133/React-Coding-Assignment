import React from "react";
import UserContext from "../../Context/UserContext";
import { useContext } from "react";

function FormProfile() {
    const {user} = useContext(UserContext)

    if(!user) {
        return (
            <h1>Not Logged In</h1>
        )
    }
    return (
        <div>
            <h1>Profile:{user.username}</h1>
        </div>
    );

}

export default FormProfile;