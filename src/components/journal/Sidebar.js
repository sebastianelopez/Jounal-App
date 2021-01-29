import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogOut } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogOut = ()=>{
        dispatch(startLogOut());
    }

    return (
        <aside className="journal__sidebar"> 
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-flag"> </i>
                    <span>  Sebastian</span>
                </h3>
                <button 
                    className="btn"
                    onClick={handleLogOut}
                >
                    Salir
                </button>
            </div>
            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">Nueva entrada</p>                
            </div>
            <JournalEntries />
        </aside>
    )
}
