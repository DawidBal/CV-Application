import React from 'react'

const Summary = ({data}) => {
    const {summary} = data
    return (
        <div className="preview__summary l-flexColumn l-gap-1">
            <h2 className="title">Summary</h2>
            <p className="text">{summary}</p>
        </div>
    )
}

export default Summary
