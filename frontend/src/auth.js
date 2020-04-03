import react from 'react';


const auth = () => {
    const token = localStorage.getItem("token");

    return (token) ? true : false;
}

export default auth;