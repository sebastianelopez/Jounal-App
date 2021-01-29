import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div className="journal__entry-picture"
                 style={{
                     backgroundSize: "cover",
                     backgroundImage: 'url(https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800)'
                 }}
            ></div>

            <div className='journal__entry-body'>
                    <p className="journal__entry-tittle">
                        Un nuevo dia
                    </p>
                    <p className="journal__entry-content">
                        Entonces este dia paso tal cosaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
                    </p>
            </div>
            
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
