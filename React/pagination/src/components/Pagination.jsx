import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'

const Pagination = () => {

    const { noOfPages } = useContext(StoreContext);

    return (
        <div className='pagination'>
            {
                [...Array(noOfPages).keys()].map((n) => {
                    return <span key={n}>{n}</span>
                })
            }
        </div>
    )
}

export default Pagination;