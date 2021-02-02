import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch =useDispatch();

    const {active:note} = useSelector(state => state.notes)

    const [formValues,handleInputChange,reset]=useForm(note);

    const {body, title,url,id} = formValues;

    const activeId= useRef(note.id);

    useEffect(() => {
        
        if (note.id !== activeId.current){
            reset(note);
            activeId.current=note.id;
        }

    }, [note, reset]);

    useEffect(() => {
        
        dispatch(activeNote(formValues.id,{...formValues}));

    }, [formValues, dispatch])


    const handleDelete = () =>{
        dispatch(startDeleting(id));
    }

    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input 
                    type='text'
                    placeholder='Algun titulo'
                    className='notes__tittle-input'
                    autoComplete='off'
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                
                <textarea
                    placeholder='¿Que paso hoy?'
                    className='notes__textarea'
                    value={body}
                    name="body"
                    onChange={handleInputChange}
                ></textarea>
                {
                    (note.url) &&
                    <div className='notes__image'>
                        <img 
                            src={url}
                            alt='imagen'
                        />
                    </div>
                }
            </div>

            <button
                    className='btn btn-borrado'   
                    onClick={handleDelete}                 
             >
                Eliminar
            </button>                
                
            </div>
    )
}
