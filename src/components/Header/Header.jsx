import { Typography } from '@material-ui/core';
import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <>
            <header className='header'>
                <span>The Anime Database</span>
            </header>
            <Typography>Bu arada uzun zamandır durum güncellemesi yapmıyorduk, Mushoku Tensei'yi bitirdim öneririm.</Typography>
            <hr />
        </>
    );
};

export default Header;
