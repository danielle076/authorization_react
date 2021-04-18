import React, {useState, useContext} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const {login} = useContext(AuthContext);
    const {handleSubmit, register} = useForm();
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState("");

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:3000/login', data);
            // console.log(result.data.accessToken);
            login(result.data.accessToken);
        } catch (e) {
            setError("Er is iets misgegaan bij het ophalen van de data.")
            console.error(e)
        }
        toggleLoading(false);
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                {error && <p>{error}</p>}
                {loading && <p>Data wordt geladen...</p>}

                <label htmlFor="email-field">
                    Emailadres:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        {...register("email")}
                    />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        {...register("password")}
                    />
                </label>

                <button
                    type="submit"
                    className="form-button"
                >
                    Inloggen
                </button>
            </form>
            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;