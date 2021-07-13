import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, CircularProgress } from '@material-ui/core';

import SinglePopulerAnime from '../../components/SinglePopulerAnime';

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        width: 390,
        display: 'inline-block',
        whiteSpace: 'nowrap',
        marginRight: 0,
        marginLeft: 0,
        marginTop: 5
    }
});

const Populer = ({ truncateOverview, handleFavoritesClick }) => {
    const [populer, setPopuler] = useState([]);
    const [loading, setLoading] = useState(true);

    const classes = useStyles();

    const getPopulerAnime = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity');
            if (data.top) setPopuler(data.top);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPopulerAnime();
        return () => setPopuler([]);
    }, []);

    return (
        <Container>
            <Typography variant='h4' style={{ color: '#4668a6' }}>Populer Shows</Typography>

            {!loading ? (populer.map(pop => (
                <div key={pop.mal_id} className={classes.root}>
                    <Grid container spacing={2} direction='row'>
                        <SinglePopulerAnime
                            rank={pop.rank}
                            title={pop.title}
                            image={pop.image_url}
                            score={pop.score}
                            url={pop.url}
                            type={pop.type}
                            startDate={pop.start_date}
                            endDate={pop.end_date}
                            episodes={pop.episodes}
                            members={pop.members}
                            id={pop.mal_id}
                            handleFavoritesClick={handleFavoritesClick}
                            truncateOverview={truncateOverview}
                        />
                    </Grid>
                </div>
            ))) : <CircularProgress />}
        </Container>
    );
};

export default Populer;;
