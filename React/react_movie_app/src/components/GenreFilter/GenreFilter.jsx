import React, { useEffect, useState } from 'react'
import './GenreFilter.css'

const GenreFilter = (props) => {

    return (
        <div className='GenreFilter'>
            <h2 className="title">Filter By Genre</h2>
            <div className="genre-btns">
                <button className='btn' onClick={() => props.setGenre("All")}>All</button>
                {
                    props.genresList.map((btn, index) => {
                        return <button className='btn' onClick={() => { props.setGenre(btn) }} key={index}>{btn}</button>
                    })
                }
            </div>
        </div>
    )
}

export default GenreFilter