import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input 
                    type='text'
                    placeholder='Algun titulo'
                    className='notes__tittle-input'
                    autoComplete='off'
                />
                
                <textarea
                    placeholder='¿Que paso hoy?'
                    className='notes__textarea'
                ></textarea>

                <div className='notes__image'>
                    <img 
                        src='https://ih1.redbubble.net/image.1003666205.6203/ra,longsleeve,x2000,fafafa:ca443f4786,front-c,190,60,1000,1000-bg,f8f8f8.jpg'
                        alt='fan de react'
                    />
                </div>
            </div>
        </div>
    )
}
