import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialValues = {
        username: '',
        password: ''
}

const Login = () => {
    const [credentials, setCredentials] =  useState(initialValues)
    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory() 

    const handleChanges = (event) => {
        setCredentials({
                ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const login = (event) => {
        event.preventDefault()
        setIsLoading(true)
        // console.log(event)
        // console.log(credentials)
        axiosWithAuth()
        .post('/api/login', credentials)
        .then( res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            setIsLoading(false)
            history.push('/friends')
            setCredentials(initialValues)
        })
        .catch( err => console.log(err))
    }

    return (
        <section>
            <form onSubmit={login}>
                <input 
                    type='text'
                    name='username'
                    placeholder='username'
                    value={credentials.username}
                    onChange={handleChanges}
                />
                <input 
                    type='password'
                    name='password'
                    placeholder='password'
                    value={credentials.password}
                    onChange={handleChanges}
                />
                {!isLoading ? <button>Log In</button> : <button disabled>Loading...</button>}
            </form>

        </section>
    )
}

export default Login