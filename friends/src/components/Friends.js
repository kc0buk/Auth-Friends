import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friend from './Friend'

const Friends = () => {
    const [friendsArr, setFriendsArr] = useState([])
    const [fetching, setFetching] = useState(true)

    const getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then( res => {
                console.log(res)
                setFriendsArr(res.data)
                setFetching(false)
                // console.log(friendsArr)
            })
            .catch( err => console.log(err))
    }
    
    useEffect( () => {
        getData()
    }, [])

    return (
        <section>
            {fetching ? <h4>Loading ...</h4> : <Friend friends={friendsArr} />}
        </section>
    )
}

export default Friends