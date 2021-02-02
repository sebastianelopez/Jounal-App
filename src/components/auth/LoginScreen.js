import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state=>state.ui);

    const [formValues,handleInputChange]=useForm({
        email: '',
        password: ''
    });

    const {email, password} = formValues;

    const handleLogin = (e)=>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password));
    }

    const handleGoogleLogin = ()=>{        
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className='auth__tittle'>Login</h3>

            <form 
                onSubmit={handleLogin}
                className='animate__animated animate__fadeIn animate__faster'
            >
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
                    placeholder='Contraseña'
                    name='password'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    className='btn btn-primary btn-block' 
                    type='submit'
                    disabled={loading}
                >
                    Ingresar
                </button>

                <div className="auth__social-networks">
                    <p>Ingresa con tus redes sociales</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                

                <Link to='/auth/register'
                      className='link'
                >
                    Crearse una nueva cuenta
                </Link>

                
            </form>
        </>
    )
}
