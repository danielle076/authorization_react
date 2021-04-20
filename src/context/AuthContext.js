import React, {createContext, useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    async function fetchUserData(jwtToken) {
        const decoded = jwt_decode(jwtToken);
        const userId = decoded.sub;

        try {
            const result = await axios.get(`http://localhost:3000/600/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            })

        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('tokenFrummel');

        if (token !== null && authState.user === null) {
            // console.log("Er is een token")
            fetchUserData(token);

        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    }, []);

    async function loginFunction(jwtToken) {
        // console.log(jwtToken);
        const decoded = jwt_decode(jwtToken);
        const userId = decoded.sub;
        // console.log("DECODED JWT:", decoded)
        localStorage.setItem('tokenFrummel', jwtToken);

        fetchUserData(jwtToken);

        setTimeout(() => {
            history.push('/profile');
        }, 2000);
    }

    function logoutFunction() {
        console.log('Logout!')
    }

    const data = {
        ...authState,
        login: loginFunction,
        logout: logoutFunction,
    }

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'done'
                ? children
                : <p>Loading...</p>
            }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;