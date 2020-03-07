import React from 'react';
import Tilt from 'react-tilt';
import firma from './firma.png';

const Logo = () => {
    return (
        <div className='tc ph5 pa3'>
            <Tilt className="Tilt br2 shadow-2 bg-black" options={{ max: 15}} >
                <div className="Tilt-inner pa3">
                        <img style={{paddingTop: '5px'}} alt='logo' src={firma}/>
                </div>
            </Tilt>
        </div>
        

    );
}

export default Logo;