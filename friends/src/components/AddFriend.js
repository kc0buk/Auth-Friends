import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useForm } from '../hooks/useForm'

const initialFormValues = {
    name: '',
    age: '',
    email: ''
}

const AddFriend = props => {
    const [values, handleChanges, resetForm] = useForm(initialFormValues)
    const { setFriends, Fetching } = props

    const postNewFriend = newFriend => {
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then( res => {
            console.log(res)
            setFriends(res.data)
            Fetching(false)
        })
        .catch( err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFriend = {
            name: values.name.trim(),
            age: values.age.trim(),
            email: values.email.trim()
        }
        postNewFriend(newFriend)
        resetForm()
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
            <h5>Add New Friend     </h5>
            <label>
                Name:&nbsp;
                <input 
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={handleChanges}
                />
            </label>
            <label>
                Age:&nbsp;
                <input 
                    name='age'
                    type='number'
                    value={values.age}
                    onChange={handleChanges}
                />
            </label>
            <label>
                Email:&nbsp;
                <input 
                    name='email'
                    type='text'
                    value={values.email}
                    onChange={handleChanges}
                />
                <button>Add Friend</button>
            </label>
        </form>
        </section>
    )
}

export default AddFriend