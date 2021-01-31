import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const {active:note} = useSelector(state => state.notes)

    const [formValues,handleInputChange,reset]=useForm(note);

    const {body, title} = formValues;

    const activeId= useRef(note.id);

    useEffect(() => {
        
        if (note.id !== activeId.current){
            reset(note);
            activeId.current=note.id;
        }

    }, [note, reset])

    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input 
                    type='text'
                    placeholder='Algun titulo'
                    className='notes__tittle-input'
                    autoComplete='off'
                    value={title}
                    onChange={handleInputChange}
                />
                
                <textarea
                    placeholder='¿Que paso hoy?'
                    className='notes__textarea'
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                {
                    (note.url) &&
                    <div className='notes__image'>
                        <img 
                            src='https://ih1.redbubble.net/image.1003666205.6203/ra,longsleeve,x2000,fafafa:ca443f4786,front-c,190,60,1000,1000-bg,f8f8f8.jpg'
                            alt='fan de react'
                        />
                    </div>
                }
            </div>
        </div>
    )
}
