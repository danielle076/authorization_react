import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import {Link} from 'react-router-dom';

function Profile() {
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <>
            <h1>Profielpagina</h1>
            <h2>Gegevens</h2>
            <p><strong>Gebruikersnaam:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <h2>Afgeschermde content voor ingelogde gebruikers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;