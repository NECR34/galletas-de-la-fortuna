import React from 'react'

const Cookie = ({fortuneData}) => {

    return (
        <div className="luck-cookie">
            
            <p className='parrafo-cookie'>"{fortuneData.phrase}"</p>
                
                <h5>Autor: {fortuneData.author}</h5>  
            
        </div>
    )
}

export default Cookie

