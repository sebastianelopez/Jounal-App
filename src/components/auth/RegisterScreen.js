import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    
    const dispatch = useDispatch();
    const {msgError} = useSelector(state=>state.ui);
    

    const [formValues,handleInputChange]=useForm({
        name: 'Carlos',        
        email: 'carlos@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password,password2} = formValues;

    const handleRegister = (e)=>{
        e.preventDefault(); 
        
        if(isFormValid(true)){
            dispatch(startRegisterWithEmailPasswordName(email, password,name));
        }
        
    }

    const isFormValid = ()=>{

        if(name.trim().length===0){
            dispatch(setError('Name is required'));
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));
            return false;
        }else if(password!==password2){
            dispatch(setError('La contraseñas no coinciden'));
            return false;
        }else{
            dispatch(removeError());
            return true;
        }      

    }


    return (
        <>
            <h3 className='auth__tittle'>Registrate</h3>

            <form onSubmit={handleRegister}>
                {
                    msgError &&
                    <div className='auth__alert-error'>
                        {
                            msgError
                        }
                    </div>
                }
                <input
                    className="auth__input"
                    type='text'
                    placeholder='Nombre'
                    name='name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type='text'
                    placeholder='Email'
                    name='email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type='password'
                    placeholder='Ingrese contraseña'
                    name='password'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type='password'
                    placeholder='Confirme contraseña'
                    name='password2'
                    autoComplete='off'
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    className='btn btn-primary btn-block mb-5' 
                    type='submit'
                >
                    Registrate
                </button>
                
                

                <Link to='/auth/login'
                      className='link'
                >
                    ¿Ya estas registrado?
                </Link>

                
            </form>
        </>
    )
}