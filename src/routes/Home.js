import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'
function Cities(){
    return(
        <div className='cities'>
            <Link to='/seoul' className='seoul'>Seoul</Link>
            <Link to='/jeju' className='jeju'>Jeju</Link>
            <Link to='/gwangju' className='gwangju'>Gwangju</Link>
            <Link to='/busan' className='busan'>Busan</Link>
        </div>
    )
}

export default Cities;