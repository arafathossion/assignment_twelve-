import { useEffect, useState } from "react"

const UseToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email) {
            const url = `http://localhost:5000/user/${email}`
            fetch(url, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentUser),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken' , accessToken);
                    setToken(accessToken)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [user])
    return [token]
}
export default UseToken;