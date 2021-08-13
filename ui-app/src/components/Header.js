import React from 'react';
import { useHistory } from 'react-router';


const Header = () => {

    const history = useHistory();

    return <div className='header-panel'>
        <a className='h1' onClick={() => history.push('/')}>Night Owl</a>
    </div>;

};

export default Header;