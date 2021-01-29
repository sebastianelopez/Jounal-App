import React from 'react'

export const NothingSelected = () => {
    return (
        <div className='journal__main-nothing'>
            <p>
                Selecciona algo
                <br/>
                o crea una nueva entrada!                
            </p>
            <i className='far fa-star fa-4x mt-5'></i>
        </div>
    )
}
