import React, {useState} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function SignUp() {
    const {handleSubmit, register} = useForm();
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState("");
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const history = useHistory();

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:3000/register', data);
            console.log(result);
            toggleRegisterSuccess(true);
            setTimeout(() => {
                history.push('/signin');
            }, 2000);
        } catch (e) {
            setError("Er is iets misgegaan bij het ophalen van de data.")
            console.error(e)
        }
        toggleLoading(false);
    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                {error && <p>{error}</p>}
                {loading && <p>Data wordt geladen...</p>}

                <label htmlFor="email-field">
                    Email:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        {...register("email")}
                    />
                </label>

                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        name="username"
                        {...register("username")}
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
                    Maak account aan
                </button>
                {registerSuccess === true && <p>Registreren is gelukt! Je kan nu inloggen.</p>}
            </form>

            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;