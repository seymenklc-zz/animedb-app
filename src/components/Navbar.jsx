import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        width: '30%',
        position: 'fixed',
        borderRadius: '5px',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: '#6495ed',
        marginLeft: '35%'
    },
});

const Navbar = () => {
    const [value, setValue] = useState(0);

    const history = useHistory();
    const classes = useStyles();

    const handleChange = (event, newValue) => setValue(newValue);

    useEffect(() => {
        if (value === 0) history.push('/');
        else if (value === 1) history.push('/favorites');
        else if (value === 2) history.push('/search');
    }, [value, history]);

    return (
        <Container>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction style={{ color: '#F8F8FF' }} label="Populer" icon={<MovieIcon />} />
                <BottomNavigationAction style={{ color: '#F8F8FF' }} label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction style={{ color: '#F8F8FF' }} label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Container>
    );

};
export default Navbar;