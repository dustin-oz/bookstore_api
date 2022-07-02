import React from 'react'

function Books(props) {
    return (
        <>
            <h1>Books from Rails API</h1>
            {props.books.map(book => {
                return <div key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.body}</p>
                </div>
            })
            }
        </>
    )
}

export default Books