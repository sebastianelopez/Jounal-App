import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNotes, startUploading } from '../../actions/notes';


export const NotesAppBar = () => {

    const dispatch=useDispatch();

    const {active} = useSelector(state => state.notes)

    const handleSave = ()=>{
        dispatch(startSaveNotes(active));
    }

    const handlePictureUpload = ()=>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange=(e)=>{
        const file = e.target.files[0];

        if(file){
            dispatch(startUploading(file));
        }
    }

    return (
        <div className='notes__appbar'>
            <span>28 de agosto 2020</span>

            <input
                id='fileSelector'
                type="file"
                style={{display:'none'}}
                onChange={handleFileChange}
            />

            <div>
                <button 
                    className="btn"
                    onClick={handlePictureUpload}
                >
                    Imagen
                </button>
                <button 
                    className="btn"
                    onClick={handleSave}    
                >
                    Guardar
                </button>
            </div>
        </div>
    )
}
