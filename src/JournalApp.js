import React from 'react';
import {Provider} from 'react-redux';
import { AppRouter } from './components/routers/AppRouter';
import { store } from './store/store';


export const JournalApp = () => {
    return (
        <Provider store={store}> 
            <AppRouter />
        </Provider>
        
    )
}


/*El Provider provee informacion a toda la aplicacion, en este caso el store */