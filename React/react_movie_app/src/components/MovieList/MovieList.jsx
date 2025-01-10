import React from 'react'
import './MovieList.css'

const MovieList = (props) => {
    return (
        <div className="movies-list">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.movies.map((item, index) => {
                            if (props.genres === "All" || item.genre === props.genres) {
                                return <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.year}</td>
                                </tr>
                            }
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default MovieList