// import { useState, useContext } from 'react';
// import '../App.css';
// import loginRequest from '../api/loginRequest';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { TokenContext } from '../App';
// // import { useContext } from 'react';
// export const LoginPage = () => {
//     const [userID, setUserID] = useState(''); // Add username state
//     // const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { setToken } = useContext(TokenContext); // Add token state

//     const handleLogin = async (event) => {
//         console.log('handleLogin called'); // Add this line
//         event.preventDefault();

//         try {
//             console.log('Login attempted'); // Add this line
//             const response = await loginRequest(userID);
//             console.log('Full response:', response);
//             if (response.token) {
//                 setToken(response.token);
//                 const from = location.state?.from || '/usersuggestionspage';
//                 navigate(from);
//             }
//         } catch (error) {
//             setError(error.message);
//             console.error('Login failed:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Login</h1>
//             <div style={{ color: 'red' }}>{error}</div>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="text" // Change to text input for username
//                     placeholder="userID" // Add a placeholder
//                     name="userID" // Add a name attribute
//                     value={userID} // Use username state
//                     onChange={(e) => setUserID(e.target.value)} // Update username state
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

import { useContext, useState } from 'react';
import loginRequest from '../api/loginRequest';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../App';
import '../LoginPage.css';



export const LoginPage = () => {
    const [id, setId] = useState('');
    const [error, setError] = useState('');
    const { setToken } = useContext(TokenContext); // Add token state
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        loginRequest(id)
            .then(({ token }) => {
                setToken(token);
                if (id.startsWith('manager') || id.startsWith('ceo')) {
                    navigate(`/dashboard/${id}`);
                } else {
                    navigate(`/userSuggestions/${id}`);
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    };



    return (
        <div>
            <h1 style={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }
            }>Login</h1>
            <div style={{
                color: 'red',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',

            }}>{error}</div>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    style={{
                        display: 'grid',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto',



                    }}
                />
                <button
                    style={{
                        display: 'grid',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto',
                        marginTop: '10px',

                    }}
                >Login</button>
            </form>
        </div >
    );
};