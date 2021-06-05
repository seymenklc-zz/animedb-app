import React, { useEffect, useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from './components/Header/Header';
import Navbar from './components/Navbar';
import Populer from './pages/Populer/Populer';
import Favorites from './pages/Favorites/Favorites';
import Search from './pages/Search/Search';

const App = () => {
    const [favorites, setFavorites] = useState([]);

    const addedNotify = () => toast('Successfully Added To Favorites!');
    const removeNotify = () => toast.warning('Successfully Deleted.');

    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`;
    };

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favorites', JSON.stringify(items));
    };

    const addFavorite = (anime) => {
        const newFavoritesList = [...favorites, anime];
        setFavorites(newFavoritesList);
        saveToLocalStorage(newFavoritesList);
        addedNotify();
    };

    const removeFavorite = (id) => {
        const newFavoritesList = favorites.filter((fav) => fav.id !== id);
        setFavorites(newFavoritesList);
        removeNotify();
    };

    useEffect(() => {
        const favAnime = localStorage.getItem('favorites');
        if (favAnime) {
            setFavorites(JSON.parse(favAnime));
        } else {
            return null;
        }
    }, [setFavorites]);

    return (
        <>
            <Router>
                <Container>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={() => <Populer handleFavoritesClick={addFavorite} truncateOverview={truncateOverview} />} />
                        <Route path='/favorites' component={() => <Favorites favorites={favorites} removeFavorite={removeFavorite} truncateOverview={truncateOverview} />} />
                        <Route path='/search' component={() => <Search truncateOverview={truncateOverview} />} />
                    </Switch>
                    <Navbar />
                </Container>
            </Router>
            <ToastContainer />
        </>
    );
};

export default App;
