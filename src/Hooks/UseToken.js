import { useEffect, useState } from "react"

const UseToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {email: email};
        console.log('user', currentUser)
    }, [user])
    return [token]
}
export default UseToken;