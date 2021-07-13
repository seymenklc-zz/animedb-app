import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { Container, InputAdornment, TextField, CircularProgress, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import SortedAnime from '../../components/SortedAnime';

const useStyles = makeStyles({
    root: {
        width: 390,
        display: 'inline-block',
        whiteSpace: 'nowrap',
        marginRight: 0,
        marginLeft: 0,
        marginTop: 5
    }
});

const Search = ({ truncateOverview }) => {
    const [search, setSearch] = useState('Naruto');
    const [animeRes, setAnimeRes] = useState([]);
    const [loading, setLoading] = useState(false);

    const classes = useStyles();

    const fetchAnime = async (query) => {
        try {
            setLoading(true);
            const { data } = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`);
            if (data.results) setAnimeRes(data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAnime(search);
    }, [search]);

    return (
        <Container>
            <TextField
                autoFocus
                fullWidth
                label='Search'
                variant='outlined'
                placeholder='Search Anime...'
                style={{ marginTop: '8px', marginBottom: '8px', width: '149vh' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
            <br />
            {!loading ? (animeRes.map(anime => (
                <div key={anime.mal_id} className={classes.root}>
                    <Grid container spacing={2} direction='row'>
                        <SortedAnime
                            rank={anime.rank}
                            title={anime.title}
                            image={anime.image_url}
                            score={anime.score}
                            url={anime.url}
                            type={anime.type}
                            synopsis={anime.synopsis}
                            truncateOverview={truncateOverview}
                            episodes={anime.episodes}
                            members={anime.members}
                        />
                    </Grid>
                </div>
            ))) : <CircularProgress />}
        </Container>
    );
};

export default Search;
