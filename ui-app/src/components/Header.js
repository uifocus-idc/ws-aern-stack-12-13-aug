import React from 'react';
import { useHistory } from 'react-router';


const Header = () => {

    const history = useHistory();

    return <div className='header'>
            <h1 className="header-title">
                <a className="header-title-anchor" onClick={() => history.push('/')}>Night Owl</a>
            </h1>
    </div>;

};

export default Header;