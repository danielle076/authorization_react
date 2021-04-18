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

    useEffect(() => {
        const token = localStorage.getItem('tokenFrummel');

        if (token !== undefined && authState.user === null) {
            console.log("Er is een token")
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    }, []);


    async function loginFunction(jwtToken) {
        console.log(jwtToken);
        const decoded = jwt_decode(jwtToken);
        const userId = decoded.sub;
        console.log("DECODED JWT:", decoded)
        localStorage.setItem('tokenFrummel', jwtToken);

        try {
            const result = await axios.get(`http://localhost:3000/600/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(result)
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            })
            setTimeout(() => {
                history.push('/profile');
            }, 2000);

        } catch (e) {
            console.error(e);
        }
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