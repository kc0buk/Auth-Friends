import React from 'react'

const Friend = props => {
    const { friends } = props
    // console.log(friends)

    return (
        <section>
            {
                friends.map(friend => 
                    <article key={friend.id}>
                        <p>{friend.name}</p>
                    </article>
                )
            }
        </section>
    )
}

export default Friend